import { describe, expect, it } from 'vitest';
import {
  buildAndroidIntentUrl,
  buildInstagramExtBrowserUrl,
  buildItmsAppsUrl,
  buildMetaEscapeSchemes,
  buildSafariEscapeUrl,
} from '@/lib/meta-browser-escape';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/store-links';

const DESTINATION = 'https://link.dead.app/4rpi/ig';

describe('meta escape URL builders', () => {
  it('builds Instagram extbrowser URL', () => {
    expect(buildInstagramExtBrowserUrl(DESTINATION)).toBe(
      `instagram://extbrowser/?url=${encodeURIComponent(DESTINATION)}`
    );
  });

  it('builds itms-apps URL from App Store HTTPS URL', () => {
    expect(buildItmsAppsUrl(APP_STORE_URL)).toBe(
      'itms-apps://apps.apple.com/app/id6749788456'
    );
  });

  it('builds x-safari escape URL', () => {
    expect(buildSafariEscapeUrl(DESTINATION)).toBe(`x-safari-${DESTINATION}`);
  });

  it('builds Android intent URL', () => {
    expect(buildAndroidIntentUrl(DESTINATION)).toBe(
      `intent://link.dead.app/4rpi/ig#Intent;scheme=https;S.browser_fallback_url=${encodeURIComponent(DESTINATION)};end`
    );
  });
});

describe('buildMetaEscapeSchemes', () => {
  it('returns Instagram/Threads iOS schemes in order', () => {
    expect(
      buildMetaEscapeSchemes({
        destinationUrl: DESTINATION,
        app: 'instagram',
        os: 'ios',
        appStoreUrl: APP_STORE_URL,
      })
    ).toEqual([
      {
        kind: 'assign',
        href: buildInstagramExtBrowserUrl(DESTINATION),
      },
      {
        kind: 'assign',
        href: buildItmsAppsUrl(APP_STORE_URL),
      },
    ]);

    expect(
      buildMetaEscapeSchemes({
        destinationUrl: DESTINATION,
        app: 'threads',
        os: 'ios',
        appStoreUrl: APP_STORE_URL,
      })
    ).toHaveLength(2);
  });

  it('does not fall through to the App Store for a Play Store destination', () => {
    expect(
      buildMetaEscapeSchemes({
        destinationUrl: PLAY_STORE_URL,
        app: 'instagram',
        os: 'ios',
      })
    ).toEqual([
      { kind: 'assign', href: buildInstagramExtBrowserUrl(PLAY_STORE_URL) },
    ]);
  });

  it('returns Safari open scheme for Facebook/Messenger on iOS', () => {
    expect(
      buildMetaEscapeSchemes({
        destinationUrl: DESTINATION,
        app: 'facebook',
        os: 'ios',
      })
    ).toEqual([{ kind: 'open', href: buildSafariEscapeUrl(DESTINATION) }]);

    expect(
      buildMetaEscapeSchemes({
        destinationUrl: DESTINATION,
        app: 'messenger',
        os: 'ios',
      })
    ).toEqual([{ kind: 'open', href: buildSafariEscapeUrl(DESTINATION) }]);
  });

  it('returns Android intent for Meta apps on Android', () => {
    expect(
      buildMetaEscapeSchemes({
        destinationUrl: DESTINATION,
        app: 'instagram',
        os: 'android',
      })
    ).toEqual([{ kind: 'assign', href: buildAndroidIntentUrl(DESTINATION) }]);
  });

  it('returns no schemes for unsupported OS', () => {
    expect(
      buildMetaEscapeSchemes({
        destinationUrl: DESTINATION,
        app: 'instagram',
        os: 'other',
      })
    ).toEqual([]);
  });
});
