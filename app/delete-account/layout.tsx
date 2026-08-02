import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hesap Silme | StyleUpS',
  description: 'StyleUpS hesabınızı ve verilerinizi kalıcı olarak silin.',
  alternates: { canonical: 'https://styleups.me/delete-account' },
  openGraph: {
    title: 'Hesap Silme | StyleUpS',
    description: 'StyleUpS hesabınızı ve verilerinizi kalıcı olarak silin.',
    url: 'https://styleups.me/delete-account',
    siteName: 'StyleUpS',
    type: 'website',
    images: ['/og-image-v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hesap Silme | StyleUpS',
    description: 'StyleUpS hesabınızı ve verilerinizi kalıcı olarak silin.',
    images: ['/og-image-v2.png'],
  },
};

export default function DeleteAccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
