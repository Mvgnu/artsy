import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const whalers = {
  title: "Whalers",
  date: "um 1845",
  imageUrl:
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437854/1685823/main-image",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/437854",
  alt: "Ein Walfangschiff, kleine Boote und ein Wal lösen sich in Gischt, Rauch und hellem Licht beinahe auf.",
} as const;

const phases = [
  {
    years: "1775–1802",
    title: "Vom topografischen Zeichner zum Ausstellungsstar",
    text: "Turner begann mit Architektur- und Landschaftsaquarellen, reiste unermüdlich und lernte, wie Gelände, Wolken, Wasser und Ruinen durch genaue Beobachtung glaubwürdig werden. Schon früh nutzte er diese Genauigkeit jedoch nicht nur dokumentarisch: Er steigerte Wetter, Maßstab und Licht zu dramatischen Bildereignissen.",
  },
  {
    years: "1802–1830",
    title: "Mit den Alten Meistern konkurrieren",
    text: "Als jüngster Vollmitglied der Royal Academy stellte Turner seine Landschaften neben Historienmalerei. Claude Lorrain, Poussin und niederländische Marinemaler waren keine bloßen Vorbilder. Turner behandelte sie als Gegner, deren Bildordnungen er übernehmen, überladen und destabilisieren konnte.",
  },
  {
    years: "1830–1851",
    title: "Licht wird zur materiellen Kraft",
    text: "In den späten Werken verlieren Körper und Räume ihre festen Grenzen. Dampf, Regen, Brand, Schnee und Meer verwischen Konturen, ohne dass Turner auf Gegenstände verzichtet. Seine Bilder bleiben erzählerisch, aber die Erzählung wird von Atmosphäre bedrängt.",
  },
] as const;

const strategies = [
  {
    title: "Wetter ist Handlung",
    text: "Sturm, Nebel oder Gischt begleiten die Geschichte nicht. Sie bestimmen, was Figuren tun können, was der Betrachter erkennt und wie sicher der Raum überhaupt lesbar bleibt.",
  },
  {
    title: "Licht zerstört ebenso wie es zeigt",
    text: "Helligkeit legt bei Turner Formen frei und löst sie im selben Moment auf. Deshalb wirkt sein Licht selten ruhig erleuchtend; es blendet, brennt, reflektiert und zerstreut.",
  },
  {
    title: "Technik und Natur greifen ineinander",
    text: "Dampfschiffe, Eisenbahn, industrielle Brände und Walfang erscheinen nicht außerhalb der Natur. Rauch, Geschwindigkeit und Maschinenkraft werden Teil derselben instabilen Atmosphäre.",
  },
  {
    title: "Das Bild verweigert bequemen Überblick",
    text: "Der Betrachter erhält oft keinen sicheren Standpunkt. Horizonte kippen, Entfernungen verschwimmen und zentrale Motive müssen erst aus Farbbewegungen herausgelesen werden.",
  },
] as const;

export const metadata: Metadata = {
  title: "J. M. W. Turner: Licht, Wetter und Kontrollverlust",
  description:
    "Ein Künstlerprofil über Turners Weg vom topografischen Zeichner zu einer Malerei, in der Licht, Wetter und Technik den Bildraum destabilisieren.",
  alternates: {
    canonical: "/kuenstler/j-m-w-turner/",
  },
};

export default function TurnerPage() {
  return (
    <article className="bg-[#ece7da] text-[#192123]">
      <header className="relative overflow-hidden bg-[#1d2424] text-[#f1eadb]">
        <div className="mx-auto grid min-h-[78svh] w-full max-w-[94rem] items-end gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <div className="relative z-10 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d0a65d]">
              Künstlerprofil · 1775–1851
            </p>
            <h1 className="mt-5 max-w-[8ch] font-serif text-6xl leading-[0.9] font-medium tracking-[-0.055em] sm:text-8xl lg:text-9xl">
              J. M. W. Turner
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#f1eadb]/75 sm:text-xl">
              Turner malte nicht einfach Licht. Er malte den Moment, in dem Licht,
              Wetter und Bewegung unsere Fähigkeit verlieren lassen, die Welt als
              stabile Ordnung zu erkennen.
            </p>
          </div>

          <figure className="relative aspect-[1.34] overflow-hidden border border-white/15 bg-black shadow-2xl">
            <Image
              alt={whalers.alt}
              fill
              preload
              sizes="(min-width: 1024px) 58vw, 100vw"
              src={whalers.imageUrl}
            />
            <figcaption className="absolute right-3 bottom-3 left-3 bg-[#111717]/88 px-3 py-2 text-xs leading-5 text-white/75 backdrop-blur-sm">
              J. M. W. Turner, <em>{whalers.title}</em>, {whalers.date}.{" "}
              <a className="font-semibold underline" href={whalers.sourceUrl}>
                The Met · Public Domain
              </a>
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a4f35]">
              Nicht der Vorläufer der Abstraktion
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
              Seine Bilder bleiben konkret, gerade wenn sie zerfließen.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#192123]/75">
            <p>
              Turner wird gern als überraschend moderner Maler gefeiert, dessen späte
              Werke beinahe abstrakt wirken. Das stimmt optisch, kann aber in die Irre
              führen. Seine Bilder handeln weiterhin von Schiffen, Katastrophen,
              Geschichte, Arbeit, Industrie und konkreten Orten.
            </p>
            <p>
              Entscheidend ist nicht, dass der Gegenstand verschwindet. Entscheidend
              ist, dass er unter Druck gerät. Ein Schiff bleibt ein Schiff, doch Wind,
              Gischt, Rauch und blendendes Licht machen es schwer, seine Lage sicher zu
              bestimmen. Wahrnehmung wird selbst zum Thema.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#222b2b] text-[#eee7d8]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d0a65d]">
            Drei Arbeitsphasen
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-3">
            {phases.map((phase) => (
              <article className="bg-[#222b2b] p-7 sm:p-9" key={phase.years}>
                <p className="text-xs font-bold tracking-[0.16em] text-[#d0a65d] uppercase">
                  {phase.years}
                </p>
                <h2 className="mt-8 font-serif text-3xl leading-tight font-medium tracking-[-0.03em]">
                  {phase.title}
                </h2>
                <p className="mt-5 leading-7 text-[#eee7d8]/68">{phase.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a4f35]">
            Wie Turner ein Bild baut
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
            Vier Kräfte, die den festen Raum auflösen.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {strategies.map((strategy, index) => (
            <article
              className="border border-[#192123]/15 bg-white/35 p-7 sm:p-9"
              key={strategy.title}
            >
              <p className="text-xs font-bold tracking-[0.18em] text-[#8a4f35] uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-8 font-serif text-3xl font-medium tracking-[-0.03em]">
                {strategy.title}
              </h3>
              <p className="mt-4 leading-7 text-[#192123]/70">{strategy.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#c9b98e] text-[#251f18]">
        <div className="mx-auto grid w-full max-w-[82rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#704024]">
              Der Fall Whalers
            </p>
            <h2 className="mt-4 max-w-[11ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
              Menschen arbeiten in einer Welt, die sich nicht beherrschen lässt.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#251f18]/75">
            <p>
              <em>Whalers</em> verbindet wirtschaftliche Gewalt, Tierkörper, maritime
              Arbeit und atmosphärische Überforderung. Der Wal, die Boote und das
              Mutterschiff sind sichtbar, aber nie sauber voneinander getrennt.
            </p>
            <p>
              Das Bild ist deshalb mehr als eine spektakuläre Meeresansicht. Es zeigt,
              wie menschliche Technik und organisierte Jagd in eine Natur eintreten,
              deren Kräfte weder optisch noch praktisch vollständig kontrollierbar sind.
            </p>
            <Link
              className="inline-block font-bold underline"
              href="/werke/whalers-turner/"
            >
              Whalers Schritt für Schritt lesen →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a4f35]">
          Weiter im Silo
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            className="border border-[#192123]/15 p-6 no-underline"
            href="/werke/whalers-turner/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a4f35]">
              Werk
            </span>
            <strong className="mt-4 block font-serif text-2xl">Whalers lesen</strong>
          </Link>
          <Link
            className="border border-[#192123]/15 p-6 no-underline"
            href="/begriffe/das-erhabene/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a4f35]">
              Begriff
            </span>
            <strong className="mt-4 block font-serif text-2xl">
              Das Erhabene verstehen
            </strong>
          </Link>
          <Link
            className="border border-[#192123]/15 p-6 no-underline"
            href="/epochen/romantik/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a4f35]">
              Epoche
            </span>
            <strong className="mt-4 block font-serif text-2xl">
              Zurück zur Romantik
            </strong>
          </Link>
        </div>
      </section>
    </article>
  );
}
