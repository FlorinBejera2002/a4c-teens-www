'use client'

import { useTranslations } from 'next-intl'

export const HeroText = () => {
  const t = useTranslations('')

  return (
    <div className="flex flex-col justify-center mb-4">
      <h5 className="font-semibold text-gray-300 text-xs md:text-lg uppercase tracking-wide">
        {t('hero.title-question')}
      </h5>
      <div className="flex flex-col gap-2 mt-3 max-w-7xl">
        <h3 className="text-lg md:text-4xl font-bold text-white">
          {t('hero.question1')}{' '}
          <span className="text-accent">{t('hero.highlight')}</span>
          {t('hero.question1_1')}
        </h3>
        <p className="text-sm md:text-2xl text-gray-200 font-semibold">
          {t('hero.question2')}
        </p>
      </div>
    </div>
  )
}
