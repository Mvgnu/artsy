import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { ordinaryLandscapeArtworks } from "@/components/experiences/romanticConstableArtworkSets";

export const metadata: Metadata = {
  title: "Die gewöhnliche Landschaft: Beobachtung, Arbeit und Wetter",
  description:
    "Ein Leitfaden zur gewöhnlichen Landschaft in der Romantik: Alltag, Arbeit, Wetterbeobachtung, Erinnerung, das Pastorale und der Vergleich zwischen Constable und Turner.",
  alternates: {
    canonical: "/begriffe/gewoehnliche-landschaft/",
  },
};

const functions = [
  {
    title: "Das Gewöhnliche macht Aufmerksamkeit prüfbar",
    text: "Ein spektakulärer Berg oder Schiffbruch rechtfertigt Aufmerksamkeit scheinbar von selbst. Bei einem Flussufer, Wagen oder Wolkenfeld muss das Bild erst zeigen, weshalb Beziehungen, Veränderungen und Tätigkeiten bedeutend sind.",
  },
  {
    title: "Arbeit schreibt sich in den Raum ein",
    text: "Mühlen, Wege, Hecken, Schleusen, Tiere und Gebäude sind keine Staffage. Sie zeigen, wie Landschaft durch wiederholte Nutzung, Besitz und Pflege geformt wird. Selbst menschenarme Bilder können eine soziale Struktur tragen.",
  },
  {
    title: "Wetter verhindert zeitlose Harmonie",
    text: "Licht und Wolken machen einen Ort veränderlich. Ein Landschaftsbild kann vertraut und stabil wirken, während sein Himmel einen Zustand zeigt, der nur für Minuten besteht. Dauer und Augenblick bleiben gleichzeitig sichtbar.",
  },
  {
    title: "Erinnerung ordnet Beobachtung neu",
    text: "Ein Künstler kann einen Ort genau kennen und ihn dennoch aus räumlicher oder zeitlicher Distanz malen. Erinnerung ist dann keine freie Fantasie, sondern ein Verfahren, das Details auswählt, verbindet und emotional gewichtet.",
  },
] as const;

const questions = [
  "Welche Tätigkeiten haben den dargestellten Raum geformt?",
  "Welche Elemente wirken beiläufig, übernehmen aber kompositorische Arbeit?",
  "Ist das Wetter Hintergrund, Zeitangabe oder handelnde Kraft?",
  "Welche Spuren von Besitz, Transport, Pflege oder Produktion sind sichtbar?",
  "Wie unterscheidet sich eine schnelle Studie vom ausgearbeiteten Hauptwerk?",
  "Welche Harmonie erzeugt das Bild und welche Konflikte lässt es außerhalb des Rahmens?",
] as const;

const traps = [
  {
    title: "Gewöhnlich mit bedeutungslos verwechseln",
    text: "Ein alltägliches Motiv besitzt nicht weniger Struktur. Seine Bedeutung liegt häufig gerade darin, wie Aufmerksamkeit ohne monumentales Ereignis organisiert wird.",
  },
  {
    title: "Beobachtung als fotografische Neutralität behandeln",
    text: "Auch genaue Studien wählen Ausschnitt, Moment, Material und Geschwindigkeit. Beobachtung ist eine Praxis, keine automatische Kopie der sichtbaren Welt.",
  },
  {
    title: "Jede Landschaft als unberührte Natur lesen",
    text: "Gebäude, Wege, Flüsse und Vegetation können Produkte langer Nutzung sein. Die Abwesenheit großer Städte bedeutet nicht die Abwesenheit von Ökonomie oder Macht.",
  },
  {
    title: "Constable und Turner auf Ruhe gegen Drama reduzieren",
    text: "Beide untersuchen Wetter, Bewegung und Wahrnehmung. Der Unterschied liegt eher darin, wie stark Ort, Topografie, Ereignis und malerische Auflösung jeweils gebunden bleiben.",
  },
] as const;

export default function OrdinaryLandscapePage() {
  return (
    <article style={{ background: "#f0eadf", color: "#211d18", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#647158",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Begriff verstehen · Landschaft und Wahrnehmung
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8.2rem)",
            fontWeight: 500,
            letterSpacing: "-.055em",
            lineHeight: ".86",
            margin: "1.5rem 0 0",
            maxWidth: "11ch",
          }}
        >
          Die gewöhnliche
          <span style={{ color: "#788b69", display: "block", fontStyle: "italic" }}>
            Landschaft
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
          Gewöhnliche Landschaft ist nicht einfach eine unspektakuläre Landschaft. Sie
          macht sichtbar, wie Alltag, Arbeit, Wetter und Erinnerung einen Ort formen – und
          wie Malerei Bedeutung erzeugt, ohne dafür das Außergewöhnliche zu benötigen.
        </p>
      </header>

      <section style={{ background: "#19211d", color: "#f2eadc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c8b870",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Funktionen
          </p>
          <div
            style={{
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              marginTop: "2rem",
            }}
          >
            {functions.map((item, index) => (
              <section key={item.title} style={{ background: "rgb(255 255 255 / .045)", padding: "2rem" }}>
                <p
                  style={{
                    color: "#c8b870",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.8rem",
                    margin: 0,
                  }}
                >
                  0{index + 1}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    fontWeight: 500,
                    letterSpacing: "-.04em",
                    lineHeight: 1.02,
                  }}
                >
                  {item.title}
                </h2>
                <p style={{ color: "rgb(242 234 220 / .7)", lineHeight: 1.78 }}>{item.text}</p>
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
              color: "#647158",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Bilder, vier Grenzfälle
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
            Beobachtung reicht vom Wolkenmoment bis zum historischen Pathos.
          </h2>
          <ArtworkStrip
            items={ordinaryLandscapeArtworks}
            light
            title="Wolken, Arbeit, Sturm und Erinnerung"
          />
        </div>
      </section>

      <section style={{ background: "#d9d1c2" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#647158",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Fragen an ein Landschaftsbild
          </p>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
              listStyle: "none",
              margin: "3rem 0 0",
              padding: 0,
            }}
          >
            {questions.map((question, index) => (
              <li key={question} style={{ background: "#eee7da", padding: "2rem" }}>
                <span
                  style={{
                    color: "#647158",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.6rem",
                  }}
                >
                  0{index + 1}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.65rem",
                    lineHeight: 1.25,
                  }}
                >
                  {question}
                </p>
              </li>
            ))}
          </ol>
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
              color: "#647158",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Häufige Fallen
          </p>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              marginTop: "3rem",
            }}
          >
            {traps.map((trap) => (
              <article key={trap.title} style={{ borderTop: "1px solid #8b8170", paddingTop: "1.5rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    fontWeight: 500,
                    letterSpacing: "-.04em",
                    lineHeight: 1.03,
                  }}
                >
                  {trap.title}
                </h2>
                <p style={{ color: "rgb(33 29 24 / .7)", lineHeight: 1.75 }}>{trap.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: "#19211d", color: "#f2eadc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c8b870",
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
              ["The Hay Wain genau lesen", "/werke/the-hay-wain/"],
              ["Das Erhabene vergleichen", "/begriffe/das-erhabene/"],
              ["Zur Romantik zurückkehren", "/epochen/romantik/"],
            ].map(([label, href]) => (
              <Link
                href={href!}
                key={href}
                style={{
                  border: "1px solid rgb(242 234 220 / .16)",
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
