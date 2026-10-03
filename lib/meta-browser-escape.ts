import type { InAppBrowserApp, InAppBrowserOs } from '@/lib/in-app-browser';
import { APP_STORE_URL } from '@/lib/store-links';

export const META_ESCAPE_WATCHDOG_MS = 1500;

export type MetaEscapeScheme =
  { kind: 'assign'; href: string } | { kind: 'open'; href: string };

type BuildSchemesArgs = {
  destinationUrl: string;
  app: InAppBrowserApp;
  os: InAppBrowserOs;
  appStoreUrl?: string;
};

function stripHttpsScheme(url: string): string {
  return url.replace(/^https:\/\//i, '');
}

export function buildItmsAppsUrl(appStoreUrl: string = APP_STORE_URL): string {
  return `itms-apps://${stripHttpsScheme(appStoreUrl)}`;
}

export function buildInstagramExtBrowserUrl(destinationUrl: string): string {
  return `instagram://extbrowser/?url=${encodeURIComponent(destinationUrl)}`;
}

export function buildSafariEscapeUrl(destinationUrl: string): string {
  return `x-safari-${destinationUrl}`;
}

export function buildAndroidIntentUrl(destinationUrl: string): string {
  const withoutScheme = stripHttpsScheme(destinationUrl);
  const fallback = encodeURIComponent(destinationUrl);

  return `intent://${withoutScheme}#Intent;scheme=https;S.browser_fallback_url=${fallback};end`;
}

function allowsAppStoreFallback(destinationUrl: string): boolean {
  try {
    const hostname = new URL(destinationUrl).hostname;
    return hostname === 'apps.apple.com' || hostname === 'dead.onelink.me';
  } catch {
    return false;
  }
}

export function buildMetaEscapeSchemes({
  destinationUrl,
  app,
  os,
  appStoreUrl = APP_STORE_URL,
}: BuildSchemesArgs): MetaEscapeScheme[] {
  if (os === 'android') {
    return [{ kind: 'assign', href: buildAndroidIntentUrl(destinationUrl) }];
  }

  if (os !== 'ios') {
    return [];
  }

  if (app === 'instagram' || app === 'threads') {
    const schemes: MetaEscapeScheme[] = [
      { kind: 'assign', href: buildInstagramExtBrowserUrl(destinationUrl) },
    ];

    if (allowsAppStoreFallback(destinationUrl)) {
      schemes.push({ kind: 'assign', href: buildItmsAppsUrl(appStoreUrl) });
    }

    return schemes;
  }

  if (app === 'facebook' || app === 'messenger') {
    return [{ kind: 'open', href: buildSafariEscapeUrl(destinationUrl) }];
  }

  return [];
}

export function runMetaEscapeScheme(scheme: MetaEscapeScheme): void {
  if (scheme.kind === 'open') {
    window.open(scheme.href, '_blank');
    return;
  }

  window.location.href = scheme.href;
}

type WatchEscapeArgs = {
  timeoutMs?: number;
  signal?: AbortSignal;
};

export function watchMetaEscapeSuccess({
  timeoutMs = META_ESCAPE_WATCHDOG_MS,
  signal,
}: WatchEscapeArgs = {}): Promise<boolean> {
  return new Promise((resolve) => {
    let settled = false;

    const finish = (escaped: boolean) => {
      if (settled) {
        return;
      }

      settled = true;
      cleanup();
      resolve(escaped);
    };

    const onHide = () => {
      if (document.visibilityState === 'hidden') {
        finish(true);
      }
    };

    const onBlurOrPageHide = () => {
      finish(true);
    };

    const onAbort = () => {
      finish(false);
    };

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onBlurOrPageHide);
      window.removeEventListener('blur', onBlurOrPageHide);
      signal?.removeEventListener('abort', onAbort);
    };

    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onBlurOrPageHide);
    window.addEventListener('blur', onBlurOrPageHide);
    signal?.addEventListener('abort', onAbort);

    const timeoutId = window.setTimeout(() => {
      finish(false);
    }, timeoutMs);
  });
}

type RunCascadeArgs = {
  schemes: MetaEscapeScheme[];
  timeoutMs?: number;
  signal?: AbortSignal;
  runAll?: boolean;
};

export async function runMetaEscapeCascade({
  schemes,
  timeoutMs = META_ESCAPE_WATCHDOG_MS,
  signal,
  runAll = true,
}: RunCascadeArgs): Promise<boolean> {
  const queue = runAll ? schemes : schemes.slice(0, 1);

  for (const scheme of queue) {
    if (signal?.aborted) {
      return false;
    }

    runMetaEscapeScheme(scheme);
    const escaped = await watchMetaEscapeSuccess({ timeoutMs, signal });

    if (escaped) {
      return true;
    }
  }

  return false;
}
