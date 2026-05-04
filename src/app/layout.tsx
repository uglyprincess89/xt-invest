import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { seo } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: seo.pages.home.title,
  description: seo.pages.home.description,
  keywords: seo.default.keywords,
  openGraph: {
    siteName: seo.default.siteName,
    url: seo.default.siteUrl,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
