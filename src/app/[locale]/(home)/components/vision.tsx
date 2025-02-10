'use client'

import Image from 'next/image'
import VisionIlustration from '../../../../../public/vision-ilustration.svg'
import InViewTransition from '../../common/in-view-transition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Vision = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  const t = useTranslations('vision_hero')

  return (
    <section className="py-16 sm:py-24 bg-white" id="vision">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <InViewTransition delay={0}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {t('section_title')}
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t('heading')}{' '}
                <span className="text-accent">{t('highlight')}</span>
              </h2>
              <p className="text-lg text-gray-600">{t('description_1')}</p>
              <p className="text-lg text-gray-600">{t('description_2')}</p>
              <Link
                href={`/${language}/vision`}
                className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-full transition duration-300 hover:bg-accent/90"
              >
                {t('button')}
              </Link>
            </InViewTransition>
          </div>
          <InViewTransition delay={0.25} customClassname="lg:w-1/2">
            <div className="relative">
              <Image
                src={VisionIlustration || '/placeholder.svg'}
                alt={t('section_title')}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </InViewTransition>
        </div>
      </div>
    </section>
  )
}

export default Vision
