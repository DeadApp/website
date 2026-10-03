import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppsFlyerSmartScriptLoader } from '@/components/appsflyer-smart-script-loader';
import { InAppBrowserProvider } from '@/components/in-app-browser-provider';
import { TikTokEscapeScreen } from '@/components/tiktok-escape-screen';
import { detectInAppBrowser } from '@/lib/in-app-browser';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const title = 'Dead: Funny Jokes';
const description = "The internet's funniest jokes";

export const metadata: Metadata = {
  metadataBase: new URL('https://getdead.app'),
  applicationName: 'Dead',
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://getdead.app',
    siteName: 'Dead',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const userAgent = (await headers()).get('user-agent') ?? '';
  const browser = detectInAppBrowser(userAgent);

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background font-sans text-foreground antialiased">
        <AppsFlyerSmartScriptLoader />
        {browser.family === 'tiktok' ? (
          <TikTokEscapeScreen />
        ) : (
          <InAppBrowserProvider info={browser}>
            <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 lg:max-w-5xl">
              <Navbar />
              <div className="flex-1 py-4">{children}</div>
              <div className="pt-32 pb-4">
                <Footer />
              </div>
            </div>
          </InAppBrowserProvider>
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
