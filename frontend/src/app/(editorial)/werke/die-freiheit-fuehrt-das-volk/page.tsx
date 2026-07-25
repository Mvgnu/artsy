import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { libertyContextArtworks } from "@/components/experiences/romanticIconicArtworkSets";

export const metadata: Metadata = {
  title: "Die Freiheit führt das Volk – Bildanalyse",
  description:
    "Delacroix' Die Freiheit führt das Volk: Allegorie, Julirevolution, Barrikade, soziale Typen, Tote und die politische Ambivalenz einer Ikone.",
  alternates: { canonical: "/werke/die-freiheit-fuehrt-das-volk/" },
};

const questions = [
  "Welche Figuren erscheinen als Individuen, welche als soziale Typen?",
  "Wie verbindet die Freiheitsfigur Allegorie und körperliche Gegenwart?",
  "Was leisten die Toten im Vordergrund für den politischen Sinn?",
  "Wer wird in die revolutionäre Gemeinschaft aufgenommen – und wer bleibt unsichtbar?",
  "Wie organisiert die Trikolore Blick, Bewegung und nationale Deutung?",
  "Warum lässt sich das Bild so leicht für gegensätzliche politische Botschaften verwenden?",
] as const;

export default function LibertyPage() {
  return (
    <main style={{ background: "#261d18", color: "#f0e6d5" }}>
      <article style={{ margin: "0 auto", maxWidth: "78rem", padding: "clamp(4rem, 9vw, 8rem) 1.25rem" }}>
        <p style={{ color: "#d6a54b", fontSize: ".75rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
          Werk lesen · Eugène Delacroix
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 10vw, 8rem)", letterSpacing: "-.055em", lineHeight: ".92", margin: "1rem 0" }}>
          Die Freiheit führt das Volk
        </h1>
        <p style={{ color: "rgb(240 230 213 / .82)", fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)", lineHeight: 1.55, maxWidth: "52rem" }}>
          Delacroix malt keine neutrale Reportage der Julirevolution von 1830. Er verwandelt aktuelle Straßenkämpfe in eine monumentale Bildform, in der Allegorie, soziale Beobachtung und politische Erinnerung miteinander konkurrieren.
        </p>

        <section style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", marginTop: "5rem" }}>
          {[
            ["Liberty als Doppelwesen", "Die Figur trägt antike und republikanische Zeichen, bleibt aber barfuß, verschmutzt und körperlich in der Barrikade verankert. Sie ist Idee und Teilnehmerin zugleich."],
            ["Die diagonale Bewegung", "Waffen, Fahne, Arme und Körper steigen nach vorn und oben. Der Betrachter wird nicht außerhalb gehalten, sondern räumlich in die kommende Bewegung einbezogen."],
            ["Die sozialen Typen", "Arbeiter, Bürger und bewaffneter Junge erzeugen den Eindruck eines breiten Volksbündnisses. Diese Einheit ist konstruiert und politisch selektiv."],
            ["Die Toten", "Die Leichen im Vordergrund verhindern einen vollständig triumphalen Ton. Revolution erscheint als Fortschritt, Opfer und Bildinszenierung zugleich."],
          ].map(([title, text]) => (
            <div key={title} style={{ borderTop: "1px solid rgb(240 230 213 / .25)", paddingTop: "1.25rem" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: 0 }}>{title}</h2>
              <p style={{ color: "rgb(240 230 213 / .76)", lineHeight: 1.75 }}>{text}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "6rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-.04em" }}>
            Eine politische Ikone ohne stabile Eigentümer
          </h2>
          <p style={{ color: "rgb(240 230 213 / .8)", fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "54rem" }}>
            Das Bild wurde häufig als allgemeines Symbol der Revolution gelesen. Seine historische Lage ist enger: Es bezieht sich auf die Julitage von 1830 und auf eine Revolution, die nicht alle sozialen und politischen Hoffnungen erfüllte. Gerade weil Delacroix konkrete Kämpfer mit einer überhistorischen Allegorie verbindet, kann das Bild später von sehr unterschiedlichen Bewegungen angeeignet werden.
          </p>
        </section>

        <ArtworkStrip items={libertyContextArtworks} title="Von literarischer Gewalt zur politischen Barrikade" />

        <section style={{ marginTop: "6rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "3rem" }}>Sechs Fragen an die Ikone</h2>
          <ol style={{ display: "grid", gap: "1rem", paddingLeft: "1.5rem", lineHeight: 1.7 }}>
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </section>

        <nav style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", marginTop: "6rem" }}>
          {[
            ["Delacroix entdecken", "/kuenstler/eugene-delacroix/"],
            ["Katastrophe und Zeugenschaft", "/begriffe/katastrophe-und-zeugenschaft/"],
            ["Der dritte Mai 1808", "/werke/der-dritte-mai-1808/"],
            ["Zur Romantik", "/epochen/romantik/"],
          ].map(([label, href]) => (
            <Link key={href} href={href!} style={{ border: "1px solid rgb(240 230 213 / .22)", color: "inherit", padding: "1.25rem", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
