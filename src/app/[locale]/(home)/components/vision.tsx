'use client'

import Image from 'next/image'
import VisionIlustration from '../../../../../public/vision-ilustration.svg'
import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const Vision = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  const t = useTranslations()

  return (
    <>
      <section className="bg-gray-50 md:py-12 bg-transparent">
        <div className="mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center">
          <InViewTransition delay={0.25}>
            <div className="relative hidden justify-center max-w-2xl center shadow-lg md:-mr-16 md:-mt-40 z-10 bg-gray-50 md:flex">
              <Image
                src={VisionIlustration}
                alt={t('vision_hero.section_title')}
                width={800}
                height={800}
              />
            </div>
          </InViewTransition>

          <div className="flex flex-col gap-5 md:shadow-lg md:p-20 rounded-md max-w-4xl md:bg-gray-200 z-10">
            <InViewTransition delay={0}>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                {t('vision_hero.section_title')}
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
                {t('vision_hero.heading')}
                <span className="text-accent">
                  {t('vision_hero.highlight')}
                </span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                {t('vision_hero.description_1')}
              </p>
            </InViewTransition>

            <InViewTransition delay={0.5}>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('vision_hero.description_2')}
              </p>
            </InViewTransition>

            <InViewTransition delay={0.5}>
              <Link
                className="w-fit px-3 py-2.5 bg-accent rounded-full text-white text-sm"
                href={`/${language}/vision_hero`}
              >
                {t('vision_hero.button')}
              </Link>
            </InViewTransition>
          </div>
        </div>
      </section>
    </>
  )
}

export default Vision
