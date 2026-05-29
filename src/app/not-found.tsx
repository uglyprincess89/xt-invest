import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 py-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-7xl sm:text-8xl font-bold text-navy/15 select-none leading-none">404</p>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-navy">
          Stránka nebyla nalezena
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Je možné, že odkaz je neplatný nebo byla stránka přesunuta.
          Zkuste přejít zpět na úvodní stránku nebo si prohlédněte náš portfolio produktů BD.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-navy hover:bg-navy-dark text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Zpět na úvod
          </Link>
          <Link
            href="/katalog"
            className="inline-flex items-center justify-center border border-navy/30 text-navy hover:border-teal hover:text-teal-dark text-sm font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Prohlédnout portfolio BD
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Potřebujete poradit?{' '}
          <Link href="/kontakt" className="text-teal-dark underline hover:text-teal transition-colors">
            Kontaktujte nás
          </Link>
        </p>
      </div>
    </section>
  )
}
