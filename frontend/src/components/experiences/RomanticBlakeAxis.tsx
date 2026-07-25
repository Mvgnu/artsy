import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import { blakeAxisArtworks } from "./romanticBlakeArtworkSets";

const paths = [
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/william-blake/",
    text: "Kupferstich, illuminierte Bücher, Farbdrucke und eine private Mythologie, die sich über vier Jahrzehnte verändert.",
    title: "William Blake",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/the-ancient-of-days/",
    text: "Urizen, Zirkel, Lichtscheibe und Druckvariation: Schöpfung als produktive und zugleich begrenzende Ordnung.",
    title: "The Ancient of Days",
  },
  {
    eyebrow: "Begriff verstehen",
    href: "/begriffe/vision-und-prophezeiung/",
    text: "Warum prophetische Kunst Gegenwart diagnostiziert, eigene Welten baut und Autorität durch Text, Bild und Medium erzeugt.",
    title: "Vision und Prophezeiung",
  },
] as const;

export function RomanticBlakeAxis() {
  return (
    <aside style={{ background: "#241619", color: "#f2e9dc" }}>
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
                color: "#e4a55c",
                fontSize: ".72rem",
                fontWeight: 800,
                letterSpacing: ".2em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Neue Medienachse im Romantik-Silo
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
              Wenn das Buch selbst zur visionären Welt wird.
            </h2>
          </div>
          <p
            style={{
              alignSelf: "end",
              color: "rgb(242 233 220 / .72)",
              fontSize: "clamp(1.08rem, 2vw, 1.35rem)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "45rem",
            }}
          >
            Friedrich, Turner und Géricault arbeiten vor allem über Gemälde und einzelne
            Bildräume. Blake verschiebt die Romantik in eine andere Produktionsform: Text,
            Ornament, Figur, Druckplatte und Handkolorierung bilden gemeinsam ein
            veränderliches System aus Vision, Kritik und eigener Mythologie.
          </p>
        </div>

        <ArtworkStrip items={blakeAxisArtworks} title="Textseite, kosmisches Maß und apokalyptischer Körper" />

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
                border: "1px solid rgb(242 233 220 / .17)",
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
                  color: "#e4a55c",
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
              <p style={{ color: "rgb(242 233 220 / .7)", lineHeight: 1.72, margin: "1.25rem 0 0" }}>
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
  );
}
