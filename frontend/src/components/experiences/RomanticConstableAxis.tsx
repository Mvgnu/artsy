import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import {
  constableProfileArtworks,
  ordinaryLandscapeArtworks,
} from "./romanticConstableArtworkSets";

const axisArtworks = [
  constableProfileArtworks[1],
  ordinaryLandscapeArtworks[0],
  constableProfileArtworks[3],
] as const;

const paths = [
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/john-constable/",
    text: "Wetterstudie, Arbeitslandschaft und großes Ausstellungsbild: Constable zwischen direkter Beobachtung, lokaler Erinnerung und öffentlicher Konstruktion.",
    title: "John Constable",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/the-hay-wain/",
    text: "Warum Wagen, Fluss, Cottage und Wolken keine zeitlose Idylle bilden, sondern eine sorgfältig komponierte Arbeitslandschaft.",
    title: "The Hay Wain",
  },
  {
    eyebrow: "Begriff verstehen",
    href: "/begriffe/gewoehnliche-landschaft/",
    text: "Wie Alltag, Arbeit, Besitz, Wetter und Erinnerung ein Bild tragen können, ohne ein monumentales Ereignis zu benötigen.",
    title: "Die gewöhnliche Landschaft",
  },
] as const;

export function RomanticConstableAxis() {
  return (
    <aside style={{ background: "#e5dfd2", color: "#211d18" }}>
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
                color: "#647158",
                fontSize: ".72rem",
                fontWeight: 800,
                letterSpacing: ".2em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Beobachtung und Arbeit im Romantik-Silo
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
              Wenn das Gewöhnliche lange genug betrachtet wird.
            </h2>
          </div>
          <p
            style={{
              alignSelf: "end",
              color: "rgb(33 29 24 / .7)",
              fontSize: "clamp(1.08rem, 2vw, 1.35rem)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "44rem",
            }}
          >
            Turner macht Wetter häufig zur Grenze der Wahrnehmung. Constable bindet es
            stärker an Ort, Dauer und wiederholte Beobachtung. Diese drei Wege zeigen,
            wie ländliche Arbeit und lokale Erinnerung monumentale Bildwürdigkeit
            erhalten, ohne in bloße Dokumentation oder harmlose Idylle zu zerfallen.
          </p>
        </div>

        <ArtworkStrip
          items={axisArtworks}
          light
          title="Wagen, Wolkenstudie und dramatische Spätlandschaft"
        />

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
                background: "#eee8dc",
                border: "1px solid rgb(33 29 24 / .16)",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                minHeight: "20rem",
                padding: "2rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "#647158",
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
              <p style={{ color: "rgb(33 29 24 / .68)", lineHeight: 1.72 }}>
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
