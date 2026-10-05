import { describe, expect, it } from 'vitest';
import { APPSFLYER_DEFAULT_ONELINK_URL } from '@/lib/appsflyer-smart-script';
import { resolveGoDestination } from '@/lib/go-destination';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/store-links';

describe('resolveGoDestination', () => {
  it('returns the default when to is missing', () => {
    expect(resolveGoDestination(undefined)).toBe(APPSFLYER_DEFAULT_ONELINK_URL);
    expect(resolveGoDestination(null)).toBe(APPSFLYER_DEFAULT_ONELINK_URL);
  });

  it('allows https OneLink destinations', () => {
    for (const url of [
      'https://link.dead.app/4rpi/ig',
      'https://link.dead.app/4rpi?pid=website&deep_link_value=home',
      'https://deadapp.onelink.me/4rpi/tt',
    ]) {
      expect(resolveGoDestination(url)).toBe(url);
    }
  });

  it('allows App Store and Play Store hosts', () => {
    expect(resolveGoDestination(APP_STORE_URL)).toBe(APP_STORE_URL);
    expect(resolveGoDestination(PLAY_STORE_URL)).toBe(PLAY_STORE_URL);
  });

  it('rejects non-https and unknown hosts', () => {
    expect(resolveGoDestination('http://link.dead.app/4rpi/ig')).toBe(
      APPSFLYER_DEFAULT_ONELINK_URL
    );
    expect(resolveGoDestination('https://dead.onelink.me/42xK/ig')).toBe(
      APPSFLYER_DEFAULT_ONELINK_URL
    );
    expect(resolveGoDestination('https://evil.example/phish')).toBe(
      APPSFLYER_DEFAULT_ONELINK_URL
    );
    expect(
      resolveGoDestination('https://link.dead.app.evil.example/4rpi/ig')
    ).toBe(APPSFLYER_DEFAULT_ONELINK_URL);
    expect(resolveGoDestination('not-a-url')).toBe(
      APPSFLYER_DEFAULT_ONELINK_URL
    );
  });
});
