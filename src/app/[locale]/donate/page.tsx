import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

import CECLogo from '../../../../public/CEC Bank.svg'

export const metadata: Metadata = {
  title: 'Arise for Christ | Donate'
}

const About = () => {
  const t = useTranslations()

  const leftSectionText = [
    <h1 className="text-3xl font-bold mb-6" key={1}>
      {t('donate.title')}
    </h1>,

    <p className=" text-gray-800 mb-4" key={2}>
      {t('donate.paragraf_1')}
    </p>,

    <p className=" text-gray-800 mb-4" key={3}>
      {t('donate.paragraf_2')}
    </p>,

    <p className=" text-gray-800 mb-4" key={4}>
      {t('donate.paragraf_3')}
    </p>,

    <p className=" text-gray-800 mb-4" key={5}>
      {t('donate.paragraf_4')}
    </p>
  ]

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0">
        <InViewTransition
          damping={100}
          delay={0.75}
          duration={1}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>
        <div className="row align-items-center !my-[31px] pb-4 pt-5">
          <div className="col my-5 pb-5 text-center">
            <InViewTransition delay={0.25}>
              <div className="py-4">
                <ul className="breadcrumb flex gap-2 justify-content-center text-4-5 font-weight-medium mb-2">
                  <li className="z-[1]">
                    <Link
                      className="text-color-primary text-decoration-none"
                      href="/"
                    >
                      {t('header.home')}
                    </Link>
                  </li>
                  <FaAngleRight className="text-color-primary mt-0.5 z-[1]" />
                  <li className="text-color-primary active z-[1]">
                    {t('header.donate')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  {t('header.donate')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>

        <Animation />
      </section>

      <div className="custom-page-content pb-4 p-relative z-index-2 text-md md:text-lg flex w-full justify-center">
        <div className="max-w-6xl flex flex-col lg:flex-row justify-around bg-white rounded-md !p-8 md:!p-12 mt-4">
          <div className="flex-[1.75]">
            {leftSectionText.map((item, idx) => (
              <InViewTransition delay={0.25 * idx} key={idx}>
                {item}
              </InViewTransition>
            ))}
          </div>

          <InViewTransition delay={0.25}>
            <div className="p-4 rounded-md bg-gray-300 flex flex-col gap-3 items-center flex-1 ml-0 lg:ml-8">
              <div className="flex justify-center">
                <Image alt="Logo for the bank" className="w-44" src={CECLogo} />
              </div>
              <p className="">{t('donate.name')} </p>
              <div className="flex flex-col gap-1">
                <p className="m-0 font-semibold">{t('donate.ron')} </p>
                <p>IBAN: RO36CECETM0130RON0998570</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="m-0 font-semibold">{t('donate.dollars')}</p>
                <p>IBAN: RO37CECETM01B8USD0998572</p>
              </div>
            </div>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
