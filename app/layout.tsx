import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://getdead.app'),
  title: 'Dead - Your daily dose of dark humor',
  description:
    'Enjoy 10,000+ raw, unfiltered jokes from the darkest corners of the internet',
  openGraph: {
    title: 'Dead - Your daily dose of dark humor',
    description:
      'Enjoy 10,000+ raw, unfiltered jokes from the darkest corners of the internet',
    url: 'https://getdead.app',
    siteName: 'Dead',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dead - Your daily dose of dark humor',
    description:
      'Enjoy 10,000+ raw, unfiltered jokes from the darkest corners of the internet',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <div className="min-h-screen max-w-6xl mx-auto px-4 lg:max-w-5xl">
          <Navbar />
          <div className="py-4">{children}</div>
          <div className="sticky top-[100vh] pt-32 pb-4">
            <Footer />
          </div>
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
