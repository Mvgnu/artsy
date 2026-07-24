import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { moonwatchers } from "@/app/(experiences)/epochen/romantik/content";

export const metadata: Metadata = {
  title: "Zwei Männer in Betrachtung des Mondes – Bildanalyse",
  description:
    "Caspar David Friedrichs Mondbetrachter Schritt für Schritt lesen: Komposition, Rückenfigur, Symbolik und offene Deutungen.",
  alternates: {
    canonical: "/werke/zwei-maenner-in-betrachtung-des-mondes/",
  },
};

const compositionNotes = [
  {
    number: "01",
    title: "Die Figuren bilden keinen Abschluss.",
    text: "Sie stehen nicht frontal vor uns und erklären auch keine Handlung. Ihre Körper öffnen eine Blickrichtung, die wir übernehmen können. Das Bild setzt den Betrachter nicht vor die Szene, sondern fast in dieselbe Gruppe.",
  },
  {
    number: "02",
    title: "Die tote Eiche arbeitet wie eine schräge Klammer.",
    text: "Stamm, Wurzeln und Äste schneiden durch den Vordergrund. Sie rahmen den Mond, blockieren aber zugleich den freien Ausblick. Betrachtung erscheint dadurch nicht als mühelose Weite, sondern als Blick durch Widerstände.",
  },
  {
    number: "03",
    title: "Der Mond bleibt klein und fern.",
    text: "Er beherrscht die Szene nicht durch Größe. Seine Wirkung entsteht daraus, dass Figuren, Äste und Helligkeitskontraste auf ihn ausgerichtet sind. Das Bild organisiert Aufmerksamkeit, nicht Spektakel.",
  },
  {
    number: "04",
    title: "Immergrün und abgestorbener Baum stehen nebeneinander.",
    text: "Die Gegenüberstellung lädt zu Gedanken über Dauer, Verfall, Hoffnung oder Erinnerung ein. Friedrich liefert jedoch keine Legende, die ein Symbol endgültig auf nur eine Bedeutung festlegt.",
  },
] as const;

const versions = [
  {
    date: "1819",
    place: "Dresden",
    text: "Die erste Fassung ist die dramatischste: dunkler, dichter und mit einer stark asymmetrischen Baumform. Friedrich schenkte sie seinem Freund Johan Christian Dahl.",
  },
  {
    date: "ca. 1824",
    place: "Berlin",
    text: "In der zweiten Variation betrachten ein Mann und eine Frau den Mond. Das hellere Dämmerlicht verstärkt den Gegensatz zwischen dunklem Vordergrund und offenem Himmel.",
  },
  {
    date: "ca. 1825–30",
    place: "New York",
    text: "Die Met-Fassung kehrt zu zwei Männern zurück. Sie ist flüssiger gemalt und wird als dritte, vermutlich letzte Version der berühmten Komposition geführt.",
  },
] as const;

export default function MoonwatchersArtworkPage() {
  return (
    <article className="bg-[#eee9dc] text-[#182022]">
      <header className="bg-[#0d1416] text-[#eee9dc]">
        <div className="mx-auto grid min-h-[78svh] w-full max-w-[100rem] lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[55svh] bg-[#080c0d] lg:min-h-[78svh]">
            <Image
              alt={moonwatchers.imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 68vw, 100vw"
              src={moonwatchers.imageUrl}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-12">
            <Link
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]"
              href="/epochen/romantik/"
            >
              ← Epochenreise Romantik
            </Link>
            <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
              Werkbetrachtung · Caspar David Friedrich
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.92] font-medium tracking-[-0.05em] sm:text-7xl">
              Zwei Männer in Betrachtung des Mondes
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#eee9dc]/75">
              Ein kleines Bild über einen großen Vorgang: zwei Menschen, ein gemeinsamer
              Blick und eine Landschaft, die keine eindeutige Antwort gibt.
            </p>
          </div>
        </div>
        <p className="mx-auto w-full max-w-[100rem] px-5 py-4 text-xs leading-5 text-[#eee9dc]/55 sm:px-10">
          {moonwatchers.artist}, <em>{moonwatchers.title}</em>, {moonwatchers.date}.{" "}
          {moonwatchers.medium}, {moonwatchers.dimensions}. {moonwatchers.institution}.{" "}
          {moonwatchers.creditLine}.{" "}
          <a className="underline" href={moonwatchers.sourceUrl}>
            {moonwatchers.rightsLabel} · Werkdatensatz
          </a>
        </p>
      </header>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
              Der erste Blick
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
              Das Bild tut fast nichts – und verändert genau dadurch unsere Position.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-[#182022]/75">
            <p>
              Zwei Männer unterbrechen einen Abendspaziergang im spätherbstlichen Wald.
              Sie sprechen nicht, gestikulieren nicht und führen keine sichtbare Handlung
              aus. Der eigentliche Vorgang ist das Schauen selbst. Weil ihre Gesichter
              verborgen bleiben, kann das Bild keine fertige Emotion an uns ausliefern.
            </p>
            <p>
              Stattdessen stellt es uns hinter die Figuren. Wir erhalten fast denselben
              Blick auf die Mondsichel, die dunklen Wurzeln und den schmalen hellen Himmel.
              Diese Nähe bleibt jedoch unvollständig: Wir gehören nicht ganz zu den Männern,
              wissen nicht, was sie denken, und können den Wald nicht einfach durchqueren.
            </p>
            <p>
              Friedrich macht die Landschaft deshalb weder zur topografischen Ansicht noch
              zur Illustration eines klaren Textes. Sie wird zu einer Versuchsanordnung für
              Aufmerksamkeit, Gemeinschaft und die Erfahrung einer Ferne, die sichtbar,
              aber nicht verfügbar ist.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#182325] text-[#eee9dc]">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
            Was im Bild arbeitet
          </p>
          <h2 className="mt-4 max-w-[16ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Vier Entscheidungen halten die Szene offen.
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden border border-[#eee9dc]/15 bg-[#eee9dc]/15 md:grid-cols-2">
            {compositionNotes.map((note) => (
              <article className="min-h-80 bg-[#182325] p-7 sm:p-10" key={note.number}>
                <p className="text-xs font-bold tracking-[0.18em] text-[#c6a96b]">
                  {note.number}
                </p>
                <h3 className="mt-12 font-serif text-3xl leading-tight font-medium tracking-[-0.035em] sm:text-4xl">
                  {note.title}
                </h3>
                <p className="mt-5 leading-8 text-[#eee9dc]/68">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
              Rückenfigur
            </p>
            <h2 className="mt-4 max-w-[11ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
              Eine Figur von hinten ist kein leerer Platzhalter.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-[#182022]/75">
            <p>
              Künstler nutzten abgewandte Figuren schon vor Friedrich, um den Blick des
              Publikums in eine Landschaft hineinzuziehen. Friedrich machte aus diesem
              Mittel jedoch ein zentrales Problem seiner Kunst. Die Figur zeigt, dass jemand
              sieht, ohne uns zu verraten, wie dieses Sehen vollständig zu verstehen ist.
            </p>
            <p>
              In den <em>Mondbetrachtern</em> entsteht daraus keine einsame Identifikationsfigur,
              sondern ein Paar. Das Bild handelt ebenso von geteilter Wahrnehmung wie von
              individueller Versenkung. Der eine Mann legt seine Hand auf die Schulter des
              anderen; Nähe und unerreichbare Ferne existieren gleichzeitig.
            </p>
            <Link className="inline-block font-bold underline" href="/motive/rueckenfigur/">
              Das Motiv der Rückenfigur weiterverfolgen →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#d1c5a7] text-[#182022]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#613b2b]">
            Keine endgültige Allegorie
          </p>
          <h2 className="mt-4 max-w-[17ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Christlich, mystisch, politisch – oder gerade deshalb romantisch?
          </h2>
          <div className="mt-12 grid gap-8 text-lg leading-9 text-[#182022]/75 lg:grid-cols-2 lg:gap-16">
            <p>
              Die drei Versionen wurden sehr unterschiedlich gelesen. Tote Eiche und
              immergrüne Fichte können Tod und Hoffnung, Vergänglichkeit und Fortdauer
              aufrufen. Der Mond kann religiöse Andacht, Naturfrömmigkeit oder die
              romantische Faszination für Nacht und Unendlichkeit bündeln.
            </p>
            <p>
              Auch die Kleidung der Männer wurde politisch gedeutet, weil sie mit der
              deutschen Nationalbewegung der Restaurationszeit verbunden werden kann. Das
              Entscheidende ist nicht, eine einzige Übersetzung zu wählen. Friedrich hält
              seine Elemente so aufeinander bezogen, dass mehrere Deutungen plausibel
              bleiben und keine das Bild restlos verbraucht.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
          Ein Motiv, drei Fassungen
        </p>
        <h2 className="mt-4 max-w-[15ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
          Friedrich wiederholte die Komposition, ohne sie einfach zu kopieren.
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {versions.map((version) => (
            <article className="border border-[#182022]/18 bg-[#e7dfd0] p-7" key={version.date}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b5139]">
                {version.date} · {version.place}
              </p>
              <p className="mt-8 leading-8 text-[#182022]/72">{version.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#101719] text-[#eee9dc]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
            Im Silo weitergehen
          </p>
          <h2 className="mt-4 max-w-[15ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Ein Werk öffnet Künstler, Motiv und Epoche.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Link
              className="border border-[#eee9dc]/16 bg-[#eee9dc]/5 p-7 no-underline"
              href="/kuenstler/caspar-david-friedrich/"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c6a96b]">
                Künstler
              </span>
              <strong className="mt-7 block font-serif text-3xl font-medium">
                Caspar David Friedrich
              </strong>
              <p className="mt-4 leading-7 text-[#eee9dc]/65">
                Biografie, Arbeitsweise und die Themen hinter dem bekannten Bildrepertoire.
              </p>
            </Link>
            <Link
              className="border border-[#eee9dc]/16 bg-[#eee9dc]/5 p-7 no-underline"
              href="/motive/rueckenfigur/"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c6a96b]">
                Motiv
              </span>
              <strong className="mt-7 block font-serif text-3xl font-medium">
                Die Rückenfigur
              </strong>
              <p className="mt-4 leading-7 text-[#eee9dc]/65">
                Wie eine abgewandte Figur das Sehen selbst zum Gegenstand macht.
              </p>
            </Link>
            <Link
              className="border border-[#eee9dc]/16 bg-[#eee9dc]/5 p-7 no-underline"
              href="/epochen/romantik/"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c6a96b]">
                Epoche
              </span>
              <strong className="mt-7 block font-serif text-3xl font-medium">
                Zurück zur Romantik
              </strong>
              <p className="mt-4 leading-7 text-[#eee9dc]/65">
                Das Bild mit Cole und Turner in eine größere visuelle Bewegung einordnen.
              </p>
            </Link>
          </div>

          <aside className="mt-16 border-t border-[#eee9dc]/16 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c6a96b]">
              Quellen
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-[#eee9dc]/72">
              <li>
                <a href={moonwatchers.sourceUrl}>The Met: Werkdatensatz</a>
              </li>
              <li>
                <a href="https://www.metmuseum.org/exhibitions/listings/2001/caspar-david-friedrich">
                  The Met: Caspar David Friedrich – Moonwatchers
                </a>
              </li>
              <li>
                <a href="https://www.metmuseum.org/de/exhibitions/caspar-david-friedrich-the-soul-of-nature/inside-the-exhibition">
                  The Met: Caspar David Friedrich – The Soul of Nature
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </article>
  );
}
