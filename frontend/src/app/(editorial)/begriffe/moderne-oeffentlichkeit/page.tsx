import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { modernUrbanPublicsArtworks } from "@/components/experiences/realismMilletDaumierArtworkSets";

export const metadata: Metadata = {
  title: "Moderne Öffentlichkeit: Klasse, Verkehr und anonyme Nähe",
  description:
    "Ein Begriffstext über moderne Öffentlichkeit im Realismus: gemeinsame Verkehrsräume, soziale Nähe ohne Gemeinschaft, Klassenlesbarkeit und urbane Beobachtung.",
  alternates: { canonical: "/begriffe/moderne-oeffentlichkeit/" },
};

const distinctions = [
  [
    "Öffentlich ist nicht gemeinschaftlich",
    "Menschen teilen denselben Wagen, dieselbe Straße oder denselben Innenraum, ohne deshalb eine gemeinsame soziale Welt zu bilden. Moderne Öffentlichkeit entsteht gerade aus Nähe, Fremdheit und unterschiedlichen Handlungsmöglichkeiten im selben Raum.",
  ],
  [
    "Klasse wird räumlich organisiert",
    "Sitzordnung, Blickrichtung, Kleidung, Gepäck, Zugang und körperlicher Komfort machen soziale Unterschiede sichtbar. Der Bildraum dokumentiert Klasse nicht nur durch Figuren, sondern durch Verteilung und Infrastruktur.",
  ],
  [
    "Anonymität ist eine soziale Form",
    "Unbekannte Figuren sind nicht automatisch bedeutungslos. Ihre geringe Individualisierung kann zeigen, wie urbane Systeme Menschen als Fahrgäste, Arbeiter, Konsumenten oder beobachtbare Typen erfassen.",
  ],
  [
    "Der Betrachter wird Mitreisender",
    "In Bildern von Verkehr und verdichteter Öffentlichkeit steht der Betrachter selten außerhalb. Perspektive und räumliche Enge machen ihn zum stillen Teilnehmer einer sozialen Situation, deren Regeln er lesen muss.",
  ],
] as const;

const questions = [
  "Welche Infrastruktur bringt die Figuren zusammen?",
  "Wer besitzt Raum, Sitzkomfort oder Bewegungsfreiheit?",
  "Welche Personen bleiben anonym und welche werden individualisiert?",
  "Wie verteilen sich Blickkontakt, Abwendung und Beobachtung?",
  "Welche sozialen Unterschiede sind materiell und nicht nur symbolisch sichtbar?",
  "Steht der Betrachter außerhalb der Menge oder bereits in ihr?",
] as const;

const links = [
  ["Künstler", "/kuenstler/honore-daumier/", "Honoré Daumier"],
  ["Werk", "/werke/der-wagen-dritter-klasse/", "Der Wagen dritter Klasse"],
  ["Gegenraum", "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/", "Ländliche Arbeit"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function ModernPublicsPage() {
  return (
    <main style={{ background: "#ddd8cc", color: "#232622" }}>
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
          Begriff · Realismus
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8.5rem)",
            fontWeight: 500,
            letterSpacing: "-.065em",
            lineHeight: ".9",
            margin: "1rem 0",
            maxWidth: "11ch",
          }}
        >
          Moderne Öffentlichkeit
        </h1>
        <p
          style={{
            fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
            lineHeight: 1.65,
            margin: "2rem 0 0",
            maxWidth: "56rem",
          }}
        >
          Realistische Bilder der Moderne zeigen Menschen, die denselben Raum teilen,
          ohne dieselben Möglichkeiten zu besitzen. Wagen, Straßen und Innenräume machen
          Klasse, Anonymität und Beobachtung zu räumlichen Erfahrungen.
        </p>
      </section>

      <section
        style={{
          background: "#29302d",
          color: "#eee9df",
          padding: "clamp(4rem, 9vw, 8rem) 1.25rem",
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "92rem" }}>
          <ArtworkStrip
            items={modernUrbanPublicsArtworks}
            title="Verkehr, Enge und soziale Beobachtung"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
          }}
        >
          {distinctions.map(([title, text], index) => (
            <article
              key={title}
              style={{
                borderTop: "1px solid rgb(35 38 34 / .34)",
                minHeight: "21rem",
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
                  letterSpacing: "-.04em",
                  lineHeight: 1.02,
                  margin: "2.5rem 0 1rem",
                }}
              >
                {title}
              </h2>
              <p style={{ lineHeight: 1.78, margin: 0 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{ background: "#a9a08f", padding: "clamp(5rem, 10vw, 8rem) 1.25rem" }}
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
            Sechs Fragen an Bilder öffentlicher Räume
          </h2>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              listStyle: "none",
              margin: "3rem 0 0",
              padding: 0,
            }}
          >
            {questions.map((question, index) => (
              <li
                key={question}
                style={{
                  borderTop: "1px solid rgb(35 38 34 / .4)",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  padding: "1rem 0",
                }}
              >
                <strong style={{ marginRight: ".75rem" }}>0{index + 1}</strong>
                {question}
              </li>
            ))}
          </ol>
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
                border: "1px solid rgb(35 38 34 / .3)",
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
