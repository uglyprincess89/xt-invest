import { company } from '@/lib/data'
import { siteUrl, absoluteUrl } from '@/lib/site'

// JSON-LD schémata pro Google - pomáhá pochopit kontext webu
export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: company.name,
    alternateName: 'XT-Invest',
    url: siteUrl,
    logo: absoluteUrl('/images/xt-invest-logo-dark.svg'),
    description: 'Autorizovaný obchodní partner Becton Dickinson pro Českou republiku.',
    taxID: company.dic,
    vatID: company.dic,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'IČO',
      value: company.ico,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.sidlo.ulice,
      addressLocality: `${company.sidlo.cast}, ${company.sidlo.mesto}`,
      postalCode: company.sidlo.psc,
      addressCountry: 'CZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.kontakt.telefon,
      email: company.kontakt.email,
      contactType: 'customer service',
      areaServed: 'CZ',
      availableLanguage: ['Czech'],
    },
    sameAs: [
      'https://www.bd.com',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    '@id': `${siteUrl}/#lekarna`,
    name: company.lekarna.nazev,
    image: absoluteUrl('/images/xt-invest-logo-dark.svg'),
    parentOrganization: {
      '@id': `${siteUrl}/#organization`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.lekarna.ulice,
      addressLocality: company.lekarna.mesto,
      postalCode: company.lekarna.psc,
      addressCountry: 'CZ',
    },
    telephone: company.kontakt.telefon,
    email: company.kontakt.email,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
