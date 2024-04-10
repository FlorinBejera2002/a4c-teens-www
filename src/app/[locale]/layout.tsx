import type { Metadata } from 'next'

import './globals.css'
import './css/theme-shop.css'
import './css/theme-blog.css'
// css
import './css/theme.css'
import './css/skin-creative-agency-2.css'
import './css/simple-line-icons.min.css'
import './css/owl.theme.default.min.css'
import './css/owl.carousel.min.css'
import './css/magnific-popup.min.css'
import './css/demo-creative-agency-2.css'
import './css/custom.css'
import './css/bootstrap.min.css'
import './css/animate.compat.css'
import ModalEvangelism from './components/sections/evangelism-form'
import Nav from './components/nav'
import Footer from './components/footer'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import pick from 'lodash/pick'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Arise for Christ'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children, params: { locale } }: any) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          messages={
            // … and provide the relevant messages
            pick(messages, 'ClientCounter')
          }
        >
          <Nav />
          {children}
          <ModalEvangelism />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
