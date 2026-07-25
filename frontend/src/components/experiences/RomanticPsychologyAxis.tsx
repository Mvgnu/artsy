import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import {
  dreamArtworks,
  melancholyArtworks,
  solitudeArtworks,
  uncannyArtworks,
} from "./romanticPsychologyArtworkSets";

const axisArtworks = [
  dreamArtworks[0],
  uncannyArtworks[0],
  melancholyArtworks[3],
  solitudeArtworks[0],
] as const;

const paths = [
  {
    eyebrow: "Zustand lesen",
    href: "/begriffe/traum/",
    title: "Traum",
    text: "Veränderte Bildlogik, verdrängte Konflikte und die Frage, ob Schlaf Erkenntnis aussetzt oder erweitert.",
  },
  {
    eyebrow: "Vertrautheit prüfen",
    href: "/begriffe/das-unheimliche/",
    title: "Das Unheimliche",
    text: "Wie bekannte Körper, Räume und Institutionen fremd werden, ohne vollständig unbekannt zu sein.",
  },
  {
    eyebrow: "Zeit erfahren",
    href: "/begriffe/melancholie/",
    title: "Melancholie",
    text: "Verlust, historische Veränderung und Erwartung als offene Dauer statt abgeschlossene Trauer.",
  },
  {
    eyebrow: "Raum erfahren",
    href: "/begriffe/einsamkeit/",
    title: "Einsamkeit",
    text: "Maßstab, Rückenfigur, Leere und unerreichbare Gemeinschaft als räumlich gebaute Trennung.",
  },
] as const;

export function RomanticPsychologyAxis() {
  return (
    <aside style={{ background: "#171724", color: "#efedf4" }}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(6rem, 12vw, 11rem) 1.25rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
            marginBottom: "4rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#bba9d0",
                fontSize: ".72rem",
                fontWeight: 800,
                letterSpacing: ".2em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Psychologische Achse im Romantik-Silo
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3.4rem, 8vw, 7rem)",
                fontWeight: 500,
                letterSpacing: "-.055em",
                lineHeight: ".94",
                margin: "1rem 0 0",
                maxWidth: "12ch",
              }}
            >
              Wenn innere Zustände räumlich und materiell werden.
            </h2>
          </div>
          <p
            style={{
              alignSelf: "end",
              color: "rgb(239 237 244 / .7)",
              fontSize: "clamp(1.08rem, 2vw, 1.35rem)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "44rem",
            }}
          >
            Romantische Bilder zeigen Psyche nicht als unsichtbaren Inhalt hinter einem
            Gesicht. Traum verändert die Bildlogik, das Unheimliche destabilisiert
            Vertrautheit, Melancholie dehnt Zeit, und Einsamkeit organisiert Distanz.
          </p>
        </div>

        <ArtworkStrip
          items={axisArtworks}
          title="Traum, Fremdheit, Dauer und Distanz"
        />

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
            marginTop: "4rem",
          }}
        >
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              style={{
                border: "1px solid rgb(239 237 244 / .17)",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                minHeight: "21rem",
                padding: "2rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "#bba9d0",
                  fontSize: ".7rem",
                  fontWeight: 800,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                }}
              >
                {path.eyebrow}
              </span>
              <strong
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.35rem",
                  fontWeight: 500,
                  letterSpacing: "-.04em",
                  lineHeight: 1.02,
                  marginTop: "2.5rem",
                }}
              >
                {path.title}
              </strong>
              <p
                style={{
                  color: "rgb(239 237 244 / .68)",
                  lineHeight: 1.72,
                  margin: "1.25rem 0 0",
                }}
              >
                {path.text}
              </p>
              <em
                style={{
                  fontStyle: "normal",
                  fontWeight: 800,
                  marginTop: "auto",
                  paddingTop: "2rem",
                }}
              >
                Öffnen →
              </em>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
