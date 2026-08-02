import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destek | StyleUpS',
  description: 'StyleUpS destek merkezi – iletişim, sık sorulan sorular ve yardım.',
  alternates: { canonical: 'https://styleups.me/support' },
  openGraph: {
    title: 'Destek | StyleUpS',
    description: 'StyleUpS destek merkezi – iletişim, sık sorulan sorular ve yardım.',
    url: 'https://styleups.me/support',
    siteName: 'StyleUpS',
    type: 'website',
    images: ['/og-image-v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destek | StyleUpS',
    description: 'StyleUpS destek merkezi – iletişim, sık sorulan sorular ve yardım.',
    images: ['/og-image-v2.png'],
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
