import type { Metadata } from "next";
import Link from "next/link";

const contrasts = [
  {
    term: "Schönheit",
    title: "Form lädt zum ruhigen Gefallen ein.",
    text: "Das Schöne erscheint begrenzt, proportioniert und überschaubar. Es kann komplex sein, aber es lässt sich als geordnete Einheit erfassen.",
  },
  {
    term: "Erhabenheit",
    title: "Erfahrung übersteigt das verfügbare Maß.",
    text: "Das Erhabene entsteht dort, wo Größe, Dunkelheit, Kraft, Unendlichkeit oder Gefahr die Vorstellungskraft überfordern und dennoch anziehen.",
  },
] as const;

const mechanisms = [
  {
    number: "01",
    title: "Maßstab",
    text: "Berge, Meer, Himmel oder Katastrophen machen den menschlichen Körper klein. Entscheidend ist nicht bloß Größe, sondern das Missverhältnis zwischen Erfahrung und Fassungsvermögen.",
  },
  {
    number: "02",
    title: "Unbestimmtheit",
    text: "Nebel, Nacht, Rauch und blendendes Licht verhindern vollständige Klarheit. Was nicht sauber umrissen ist, kann größer, gefährlicher oder unendlicher erscheinen.",
  },
  {
    number: "03",
    title: "Distanz",
    text: "Erhabene Kunst erlaubt Gefahr ohne unmittelbare Vernichtung. Der Betrachter steht nahe genug, um Furcht zu imaginieren, und weit genug entfernt, um sie reflektieren zu können.",
  },
  {
    number: "04",
    title: "Selbstbewusstsein",
    text: "Die Erfahrung erniedrigt und erhöht zugleich: Der Körper erscheint klein, doch das Bewusstsein erkennt seine eigene Fähigkeit, über diese Kleinheit nachzudenken.",
  },
] as const;

const cases = [
  {
    artist: "Caspar David Friedrich",
    title: "Stille Erhabenheit",
    text: "Die Überforderung entsteht nicht durch Explosion oder Sturm, sondern durch Schweigen, Entfernung und offene Bedeutung. Eine Rückenfigur hält den Betrachter an einer Schwelle, ohne die Landschaft vollständig zu erschließen.",
    href: "/kuenstler/caspar-david-friedrich/",
  },
  {
    artist: "Thomas Cole",
    title: "Territoriale Erhabenheit",
    text: "Weite Landschaft wird mit Besiedlung, Eigentum und nationaler Zukunft verbunden. Das Erhabene ist nicht neutral: Es kann Wildnis bewundern und zugleich ihre Aneignung vorbereiten.",
    href: "/epochen/romantik/#geteilte-welt",
  },
  {
    artist: "J. M. W. Turner",
    title: "Atmosphärische Erhabenheit",
    text: "Wetter und Licht greifen die Lesbarkeit des Bildes selbst an. Der Betrachter erlebt nicht nur ein gefährliches Ereignis, sondern den Verlust eines sicheren visuellen Standpunkts.",
    href: "/kuenstler/j-m-w-turner/",
  },
] as const;

export const metadata: Metadata = {
  title: "Das Erhabene in der Romantik verstehen",
  description:
    "Was das Erhabene von Schönheit unterscheidet und wie Maßstab, Unbestimmtheit, Distanz und Selbstbewusstsein in romantischer Kunst zusammenwirken.",
  alternates: {
    canonical: "/begriffe/das-erhabene/",
  },
};

export default function SublimePage() {
  return (
    <article className="bg-[#e9e4d8] text-[#1c2424]">
      <header className="bg-[#11191b] text-[#efe9dc]">
        <div className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45e]">
            Begriff · Romantik
          </p>
          <h1 className="mt-5 max-w-[10ch] font-serif text-6xl leading-[0.9] font-medium tracking-[-0.055em] sm:text-8xl lg:text-9xl">
            Das Erhabene
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#efe9dc]/72 sm:text-xl">
            Das Erhabene ist nicht einfach „etwas sehr Großes“. Es bezeichnet eine
            widersprüchliche Erfahrung: Wir fühlen uns klein, gefährdet oder überfordert
            und erleben gerade darin die Kraft unseres eigenen Bewusstseins.
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#835035]">
              Die Grundspannung
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
              Anziehung und Überforderung zugleich.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#1c2424]/74">
            <p>
              In der europäischen Ästhetik des 18. Jahrhunderts wurde das Erhabene zu
              einem zentralen Gegenbegriff des Schönen. Autoren wie Edmund Burke
              betonten Dunkelheit, Unbestimmtheit, Macht und Furcht; Immanuel Kant
              fragte, wie eine Erfahrung, die unsere Vorstellungskraft überfordert,
              dennoch geistige Erhebung auslösen kann.
            </p>
            <p>
              Für romantische Kunst wurde diese Spannung produktiv. Landschaft musste
              nicht länger harmonisch und überschaubar sein. Sie konnte den Menschen
              konfrontieren, seine Grenzen sichtbar machen und Wahrnehmung selbst
              destabilisieren.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#1c2424]/15 bg-[#1c2424]/15 md:grid-cols-2">
          {contrasts.map((contrast) => (
            <article className="bg-[#e9e4d8] p-8 sm:p-10" key={contrast.term}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#835035]">
                {contrast.term}
              </p>
              <h3 className="mt-8 font-serif text-4xl font-medium tracking-[-0.035em]">
                {contrast.title}
              </h3>
              <p className="mt-5 leading-7 text-[#1c2424]/70">{contrast.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#202929] text-[#eee8dc]">
        <div className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d1a75d]">
            Vier Mechanismen
          </p>
          <h2 className="mt-4 max-w-[12ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
            Wie Bilder Überforderung organisieren.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {mechanisms.map((mechanism) => (
              <article
                className="border border-white/15 p-7 sm:p-9"
                key={mechanism.number}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d1a75d]">
                  {mechanism.number}
                </p>
                <h3 className="mt-8 font-serif text-3xl font-medium tracking-[-0.03em]">
                  {mechanism.title}
                </h3>
                <p className="mt-4 leading-7 text-[#eee8dc]/68">{mechanism.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#835035]">
            Drei romantische Varianten
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
            Dasselbe Wort, drei verschiedene Bildprobleme.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#1c2424]/72">
            „Erhaben“ beschreibt keinen einheitlichen Look. Der Begriff wird erst
            nützlich, wenn sichtbar wird, wodurch ein konkretes Bild Maßstab,
            Unsicherheit oder Gefahr erzeugt.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              className="flex flex-col border border-[#1c2424]/15 bg-white/28 p-7"
              key={item.artist}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#835035]">
                {item.artist}
              </p>
              <h3 className="mt-7 font-serif text-3xl font-medium tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-[#1c2424]/70">{item.text}</p>
              <Link className="mt-7 font-bold underline" href={item.href}>
                Im Werk weitersehen →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#b78d55] text-[#251d14]">
        <div className="mx-auto grid w-full max-w-[84rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f351f]">
              Ein häufiger Denkfehler
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
              Gefahr allein macht noch kein erhabenes Bild.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#251d14]/75">
            <p>
              Ein Sturm, ein Abgrund oder ein großer Berg können spektakulär sein, ohne
              eine erhabene Erfahrung zu erzeugen. Entscheidend ist, wie das Bild den
              Betrachter positioniert: Gibt es einen sicheren Überblick? Bleibt das
              Ereignis lesbar? Wird der Körper bedroht, die Vorstellungskraft
              überfordert oder beides?
            </p>
            <p>
              Deshalb ist der Begriff nur dann analytisch stark, wenn er an Komposition,
              Licht, Maßstab und Blickführung gebunden wird. Sonst wird „erhaben“ zu
              einem gehobenen Synonym für dramatisch.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#835035]">
          Weiter im Romanticism-Silo
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            className="border border-[#1c2424]/15 p-6 no-underline"
            href="/werke/whalers-turner/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#835035]">
              Werk
            </span>
            <strong className="mt-4 block font-serif text-2xl">Whalers lesen</strong>
          </Link>
          <Link
            className="border border-[#1c2424]/15 p-6 no-underline"
            href="/kuenstler/j-m-w-turner/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#835035]">
              Künstler
            </span>
            <strong className="mt-4 block font-serif text-2xl">Turner verstehen</strong>
          </Link>
          <Link
            className="border border-[#1c2424]/15 p-6 no-underline"
            href="/epochen/romantik/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#835035]">
              Epoche
            </span>
            <strong className="mt-4 block font-serif text-2xl">Zur Romantik</strong>
          </Link>
        </div>
      </section>
    </article>
  );
}
