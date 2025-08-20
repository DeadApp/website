'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mt-8 flex justify-center">
          <div className="flex items-center justify-center bg-zinc-900 rounded-2xl p-1">
            <Image
              src="/logo-transparent.png"
              alt="Dead"
              width={200}
              height={80}
              className="h-16 w-auto lg:h-20 select-none"
              priority
            />
          </div>
        </div>
        <p className="mt-6 font-medium text-lg md:text-xl text-white tracking-tight max-w-2xl mx-auto">
          The funniest, most savage jokes on the internet.
        </p>

        <div className="mt-6">
          <div className="flex flex-row gap-0.5 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/dead-funny-jokes-dark-humor/id6749788456"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={48}
                className="h-[40px] w-auto"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=app.dead"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-[60px] w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
