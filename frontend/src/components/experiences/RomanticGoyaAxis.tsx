import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import {
  darkRomanticismArtworks,
  goyaProfileArtworks,
} from "./romanticGoyaArtworkSets";

const axisArtworks = [
  goyaProfileArtworks[1],
  darkRomanticismArtworks[0],
  darkRomanticismArtworks[3],
] as const;

const paths = [
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/francisco-goya/",
    text: "Vom höfischen Auftrag über Druckgrafik und Krieg bis zu den privaten Schwarzen Malereien: Goya als Beobachter wechselnder Öffentlichkeiten.",
    title: "Francisco Goya",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/der-dritte-mai-1808/",
    text: "Laterne, Schützenreihe, Opfergruppe und wartende Körper: wie eine Exekution zur politischen Form wird.",
    title: "Der 3. Mai 1808",
  },
  {
    eyebrow: "Begriff verstehen",
    href: "/begriffe/dunkle-romantik/",
    text: "Warum das Dunkle nicht bloß Nacht oder Horror bedeutet, sondern die verdrängten Kosten von Vernunft, Herrschaft und Fantasie sichtbar macht.",
    title: "Dunkle Romantik",
  },
] as const;

export function RomanticGoyaAxis() {
  return (
    <aside style={{ background: "#17100f", color: "#f0e5d6" }}>
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
                color: "#c58d57",
                fontSize: ".72rem",
                fontWeight: 800,
                letterSpacing: ".2em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Vernunft unter Druck
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
              Wenn Ordnung, Kritik und Fantasie ineinander kippen.
            </h2>
          </div>
          <p
            style={{
              alignSelf: "end",
              color: "rgb(240 229 214 / .7)",
              fontSize: "clamp(1.08rem, 2vw, 1.35rem)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "45rem",
            }}
          >
            Goya erweitert den Romantik-Silo um eine andere Krise der Moderne: Nicht die
            Abwesenheit von Vernunft ist das Problem, sondern ihre Verflechtung mit Macht,
            Verwaltung, Gewalt und verdrängter Fantasie. Öffentliche Erinnerung,
            Druckserien und private Wandbilder zeigen drei verschiedene Räume dieser Krise.
          </p>
        </div>

        <ArtworkStrip items={axisArtworks} title="Exekution, Monster und leere Erwartung" />

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
                border: "1px solid rgb(240 229 214 / .17)",
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
                  color: "#c58d57",
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
                  color: "rgb(240 229 214 / .68)",
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
