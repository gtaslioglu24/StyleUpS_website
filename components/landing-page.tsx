'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/components/language-context';

const dictionary = {
  tr: {
    eyebrow: 'DİJİTAL GARDIROP · AI STİLİST · STYLE ARENA',
    headlineLine1: 'Daha hızlı,',
    headlineLine2: 'daha şık giyin.',
    subHeadline: 'Gardırobun, stil asistanın ve topluluğun tek yerde.',
    heroText:
      'Kıyafetlerini dijitalleştir, ruh haline ve hava durumuna uygun kombinler oluştur, favorilerini kaydet ve stilini Style Arena\'da yarıştır.',
    plansCta: 'Planları İncele',
    supportCta: 'Destek Ekibi',
    metrics: [
      { value: '5→15', text: 'Plana göre günlük stil önerisi' },
      { value: '20→40', text: 'Dijital gardırop kapasitesi' },
      { value: 'TR + EN', text: 'İki dilde eksiksiz deneyim' },
    ],
    aiPickLabel: 'AI STİL ASISTANI',
    aiPickTitle: 'Kombin hazır, sen giyin yeter.',
    aiPickText: 'Ruh hali · renk · hava durumu.',
    section1Title: 'Gardırobundan stil topluluğuna.',
    features: [
      {
        title: 'Akıllı Gardırop',
        text: 'Parçalarını kategori, renk ve tarza göre kaydet; temiz ve çamaşırdaki kıyafetlerini ayrı yönet.',
      },
      {
        title: 'Kişisel Stil Önerileri',
        text: 'Renk uyumu, stil, ruh hali ve istersen yaklaşık konumdan alınan hava durumuyla günün kombinini oluştur.',
      },
      {
        title: 'Favoriler ve Stil Takvimi',
        text: 'Beğendiğin kombinleri kaydet, paylaşımlarını takvimde gör ve Style Wrapped özetini keşfet.',
      },
      {
        title: 'Topluluk ve Güvenlik',
        text: 'Proof görselleri ve Style Arena fit kartları yayınlanmadan önce SafeSearch ile yetişkin, şiddet ve müstehcen içerik sinyallerine karşı kontrol edilir; diğer ihlaller raporlama, engelleme ve gerektiğinde incelemeyle yönetilir.',
      },
      {
        title: 'Style Arena',
        text: 'Yüz içermeyen fit kartlarıyla kör düellolara katıl, oy ver, seri kazan ve haftalık liglerde yüksel.',
      },
      {
        title: 'Arkadaşlarla Stil',
        text: 'Kullanıcıları takip et, özel arkadaş ligleri kur, 1v1 stil düellolarına meydan oku ve sonuçları paylaş.',
      },
    ],
    section2Title: 'Ürün akışı',
    flow: [
      {
        step: '01',
        title: 'Gardırobunu Kur',
        text: 'Üst, alt, ayakkabı ve dış giyim parçalarını ekle; renk ve tarzlarını belirle.',
      },
      {
        step: '02',
        title: 'Daha İyi Kombin Üret',
        text: 'Ruh hali ve renk filtrelerini kullan; hava durumunu dahil et ve sevdiğin sonuçları favorilerine kaydet.',
      },
      {
        step: '03',
        title: 'Paylaş ve Yarış',
        text: 'Proof kontrollü topluluk akışında paylaş veya yüzsüz fit kartınla Style Arena\'ya katıl.',
      },
    ],
    section3Title: 'Planlar',
    plans: [
      {
        name: 'Ücretsiz',
        limits: '20 parça · günde 5 stil önerisi · günde 1 paylaşım',
        price: 'Her zaman ücretsiz',
        note: 'StyleUpS\'a başlamak için gereken her şey.',
      },
      {
        name: 'Davetli',
        limits: '40 parça · günde 15 stil önerisi · günde 2 paylaşım',
        price: 'Davet ödülü',
        note: 'Her 5 başarılı davet, 1 aylık Invite süresi kazandırır.',
      },
    ],
    finalTitle: 'Dolabınla başla, stilinle yüksel.',
    finalText:
      'StyleUpS ücretsizdir ve uygulama içi satın alma sunmaz.',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    garmentAlt: {
      sweater: 'Gerçekçi kazak fotoğrafı',
      coat: 'Gerçekçi kaban fotoğrafı',
      pants: 'Gerçekçi pantolon fotoğrafı',
      shoes: 'Gerçekçi ayakkabı görseli',
    },
  },
  en: {
    eyebrow: 'DIGITAL CLOSET · AI STYLIST · STYLE ARENA',
    headlineLine1: 'Dress better,',
    headlineLine2: 'faster.',
    subHeadline: 'Your closet, stylist, and style community in one place.',
    heroText:
      'Digitize your clothes, create looks for your mood and the weather, save favorites, and put your style to the test in Style Arena.',
    plansCta: 'View Plans',
    supportCta: 'Support Team',
    metrics: [
      { value: '5→15', text: 'Daily style picks, depending on plan' },
      { value: '20→40', text: 'Digital closet capacity' },
      { value: 'TR + EN', text: 'A complete bilingual experience' },
    ],
    aiPickLabel: 'AI STYLING',
    aiPickTitle: 'Outfit ready. Just wear it.',
    aiPickText: 'Mood · color · weather.',
    section1Title: 'From your closet to the style community.',
    features: [
      {
        title: 'Smart Wardrobe',
        text: 'Save pieces by category, color, and style, and keep clean and laundry items organized separately.',
      },
      {
        title: 'Personal Style Picks',
        text: 'Build a daily look around color harmony, style, mood, and optional weather based on approximate location.',
      },
      {
        title: 'Favorites & Style Calendar',
        text: 'Save the outfits you love, see posts on your calendar, and revisit your Style Wrapped summary.',
      },
      {
        title: 'Community & Safety',
        text: 'Proof images and Style Arena fit cards are checked by SafeSearch for adult, violent, and racy signals before publication; other violations are handled through reports, blocking, and review when necessary.',
      },
      {
        title: 'Style Arena',
        text: 'Enter blind matchups with face-free fit cards, vote, build a streak, and rise through weekly leagues.',
      },
      {
        title: 'Style With Friends',
        text: 'Follow users, create private friend leagues, challenge friends to 1v1 style duels, and share results.',
      },
    ],
    section2Title: 'Product flow',
    flow: [
      {
        step: '01',
        title: 'Build Your Closet',
        text: 'Add tops, bottoms, shoes, and outerwear, then tag each piece with its colors and style.',
      },
      {
        step: '02',
        title: 'Generate Better Looks',
        text: 'Use mood and color filters, bring in the weather, and save the results you love to favorites.',
      },
      {
        step: '03',
        title: 'Share & Compete',
        text: 'Post to the proof-checked community feed or enter Style Arena with a face-free fit card.',
      },
    ],
    section3Title: 'Plans',
    plans: [
      {
        name: 'Free',
        limits: '20 pieces · 5 style picks/day · 1 share/day',
        price: 'Always free',
        note: 'Everything you need to start with StyleUpS.',
      },
      {
        name: 'Invite',
        limits: '40 pieces · 15 style picks/day · 2 shares/day',
        price: 'Referral reward',
        note: 'Every 5 successful referrals adds 1 month invite access.',
      },
    ],
    finalTitle: 'Start with your closet. Rise with your style.',
    finalText:
      'StyleUpS is free and does not offer in-app purchases.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    garmentAlt: {
      sweater: 'Realistic sweater photo',
      coat: 'Realistic coat photo',
      pants: 'Realistic pants photo',
      shoes: 'Realistic shoes visual',
    },
  },
} as const;



export function LandingPage() {
  const { language } = useLanguage();
  const c = dictionary[language];

  return (
    <div className="landing-root">
      <section className="hero-block">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>
            {c.headlineLine1}<br />
            {c.headlineLine2}
            <span>{c.subHeadline}</span>
          </h1>

          <p className="hero-text">{c.heroText}</p>

          <div className="hero-actions">
            <a href="#plans" className="btn-solid">
              {c.plansCta}
            </a>
            <Link href="/support" className="btn-ghost">
              {c.supportCta}
            </Link>
          </div>

          <div className="hero-metrics">
            {c.metrics.map((metric) => (
              <div key={metric.value + metric.text}>
                <strong>{metric.value}</strong>
                <span>{metric.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="stage-glow" />

          {/* Sweater - from top-left corner */}
          <div className="garment garment-sweater">
            <div className="garment-media">
              <Image src="/garments/sweater.png" alt={c.garmentAlt.sweater} width={220} height={250} priority unoptimized />
            </div>
          </div>

          {/* Pants - from bottom-left corner */}
          <div className="garment garment-pants">
            <div className="garment-media">
              <Image src="/garments/pants.png" alt={c.garmentAlt.pants} width={140} height={256} priority unoptimized />
            </div>
          </div>

          {/* Shoes - from bottom-right corner */}
          <div className="garment garment-shoes">
            <div className="garment-media">
              <Image src="/garments/shoes.png" alt={c.garmentAlt.shoes} width={160} height={130} unoptimized />
            </div>
          </div>

          {/* Coat - from right, scales in */}
          <div className="garment garment-coat">
            <div className="garment-media">
              <Image src="/garments/coat.png" alt={c.garmentAlt.coat} width={280} height={410} priority unoptimized />
            </div>
          </div>

          <motion.div
            className="visual-glass"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <p>{c.aiPickLabel}</p>
            <strong>{c.aiPickTitle}</strong>
            <span>{c.aiPickText}</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-block">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {c.section1Title}
        </motion.h2>

        <div className="grid-three">
          {c.features.map((item, i) => (
            <motion.article 
              key={item.title} 
              className="info-card" 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {c.section2Title}
        </motion.h2>

        <div className="grid-three">
          {c.flow.map((item, i) => (
            <motion.article 
              key={item.step} 
              className="flow-card" 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-block" id="plans">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {c.section3Title}
        </motion.h2>

        <div className="grid-three">
          {c.plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              className="plan-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <h3>{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-limits">{plan.limits}</p>
              <p>{plan.note}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="cta-band"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <h2>{c.finalTitle}</h2>
        <p>{c.finalText}</p>
        <div className="hero-actions">
          <Link href="/privacy" className="btn-ghost">
            {c.privacy}
          </Link>
          <Link href="/terms" className="btn-solid">
            {c.terms}
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
