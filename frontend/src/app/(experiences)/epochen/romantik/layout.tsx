import Link from "next/link";
import type { ReactNode } from "react";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import {
  nightArtworks,
  ruinMemoryArtworks,
} from "@/components/experiences/romanticRuinsArtworkSets";

const timeAxisArtworks = [ruinMemoryArtworks[0], nightArtworks[2], nightArtworks[3]] as const;

const paths = [
  {
    eyebrow: "Werk lesen",
    href: "/werke/abtei-im-eichwald/",
    text: "Trauerzug, gotisches Portal, kahle Eichen und Winterlicht: wie Friedrich aus einer beschädigten Kirche einen offenen Erinnerungsraum macht.",
    title: "Abtei im Eichwald",
  },
  {
    eyebrow: "Begriff verstehen",
    href: "/begriffe/ruine-und-erinnerung/",
    text: "Wie Fragmente Vergangenheit beweisen, ergänzen, verklären und als politische Warnung in die Gegenwart zurückholen.",
    title: "Ruine und Erinnerung",
  },
  {
    eyebrow: "Motiv verstehen",
    href: "/motive/nacht/",
    text: "Warum Mondlicht und Dunkelheit Wahrnehmung, Arbeit, Gemeinschaft und Vision neu ordnen — weit über melancholische Stimmung hinaus.",
    title: "Die Nacht",
  },
] as const;

export default function RomanticismLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <aside style={{ background: "#101719", color: "#eee8dc" }}>
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
                  color: "#c7a963",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".2em",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                Neue Zeitachse im Romantik-Silo
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
                Wenn Landschaft Vergangenheit und Nacht in sich trägt.
              </h2>
            </div>
            <p
              style={{
                alignSelf: "end",
                color: "rgb(238 232 220 / .7)",
                fontSize: "clamp(1.08rem, 2vw, 1.35rem)",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: "44rem",
              }}
            >
              Die bisherigen Wege fragen nach Blick, Nation, Wetter, Revolution und
              Katastrophe. Diese drei neuen Seiten ergänzen eine andere Dimension:
              historische Zeit. Ruinen zeigen, dass Ordnungen vergehen; Nacht zeigt, wie
              eine vertraute Welt unter veränderten Bedingungen neu lesbar wird.
            </p>
          </div>

          <ArtworkStrip items={timeAxisArtworks} title="Ruine, Mondlicht und verwandelte Zeit" />

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "4rem",
            }}
          >
            {paths.map((path) => (
              <Link
                href={path.href}
                key={path.href}
                style={{
                  border: "1px solid rgb(238 232 220 / .17)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "20rem",
                  padding: "2rem",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    color: "#c7a963",
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
                    fontSize: "2.5rem",
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
                    color: "rgb(238 232 220 / .68)",
                    lineHeight: 1.72,
                    margin: "1.25rem 0 0",
                  }}
                >
                  {path.text}
                </p>
                <em style={{ fontStyle: "normal", fontWeight: 800, marginTop: "auto", paddingTop: "2rem" }}>
                  Öffnen →
                </em>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
