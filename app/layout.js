import './globals.css'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const headingFont = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading'
})

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata = {
  title: 'Genderse Kroegentocht',
  description: 'Gezellige events in Genderen zoals kroegentocht en biercantus.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-light text-dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}