import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { melancholyArtworks } from "@/components/experiences/romanticPsychologyArtworkSets";

export const metadata: Metadata = {
  title: "Melancholie in der Romantik: Zeit, Verlust und offene Dauer",
  description:
    "Wie romantische Kunst Melancholie von Trauer unterscheidet und über Übergang, Wiederholung, Distanz und leere Dauer sichtbar macht.",
  alternates: { canonical: "/begriffe/melancholie/" },
};

const distinctions = [
  {
    title: "Trauer",
    text: "Bezieht sich meist auf einen benennbaren Verlust. Sie kann ritualisiert, geteilt und zumindest theoretisch abgeschlossen werden.",
  },
  {
    title: "Melancholie",
    text: "Bindet Stimmung an offene Dauer. Der Gegenstand des Verlusts kann unklar, historisch oder unerreichbar bleiben.",
  },
  {
    title: "Nostalgie",
    text: "Richtet sich auf eine vorgestellte Vergangenheit oder einen verlorenen Ort und kann diese Vergangenheit zugleich idealisieren.",
  },
  {
    title: "Weltschmerz",
    text: "Verallgemeinert die Differenz zwischen Erwartung und Welt. Das Leiden erscheint nicht lokal, sondern als Zustand der Gegenwart insgesamt.",
  },
] as const;

const functions = [
  {
    title: "Übergang sichtbar halten",
    text: "Sonnenuntergang, technische Ablösung oder Ruine zeigen eine Welt, die noch anwesend und zugleich bereits vergangen ist.",
  },
  {
    title: "Handlung aussetzen",
    text: "Figuren warten, blicken oder verharren. Die Bildzeit dehnt sich, ohne auf eine eindeutige Lösung zuzulaufen.",
  },
  {
    title: "Gegenstand entziehen",
    text: "Leere oder Distanz verhindern, dass die Stimmung vollständig auf ein einzelnes Ereignis zurückgeführt wird.",
  },
  {
    title: "Geschichte verinnerlichen",
    text: "Politische und technische Veränderungen erscheinen als Atmosphäre, Erinnerung oder körperliche Haltung.",
  },
] as const;

const questions = [
  "Ist ein konkreter Verlust benennbar?",
  "Welche Zeitform dominiert: Rückblick, Erwartung oder Stillstand?",
  "Wird Vergangenheit idealisiert oder kritisch gebrochen?",
  "Wie erzeugen Abstand, Leere und Licht die Stimmung?",
  "Ist die Melancholie individuell, historisch oder beides?",
  "Bietet das Bild eine mögliche Auflösung oder verweigert es sie?",
] as const;

export default function MelancholyPage() {
  return (
    <article style={{ background: "#1b1d24", color: "#eef0f5", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem 7rem",
        }}
      >
        <p
          style={{
            color: "#b9bdd0",
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
          <span style={{ color: "#b9bdd0", fontStyle: "italic" }}>Melancholie</span>
        </h1>
        <p
          style={{
            color: "rgb(238 240 245 / .72)",
            fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)",
            lineHeight: 1.75,
            margin: "3rem 0 0 auto",
            maxWidth: "48rem",
          }}
        >
          Melancholie ist mehr als traurige Stimmung. Sie entsteht, wenn Verlust,
          historische Veränderung oder unerfüllte Erwartung in eine Dauer übergehen, die
          das Bild nicht abschließt.
        </p>
      </header>

      <section style={{ background: "#e7e8ed", color: "#20222a" }}>
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
            Vier verwandte, aber nicht identische Zustände
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
                style={{ border: "1px solid rgb(32 34 42 / .18)", padding: "2rem" }}
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
          items={melancholyArtworks}
          title="Abschied, Diagnose, Übergang, offene Dauer"
        />
      </section>

      <section style={{ background: "#252834" }}>
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
            Was Melancholie formal erzeugt
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
                  borderTop: "1px solid rgb(238 240 245 / .22)",
                  paddingTop: "1.5rem",
                }}
              >
                <h3
                  style={{
                    color: "#cbd0e0",
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
                    color: "rgb(238 240 245 / .72)",
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

      <section style={{ background: "#eef0f4", color: "#20222a" }}>
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
            Sechs Fragen an melancholische Bilder
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
                  borderBottom: "1px solid rgb(32 34 42 / .18)",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "3rem 1fr",
                  padding: "1rem 0",
                }}
              >
                <span style={{ color: "#666b7f", fontWeight: 800 }}>
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
        <p style={{ color: "rgb(238 240 245 / .65)", lineHeight: 1.75 }}>
          Verwandte Wege:{" "}
          <Link href="/begriffe/ruine-und-erinnerung/">Ruine und Erinnerung</Link>,{" "}
          <Link href="/begriffe/einsamkeit/">Einsamkeit</Link> und{" "}
          <Link href="/motive/nacht/">die Nacht</Link>.
        </p>
      </footer>
    </article>
  );
}
