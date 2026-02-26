import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hesap Silme | StyleUpS',
  description: 'StyleUpS hesabınızı ve verilerinizi kalıcı olarak silin.',
  alternates: { canonical: 'https://outfitai.app/delete-account' },
};

export default function DeleteAccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
