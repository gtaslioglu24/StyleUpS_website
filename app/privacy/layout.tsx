import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | StyleUpS',
  description: 'StyleUpS gizlilik politikası – KVKK uyumlu veri işleme, saklama ve haklarınız.',
  alternates: { canonical: 'https://outfitai.app/privacy' },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
