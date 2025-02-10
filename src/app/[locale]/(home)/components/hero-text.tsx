'use client'

import { useTranslations } from 'next-intl'

export const HeroText = () => {
  const t = useTranslations('hero')

  return (
    <div className="space-y-4">
      <h5 className="text-gray-300 text-sm sm:text-base uppercase tracking-wider font-semibold">
        {t('title-question')}
      </h5>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {t('question1')} <span className="text-accent">{t('highlight')}</span>
        {t('question1_1')}
      </h1>
      <p className="text-xl sm:text-2xl text-gray-200 font-medium">
        {t('question2')}
      </p>
    </div>
  )
}
