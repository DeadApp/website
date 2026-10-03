'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { useAppsFlyerSmartLink } from '@/hooks/use-appsflyer-smart-link';

export function Navbar() {
  const downloadHref = useAppsFlyerSmartLink();

  return (
    <header className="pt-1">
      <div className="flex h-14 items-center justify-between gap-4 px-3 md:px-5">
        <Link
          href="/"
          className="-mt-1 flex items-center gap-1 text-white transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/logo-transparent.png"
            alt="Dead"
            width={38}
            height={38}
            className="object-contain"
          />
          <h1 className="text-xl font-semibold tracking-tighter select-none">
            Dead
          </h1>
        </Link>
        <a
          href={downloadHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-9 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90"
        >
          Try for free
          <ArrowRightIcon
            className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
}
