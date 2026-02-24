import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destek | Outfit AI',
  description: 'Outfit AI destek merkezi – iletişim, sık sorulan sorular ve yardım.',
  alternates: { canonical: 'https://outfitai.app/support' },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
