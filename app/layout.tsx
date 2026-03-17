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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'StyleUpS | Dress Better, Faster',
  description:
    'StyleUpS helps people build better daily looks with AI-assisted picks, proof-based sharing, and style-safe moderation.',
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: 'StyleUpS | Dress Better, Faster',
    description:
      'AI-powered wardrobe management. Build better daily outfits in seconds.',
    url: siteUrl,
    siteName: 'StyleUpS',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.png?v=99',
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
    images: ['/og-image.png?v=99'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/',
  },

  // Canonical favicon setup
  icons: {
    icon: [{ url: '/favicon.ico?v=3004', sizes: 'any', type: 'image/x-icon' }],
    shortcut: '/favicon.ico?v=3004',
    apple: [{ url: '/apple-icon.png?v=3004', sizes: '180x180', type: 'image/png' }],
  },

  manifest: '/manifest.webmanifest',
  themeColor: '#150f0e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-theme="dark" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}