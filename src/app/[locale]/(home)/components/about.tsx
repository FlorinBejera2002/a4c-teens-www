'use client'

import Image from 'next/image'
import AboutUsImage from '../../../../../public/About us page-bro.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import InViewTransition from '../../common/in-view-transition'

const About = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  const t = useTranslations('about')

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <InViewTransition delay={0}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {t('section_title')}
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t('heading')}{' '}
                <span className="text-accent">{t('heading1')}</span>{' '}
                {t('heading3')}
              </h2>
              <p className="text-lg text-gray-600">{t('description')}</p>
              <Link
                href={`/${language}/about`}
                className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-full transition duration-300 hover:bg-accent/90"
              >
                {t('button')}
              </Link>
            </InViewTransition>
          </div>
          <InViewTransition delay={0.25} customClassname="lg:w-1/2">
            <div className="relative">
              <Image
                src={AboutUsImage || '/placeholder.svg'}
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

export default About
