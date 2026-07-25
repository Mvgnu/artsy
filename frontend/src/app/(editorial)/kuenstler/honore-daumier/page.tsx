import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { daumierProfileArtworks } from "@/components/experiences/realismMilletDaumierArtworkSets";

export const metadata: Metadata = {
  title: "Honoré Daumier: Öffentlichkeit, Arbeit und moderne Typen",
  description:
    "Ein Künstlerprofil über Honoré Daumier, Karikatur, politische Gewalt, Eisenbahn, urbane Arbeit und die sozialen Körper moderner Öffentlichkeit.",
  alternates: { canonical: "/kuenstler/honore-daumier/" },
};

const phases = [
  {
    title: "Karikatur als öffentliches Eingreifen",
    text: "Daumiers politische Lithografien arbeiten mit Überzeichnung, Wiedererkennbarkeit und schneller Zirkulation. Ihr Realismus liegt nicht in neutraler Ähnlichkeit, sondern darin, Machtverhältnisse in Körper, Gesten und Situationen zu verdichten.",
  },
  {
    title: "Gewalt nach dem Ereignis",
    text: "Rue Transnonain zeigt keinen heroischen Kampf, sondern einen privaten Raum nach staatlicher Gewalt. Der Betrachter trifft auf Körper, Möbel und Stille. Evidenz entsteht durch das, was nicht mehr rückgängig gemacht werden kann.",
  },
  {
    title: "Moderne Öffentlichkeit als geteilte Enge",
    text: "Eisenbahnwagen, Gerichte, Straßen und Theater sind bei Daumier soziale Maschinen. Menschen teilen Raum, ohne dieselbe Position zu besitzen. Blickrichtung, Sitzordnung, Kleidung und Müdigkeit machen Klasse sichtbar, ohne jede Figur zu individualisieren.",
  },
  {
    title: "Arbeit jenseits der Fabrik",
    text: "Die Wäscherin trägt Lasten durch die Stadt; Reisende ertragen Wege; Zuschauer und Anwälte führen bezahlte Rollen aus. Moderne Arbeit erscheint nicht nur als Produktion, sondern als Bewegung, Dienstleistung, Pflege, Beobachtung und institutioneller Alltag.",
  },
] as const;

const links = [
  ["Werk lesen", "/werke/der-wagen-dritter-klasse/", "The Third-Class Carriage"],
  ["Begriff verstehen", "/begriffe/moderne-oeffentlichkeit/", "Moderne Öffentlichkeit"],
  ["Ruraler Vergleich", "/kuenstler/jean-francois-millet/", "Jean-François Millet"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function HonoreDaumierPage() {
  return (
    <main style={{ background: "#d8d0c1", color: "#242522" }}>
      <section
        style={{
          margin: "0 auto",
          maxWidth: "92rem",
          padding: "clamp(5rem, 12vw, 10rem) 1.25rem",
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
          Künstlerprofil · Realismus
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.065em",
            lineHeight: ".9",
            margin: "1rem 0",
            maxWidth: "10ch",
          }}
        >
          Honoré Daumier
        </h1>
        <p
          style={{
            fontSize: "clamp(1.2rem, 2.3vw, 1.7rem)",
            lineHeight: 1.65,
            margin: "2rem 0 0",
            maxWidth: "53rem",
          }}
        >
          Daumier macht moderne Gesellschaft als gedrängte Öffentlichkeit sichtbar: in
          der Karikatur, im Gericht, auf der Straße und im Eisenbahnwagen.
        </p>
      </section>

      <section
        style={{
          background: "#2c3130",
          color: "#eee8da",
          padding: "clamp(4rem, 9vw, 8rem) 1.25rem",
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "92rem" }}>
          <ArtworkStrip
            items={daumierProfileArtworks}
            title="Gewalt, Menge, Transport und Last"
          />
        </div>
      </section>

      <section
        style={{
          margin: "0 auto",
          maxWidth: "78rem",
          padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
          }}
        >
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              style={{
                borderTop: "1px solid rgb(36 37 34 / .35)",
                minHeight: "22rem",
                padding: "1.5rem 0",
              }}
            >
              <span
                style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em" }}
              >
                0{index + 1}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.35rem",
                  fontWeight: 500,
                  letterSpacing: "-.035em",
                  lineHeight: 1.02,
                  margin: "2.5rem 0 1rem",
                }}
              >
                {phase.title}
              </h2>
              <p style={{ lineHeight: 1.78, margin: 0 }}>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#9a7760",
          color: "#f3ebdf",
          padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "78rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".95",
              margin: 0,
              maxWidth: "14ch",
            }}
          >
            Nähe ist noch keine Gemeinschaft.
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              margin: "2rem 0 0",
              maxWidth: "50rem",
            }}
          >
            Daumiers Menschen sitzen, warten, reisen und arbeiten nebeneinander. Gerade
            diese räumliche Nähe macht sichtbar, wie moderne Infrastruktur
            unterschiedliche Klassen verbindet, ohne ihre Unterschiede aufzuheben.
          </p>
        </div>
      </section>

      <nav
        aria-label="Weiterführende Wege"
        style={{
          margin: "0 auto",
          maxWidth: "92rem",
          padding: "clamp(4rem, 9vw, 7rem) 1.25rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
          }}
        >
          {links.map(([eyebrow, href, title]) => (
            <Link
              key={href}
              href={href!}
              style={{
                border: "1px solid rgb(36 37 34 / .3)",
                color: "inherit",
                minHeight: "13rem",
                padding: "1.5rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: ".7rem",
                  fontWeight: 800,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </span>
              <strong
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  marginTop: "2rem",
                }}
              >
                {title}
              </strong>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
