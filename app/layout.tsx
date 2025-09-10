import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';
import { PostHogProvider } from '../lib/context/posthog.context';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dead - The internet's funniest jokes",
  description: 'The funniest, most savage jokes on the internet.',
  openGraph: {
    title: "Dead - The internet's funniest jokes",
    description: 'The funniest, most savage jokes on the internet.',
    url: '/',
    siteName: 'Dead',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Dead - The internet's funniest jokes",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dead - The internet's funniest jokes",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <PostHogProvider>
          <div className="min-h-screen max-w-4xl mx-auto px-4">
            <Navbar />
            <div className="py-4">{children}</div>
            <div className="sticky top-[100vh] pt-32 pb-4">
              <Footer />
            </div>
          </div>
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
