import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/next'
import { seo } from '@/lib/data'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  metadataBase: new URL(seo.default.siteUrl),
  title: seo.pages.home.title,
  description: seo.pages.home.description,
  keywords: seo.default.keywords,
  openGraph: {
    siteName: seo.default.siteName,
    url: seo.default.siteUrl,
    type: 'website',
    locale: 'cs_CZ',
    images: [
      {
        url: seo.default.ogImage,
        width: 1200,
        height: 630,
        alt: 'XT-Invest — autorizovaný obchodní partner Becton Dickinson pro ČR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.pages.home.title,
    description: seo.pages.home.description,
    images: [seo.default.ogImage],
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
        <JsonLd />
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
