'use client';

import { useState } from 'react';

const primaryButtonClass =
  'inline-flex h-12 flex-1 items-center justify-center rounded-full bg-white px-4 text-base font-semibold text-black transition-all duration-200 hover:bg-white/90';

const outlineButtonClass =
  'inline-flex h-12 flex-1 items-center justify-center rounded-full border border-white/20 px-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10';

type MetaEscapeFallbackProps = {
  destinationUrl: string;
  onRetry: () => void;
};

export function MetaEscapeFallback({
  destinationUrl,
  onRetry,
}: MetaEscapeFallbackProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(destinationUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-8 space-y-5 text-left">
      <p className="text-base text-white/75">
        Tap the three-dots menu, then{' '}
        <span className="font-semibold text-white">
          Open in external browser
        </span>
        .
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" className={primaryButtonClass} onClick={onRetry}>
          Retry
        </button>
        <button
          type="button"
          className={outlineButtonClass}
          onClick={handleCopy}
        >
          {copied ? 'Copied' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}
