import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { urbanPublicsArtworks } from "@/components/experiences/realismMilletDaumierArtworkSets";

export const metadata: Metadata = {
  title: "Moderne Öffentlichkeit und Klasse in der Kunst",
  description:
    "Ein Begriffsguide zu moderner Öffentlichkeit, Klasse, Infrastruktur, Nähe, Anonymität und sozialer Sichtbarkeit im Realismus.",
  alternates: { canonical: "/begriffe/moderne-oeffentlichkeit-und-klasse/" },
};

const functions = [
  {
    title: "Infrastruktur ordnet Körper",
    text: "Wagen, Straßen, Treppen, Fabriken und Gerichte sind nicht bloße Schauplätze. Sie bestimmen, wer sitzt oder steht, wer sich bewegen kann, wer beobachtet wird und wie lange Menschen einander ausgesetzt sind.",
  },
  {
    title: "Nähe macht Unterschiede lesbar",
    text: "Moderne Öffentlichkeit bringt fremde Menschen in gemeinsame Räume. Kleidung, Körperhaltung, Abstand, Gepäck und Komfort machen soziale Positionen gerade dort sichtbar, wo Menschen dieselbe Infrastruktur teilen.",
  },
  {
    title: "Anonymität ist nicht Unsichtbarkeit",
    text: "Eine Figur kann ohne Namen oder Biografie erscheinen und dennoch starke soziale Präsenz besitzen. Realistische Bilder bewegen sich häufig zwischen Porträt und Typus: genug Individualität für Anteilnahme, genug Offenheit für gesellschaftliche Lesbarkeit.",
  },
  {
    title: "Mobilität verteilt Freiheit ungleich",
    text: "Eisenbahn und Stadtverkehr erweitern Reichweite. Gleichzeitig verteilen sie Ruhe, Privatheit, Sicherheit und Zeit unterschiedlich. Technischer Fortschritt ist deshalb auch eine Frage des Körpers und der Klasse.",
  },
] as const;

const questions = [
  "Welche Infrastruktur organisiert den Raum?",
  "Wer darf sitzen, stehen, warten oder sich frei bewegen?",
  "Welche Körper berühren sich, und welche bleiben sozial getrennt?",
  "Wie werden Klasse und Arbeit ohne erklärenden Text sichtbar?",
  "Bleiben Figuren Individuen, Typen oder beides zugleich?",
  "Welche Kosten moderner Mobilität werden körperlich gezeigt?",
] as const;

export default function ModernPublicsPage() {
  return (
    <main style={{ background: "#d6cec2", color: "#242521" }}>
      <article style={{ margin: "0 auto", maxWidth: "88rem", padding: "clamp(5rem, 11vw, 10rem) 1.25rem" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase" }}>
          Begriff · Realismus
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.8rem, 10vw, 8.5rem)", fontWeight: 500, letterSpacing: "-.06em", lineHeight: ".92", margin: "1rem 0 2rem", maxWidth: "11ch" }}>
          Moderne Öffentlichkeit und Klasse
        </h1>
        <p style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)", lineHeight: 1.7, maxWidth: "55rem" }}>
          Öffentlichkeit bedeutet nicht nur politische Debatte. Im Realismus ist sie auch eine materielle Situation: fremde Menschen teilen Verkehr, Arbeit, Institutionen und begrenzten Raum unter ungleichen Bedingungen.
        </p>

        <ArtworkStrip items={urbanPublicsArtworks} title="Wagen, Straße, Innenraum und Fabrik" />

        <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", marginTop: "5rem" }}>
          {functions.map((item, index) => (
            <article key={item.title} style={{ borderTop: "1px solid rgb(36 37 33 / .35)", minHeight: "21rem", paddingTop: "1.5rem" }}>
              <span style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em" }}>0{index + 1}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.35rem", fontWeight: 500, letterSpacing: "-.04em", lineHeight: 1.02, margin: "2.5rem 0 1rem" }}>{item.title}</h2>
              <p style={{ lineHeight: 1.8 }}>{item.text}</p>
            </article>
          ))}
        </section>

        <section style={{ background: "#2e3332", color: "#f0eadd", margin: "5rem -1.25rem 0", padding: "clamp(4rem, 8vw, 7rem) 1.25rem" }}>
          <div style={{ margin: "0 auto", maxWidth: "76rem" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 500, letterSpacing: "-.05em", marginTop: 0 }}>
              Sechs Fragen an Bilder moderner Öffentlichkeit
            </h2>
            <ol style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", padding: 0, listStylePosition: "inside" }}>
              {questions.map((question) => (
                <li key={question} style={{ borderTop: "1px solid rgb(240 234 221 / .22)", lineHeight: 1.65, paddingTop: "1rem" }}>{question}</li>
              ))}
            </ol>
          </div>
        </section>

        <nav style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", marginTop: "5rem" }}>
          {[
            ["/kuenstler/honore-daumier/", "Honoré Daumier"],
            ["/werke/der-wagen-dritter-klasse/", "Der Wagen dritter Klasse"],
            ["/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/", "Ländliche Arbeit"],
            ["/epochen/realismus/", "Realismus"],
          ].map(([href, label]) => (
            <Link key={href} href={href} style={{ border: "1px solid rgb(36 37 33 / .3)", color: "inherit", padding: "1.5rem", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
