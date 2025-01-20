'use client'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useEffect, useState } from 'react'
import roJson from '../../../../../messages/ro.json'

type DailyDevotionalData = {
  title: string
  date: string
  verset: string
  reference: string
  paragraf_1: string
  paragraf_2: string
  guidelines: {
    step_1: { title: string; description: string }
    step_2: { title: string; description: string }
    step_3: { title: string; description: string }
  }
  reflection_questions: string[]
  conclusion: string
}

type RoJsonType = {
  'text-book': {
    [key: string]: DailyDevotionalData
  }
}

export const DailyDevotional = () => {
  const [data, setData] = useState<DailyDevotionalData | null>(null)
  const [bgImage, setBgImage] = useState<string>('')

  const landscapeImages = [
    'https://picsum.photos/id/1015/1920/1080?grayscale',
    'https://picsum.photos/id/1020/1920/1080?grayscale',
    'https://picsum.photos/id/1035/1920/1080?grayscale',
    'https://picsum.photos/id/1040/1920/1080?grayscale',
    'https://picsum.photos/id/1050/1920/1080?grayscale'
  ]

  const fetchBackgroundImage = () => {
    const dayOfWeek = new Date().getDay()
    const index = dayOfWeek % landscapeImages.length
    setBgImage(landscapeImages[index])
  }

  const getDevotionalKey = (): string => {
    const now = new Date()
    const weekNumber = Math.ceil(now.getDate() / 7) + 1
    const daysOfWeek = [
      'Duminică',
      'Luni',
      'Marți',
      'Miercuri',
      'Joi',
      'Vineri',
      'Sâmbătă'
    ]

    let dayName = daysOfWeek[now.getDay()]
    // Dacă este sâmbătă sau duminică, folosim ziua de vineri
    if (dayName === 'Sâmbătă' || dayName === 'Duminică') {
      dayName = 'Vineri'
    }

    return `Săptămâna ${weekNumber} | ${dayName}`
  }

  // Fetch devotional data based on the calculated key
  useEffect(() => {
    const key = getDevotionalKey()

    const jsonData = roJson as RoJsonType
    const devotionalEntry = Object.values(jsonData['text-book']).find(
      (entry) => entry.date === key
    )

    if (devotionalEntry) {
      setData(devotionalEntry)
    } else {
      setData({
        title: 'Devotional indisponibil',
        date: '',
        verset: 'Verset indisponibil',
        reference: 'Referință indisponibilă',
        paragraf_1: 'Paragraf indisponibil',
        paragraf_2: 'Paragraf indisponibil',
        guidelines: {
          step_1: { title: '', description: '' },
          step_2: { title: '', description: '' },
          step_3: { title: '', description: '' }
        },
        reflection_questions: [],
        conclusion: 'Concluzie indisponibilă'
      })
    }

    fetchBackgroundImage()
  }, [])

  if (!data) {
    return <p>Încărcare...</p>
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-16 rounded-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
      }}
    >
      <div className="flex flex-col items-center p-8 max-w-4xl gap-6 text-white">
        <InViewTransition
          delay={0.25}
          customClassname="flex justify-center items-center"
        >
          <div className="text-left flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-sm italic text-gray-400 mb-4">{data.date}</p>
            <p className="text-lg italic mb-2">"{data.verset}"</p>
            <span className="text-accent ml-2">{data.reference}</span>
          </div>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={-100}
          yOut={0}
          customClassname="w-full"
        >
          <p className="text-md mb-4">{data.paragraf_1}</p>
          <p className="text-md mb-4">{data.paragraf_2}</p>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={100}
          yOut={0}
          customClassname="w-full"
        >
          <div className="text-left space-y-2">
            <p>
              <strong>{data.guidelines.step_1.title}:</strong>{' '}
              {data.guidelines.step_1.description}
            </p>
            <p>
              <strong>{data.guidelines.step_2.title}:</strong>{' '}
              {data.guidelines.step_2.description}
            </p>
            <p>
              <strong>{data.guidelines.step_3.title}:</strong>{' '}
              {data.guidelines.step_3.description}
            </p>
          </div>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={-100}
          yOut={0}
          customClassname="w-full"
        >
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2 text-white">
              Întrebări de reflecție:
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              {data.reflection_questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={-100}
          yOut={0}
          customClassname="w-full"
        >
          <p className="font-semibold">{data.conclusion}</p>
        </InViewTransition>
      </div>
    </div>
  )
}

export default DailyDevotional
