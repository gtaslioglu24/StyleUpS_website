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
  title: 'StyleUpS | Dress Better, Faster',
  description:
    'StyleUpS helps people build better daily looks with AI-assisted picks, proof-based sharing, and style-safe moderation.',
  metadataBase: new URL('https://outfitai.app'),
  openGraph: {
    title: 'StyleUpS | Dress Better, Faster',
    description:
      'AI-powered wardrobe management. Build better daily outfits in seconds.',
    url: 'https://outfitai.app',
    siteName: 'StyleUpS',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StyleUpS - Dress Better, Faster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyleUpS | Dress Better, Faster',
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
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icon.png?v=2', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          sizes="180x180"
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
