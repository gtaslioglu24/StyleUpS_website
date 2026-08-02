'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Gizlilik Politikası',
    lead: 'Son güncelleme: 2 Ağustos 2026. Bu politika, StyleUpS mobil uygulamasının ("Uygulama") kişisel verileri nasıl topladığını, işlediğini, sakladığını ve koruduğunu açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Genel Veri Koruma Tüzüğü (GDPR) kapsamında veri sorumlusu olarak hareket ediyoruz.',
    sections: [
      {
        title: '1. Veri Sorumlusu',
        text: 'StyleUpS uygulamasını geliştiren ve işleten tüzel/gerçek kişi veri sorumlusudur.',
        contact: 'İletişim: contact@skymoonstudios.com',
      },
      {
        title: '2. Toplanan Kişisel Veriler',
        text: 'Uygulama aşağıdaki kişisel verileri toplar ve işler:',
        items: [
          'Kimlik ve hesap verileri: e-posta adresi, kullanıcı tarafından belirlenen görüntü adı (display name, maks. 15 karakter), Firebase tarafından oluşturulan benzersiz kullanıcı kimliği (UID).',
          'Gardırop verileri: yüklenen kıyafet fotoğrafları, kıyafet kategorisi (üst, alt, ayakkabı, dış giyim), renk bilgisi ve stil etiketi. Bu veriler Firebase Cloud Storage ve Firestore\'da saklanır.',
          'Topluluk paylaşım verileri: selfie fotoğrafı (kamera ile çekilir), seçilen kombin bilgileri (kıyafet görselleri, renkler, stiller), kullanıcı adı. Paylaşımlar tüm oturum açmış kullanıcılara görünür olarak Firestore\'da saklanır.',
          'Stil Arenası verileri: oluşturduğun yüz içermeyen "fit kartları" (kombin görselleri, renkler, stiller), fit kartının rütbesi/puanı/kazanma-kaybetme kaydı, verdiğin oylar ve görünen kullanıcı adın. Fit kartların ve lig sıralaman diğer kullanıcılara açık gösterilir; oy verme işlemi anonimdir.',
          'Profil fotoğrafı: isteğe bağlı olarak yüklediğin profil (avatar) fotoğrafı Firebase Cloud Storage\'da saklanır. Görünen adınla birlikte herkese açık profilinde, lig tablosunda ve sosyal özelliklerde diğer kullanıcılara gösterilir.',
          'Sosyal grafik verileri: takip ettiğin ve seni takip eden kullanıcılar, takipçi/takip sayıların. Takip ilişkilerin ve bu sayılar diğer kullanıcılara görünürdür.',
          'Arkadaş ligleri ve düello verileri: oluşturduğun veya katıldığın özel arkadaş liglerinin adı, üye listesi ve davet kodu; arkadaşlarınla yaptığın 1v1 stil düellolarının kayıtları (katılımcılar, seçilen fitler, oylar ve sonuç).',
          'Etkileşim verileri: bir gönderiyi beğendiğinde kullanıcı kimliğin, gönderi kimliği ve işlem zamanı sunucularımızda saklanır. Bu kayıt beğeni durumunu cihazlar arasında eşitlemek, yinelenen işlemleri önlemek ve toplam beğeni sayısını göstermek için kullanılır. Hangi hesabın hangi gönderiyi beğendiği diğer kullanıcılara gösterilmez.',
          'Moderasyon verileri: kullanıcı raporları (sebep, raporlayan UID, raporlanan kullanıcı UID, paylaşım ID), engelleme kayıtları (engelleyen UID, engellenen UID).',
          'Kullanım verileri: günlük kombin üretim sayısı, günlük paylaşım sayısı, referans kodu. Bu bilgiler plan limitlerinin uygulanması için saklanır.',
          'Bildirim verileri: bildirimlere izin verdiğinde, cihazına ait bir push jetonu (Expo push token) oluşturulur ve hesabınla ilişkili olarak Firestore\'da saklanır. Bu jeton yalnızca seri hatırlatıcıları, arena/oylama hatırlatmaları ve haftalık meydan okuma bildirimlerini göndermek için kullanılır.',
          'Konum verisi: yalnızca sen izin verdiğinde ve uygulama açıkken, hava durumuna uygun kombin önerileri sunmak amacıyla yaklaşık (coarse) konumun kullanılır. Konum yalnızca hava durumu bilgisini almak için işlenir; konum geçmişi saklanmaz, satılmaz veya pazarlama amacıyla üçüncü taraflarla paylaşılmaz.',
          'Tanılama (crash) verileri: bir çökme veya hata oluştuğunda, hata ayrıntıları ve takma-adlı bir kullanıcı kimliği (Firebase UID) crash raporlama hizmeti Sentry\'ye gönderilir. E-posta veya başka kişisel bilgi gönderilmez.',
          'Cihaz tercihleri: dil tercihi (TR/EN) cihazda (AsyncStorage) saklanır ve sunucuya gönderilmez.',
        ],
      },
      {
        title: '3. Toplamadığımız Veriler',
        text: 'Şeffaflık adına, uygulamanın toplamadığı verileri de belirtmek isteriz:',
        items: [
          'Reklam kimlikleri: reklam kimliği (IDFA/GAID) veya benzeri cihaz parmak izi verileri toplanmaz.',
          'İzleme (tracking): App Tracking Transparency (ATT) izni istenmez, uygulamalar arası (cross-app) izleme yapılmaz ve toplanan hiçbir veri reklam veya izleme amacıyla kullanılmaz.',
          'Hassas konum: kesin (fine/GPS) konum veya konum geçmişi toplanmaz; hava durumu için yalnızca yaklaşık (coarse) konum kullanılır (bkz. Bölüm 2).',
          'Ödeme bilgileri: StyleUpS şu anda uygulama içi satın alma veya ücretli abonelik sunmaz ve ödeme bilgisi toplamaz.',
        ],
      },
      {
        title: '4. Cihaz İzinleri',
        text: 'Uygulama aşağıdaki cihaz izinlerini talep eder:',
        items: [
          'Kamera erişimi: topluluk paylaşımları için selfie proof fotoğrafı çekmek amacıyla kullanılır. Kamera yalnızca kullanıcı aktif olarak fotoğraf çektiğinde çalışır.',
          'Fotoğraf galerisi erişimi: gardıroba kıyafet fotoğrafı yüklemek ve proof fotoğrafı seçmek amacıyla kullanılır.',
          'Konum erişimi (yaklaşık/coarse): hava durumuna uygun kombin önerisi sunmak için yalnızca sen istediğinde ve uygulama açıkken kullanılır. İzni cihaz ayarlarından istediğin an geri çekebilirsin.',
          'Bildirim izni: seri hatırlatıcıları, arena/oylama hatırlatmaları ve haftalık meydan okuma bildirimlerini göndermek için kullanılır. Bildirimleri cihaz ayarlarından istediğin an kapatabilirsin.',
          'Arka planda kamera, galeri veya konum erişimi yapılmaz.',
        ],
      },
      {
        title: '5. Verilerin İşlenme Amaçları ve Hukuki Dayanağı',
        items: [
          'Hesap oluşturma ve kimlik doğrulama (Firebase Authentication) — sözleşmenin ifası.',
          'Dijital gardırop yönetimi ve AI destekli kombin önerileri sunma — sözleşmenin ifası ve meşru menfaat.',
          'Topluluk paylaşımlarının proof özelliği: paylaşım sırasında çekilen selfie, paylaşımın gerçek bir kombine ait olduğunu göstermek amacıyla saklanır ve yayınlanmadan önce güvenlik taramasından geçirilir — meşru menfaat ve hizmet kalitesi.',
          'İçerik moderasyonu: paylaşılan ve arenaya giren tüm görseller, yayınlanmadan önce Google Cloud Vision SafeSearch ile otomatik olarak denetlenir; şiddet, nefret söylemi, cinsel veya tehlikeli içerik işaretleri taşıyan içerik engellenir — hukuki yükümlülük ve topluluk güvenliği.',
          'Kıyafet görsellerinin arka planının kaldırılması (isteğe bağlı özellik): görsel bu amaçla remove.bg servisine iletilir — sözleşmenin ifası ve hizmet kalitesi.',
          'Hava durumuna uygun kombin önerileri sunmak için yaklaşık (coarse) konumunun hava durumu servisine (Open-Meteo) gönderilmesi — açık rızan.',
          'Takip, arkadaş ligleri, 1v1 düellolar ve push bildirimleri gibi sosyal özelliklerin sağlanması — sözleşmenin ifası ve meşru menfaat.',
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
          'Google Cloud Vision (Google LLC): paylaşılan ve arenaya giren görseller, içerik moderasyonu (SafeSearch) amacıyla Google Cloud Vision servisine gönderilir. İşleme, uygulamanın Google Cloud servis hesabı üzerinden gerçekleşir. Google gizlilik politikası: https://policies.google.com/privacy',
          'Firebase App Check: hizmeti kötüye kullanımdan korumak ve isteklerin gerçek uygulama örneklerinden geldiğini doğrulamak için iOS\'ta Apple App Attest, Android\'de Google Play Integrity ve web ortamında reCAPTCHA v3 kullanılır. Bu sağlayıcılar doğrulama amacıyla cihaz ve istek bilgilerini işleyebilir.',
          'Sentry (Functional Software, Inc.): uygulama kararlılığını sağlamak için crash/hata raporlama hizmeti. Gönderilen veriler yalnızca hata ayrıntıları ve takma-adlı Firebase UID\'dir; e-posta veya başka kişisel bilgi gönderilmez ve bu veriler reklam için kullanılmaz. Sentry gizlilik politikası: https://sentry.io/privacy/',
          'Firebase Analytics (Google LLC, yalnızca web): web sürümünde temel kullanım ölçümü için kullanılır. Bu veriler reklam veya uygulamalar arası izleme için kullanılmaz. Google gizlilik politikası: https://policies.google.com/privacy',
          'remove.bg (Kaleido AI GmbH): arka plan kaldırma özelliğini kullandığında, ilgili kıyafet görseli arka planının kaldırılması amacıyla remove.bg servisine gönderilir. remove.bg gizlilik politikası: https://www.remove.bg/privacy',
          'Expo push servisi (650 Industries, Inc.): push bildirimleri, cihaz push jetonun ve bildirim içeriği kullanılarak Expo\'nun push altyapısı (exp.host) üzerinden iletilir. Expo gizlilik politikası: https://expo.dev/privacy',
          'Open-Meteo: hava durumuna uygun öneri sunmak için yaklaşık konum koordinatların (enlem/boylam) hava durumu bilgisini almak amacıyla Open-Meteo servisine gönderilir. Kimlik bilgisi gönderilmez. Open-Meteo gizlilik politikası: https://open-meteo.com/en/terms',
        ],
      },
      {
        title: '7. Uluslararası Veri Transferi',
        text: 'Firebase, Google Cloud, Sentry, Expo, remove.bg ve Open-Meteo altyapısı nedeniyle kişisel veriler ABD veya Avrupa Ekonomik Alanı (AEA) bölgesindeki sunucularda işlenebilir. Bu transferler, KVKK m.9 ve GDPR 46. madde kapsamında yeterli koruma tedbirleri (standart sözleşme maddeleri) çerçevesinde gerçekleştirilir.',
      },
      {
        title: '8. Veri Saklama ve Silme',
        text: 'Verileriniz aşağıdaki sürelerde saklanır ve silinir:',
        items: [
          'Hesap verileri: hesap aktif olduğu sürece saklanır. Hesap silme talebinde tüm veriler tek seferde silinir.',
          'Hesap silme kapsamı: profil ve kullanıcı adı kayıtları, push jetonu, profil fotoğrafı, gardırop ve favoriler, topluluk gönderileri ve görselleri, beğeniler, takip ilişkileri, arkadaşlık/lig ve düello kayıtları, davetler, bildirim ve doğrulama kayıtları, raporlar, engellemeler, Stil Arenası fitleri ve oyları, liderlik kayıtları, Apple oturum verileri ve Firebase Authentication hesabı kalıcı olarak silinir. Sahibi olduğun arkadaş ligleri kapatılır; üye olduklarından çıkarılırsın.',
          'Cihaz verileri: dil tercihi ve bazı arayüz tercihleri cihazda (AsyncStorage) saklanır; uygulamayı kaldırdığında otomatik olarak silinir.',
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
          'Firebase App Check ile iOS\'ta App Attest, Android\'de Play Integrity ve web\'de reCAPTCHA v3 kullanılarak API isteklerinin gerçek uygulamadan geldiği doğrulanır.',
        ],
      },
      {
        title: '10. Çerezler ve İzleme Teknolojileri',
        text: 'Mobil uygulama çerez kullanmaz. Web sitesi ve uygulamanın web sürümü, teknik olarak gerekli çerezleri (oturum yönetimi) ve web sürümünde temel kullanım ölçümü için Firebase Analytics çerezlerini kullanır. Hiçbir reklam veya uygulamalar arası izleme çerezi ya da reklam pikseli kullanılmaz.',
      },
      {
        title: '11. Çocukların Gizliliği',
        text: 'Uygulama 16 yaşından küçük kullanıcılara yönelik değildir ve bilinçli olarak 16 yaşından küçük bireylerden kişisel veri toplamaz. 16 yaş altı bir kullanıcının veri paylaştığını fark etmemiz halinde ilgili hesap ve veriler en kısa sürede silinir. Ebeveynler veya yasal vasiler bu durumu contact@skymoonstudios.com adresine bildirerek silme talep edebilir.',
      },
      {
        title: '12. KVKK ve GDPR Kapsamındaki Haklarınız',
        text: 'Aşağıdaki haklarınızı kullanmak için contact@skymoonstudios.com adresine başvurabilirsiniz:',
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
        contact: 'Başvuru adresi: contact@skymoonstudios.com — Talepler en geç 30 gün içinde yanıtlanır.',
      },
      {
        title: '13. Politika Değişiklikleri',
        text: 'Bu politika güncellenebilir. Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulur. Güncel sürüm her zaman bu sayfada yayınlanır. Değişiklik sonrası uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
      },
      {
        title: '14. Stil Arenası, Sosyal Özellikler ve Herkese Açık Görünürlük',
        text: 'Stil Arenası özelliğini kullandığında, oluşturduğun kombin kartları (yüz içermez) ve görünen kullanıcı adın, sıralaman ve puanın diğer kullanıcılara açık şekilde gösterilir. Oy verme işlemi anonimdir; kimin neye oy verdiği diğer kullanıcılarla paylaşılmaz. Ayrıca görünen adın, profil fotoğrafın (yüklediysen) ve takipçi/takip sayıların herkese açık profilinde diğer kullanıcılara görünür; başka kullanıcıları takip edebilir, arkadaş ligleri kurabilir ve 1v1 düellolar yapabilirsin. Hesabını sildiğinde fit kartların, oyların, lig kayıtların, takip ilişkilerin ve profil fotoğrafın kalıcı olarak silinir.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lead: 'Last updated: August 2, 2026. This policy explains how the StyleUpS mobile application ("App") collects, processes, stores, and protects personal data. We act as the data controller under applicable data protection laws, including the Turkish Personal Data Protection Law No. 6698 (KVKK) and the EU General Data Protection Regulation (GDPR).',
    sections: [
      {
        title: '1. Data Controller',
        text: 'The individual or entity that develops and operates the StyleUpS application is the data controller.',
        contact: 'Contact: contact@skymoonstudios.com',
      },
      {
        title: '2. Personal Data We Collect',
        text: 'The App collects and processes the following personal data:',
        items: [
          'Identity and account data: email address, user-chosen display name (max 15 characters), Firebase-generated unique user ID (UID).',
          'Wardrobe data: uploaded garment photos, garment category (top, bottom, shoes, outerwear), color information, and style tags. This data is stored in Firebase Cloud Storage and Firestore.',
          'Community post data: selfie photo (taken via camera), selected outfit information (garment images, colors, styles), username. Posts are stored in Firestore and visible to all signed-in users.',
          'Style Arena data: the face-free "fit cards" you create (outfit images, colors, styles), each fit card\'s rank/points/win-loss record, the votes you cast, and your displayed username. Your fit cards and league standing are shown publicly to other users; voting is anonymous.',
          'Profile photo: the optional profile (avatar) photo you upload is stored in Firebase Cloud Storage. Together with your display name it is shown publicly to other users on your public profile, the league table, and social features.',
          'Social graph data: the users you follow and who follow you, and your follower/following counts. Your follow relationships and these counts are visible to other users.',
          'Friend league and duel data: the name, member list, and invite code of private friend leagues you create or join; and records of the 1v1 style duels you play with friends (participants, chosen fits, votes, and outcome).',
          'Interaction data: when you like a post, your user ID, the post ID, and the time of the action are stored on our servers. This record synchronizes likes across devices, prevents duplicates, and displays the total count. Other users are not shown which account liked which post.',
          'Moderation data: user reports (reason, reporter UID, reported user UID, post ID), block records (blocker UID, blocked UID).',
          'Usage data: daily outfit generation count, daily share count, referral code. This information is stored to enforce plan limits.',
          'Notification data: if you allow notifications, a device push token (Expo push token) is generated and stored linked to your account. This token is used only to send streak reminders, arena/voting reminders, and weekly challenge notifications.',
          'Location data: only when you grant permission and while the app is open, your approximate (coarse) location is used to provide weather-appropriate outfit suggestions. Location is processed solely to fetch weather information; we do not store location history, sell it, or share it with third parties for marketing.',
          'Diagnostics (crash) data: when a crash or error occurs, error details and a pseudonymous user identifier (Firebase UID) are sent to the crash-reporting service Sentry. No email or other personal information is sent.',
          'Device preferences: language preference (TR/EN) is stored on-device (AsyncStorage) and is not sent to the server.',
        ],
      },
      {
        title: '3. Data We Do NOT Collect',
        text: 'For transparency, we want to clarify data the App does not collect:',
        items: [
          'Advertising identifiers: advertising IDs (IDFA/GAID) or similar device fingerprint data are not collected.',
          'Tracking: no App Tracking Transparency (ATT) permission is requested, no cross-app tracking is performed, and none of the data we collect is used for advertising or tracking.',
          'Precise location: fine/GPS location or location history is not collected; only approximate (coarse) location is used for weather (see Section 2).',
          'Payment information: StyleUpS currently offers no in-app purchases or paid subscriptions and does not collect payment information.',
        ],
      },
      {
        title: '4. Device Permissions',
        text: 'The App requests the following device permissions:',
        items: [
          'Camera access: used to take selfie proof photos for community posts. The camera only operates when the user actively takes a photo.',
          'Photo library access: used to upload garment photos to the wardrobe and select proof photos.',
          'Location access (approximate/coarse): used only when you request it and while the app is open, to provide weather-appropriate outfit suggestions. You can revoke this permission at any time in device settings.',
          'Notification permission: used to send streak reminders, arena/voting reminders, and weekly challenge notifications. You can turn notifications off at any time in device settings.',
          'No background camera, photo library, or location access occurs.',
        ],
      },
      {
        title: '5. Purposes and Legal Basis for Processing',
        items: [
          'Account creation and authentication (Firebase Authentication) — performance of contract.',
          'Digital wardrobe management and AI-powered outfit suggestions — performance of contract and legitimate interest.',
          'Proof feature for community posts: the selfie taken during sharing is stored to indicate the post belongs to a genuine outfit and is screened for safety before publishing — legitimate interest and service quality.',
          'Content moderation: all shared and competing images are automatically screened with Google Cloud Vision SafeSearch before publishing; content flagged for violence, hate speech, sexual or dangerous content is blocked — legal obligation and community safety.',
          'Removing the background of garment images (optional feature): the image is sent to the remove.bg service for this purpose — performance of contract and service quality.',
          'Sending your approximate (coarse) location to the weather service (Open-Meteo) to provide weather-appropriate outfit suggestions — your explicit consent.',
          'Providing social features such as follows, friend leagues, 1v1 duels, and push notifications — performance of contract and legitimate interest.',
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
          'Google Cloud Vision (Google LLC): shared and competing images are sent to the Google Cloud Vision service for content moderation (SafeSearch). Processing occurs through the app\'s Google Cloud service account. Google privacy policy: https://policies.google.com/privacy',
          'Firebase App Check: to protect the service from abuse and verify requests from genuine app instances, we use Apple App Attest on iOS, Google Play Integrity on Android, and reCAPTCHA v3 on the web. These providers may process device and request information for verification.',
          'Sentry (Functional Software, Inc.): crash/error reporting to keep the app stable. The only data sent is error details and a pseudonymous Firebase UID; no email or other personal information is sent, and this data is not used for advertising. Sentry privacy policy: https://sentry.io/privacy/',
          'Firebase Analytics (Google LLC, web only): used for basic usage metrics in the web version. This data is not used for advertising or cross-app tracking. Google privacy policy: https://policies.google.com/privacy',
          'remove.bg (Kaleido AI GmbH): when you use the background-removal feature, the relevant garment image is sent to remove.bg to remove its background. remove.bg privacy policy: https://www.remove.bg/privacy',
          'Expo push service (650 Industries, Inc.): push notifications are delivered through Expo\'s push infrastructure (exp.host) using your device push token and the notification content. Expo privacy policy: https://expo.dev/privacy',
          'Open-Meteo: to provide weather-appropriate suggestions, your approximate location coordinates (latitude/longitude) are sent to the Open-Meteo service to fetch weather information. No identity information is sent. Open-Meteo terms: https://open-meteo.com/en/terms',
        ],
      },
      {
        title: '7. International Data Transfers',
        text: 'Due to Firebase, Google Cloud, Sentry, Expo, remove.bg, and Open-Meteo infrastructure, personal data may be processed on servers in the United States or the European Economic Area (EEA). These transfers are carried out under appropriate safeguards (standard contractual clauses) in accordance with Article 9 of the KVKK and Article 46 of the GDPR.',
      },
      {
        title: '8. Data Retention and Deletion',
        text: 'Your data is retained and deleted according to the following:',
        items: [
          'Account data: retained while the account is active. Upon account deletion request, all data is deleted at once.',
          'Scope of account deletion: profile and username records, push token, profile photo, wardrobe and favorites, community posts and images, likes, follow relationships, friend-league and duel records, referrals, notification and verification records, reports, blocks, Style Arena fits and votes, leaderboard records, Apple sign-in data, and the Firebase Authentication account are permanently deleted. Friend leagues you own are closed; you are removed from leagues you joined.',
          'Device data: language and certain interface preferences are stored on-device (AsyncStorage) and are automatically deleted when you uninstall the app.',
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
          'Firebase App Check verifies genuine app requests using App Attest on iOS, Play Integrity on Android, and reCAPTCHA v3 on the web.',
        ],
      },
      {
        title: '10. Cookies and Tracking Technologies',
        text: 'The mobile App does not use cookies. The website and the web version of the App use technically necessary cookies (session management) and, in the web version, Firebase Analytics cookies for basic usage metrics. No advertising or cross-app tracking cookies or advertising pixels are used.',
      },
      {
        title: '11. Children\'s Privacy',
        text: 'The App is not intended for users under 16 and does not knowingly collect personal data from individuals under 16. If we become aware that a user under 16 has shared personal data, the relevant account and data will be deleted as soon as possible. Parents or legal guardians may request deletion by contacting contact@skymoonstudios.com.',
      },
      {
        title: '12. Your Rights Under KVKK and GDPR',
        text: 'You may exercise the following rights by contacting contact@skymoonstudios.com:',
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
        contact: 'Contact: contact@skymoonstudios.com — Requests are responded to within 30 days.',
      },
      {
        title: '13. Policy Changes',
        text: 'This policy may be updated. Significant changes will be communicated via in-app notification or email. The current version is always published on this page. Continued use of the App after changes constitutes acceptance of the updated policy.',
      },
      {
        title: '14. Style Arena, Social Features and Public Visibility',
        text: 'When you use the Style Arena, the outfit cards you create (no face) and your displayed username, rank and points are shown publicly to other users. Voting is anonymous; who voted for what is not shared with other users. In addition, your display name, profile photo (if you upload one) and follower/following counts are visible to other users on your public profile; you can follow other users, create friend leagues, and play 1v1 duels. When you delete your account, your fit cards, votes, league records, follow relationships and profile photo are permanently deleted.',
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
