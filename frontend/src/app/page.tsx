import Link from "next/link";

const productPillars = [
  {
    eyebrow: "Erleben",
    title: "Epochen als eigene visuelle Welten",
    description:
      "Romantik, Impressionismus und weitere Bewegungen erhalten bewusst komponierte Reisen statt austauschbarer Artikelvorlagen.",
  },
  {
    eyebrow: "Verstehen",
    title: "Werke bis ins Detail lesen",
    description:
      "Komposition, Motive, Technik, Geschichte und strittige Deutungen werden am konkreten Bild nachvollziehbar gemacht.",
  },
  {
    eyebrow: "Entdecken",
    title: "Echte Kunst entlang visueller Ideen finden",
    description:
      "Mit jeder Epochenreise wächst ein Netz aus Werken, Künstlern, Motiven und vergleichbaren Bildideen.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[var(--content-width)] px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
      <section aria-labelledby="home-title" className="max-w-4xl">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-accent">
          Leerraum · im Aufbau
        </p>
        <h1
          className="font-serif text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl"
          id="home-title"
        >
          Kunstgeschichte sollte sich wie das Betreten einer Welt anfühlen.
        </h1>
        <p className="mt-8 max-w-[var(--reading-width)] text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          Leerraum entsteht als deutschsprachige visuelle Kunstgeschichte: mit
          eigenständigen Epochenreisen, präzisen Werkbetrachtungen und einem
          quellenbasierten Weg durch echte Kunst.
        </p>
      </section>

      <section
        aria-labelledby="romanticism-preview-title"
        className="mt-20 overflow-hidden rounded-[2rem] bg-ink text-canvas sm:mt-28"
      >
        <div className="grid min-h-[30rem] gap-10 px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-14 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-canvas/60">
              Erste Epochenreise
            </p>
            <h2
              className="mt-5 max-w-[10ch] font-serif text-5xl leading-[0.92] font-semibold tracking-[-0.045em] sm:text-7xl"
              id="romanticism-preview-title"
            >
              Romantik: Als die Landschaft zurückblickte
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-canvas/75">
              Eine erste visuelle Reise durch Maßstab, Atmosphäre, innere Landschaft und
              das Erhabene. Mit Thomas Cole und J. M. W. Turner als zwei sehr
              verschiedenen Antworten auf dieselbe Unruhe.
            </p>
            <Link
              className="mt-8 inline-flex rounded-full border border-canvas/30 px-5 py-3 font-bold no-underline transition hover:border-canvas hover:bg-canvas hover:text-ink"
              href="/epochen/romantik/"
            >
              Die Reise betreten
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="foundation-title"
        className="mt-20 border-t border-line pt-10 sm:mt-28 sm:pt-14"
      >
        <div className="grid gap-10 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Die Idee
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em]"
              id="foundation-title"
            >
              Erst die Erfahrung, dann das System daraus.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {productPillars.map((pillar) => (
              <article
                className="rounded-3xl border border-line bg-surface p-6 shadow-soft"
                key={pillar.title}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight font-semibold tracking-[-0.025em]">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-7 text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
