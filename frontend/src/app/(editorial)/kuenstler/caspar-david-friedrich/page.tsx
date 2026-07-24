import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { moonwatchers } from "@/app/(experiences)/epochen/romantik/content";

export const metadata: Metadata = {
  title: "Caspar David Friedrich – Künstlerprofil",
  description:
    "Caspar David Friedrichs Leben, Arbeitsweise und Landschaften: von Greifswald und Kopenhagen bis zur Dresdner Romantik.",
  alternates: {
    canonical: "/kuenstler/caspar-david-friedrich/",
  },
};

const facts = [
  ["Geboren", "1774 in Greifswald an der Ostsee"],
  ["Ausbildung", "Greifswald und Königlich Dänische Kunstakademie in Kopenhagen"],
  ["Lebenszentrum", "Dresden ab 1798"],
  ["Ölmalerei", "Öffentliches Debüt 1808"],
  ["Akademien", "Berlin 1810, Dresden 1816"],
  ["Lehre", "1824 außerordentlicher Professor für Landschaftsmalerei in Dresden"],
  ["Gestorben", "1840 in Dresden"],
] as const;

const workingPrinciples = [
  {
    title: "Draußen beobachten, im Atelier neu erfinden",
    text: "Friedrich zeichnete auf Wanderungen an der Ostseeküste und in der Landschaft um Dresden. Seine Gemälde sind dennoch keine bloßen Abschriften eines Ortes. Im Atelier verband er Studien, Erinnerungen und erfundene Ordnungen zu konzentrierten Kompositionen.",
  },
  {
    title: "Wenige Elemente, hohe Spannung",
    text: "Horizont, Fels, Baum, Kreuz, Ruine, Schiff oder Figur erscheinen oft vereinzelt und klar gesetzt. Diese Ökonomie macht jedes Element bedeutungsvoll, ohne seine Bedeutung vollständig festzuschreiben.",
  },
  {
    title: "Natur als persönlicher und gemeinsamer Gedächtnisraum",
    text: "Seine Landschaften verbinden Schönheit mit Verlust, religiöser Hoffnung, politischer Erfahrung, Sterblichkeit und Erinnerung. Die sichtbare Welt wird dabei nicht verlassen, sondern so geordnet, dass sie innere und kollektive Zustände tragen kann.",
  },
  {
    title: "Solitude und Gemeinschaft zugleich",
    text: "Das bekannte Bild des einsamen Wanderers greift zu kurz. Friedrich arbeitete in einem engen Kreis von Freunden, Kollegen und Familie. Auch in seinen Bildern betrachten Menschen Natur gemeinsam, stehen nebeneinander oder teilen einen Blick.",
  },
] as const;

export default function CasparDavidFriedrichPage() {
  return (
    <article className="bg-[#eee9dc] text-[#182022]">
      <header className="bg-[#101719] text-[#eee9dc]">
        <div className="mx-auto grid min-h-[72svh] w-full max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:py-28">
          <div>
            <Link
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]"
              href="/epochen/romantik/"
            >
              ← Epochenreise Romantik
            </Link>
            <p className="mt-16 text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
              Künstlerprofil · 1774–1840
            </p>
            <h1 className="mt-4 font-serif text-6xl leading-[0.86] font-medium tracking-[-0.06em] sm:text-8xl lg:text-9xl">
              Caspar David Friedrich
            </h1>
          </div>
          <div className="max-w-2xl lg:pb-3">
            <p className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#eee9dc]/90 sm:text-4xl">
              Er malte keine Flucht aus der Wirklichkeit. Er baute Landschaften, in
              denen Wirklichkeit, Erinnerung und Vorstellung untrennbar werden.
            </p>
            <p className="mt-7 text-lg leading-8 text-[#eee9dc]/68">
              Friedrich wurde zum bekanntesten Gesicht der deutschen Romantik, obwohl
              seine Bilder Gesichter häufig verbergen. Seine Kunst lebt von genauen
              Beobachtungen, radikaler Verdichtung und der Weigerung, Natur auf
              Hintergrund oder Symbolcode zu reduzieren.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
          Ein Leben in Bewegung und Konzentration
        </p>
        <div className="mt-5 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <h2 className="max-w-[11ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Von der Ostsee nach Dresden – und im Bild immer wieder zurück.
          </h2>
          <div className="space-y-7 text-lg leading-9 text-[#182022]/75">
            <p>
              Friedrich wurde 1774 in Greifswald geboren, damals Teil
              Schwedisch-Pommerns. Nach erster Ausbildung in seiner Heimat studierte er
              von 1794 bis 1798 an der Kunstakademie in Kopenhagen. Noch 1798 ließ er
              sich in Dresden nieder, wo er den größten Teil seines Lebens verbrachte
              und in ein Umfeld romantischer Schriftsteller, Gelehrter und
              Landschaftskünstler geriet.
            </p>
            <p>
              Seine Karriere begann nicht mit den heute berühmten Ölgemälden. Friedrich
              arbeitete zunächst vor allem als Zeichner und Druckgrafiker. Erst 1808
              trat er öffentlich als Ölmaler hervor. 1810 wurde er Mitglied der Berliner
              Akademie, 1816 der Dresdner Akademie; 1824 erhielt er dort eine
              außerordentliche Professur für Landschaftsmalerei.
            </p>
            <p>
              Trotz seines Dresdner Lebensmittelpunkts blieb die nördliche Landschaft
              zentral. Friedrich unternahm über Jahrzehnte Zeichenreisen an die
              Ostseeküste sowie in die Umgebung Dresdens und in die Berge. Nach einem
              Schlaganfall 1835 malte er nur noch wenig; er starb 1840 in Dresden.
            </p>
          </div>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden border border-[#182022]/18 bg-[#182022]/18 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([term, value]) => (
            <div className="min-h-40 bg-[#e7dfd0] p-6" key={term}>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b5139]">
                {term}
              </dt>
              <dd className="mt-7 font-serif text-2xl leading-tight font-medium tracking-[-0.025em]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-[#182325] text-[#eee9dc]">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
            Wie seine Bilder entstehen
          </p>
          <h2 className="mt-4 max-w-[15ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Beobachtung ist der Anfang, nicht das Endprodukt.
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden border border-[#eee9dc]/15 bg-[#eee9dc]/15 md:grid-cols-2">
            {workingPrinciples.map((principle) => (
              <article
                className="min-h-80 bg-[#182325] p-7 sm:p-10"
                key={principle.title}
              >
                <h3 className="font-serif text-3xl leading-tight font-medium tracking-[-0.035em] sm:text-4xl">
                  {principle.title}
                </h3>
                <p className="mt-6 leading-8 text-[#eee9dc]/68">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[100rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-20 lg:py-36">
        <div className="relative aspect-[1.255] overflow-hidden bg-[#0a1011] shadow-2xl">
          <Image
            alt={moonwatchers.imageAlt}
            fill
            sizes="(min-width: 1024px) 64vw, 100vw"
            src={moonwatchers.imageUrl}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5139]">
            Beispiel: geteilte Betrachtung
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-6xl">
            Friedrich ist nicht nur der Maler einsamer Menschen.
          </h2>
          <div className="mt-7 space-y-6 text-lg leading-9 text-[#182022]/72">
            <p>
              In <em>Zwei Männer in Betrachtung des Mondes</em> stehen zwei Menschen
              dicht beieinander. Die Landschaft trennt sie nicht voneinander, sondern
              gibt ihrer Gemeinschaft eine Richtung. Das Unendliche wird gemeinsam
              gesehen, ohne dadurch verfügbar zu werden.
            </p>
            <p>
              Dieses Motiv passt zu Friedrichs tatsächlicher Praxis. Sein Werk entstand
              in Austausch mit Freunden, Schülern, seiner Frau Caroline und anderen
              Landschaftskünstlern in Dresden. Die Vorstellung des isolierten Genies
              erklärt daher weniger als das Spannungsverhältnis von Einsamkeit und
              Verbundenheit.
            </p>
          </div>
          <Link
            className="mt-8 inline-block font-bold underline"
            href="/werke/zwei-maenner-in-betrachtung-des-mondes/"
          >
            Das Gemälde vollständig lesen →
          </Link>
        </div>
      </section>

      <section className="bg-[#d1c5a7] text-[#182022]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#613b2b]">
            Vier wiederkehrende Fragen
          </p>
          <h2 className="mt-4 max-w-[16ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Woran man Friedrich erkennt, ohne ihn auf einen Look zu reduzieren.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              [
                "Wie weit reicht der Blick?",
                "Horizonte, Fenster, Küsten und Berggipfel öffnen Ferne, während Vordergründe, Nebel und Figuren den Zugang begrenzen.",
              ],
              [
                "Was bleibt vom Menschen?",
                "Menschen erscheinen klein, abgewandt, verletzlich oder als Spuren. Ihre Bedeutung wächst gerade aus ihrer begrenzten Kontrolle.",
              ],
              [
                "Wie wird Zeit sichtbar?",
                "Ruinen, abgestorbene Bäume, Schnee, Abendlicht, Mondphasen und Schiffe verbinden Landschaft mit Vergänglichkeit und Erwartung.",
              ],
              [
                "Wann wird Schönheit gefährlich?",
                "Friedrich hält Trost und Bedrohung zusammen. Natur kann beruhigen, überwältigen, erinnern oder die Grenze des Bekannten markieren.",
              ],
            ].map(([title, text]) => (
              <article
                className="border border-[#182022]/18 bg-[#d8ccb0] p-7"
                key={title}
              >
                <h3 className="font-serif text-3xl leading-tight font-medium tracking-[-0.035em]">
                  {title}
                </h3>
                <p className="mt-5 leading-8 text-[#182022]/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101719] text-[#eee9dc]">
        <div className="mx-auto w-full max-w-[82rem] px-5 py-24 sm:px-8 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6a96b]">
            Weitersehen
          </p>
          <h2 className="mt-4 max-w-[14ch] font-serif text-5xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl">
            Vom Künstler zurück ins Werk und in das Motiv.
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
                Die Komposition und ihre drei Fassungen Schritt für Schritt untersuchen.
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
                Warum Friedrich Figuren von hinten zeigt und was das mit uns macht.
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
                Friedrich mit Cole und Turner vergleichen und die Bewegung weiter
                öffnen.
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
                  The Met: Caspar David Friedrich – The Soul of Nature
                </a>
              </li>
              <li>
                <a href="https://www.nationalgallery.org.uk/artists/caspar-david-friedrich">
                  National Gallery: Caspar David Friedrich – Biografie
                </a>
              </li>
              <li>
                <a href="https://www.nga.gov/content/ngaweb/collection/art-object-page.130555.html">
                  National Gallery of Art: Northern Landscape, Spring
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </article>
  );
}
