import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { wandererContextArtworks } from "@/components/experiences/romanticIconicArtworkSets";

export const metadata: Metadata = {
  title: "Wanderer über dem Nebelmeer – Bildanalyse",
  description:
    "Caspar David Friedrichs Wanderer über dem Nebelmeer: Rückenfigur, Aussicht, Nebel, Selbstbeobachtung und die unsichere Souveränität des romantischen Blicks.",
  alternates: { canonical: "/werke/wanderer-ueber-dem-nebelmeer/" },
};

const questions = [
  "Steht die Figur sicher – oder nur erhöht?",
  "Was bleibt dem Blick durch Nebel und Bildkante entzogen?",
  "Ist die Landschaft Besitz, Prüfung oder Spiegel des Betrachters?",
  "Wie verändert die Rückenfigur unsere Position vor dem Bild?",
  "Welche Wege, Tiefen und Gefahren werden nur angedeutet?",
  "Was macht die Ikone leichter zitierbar als eindeutig interpretierbar?",
] as const;

export default function WandererPage() {
  return (
    <main style={{ background: "#e8ebe8", color: "#17201c" }}>
      <article style={{ margin: "0 auto", maxWidth: "78rem", padding: "clamp(4rem, 9vw, 8rem) 1.25rem" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
          Werk lesen · Caspar David Friedrich
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 10vw, 8.5rem)", letterSpacing: "-.06em", lineHeight: ".9", margin: "1rem 0" }}>
          Wanderer über dem Nebelmeer
        </h1>
        <p style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)", lineHeight: 1.55, maxWidth: "48rem" }}>
          Das Bild ist berühmt, weil es den Betrachter scheinbar an die Stelle einer souveränen Figur setzt. Seine eigentliche Spannung liegt jedoch darin, dass Höhe, Übersicht und Sicherheit nicht dasselbe sind.
        </p>

        <section style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", marginTop: "5rem" }}>
          {[
            ["Die Rückenfigur", "Sie versperrt den direkten Zugang zur Person und bietet zugleich eine Projektionsfläche. Wir sehen mit ihr, aber wir kennen sie nicht."],
            ["Das Nebelmeer", "Der Nebel verbindet die Bergspitzen zu einer Bühne und löscht zugleich Wege, Abstände und Gefahren. Übersicht wird zur partiellen Konstruktion."],
            ["Der Standpunkt", "Der Felsen stabilisiert den Körper im Vordergrund, während der Raum dahinter unmessbar bleibt. Die Figur beherrscht vor allem ihre unmittelbare Position."],
            ["Der ikonische Blick", "Spätere Reproduktionen lesen den Wanderer oft als Selbstverwirklichung. Das Original lässt jedoch ebenso Zweifel, Einsamkeit und Erkenntnisgrenzen zu."],
          ].map(([title, text]) => (
            <div key={title} style={{ borderTop: "1px solid rgb(23 32 28 / .3)", paddingTop: "1.25rem" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: 0 }}>{title}</h2>
              <p style={{ lineHeight: 1.75 }}>{text}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "6rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-.04em" }}>
            Die Aussicht ist kein neutraler Besitz
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "52rem" }}>
            Der Wanderer befindet sich über dem Nebel, aber nicht außerhalb der Landschaft. Seine Kleidung, sein Gehstock und sein Körper bleiben Teil derselben materiellen Welt. Friedrich organisiert keine kartografische Übersicht; er produziert eine Schwelle zwischen Nähe und Ferne, Wissen und Vermutung. Gerade dadurch kann das Bild zugleich Selbstbehauptung und Selbstprüfung bedeuten.
          </p>
        </section>

        <ArtworkStrip items={wandererContextArtworks} title="Drei Gegenmodelle zum isolierten Höhenblick" />

        <section style={{ marginTop: "6rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "3rem" }}>Sechs Fragen an das Bild</h2>
          <ol style={{ display: "grid", gap: "1rem", paddingLeft: "1.5rem", lineHeight: 1.7 }}>
            {questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </section>

        <nav style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", marginTop: "6rem" }}>
          {[
            ["Zum Friedrich-Profil", "/kuenstler/caspar-david-friedrich/"],
            ["Einsamkeit verstehen", "/begriffe/einsamkeit/"],
            ["Das Erhabene", "/begriffe/das-erhabene/"],
            ["Zur Romantik", "/epochen/romantik/"],
          ].map(([label, href]) => (
            <Link key={href} href={href!} style={{ border: "1px solid rgb(23 32 28 / .28)", color: "inherit", padding: "1.25rem", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
