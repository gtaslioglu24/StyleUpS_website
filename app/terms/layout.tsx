import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | StyleUpS',
  description: 'StyleUpS kullanım koşulları – App Store EULA uyumlu hizmet şartları.',
  alternates: { canonical: 'https://outfitai.app/terms' },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
