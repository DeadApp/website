'use client';

import { useEffect } from 'react';
import { useInAppBrowserInfo } from '@/components/in-app-browser-provider';

export function ShortLinkRedirect({
  destinationUrl,
}: {
  destinationUrl: string;
}) {
  const info = useInAppBrowserInfo();

  useEffect(() => {
    if (info.family === 'tiktok' || info.family === 'meta') {
      return;
    }

    window.location.replace(destinationUrl);
  }, [destinationUrl, info.family]);

  if (info.family === 'tiktok' || info.family === 'meta') {
    return null;
  }

  return <ContinueLink href={destinationUrl} />;
}

export function ContinueLink({ href }: { href: string }) {
  return (
    <p className="flex min-h-dvh items-center justify-center px-4 text-center text-sm text-white/60">
      <a className="text-white underline" href={href}>
        Continue to Dead.
      </a>
    </p>
  );
}
