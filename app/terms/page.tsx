'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Kullanım Koşulları',
    lead: 'Son güncelleme: 25 Şubat 2026. Outfit AI mobil uygulamasını ("Uygulama") kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatle okuyunuz.',
    sections: [
      {
        title: '1. Hizmetin Tanımı',
        text: 'Outfit AI, kullanıcıların gardıroplarını dijital ortamda yönetmesine, yapay zekâ destekli kombin önerileri almasına ve topluluk üzerinden paylaşım yapmasına olanak tanıyan bir mobil uygulamadır.',
      },
      {
        title: '2. Hesap Oluşturma ve Güvenlik',
        items: [
          'Kayıt sırasında doğru ve güncel bilgi vermelisiniz.',
          'Hesap güvenliğinizden (şifre, oturum yönetimi) siz sorumlusunuz.',
          'Hesabınız üzerinden gerçekleşen tüm işlemlerden kullanıcı olarak siz sorumlusunuz.',
          'Hesabınıza yetkisiz erişim fark ettiğinizde derhal support@outfitai.app adresine bildirmelisiniz.',
        ],
      },
      {
        title: '3. Yaş Sınırı',
        text: 'Uygulamayı kullanabilmek için en az 13 yaşında olmalısınız. 18 yaşından küçük kullanıcılar, bir ebeveyn veya yasal vasinin onayı ile uygulamayı kullanabilir.',
      },
      {
        title: '4. Kabul Edilmeyen Kullanımlar',
        items: [
          'Yasadışı, şiddet içeren, nefret söylemi barındıran, cinsel veya zararlı içerik yüklemek.',
          'Başka bir kişinin kimliğine bürünmek, spam yapmak veya dolandırıcılık girişiminde bulunmak.',
          'Plan limitlerini, güvenlik mekanizmalarını veya API kısıtlamalarını atlatmaya çalışmak.',
          'Uygulamanın kaynak kodunu tersine mühendislik ile çözmeye çalışmak.',
          'Otomasyon araçları, bot veya scraper kullanmak.',
          'Diğer kullanıcıları rahatsız edici, tehdit edici veya taciz edici davranışlarda bulunmak.',
        ],
      },
      {
        title: '5. Fikri Mülkiyet',
        text: 'Uygulama tasarımı, kodu, logosu, AI modelleri ve içerikleri Outfit AI\'a aittir ve telif hakkı ile korunmaktadır. Yüklediğiniz kıyafet fotoğraflarının mülkiyeti size aittir; ancak hizmetin sunulması için gerekli sınırlı kullanım lisansını bize vermiş olursunuz.',
      },
      {
        title: '6. İçerik ve Moderasyon',
        items: [
          'Toplulukta paylaşılan içerikler otomatik AI moderasyonu ve/veya manuel incelemeye tabi olabilir.',
          'Proof doğrulaması, paylaşımın kombin sinyalleriyle uyumunu kontrol eder.',
          'Politika ihlalinde içerik kaldırılabilir, hesap geçici veya kalıcı olarak kısıtlanabilir.',
          'İçerik kaldırma kararlarına support@outfitai.app üzerinden itiraz edilebilir.',
        ],
      },
      {
        title: '7. Abonelik Planları ve Ödeme',
        items: [
          'Uygulama Free, Invite ve Premium VIP olmak üzere üç plan sunar.',
          'Premium abonelikler Apple App Store veya Google Play Store ödeme altyapısı üzerinden işlenir.',
          'Abonelik, dönem bitiminden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir.',
          'İade talepleri ilgili mağaza (Apple/Google) politikalarına tabidir.',
          'Plan özellikleri ve fiyatlar önceden bildirim yapılarak değiştirilebilir.',
        ],
      },
      {
        title: '8. Apple Standart EULA Uyumu',
        text: 'Premium abonelikler için Apple\'ın Standart Son Kullanıcı Lisans Sözleşmesi (EULA) geçerlidir. Bu koşullar ile Apple EULA arasında çelişki olması durumunda Apple EULA öncelikli olarak uygulanır. Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      },
      {
        title: '9. Hizmet Değişiklikleri ve Sonlandırma',
        items: [
          'Uygulama özellikleri, plan yapısı ve içerik politikaları güncellenebilir.',
          'Önemli değişiklikler uygulama içi bildirim veya e-posta ile duyurulur.',
          'Koşulların ihlali halinde hesabınız önceden bildirimde bulunulmaksızın askıya alınabilir veya kapatılabilir.',
          'Hizmeti istediğiniz zaman kullanmayı bırakabilir ve hesabınızı silebilirsiniz.',
        ],
      },
      {
        title: '10. Sorumluluk Sınırı',
        items: [
          'Uygulama "olduğu gibi" (as-is) sunulur; kesintisiz veya hatasız çalışma garanti edilmez.',
          'AI tarafından üretilen kombin önerileri tavsiye niteliğindedir, profesyonel moda danışmanlığı yerine geçmez.',
          'Kanunen izin verilen azami ölçüde, dolaylı, arızi veya özel zararlardan sorumluluk kabul edilmez.',
          'Toplam sorumluluğumuz, son 12 ayda ödediğiniz abonelik tutarını aşamaz.',
        ],
      },
      {
        title: '11. Uygulanacak Hukuk ve Uyuşmazlık Çözümü',
        text: 'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir.',
        contact: 'İletişim: legal@outfitai.app',
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    lead: 'Last updated: February 25, 2026. By using the Outfit AI mobile application ("App"), you agree to the following terms. Please read carefully.',
    sections: [
      {
        title: '1. Service Description',
        text: 'Outfit AI is a mobile application that enables users to manage their wardrobe digitally, receive AI-powered outfit suggestions, and share outfits through a community feed.',
      },
      {
        title: '2. Account Creation and Security',
        items: [
          'You must provide accurate and up-to-date information during registration.',
          'You are responsible for maintaining the security of your account (password, session management).',
          'You are responsible for all activities that occur under your account.',
          'You must immediately notify support@outfitai.app if you detect unauthorized access to your account.',
        ],
      },
      {
        title: '3. Age Requirement',
        text: 'You must be at least 13 years old to use the App. Users under 18 may use the App with the consent of a parent or legal guardian.',
      },
      {
        title: '4. Prohibited Use',
        items: [
          'Uploading illegal, violent, hateful, sexual, or harmful content.',
          'Impersonating another person, spamming, or engaging in fraud.',
          'Attempting to bypass plan limits, security mechanisms, or API restrictions.',
          'Attempting to reverse-engineer the application source code.',
          'Using automation tools, bots, or scrapers.',
          'Engaging in harassing, threatening, or abusive behavior toward other users.',
        ],
      },
      {
        title: '5. Intellectual Property',
        text: 'The App design, code, logo, AI models, and content are owned by Outfit AI and protected by copyright. You retain ownership of garment photos you upload; however, you grant us a limited license to use them as necessary for service delivery.',
      },
      {
        title: '6. Content and Moderation',
        items: [
          'Community content may be subject to automated AI moderation and/or manual review.',
          'Proof verification checks whether a post matches expected outfit signals.',
          'Policy violations may result in content removal and temporary or permanent account restrictions.',
          'Content removal decisions can be appealed via support@outfitai.app.',
        ],
      },
      {
        title: '7. Subscription Plans and Billing',
        items: [
          'The App offers three plans: Free, Invite, and Premium VIP.',
          'Premium subscriptions are processed through Apple App Store or Google Play Store billing.',
          'Subscriptions auto-renew unless canceled at least 24 hours before the current period ends.',
          'Refund requests are subject to the respective store (Apple/Google) policies.',
          'Plan features and pricing may change with prior notice.',
        ],
      },
      {
        title: '8. Apple Standard EULA Compliance',
        text: 'Apple\'s Standard End User License Agreement (EULA) applies to Premium subscriptions. In case of conflict between these terms and the Apple EULA, the Apple EULA shall prevail. Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
      },
      {
        title: '9. Service Changes and Termination',
        items: [
          'App features, plan structure, and content policies may be updated.',
          'Significant changes will be communicated via in-app notification or email.',
          'Your account may be suspended or terminated without prior notice in case of terms violation.',
          'You may stop using the service and delete your account at any time.',
        ],
      },
      {
        title: '10. Limitation of Liability',
        items: [
          'The App is provided "as is"; uninterrupted or error-free operation is not guaranteed.',
          'AI-generated outfit suggestions are advisory only and do not replace professional fashion consultation.',
          'To the maximum extent permitted by law, we are not liable for indirect, incidental, or special damages.',
          'Our total liability shall not exceed the subscription fees paid by you in the last 12 months.',
        ],
      },
      {
        title: '11. Governing Law and Dispute Resolution',
        text: 'These terms are governed by the laws of the Republic of Turkey. The courts and enforcement offices of Istanbul shall have jurisdiction over any disputes.',
        contact: 'Contact: legal@outfitai.app',
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
          ) : (
            <p>{section.text}</p>
          )}
          {'contact' in section && section.contact ? <p className="contact-line">{section.contact}</p> : null}
        </article>
      ))}
    </section>
  );
}
