export const ONELINK_LINKS = {
  '/tt': 'https://dead.onelink.me/42xK/tt',
  '/ig': 'https://dead.onelink.me/42xK/ig',
} as const;

export type OneLinkPath = keyof typeof ONELINK_LINKS;
