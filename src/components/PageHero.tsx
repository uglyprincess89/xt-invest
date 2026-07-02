import type { ReactNode } from 'react'

/**
 * Jednotná hlavička podstránek — stejný vizuální jazyk jako hero na úvodce
 * (navy-ink gradient, teal záře, jemný grid), jen v kompaktnějším měřítku.
 */
export default function PageHero({
  overline,
  title,
  children,
}: {
  overline?: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-ink text-white">
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(155deg,#0a2036_10%,#0f3358_65%,#164a70_115%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-28 left-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/4 rounded-full bg-teal/[0.13] blur-[100px]"
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.05] [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="page-hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0v44" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {overline && <p className="text-overline uppercase text-teal mb-3">{overline}</p>}
        <h1 className="text-display-sm max-w-3xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lead text-white/70">{children}</div>}
      </div>
    </section>
  )
}
