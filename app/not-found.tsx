'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-context';

export default function NotFound() {
  // useLanguage is available because SiteChrome wraps the layout
  // But since this is a special page, we keep it simple
  return (
    <div className="legal-page" style={{ textAlign: 'center', paddingTop: '60px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '12px' }}>404</h1>
      <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', marginBottom: '24px' }}>
        Bu sayfa bulunamadı. / This page was not found.
      </p>
      <Link
        href="/"
        className="btn-solid"
        style={{ display: 'inline-flex' }}
      >
        Ana Sayfaya Dön / Back to Home
      </Link>
    </div>
  );
}
