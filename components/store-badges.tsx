'use client';

import Image from 'next/image';
import { useOutboundHref } from '@/components/in-app-browser-provider';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/store-links';

export function StoreBadges() {
  const appStoreHref = useOutboundHref(APP_STORE_URL);
  const playStoreHref = useOutboundHref(PLAY_STORE_URL);

  return (
    <div className="mt-6">
      <div className="flex flex-row items-center justify-center gap-2 md:gap-1 lg:justify-start">
        <a
          href={appStoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-[1.03]"
        >
          <Image
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={140}
            height={46}
            className="h-[46px] w-auto"
            priority
          />
        </a>
        <a
          href={playStoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-[1.03]"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={646}
            height={250}
            className="h-[70px] w-auto"
          />
        </a>
      </div>
    </div>
  );
}
