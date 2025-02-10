'use client'

import InViewTransition from '../../common/in-view-transition'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Project1 from '../../../../../public/project1.svg'
import Project2 from '../../../../../public/project2.svg'
import Project3 from '../../../../../public/project3.svg'
import Project4 from '../../../../../public/project4.svg'
import Project5 from '../../../../../public/project5.svg'

const projectsData = [
  { image: Project1, translationKey: 'projects.items.0' },
  { image: Project2, translationKey: 'projects.items.1' },
  { image: Project3, translationKey: 'projects.items.2' },
  { image: Project4, translationKey: 'projects.items.3' },
  { image: Project5, translationKey: 'projects.items.4' }
]

export default function Projects() {
  const t = useTranslations()

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {t('projects.section_title')}
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            {t('projects.heading')}{' '}
            <span className="text-accent">{t('projects.highlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {projectsData.map((project, index) => (
            <InViewTransition key={index} delay={0.2 * index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl md:min-h-72 transition duration-300 flex flex-col items-center text-center">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={t(`${project.translationKey}.title`)}
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`${project.translationKey}.title`)}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t(`${project.translationKey}.description`)}
                </p>
              </div>
            </InViewTransition>
          ))}
        </div>
      </div>
    </section>
  )
}
