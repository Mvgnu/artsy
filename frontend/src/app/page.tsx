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
      "Ein strukturierter Kunstgraph soll Werke später nach Motiv, Stimmung, Ort, Zeit und Beziehung zugänglich machen.",
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
        aria-labelledby="foundation-title"
        className="mt-20 border-t border-line pt-10 sm:mt-28 sm:pt-14"
      >
        <div className="grid gap-10 lg:grid-cols-[0.75fr_2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Die Grundlage
            </p>
            <h2
              className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em]"
              id="foundation-title"
            >
              Erst das System, dann die Sammlung.
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

      <aside
        aria-label="Projektstatus"
        className="mt-20 max-w-[var(--reading-width)] rounded-3xl border border-line bg-ink p-7 text-canvas sm:mt-28 sm:p-9"
      >
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-canvas/70">
          Aktueller Stand
        </p>
        <p className="mt-4 font-serif text-2xl leading-9">
          Die technische Grundlage wird aufgebaut. Noch sind keine dünnen
          Epochen-, Künstler- oder Werkseiten öffentlich erreichbar oder für
          Suchmaschinen freigegeben.
        </p>
      </aside>
    </div>
  );
}
