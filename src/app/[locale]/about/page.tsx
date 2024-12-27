'use server';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const AboutPage = async () => {
  const t = await getTranslations('about');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default AboutPage;
