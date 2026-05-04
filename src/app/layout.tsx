import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import seoData from '@/data/seo.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: seoData.pages.home.title,
  description: seoData.pages.home.description,
  keywords: seoData.default.keywords,
  openGraph: {
    siteName: seoData.default.siteName,
    url: seoData.default.siteUrl,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
