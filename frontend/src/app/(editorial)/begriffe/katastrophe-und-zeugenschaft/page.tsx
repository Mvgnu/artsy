import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { catastropheTestimonyArtworks } from "@/components/experiences/romanticismArtworkSets";

export const metadata: Metadata = {
  title: "Katastrophe und Zeugenschaft in der Romantik",
  description:
    "Wie romantische Kunst Katastrophe, Staatsversagen, Leid, Zeugenschaft und Spektakel organisiert – mit Géricault, Goya und Delacroix.",
  alternates: {
    canonical: "/begriffe/katastrophe-und-zeugenschaft/",
  },
};

const mechanisms = [
  {
    number: "01",
    title: "Katastrophe hat eine Ursache, nicht nur eine Atmosphäre.",
    text: "Sturm, Meer und Dunkelheit können Verantwortung verdecken. Politische Bildanalyse fragt deshalb, welche Entscheidungen, Institutionen oder Machtverhältnisse das Ereignis ermöglicht haben.",
  },
  {
    number: "02",
    title: "Zeugenschaft ist eine gebaute Position.",
    text: "Ein Bild entscheidet, wie nah wir den Betroffenen kommen, was wir überblicken und welche Informationen fehlen. Zeugenschaft entsteht nicht automatisch durch sichtbares Leid, sondern durch die räumliche und moralische Rolle des Betrachters.",
  },
  {
    number: "03",
    title: "Körper tragen Beweise und bleiben Personen.",
    text: "Verletzungen können politische Gewalt bezeugen. Zugleich droht der Körper zum Beweismittel oder Symbol reduziert zu werden. Gute Betrachtung hält materielle Spur und individuelle Würde zusammen.",
  },
  {
    number: "04",
    title: "Monumentalität kann Öffentlichkeit schaffen und Leid verschlingen.",
    text: "Große Formate erzwingen Aufmerksamkeit und verleihen einem verdrängten Ereignis historischen Rang. Dieselbe Größe kann Schmerz in ein überwältigendes Spektakel verwandeln.",
  },
  {
    number: "05",
    title: "Rettung verändert die Bedeutung des Rückblicks.",
    text: "Wird Rettung gezeigt, nur angedeutet oder vollständig verweigert? Spätere Kenntnis des Ausgangs kann eine prekäre Bildsituation nachträglich beruhigen, obwohl die Figuren diese Gewissheit im dargestellten Moment nicht besitzen.",
  },
  {
    number: "06",
    title: "Nachwirkung ist ebenfalls Geschichte.",
    text: "Katastrophe endet nicht mit dem Ereignis. Trauma, Armut, institutionelle Diagnose und gesellschaftliches Vergessen verschieben sie in einzelne Lebensläufe und spätere Bilder.",
  },
] as const;

const distinctions = [
  {
    term: "Katastrophenbild",
    text: "zeigt ein Ereignis, seine materiellen Folgen und eine Dramaturgie von Gefahr, Verlust oder Rettung.",
  },
  {
    term: "Zeugnisbild",
    text: "beansprucht Nähe zu Erfahrung, Spur oder Aussage, ohne deshalb neutral oder vollständig dokumentarisch zu sein.",
  },
  {
    term: "Skandalbild",
    text: "macht institutionelle Verantwortung öffentlich und greift in eine gegenwärtige politische Debatte ein.",
  },
  {
    term: "Spektakel",
    text: "organisiert Leid so attraktiv oder überwältigend, dass Aufmerksamkeit und ethische Distanz miteinander konkurrieren.",
  },
] as const;

const questions = [
  "Welche konkrete Entscheidung oder Institution steht hinter der sichtbaren Katastrophe?",
  "Wo positioniert das Bild den Betrachter: als Helfer, Zeugen, Richter oder Zuschauer?",
  "Welche Körper erscheinen als individuelle Personen, welche nur als Masse oder Beweis?",
  "Was gewinnt das Ereignis durch monumentale Form – und was könnte darin verschwinden?",
  "Wie sicher oder unsicher ist die dargestellte Rettung tatsächlich?",
  "Welche Nachwirkungen bleiben außerhalb des sichtbaren Hauptmoments?",
] as const;

export default function CatastropheAndTestimonyPage() {
  return (
    <article style={{ background: "#171411", color: "#f1e7d8", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "86rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#cca05f",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Begriff verstehen · Politische Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.8rem, 10vw, 8.4rem)",
            fontWeight: 500,
            letterSpacing: "-.055em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
            maxWidth: "11ch",
          }}
        >
          Katastrophe
          <span style={{ color: "#a95c3b", display: "block", fontStyle: "italic" }}>
            und Zeugenschaft
          </span>
        </h1>
        <p
          style={{
            color: "rgb(241 231 216 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "44rem",
          }}
        >
          Katastrophenbilder zeigen nicht einfach, dass etwas Schreckliches geschah. Sie
          ordnen Ursache, Sichtbarkeit, Verantwortung und Nähe. Dadurch können sie Zeugnis
          ablegen, Öffentlichkeit herstellen – oder Leid in eine konsumierbare Form
          verwandeln.
        </p>
      </header>

      <section style={{ background: "#e9dfcf", color: "#221b17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "86rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#914f34",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Formen des Zeigens
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 3.5rem",
              maxWidth: "14ch",
            }}
          >
            Ereignis, Gewalt und Nachwirkung sehen
          </h2>
          <ArtworkStrip
            items={catastropheTestimonyArtworks}
            light
            title="Katastrophe und Zeugenschaft in vier Werken"
          />
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#cca05f",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Mechanismen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 4rem",
              maxWidth: "14ch",
            }}
          >
            Wie ein Bild aus Leid öffentliche Geschichte macht
          </h2>
          <div
            style={{
              background: "rgb(241 231 216 / .16)",
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {mechanisms.map((mechanism) => (
              <article
                key={mechanism.number}
                style={{ background: "#171411", minHeight: "23rem", padding: "2rem" }}
              >
                <p style={{ color: "#cca05f", fontWeight: 800 }}>{mechanism.number}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "3rem 0 1.4rem",
                  }}
                >
                  {mechanism.title}
                </h3>
                <p style={{ color: "rgb(241 231 216 / .7)", lineHeight: 1.76 }}>
                  {mechanism.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#9f5939", color: "#fff0dd" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <p
            style={{
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Begriffe nicht verwechseln
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {distinctions.map((item) => (
              <article
                key={item.term}
                style={{ border: "1px solid rgb(255 240 221 / .24)", padding: "2rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.term}
                </h3>
                <p style={{ lineHeight: 1.78, margin: "1.5rem 0 0" }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#d7bd8b", color: "#251d16" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 21rem), 1fr))",
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: ".72rem",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              Praktisches Leseraster
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 6vw, 5.3rem)",
                fontWeight: 500,
                letterSpacing: "-.045em",
                lineHeight: 1,
                margin: "1rem 0 0",
              }}
            >
              Sechs Fragen für Katastrophenbilder
            </h2>
          </div>
          <ol style={{ display: "grid", gap: "1rem", lineHeight: 1.72, margin: 0 }}>
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: "#28211c", color: "#f0e5d5" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "74rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.7rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: 0,
            }}
          >
            Sichtbares Leid ist noch keine gerechte Erinnerung.
          </h2>
          <p
            style={{
              color: "rgb(240 229 213 / .72)",
              fontSize: "1.15rem",
              lineHeight: 1.82,
              margin: "2rem 0 0",
              maxWidth: "49rem",
            }}
          >
            Bilder können Verdrängtes öffentlich machen. Sie wählen aber immer aus, ordnen
            und ästhetisieren. Zeugenschaft wird deshalb nicht durch Schock garantiert,
            sondern durch die Aufmerksamkeit für Ursache, Position, Person und das, was
            außerhalb des Rahmens bleibt.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem", marginTop: "2.5rem" }}>
            <Link href="/werke/das-floss-der-medusa/">Das Floß der Medusa lesen →</Link>
            <Link href="/kuenstler/theodore-gericault/">Géricault kennenlernen →</Link>
            <Link href="/begriffe/revolution-und-koerper/">Revolution und Körper →</Link>
            <Link href="/epochen/romantik/">Zur Romantik →</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
