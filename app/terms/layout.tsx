import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | StyleUpS',
  description: 'StyleUpS kullanım koşulları – planlar, topluluk, Style Arena ve hizmet şartları.',
  alternates: { canonical: 'https://styleups.me/terms' },
  openGraph: {
    title: 'Kullanım Koşulları | StyleUpS',
    description: 'StyleUpS kullanım koşulları – planlar, topluluk, Style Arena ve hizmet şartları.',
    url: 'https://styleups.me/terms',
    siteName: 'StyleUpS',
    type: 'website',
    images: ['/og-image-v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kullanım Koşulları | StyleUpS',
    description: 'StyleUpS kullanım koşulları – planlar, topluluk, Style Arena ve hizmet şartları.',
    images: ['/og-image-v2.png'],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
