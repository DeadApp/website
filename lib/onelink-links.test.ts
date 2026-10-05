import { describe, expect, it } from 'vitest';
import { getOneLinkDestination, ONELINK_LINKS } from '@/lib/onelink-links';

describe('social OneLink destinations', () => {
  it('uses secure shortlinks for every bio and app sharing without query parameters', () => {
    for (const path of Object.keys(
      ONELINK_LINKS
    ) as (keyof typeof ONELINK_LINKS)[]) {
      const destination = new URL(getOneLinkDestination(path, {}));
      expect(destination.hostname).toBe('link.dead.app');
      expect(destination.pathname).toBe(`/4rpi${path}`);
      expect(destination.search).toBe('');
    }
  });

  it('preserves campaign parameters through a long link without altering the bio source', () => {
    const destination = new URL(
      getOneLinkDestination('/ig', {
        utm_campaign: 'october',
        fbclid: 'click-id',
        af_sub1: ['post-a', 'post-b'],
        pid: 'overridden-source',
        c: 'overridden-campaign',
        af_r: 'https://example.com/redirect',
      })
    );
    expect(destination.pathname).toBe('/4rpi');
    expect(destination.searchParams.get('pid')).toBe('Social_instagram');
    expect(destination.searchParams.get('c')).toBe('brand');
    expect(destination.searchParams.get('af_channel')).toBe('bio');
    expect(destination.searchParams.get('deep_link_value')).toBe('home');
    expect(destination.searchParams.get('utm_campaign')).toBe('october');
    expect(destination.searchParams.get('fbclid')).toBe('click-id');
    expect(destination.searchParams.getAll('af_sub1')).toEqual([
      'post-a',
      'post-b',
    ]);
    expect(destination.searchParams.has('af_r')).toBe(false);
  });

  it('keeps app sharing separate from brand social acquisition', () => {
    const destination = new URL(
      getOneLinkDestination('/share', { utm_content: 'joke' })
    );
    expect(destination.searchParams.get('pid')).toBe('app_share');
    expect(destination.searchParams.get('c')).toBe('app_share');
    expect(destination.searchParams.get('af_channel')).toBe('share');
  });

  it('does not append unsupported or undefined parameters to a secure shortlink', () => {
    expect(
      getOneLinkDestination('/tt', {
        arbitrary: 'value',
        utm_source: undefined,
      })
    ).toBe(ONELINK_LINKS['/tt']);
  });
});
