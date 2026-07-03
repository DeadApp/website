export const APP_STORE_URL =
  'https://apps.apple.com/us/app/dead-funny-jokes-dark-humor/id6749788456';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=app.dead';

export function getStoreUrlForUserAgent(userAgent: string): string {
  if (/Android/i.test(userAgent)) return PLAY_STORE_URL;
  return APP_STORE_URL;
}
