'use client'
import { useEffect, useState } from 'react'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import Simona from '../../../../../public/img/team/simo.webp'
import Dana from '../../../../../public/img/team/dana potra.webp'
import Chris from '../../../../../public/img/team/chris potra.webp'
import Andrei from '../../../../../public/img/team/andrei bir.webp'
import AdrianCovaci from '../../../../../public/img/team/adi.webp'
import AvramSabou from '../../../../../public/img/team/Avram.webp'

export default function Team() {
  const t = useTranslations('team')

  const teamMembers = [
    { desc: t('christian-potra'), img: Chris, name: 'Christian Potra' },
    { desc: t('dana-potra'), img: Dana, name: 'Dana Potra' },
    {
      desc: t('avram-sabou'),
      desc1: t('the_team_p1_2'),
      img: AvramSabou,
      name: 'Avram Sabou'
    },
    { desc: t('adi-kovaci'), img: AdrianCovaci, name: 'Adi Kovaci' },
    { desc: t('andrei-birtea'), img: Andrei, name: 'Andrei Birtea' },
    { desc: t('simona-birtea'), img: Simona, name: 'Simona Birtea' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(5)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(5)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)

    return () => {
      window.removeEventListener('resize', updateCardsToShow)
    }
  }, [])

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    )
  }

  const getVisibleMembers = () => {
    const end = currentIndex + cardsToShow

    if (end <= teamMembers.length) {
      return teamMembers.slice(currentIndex, end)
    } else {
      return [
        ...teamMembers.slice(currentIndex, teamMembers.length),
        ...teamMembers.slice(0, end - teamMembers.length)
      ]
    }
  }

  return (
    <div className="bg-color-dark p-relative custom-section-1 lazyload bg-cover bg-center px-8">
      <div className="container px-2 py-4">
        <div className="row align-items-center">
          <InViewTransition>
            <h2 className="mb-0 w-fit py-6 text-2xl font-semibold text-gray-50 lg:pl-32 lg:text-4xl">
              {t('title-a4c')}
            </h2>
          </InViewTransition>

          <div className="relative">
            <button
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-[#061e35] bg-[#061e35] bg-opacity-50 text-white hover:bg-opacity-75 lg:left-20 lg:ml-20"
              onClick={handlePrevClick}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div className="grid grid-cols-1 gap-3 overflow-hidden py-5 md:grid-cols-2 lg:px-32 xl:grid-cols-5">
              {getVisibleMembers().map((member, idx) => (
                <InViewTransition damping={50} delay={0.25 * idx} key={idx}>
                  <div className="group relative mt-3 flex flex-col items-center gap-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#090d1a] via-blue-900 to-[#061e35] duration-300 hover:scale-110">
                    <Image
                      alt={member.name}
                      className="w-full pt-3"
                      src={member.img}
                    />
                    <div className="absolute bottom-2 left-2 gap-1 pl-2">
                      <b className="text-sm text-gray-50 group-hover:hidden md:text-base">
                        {member.name}
                      </b>
                      <p className="text-xs text-blue-600 group-hover:hidden md:text-sm">
                        {member.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 translate-y-full transform bg-[#122a80] bg-opacity-90 p-4 text-white transition-transform duration-1000 ease-in-out group-hover:translate-y-0">
                      <p className="text-center text-lg font-bold">
                        {member.name}
                      </p>
                      <p className="pt-20 text-sm font-medium">
                        {member.desc1}
                      </p>
                    </div>
                  </div>
                </InViewTransition>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-[#061e35] bg-[#061e35] bg-opacity-50 text-white hover:bg-opacity-75 lg:mr-20"
              onClick={handleNextClick}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
