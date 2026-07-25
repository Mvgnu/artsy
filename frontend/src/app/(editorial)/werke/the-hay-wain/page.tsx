import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { hayWainContextArtworks } from "@/components/experiences/romanticConstableArtworkSets";

export const metadata: Metadata = {
  title: "The Hay Wain: Warum Constables Idylle Arbeit zeigt",
  description:
    "Eine genaue Bildanalyse von John Constables The Hay Wain: Wagen, Fluss, Haus, Himmel, ländliche Arbeit, Erinnerung, Studien und die Konstruktion einer scheinbar natürlichen Landschaft.",
  alternates: {
    canonical: "/werke/the-hay-wain/",
  },
};

const observations = [
  {
    number: "01",
    title: "Der Wagen steht nicht in einer zeitlosen Idylle",
    text: "Das Fahrzeug fährt durch den flachen River Stour. Wasser ist hier Verkehrsweg, Arbeitsraum und Teil einer lokalen Infrastruktur. Der Wagen, die Pferde und die Gebäude machen die Landschaft benutzt und organisiert.",
  },
  {
    number: "02",
    title: "Willy Lott's Cottage stabilisiert den Ort",
    text: "Das Haus links verankert die Szene in einem konkreten, Constable vertrauten Umfeld. Es erscheint beinahe unverändert und dauerhaft, obwohl das Gemälde selbst aus Erinnerung und langwieriger Überarbeitung entstand.",
  },
  {
    number: "03",
    title: "Der Himmel nimmt fast die Hälfte des Bildes ein",
    text: "Wolken und Licht sind kein dekorativer Abschluss. Sie verändern Helligkeit, Tiefe und Erwartung. Die Landschaft wirkt ruhig, doch der Himmel hält sie in einem zeitlichen Zustand, der jederzeit umschlagen könnte.",
  },
  {
    number: "04",
    title: "Der Blick wird langsam und seitlich geführt",
    text: "Statt eines dramatischen Fluchtpunkts verteilt Constable Aufmerksamkeit über Haus, Wagen, Wasser, Wiesen, Tiere und Ferne. Das Bild verlangt keine schnelle Pointe. Bedeutung entsteht aus Beziehungen zwischen gewöhnlichen Dingen.",
  },
  {
    number: "05",
    title: "Das fertige Bild verbirgt seine eigene Herstellung nicht vollständig",
    text: "Helle Farbakzente, bewegte Blätter und wechselnde Oberflächen halten die Malerei sichtbar. Die bekannte Harmonie ist deshalb kein glatter Illusionismus, sondern ein Gleichgewicht aus Beobachtung, Erinnerung und materieller Arbeit.",
  },
] as const;

const distinctions = [
  {
    title: "Pastoral",
    text: "Eine kulturelle Vorstellung vom einfachen Landleben, häufig als Gegenbild zu Stadt, Arbeitsteilung oder politischem Konflikt.",
  },
  {
    title: "Idylle",
    text: "Ein Zustand begrenzter Harmonie. Eine Idylle kann reale Arbeit enthalten, aber deren Konflikte und Abhängigkeiten zurücknehmen.",
  },
  {
    title: "Arbeitslandschaft",
    text: "Ein Raum, dessen Form durch Produktion, Transport, Besitz, Pflege und wiederholte Nutzung entsteht.",
  },
  {
    title: "Beobachtete Landschaft",
    text: "Eine Landschaft, deren Wetter, Topografie und Stofflichkeit genau studiert wurden, ohne dass das fertige Bild eine neutrale Aufzeichnung sein muss.",
  },
] as const;

export default function TheHayWainPage() {
  return (
    <article style={{ background: "#e9e3d6", color: "#211d18", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#66745a",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Werk lesen · John Constable · 1821
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8.2rem)",
            fontWeight: 500,
            letterSpacing: "-.055em",
            lineHeight: ".86",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          The Hay Wain
          <span style={{ color: "#778a68", display: "block", fontStyle: "italic" }}>
            ist keine Pause von der Arbeit.
          </span>
        </h1>
        <p
          style={{
            color: "rgb(33 29 24 / .72)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "46rem",
          }}
        >
          Das Bild wirkt, als hätte Constable einen friedlichen Augenblick einfach
          vorgefunden. Tatsächlich übersetzt es eine bekannte Arbeitslandschaft in ein
          monumentales Ausstellungsbild und lässt seine sorgfältige Konstruktion wie
          natürliche Selbstverständlichkeit erscheinen.
        </p>
      </header>

      <section style={{ background: "#1a211d", color: "#f1eadc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c5b66f",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Fünf Beobachtungen
          </p>
          <div style={{ display: "grid", gap: "1px", marginTop: "2rem" }}>
            {observations.map((observation) => (
              <section
                key={observation.number}
                style={{
                  background: "rgb(255 255 255 / .045)",
                  display: "grid",
                  gap: "2rem",
                  gridTemplateColumns: "minmax(4rem, .25fr) minmax(0, 1fr)",
                  padding: "clamp(1.5rem, 4vw, 3rem)",
                }}
              >
                <p
                  style={{
                    color: "#c5b66f",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    margin: 0,
                  }}
                >
                  {observation.number}
                </p>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontWeight: 500,
                      letterSpacing: "-.04em",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {observation.title}
                  </h2>
                  <p style={{ color: "rgb(241 234 220 / .7)", lineHeight: 1.8 }}>
                    {observation.text}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#66745a",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Was der Vergleich verändert
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 3.5rem",
              maxWidth: "13ch",
            }}
          >
            Der fertige Frieden hat eine Vorgeschichte.
          </h2>
          <ArtworkStrip
            items={hayWainContextArtworks}
            light
            title="Arbeit, Serie und großformatige Skizze"
          />
        </div>
      </section>

      <section style={{ background: "#d8d0c0" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#66745a",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Begriffe auseinanderhalten
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "3rem",
            }}
          >
            {distinctions.map((item) => (
              <article
                key={item.title}
                style={{ background: "#ece5d8", padding: "2rem" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    fontWeight: 500,
                    letterSpacing: "-.04em",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h2>
                <p style={{ color: "rgb(33 29 24 / .7)", lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a211d", color: "#f1eadc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c5b66f",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Weitersehen
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
              marginTop: "2rem",
            }}
          >
            {[
              ["John Constable kennenlernen", "/kuenstler/john-constable/"],
              [
                "Die gewöhnliche Landschaft verstehen",
                "/begriffe/gewoehnliche-landschaft/",
              ],
              ["Turners Wetter vergleichen", "/kuenstler/j-m-w-turner/"],
              ["Zur Romantik zurückkehren", "/epochen/romantik/"],
            ].map(([label, href]) => (
              <Link
                href={href!}
                key={href}
                style={{
                  border: "1px solid rgb(241 234 220 / .16)",
                  color: "inherit",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  padding: "1.5rem",
                  textDecoration: "none",
                }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}
