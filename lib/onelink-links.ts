import { ONELINK_BASE_URL } from '@/lib/onelink-config';

export const ONELINK_LINKS = {
  '/ig': `${ONELINK_BASE_URL}/ig`,
  '/tt': `${ONELINK_BASE_URL}/tt`,
  '/x': `${ONELINK_BASE_URL}/x`,
  '/yt': `${ONELINK_BASE_URL}/yt`,
  '/fb': `${ONELINK_BASE_URL}/fb`,
  '/threads': `${ONELINK_BASE_URL}/threads`,
  '/share': `${ONELINK_BASE_URL}/share`,
} as const;

export type OneLinkPath = keyof typeof ONELINK_LINKS;

const MEDIA_SOURCES: Record<OneLinkPath, string> = {
  '/ig': 'Social_instagram',
  '/tt': 'Social_tiktok',
  '/x': 'Social_twitter',
  '/yt': 'Social_youtube',
  '/fb': 'Social_facebook',
  '/threads': 'Social_threads',
  '/share': 'app_share',
};

const FORWARDED_PARAMETERS =
  /^(utm_(source|medium|campaign|content|term)|fbclid|gclid|ttclid|msclkid|af_sub[1-5]|af_ad|af_adset|af_siteid)$/;

export function getOneLinkDestination(
  path: OneLinkPath,
  searchParams: Record<string, string | string[] | undefined>
): string {
  const forwarded = Object.entries(searchParams).filter(
    ([key, value]) => FORWARDED_PARAMETERS.test(key) && value !== undefined
  );

  if (forwarded.length === 0) {
    return ONELINK_LINKS[path];
  }

  // Secure Shortlinks reject appended parameters. Use a tracked long link
  // when preserving incoming campaign parameters, with the bio source fixed.
  const destination = new URL(ONELINK_BASE_URL);
  destination.searchParams.set('pid', MEDIA_SOURCES[path]);
  destination.searchParams.set('c', path === '/share' ? 'app_share' : 'brand');
  destination.searchParams.set(
    'af_channel',
    path === '/share' ? 'share' : 'bio'
  );
  destination.searchParams.set('deep_link_value', 'home');

  for (const [key, value] of forwarded) {
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item !== undefined) destination.searchParams.append(key, item);
    }
  }

  return destination.toString();
}
