'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Gizlilik Politikası',
    lead: 'Son güncelleme: 25 Şubat 2026. Bu politika, StyleUpS mobil uygulamasının ("Uygulama") kişisel verileri nasıl topladığını, işlediğini, sakladığını ve koruduğunu açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Genel Veri Koruma Tüzüğü (GDPR) kapsamında veri sorumlusu olarak hareket ediyoruz.',
    sections: [
      {
        title: '1. Veri Sorumlusu',
        text: 'StyleUpS uygulamasını geliştiren ve işleten tüzel/gerçek kişi veri sorumlusudur.',
        contact: 'İletişim: privacy@outfitai.app',
      },
      {
        title: '2. Toplanan Kişisel Veriler',
        text: 'Uygulama aşağıdaki kişisel verileri toplar ve işler:',
        items: [
          'Kimlik ve hesap verileri: e-posta adresi, kullanıcı tarafından belirlenen görüntü adı (display name, maks. 15 karakter), Firebase tarafından oluşturulan benzersiz kullanıcı kimliği (UID).',
          'Gardırop verileri: yüklenen kıyafet fotoğrafları, kıyafet kategorisi (üst, alt, ayakkabı, dış giyim), renk bilgisi ve stil etiketi. Bu veriler Firebase Cloud Storage ve Firestore\'da saklanır.',
          'Topluluk paylaşım verileri: selfie fotoğrafı (kamera ile çekilir), seçilen kombin bilgileri (kıyafet görselleri, renkler, stiller), kullanıcı adı. Paylaşımlar tüm oturum açmış kullanıcılara görünür olarak Firestore\'da saklanır.',
          'Etkileşim verileri: beğeniler yalnızca cihazınızda (AsyncStorage) saklanır; sunucuya yalnızca anonim beğeni sayacı gönderilir. Bireysel beğeni kaydı sunucuda tutulmaz.',
          'Moderasyon verileri: kullanıcı raporları (sebep, raporlayan UID, raporlanan kullanıcı UID, paylaşım ID), engelleme kayıtları (engelleyen UID, engellenen UID).',
          'Kullanım verileri: günlük kombin üretim sayısı, günlük paylaşım sayısı, referans kodu. Bu bilgiler plan limitlerinin uygulanması için saklanır.',
          'Cihaz tercihleri: dil tercihi (TR/EN) cihazda (AsyncStorage) saklanır ve sunucuya gönderilmez.',
        ],
      },
      {
        title: '3. Toplamadığımız Veriler',
        text: 'Şeffaflık adına, uygulamanın toplamadığı verileri de belirtmek isteriz:',
        items: [
          'Konum verisi: uygulama GPS, IP tabanlı konum veya herhangi bir konum verisi toplamaz.',
          'Cihaz tanımlayıcıları: reklam kimliği (IDFA/GAID) veya benzeri cihaz parmak izi verileri toplanmaz.',
          'Analitik ve izleme: Firebase Analytics, Crashlytics veya herhangi bir üçüncü parti analitik/izleme SDK\'sı kullanılmaz.',
          'Push bildirim token\'ları: uygulama push bildirim göndermez ve FCM token\'ı toplamaz.',
          'Ödeme bilgileri: uygulama doğrudan ödeme bilgisi toplamaz. Gelecekte eklenecek uygulama içi satın alma işlemleri Apple/Google altyapısı üzerinden gerçekleştirilecek olup ödeme bilgilerine erişimimiz olmayacaktır.',
        ],
      },
      {
        title: '4. Cihaz İzinleri',
        text: 'Uygulama aşağıdaki cihaz izinlerini talep eder:',
        items: [
          'Kamera erişimi: topluluk paylaşımları için selfie proof fotoğrafı çekmek amacıyla kullanılır. Kamera yalnızca kullanıcı aktif olarak fotoğraf çektiğinde çalışır.',
          'Fotoğraf galerisi erişimi: gardıroba kıyafet fotoğrafı yüklemek ve proof fotoğrafı seçmek amacıyla kullanılır.',
          'Arka planda kamera veya galeri erişimi yapılmaz.',
        ],
      },
      {
        title: '5. Verilerin İşlenme Amaçları ve Hukuki Dayanağı',
        items: [
          'Hesap oluşturma ve kimlik doğrulama (Firebase Authentication) — sözleşmenin ifası.',
          'Dijital gardırop yönetimi ve AI destekli kombin önerileri sunma — sözleşmenin ifası ve meşru menfaat.',
          'Topluluk paylaşımlarının proof doğrulaması: selfie fotoğrafınız ve belirtilen kıyafet bilgileri, paylaşımın gerçek bir kombin olduğunu doğrulamak için OpenAI API\'sine gönderilir — meşru menfaat ve hizmet kalitesi.',
          'İçerik moderasyonu: selfie fotoğrafları OpenAI Moderation API ile uygunsuz içerik taramasından geçirilir — hukuki yükümlülük ve topluluk güvenliği.',
          'Plan limitlerinin uygulanması (günlük kombin/paylaşım kotaları) — sözleşmenin ifası.',
          'Kullanıcı raporları ve engellemelerin işlenmesi — hukuki yükümlülük ve topluluk güvenliği.',
          'Referans sistemi yönetimi — meşru menfaat.',
        ],
      },
      {
        title: '6. Üçüncü Taraf Hizmet Sağlayıcılar',
        text: 'Verileriniz aşağıdaki üçüncü taraf hizmet sağlayıcılarla paylaşılır:',
        items: [
          'Firebase (Google LLC): kimlik doğrulama (Firebase Auth), veritabanı (Firestore), dosya depolama (Cloud Storage), sunucu tarafı işlevler (Cloud Functions). Google gizlilik politikası: https://policies.google.com/privacy',
          'OpenAI (OpenAI LLC): topluluk paylaşımlarındaki selfie fotoğrafları, proof doğrulaması ve içerik moderasyonu amacıyla OpenAI sunucularına gönderilir. Gönderilen veriler: selfie görsel URL\'si ve beklenen kıyafet renk/stil bilgileri. OpenAI gizlilik politikası: https://openai.com/policies/privacy-policy',
          'Firebase App Check (ReCAPTCHA v3, yalnızca web): bot koruması amacıyla tarayıcı parmak izi verileri Google\'a gönderilir.',
        ],
      },
      {
        title: '7. Uluslararası Veri Transferi',
        text: 'Firebase altyapısı nedeniyle kişisel veriler ABD veya Avrupa Ekonomik Alanı (AEA) bölgesindeki sunucularda işlenebilir. OpenAI sunucuları ABD\'de yer almaktadır. Bu transferler, KVKK m.9 ve GDPR 46. madde kapsamında yeterli koruma tedbirleri (standart sözleşme maddeleri) çerçevesinde gerçekleştirilir.',
      },
      {
        title: '8. Veri Saklama ve Silme',
        text: 'Verileriniz aşağıdaki sürelerde saklanır ve silinir:',
        items: [
          'Hesap verileri: hesap aktif olduğu sürece saklanır. Hesap silme talebinde tüm veriler tek seferde silinir.',
          'Hesap silme kapsamı: profil bilgileri (Firestore kullanıcı dokümanı), tüm gardırop öğeleri ve fotoğrafları (Firestore + Cloud Storage), tüm topluluk paylaşımları ve fotoğrafları (Firestore + Cloud Storage), tüm engelleme kayıtları, Firebase Authentication kaydı kalıcı olarak silinir.',
          'Cihaz verileri: beğeniler ve dil tercihi yalnızca cihazınızda (AsyncStorage) saklanır; uygulamayı kaldırdığınızda otomatik olarak silinir.',
          'Raporlar: topluluk güvenliği amacıyla, diğer kullanıcılar tarafından oluşturulan raporlardaki anonim referanslar saklanabilir.',
          'Yasal yükümlülükler gerektirdiğinde ilgili veriler zorunlu süre boyunca tutulabilir.',
        ],
      },
      {
        title: '9. Veri Güvenliği',
        items: [
          'Firebase Security Rules ile tüm veritabanı ve depolama erişimleri kısıtlanmıştır: kullanıcılar yalnızca kendi verilerine yazabilir.',
          'Dosya yükleme boyutu sınırlıdır: gardırop görselleri maks. 10 MB, paylaşım görselleri maks. 12 MB.',
          'Depolama dosya adları kullanıcı UID\'sine bağlıdır; başka bir kullanıcının dosyasına erişim teknik olarak engellenmiştir.',
          'API iletişimleri HTTPS üzerinden şifrelenmiş olarak gerçekleştirilir.',
          'Firebase App Check (web) ile API isteklerinin gerçek uygulamadan geldiği doğrulanır.',
        ],
      },
      {
        title: '10. Çerezler ve İzleme Teknolojileri',
        text: 'Mobil uygulama çerez kullanmaz. Bu web sitesi yalnızca teknik olarak gerekli çerezler kullanır (oturum yönetimi). Hiçbir üçüncü parti izleme çerezi veya reklam pikseli kullanılmaz.',
      },
      {
        title: '11. Çocukların Gizliliği',
        text: 'Uygulama 13 yaşın altındaki kullanıcılara yönelik değildir ve bilinçli olarak 13 yaşın altındaki bireylerden kişisel veri toplamaz. 13 yaşın altında bir kullanıcının veri paylaştığını fark etmemiz halinde ilgili hesap ve veriler en kısa sürede silinir. Ebeveynler veya yasal vasiler bu durumu privacy@outfitai.app adresine bildirerek silme talep edebilir.',
      },
      {
        title: '12. KVKK ve GDPR Kapsamındaki Haklarınız',
        text: 'Aşağıdaki haklarınızı kullanmak için privacy@outfitai.app adresine başvurabilirsiniz:',
        items: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme.',
          'İşlenmişse buna ilişkin bilgi talep etme.',
          'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.',
          'Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme.',
          'KVKK m.7 / GDPR m.17 kapsamında verilerin silinmesini veya yok edilmesini isteme.',
          'Düzeltme/silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme.',
          'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme.',
          'Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme.',
          'Verilerinizin taşınabilirliğini talep etme (GDPR m.20).',
          'İşlemenin kısıtlanmasını isteme (GDPR m.18).',
        ],
        contact: 'Başvuru adresi: privacy@outfitai.app — Talepler en geç 30 gün içinde yanıtlanır.',
      },
      {
        title: '13. Politika Değişiklikleri',
        text: 'Bu politika güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulur. Güncel sürüm her zaman bu sayfada yayınlanır. Değişiklik sonrası uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lead: 'Last updated: February 25, 2026. This policy explains how the StyleUpS mobile application ("App") collects, processes, stores, and protects personal data. We act as the data controller under applicable data protection laws, including the Turkish Personal Data Protection Law No. 6698 (KVKK) and the EU General Data Protection Regulation (GDPR).',
    sections: [
      {
        title: '1. Data Controller',
        text: 'The individual or entity that develops and operates the StyleUpS application is the data controller.',
        contact: 'Contact: privacy@outfitai.app',
      },
      {
        title: '2. Personal Data We Collect',
        text: 'The App collects and processes the following personal data:',
        items: [
          'Identity and account data: email address, user-chosen display name (max 15 characters), Firebase-generated unique user ID (UID).',
          'Wardrobe data: uploaded garment photos, garment category (top, bottom, shoes, outerwear), color information, and style tags. This data is stored in Firebase Cloud Storage and Firestore.',
          'Community post data: selfie photo (taken via camera), selected outfit information (garment images, colors, styles), username. Posts are stored in Firestore and visible to all signed-in users.',
          'Interaction data: likes are stored only on your device (AsyncStorage); only an anonymous like counter is sent to the server. Individual like records are not stored server-side.',
          'Moderation data: user reports (reason, reporter UID, reported user UID, post ID), block records (blocker UID, blocked UID).',
          'Usage data: daily outfit generation count, daily share count, referral code. This information is stored to enforce plan limits.',
          'Device preferences: language preference (TR/EN) is stored on-device (AsyncStorage) and is not sent to the server.',
        ],
      },
      {
        title: '3. Data We Do NOT Collect',
        text: 'For transparency, we want to clarify data the App does not collect:',
        items: [
          'Location data: the App does not collect GPS, IP-based location, or any location data.',
          'Device identifiers: advertising IDs (IDFA/GAID) or similar device fingerprint data are not collected.',
          'Analytics and tracking: Firebase Analytics, Crashlytics, or any third-party analytics/tracking SDKs are not used.',
          'Push notification tokens: the App does not send push notifications and does not collect FCM tokens.',
          'Payment information: the App does not directly collect payment data. Future in-app purchases will be processed through Apple/Google infrastructure, and we will not have access to payment details.',
        ],
      },
      {
        title: '4. Device Permissions',
        text: 'The App requests the following device permissions:',
        items: [
          'Camera access: used to take selfie proof photos for community posts. The camera only operates when the user actively takes a photo.',
          'Photo library access: used to upload garment photos to the wardrobe and select proof photos.',
          'No background camera or photo library access occurs.',
        ],
      },
      {
        title: '5. Purposes and Legal Basis for Processing',
        items: [
          'Account creation and authentication (Firebase Authentication) — performance of contract.',
          'Digital wardrobe management and AI-powered outfit suggestions — performance of contract and legitimate interest.',
          'Proof verification of community posts: your selfie photo and specified garment information are sent to the OpenAI API to verify the post is a genuine outfit — legitimate interest and service quality.',
          'Content moderation: selfie photos are screened for inappropriate content via the OpenAI Moderation API — legal obligation and community safety.',
          'Enforcing plan limits (daily outfit/share quotas) — performance of contract.',
          'Processing user reports and blocks — legal obligation and community safety.',
          'Referral system management — legitimate interest.',
        ],
      },
      {
        title: '6. Third-Party Service Providers',
        text: 'Your data is shared with the following third-party service providers:',
        items: [
          'Firebase (Google LLC): authentication (Firebase Auth), database (Firestore), file storage (Cloud Storage), server-side functions (Cloud Functions). Google privacy policy: https://policies.google.com/privacy',
          'OpenAI (OpenAI LLC): selfie photos from community posts are sent to OpenAI servers for proof verification and content moderation. Data sent: selfie image URL and expected garment color/style information. OpenAI privacy policy: https://openai.com/policies/privacy-policy',
          'Firebase App Check (ReCAPTCHA v3, web only): browser fingerprint data is sent to Google for bot protection.',
        ],
      },
      {
        title: '7. International Data Transfers',
        text: 'Due to Firebase infrastructure, personal data may be processed on servers in the United States or the European Economic Area (EEA). OpenAI servers are located in the United States. These transfers are carried out under appropriate safeguards (standard contractual clauses) in accordance with Article 9 of the KVKK and Article 46 of the GDPR.',
      },
      {
        title: '8. Data Retention and Deletion',
        text: 'Your data is retained and deleted according to the following:',
        items: [
          'Account data: retained while the account is active. Upon account deletion request, all data is deleted at once.',
          'Scope of account deletion: profile information (Firestore user document), all wardrobe items and photos (Firestore + Cloud Storage), all community posts and photos (Firestore + Cloud Storage), all block records, and the Firebase Authentication record are permanently deleted.',
          'Device data: likes and language preference are stored only on your device (AsyncStorage) and are automatically deleted when you uninstall the app.',
          'Reports: for community safety purposes, anonymous references in reports created by other users may be retained.',
          'Data may be retained longer where required by legal obligations.',
        ],
      },
      {
        title: '9. Data Security',
        items: [
          'Firebase Security Rules restrict all database and storage access: users can only write to their own data.',
          'File upload sizes are limited: wardrobe images max 10 MB, post images max 12 MB.',
          'Storage file names are bound to user UIDs; access to another user\'s files is technically prevented.',
          'API communications are encrypted via HTTPS.',
          'Firebase App Check (web) verifies that API requests originate from the genuine application.',
        ],
      },
      {
        title: '10. Cookies and Tracking Technologies',
        text: 'The mobile App does not use cookies. This website uses only technically necessary cookies (session management). No third-party tracking cookies or advertising pixels are used.',
      },
      {
        title: '11. Children\'s Privacy',
        text: 'The App is not intended for users under the age of 13 and does not knowingly collect personal data from individuals under 13. If we become aware that a user under 13 has shared personal data, the relevant account and data will be deleted as soon as possible. Parents or legal guardians may request deletion by contacting privacy@outfitai.app.',
      },
      {
        title: '12. Your Rights Under KVKK and GDPR',
        text: 'You may exercise the following rights by contacting privacy@outfitai.app:',
        items: [
          'Learn whether your personal data is being processed.',
          'Request information about processing activities.',
          'Learn the purpose of processing and whether data is used accordingly.',
          'Know the third parties to whom your data has been transferred domestically or abroad.',
          'Request correction of incomplete or inaccurate data.',
          'Request deletion or destruction of data under Article 7 of the KVKK / Article 17 of the GDPR.',
          'Request that corrections or deletions be communicated to third parties.',
          'Object to results produced against you by solely automated analysis.',
          'Claim compensation for damages arising from unlawful processing.',
          'Request data portability (GDPR Article 20).',
          'Request restriction of processing (GDPR Article 18).',
        ],
        contact: 'Contact: privacy@outfitai.app — Requests are responded to within 30 days.',
      },
      {
        title: '13. Policy Changes',
        text: 'This policy may be updated. Significant changes will be communicated via in-app notification or email. The current version is always published on this page. Continued use of the App after changes constitutes acceptance of the updated policy.',
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
          ) : null}
          {'text' in section && section.text ? <p>{section.text}</p> : null}
          {'contact' in section && section.contact ? <p className="contact-line">{section.contact}</p> : null}
        </article>
      ))}
    </section>
  );
}
