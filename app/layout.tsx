import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import { SiteChrome } from '@/components/site-chrome';
import './globals.css';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700'],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Outfit AI | Dress Better, Faster',
  description:
    'Outfit AI helps people build better daily looks with AI-assisted picks, proof-based sharing, and style-safe moderation.',
  metadataBase: new URL('https://outfitai.app'),
  openGraph: {
    title: 'Outfit AI | Dress Better, Faster',
    description:
      'AI-powered wardrobe management. Build better daily outfits in seconds.',
    url: 'https://outfitai.app',
    siteName: 'Outfit AI',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Outfit AI - Dress Better, Faster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outfit AI | Dress Better, Faster',
    description:
      'AI-powered wardrobe management. Build better daily outfits in seconds.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://outfitai.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
