import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | StyleUpS',
  description: 'StyleUpS kullanım koşulları – planlar, topluluk, Style Arena ve hizmet şartları.',
  alternates: { canonical: 'https://styleups.me/terms' },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
