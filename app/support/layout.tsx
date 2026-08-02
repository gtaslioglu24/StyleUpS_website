import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destek | StyleUpS',
  description: 'StyleUpS destek merkezi – iletişim, sık sorulan sorular ve yardım.',
  alternates: { canonical: 'https://styleups.me/support' },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
