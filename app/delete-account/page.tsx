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
      '"Hesabı Kalıcı Olarak Sil" seçeneğini bulun.',
      'Onay ekranında işlemi doğrulayın.',
      'Hesabınız ve verileriniz silme kuyruğuna alınır.',
    ],
    deletedTitle: 'Silinen Veriler',
    deleted: [
      'Profil bilgileri: kullanıcı adı, e-posta, Firebase UID.',
      'Gardırop verileri: yüklenen tüm kıyafet fotoğrafları, kategori ve etiket bilgileri.',
      'Kombin geçmişi: oluşturulan tüm kombinler ve AI öneri kayıtları.',
      'Topluluk paylaşımları: paylaştığınız tüm outfit postları, beğeniler ve yorumlar.',
      'Medya dosyaları: Cloud Storage üzerindeki tüm görseller.',
    ],
    retainedTitle: 'Saklanan Veriler',
    retained: [
      'Anonim hale getirilmiş kullanım istatistikleri (kişisel bilgi içermez).',
      'Yasal yükümlülükler kapsamında tutulması gereken kayıtlar (varsa, yalnızca zorunlu süre boyunca).',
      'Diğer kullanıcıların raporlama kayıtlarındaki anonim referanslar.',
    ],
    timelineTitle: 'Silme Süreci',
    timelineText: 'Silme talebi alındıktan sonra tüm veriler en geç 30 gün içinde kalıcı olarak silinir. Bu süre zarfında hesabınız devre dışı bırakılır ve erişime kapatılır.',
    helpTitle: 'Uygulama İçi Silme Çalışmıyorsa',
    helpText: 'Teknik bir sorun nedeniyle uygulama içi silme işlemini gerçekleştiremiyorsanız, hesabınıza kayıtlı e-posta adresi ile contact@skymoonstudios.com adresine "HESAP SİLME TALEBİ" konu başlığıyla bir e-posta gönderin. Kimliğiniz doğrulandıktan sonra silme işlemi tarafımızca başlatılır.',
    noteTitle: 'Önemli Not',
    noteText: 'Aktif bir Premium aboneliğiniz varsa, hesabı silmeden önce aboneliğinizi Apple App Store veya Google Play Store ayarlarından iptal etmeniz gerekmektedir. Hesap silme işlemi mağaza aboneliğini otomatik olarak iptal etmez.',
  },
  en: {
    title: 'Delete Account',
    lead: 'You can permanently delete your StyleUpS account and all associated data. This action cannot be undone.',
    stepsTitle: 'In-App Deletion Steps',
    steps: [
      'Go to the Profile tab in the app.',
      'Tap the Settings (⚙️) icon in the top right.',
      'Find the "Delete Account Permanently" option.',
      'Confirm the action on the verification screen.',
      'Your account and data will be queued for deletion.',
    ],
    deletedTitle: 'Data That Gets Deleted',
    deleted: [
      'Profile information: username, email, Firebase UID.',
      'Wardrobe data: all uploaded garment photos, categories, and tags.',
      'Outfit history: all generated outfits and AI suggestion records.',
      'Community posts: all shared outfit posts, likes, and comments.',
      'Media files: all images stored in Cloud Storage.',
    ],
    retainedTitle: 'Data That May Be Retained',
    retained: [
      'Anonymized usage statistics (contain no personal information).',
      'Records required to be kept under legal obligations (if any, only for the mandatory period).',
      'Anonymous references in other users\' report records.',
    ],
    timelineTitle: 'Deletion Timeline',
    timelineText: 'All data is permanently deleted within 30 days of receiving the deletion request. During this period, your account is deactivated and inaccessible.',
    helpTitle: 'If In-App Deletion Doesn\'t Work',
    helpText: 'If you are unable to complete in-app deletion due to a technical issue, send an email to contact@skymoonstudios.com with the subject "ACCOUNT DELETION REQUEST" from the email address registered to your account. Deletion will be initiated after identity verification.',
    noteTitle: 'Important Note',
    noteText: 'If you have an active Premium subscription, you must cancel it through Apple App Store or Google Play Store settings before deleting your account. Account deletion does not automatically cancel store subscriptions.',
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
