import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, products } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: `${product.name} | XT-Invest`,
    description: `${product.description} REF: ${product.ref}.`,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const mailtoSubject = encodeURIComponent(`Poptávka: ${product.name} - xt-invest.cz`)
  const mailtoHref = `mailto:info@xt-invest.cz?subject=${mailtoSubject}`

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-navy">Domů</Link>
        <span>/</span>
        <Link href="/katalog" className="hover:text-navy">Katalog</Link>
        <span>/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden flex items-center justify-center h-80 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <span className="absolute top-4 right-4 bg-navy text-white text-xs font-medium px-2.5 py-1 rounded">BD</span>
        </div>

        <div>
          <p className="text-xs text-teal-dark uppercase tracking-widest font-medium mb-2">{product.categoryLabel}</p>
          <h1 className="text-xl font-medium text-navy mb-2 leading-snug">{product.name}</h1>
          <p className="text-sm text-gray-400 mb-4">REF: {product.ref}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="bg-navy px-4 py-2">
              <h2 className="text-white text-sm font-medium">Technické parametry</h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.params).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 text-gray-500 w-2/5">{key}</td>
                    <td className="px-4 py-2.5 text-navy font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Skladem — rychlá dodávka
          </div>
          <a href={mailtoHref} className="block w-full text-center bg-teal text-white font-medium py-3.5 rounded-xl hover:bg-teal-dark transition-colors text-sm">
            Poptat cenu tohoto produktu
          </a>
          <p className="text-xs text-gray-400 mt-2 text-center">Otevře e-mail s předvyplněným předmětem</p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link href="/katalog" className="text-sm text-teal hover:text-teal-dark transition-colors">← Zpět na katalog</Link>
      </div>
    </div>
  )
}
