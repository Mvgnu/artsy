import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { solitudeArtworks } from "@/components/experiences/romanticPsychologyArtworkSets";

export const metadata: Metadata = {
  title: "Einsamkeit in der Romantik: Figur, Raum und Distanz",
  description:
    "Wie romantische Kunst Einsamkeit von bloßem Alleinsein unterscheidet und über Maßstab, Rückenfigur, Leere und unerreichbare Gemeinschaft erzeugt.",
  alternates: { canonical: "/begriffe/einsamkeit/" },
};

const distinctions = [
  {
    title: "Alleinsein",
    text: "Beschreibt zunächst eine zählbare Situation: Eine Figur befindet sich ohne andere sichtbare Menschen im Bild.",
  },
  {
    title: "Einsamkeit",
    text: "Entsteht als Beziehung. Eine Figur kann von anderen getrennt, psychologisch verschlossen oder ihrer Umgebung nicht gewachsen sein.",
  },
  {
    title: "Abgeschiedenheit",
    text: "Kann freiwillig und produktiv sein. Entfernung eröffnet Konzentration, Beobachtung oder religiöse Erfahrung.",
  },
  {
    title: "Isolation",
    text: "Betont unterbrochene Verbindung. Sie kann sozial, räumlich, technisch oder körperlich erzeugt werden.",
  },
] as const;

const functions = [
  {
    title: "Maßstab verkleinert die Figur",
    text: "Weite Landschaften oder leere Flächen machen sichtbar, dass Anwesenheit nicht mit Kontrolle gleichzusetzen ist.",
  },
  {
    title: "Rückenfiguren blockieren Zugang",
    text: "Sie öffnen den Blick in die Landschaft und verweigern zugleich das Gesicht als psychologische Erklärung.",
  },
  {
    title: "Gemeinschaft bleibt denkbar",
    text: "Einsamkeit wird stärker, wenn Wege, Gebäude, Schiffe oder entfernte Figuren eine mögliche, aber nicht erreichbare Verbindung markieren.",
  },
  {
    title: "Umwelt wird Gegenüber",
    text: "Meer, Nebel, Sturm oder Himmel reagieren nicht. Gerade diese Gleichgültigkeit kann die Figur als getrennt erfahrbar machen.",
  },
] as const;

const questions = [
  "Ist die Figur allein, isoliert oder freiwillig abgeschieden?",
  "Wie groß erscheint sie im Verhältnis zum Raum?",
  "Ist ihr Gesicht zugänglich oder wird psychologische Nähe blockiert?",
  "Welche Zeichen möglicher Gemeinschaft sind vorhanden?",
  "Eröffnet die Umgebung Freiheit, Bedrohung oder Gleichgültigkeit?",
  "Wie positioniert das Bild die Betrachtenden gegenüber der einsamen Figur?",
] as const;

export default function SolitudePage() {
  return (
    <article style={{ background: "#111820", color: "#edf2f5", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem 7rem",
        }}
      >
        <p
          style={{
            color: "#9cb7c9",
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
            fontSize: "clamp(4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
          }}
        >
          <span style={{ color: "#9cb7c9", fontStyle: "italic" }}>Einsamkeit</span>
        </h1>
        <p
          style={{
            color: "rgb(237 242 245 / .72)",
            fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)",
            lineHeight: 1.75,
            margin: "3rem 0 0 auto",
            maxWidth: "48rem",
          }}
        >
          Einsamkeit ist kein Motiv, das schon durch eine einzelne Figur entsteht. Sie
          wird räumlich hergestellt: durch Distanz, Maßstab, blockierte Gesichter, leere
          Übergänge und die Möglichkeit einer Gemeinschaft, die sichtbar bleibt, aber
          nicht erreicht wird.
        </p>
      </header>

      <section style={{ background: "#e4ebef", color: "#192128" }}>
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
              margin: "0 0 3rem",
              maxWidth: "12ch",
            }}
          >
            Vier Formen räumlicher Trennung
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
                style={{ border: "1px solid rgb(25 33 40 / .18)", padding: "2rem" }}
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
        <ArtworkStrip
          items={solitudeArtworks}
          title="Aussicht, Leere, Beobachtung, Isolation"
        />
      </section>

      <section style={{ background: "#1a2530" }}>
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
            Wie Bilder Einsamkeit bauen
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
                  borderTop: "1px solid rgb(237 242 245 / .22)",
                  paddingTop: "1.5rem",
                }}
              >
                <h3
                  style={{
                    color: "#aec5d4",
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
                    color: "rgb(237 242 245 / .72)",
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

      <section style={{ background: "#edf2f5", color: "#192128" }}>
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
            Sechs Fragen an Bilder der Einsamkeit
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
                  borderBottom: "1px solid rgb(25 33 40 / .18)",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "3rem 1fr",
                  padding: "1rem 0",
                }}
              >
                <span style={{ color: "#587287", fontWeight: 800 }}>
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
        <p style={{ color: "rgb(237 242 245 / .65)", lineHeight: 1.75 }}>
          Verwandte Wege: <Link href="/begriffe/melancholie/">Melancholie</Link>,{" "}
          <Link href="/motive/nacht/">die Nacht</Link> und{" "}
          <Link href="/kuenstler/caspar-david-friedrich/">Caspar David Friedrich</Link>.
        </p>
      </footer>
    </article>
  );
}
