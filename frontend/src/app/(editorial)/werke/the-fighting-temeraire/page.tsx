import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { temeraireContextArtworks } from "@/components/experiences/romanticIconicArtworkSets";

export const metadata: Metadata = {
  title: "The Fighting Temeraire – Bildanalyse",
  description:
    "Turners The Fighting Temeraire: Segelschiff, Dampfschlepper, Sonnenuntergang, technischer Wandel und die Ambivalenz moderner Erinnerung.",
  alternates: { canonical: "/werke/the-fighting-temeraire/" },
};

const questions = [
  "Welche Form von Fortschritt zeigt der Schlepper – und welche nicht?",
  "Warum erscheint das alte Schiff größer, heller und zugleich machtlos?",
  "Wie verteilt Turner Gewicht zwischen Himmel, Wasser und Technik?",
  "Ist der Sonnenuntergang Symbol, Wetterereignis oder beides?",
  "Welche nationale Erinnerung wird erzeugt, welche Kosten bleiben unsichtbar?",
  "Wie verändert die lockere Malweise die Grenze zwischen Dokument und Elegie?",
] as const;

export default function TemerairePage() {
  return (
    <main style={{ background: "#e7ddca", color: "#1d2527" }}>
      <article
        style={{
          margin: "0 auto",
          maxWidth: "78rem",
          padding: "clamp(4rem, 9vw, 8rem) 1.25rem",
        }}
      >
        <p
          style={{
            color: "#9d4f27",
            fontSize: ".75rem",
            fontWeight: 800,
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Werk lesen · J. M. W. Turner
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8rem)",
            letterSpacing: "-.055em",
            lineHeight: ".92",
            margin: "1rem 0",
          }}
        >
          The Fighting Temeraire
        </h1>
        <p
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
            lineHeight: 1.55,
            maxWidth: "52rem",
          }}
        >
          Ein kleines Dampfschiff zieht ein berühmtes Segelkriegsschiff zu seinem
          letzten Liegeplatz. Turner macht daraus keine einfache Klage über verlorene
          Größe und keine ungebrochene Hymne auf Technik, sondern ein Bild des
          Übergangs.
        </p>

        <section
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            marginTop: "5rem",
          }}
        >
          {[
            [
              "Das bleiche Schiff",
              "Die Temeraire wirkt fast körperlos und geisterhaft. Ihre helle Größe dominiert optisch, während sie technisch bereits passiv geworden ist.",
            ],
            [
              "Der dunkle Schlepper",
              "Der Dampfschlepper ist klein, schwarz und funktional. Er verkörpert Leistung und Gegenwart, ohne die ästhetische Würde des alten Schiffes zu übernehmen.",
            ],
            [
              "Der Sonnenuntergang",
              "Das leuchtende Licht bietet eine starke Abschiedsmetapher, bleibt aber als atmosphärisches Ereignis materiell glaubwürdig. Symbol und Wetter werden nicht getrennt.",
            ],
            [
              "Die nationale Erinnerung",
              "Das alte Kriegsschiff trägt Ruhm und militärische Vergangenheit. Das Bild erinnert, ohne die Geschichte vollständig zu erklären oder ihre Gewalt zu neutralisieren.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                borderTop: "1px solid rgb(29 37 39 / .28)",
                paddingTop: "1.25rem",
              }}
            >
              <h2
                style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: 0 }}
              >
                {title}
              </h2>
              <p style={{ lineHeight: 1.75 }}>{text}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "6rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              letterSpacing: "-.04em",
            }}
          >
            Moderne Technik tritt als Beziehung auf
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "54rem" }}>
            Der Schlepper ersetzt die Temeraire nicht einfach. Er bewegt, verkleinert
            und historisiert sie. Moderne Technik erscheint dadurch als Kraft, die
            ältere Formen nicht nur überwindet, sondern in Bilder der Erinnerung
            verwandelt. Turners Gegenüberstellung bleibt ambivalent: Der neue Antrieb
            ist wirksam, das alte Schiff besitzt jedoch die größere visuelle Präsenz.
          </p>
        </section>

        <ArtworkStrip
          items={temeraireContextArtworks}
          title="Turner zwischen Ereignis, Industrie und politischer Atmosphäre"
        />

        <section style={{ marginTop: "6rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "3rem" }}>
            Sechs Fragen an den Übergang
          </h2>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              paddingLeft: "1.5rem",
              lineHeight: 1.7,
            }}
          >
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </section>

        <nav
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            marginTop: "6rem",
          }}
        >
          {[
            ["Turner entdecken", "/kuenstler/jmw-turner/"],
            ["Melancholie verstehen", "/begriffe/melancholie/"],
            ["Gewöhnliche Landschaft", "/begriffe/gewoehnliche-landschaft/"],
            ["Zur Romantik", "/epochen/romantik/"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href!}
              style={{
                border: "1px solid rgb(29 37 39 / .25)",
                color: "inherit",
                padding: "1.25rem",
                textDecoration: "none",
              }}
            >
              {label} →
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
