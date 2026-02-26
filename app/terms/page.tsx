'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Kullanım Koşulları',
    lead: 'Son güncelleme: 26 Şubat 2026. StyleUpS mobil uygulamasını ("Uygulama") kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatle okuyunuz.',
    sections: [
      {
        title: '1. Hizmetin Tanımı',
        text: 'StyleUpS, kullanıcıların gardıroplarını dijital ortamda yönetmesine, yapay zekâ destekli kombin önerileri almasına ve topluluk üzerinden paylaşım yapmasına olanak tanıyan bir mobil uygulamadır. Uygulama Firebase altyapısı üzerinde çalışır; hesap doğrulaması Firebase Authentication, veri depolaması Cloud Firestore ve görsel depolaması Firebase Cloud Storage aracılığıyla gerçekleştirilir.',
      },
      {
        title: '2. Hesap Oluşturma ve Güvenlik',
        items: [
          'Kayıt e-posta adresi ve şifre ile yapılır. Doğru ve güncel bir e-posta adresi kullanmalısınız.',
          'Şifreniz Firebase Authentication tarafından güvenli şekilde saklanır; biz dahil hiç kimse şifrenizi düz metin olarak göremez.',
          'Görünen ad (display name) en fazla 15 karakter olabilir ve diğer kullanıcılar tarafından görülür.',
          'Hesap güvenliğinizden (şifre gizliliği, oturum yönetimi) siz sorumlusunuz.',
          'Hesabınız üzerinden gerçekleşen tüm işlemlerden kullanıcı olarak siz sorumlusunuz.',
          'Hesabınıza yetkisiz erişim fark ettiğinizde derhal support@outfitai.app adresine bildirmelisiniz.',
        ],
      },
      {
        title: '3. Yaş Sınırı',
        text: 'Uygulamayı kullanabilmek için en az 13 yaşında olmalısınız. 18 yaşından küçük kullanıcılar, bir ebeveyn veya yasal vasinin onayı ile uygulamayı kullanabilir. 13 yaş altı kullanıcılardan haberdar olmamız halinde hesap derhal kapatılır.',
      },
      {
        title: '4. Abonelik Planları ve Limitler',
        text: 'Uygulama üç kullanım planı sunar. Her planın belirli günlük ve toplam kullanım limitleri vardır:',
        items: [
          'Free (Ücretsiz): Gardıropta en fazla 20 kıyafet, günde 2 kombin önerisi, günde 1 topluluk paylaşımı.',
          'Invite: Gardıropta en fazla 40 kıyafet, günde 5 kombin önerisi, günde 2 topluluk paylaşımı. Davet (referans) sistemi aracılığıyla kazanılır.',
          'Premium VIP: Gardıropta en fazla 80 kıyafet, günde 20 kombin önerisi, günde 3 topluluk paylaşımı.',
          'Plan limitleri her gün gece yarısı (UTC) sıfırlanır.',
          'Plan özellikleri ve limitler önceden bildirim yapılarak değiştirilebilir.',
        ],
      },
      {
        title: '5. Ödeme ve Abonelik Yönetimi',
        items: [
          'Premium VIP abonelikleri Apple App Store veya Google Play Store uygulama içi satın alma (IAP) altyapısı üzerinden işlenir.',
          'Ödeme bilgileriniz Apple veya Google tarafından işlenir; StyleUpS hiçbir kredi kartı veya ödeme bilgisini toplamaz veya saklamaz.',
          'Abonelik, dönem bitiminden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir.',
          'İptal işlemi cihazınızın ayarlarındaki abonelik yönetimi bölümünden yapılır.',
          'İade talepleri ilgili mağaza (Apple/Google) politikalarına tabidir; doğrudan StyleUpS üzerinden iade yapılamamaktadır.',
        ],
      },
      {
        title: '6. Referans (Davet) Sistemi',
        items: [
          'Her kullanıcıya benzersiz bir referans kodu atanır.',
          'Yeni bir kullanıcı sizin referans kodunuzu kullanarak kayıt olduğunda başarılı referans sayınız artar.',
          'Her 5 başarılı referansta 1 ay süreyle Invite planına ücretsiz yükseltme kazanırsınız.',
          'Sahte hesap oluşturma, kendi kendine referans verme veya referans sistemini suistimal etme girişimleri tespit edildiğinde hesabınız askıya alınabilir veya kapatılabilir.',
          'Referans ödülü otomatik olarak Firebase Cloud Functions tarafından uygulanır.',
        ],
      },
      {
        title: '7. Kabul Edilmeyen Kullanımlar',
        items: [
          'Yasadışı, şiddet içeren, nefret söylemi barındıran, cinsel açıdan uygunsuz veya zararlı içerik yüklemek.',
          'Başka bir kişinin kimliğine bürünmek, spam yapmak veya dolandırıcılık girişiminde bulunmak.',
          'Plan limitlerini, güvenlik mekanizmalarını veya API kısıtlamalarını atlatmaya çalışmak.',
          'Uygulamanın kaynak kodunu tersine mühendislik ile çözmeye, kaynak kodunu kopyalamaya veya değiştirmeye çalışmak.',
          'Otomasyon araçları, bot veya scraper kullanarak uygulamaya erişmek.',
          'Diğer kullanıcıları rahatsız edici, tehdit edici veya taciz edici davranışlarda bulunmak.',
          'Proof doğrulaması için başka bir kişiye ait fotoğraf kullanmak veya doğrulama sistemini yanıltmaya çalışmak.',
          'Dosya boyutu sınırlarını (gardırop görseli: 10 MB, paylaşım görseli: 12 MB) aşmaya çalışmak.',
          'Firestore güvenlik kurallarını veya Storage erişim kısıtlamalarını atlatma girişiminde bulunmak.',
        ],
      },
      {
        title: '8. İçerik ve Moderasyon',
        items: [
          'Toplulukta paylaşılan tüm içerikler OpenAI Moderation API aracılığıyla otomatik olarak taranır. Şiddet, nefret söylemi, cinsel içerik veya kendine zarar verme sinyalleri içeren paylaşımlar otomatik olarak engellenir.',
          'Proof doğrulaması: Topluluk paylaşımı sırasında çekilen selfie, OpenAI GPT-4o-mini modeline gönderilerek paylaşılan kombinin gerçekten giyildiği doğrulanır. Bu görsel yalnızca doğrulama amacıyla kullanılır ve saklanmaz.',
          'Kullanıcılar uygunsuz buldukları içerikleri sebep belirterek rapor edebilir. Raporlar Firestore\'da saklanır ve incelenir.',
          'Kullanıcılar diğer kullanıcıları engelleyebilir; engellenen kullanıcının paylaşımları görünmez olur.',
          'Politika ihlalinde içerik kaldırılabilir, hesap geçici veya kalıcı olarak kısıtlanabilir.',
          'İçerik kaldırma veya hesap kısıtlama kararlarına support@outfitai.app üzerinden itiraz edilebilir.',
        ],
      },
      {
        title: '9. Yapay Zekâ Kullanımı ve Üçüncü Taraf Hizmetler',
        items: [
          'Kombin önerileri yapay zekâ modelleri tarafından üretilir ve tamamen tavsiye niteliğindedir; profesyonel moda danışmanlığı yerine geçmez.',
          'Proof doğrulaması ve içerik moderasyonu için OpenAI API hizmetleri kullanılır. Doğrulama fotoğraflarınız bu amaçla OpenAI sunucularına iletilir.',
          'OpenAI, Zero Data Retention (ZDR) API politikası kapsamında iletilen verileri model eğitimi için kullanmaz. Detaylar: https://openai.com/enterprise-privacy/',
          'Firebase hizmetleri (Authentication, Firestore, Cloud Storage, Cloud Functions) Google tarafından sağlanır ve Google Cloud güvenlik standartlarına tabidir.',
          'StyleUpS, üçüncü taraf hizmet sağlayıcıların işleyişi üzerinde kontrol sahibi değildir ve bu hizmetlerin kesintisiz çalışmasını garanti edemez.',
        ],
      },
      {
        title: '10. Fikri Mülkiyet',
        items: [
          'Uygulama tasarımı, kaynak kodu, logosu, yapay zekâ modelleri ve içerikleri StyleUpS\'a aittir ve Türkiye Cumhuriyeti ve uluslararası telif hakkı kanunları ile korunmaktadır.',
          'Yüklediğiniz kıyafet fotoğraflarının ve paylaşım görsellerinin mülkiyeti size aittir.',
          'Hizmetin sunulması (depolama, görüntüleme, AI analizi, topluluk akışında gösterim) için gerekli sınırlı, münhasır olmayan, telifsiz kullanım lisansını bize vermiş olursunuz.',
          'Bu lisans hesabınızı sildiğinizde sona erer ve tüm içeriğiniz sunucularımızdan kalıcı olarak silinir.',
          'Topluluk akışında paylaştığınız içerikler, tüm giriş yapmış kullanıcılar tarafından görülebilir.',
        ],
      },
      {
        title: '11. Hesap Silme ve Veri Temizliği',
        items: [
          'Hesabınızı istediğiniz zaman uygulama içindeki "Hesabı Sil" seçeneği aracılığıyla kalıcı olarak silebilirsiniz.',
          'Hesap silme işlemi geri alınamaz ve aşağıdaki verilerin tamamı kalıcı olarak silinir:',
          '— Firebase Authentication kaydınız (e-posta, şifre)',
          '— Firestore\'daki kullanıcı profili, gardırop öğeleri, topluluk paylaşımları, referans kodu ve raporlarınız',
          '— Cloud Storage\'daki tüm gardırop görselleri ve paylaşım fotoğrafları',
          'Silme işlemi öncesinde onay istenir. İşlem tamamlandıktan sonra verileriniz kurtarılamaz.',
          'Cihazınızdaki yerel veriler (AsyncStorage\'da saklanan beğeniler ve dil tercihi) uygulama kaldırıldığında otomatik olarak silinir.',
        ],
      },
      {
        title: '12. Cihaz İzinleri',
        items: [
          'Kamera: Proof doğrulaması için selfie çekmek amacıyla kullanılır. Yalnızca paylaşım sırasında istenir.',
          'Fotoğraf Kitaplığı: Gardıroba kıyafet eklemek için galeri erişimi gerekir.',
          'Bu izinler isteğe bağlıdır ve cihaz ayarlarından istediğiniz zaman geri alınabilir. İzin vermemeniz durumunda ilgili özellikler kullanılamaz.',
        ],
      },
      {
        title: '13. Apple Standart EULA Uyumu',
        text: 'Apple cihazlarında yapılan Premium abonelikler için Apple\'ın Standart Son Kullanıcı Lisans Sözleşmesi (EULA) geçerlidir. Bu koşullar ile Apple EULA arasında çelişki olması durumunda Apple EULA öncelikli olarak uygulanır. Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      },
      {
        title: '14. Hizmet Değişiklikleri ve Sonlandırma',
        items: [
          'Uygulama özellikleri, plan yapısı, limitler ve içerik politikaları güncellenebilir.',
          'Önemli değişiklikler uygulama içi bildirim veya kayıtlı e-posta adresinize gönderilen mesaj ile duyurulur.',
          'Koşulların ihlali halinde hesabınız önceden bildirimde bulunulmaksızın askıya alınabilir veya kapatılabilir.',
          'Hizmeti istediğiniz zaman kullanmayı bırakabilir ve hesabınızı silebilirsiniz.',
          'StyleUpS, herhangi bir zamanda hizmeti geçici veya kalıcı olarak durdurma hakkını saklı tutar.',
        ],
      },
      {
        title: '15. Sorumluluk Sınırı',
        items: [
          'Uygulama "olduğu gibi" (as-is) ve "mevcut haliyle" (as-available) sunulur; kesintisiz, hatasız veya güvenli çalışma garanti edilmez.',
          'AI tarafından üretilen kombin önerileri tavsiye niteliğindedir ve hiçbir şekilde profesyonel moda danışmanlığı yerine geçmez.',
          'Firebase, OpenAI veya diğer üçüncü taraf hizmetlerdeki kesintilerden kaynaklanan aksamalardan StyleUpS sorumlu tutulamaz.',
          'Kullanıcıların topluluk akışına yüklediği içeriklerden içerik sahibi kullanıcı sorumludur.',
          'Kanunen izin verilen azami ölçüde, dolaylı, arızi, özel veya cezai zararlardan sorumluluk kabul edilmez.',
          'StyleUpS\'ın toplam sorumluluğu, son 12 ayda ödediğiniz abonelik tutarını veya 100 ABD Doları\'ndan düşük olanını aşamaz.',
        ],
      },
      {
        title: '16. Uygulanacak Hukuk ve Uyuşmazlık Çözümü',
        text: 'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul (Anadolu) mahkemeleri ve icra daireleri yetkilidir. Avrupa Birliği\'nde ikamet eden kullanıcılar için zorunlu tüketici koruma hükümleri saklıdır.',
        contact: 'Genel destek: support@outfitai.app · Hukuki konular: legal@outfitai.app',
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    lead: 'Last updated: February 26, 2026. By using the StyleUpS mobile application ("App"), you agree to the following terms. Please read carefully.',
    sections: [
      {
        title: '1. Service Description',
        text: 'StyleUpS is a mobile application that enables users to manage their wardrobe digitally, receive AI-powered outfit suggestions, and share outfits through a community feed. The App runs on Firebase infrastructure; account authentication is handled by Firebase Authentication, data storage by Cloud Firestore, and image storage by Firebase Cloud Storage.',
      },
      {
        title: '2. Account Creation and Security',
        items: [
          'Registration requires an email address and password. You must provide a valid, up-to-date email address.',
          'Your password is stored securely by Firebase Authentication; no one, including us, can see your password in plain text.',
          'Display names are limited to 15 characters and are visible to other users.',
          'You are responsible for maintaining the security of your account (password confidentiality, session management).',
          'You are responsible for all activities that occur under your account.',
          'You must immediately notify support@outfitai.app if you detect unauthorized access to your account.',
        ],
      },
      {
        title: '3. Age Requirement',
        text: 'You must be at least 13 years old to use the App. Users under 18 may use the App with the consent of a parent or legal guardian. If we become aware of a user under the age of 13, the account will be terminated immediately.',
      },
      {
        title: '4. Subscription Plans and Limits',
        text: 'The App offers three usage plans. Each plan has specific daily and total usage limits:',
        items: [
          'Free: Up to 20 closet items, 2 outfit suggestions per day, 1 community share per day.',
          'Invite: Up to 40 closet items, 5 outfit suggestions per day, 2 community shares per day. Earned through the referral system.',
          'Premium VIP: Up to 80 closet items, 20 outfit suggestions per day, 3 community shares per day.',
          'Daily limits reset at midnight (UTC) each day.',
          'Plan features and limits may change with prior notice.',
        ],
      },
      {
        title: '5. Billing and Subscription Management',
        items: [
          'Premium VIP subscriptions are processed through Apple App Store or Google Play Store in-app purchase (IAP) infrastructure.',
          'Payment information is processed by Apple or Google; StyleUpS does not collect or store any credit card or payment data.',
          'Subscriptions auto-renew unless canceled at least 24 hours before the current period ends.',
          'Cancellation is managed through the subscription management section in your device settings.',
          'Refund requests are subject to the respective store (Apple/Google) policies; refunds cannot be processed directly through StyleUpS.',
        ],
      },
      {
        title: '6. Referral System',
        items: [
          'Each user is assigned a unique referral code.',
          'When a new user registers using your referral code, your successful referral count increases.',
          'Every 5 successful referrals earn you a free 1-month upgrade to the Invite plan.',
          'Creating fake accounts, self-referrals, or any attempt to abuse the referral system may result in account suspension or termination.',
          'Referral rewards are automatically applied via Firebase Cloud Functions.',
        ],
      },
      {
        title: '7. Prohibited Use',
        items: [
          'Uploading illegal, violent, hateful, sexually inappropriate, or harmful content.',
          'Impersonating another person, spamming, or engaging in fraud.',
          'Attempting to bypass plan limits, security mechanisms, or API restrictions.',
          'Attempting to reverse-engineer, copy, or modify the application source code.',
          'Accessing the App using automation tools, bots, or scrapers.',
          'Engaging in harassing, threatening, or abusive behavior toward other users.',
          'Using another person\'s photo for proof verification or attempting to deceive the verification system.',
          'Attempting to exceed file size limits (closet image: 10 MB, post image: 12 MB).',
          'Attempting to bypass Firestore security rules or Storage access restrictions.',
        ],
      },
      {
        title: '8. Content and Moderation',
        items: [
          'All community content is automatically scanned via the OpenAI Moderation API. Posts containing signals of violence, hate speech, sexual content, or self-harm are automatically blocked.',
          'Proof verification: A selfie taken during community sharing is sent to the OpenAI GPT-4o-mini model to verify that the shared outfit is actually being worn. This image is used solely for verification and is not stored.',
          'Users may report content they find inappropriate by providing a reason. Reports are stored in Firestore and reviewed.',
          'Users may block other users; blocked users\' posts become invisible.',
          'Policy violations may result in content removal and temporary or permanent account restrictions.',
          'Content removal or account restriction decisions can be appealed via support@outfitai.app.',
        ],
      },
      {
        title: '9. AI Usage and Third-Party Services',
        items: [
          'Outfit suggestions are generated by AI models and are entirely advisory; they do not replace professional fashion consultation.',
          'OpenAI API services are used for proof verification and content moderation. Your verification photos are transmitted to OpenAI servers for this purpose.',
          'Under OpenAI\'s Zero Data Retention (ZDR) API policy, transmitted data is not used for model training. Details: https://openai.com/enterprise-privacy/',
          'Firebase services (Authentication, Firestore, Cloud Storage, Cloud Functions) are provided by Google and are subject to Google Cloud security standards.',
          'StyleUpS does not have control over the operation of third-party service providers and cannot guarantee their uninterrupted availability.',
        ],
      },
      {
        title: '10. Intellectual Property',
        items: [
          'The App design, source code, logo, AI models, and content are owned by StyleUpS and protected under the laws of the Republic of Turkey and international copyright laws.',
          'You retain ownership of garment photos and post images you upload.',
          'You grant us a limited, non-exclusive, royalty-free license to use your content as necessary for service delivery (storage, display, AI analysis, community feed display).',
          'This license terminates when you delete your account, and all your content is permanently removed from our servers.',
          'Content shared in the community feed is visible to all signed-in users.',
        ],
      },
      {
        title: '11. Account Deletion and Data Cleanup',
        items: [
          'You may permanently delete your account at any time through the "Delete Account" option within the App.',
          'Account deletion is irreversible and permanently removes all of the following data:',
          '— Your Firebase Authentication record (email, password)',
          '— Your Firestore user profile, closet items, community posts, referral code, and reports',
          '— All closet images and post photos in Cloud Storage',
          'Confirmation is required before deletion. Once completed, your data cannot be recovered.',
          'Local data on your device (likes and language preference stored in AsyncStorage) is automatically deleted when the App is uninstalled.',
        ],
      },
      {
        title: '12. Device Permissions',
        items: [
          'Camera: Used to take a selfie for proof verification. Requested only during sharing.',
          'Photo Library: Gallery access is required to add garments to your closet.',
          'These permissions are optional and can be revoked at any time from your device settings. If you do not grant permissions, the associated features will be unavailable.',
        ],
      },
      {
        title: '13. Apple Standard EULA Compliance',
        text: 'Apple\'s Standard End User License Agreement (EULA) applies to Premium subscriptions made on Apple devices. In case of conflict between these terms and the Apple EULA, the Apple EULA shall prevail. Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      },
      {
        title: '14. Service Changes and Termination',
        items: [
          'App features, plan structure, limits, and content policies may be updated.',
          'Significant changes will be communicated via in-app notification or a message sent to your registered email address.',
          'Your account may be suspended or terminated without prior notice in case of terms violation.',
          'You may stop using the service and delete your account at any time.',
          'StyleUpS reserves the right to temporarily or permanently discontinue the service at any time.',
        ],
      },
      {
        title: '15. Limitation of Liability',
        items: [
          'The App is provided "as is" and "as available"; uninterrupted, error-free, or secure operation is not guaranteed.',
          'AI-generated outfit suggestions are advisory only and do not in any way replace professional fashion consultation.',
          'StyleUpS shall not be held liable for disruptions caused by outages in Firebase, OpenAI, or other third-party services.',
          'Users are responsible for content they upload to the community feed.',
          'To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or punitive damages.',
          'StyleUpS\'s total liability shall not exceed the lesser of subscription fees paid by you in the last 12 months or USD 100.',
        ],
      },
      {
        title: '16. Governing Law and Dispute Resolution',
        text: 'These terms are governed by the laws of the Republic of Turkey. The courts and enforcement offices of Istanbul (Anadolu) shall have jurisdiction over any disputes. Mandatory consumer protection provisions for users residing in the European Union are reserved.',
        contact: 'General support: support@outfitai.app · Legal matters: legal@outfitai.app',
      },
    ],
  },
} as const;

export default function TermsPage() {
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
