import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { StoreHandoff } from '@/components/store-handoff';
import { detectInAppBrowser } from '@/lib/in-app-browser';
import {
  getOneLinkDestination,
  ONELINK_LINKS,
  type OneLinkPath,
} from '@/lib/onelink-links';
import { ShortLinkRedirect } from './short-link-redirect';

const title = 'Dead: Funny Jokes';
const description = "The internet's funniest jokes";
const siteUrl = 'https://dead.app';

type ShortLinkPageProps = {
  params: Promise<{
    shortLink: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
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

export default async function ShortLinkPage({
  params,
  searchParams,
}: ShortLinkPageProps) {
  const { shortLink } = await params;
  const oneLinkPath = getOneLinkPath(shortLink);

  if (!oneLinkPath) {
    notFound();
  }

  const destinationUrl = getOneLinkDestination(oneLinkPath, await searchParams);
  const userAgent = (await headers()).get('user-agent') ?? '';
  const browser = detectInAppBrowser(userAgent);

  return (
    <main className="fixed inset-0 z-50 bg-background" aria-label={title}>
      {browser.family === 'meta' ? (
        <StoreHandoff destinationUrl={destinationUrl} />
      ) : (
        <ShortLinkRedirect destinationUrl={destinationUrl} />
      )}
    </main>
  );
}
