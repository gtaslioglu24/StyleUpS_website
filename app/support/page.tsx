'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Destek',
    lead: 'StyleUpS ile ilgili her türlü soru, sorun veya geri bildirim için aşağıdaki kanalları kullanabilirsiniz.',
    contactTitle: 'İletişim',
    contactMail: 'contact@skymoonstudios.com',
    contactText: 'E-posta ile destek taleplerinin yanıt süresi iş günlerinde en geç 48 saattir.',
    detailsTitle: 'Destek Talebine Eklenecek Bilgiler',
    details: [
      'Hesabınıza kayıtlı e-posta adresi.',
      'Cihaz modeli ve işletim sistemi sürümü (ör. iPhone 15, iOS 18.2).',
      'Sorunun kısa ve net açıklaması.',
      'Varsa hata mesajının tam metni veya ekran görüntüsü.',
      'Sorunun ne zaman ve hangi adımda oluştuğu.',
    ],
    categoriesTitle: 'Destek Konuları',
    categories: [
      'Hesap ve doğrulama: giriş, şifre sıfırlama, e-posta doğrulama, Apple ile Giriş ve hesap kurtarma.',
      'Planlar ve davetler: Ücretsiz/Invite limitleri, davet kodu ve davet ödülü sorunları.',
      'Gardırop ve stil önerileri: kıyafet ekleme, arka plan kaldırma, filtreler, hava durumu ve kombin oluşturma.',
      'Topluluk ve moderasyon: proof, paylaşım, içerik kaldırma itirazı, raporlama ve engelleme.',
      'Style Arena ve sosyal özellikler: fit kartları, oylama, lig, seri, takip, arkadaş ligi ve 1v1 düellolar.',
      'Takvim ve paylaşım araçları: favoriler, Style Wrapped, hikâye uygun kartlar ve sosyal paylaşım.',
      'Teknik sorunlar: uygulama çökmeleri, performans düşüklüğü, senkronizasyon hataları.',
      'Gizlilik ve veri: KVKK/GDPR kapsamında veri erişim, düzeltme ve silme talepleri.',
    ],
    abuseTitle: 'Güvenlik ve Acil Durumlar',
    abuseText:
      'Hesap güvenliği ihlali, kimlik hırsızlığı veya acil kötüye kullanım durumlarında e-posta konu satırına "SECURITY" yazarak gönderiniz. Bu talepler yüksek öncelikle işleme alınır.',
  },
  en: {
    title: 'Support',
    lead: 'For any questions, issues, or feedback about StyleUpS, please use the channels below.',
    contactTitle: 'Contact',
    contactMail: 'contact@skymoonstudios.com',
    contactText: 'Email support requests are typically answered within 48 hours on business days.',
    detailsTitle: 'Information to Include in Your Request',
    details: [
      'Email address registered to your account.',
      'Device model and operating system version (e.g., iPhone 15, iOS 18.2).',
      'Brief and clear description of the issue.',
      'Exact error message text or screenshot, if available.',
      'When and at which step the issue occurred.',
    ],
    categoriesTitle: 'Support Topics',
    categories: [
      'Account and verification: login, password reset, email verification, Sign in with Apple, and account recovery.',
      'Plans and invites: Free/Invite limits, referral codes, and invite reward issues.',
      'Wardrobe and style picks: adding clothes, background removal, filters, weather, and outfit generation.',
      'Community and moderation: proof, sharing, content removal appeals, reporting, and blocking.',
      'Style Arena and social features: fit cards, voting, leagues, streaks, follows, friend leagues, and 1v1 duels.',
      'Calendar and sharing tools: favorites, Style Wrapped, story-ready cards, and social sharing.',
      'Technical issues: app crashes, performance problems, sync errors.',
      'Privacy and data: access, correction, and deletion requests under KVKK/GDPR.',
    ],
    abuseTitle: 'Security and Emergencies',
    abuseText:
      'For account security breaches, identity theft, or urgent abuse situations, include "SECURITY" in the email subject line. These requests are processed with high priority.',
  },
} as const;

export default function SupportPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section className="support-page">
      <h1>{c.title}</h1>
      <p className="page-lead">{c.lead}</p>

      <article className="support-card">
        <h2>{c.contactTitle}</h2>
        <p className="contact-line">{c.contactMail}</p>
        <p>{c.contactText}</p>
      </article>

      <article className="support-card">
        <h2>{c.detailsTitle}</h2>
        <ol>
          {c.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </article>

      <article className="support-card">
        <h2>{c.categoriesTitle}</h2>
        <ul>
          {c.categories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="support-card">
        <h2>{c.abuseTitle}</h2>
        <p>{c.abuseText}</p>
      </article>
    </section>
  );
}
