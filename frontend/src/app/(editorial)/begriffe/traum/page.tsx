import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { dreamArtworks } from "@/components/experiences/romanticPsychologyArtworkSets";

export const metadata: Metadata = {
  title: "Der Traum in der Romantik: Erkenntnis, Angst und Imagination",
  description:
    "Wie romantische Kunst Traum, Vision, Albtraum und Schlaf unterscheidet und innere Zustände in sichtbare Räume übersetzt.",
  alternates: { canonical: "/begriffe/traum/" },
};

const distinctions = [
  {
    title: "Traum",
    text: "Ein veränderter Zustand, in dem Bilder, Körper und Handlungen eigenen Regeln folgen. Ein Traum kann offen, fragmentarisch oder widersprüchlich bleiben.",
  },
  {
    title: "Vision",
    text: "Beansprucht häufig Erkenntnis oder Offenbarung. Das Gesehene erscheint nicht bloß privat, sondern als bedeutungstragende Wahrheit oder Diagnose.",
  },
  {
    title: "Albtraum",
    text: "Bindet den veränderten Zustand an Druck, Kontrollverlust und körperliche Bedrohung. Der Körper wird Bühne des psychischen Geschehens.",
  },
  {
    title: "Schlaf",
    text: "Ist zunächst ein körperlicher Zustand. Erst die Bildordnung entscheidet, ob Schlaf als Ruhe, Ausfall der Vernunft oder Zugang zu anderem Wissen erscheint.",
  },
] as const;

const functions = [
  {
    title: "Andere Regeln sichtbar machen",
    text: "Traumbilder lösen Größenverhältnisse, Zeitfolgen und räumliche Logik. Dadurch können sie Beziehungen zeigen, die im Alltag unsichtbar bleiben.",
  },
  {
    title: "Verdrängtes zurückholen",
    text: "Monster und obsessive Wiederholungen sind nicht automatisch irrational. Sie können anzeigen, was eine geordnete Gesellschaft nicht anerkennen will.",
  },
  {
    title: "Erkenntnis verschieben",
    text: "Der Traum stellt die Frage, ob Wahrheit ausschließlich durch wache Beobachtung entsteht. Bei Blake kann Schlaf einen Zugang zu strukturierter Offenbarung öffnen.",
  },
  {
    title: "Körper und Bild koppeln",
    text: "Schwere, Lähmung, Fall, Schweben oder Überlagerung übersetzen innere Zustände in konkrete körperliche Situationen.",
  },
] as const;

const questions = [
  "Schläft eine Figur tatsächlich, oder wird nur eine traumartige Bildlogik erzeugt?",
  "Welche räumlichen oder zeitlichen Regeln gelten nicht mehr?",
  "Ist das Gesehene privat, prophetisch oder sozial diagnostisch?",
  "Wie reagiert der Körper auf den veränderten Zustand?",
  "Erklärt das Bild seine Erscheinungen, oder lässt es deren Status offen?",
  "Welche Funktion übernehmen Farbe, Dunkelheit und Wiederholung?",
] as const;

export default function DreamPage() {
  return (
    <article style={{ background: "#171521", color: "#f0eaf5", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem 7rem",
        }}
      >
        <p
          style={{
            color: "#c4a3dc",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".2em",
            textTransform: "uppercase",
          }}
        >
          Psychologischer Begriff · Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".82",
            margin: "1.5rem 0 0",
          }}
        >
          Der <span style={{ color: "#c4a3dc", fontStyle: "italic" }}>Traum</span>
        </h1>
        <p
          style={{
            color: "rgb(240 234 245 / .74)",
            fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)",
            lineHeight: 1.75,
            margin: "3rem 0 0 auto",
            maxWidth: "48rem",
          }}
        >
          In romantischer Kunst ist der Traum kein bloßer Ausstieg aus der Wirklichkeit.
          Er kann Angst verdichten, verdrängte Konflikte sichtbar machen, neue
          Erkenntnis beanspruchen oder vertraute Natur in eine andere Ordnung
          überführen.
        </p>
      </header>

      <section style={{ background: "#ece5f1", color: "#211b28" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".95",
              margin: "0 0 3rem",
              maxWidth: "13ch",
            }}
          >
            Nicht jeder dunkle Zustand ist ein Traum.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {distinctions.map((item) => (
              <section
                key={item.title}
                style={{ border: "1px solid rgb(33 27 40 / .18)", padding: "2rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ lineHeight: 1.75, margin: "1rem 0 0" }}>{item.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          margin: "0 auto",
          maxWidth: "92rem",
          padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
        }}
      >
        <ArtworkStrip items={dreamArtworks} title="Vier Modelle des Traums" />
      </section>

      <section style={{ background: "#251d31" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              margin: 0,
            }}
          >
            Was der Traum im Bild leisten kann
          </h2>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              marginTop: "4rem",
            }}
          >
            {functions.map((item) => (
              <section
                key={item.title}
                style={{
                  borderTop: "1px solid rgb(240 234 245 / .24)",
                  paddingTop: "1.5rem",
                }}
              >
                <h3
                  style={{
                    color: "#d9bdea",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "rgb(240 234 245 / .72)",
                    lineHeight: 1.8,
                    margin: "1rem 0 0",
                  }}
                >
                  {item.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f1ebf4", color: "#211b28" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "76rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              margin: 0,
            }}
          >
            Sechs Fragen an ein Traumbild
          </h2>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              listStyle: "none",
              margin: "3rem 0 0",
              padding: 0,
            }}
          >
            {questions.map((question, index) => (
              <li
                key={question}
                style={{
                  borderBottom: "1px solid rgb(33 27 40 / .18)",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "3rem 1fr",
                  padding: "1rem 0",
                }}
              >
                <span style={{ color: "#79548f", fontWeight: 800 }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "1.1rem", lineHeight: 1.65 }}>{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer
        style={{ margin: "0 auto", maxWidth: "88rem", padding: "5rem 1.25rem 8rem" }}
      >
        <p
          style={{
            color: "rgb(240 234 245 / .65)",
            lineHeight: 1.75,
            maxWidth: "48rem",
          }}
        >
          Weiterführend:{" "}
          <Link href="/begriffe/vision-und-prophezeiung/">Vision und Prophezeiung</Link>
          , <Link href="/begriffe/dunkle-romantik/">Dunkle Romantik</Link> und{" "}
          <Link href="/motive/nacht/">die Nacht</Link>.
        </p>
      </footer>
    </article>
  );
}
