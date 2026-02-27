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
  metadataBase: new URL("https://genderse-kroegentocht.vercel.app/"),
  title: "Genderse Biercantus 2026",
  description: "De gezelligste Biercantus van Genderen.",
  openGraph: {
    title: "Genderse Biercantus 2026 🍻",
    description: "Vrijdag 29 mei in het Dorpshuis Genderen.",
    images: [
      {
        url: "/images/og-image.jpg", // ← dit is nu correct
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "nl_NL",
  },
};
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