'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MetaEscapeFallback } from '@/components/meta-escape-fallback';
import { useInAppBrowserInfo } from '@/components/in-app-browser-provider';
import {
  buildMetaEscapeSchemes,
  runMetaEscapeCascade,
} from '@/lib/meta-browser-escape';

type StoreHandoffProps = {
  destinationUrl: string;
};

function handoffDescription(destinationUrl: string): string {
  try {
    if (new URL(destinationUrl).hostname === 'play.google.com') {
      return 'Continue to Google Play to download.';
    }
  } catch {
    // Keep the App Store wording for OneLink and App Store destinations.
  }

  return 'Continue to the App Store to download.';
}

export function StoreHandoff({ destinationUrl }: StoreHandoffProps) {
  const browser = useInAppBrowserInfo();
  const attemptedSilentEscape = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const schemes = useMemo(() => {
    if (browser.family !== 'meta' || !browser.app) {
      return [];
    }

    return buildMetaEscapeSchemes({
      destinationUrl,
      app: browser.app,
      os: browser.os,
    });
  }, [browser, destinationUrl]);

  const autoEscape = browser.family === 'meta' && schemes.length > 0;
  const [isEscaping, setIsEscaping] = useState(autoEscape);
  const [showFallback, setShowFallback] = useState(
    browser.family === 'meta' && schemes.length === 0
  );

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (browser.family === null) {
      window.location.replace(destinationUrl);
      return;
    }

    if (!autoEscape || attemptedSilentEscape.current) {
      return;
    }

    attemptedSilentEscape.current = true;
    const controller = new AbortController();
    abortRef.current = controller;

    void (async () => {
      const escaped = await runMetaEscapeCascade({
        schemes,
        signal: controller.signal,
        runAll: true,
      });

      if (controller.signal.aborted) {
        return;
      }

      setIsEscaping(false);
      if (!escaped) {
        setShowFallback(true);
      }
    })();

    return () => {
      controller.abort();
      attemptedSilentEscape.current = false;
    };
  }, [autoEscape, browser.family, destinationUrl, schemes]);

  async function handleDownloadOrRetry() {
    if (schemes.length === 0) {
      window.location.assign(destinationUrl);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsEscaping(true);
    setShowFallback(false);

    const escaped = await runMetaEscapeCascade({
      schemes,
      signal: controller.signal,
      runAll: true,
    });

    if (!controller.signal.aborted) {
      setIsEscaping(false);
      if (!escaped) {
        setShowFallback(true);
      }
    }
  }

  if (browser.family === 'tiktok' || browser.family === null) {
    return (
      <p className="flex min-h-dvh items-center justify-center px-4 text-center text-sm text-white/60">
        <a className="text-white underline" href={destinationUrl}>
          Continue to Dead.
        </a>
      </p>
    );
  }

  return (
    <main className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center bg-background px-6 text-foreground">
      <section className="w-full max-w-sm text-center">
        <Image
          src="/logo-transparent.png"
          alt="Dead"
          width={48}
          height={48}
          className="mx-auto size-12"
          priority
        />
        <h1 className="mt-6 text-3xl font-medium tracking-tighter text-white">
          Get Dead
        </h1>
        <p className="mt-3 text-base text-white/70">
          {handoffDescription(destinationUrl)}
        </p>

        <button
          type="button"
          className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-4 text-base font-semibold text-black transition-all duration-200 hover:bg-white/90 disabled:opacity-60"
          disabled={isEscaping}
          onClick={handleDownloadOrRetry}
        >
          {isEscaping ? 'Opening…' : 'Download'}
        </button>

        {showFallback ? (
          <MetaEscapeFallback
            destinationUrl={destinationUrl}
            onRetry={handleDownloadOrRetry}
          />
        ) : null}
      </section>
    </main>
  );
}
