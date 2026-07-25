import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { uncannyArtworks } from "@/components/experiences/romanticPsychologyArtworkSets";

export const metadata: Metadata = {
  title: "Das Unheimliche in der Romantik: Vertrautheit unter Druck",
  description:
    "Wie romantische Kunst das Vertraute durch Leere, Wiederholung, instabile Körper und unsichere Wirklichkeit fremd werden lässt.",
  alternates: { canonical: "/begriffe/das-unheimliche/" },
};

const modes = [
  {
    title: "Vertrautes kippt",
    text: "Haus, Familie, Kirche oder Körper bleiben erkennbar, verlieren aber ihre gewohnte Funktion oder Sicherheit.",
  },
  {
    title: "Maßstab versagt",
    text: "Leere, Übergröße oder räumliche Unbestimmtheit verhindern, dass Betrachtende das Bild souverän ordnen.",
  },
  {
    title: "Status bleibt offen",
    text: "Vision, Erscheinung, Erinnerung und materielle Realität lassen sich nicht eindeutig voneinander trennen.",
  },
  {
    title: "Wiederholung stört",
    text: "Doppelungen, starre Reihen oder mechanische Abläufe verwandeln Ordnung in Bedrohung.",
  },
] as const;

const questions = [
  "Was ist im Bild vertraut und wodurch wird es fremd?",
  "Ist die Bedrohung sichtbar oder nur strukturell spürbar?",
  "Welche Rolle spielen Leere, Dunkelheit und Maßstab?",
  "Bleibt der ontologische Status einer Figur oder Erscheinung offen?",
  "Entsteht Unbehagen durch Körper, Raum oder institutionelle Ordnung?",
  "Gibt das Bild eine Erklärung oder verhindert es gerade die Erklärung?",
] as const;

export default function UncannyPage() {
  return (
    <article style={{ background: "#121716", color: "#e9efeb", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem 7rem",
        }}
      >
        <p
          style={{
            color: "#a8c8b7",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".2em",
            textTransform: "uppercase",
          }}
        >
          Psychologischer Begriff · Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          Das <span style={{ color: "#a8c8b7", fontStyle: "italic" }}>Unheimliche</span>
        </h1>
        <p
          style={{
            color: "rgb(233 239 235 / .72)",
            fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)",
            lineHeight: 1.75,
            margin: "3rem 0 0 auto",
            maxWidth: "48rem",
          }}
        >
          Unheimlich ist nicht einfach, was dunkel oder schrecklich aussieht. Es
          entsteht, wenn etwas Bekanntes seine Zuverlässigkeit verliert: ein Körper, ein
          Raum, eine Institution oder die Grenze zwischen Einbildung und Wirklichkeit.
        </p>
      </header>

      <section style={{ background: "#e5ece7", color: "#18201c" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              margin: "0 0 3rem",
              maxWidth: "12ch",
            }}
          >
            Vier Wege, Vertrautheit zu destabilisieren
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {modes.map((mode) => (
              <section
                key={mode.title}
                style={{ border: "1px solid rgb(24 32 28 / .18)", padding: "2rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {mode.title}
                </h3>
                <p style={{ lineHeight: 1.75, margin: "1rem 0 0" }}>{mode.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          margin: "0 auto",
          maxWidth: "92rem",
          padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
        }}
      >
        <ArtworkStrip
          items={uncannyArtworks}
          title="Leere, Körper, Erscheinung, Ruine"
        />
      </section>

      <section style={{ background: "#1b2421" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "76rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              margin: 0,
            }}
          >
            Sechs Fragen an ein unheimliches Bild
          </h2>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              listStyle: "none",
              margin: "3rem 0 0",
              padding: 0,
            }}
          >
            {questions.map((question, index) => (
              <li
                key={question}
                style={{
                  borderBottom: "1px solid rgb(233 239 235 / .18)",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "3rem 1fr",
                  padding: "1rem 0",
                }}
              >
                <span style={{ color: "#a8c8b7", fontWeight: 800 }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "1.1rem", lineHeight: 1.65 }}>{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer
        style={{ margin: "0 auto", maxWidth: "88rem", padding: "5rem 1.25rem 8rem" }}
      >
        <p style={{ color: "rgb(233 239 235 / .65)", lineHeight: 1.75 }}>
          Verwandte Wege: <Link href="/begriffe/dunkle-romantik/">Dunkle Romantik</Link>
          , <Link href="/begriffe/ruine-und-erinnerung/">Ruine und Erinnerung</Link> und{" "}
          <Link href="/begriffe/traum/">der Traum</Link>.
        </p>
      </footer>
    </article>
  );
}
