'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Destek',
    lead: 'Outfit AI ile ilgili her türlü soru, sorun veya geri bildirim için aşağıdaki kanalları kullanabilirsiniz.',
    contactTitle: 'İletişim',
    contactMail: 'support@outfitai.app',
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
      'Hesap sorunları: giriş yapamama, şifre sıfırlama, hesap kurtarma.',
      'Abonelik ve ödeme: plan yükseltme, iptal, iade talebi (iadeler Apple/Google mağaza politikalarına tabidir).',
      'Gardırop ve kombin: fotoğraf yükleme hataları, AI öneri sorunları.',
      'Topluluk ve moderasyon: içerik kaldırma itirazı, kullanıcı raporlama.',
      'Teknik sorunlar: uygulama çökmeleri, performans düşüklüğü, senkronizasyon hataları.',
      'Gizlilik ve veri: KVKK kapsamında veri erişim/silme talepleri (privacy@outfitai.app adresine yönlendirilir).',
    ],
    abuseTitle: 'Güvenlik ve Acil Durumlar',
    abuseText:
      'Hesap güvenliği ihlali, kimlik hırsızlığı veya acil kötüye kullanım durumlarında e-posta konu satırına "SECURITY" yazarak gönderiniz. Bu talepler yüksek öncelikle işleme alınır.',
  },
  en: {
    title: 'Support',
    lead: 'For any questions, issues, or feedback about Outfit AI, please use the channels below.',
    contactTitle: 'Contact',
    contactMail: 'support@outfitai.app',
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
      'Account issues: login failures, password reset, account recovery.',
      'Subscription and billing: plan upgrade, cancellation, refund requests (refunds are subject to Apple/Google store policies).',
      'Wardrobe and outfits: photo upload errors, AI suggestion issues.',
      'Community and moderation: content removal appeals, user reporting.',
      'Technical issues: app crashes, performance problems, sync errors.',
      'Privacy and data: data access/deletion requests under KVKK (redirected to privacy@outfitai.app).',
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
