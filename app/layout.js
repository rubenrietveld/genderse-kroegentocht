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
  title: "Genderse Biercantus 2026",
  description:
    "De gezelligste Biercantus van Genderen. Zing, drink en beleef een onvergetelijke avond!",
  openGraph: {
    title: "Genderse Biercantus 2026 🍻",
    description:
      "Vrijdag 29 mei in het Dorpshuis Genderen. Vol = vol!",
    url: "https://genderse-kroegentocht.vercel.app/",
    siteName: "Genderse Biercantus",
    images: [
      {
        url: "https://genderse-kroegentocht.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
};


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