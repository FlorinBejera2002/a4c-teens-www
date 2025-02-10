'use client'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ContactUsBtn = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  return (
    <InViewTransition delay={1}>
      <Link
        className="flex items-center font-medium gap-2 rounded-full bg-accent p-4 py-2 text-white w-fit !no-underline hover:!no-underline"
        href={`/${language}/evangelism-request`}
      >
        {t('button.contact_us')}
      </Link>
    </InViewTransition>
  )
}

export default ContactUsBtn
