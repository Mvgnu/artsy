import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { moonwatchers } from "@/app/(experiences)/epochen/romantik/content";

export const metadata: Metadata = {
  title: "Die Rückenfigur – Motiv der Romantik",
  description:
    "Was eine Rückenfigur im Bild leistet: Blickführung, Identifikation, Distanz und die besondere Rolle bei Caspar David Friedrich.",
  alternates: {
    canonical: "/motive/rueckenfigur/",
  },
};

const functions = [
  {
    number: "01",
    title: "Sie leiht uns einen Blickpunkt.",
    text: "Die Figur steht bereits im Bildraum und schaut in dieselbe Richtung, die auch für uns wichtig wird. Dadurch entsteht eine räumliche Einladung, ohne dass die Figur direkt mit uns kommuniziert.",
  },
  {
    number: "02",
    title: "Sie hält die Emotion offen.",
    text: "Ein Gesicht könnte Trauer, Furcht oder Staunen festlegen. Die Rückenansicht zeigt Haltung und Situation, lässt aber offen, welche innere Reaktion genau stattfindet.",
  },
  {
    number: "03",
    title: "Sie macht Sehen zum Thema.",
    text: "Wir betrachten nicht nur Landschaft. Wir sehen jemandem beim Betrachten zu. Das Bild zeigt damit zugleich einen Gegenstand und eine mögliche Beziehung zu diesem Gegenstand.",
  },
  {
    number: "04",
    title: "Sie kann Nähe und Distanz zugleich erzeugen.",
    text: "Wir dürfen uns der Figur annähern, bleiben aber hinter ihr. Diese doppelte Position – mitsehen, ohne vollständig zu wissen – passt besonders gut zur romantischen Erfahrung des Unendlichen und Unverfügbaren.",
  },
] as const;

export default function RueckenfigurPage() {
  return (
    <article className="bg-[#eee9dc] text-[#182022]">
      <header className="bg-[#101719] text-[#eee9dc]">
        <div className="mx-auto grid min-h-[72svh] w-full max-w-[96rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:py-28">
          <div>
            <Link
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]"
              href="/epochen/romantik/"
            >
              ← Epochenreise Romantik
            </Link>
            <p className="mt-16 text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
              Motiv · Bildsprache
            </p>
            <h1 className="mt-4 font-serif text-6xl leading-[0.86] font-medium tracking-[-0.06em] sm:text-8xl lg:text-9xl">
              Die Rückenfigur
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#eee9dc]/70">
              Eine Figur zeigt uns den Rücken – und öffnet gerade dadurch einen Platz,
              von dem aus wir selbst sehen können.
            </p>
          </div>
          <div className="relative aspect-[1.255] overflow-hidden bg-[#080c0d] shadow-2xl">
            <Image
              alt={moonwatchers.imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 58vw, 100vw"
              src={moonwatchers.imageUrl}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
              Keine bloße Staffage
            </p>
            <h2 className="mt-4 max-w-[11ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
              Die Figur erklärt das Bild nicht. Sie verändert unsere Beziehung zu ihm.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-[#182022]/75">
            <p>
              Als Rückenfigur bezeichnet man eine Person, die im Bild von hinten oder
              stark abgewandt erscheint. Das Motiv ist älter als die Romantik. Künstler
              nutzten es, um den Blick in eine Landschaft zu führen oder räumliche Tiefe
              zu erzeugen.
            </p>
            <p>
              Bei Caspar David Friedrich erhält diese Figur jedoch ein besonderes
              Gewicht. Sie steht oft nicht einfach am Rand einer Szene, sondern zwischen
              uns und einem Horizont, Meer, Mond, Gebirge oder Fenster. Wir sehen, dass
              sie sieht, doch ihr Gesicht bleibt verborgen. Dadurch wird Wahrnehmung
              selbst zum Inhalt.
            </p>
            <p>
              Diese Offenheit erklärt, warum die Rückenfigur so leicht zur
              Identifikationsfigur wird – und warum der Begriff dennoch vorsichtig
              verwendet werden sollte. Die Figur ist kein leerer Avatar. Kleidung,
              Körperhaltung, Abstand, Begleitung und Umgebung geben ihr eine konkrete
              soziale und historische Position.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#182325] text-[#eee9dc]">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
            Vier Bildfunktionen
          </p>
          <h2 className="mt-4 max-w-[15ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Was die abgewandte Figur tatsächlich leistet.
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden border border-[#eee9dc]/15 bg-[#eee9dc]/15 md:grid-cols-2">
            {functions.map((item) => (
              <article className="min-h-80 bg-[#182325] p-7 sm:p-10" key={item.number}>
                <p className="text-xs font-bold tracking-[0.18em] text-[#c6a96b]">
                  {item.number}
                </p>
                <h3 className="mt-12 font-serif text-3xl leading-tight font-medium tracking-[-0.035em] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-[#eee9dc]/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
          Am konkreten Werk
        </p>
        <div className="mt-5 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[1.255] overflow-hidden bg-[#0a1011] shadow-2xl">
            <Image
              alt={moonwatchers.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              src={moonwatchers.imageUrl}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <h2 className="font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-6xl">
              Zwei Rückenfiguren verändern die Bedeutung des Motivs.
            </h2>
            <div className="mt-7 space-y-6 text-lg leading-9 text-[#182022]/72">
              <p>
                In Friedrichs <em>Zwei Männer in Betrachtung des Mondes</em> teilen zwei
                Figuren denselben Blick. Eine Hand ruht auf der Schulter des anderen.
                Die Szene ist daher nicht nur ein Bild von Innerlichkeit, sondern auch
                von Begleitung und gemeinsamem Staunen.
              </p>
              <p>
                Wir stehen hinter diesem Paar, aber nicht an seiner Stelle. Das Bild
                gibt uns eine Richtung, ohne die soziale Beziehung der Männer
                auszulöschen. Gerade diese Differenz verhindert, dass die Rückenfigur
                zur völlig beliebigen Projektionsfläche wird.
              </p>
            </div>
            <Link
              className="mt-8 inline-block font-bold underline"
              href="/werke/zwei-maenner-in-betrachtung-des-mondes/"
            >
              Die gesamte Bildanalyse öffnen →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#d1c5a7] text-[#182022]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#613b2b]">
            Häufige Verkürzungen
          </p>
          <h2 className="mt-4 max-w-[16ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Nicht jede Rückenfigur bedeutet Einsamkeit, Sehnsucht oder „den Betrachter“.
          </h2>
          <div className="mt-12 grid gap-8 text-lg leading-9 text-[#182022]/75 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-7">
              <p>
                Die populärste Lesart setzt die Figur direkt mit uns gleich: Wir sollen
                sehen, was sie sieht, und fühlen, was sie fühlt. Das kann eine Wirkung
                des Motivs sein, ist aber nicht automatisch die einzige. Alter,
                Kleidung, Geschlecht, Tätigkeit und Begleitung bleiben Teil der
                Darstellung.
              </p>
              <p>
                Auch Einsamkeit ist keine feste Bedeutung. Eine einzelne Figur kann
                Ruhe, Trauer, Herrschaft, Gefahr oder konzentrierte Beobachtung
                ausdrücken. Zwei oder mehrere Rückenfiguren können Gemeinschaft gerade
                zum Thema machen.
              </p>
            </div>
            <div className="space-y-7">
              <p>
                Schließlich ist die Landschaft nicht bloß das Objekt hinter der Figur.
                Ihre räumliche Ordnung entscheidet, ob der Blick offen, blockiert,
                erhöht, gefährdet oder fragmentiert erscheint. Motiv und Umgebung müssen
                zusammen gelesen werden.
              </p>
              <p>
                Eine gute Analyse fragt daher nicht nur: „Wofür steht die Rückenfigur?“
                Sie fragt: Wo steht sie? Was kann sie sehen? Was bleibt ihr verborgen?
                Wer steht neben ihr? Und welche Position bleibt für uns übrig?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101719] text-[#eee9dc]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
            Im Silo weitergehen
          </p>
          <h2 className="mt-4 max-w-[14ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Motiv, Künstler und Werk wieder zusammenführen.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Link
              className="border border-[#eee9dc]/16 bg-[#eee9dc]/5 p-7 no-underline"
              href="/werke/zwei-maenner-in-betrachtung-des-mondes/"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c6a96b]">
                Werk
              </span>
              <strong className="mt-7 block font-serif text-3xl font-medium">
                Zwei Männer in Betrachtung des Mondes
              </strong>
              <p className="mt-4 leading-7 text-[#eee9dc]/65">
                Sehen, wie Rückenfiguren mit Baum, Mond und Weg zusammenspielen.
              </p>
            </Link>
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
                Das Motiv in Friedrichs Arbeitsweise und Themenwelt einordnen.
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
                Romantik
              </strong>
              <p className="mt-4 leading-7 text-[#eee9dc]/65">
                Die Rückenfigur neben Wetter, Maßstab und dem Erhabenen lesen.
              </p>
            </Link>
          </div>

          <aside className="mt-16 border-t border-[#eee9dc]/16 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c6a96b]">
              Quellen
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-[#eee9dc]/72">
              <li>
                <a href="https://www.metmuseum.org/de/exhibitions/caspar-david-friedrich-the-soul-of-nature/inside-the-exhibition">
                  The Met: Alone Together und die Rückenfigur
                </a>
              </li>
              <li>
                <a href={moonwatchers.sourceUrl}>
                  The Met: Zwei Männer in Betrachtung des Mondes
                </a>
              </li>
              <li>
                <a href="https://www.metmuseum.org/exhibitions/listings/2001/caspar-david-friedrich">
                  The Met: Caspar David Friedrich – Moonwatchers
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </article>
  );
}
