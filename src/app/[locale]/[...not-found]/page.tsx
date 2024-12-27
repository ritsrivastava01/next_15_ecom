'use client';
import { useTranslations } from 'next-intl';
import { Link } from 'rit/i18n/routing';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
