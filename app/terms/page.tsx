'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Kullanım Koşulları',
    lead: 'Son güncelleme: 2 Ağustos 2026. StyleUpS mobil uygulamasını ("Uygulama") kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatle okuyunuz.',
    sections: [
      {
        title: '1. Hizmetin Tanımı',
        text: 'StyleUpS; dijital gardırop yönetimi, ruh hali/renk/hava durumuna göre stil önerileri, favoriler, stil takvimi ve Style Wrapped, topluluk paylaşımları, haftalık meydan okumalar, Stil Arenası, takip, arkadaş ligleri ve 1v1 düellolar sunan bir mobil uygulamadır. Uygulama Firebase altyapısı üzerinde çalışır; hesap doğrulaması Firebase Authentication, veri depolaması Cloud Firestore ve görsel depolaması Firebase Cloud Storage aracılığıyla gerçekleştirilir.',
      },
      {
        title: '2. Hesap Oluşturma ve Güvenlik',
        items: [
          'Kayıt e-posta adresi ve şifre ile yapılır. Doğru ve güncel bir e-posta adresi kullanmalısınız.',
          'Şifreniz Firebase Authentication tarafından güvenli şekilde saklanır; biz dahil hiç kimse şifrenizi düz metin olarak göremez.',
          'Görünen ad (display name) en fazla 15 karakter olabilir ve diğer kullanıcılar tarafından görülür.',
          'Hesap güvenliğinizden (şifre gizliliği, oturum yönetimi) siz sorumlusunuz.',
          'Hesabınız üzerinden gerçekleşen tüm işlemlerden kullanıcı olarak siz sorumlusunuz.',
          'Hesabınıza yetkisiz erişim fark ettiğinizde derhal contact@skymoonstudios.com adresine bildirmelisiniz.',
        ],
      },
      {
        title: '3. Yaş Sınırı',
        text: 'Uygulamayı kullanabilmek için en az 16 yaşında olmalısınız. 18 yaşından küçük kullanıcılar, bir ebeveyn veya yasal vasinin onayı ile uygulamayı kullanabilir. 16 yaş altı kullanıcılardan haberdar olmamız halinde hesap derhal kapatılır.',
      },
      {
        title: '4. Planlar ve Kullanım Limitleri',
        text: 'Uygulama iki kullanım planı sunar. Her planın belirli günlük ve toplam kullanım limitleri vardır:',
        items: [
          'Free (Ücretsiz): Gardıropta en fazla 20 kıyafet, günde 5 stil önerisi, günde 1 topluluk paylaşımı.',
          'Invite: Gardıropta en fazla 40 kıyafet, günde 15 stil önerisi, günde 2 topluluk paylaşımı. Davet sistemi aracılığıyla kazanılır.',
          'Plan limitleri her gün gece yarısı (UTC) sıfırlanır.',
          'Plan özellikleri ve limitler önceden bildirim yapılarak değiştirilebilir.',
        ],
      },
      {
        title: '5. Ücretlendirme',
        text: 'StyleUpS şu anda ücretsizdir; uygulama içi satın alma, ücretli abonelik veya otomatik yenileme sunmaz. Gelecekte ücretli bir özellik sunulursa ilgili koşullar kullanıma açılmadan önce güncellenir.',
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
          'Paylaşılan ve Stil Arenası\'na giren tüm görseller, yayınlanmadan önce Google Cloud Vision SafeSearch ile otomatik olarak denetlenir. Şiddet, nefret söylemi, cinsel içerik veya tehlikeli içerik işaretleri taşıyan içerik otomatik olarak engellenir. Moderasyon geçici olarak yapılamazsa içerik onaya alınana kadar gizli tutulur (fail-closed).',
          'Proof özelliği: Topluluk paylaşımı sırasında çekilen selfie, paylaşımın gerçek bir kombine ait olduğunu göstermek amacıyla saklanır ve yayınlanmadan önce güvenlik taramasından geçirilir.',
          'Kullanıcılar uygunsuz buldukları içerikleri sebep belirterek rapor edebilir. Yeterli sayıda farklı kullanıcı tarafından raporlanan içerik otomatik olarak gizlenir; raporlar Firestore\'da saklanır ve incelenir.',
          'Kullanıcılar diğer kullanıcıları engelleyebilir; engellenen kullanıcının paylaşımları ve arena içerikleri görünmez olur.',
          'Profil fotoğrafın ve diğer herkese açık içeriğin de topluluk kurallarına tabidir. Bunlar otomatik ön taramadan geçmese de, uygunsuz bulunan içerik rapor edilebilir, kaldırılabilir ve hesap kısıtlanabilir.',
          'Politika ihlalinde içerik kaldırılabilir, hesap geçici veya kalıcı olarak kısıtlanabilir.',
          'İçerik kaldırma veya hesap kısıtlama kararlarına contact@skymoonstudios.com üzerinden itiraz edilebilir.',
        ],
      },
      {
        title: '9. Yapay Zekâ Kullanımı ve Üçüncü Taraf Hizmetler',
        items: [
          'Kombin önerileri yapay zekâ modelleri tarafından üretilir ve tamamen tavsiye niteliğindedir; profesyonel moda danışmanlığı yerine geçmez.',
          'İçerik moderasyonu için Google Cloud Vision (SafeSearch) hizmeti kullanılır. Paylaşılan ve arenaya giren görseller bu amaçla, uygulamanın Google Cloud servis hesabı üzerinden Google Cloud Vision servisine iletilir.',
          'Firebase ve Google Cloud hizmetleri (Authentication, Firestore, Cloud Storage, Cloud Functions, Cloud Vision) Google tarafından sağlanır ve Google Cloud güvenlik standartlarına tabidir. Google gizlilik politikası: https://policies.google.com/privacy',
          'Arka plan kaldırma özelliği için remove.bg (Kaleido AI GmbH), hava durumu bilgisi için Open-Meteo ve push bildirimleri için Expo push servisi (exp.host) kullanılır. Bu özellikler için gerekli asgari veri (sırasıyla kıyafet görseli, yaklaşık konum koordinatları ve push jetonu) ilgili sağlayıcıya iletilir. Ayrıntılar Gizlilik Politikası\'ndadır.',
          'Uygulama kararlılığı için Sentry (crash raporlama) ve web sürümünde temel kullanım ölçümü için Firebase Analytics kullanılır; bu veriler reklam veya uygulamalar arası izleme için kullanılmaz.',
          'StyleUpS, üçüncü taraf hizmet sağlayıcıların işleyişi üzerinde kontrol sahibi değildir ve bu hizmetlerin kesintisiz çalışmasını garanti edemez.',
        ],
      },
      {
        title: '10. Fikri Mülkiyet',
        items: [
          'Uygulama tasarımı, kaynak kodu, logosu, yapay zekâ modelleri ve içerikleri StyleUpS\'a aittir ve Türkiye Cumhuriyeti ve uluslararası telif hakkı kanunları ile korunmaktadır.',
          'Yüklediğiniz kıyafet fotoğrafları, paylaşım görselleri ve profil fotoğrafınızın mülkiyeti size aittir.',
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
          '— Firestore\'daki profil, kullanıcı adı, gardırop, favori, paylaşım, beğeni, takip, davet, rapor, engelleme, bildirim ve doğrulama kayıtları',
          '— Style Arena fitleri ve oyları, lig/liderlik verileri, arkadaş ligleri ve 1v1 düello kayıtları',
          '— Cloud Storage\'daki gardırop, profil, paylaşım ve fit kartı görselleri ile Apple oturum verileri',
          'Silme işlemi öncesinde onay istenir. İşlem tamamlandıktan sonra verileriniz kurtarılamaz.',
          'Cihazınızdaki yerel tercihler (dil ve bazı arayüz durumları) uygulama kaldırıldığında otomatik olarak silinir.',
        ],
      },
      {
        title: '12. Cihaz İzinleri',
        items: [
          'Kamera: Proof için selfie çekmek amacıyla kullanılır. Yalnızca paylaşım sırasında istenir.',
          'Fotoğraf Kitaplığı: Gardıroba kıyafet eklemek için galeri erişimi gerekir.',
          'Konum (yaklaşık/coarse): Hava durumuna uygun kombin önerisi sunmak için yalnızca istediğinizde ve uygulama açıkken kullanılır.',
          'Bildirimler: Seri, arena/oylama ve haftalık meydan okuma hatırlatmaları göndermek için kullanılır.',
          'Bu izinler isteğe bağlıdır ve cihaz ayarlarından istediğiniz zaman geri alınabilir. İzin vermemeniz durumunda ilgili özellikler kullanılamaz.',
        ],
      },
      {
        title: '13. Apple Standart EULA',
        text: 'Uygulamayı Apple App Store aracılığıyla edindiğinde Apple\'ın Standart Son Kullanıcı Lisans Sözleşmesi (EULA) de geçerlidir. Bu koşullar ile Apple EULA arasında çelişki olması durumunda zorunlu Apple koşulları öncelikli uygulanır. Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
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
          'Firebase, Google Cloud veya diğer üçüncü taraf hizmetlerdeki kesintilerden kaynaklanan aksamalardan StyleUpS sorumlu tutulamaz.',
          'Kullanıcıların topluluk akışına yüklediği içeriklerden içerik sahibi kullanıcı sorumludur.',
          'Kanunen izin verilen azami ölçüde, dolaylı, arızi, özel veya cezai zararlardan sorumluluk kabul edilmez.',
          'Bu bölüm, yürürlükteki mevzuat uyarınca sınırlandırılamayan veya kaldırılamayan tüketici haklarını ve sorumlulukları etkilemez.',
        ],
      },
      {
        title: '16. Uygulanacak Hukuk ve Uyuşmazlık Çözümü',
        text: 'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul (Anadolu) mahkemeleri ve icra daireleri yetkilidir. Avrupa Birliği\'nde ikamet eden kullanıcılar için zorunlu tüketici koruma hükümleri saklıdır.',
        contact: 'Genel destek: contact@skymoonstudios.com · Hukuki konular: contact@skymoonstudios.com',
      },
      {
        title: '17. Stil Arenası (Yarışma, Oylama ve Lig)',
        items: [
          'Stil Arenası\'nda kombinlerinden yüz içermeyen "fit kartları" oluşturur ve halka açık arenaya gönderirsin. Fit kartların diğer kullanıcılara açık şekilde gösterilir.',
          'Diğer kullanıcılar fit kartlarını kör (anonim) ikili düellolarda oylar. Görünen kullanıcı adın, rütben ve puanın lig tablosunda tüm kullanıcılara görünür.',
          'Arenaya gönderdiğin içerik topluluk kurallarına tabidir. Uygunsuz, telif hakkı ihlali içeren veya başkasına ait görselleri gönderemezsin.',
          'Her kullanıcı, arenadaki bir içeriği bildirebilir ve içerik üreticisini engelleyebilir.',
          'Oy mekanizmasını manipüle etmek (sahte hesap, bot, oy ticareti) yasaktır ve hesabın kapatılmasına yol açar.',
        ],
      },
      {
        title: '18. Sosyal Özellikler (Takip, Arkadaş Ligleri ve Düellolar)',
        items: [
          'Diğer kullanıcıları takip edebilir, seni takip edenleri görebilirsin. Görünen adın, profil fotoğrafın ve takipçi/takip sayıların herkese açık profilinde diğer kullanıcılara görünür.',
          'Özel arkadaş ligleri oluşturabilir veya bir davet kodu ile katılabilirsin. Davet kodunu yalnızca güvendiğin kişilerle paylaşmalısın; kod ile ligine katılan üyeler senin sıralamanı görebilir.',
          'Arkadaşlarınla 1v1 stil düelloları yapabilirsin; düelloya giren fitler ve sonuç, katılımcılar tarafından görülebilir.',
          'Takip, lig ve düello mekanizmalarını manipüle etmek (sahte hesap, bot, spam davet) yasaktır ve hesabının kısıtlanmasına veya kapatılmasına yol açabilir.',
          'Diğer kullanıcıları rahatsız edici, taciz edici veya tehdit edici davranışlarda bulunmak yasaktır; her kullanıcı bir başkasını engelleyebilir.',
        ],
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    lead: 'Last updated: August 2, 2026. By using the StyleUpS mobile application ("App"), you agree to the following terms. Please read carefully.',
    sections: [
      {
        title: '1. Service Description',
        text: 'StyleUpS is a mobile app offering digital wardrobe management, mood/color/weather-aware style picks, favorites, a style calendar and Style Wrapped, community sharing, weekly challenges, Style Arena, follows, friend leagues, and 1v1 duels. The App runs on Firebase infrastructure; account authentication is handled by Firebase Authentication, data storage by Cloud Firestore, and image storage by Firebase Cloud Storage.',
      },
      {
        title: '2. Account Creation and Security',
        items: [
          'Registration requires an email address and password. You must provide a valid, up-to-date email address.',
          'Your password is stored securely by Firebase Authentication; no one, including us, can see your password in plain text.',
          'Display names are limited to 15 characters and are visible to other users.',
          'You are responsible for maintaining the security of your account (password confidentiality, session management).',
          'You are responsible for all activities that occur under your account.',
          'You must immediately notify contact@skymoonstudios.com if you detect unauthorized access to your account.',
        ],
      },
      {
        title: '3. Age Requirement',
        text: 'You must be at least 16 years old to use the App. Users under 18 may use the App with the consent of a parent or legal guardian. If we become aware of a user under the age of 16, the account will be terminated immediately.',
      },
      {
        title: '4. Plans and Usage Limits',
        text: 'The App offers two usage plans. Each plan has specific daily and total usage limits:',
        items: [
          'Free: Up to 20 closet items, 5 style picks per day, and 1 community share per day.',
          'Invite: Up to 40 closet items, 15 style picks per day, and 2 community shares per day. Earned through the referral system.',
          'Daily limits reset at midnight (UTC) each day.',
          'Plan features and limits may change with prior notice.',
        ],
      },
      {
        title: '5. Pricing',
        text: 'StyleUpS is currently free and offers no in-app purchases, paid subscriptions, or automatic renewals. If paid features are introduced in the future, these terms will be updated before they become available.',
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
          'All shared and Style Arena content is automatically screened with Google Cloud Vision SafeSearch before publishing. Content flagged for violence, hate speech, sexual or dangerous content is automatically blocked. If moderation is temporarily unavailable, content is held hidden until it can be cleared (fail-closed).',
          'Proof feature: A selfie taken during community sharing is stored to indicate the post belongs to a genuine outfit and is screened for safety before publishing.',
          'Users may report content they find inappropriate by providing a reason. Content reported by enough distinct users is automatically hidden; reports are stored in Firestore and reviewed.',
          'Users may block other users; the blocked user\'s posts and arena content become invisible.',
          'Your profile photo and other publicly visible content are also subject to community rules. Although these are not automatically pre-screened, content found inappropriate can be reported, removed, and may result in account restrictions.',
          'Policy violations may result in content removal and temporary or permanent account restrictions.',
          'Content removal or account restriction decisions can be appealed via contact@skymoonstudios.com.',
        ],
      },
      {
        title: '9. AI Usage and Third-Party Services',
        items: [
          'Outfit suggestions are generated by AI models and are entirely advisory; they do not replace professional fashion consultation.',
          'Google Cloud Vision (SafeSearch) is used for content moderation. Shared and competing images are transmitted to the Google Cloud Vision service for this purpose, through the app\'s Google Cloud service account.',
          'Firebase and Google Cloud services (Authentication, Firestore, Cloud Storage, Cloud Functions, Cloud Vision) are provided by Google and are subject to Google Cloud security standards. Google privacy policy: https://policies.google.com/privacy',
          'The background-removal feature uses remove.bg (Kaleido AI GmbH), weather information uses Open-Meteo, and push notifications use the Expo push service (exp.host). The minimum data required for each feature (respectively the garment image, approximate location coordinates, and the push token) is transmitted to the relevant provider. Details are in the Privacy Policy.',
          'Sentry (crash reporting) is used for app stability and Firebase Analytics is used for basic usage metrics in the web version; this data is not used for advertising or cross-app tracking.',
          'StyleUpS does not have control over the operation of third-party service providers and cannot guarantee their uninterrupted availability.',
        ],
      },
      {
        title: '10. Intellectual Property',
        items: [
          'The App design, source code, logo, AI models, and content are owned by StyleUpS and protected under the laws of the Republic of Turkey and international copyright laws.',
          'You retain ownership of garment photos, post images, and your profile photo that you upload.',
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
          '— Firestore profile, username, wardrobe, favorites, posts, likes, follows, referrals, reports, blocks, notification, and verification records',
          '— Style Arena fits and votes, league/leaderboard data, friend leagues, and 1v1 duel records',
          '— Wardrobe, profile, post, and fit-card images in Cloud Storage, plus Apple sign-in data',
          'Confirmation is required before deletion. Once completed, your data cannot be recovered.',
          'Local preferences on your device (language and certain interface state) are automatically deleted when the App is uninstalled.',
        ],
      },
      {
        title: '12. Device Permissions',
        items: [
          'Camera: Used to take a selfie for proof. Requested only during sharing.',
          'Photo Library: Gallery access is required to add garments to your closet.',
          'Location (approximate/coarse): Used only when you request it and while the app is open, to provide weather-appropriate outfit suggestions.',
          'Notifications: Used to send streak, arena/voting, and weekly challenge reminders.',
          'These permissions are optional and can be revoked at any time from your device settings. If you do not grant permissions, the associated features will be unavailable.',
        ],
      },
      {
        title: '13. Apple Standard EULA',
        text: 'When you obtain the App through the Apple App Store, Apple\'s Standard End User License Agreement (EULA) also applies. If these terms conflict with mandatory Apple terms, those mandatory terms prevail. Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
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
          'StyleUpS shall not be held liable for disruptions caused by outages in Firebase, Google Cloud, or other third-party services.',
          'Users are responsible for content they upload to the community feed.',
          'To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or punitive damages.',
          'Nothing in this section limits or excludes consumer rights or liabilities that cannot be limited or excluded under applicable law.',
        ],
      },
      {
        title: '16. Governing Law and Dispute Resolution',
        text: 'These terms are governed by the laws of the Republic of Turkey. The courts and enforcement offices of Istanbul (Anadolu) shall have jurisdiction over any disputes. Mandatory consumer protection provisions for users residing in the European Union are reserved.',
        contact: 'General support: contact@skymoonstudios.com · Legal matters: contact@skymoonstudios.com',
      },
      {
        title: '17. Style Arena (Competition, Voting and League)',
        items: [
          'In the Style Arena you create face-free "fit cards" from your outfits and submit them to the public arena. Your fit cards are shown publicly to other users.',
          'Other users vote on your fit cards in blind (anonymous) head-to-head duels. Your displayed username, rank and points are visible to all users on the league table.',
          'Content you submit to the arena is subject to community rules. You may not submit objectionable, copyright-infringing, or images that belong to someone else.',
          'Every user can report arena content and block the creator.',
          'Manipulating the voting system (fake accounts, bots, vote trading) is prohibited and may result in account termination.',
        ],
      },
      {
        title: '18. Social Features (Follows, Friend Leagues, and Duels)',
        items: [
          'You can follow other users and see who follows you. Your display name, profile photo, and follower/following counts are visible to other users on your public profile.',
          'You can create private friend leagues or join one with an invite code. You should share your invite code only with people you trust; members who join your league via the code can see your standing.',
          'You can play 1v1 style duels with friends; the fits entered into a duel and its outcome are visible to the participants.',
          'Manipulating the follow, league, or duel mechanisms (fake accounts, bots, spam invites) is prohibited and may result in restriction or termination of your account.',
          'Harassing, abusive, or threatening behavior toward other users is prohibited; every user can block another.',
        ],
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
