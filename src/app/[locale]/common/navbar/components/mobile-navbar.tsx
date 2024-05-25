'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import SubMenu from './sub-menu'
import { MenuButton } from './hamburger'
import Animation from '../../animation'

import { FaChevronDown } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'
import { cn } from '@/utils'

const MobileNavbar = ({
  language,
  mobileNavbarOpen,
  setMobileNavbarOpen
}: {
  language: string
  mobileNavbarOpen: boolean
  setMobileNavbarOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [subMenu, setSubMenu] = useState(false)

  const t = useTranslations()

  const searchParams = useSearchParams()
  const modal = searchParams.get('ev-req-form') === 'open'

  const { width } = useWindowSize()

  const menuLinks = [
    {
      href: '/',
      label: t('header.home')
    },
    {
      href: `/${language}/about`,
      label: t('header.about_us')
    },

    {
      href: `/${language}/vision`,
      label: t('header.vision')
    },
    {
      href: `/${language}/donate`,
      label: t('header.donate')
    },
    {
      customClassname: 'flex items-center gap-2',
      href: `#`,
      icon: (
        <FaChevronDown
          className={cn(
            'transition-all duration-300',
            subMenu ? 'rotate-180' : ''
          )}
        />
      ),
      label: t('header.project'),
      onClick: () => setSubMenu(!subMenu)
    }
  ]

  const handleSubMenuItemClick = () => {
    setMobileNavbarOpen((prev) => !prev)
  }

  useEffect(() => {
    const htmlElement = document.documentElement

    const handleOverflow = () => {
      if (mobileNavbarOpen || modal) {
        htmlElement.style.overflow = 'hidden'
      } else {
        htmlElement.style.overflow = ''
      }
    }

    handleOverflow()

    // Clean up the effect when the component unmounts
    return () => {
      if (modal) {
        htmlElement.style.overflow = 'hidden'
      } else {
        htmlElement.style.overflow = ''
      }
    }
  }, [mobileNavbarOpen, modal])

  return (
    <motion.div
      animate={{
        opacity: 1,
        transform: 'translateX(0)',
        transition: {
          duration: 0.2
        }
      }}
      className={cn(
        'absolute top-0 left-0 mx-auto bg-[#121212] w-screen h-[100dvh] p-4 z-50',
        width! < 900 ? 'flex' : 'hidden'
      )}
      exit={{ opacity: 0, transform: 'translateX(-100%)' }}
      initial={{ opacity: 0, transform: 'translateX(-100%)' }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <Link href="?ev-req-form=open">
        <button
          className=" bg-[#e3ae04] text-black font-weight-semibold p-2 text-sm rounded-md absolute top-[32px] left-[32px]"
          onClick={() => setMobileNavbarOpen((prev) => !prev)}
          type="button"
        >
          {t('form.title')}
        </button>
      </Link>
      <MenuButton
        className={cn(
          'cursor-pointer text-white scale-50 -mr-2 absolute top-[40px] right-[32px]',
          width! < 900 ? 'flex' : 'hidden'
        )}
        color="white"
        height="24"
        isOpen={mobileNavbarOpen}
        onClick={() => setMobileNavbarOpen((prev) => !prev)}
        strokeWidth="4"
        transition={{ duration: 0.2, ease: 'easeOut' }}
        width="64"
      />
      <div className="flex flex-col w-screen h-[100dvh] items-center gap-2">
        {menuLinks.map((link, idx) => (
          <Link
            className={cn(
              'w-fit p-3 no-underline active:!no-underline hover:!no-underline text-center text-white text-xl font-semibold',
              idx === 0 ? 'mt-[30%]' : '',
              link.customClassname
            )}
            href={link.href}
            key={idx}
            onClick={() =>
              link.href === '#'
                ? link.onClick?.()
                : setMobileNavbarOpen((prev) => !prev)
            }
          >
            {link.label}
            {link.icon}
          </Link>
        ))}

        <SubMenu
          handleSubMenuItemClick={handleSubMenuItemClick}
          isDesktop={false}
          language={language}
          subMenu={subMenu}
        />

        <Animation />
      </div>
    </motion.div>
  )
}

export default MobileNavbar
