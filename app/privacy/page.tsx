'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Gizlilik Politikası',
    lead: 'Son güncelleme: 25 Şubat 2026. Bu politika, Outfit AI mobil uygulamasının ("Uygulama") kişisel verileri nasıl topladığını, işlediğini, sakladığını ve koruduğunu açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu olarak hareket ediyoruz.',
    sections: [
      {
        title: '1. Veri Sorumlusu',
        text: 'Outfit AI uygulamasını geliştiren ve işleten tüzel/gerçek kişi veri sorumlusudur. İletişim: privacy@outfitai.app',
      },
      {
        title: '2. Toplanan Kişisel Veriler',
        items: [
          'Kimlik ve hesap verileri: e-posta adresi, kullanıcı adı, Firebase UID.',
          'Gardırop verileri: yüklenen kıyafet fotoğrafları, kategori, renk ve stil etiketleri.',
          'Kullanım verileri: kombin geçmişi, paylaşım, beğeni, rapor ve engelleme kayıtları.',
          'Teknik veriler: cihaz modeli, işletim sistemi sürümü, IP adresi, uygulama günlükleri, çökme raporları.',
          'Ödeme verileri: abonelik durumu ve satın alma onayları (ödeme bilgileri doğrudan Apple/Google tarafından işlenir, biz bu verilere erişmeyiz).',
        ],
      },
      {
        title: '3. Verilerin İşlenme Amaçları ve Hukuki Dayanağı',
        items: [
          'Hesap oluşturma ve kimlik doğrulama — sözleşmenin ifası.',
          'AI destekli kombin önerileri sunma — meşru menfaat.',
          'Topluluk paylaşımlarının proof doğrulaması ve moderasyonu — meşru menfaat ve hukuki yükümlülük.',
          'Plan limitlerinin uygulanması ve hizmet kalitesinin korunması — sözleşmenin ifası.',
          'Güvenlik ihlali, dolandırıcılık ve kötüye kullanım tespiti — hukuki yükümlülük.',
          'Yasal taleplere yanıt verme — hukuki yükümlülük.',
        ],
      },
      {
        title: '4. Üçüncü Taraf Hizmet Sağlayıcılar',
        items: [
          'Firebase (Google LLC): kimlik doğrulama, Firestore veritabanı, Cloud Storage, Cloud Functions, Crashlytics.',
          'Apple Inc. / Google LLC: uygulama içi satın alma ve abonelik yönetimi.',
          'AI servis sağlayıcıları: kombin önerileri ve proof/moderasyon süreçleri için.',
        ],
        text: 'Bu sağlayıcılar yalnızca hizmetin sunulması için gerekli olan verilere erişir ve kendi gizlilik politikalarına tabidir.',
      },
      {
        title: '5. Uluslararası Veri Transferi',
        text: 'Firebase altyapısı nedeniyle kişisel veriler ABD veya Avrupa Ekonomik Alanı (AEA) bölgesindeki sunucularda işlenebilir. Bu transferler, KVKK m.9 kapsamında yeterli koruma tedbirleri (standart sözleşme maddeleri) çerçevesinde gerçekleştirilir.',
      },
      {
        title: '6. Veri Saklama Süreleri',
        items: [
          'Hesap verileri: hesap aktif olduğu sürece + silme talebinden itibaren en geç 30 gün içinde kalıcı silme.',
          'Gardırop görselleri: hesap silme ile birlikte kalıcı olarak silinir.',
          'Topluluk paylaşımları: hesap silme ile birlikte anonim hale getirilir veya silinir.',
          'Teknik günlükler ve çökme raporları: en fazla 12 ay saklanır.',
          'Yasal yükümlülükler gerektirdiğinde ilgili veriler zorunlu süre boyunca tutulabilir.',
        ],
      },
      {
        title: '7. Çerezler ve İzleme Teknolojileri',
        text: 'Uygulama tarayıcı çerezi kullanmaz. Firebase Analytics ve Crashlytics, hizmet kalitesi ve hata tespiti amacıyla anonim kullanım istatistikleri toplayabilir. Bu web sitesi yalnızca teknik olarak gerekli çerezler kullanır.',
      },
      {
        title: '8. Çocukların Gizliliği',
        text: 'Uygulama 13 yaşın altındaki kullanıcılara yönelik değildir. 13 yaşın altında bir kullanıcının veri paylaştığını fark etmemiz halinde ilgili hesap ve veriler en kısa sürede silinir.',
      },
      {
        title: '9. KVKK Kapsamındaki Haklarınız',
        items: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme.',
          'İşlenmişse buna ilişkin bilgi talep etme.',
          'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.',
          'Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme.',
          'KVKK m.7 kapsamında verilerin silinmesini veya yok edilmesini isteme.',
          'Düzeltme/silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme.',
          'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme.',
          'Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme.',
        ],
        contact: 'Başvuru adresi: privacy@outfitai.app',
      },
      {
        title: '10. Politika Değişiklikleri',
        text: 'Bu politika güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulur. Güncel sürüm her zaman bu sayfada yayınlanır.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lead: 'Last updated: February 25, 2026. This policy explains how the Outfit AI mobile application ("App") collects, processes, stores, and protects personal data. We act as the data controller under applicable data protection laws, including the Turkish Personal Data Protection Law No. 6698 (KVKK).',
    sections: [
      {
        title: '1. Data Controller',
        text: 'The individual or entity that develops and operates the Outfit AI application is the data controller. Contact: privacy@outfitai.app',
      },
      {
        title: '2. Personal Data We Collect',
        items: [
          'Identity and account data: email address, username, Firebase UID.',
          'Wardrobe data: uploaded garment photos, category, color and style tags.',
          'Usage data: outfit history, shares, likes, reports, and block records.',
          'Technical data: device model, OS version, IP address, app logs, crash reports.',
          'Payment data: subscription status and purchase confirmations (payment details are handled directly by Apple/Google — we do not access this data).',
        ],
      },
      {
        title: '3. Purposes and Legal Basis for Processing',
        items: [
          'Account creation and authentication — performance of contract.',
          'AI-powered outfit suggestions — legitimate interest.',
          'Proof verification and moderation of community content — legitimate interest and legal obligation.',
          'Enforcing plan limits and maintaining service quality — performance of contract.',
          'Detecting security breaches, fraud, and abuse — legal obligation.',
          'Responding to legal requests — legal obligation.',
        ],
      },
      {
        title: '4. Third-Party Service Providers',
        items: [
          'Firebase (Google LLC): authentication, Firestore database, Cloud Storage, Cloud Functions, Crashlytics.',
          'Apple Inc. / Google LLC: in-app purchase and subscription management.',
          'AI service providers: for outfit suggestions and proof/moderation workflows.',
        ],
        text: 'These providers only access data necessary for service delivery and are subject to their own privacy policies.',
      },
      {
        title: '5. International Data Transfers',
        text: 'Due to Firebase infrastructure, personal data may be processed on servers in the United States or the European Economic Area (EEA). These transfers are carried out under appropriate safeguards (standard contractual clauses) in accordance with Article 9 of the KVKK.',
      },
      {
        title: '6. Data Retention Periods',
        items: [
          'Account data: retained while the account is active + permanently deleted within 30 days of a deletion request.',
          'Wardrobe images: permanently deleted upon account deletion.',
          'Community posts: anonymized or deleted upon account deletion.',
          'Technical logs and crash reports: retained for up to 12 months.',
          'Data may be retained longer where required by legal obligations.',
        ],
      },
      {
        title: '7. Cookies and Tracking Technologies',
        text: 'The App does not use browser cookies. Firebase Analytics and Crashlytics may collect anonymous usage statistics for service quality and error detection. This website uses only technically necessary cookies.',
      },
      {
        title: '8. Children\'s Privacy',
        text: 'The App is not intended for users under the age of 13. If we become aware that a user under 13 has shared personal data, the relevant account and data will be deleted as soon as possible.',
      },
      {
        title: '9. Your Rights Under Data Protection Law',
        items: [
          'Learn whether your personal data is being processed.',
          'Request information about processing activities.',
          'Learn the purpose of processing and whether data is used accordingly.',
          'Know the third parties to whom your data has been transferred domestically or abroad.',
          'Request correction of incomplete or inaccurate data.',
          'Request deletion or destruction of data under Article 7 of the KVKK.',
          'Request that corrections or deletions be communicated to third parties.',
          'Object to results produced against you by solely automated analysis.',
          'Claim compensation for damages arising from unlawful processing.',
        ],
        contact: 'Contact: privacy@outfitai.app',
      },
      {
        title: '10. Policy Changes',
        text: 'This policy may be updated. Significant changes will be communicated via in-app notification or email. The current version is always published on this page.',
      },
    ],
  },
} as const;

export default function PrivacyPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section className="legal-page">
      <h1>{c.title}</h1>
      <p className="page-lead">{c.lead}</p>

      {c.sections.map((section) => (
        <article key={section.title} className="legal-card">
          <h2>{section.title}</h2>
          {'items' in section ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.text}</p>
          )}
          {'contact' in section && section.contact ? <p className="contact-line">{section.contact}</p> : null}
        </article>
      ))}
    </section>
  );
}
