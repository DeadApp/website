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

export const metadata: Metadata = {
  title: "Dead - The internet's funniest jokes",
  description: 'The funniest, most savage jokes on the internet.',
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
