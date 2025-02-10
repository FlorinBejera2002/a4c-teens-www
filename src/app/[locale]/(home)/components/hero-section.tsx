'use client'

import { HeroText } from './hero-text'
import Socials from '../../common/footer/components/socials'
import DailyVerse from './verse/page'

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background-image.jpg)',
          filter: 'brightness(0.5)'
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HeroText />
          <Socials />
        </div>
        <div className="mt-12 max-w-lg w-full">
          <DailyVerse />
        </div>
      </div>
    </section>
  )
}
