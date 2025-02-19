'use client'

import { useTranslations } from 'next-intl'

export const HeroText = () => {
  const t = useTranslations('hero')

  return (
    <div className="md:space-y-4 space-y-2">
      <h5 className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-semibold">
        {t('title-question')}
      </h5>
      <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white">
        {t('question1')} <span className="text-accent">{t('highlight')}</span>
        {t('question1_1')}
      </h1>
      <p className="text-xs md:text-2xl text-gray-200 font-medium">
        {t('question2')}
      </p>
    </div>
  )
}
