import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { HeroText } from './components/hero-text'
import Socials from '../common/footer/components/socials'
import About from './components/about'
import Vision from './components/vision'
import Projects from './components/projects/page'
import DailyVerse from './components/verse/page'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

  return {
    description: t('description'),
    icons: [
      { rel: 'icon', url: '/logo.ico' },
      { rel: 'apple-touch-icon', url: '/logo.ico' }
    ],
    keywords: t('keywords'),
    og: {
      description: t('description'),
      title: t('title')
    },
    title: t('title')
  } as Metadata
}

export default function Home() {
  return (
    <div className="main" role="main">
      <section id="home">
        <div
          className="h-screen w-full bg-fixed flex items-center justify-center "
          style={{
            backgroundImage: 'url(/background-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="p-6 flex flex-col w-full md:px-52 md:gap-20 justify-center h-full mt-16 md:mt-40">
            <div className="w-full flex flex-col md:gap-5">
              <HeroText />
              <Socials />
            </div>
            <div className="flex max-w-3xl flex-col items-center justify-center ">
              <DailyVerse />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-20 md:py-12 py-8">
        <About />
        <Vision />
        <Projects />
      </div>
    </div>
  )
}
