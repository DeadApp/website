import { describe, expect, it } from 'vitest';
import {
  APPSFLYER_DEFAULT_ONELINK_URL,
  getAppsFlyerFallbackUrl,
} from '@/lib/appsflyer-smart-script';

describe('website attribution fallback', () => {
  it('preserves incoming campaign attribution when Smart Script is unavailable', () => {
    const destination = new URL(
      getAppsFlyerFallbackUrl(
        '?utm_source=instagram&utm_campaign=october&utm_medium=bio&utm_content=post-a&fbclid=click-id'
      )
    );
    expect(destination.origin + destination.pathname).toBe(
      'https://link.dead.app/4rpi'
    );
    expect(destination.searchParams.get('pid')).toBe('instagram');
    expect(destination.searchParams.get('c')).toBe('october');
    expect(destination.searchParams.get('af_channel')).toBe('bio');
    expect(destination.searchParams.get('af_ad')).toBe('post-a');
    expect(destination.searchParams.get('fbclid')).toBe('click-id');
  });

  it('uses explicit AppsFlyer attribution before UTM values and defaults empty values', () => {
    const destination = new URL(
      getAppsFlyerFallbackUrl(
        '?pid=social&c=brand&af_channel=bio&utm_source=ignored&utm_campaign=ignored&utm_medium=ignored&af_ad=clip'
      )
    );
    expect(destination.searchParams.get('pid')).toBe('social');
    expect(destination.searchParams.get('c')).toBe('brand');
    expect(destination.searchParams.get('af_channel')).toBe('bio');
    expect(destination.searchParams.get('af_ad')).toBe('clip');
    expect(getAppsFlyerFallbackUrl('?pid=&c=&af_channel=')).toBe(
      APPSFLYER_DEFAULT_ONELINK_URL
    );
  });

  it('ignores incoming redirect overrides and unapproved app routes', () => {
    const destination = new URL(
      getAppsFlyerFallbackUrl(
        '?deep_link_value=unapproved&af_r=https://example.com&af_web_dp=https://example.com&af_sub1=a&af_sub1=b'
      )
    );
    expect(destination.searchParams.get('deep_link_value')).toBe('home');
    expect(destination.searchParams.has('af_r')).toBe(false);
    expect(destination.searchParams.has('af_web_dp')).toBe(false);
    expect(destination.searchParams.getAll('af_sub1')).toEqual(['a', 'b']);
  });
});
