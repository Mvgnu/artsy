import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { constableProfileArtworks } from "@/components/experiences/romanticConstableArtworkSets";

export const metadata: Metadata = {
  title: "John Constable: Wetter, Arbeit und die gewöhnliche Landschaft",
  description:
    "Ein vertieftes Künstlerprofil zu John Constable: Stour Valley, Ölstudien, Wolken, ländliche Arbeit, große Ausstellungsgemälde und die Spannung zwischen Beobachtung und Erinnerung.",
  alternates: {
    canonical: "/kuenstler/john-constable/",
  },
};

const phases = [
  {
    period: "1776–1802",
    title: "Eine Landschaft, die nicht nur angesehen, sondern bewirtschaftet wurde",
    text: "Constable wuchs in East Bergholt in einer Familie auf, deren Wohlstand mit Mühlen, Getreidehandel und Transport auf dem River Stour verbunden war. Die Landschaft seiner späteren Bilder war deshalb kein unberührter Gegenraum zur Ökonomie. Wege, Schleusen, Pferde, Wagen und Wasserläufe gehörten zu einer vertrauten Arbeitswelt.",
  },
  {
    period: "1802–1816",
    title: "Studieren, vergleichen, draußen arbeiten",
    text: "Nach seiner Ausbildung an der Royal Academy entwickelte Constable eine Praxis aus Zeichnung, kleinen Ölstudien und genauer Beobachtung von Gelände und Wetter. Er wollte Landschaft nicht nach überlieferten Formeln zusammensetzen. Dennoch blieb auch die direkteste Studie eine Auswahl: ein bestimmter Himmel, ein Lichteinfall, ein zeitlich begrenzter Zustand.",
  },
  {
    period: "1816–1825",
    title: "Lokale Erinnerung wird zum großen Ausstellungsbild",
    text: "Mit Flatford Mill, The White Horse und The Hay Wain übertrug Constable Motive des Stour Valley in monumentale Formate, die mit Historienmalerei konkurrieren konnten. Die sogenannten six-footers sind keine vergrößerten Freilichtstudien. Sie entstehen aus vielen Beobachtungen, großformatigen Skizzen, Erinnerung und bewusster kompositorischer Ordnung.",
  },
  {
    period: "1825–1837",
    title: "Wetter bleibt konkret und wird zugleich dramatischer",
    text: "In den späteren Werken verdichten sich Atmosphäre, persönliche Verlusterfahrung, religiöse Architektur und nationale Geschichte. Salisbury Cathedral from the Meadows besitzt genaue meteorologische Elemente, aber keine rein dokumentarische Stimmung. Regenbogen, dunkle Wolken und Kathedrale tragen eine Spannung, die Beobachtung und Bedeutung untrennbar macht.",
  },
] as const;

const methods = [
  {
    title: "Wetter hat eine Dauer",
    text: "Constables Himmel sind keine neutrale blaue Fläche. Wolken haben Richtung, Gewicht und Veränderung. Viele Studien halten Tageszeit, Wind und Lichtzustand so präzise fest, dass Atmosphäre als zeitlicher Vorgang lesbar wird.",
  },
  {
    title: "Das Gewöhnliche ist organisiert",
    text: "Häuser, Mühlen, Wagen und Tiere wirken vertraut, doch ihre Stellung ist sorgfältig gewählt. Gewöhnlichkeit ist keine Abwesenheit von Komposition. Sie entsteht gerade dadurch, dass unspektakuläre Tätigkeiten bildwürdig und strukturbildend werden.",
  },
  {
    title: "Studie und Gemälde erfüllen verschiedene Aufgaben",
    text: "Die Ölstudie kann schnell, offen und materiell sein; das große Ausstellungsgemälde muss Distanz, Blickführung und öffentliche Wirkung organisieren. Constables Verfahren gewinnt an Klarheit, wenn beide Formen verglichen statt gegeneinander ausgespielt werden.",
  },
  {
    title: "Erinnerung ist nicht das Gegenteil von Beobachtung",
    text: "Viele Hauptwerke entstehen in London aus Motiven, die Constable aus seiner Jugend kannte. Erinnerung löscht den konkreten Ort nicht aus. Sie ordnet seine Details neu und verbindet lokale Erfahrung mit späterer künstlerischer Entscheidung.",
  },
] as const;

export default function JohnConstablePage() {
  return (
    <article style={{ background: "#18201c", color: "#f1eadb", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#c7b46c",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Künstlerprofil · Britische Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8.5rem)",
            fontWeight: 500,
            letterSpacing: "-.055em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          John
          <span style={{ color: "#9db28d", display: "block", fontStyle: "italic" }}>
            Constable
          </span>
        </h1>
        <p
          style={{
            color: "rgb(241 234 219 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "45rem",
          }}
        >
          Constable machte keinen Rückzug aus der modernen Welt sichtbar. Seine Flüsse,
          Mühlen, Pferde, Wolken und Wagen zeigen eine Landschaft, die gearbeitet,
          erinnert, beobachtet und für den öffentlichen Ausstellungsraum neu konstruiert
          wurde.
        </p>
      </header>

      <section style={{ background: "#ece5d7", color: "#211d18" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#657357",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Werke, vier Arbeitsweisen
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
            Von der Fähre bis zum Regenbogen.
          </h2>
          <ArtworkStrip
            items={constableProfileArtworks}
            light
            title="Arbeit, Himmel und erinnerter Ort"
          />
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
              color: "#c7b46c",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Entwicklung
          </p>
          <div
            style={{
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2rem",
            }}
          >
            {phases.map((phase) => (
              <section
                key={phase.period}
                style={{ background: "rgb(255 255 255 / .045)", padding: "2rem" }}
              >
                <p
                  style={{
                    color: "#c7b46c",
                    fontSize: ".72rem",
                    fontWeight: 800,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                  }}
                >
                  {phase.period}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    letterSpacing: "-.035em",
                    lineHeight: 1.05,
                    margin: "1.4rem 0 0",
                  }}
                >
                  {phase.title}
                </h2>
                <p style={{ color: "rgb(241 234 219 / .7)", lineHeight: 1.75 }}>
                  {phase.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#d9d1c1", color: "#201c17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#657357",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Wie Constable arbeitet
          </p>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              marginTop: "3rem",
            }}
          >
            {methods.map((method, index) => (
              <article
                key={method.title}
                style={{ borderTop: "1px solid #817766", paddingTop: "1.5rem" }}
              >
                <p
                  style={{
                    color: "#657357",
                    fontSize: ".72rem",
                    fontWeight: 800,
                    letterSpacing: ".15em",
                  }}
                >
                  0{index + 1}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.3rem",
                    fontWeight: 500,
                    letterSpacing: "-.04em",
                    lineHeight: 1,
                  }}
                >
                  {method.title}
                </h2>
                <p style={{ color: "rgb(32 28 23 / .72)", lineHeight: 1.75 }}>
                  {method.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c7b46c",
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
              ["The Hay Wain genau lesen", "/werke/the-hay-wain/"],
              [
                "Die gewöhnliche Landschaft verstehen",
                "/begriffe/gewoehnliche-landschaft/",
              ],
              ["J. M. W. Turner vergleichen", "/kuenstler/j-m-w-turner/"],
              ["Zur Romantik zurückkehren", "/epochen/romantik/"],
            ].map(([label, href]) => (
              <Link
                href={href!}
                key={href}
                style={{
                  border: "1px solid rgb(241 234 219 / .16)",
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
