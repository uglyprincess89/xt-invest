import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 py-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-8xl sm:text-9xl font-bold tracking-tight text-navy/10 select-none leading-none">404</p>

        <h1 className="mt-4 text-display-sm text-navy">
          Stránka nebyla nalezena
        </h1>

        <p className="mt-5 text-base text-gray-600 leading-relaxed">
          Je možné, že odkaz je neplatný nebo byla stránka přesunuta.
          Zkuste přejít zpět na úvodní stránku nebo si prohlédněte náš portfolio produktů BD.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-navy text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-card transition-all duration-200 ease-out hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Zpět na úvod
          </Link>
          <Link
            href="/katalog"
            className="inline-flex items-center justify-center border border-navy/25 text-navy text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 ease-out hover:border-teal hover:text-teal-dark hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
