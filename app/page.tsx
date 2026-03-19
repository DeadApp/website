'use client';

import Image from 'next/image';
import { useId } from 'react';

function GradientStar({ size = 22 }: { size?: number }) {
  const uid = useId();
  const gradId = `grad-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="0"
          y1="0"
          x2="0"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.95" />
          <stop offset="1" stopColor="white" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-6xl lg:max-w-5xl">
        <section className="mt-20 flex flex-col items-center gap-10 px-3 md:px-5 lg:flex-row">
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center gap-8 md:gap-10 lg:justify-start">
              <Image
                src="/app-of-the-day.svg"
                alt="App of the Day"
                width={150}
                height={50}
                className="lg:mx-0"
              />
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-linear-to-b from-white to-white/80 bg-clip-text text-lg font-medium text-transparent">
                    4.8
                  </span>
                  <div className="flex items-center">
                    <GradientStar />
                    <GradientStar />
                    <GradientStar />
                    <GradientStar />
                    <GradientStar />
                  </div>
                </div>
                <span className="mt-1 bg-linear-to-b from-white/70 to-white/50 bg-clip-text text-xs font-medium tracking-widest text-transparent uppercase">
                  1,000+ APP RATINGS
                </span>
              </div>
            </div>

            <h1 className="mt-8 text-5xl leading-[1.2] font-medium tracking-tighter md:text-6xl">
              Your daily dose of
              <br />
              dark humor
            </h1>
            <p className="mt-4 mx-auto max-w-xl text-base text-white/70 md:text-lg lg:mx-0">
              Enjoy 10,000+ raw, unfiltered jokes from the darkest corners of
              the internet. Guaranteed to make you laugh.
            </p>

            <div className="mt-6">
              <div className="flex flex-row items-center justify-center gap-2 md:gap-1 lg:justify-start">
                <a
                  href="https://apps.apple.com/us/app/dead-funny-jokes-dark-humor/id6749788456"
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
                  href="https://play.google.com/store/apps/details?id=app.dead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-[1.03]"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={210}
                    height={63}
                    className="h-[70px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-none">
            <div className="mt-8 lg:mx-0 lg:mt-12">
              <Image
                src="/app-screenshot.png"
                alt="Dead app screenshot"
                width={320}
                height={680}
                priority
                className="h-auto w-[240px] md:w-[280px]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
