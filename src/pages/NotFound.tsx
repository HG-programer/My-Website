import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-5xl font-bold">{t('notFound.title')}</h1>
      <p className="text-gray-600 max-w-md">{t('notFound.text')}</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition focus:outline-none focus-visible:ring focus-visible:ring-blue-400"
      >
        {t('notFound.goHome')}
      </Link>
    </section>
  );
}
