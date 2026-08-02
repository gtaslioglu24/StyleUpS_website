'use client';

import { useLanguage } from '@/components/language-context';

const content = {
  tr: {
    title: 'Hesap Silme',
    lead: 'StyleUpS hesabınızı ve ilişkili tüm verilerinizi kalıcı olarak silebilirsiniz. Bu işlem geri alınamaz.',
    stepsTitle: 'Uygulama İçi Silme Adımları',
    steps: [
      'Uygulamada Profil sekmesine gidin.',
      'Sağ üstteki Ayarlar (⚙️) simgesine dokunun.',
      '"Hesabı Kalıcı Sil" seçeneğine dokunun.',
      'İstendiğinde şifrenizle veya Apple hesabınızla kimliğinizi yeniden doğrulayın.',
      'Silme onayını verin. Sunucu verilerinizi siler ve işlem tamamlandığında sizi bilgilendirir.',
    ],
    deletedTitle: 'Silinen Veriler',
    deleted: [
      'Hesap ve profil: e-posta, Firebase Authentication hesabı, kullanıcı adı, herkese açık profil, profil fotoğrafı ve Apple oturum verileri.',
      'Gardırop ve favoriler: tüm kıyafet kayıtları, fotoğrafları, renk/tarz etiketleri ve kaydedilen favori kombinler.',
      'Topluluk: gönderiler, proof görselleri, verdiğiniz ve gönderilerinize verilen beğeniler, raporlar ve engelleme kayıtları.',
      'Style Arena: fit kartları, görseller, oylar, düello jetonları, Style Score ve lig/liderlik kayıtları.',
      'Sosyal özellikler: takip ilişkileri, 1v1 düellolar ve oylar; sahibi olduğunuz arkadaş ligleri kapatılır, üye olduklarınızdan çıkarılırsınız.',
      'Davetler, bildirim jetonu, doğrulama kayıtları ve hesabınıza bağlı diğer uygulama verileri.',
    ],
    retainedTitle: 'Sınırlı Saklama İstisnası',
    retained: [
      'Mevcut silme akışı hesabınıza bağlı bilinen uygulama verilerini kalıcı olarak siler.',
      'Yasal zorunluluk nedeniyle saklanması gereken sınırlı bir kayıt bulunursa yalnızca zorunlu süre ve amaç için tutulur.',
    ],
    timelineTitle: 'Silme Süreci',
    timelineText: 'Uygulama içi silme işlemi sunucu tarafında tamamlanır; veri temizliği başarısız olursa hesabınız silinmiş sayılmaz ve yeniden deneyebilirsiniz. Başarılı olduğunda işlem kalıcıdır ve veriler kurtarılamaz.',
    helpTitle: 'Uygulama İçi Silme Çalışmıyorsa',
    helpText: 'Teknik bir sorun nedeniyle uygulama içi silme işlemini gerçekleştiremiyorsanız, hesabınıza kayıtlı e-posta adresi ile contact@skymoonstudios.com adresine "HESAP SİLME TALEBİ" konu başlığıyla bir e-posta gönderin. Kimliğiniz doğrulandıktan sonra silme işlemi tarafımızca başlatılır.',
    noteTitle: 'Önemli Not',
    noteText: 'StyleUpS şu anda ücretli abonelik sunmaz. Apple ile Giriş kullanan hesaplarda uygulama Apple yetkisini de iptal etmeyi dener; uygulama ayrıca uyarı verirse bu yetkiyi Apple Hesabı ayarlarından kaldırabilirsiniz.',
  },
  en: {
    title: 'Delete Account',
    lead: 'You can permanently delete your StyleUpS account and all associated data. This action cannot be undone.',
    stepsTitle: 'In-App Deletion Steps',
    steps: [
      'Go to the Profile tab in the app.',
      'Tap the Settings (⚙️) icon in the top right.',
      'Tap "Delete Account Permanently."',
      'When prompted, verify your identity again with your password or Apple account.',
      'Confirm deletion. The server erases your data and lets you know when the operation is complete.',
    ],
    deletedTitle: 'Data That Gets Deleted',
    deleted: [
      'Account and profile: email, Firebase Authentication account, username, public profile, profile photo, and Apple sign-in data.',
      'Wardrobe and favorites: all garment records and photos, color/style tags, and saved favorite outfits.',
      'Community: posts, proof images, likes you made and likes on your posts, reports, and block records.',
      'Style Arena: fit cards and images, votes, duel tokens, Style Score, and league/leaderboard records.',
      'Social features: follow relationships, 1v1 duels, and votes; leagues you own are closed and you are removed from leagues you joined.',
      'Referrals, push token, verification records, and other app data linked to your account.',
    ],
    retainedTitle: 'Limited Retention Exception',
    retained: [
      'The current deletion flow permanently removes known app data linked to your account.',
      'If a limited record must be retained by law, it is kept only for the required period and purpose.',
    ],
    timelineTitle: 'Deletion Timeline',
    timelineText: 'In-app deletion completes on the server. If data cleanup fails, your account is not reported as deleted and you can retry. After a successful operation, deletion is permanent and the data cannot be recovered.',
    helpTitle: 'If In-App Deletion Doesn\'t Work',
    helpText: 'If you are unable to complete in-app deletion due to a technical issue, send an email to contact@skymoonstudios.com with the subject "ACCOUNT DELETION REQUEST" from the email address registered to your account. Deletion will be initiated after identity verification.',
    noteTitle: 'Important Note',
    noteText: 'StyleUpS currently has no paid subscription. For accounts using Sign in with Apple, the app also attempts to revoke Apple authorization; if the app shows a separate warning, you can remove access from your Apple Account settings.',
  },
} as const;

export default function DeleteAccountPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <section className="support-page">
      <h1>{c.title}</h1>
      <p className="page-lead">{c.lead}</p>

      <article className="support-card">
        <h2>{c.stepsTitle}</h2>
        <ol>
          {c.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>

      <article className="support-card">
        <h2>{c.deletedTitle}</h2>
        <ul>
          {c.deleted.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="support-card">
        <h2>{c.retainedTitle}</h2>
        <ul>
          {c.retained.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="support-card">
        <h2>{c.timelineTitle}</h2>
        <p>{c.timelineText}</p>
      </article>

      <article className="support-card">
        <h2>{c.helpTitle}</h2>
        <p>{c.helpText}</p>
      </article>

      <article className="support-card">
        <h2>{c.noteTitle}</h2>
        <p>{c.noteText}</p>
      </article>
    </section>
  );
}
