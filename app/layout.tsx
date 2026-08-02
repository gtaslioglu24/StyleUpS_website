import type { Metadata, Viewport } from 'next';
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

const siteUrl = 'https://styleups.me';

export const metadata: Metadata = {
  title: 'StyleUpS | Gardırobun, Stil Asistanın ve Style Arena',
  description:
    'Dijital gardırobunu kur, hava durumuna ve ruh haline uygun stil önerileri al, paylaş ve Style Arena’da yarış.',
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: 'StyleUpS | Gardırobun, Stil Asistanın ve Style Arena',
    description:
      'Dijital gardırop, kişisel stil önerileri, güvenli topluluk ve Style Arena tek uygulamada.',
    url: siteUrl,
    siteName: 'StyleUpS',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image-v2.png',
        width: 1200,
        height: 630,
        alt: 'StyleUpS dijital gardırop ve Style Arena',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'StyleUpS | Gardırobun, Stil Asistanın ve Style Arena',
    description:
      'Dijital gardırop, kişisel stil önerileri, güvenli topluluk ve Style Arena tek uygulamada.',
    images: ['/og-image-v2.png'],
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
};

export const viewport: Viewport = {
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
