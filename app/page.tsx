import Image from 'next/image';
import { useId } from 'react';
import { StoreBadges } from '@/components/store-badges';

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
            The internet&apos;s
            <br />
            funniest jokes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg lg:mx-0">
            10,000+ raw, unfiltered jokes from the darkest corners of the
            internet, guaranteed to make you laugh.
          </p>

          <StoreBadges />
        </div>

        <div className="flex-none">
          <div className="mt-8 lg:mx-0 lg:mt-12">
            <Image
              src="/app-screenshot.png"
              alt="Dead app screenshot"
              width={951}
              height={2048}
              priority
              className="h-auto w-[240px] md:w-[280px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
