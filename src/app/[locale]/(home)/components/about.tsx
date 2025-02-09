'use client'

import Image from 'next/image'
import AboutUsImage from '../../../../../public/About us page-bro.svg'
import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const About = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  const t = useTranslations('about')

  return (
    <section className="bg-white" id="/">
      <div className="mx-auto px-6 lg:p-12 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col gap-3 shadow-lg p-20  rounded-md max-w-4xl bg-gray-200 z-20">
          <InViewTransition delay={0}>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              {t('section_title')}
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
              {t('heading')}{' '}
              <span className="text-accent">{t('heading1')}</span>{' '}
              {t('heading3')}
            </h2>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              {t('description')}
            </p>
          </InViewTransition>

          <InViewTransition delay={0.5}>
            <Link
              className="w-fit px-3 py-2.5 bg-accent rounded-full text-white text-sm"
              href={`/${language}/about`}
            >
              {t('button')}
            </Link>
          </InViewTransition>
        </div>

        <InViewTransition delay={0.25}>
          <div className="relative flex justify-center shadow-lg -ml-16 -mb-40 z-10 bg-gray-50">
            <div className="relative w-[90%] max-w-xl">
              <Image
                src={AboutUsImage}
                alt={t('section_title')}
                width={500}
                height={400}
              />
            </div>
          </div>
        </InViewTransition>
      </div>
    </section>
  )
}

export default About
