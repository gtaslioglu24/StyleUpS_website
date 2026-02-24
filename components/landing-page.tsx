'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/components/language-context';

const dictionary = {
  tr: {
    eyebrow: 'FASHION TECH EXPERIENCE',
    headline: 'Dress better, faster.',
    subHeadline: 'AI destekli seçim. Gerçek stil akışı. Premium sunum.',
    heroText:
      'Outfit AI, gardırobunu günlük karar motoruna dönüştürür: güçlü eşleştirme, proof moderasyonu ve zarif topluluk akışı.',
    plansCta: 'Planları İncele',
    supportCta: 'Destek Ekibi',
    metrics: [
      { value: '+92%', text: 'Günlük kombin kararında hızlanma' },
      { value: '3x', text: 'Proof kontrolüyle daha güvenli paylaşım' },
      { value: '24/7', text: 'Bulut moderasyon ve plan güvenliği' },
    ],
    aiPickLabel: 'AI STYLING',
    aiPickTitle: 'Kombin hazır, sen giyin yeter.',
    aiPickText: '4 parça · 1 saniye · sonsuz stil.',
    section1Title: 'Premium görünüm, gerçek günlük değer.',
    features: [
      {
        title: 'AI Stylist Picks',
        text: 'Moda uyumlu renk dengesi ve stil tutarlılığıyla gardırobundan güçlü kombinler üretir.',
      },
      {
        title: 'Proof Tabanlı Paylaşım',
        text: 'Paylaşım öncesi doğrulama ile alakasız ve uygunsuz içerik riski azalır.',
      },
      {
        title: 'Güvenli Plan Sistemi',
        text: 'Free, Invite ve Premium limitleri performansı ve maliyeti dengede tutar.',
      },
    ],
    section2Title: 'Ürün akışı',
    flow: [
      {
        step: '01',
        title: 'Gardırobunu Kur',
        text: 'Üst, alt, ayakkabı ve dış giyimi bir kez yükle. Her gün hızlı seçim yap.',
      },
      {
        step: '02',
        title: 'Daha İyi Kombin Üret',
        text: 'Motor renk-pair skoru ve stil tutarlılığıyla adayları sıralar.',
      },
      {
        step: '03',
        title: 'Güvenle Paylaş',
        text: 'Proof moderasyonu, paylaşımın kombin sinyalleriyle uyumunu kontrol eder.',
      },
    ],
    section3Title: 'Planlar',
    plans: [
      {
        name: 'Free',
        limits: '20 parça · günde 2 kombin · günde 1 paylaşım',
        price: '$0',
        note: 'Başlangıç ve deneme için ideal.',
      },
      {
        name: 'Invite',
        limits: '40 parça · günde 5 kombin · günde 2 paylaşım',
        price: 'Referans ödülü',
        note: 'Her 5 başarılı davette 1 ay Invite süresi eklenir.',
      },
      {
        name: 'Premium VIP',
        limits: '80 parça · günde 20 kombin · günde 3 paylaşım',
        price: '$5/ay · $40/yıl',
        note: 'Yıllık pakette yaklaşık %33 tasarruf.',
      },
    ],
    finalTitle: 'App Store ve kampanya trafiği için yayına hazır.',
    finalText:
      'Landing, gizlilik, koşullar, destek ve hesap silme sayfaları birlikte, domain yayınına hazır.',
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
    eyebrow: 'FASHION TECH EXPERIENCE',
    headline: 'Dress better, faster.',
    subHeadline: 'AI-backed picks. Real style flow. Premium presentation.',
    heroText:
      'Outfit AI turns your wardrobe into a daily decision engine with strong matching, proof moderation, and elegant community flow.',
    plansCta: 'View Plans',
    supportCta: 'Support Team',
    metrics: [
      { value: '+92%', text: 'Faster daily outfit decisions' },
      { value: '3x', text: 'Safer sharing confidence with proof checks' },
      { value: '24/7', text: 'Cloud moderation and plan security' },
    ],
    aiPickLabel: 'AI STYLING',
    aiPickTitle: 'Outfit ready. Just wear it.',
    aiPickText: '4 pieces · 1 second · endless style.',
    section1Title: 'Premium product feel, practical daily value.',
    features: [
      {
        title: 'AI Stylist Picks',
        text: 'Generates stronger looks from your closet with fashion-safe color harmony and style consistency.',
      },
      {
        title: 'Proof-Based Sharing',
        text: 'Pre-share verification reduces unrelated and unsafe content risk in the feed.',
      },
      {
        title: 'Secure Plan System',
        text: 'Free, Invite, and Premium limits keep performance and cost under control.',
      },
    ],
    section2Title: 'Product flow',
    flow: [
      {
        step: '01',
        title: 'Build Your Closet',
        text: 'Upload tops, bottoms, shoes, and outerwear once. Decide faster every day.',
      },
      {
        step: '02',
        title: 'Generate Better Looks',
        text: 'The engine ranks candidates with color-pair scoring and style consistency.',
      },
      {
        step: '03',
        title: 'Share With Trust',
        text: 'Proof moderation verifies whether a post matches expected outfit signals.',
      },
    ],
    section3Title: 'Plans',
    plans: [
      {
        name: 'Free',
        limits: '20 pieces · 2 outfits/day · 1 share/day',
        price: '$0',
        note: 'Ideal for getting started.',
      },
      {
        name: 'Invite',
        limits: '40 pieces · 5 outfits/day · 2 shares/day',
        price: 'Referral reward',
        note: 'Every 5 successful referrals adds 1 month invite access.',
      },
      {
        name: 'Premium VIP',
        limits: '80 pieces · 20 outfits/day · 3 shares/day',
        price: '$5/mo · $40/yr',
        note: 'Yearly package saves about 33%.',
      },
    ],
    finalTitle: 'Launch-ready for App Store pages and campaign traffic.',
    finalText:
      'Landing, privacy, terms, support, and account deletion pages are connected and ready for domain publishing.',
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

const garments = [
  {
    id: 'sweater',
    src: '/garments/sweater.png',
    className: 'garment-sweater',
  },
  {
    id: 'coat',
    src: '/garments/coat.png',
    className: 'garment-coat',
  },
  {
    id: 'pants',
    src: '/garments/pants.png',
    className: 'garment-pants',
  },
  {
    id: 'shoes',
    src: '/garments/shoes.png',
    className: 'garment-shoes',
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

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
            {c.headline}
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
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.05, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d', perspective: '1400px' }}
        >
          <div className="stage-glow" />

          {/* Sweater - from top-left corner */}
          <div className="garment garment-sweater">
            <div className="garment-media">
              <Image src="/garments/sweater.png" alt={c.garmentAlt.sweater} width={200} height={230} priority style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Pants - from bottom-left corner */}
          <div className="garment garment-pants">
            <div className="garment-media">
              <Image src="/garments/pants.png" alt={c.garmentAlt.pants} width={170} height={240} priority style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Shoes - from bottom-right corner */}
          <div className="garment garment-shoes">
            <div className="garment-media">
              <Image src="/garments/shoes.png" alt={c.garmentAlt.shoes} width={160} height={130} style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Coat - from right, scales in */}
          <div className="garment garment-coat">
            <div className="garment-media">
              <Image src="/garments/coat.png" alt={c.garmentAlt.coat} width={250} height={370} priority style={{ objectFit: 'contain' }} />
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

        <motion.div
          className="grid-three"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {c.features.map((item) => (
            <motion.article key={item.title} className="info-card" variants={card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
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

        <motion.div
          className="grid-three"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {c.flow.map((item) => (
            <motion.article key={item.step} className="flow-card" variants={card}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
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

        <motion.div
          className="grid-three"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {c.plans.map((plan) => (
            <motion.article
              key={plan.name}
              className={`plan-card ${plan.name === 'Premium VIP' ? 'is-featured' : ''}`}
              variants={card}
            >
              <h3>{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-limits">{plan.limits}</p>
              <p>{plan.note}</p>
            </motion.article>
          ))}
        </motion.div>
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
