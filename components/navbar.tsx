'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const navigationLinks: { href: string; label: string; active: boolean }[] = [];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const APP_STORE_URL =
    'https://apps.apple.com/us/app/dead-funny-jokes-dark-humor/id6749788456';
  const PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=app.dead';
  const [downloadHref, setDownloadHref] = useState(APP_STORE_URL);

  useEffect(() => {
    try {
      const ua =
        typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
      const isAndroid = /Android/i.test(ua);
      const isIOS = /iPhone|iPad|iPod/i.test(ua);

      if (isAndroid) setDownloadHref(PLAY_STORE_URL);
      else if (isIOS) setDownloadHref(APP_STORE_URL);
    } catch {
      setDownloadHref(APP_STORE_URL);
    }
  }, []);

  return (
    <header className="pt-1">
      <div className="flex h-14 items-center justify-between gap-4 px-3 md:px-5">
        <div className="flex items-center gap-2">
          <Popover open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5"
                        active={link.active}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className="flex items-center gap-6">
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
              <h1 className="text-xl font-semibold select-none tracking-tighter">
                Dead
              </h1>
            </Link>
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={link.active}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="bg-white text-black hover:bg-white/90 group rounded-full font-semibold transition-all duration-200"
          >
            <Link href={downloadHref} target="_blank" rel="noopener noreferrer">
              Try for free
              <ArrowRightIcon
                className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
