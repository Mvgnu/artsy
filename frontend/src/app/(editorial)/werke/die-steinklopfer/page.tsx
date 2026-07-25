import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { stoneBreakersContextArtworks } from "@/components/experiences/realismArtworkSets";

export const metadata: Metadata = {
  title: "Die Steinklopfer von Gustave Courbet: Arbeit ohne Heldentum",
  description:
    "Eine Bildanalyse zu Courbets Steinklopfern: anonyme Körper, Arbeit, Alter, Material, zerstörtes Original und realistischer Anspruch.",
  alternates: { canonical: "/werke/die-steinklopfer/" },
};

const questions = [
  [
    "Warum bleiben die Gesichter verborgen?",
    "Anonymität verhindert psychologische Individualisierung. Sichtbar werden stattdessen Alter, Kleidung, Haltung, Werkzeug und eine Arbeit, die Menschen sozial austauschbar macht.",
  ],
  [
    "Was leistet das große Format?",
    "Die Größe verleiht den Arbeitern historische Präsenz, ohne sie in klassische Helden zu verwandeln. Der Maßstab und die niedrige Tätigkeit bleiben produktiv gegeneinander gespannt.",
  ],
  [
    "Warum wirkt der Raum so eng?",
    "Die steile Böschung blockiert Tiefe und Horizont. Arbeit erscheint nicht als Teil einer offenen Landschaft, sondern als gedrängter Kreislauf aus Stein, Körper und Last.",
  ],
  [
    "Ist das Bild politische Anklage?",
    "Die sozialen Bedingungen sind unübersehbar. Eine eindeutige Botschaft ersetzt jedoch nicht die formale Analyse: Wirkung entsteht durch Körperalter, Wiederholung, Materialwiderstand und verweigerte Erzählung.",
  ],
] as const;

export default function StoneBreakersPage() {
  return (
    <main style={{ background: "#ded5c6", color: "#201e1a" }}>
      <section
        style={{
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(7rem, 13vw, 12rem) 1.25rem 6rem",
        }}
      >
        <p
          style={{
            fontSize: ".72rem",
            fontWeight: 800,
            letterSpacing: ".2em",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Werk lesen · Gustave Courbet · 1849
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".88",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          Die Steinklopfer zeigen Arbeit, bevor sie Bedeutung verspricht.
        </h1>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 23rem), 1fr))",
            marginTop: "5rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Ein älterer Mann zerschlägt Steine, ein jüngerer trägt Material fort.
            Courbet zeigt keine spektakuläre Handlung und keinen rettenden Augenblick.
            Das Bild organisiert vielmehr einen Kreislauf aus Alter, Kraft, Verschleiß
            und Abhängigkeit.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}>
            Das Original wurde 1945 in Dresden zerstört und ist nur durch Fotografien
            und Reproduktionen bekannt. Gerade deshalb muss die Analyse zwischen
            Werkgeschichte und Bildwirkung unterscheiden: Verlust macht das Gemälde
            historisch prekär, erklärt aber nicht seine formale Radikalität.
          </p>
        </div>
      </section>

      <section
        style={{ background: "#292a24", color: "#f1eadf", padding: "6rem 1.25rem" }}
      >
        <div style={{ margin: "0 auto", maxWidth: "94rem" }}>
          <ArtworkStrip
            items={stoneBreakersContextArtworks}
            title="Arbeit zwischen Courbet, Millet und Daumier"
          />
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
        }}
      >
        {questions.map(([title, text], index) => (
          <article
            key={title}
            style={{
              borderTop: "1px solid rgb(32 30 26 / .3)",
              minHeight: "20rem",
              padding: "1.5rem 0",
            }}
          >
            <span style={{ fontSize: ".72rem", fontWeight: 800 }}>0{index + 1}</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.35rem",
                fontWeight: 500,
                letterSpacing: "-.04em",
                lineHeight: 1,
                margin: "2rem 0 0",
              }}
            >
              {title}
            </h2>
            <p style={{ lineHeight: 1.78, margin: "1.25rem 0 0" }}>{text}</p>
          </article>
        ))}
      </section>

      <section style={{ background: "#b6a37d", padding: "6rem 1.25rem" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            margin: "0 auto",
            maxWidth: "94rem",
          }}
        >
          <Link
            href="/kuenstler/gustave-courbet/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong
              style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: 500,
              }}
            >
              Gustave Courbet
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Das Werk in Courbets Strategie monumentaler Gegenwart einordnen.
            </span>
          </Link>
          <Link
            href="/begriffe/arbeit-und-materiale-realitaet/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong
              style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: 500,
              }}
            >
              Arbeit und materiale Realität
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Werkzeug, Wiederholung, Körper und Infrastruktur vergleichend lesen.
            </span>
          </Link>
          <Link
            href="/epochen/realismus/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong
              style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: 500,
              }}
            >
              Realismus
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Vom Einzelwerk in den neuen Epochensilo wechseln.
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
