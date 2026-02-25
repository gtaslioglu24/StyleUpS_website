'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from '@/components/language-context';

type ThemeMode = 'light' | 'dark';

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('site-theme');
  if (saved === 'light' || saved === 'dark') return saved;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SiteChromeInner>{children}</SiteChromeInner>
    </LanguageProvider>
  );
}

function SiteChromeInner({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = (trText: string, enText: string) => (language === 'tr' ? trText : enText);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem('site-theme', nextTheme);
  };

  return (
    <div className="site-shell">
      <div className="ambient-bg" aria-hidden />
      <header className="site-header">
        <Link href="/" className="brand-link">
          <Image
            src="/logo.png"
            alt="Outfit AI Logo"
            width={40}
            height={40}
            className="brand-logo"
            unoptimized
            priority
          />
          Outfit AI
        </Link>

        <div className="header-right">
          <nav className="header-nav" aria-label="Main Navigation">
            <Link href="/">{t('Ana Sayfa', 'Home')}</Link>
            <Link href="/privacy">{t('Gizlilik', 'Privacy')}</Link>
            <Link href="/terms">{t('Koşullar', 'Terms')}</Link>
            <Link href="/support">{t('Destek', 'Support')}</Link>
          </nav>

          <div className="header-controls">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={language === 'tr' ? 'is-active' : ''}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'is-active' : ''}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={t('Temayı değiştir', 'Toggle theme')}
              title={t('Tema', 'Theme')}
            >
              <span aria-hidden>{mounted && theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Outfit AI. {t('Tüm hakları saklıdır.', 'All rights reserved.')}
        </p>
        <div className="footer-links">
          <Link href="/privacy">{t('Gizlilik Politikası', 'Privacy Policy')}</Link>
          <Link href="/terms">{t('Kullanım Koşulları', 'Terms of Use')}</Link>
          <Link href="/support">{t('Destek', 'Support')}</Link>
          <Link href="/delete-account">{t('Hesap Silme', 'Delete Account')}</Link>
        </div>
      </footer>
    </div>
  );
}
