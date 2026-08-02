import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | StyleUpS',
  description: 'StyleUpS gizlilik politikası – KVKK uyumlu veri işleme, saklama ve haklarınız.',
  alternates: { canonical: 'https://styleups.me/privacy' },
  openGraph: {
    title: 'Gizlilik Politikası | StyleUpS',
    description: 'StyleUpS gizlilik politikası – KVKK uyumlu veri işleme, saklama ve haklarınız.',
    url: 'https://styleups.me/privacy',
    siteName: 'StyleUpS',
    type: 'website',
    images: ['/og-image-v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gizlilik Politikası | StyleUpS',
    description: 'StyleUpS gizlilik politikası – KVKK uyumlu veri işleme, saklama ve haklarınız.',
    images: ['/og-image-v2.png'],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
