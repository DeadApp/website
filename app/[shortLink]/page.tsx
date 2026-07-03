import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import {
  ONELINK_LINKS,
  type OneLinkPath,
} from '@/lib/onelink-links';
import { ShortLinkRedirect } from './short-link-redirect';

const title = 'Dead: Funny Jokes';
const description = 'Your daily dose of dark humor.';
const siteUrl = 'https://getdead.app';

type ShortLinkPageProps = {
  params: Promise<{
    shortLink: string;
  }>;
};

function getOneLinkPath(shortLink: string): OneLinkPath | null {
  const path = `/${shortLink}`;

  if (path in ONELINK_LINKS) {
    return path as OneLinkPath;
  }

  return null;
}

export function generateStaticParams() {
  return Object.keys(ONELINK_LINKS).map((path) => ({
    shortLink: path.slice(1),
  }));
}

export async function generateMetadata({
  params,
}: ShortLinkPageProps): Promise<Metadata> {
  const { shortLink } = await params;
  const oneLinkPath = getOneLinkPath(shortLink);

  if (!oneLinkPath) {
    return {};
  }

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: oneLinkPath,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${oneLinkPath}`,
      siteName: 'Dead',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ShortLinkPage({ params }: ShortLinkPageProps) {
  const { shortLink } = await params;
  const oneLinkPath = getOneLinkPath(shortLink);

  if (!oneLinkPath) {
    notFound();
  }

  const destinationUrl = ONELINK_LINKS[oneLinkPath];

  return (
    <main className="fixed inset-0 z-50 bg-background" aria-label={title}>
      <Suspense fallback={null}>
        <ShortLinkRedirect destinationUrl={destinationUrl} />
      </Suspense>
      <noscript>
        <p className="flex min-h-dvh items-center justify-center px-4 text-center text-sm text-white/60">
          JavaScript is required to open the tracked download link.{' '}
          <a className="text-white underline" href={destinationUrl}>
            Continue to Dead.
          </a>
        </p>
      </noscript>
    </main>
  );
}
