import KatalogClient from '@/components/KatalogClient'
import type { Metadata } from 'next'
import { seo } from '@/lib/data'

export const metadata: Metadata = {
  title: seo.pages.katalog.title,
  description: seo.pages.katalog.description,
}

export default function KatalogPage() {
  return <KatalogClient />
}
