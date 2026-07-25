import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { ruinMemoryArtworks } from "@/components/experiences/romanticRuinsArtworkSets";

export const metadata: Metadata = {
  title: "Ruine und Erinnerung in der Romantik",
  description:
    "Wie romantische Kunst Ruinen als Beweis, Projektionsfläche, politische Warnung und materiell fortwirkende Geschichte einsetzt.",
  alternates: {
    canonical: "/begriffe/ruine-und-erinnerung/",
  },
};

const functions = [
  {
    number: "01",
    title: "Die Ruine beweist, dass Ordnung zeitlich ist.",
    text: "Ein beschädigtes Gebäude zeigt, dass Institutionen, Reiche und Glaubensräume nicht selbstverständlich fortbestehen. Die Ruine widerspricht dem Eindruck, Architektur könne politische oder religiöse Dauer garantieren.",
  },
  {
    number: "02",
    title: "Die Ruine lässt Abwesendes sichtbar werden.",
    text: "Fehlende Dächer, eingestürzte Wände und leere Fensteröffnungen fordern Ergänzung. Betrachtende stellen sich frühere Nutzung, Bewohner und Ganzheit vor. Erinnerung entsteht deshalb aus sichtbarem Material und imaginierter Lücke zugleich.",
  },
  {
    number: "03",
    title: "Die Ruine macht Natur zur historischen Kraft.",
    text: "Pflanzen, Wetter, Schnee und Licht umgeben die Reste nicht bloß dekorativ. Sie verändern Stein weiter und zeigen, dass Geschichte nach einem politischen Ende materiell fortgesetzt wird.",
  },
  {
    number: "04",
    title: "Die Ruine kann Verlust kritisieren oder verklären.",
    text: "Ruinenbilder können Zerstörung, Enteignung und politische Hybris sichtbar machen. Sie können Vergangenheit aber auch ästhetisch beruhigen und aus konkretem Konflikt eine schöne, scheinbar unvermeidliche Vergänglichkeit formen.",
  },
  {
    number: "05",
    title: "Die Ruine verschiebt Gegenwart in eine ferne Zukunft.",
    text: "Hubert Robert zeigt den Louvre schon kurz nach seiner Öffnung als zerstörten Rest. Solche Bilder erlauben, die eigene Ordnung so zu betrachten, als sei sie bereits Geschichte — ein gedanklicher Abstand, der Bewunderung und Kritik zugleich ermöglicht.",
  },
  {
    number: "06",
    title: "Die Ruine ist eine Montage aus Ort und Bedeutung.",
    text: "Friedrich versetzte Eldena in erfundene Landschaften. Das konkrete Baufragment wird dadurch nicht dokumentiert, sondern neu gerahmt. Erinnerung ist im romantischen Bild kein neutrales Archiv, sondern eine aktive räumliche Konstruktion.",
  },
] as const;

const distinctions = [
  {
    term: "Rest",
    text: "Das tatsächlich erhaltene Material: Wand, Portal, Säule, Grabstein oder Fundament.",
  },
  {
    term: "Rekonstruktion",
    text: "Die gedachte frühere Ganzheit, die Betrachtende aus Fragmenten, Wissen und Erwartung ergänzen.",
  },
  {
    term: "Erinnerung",
    text: "Die gegenwärtige Beziehung zum Vergangenen — persönlich, religiös, national oder politisch gerahmt.",
  },
  {
    term: "Ruinenlust",
    text: "Das ästhetische Vergnügen an Alter, Zerfall und malerischer Unordnung, das konkrete Gewalt leicht überdecken kann.",
  },
] as const;

const questions = [
  "Welche frühere Ganzheit soll aus dem Fragment vorgestellt werden?",
  "Ist die Ursache des Zerfalls sichtbar, benannt oder ästhetisch verschleiert?",
  "Welche Personen dürfen die Ruine betrachten, nutzen oder betrauern?",
  "Verändert Natur das Gebäude, schützt sie es oder übernimmt sie seinen Ort?",
  "Wird Vergangenheit dokumentiert oder durch eine neue Landschaft und Komposition erfunden?",
  "Erzeugt das Bild Kritik an Macht — oder macht es deren Untergang nur schön?",
] as const;

export default function RuinAndMemoryPage() {
  return (
    <article style={{ background: "#171b19", color: "#eee7da", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 16vw, 14rem) 1.25rem clamp(6rem, 10vw, 9rem)",
        }}
      >
        <p
          style={{
            color: "#b7a06f",
            fontSize: ".75rem",
            fontWeight: 800,
            letterSpacing: ".2em",
            textTransform: "uppercase",
          }}
        >
          Begriff verstehen · Zeit in der Landschaft
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            fontWeight: 500,
            letterSpacing: "-.065em",
            lineHeight: ".82",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          Ruine
          <span style={{ color: "#889690", display: "block", fontStyle: "italic" }}>
            und Erinnerung
          </span>
        </h1>
        <p
          style={{
            color: "rgb(238 231 218 / .72)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
            lineHeight: 1.72,
            margin: "4rem 0 0 auto",
            maxWidth: "44rem",
          }}
        >
          Eine Ruine ist mehr als ein altes Gebäude. Sie ist eine sichtbare Gegenwart von
          etwas Abwesendem: Material bleibt, Nutzung verschwindet, und das Bild entscheidet,
          welche Geschichte aus dieser Lücke entstehen soll.
        </p>
      </header>

      <section style={{ background: "#e9e2d4", color: "#211f1b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "4rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 23rem), 1fr))",
            }}
          >
            <div>
              <p
                style={{
                  color: "#75583d",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Die Grundfrage
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7vw, 6.2rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                  maxWidth: "12ch",
                }}
              >
                Was bleibt, wenn die Funktion eines Ortes verschwunden ist?
              </h2>
            </div>
            <div style={{ fontSize: "1.08rem", lineHeight: 1.84 }}>
              <p>
                Ruinen wirken oft unmittelbar verständlich: Etwas war ganz und ist nun
                beschädigt. Doch diese vermeintliche Einfachheit täuscht. Wir sehen die
                frühere Ganzheit nicht. Wir rekonstruieren sie aus Fragmenten, aus
                kulturellem Wissen und aus den Erwartungen, die das Bild selbst erzeugt.
              </p>
              <p>
                Deshalb ist eine Ruine nie nur Beweis. Sie ist auch Projektionsfläche. Ein
                gotisches Fenster kann verlorenen Glauben, nationale Vergangenheit,
                persönliche Trauer oder die Schönheit des Alters bedeuten. Welche Lesart
                dominiert, hängt davon ab, wie Menschen, Pflanzen, Licht und Landschaft um
                das Fragment angeordnet sind.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
              marginTop: "5rem",
              background: "rgb(33 31 27 / .18)",
            }}
          >
            {distinctions.map((item) => (
              <article key={item.term} style={{ background: "#e9e2d4", padding: "2rem" }}>
                <h3
                  style={{
                    color: "#75583d",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.term}
                </h3>
                <p style={{ color: "rgb(33 31 27 / .7)", lineHeight: 1.72, margin: "1.25rem 0 0" }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "92rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#b7a06f",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Ruinen, vier Zeitmodelle
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.4rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 2rem",
              maxWidth: "14ch",
            }}
          >
            Fragment, Erinnerung und Zukunft sehen in jedem Bild anders aus.
          </h2>
          <p
            style={{
              color: "rgb(238 231 218 / .68)",
              fontSize: "1.15rem",
              lineHeight: 1.78,
              margin: "0 0 3.5rem",
              maxWidth: "47rem",
            }}
          >
            Friedrich verbindet Ruine mit Ritual und montierter Landschaft. Hubert Robert
            betrachtet ein modernes Museum aus einer imaginierten Zukunft. Cole setzt
            Zerfall an das Ende einer politischen Zivilisationsfolge. Der Begriff wird erst
            präzise, wenn diese verschiedenen Zeitordnungen auseinandergehalten werden.
          </p>
          <ArtworkStrip items={ruinMemoryArtworks} title="Vier Modelle romantischer Ruinenzeit" />
        </div>
      </section>

      <section style={{ background: "#d2c4ae", color: "#211f1b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#6f4e35",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Funktionen
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
            Wie Ruinen Geschichte sichtbar und zugleich formbar machen.
          </h2>

          <div
            style={{
              background: "rgb(33 31 27 / .2)",
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {functions.map((item) => (
              <article key={item.number} style={{ background: "#d2c4ae", minHeight: "23rem", padding: "2rem" }}>
                <p style={{ color: "#6f4e35", fontWeight: 800 }}>{item.number}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "3rem 0 1.4rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "rgb(33 31 27 / .72)", lineHeight: 1.76 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#7b6248", color: "#fff4e3" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <div>
            <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
              Praktisches Leseraster
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                fontWeight: 500,
                letterSpacing: "-.045em",
                lineHeight: 1,
                margin: "1rem 0 0",
              }}
            >
              Sechs Fragen an jedes Ruinenbild
            </h2>
          </div>
          <ol style={{ display: "grid", gap: "1rem", lineHeight: 1.72, margin: 0 }}>
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: "#e9e2d4", color: "#211f1b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "72rem",
            padding: "clamp(6rem, 11vw, 9rem) 1.25rem",
          }}
        >
          <p style={{ color: "#75583d", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>
            Im Silo weitergehen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: "1rem 0 3rem",
            }}
          >
            Die Ruine genau lesen, ihre Nacht betreten und ihre politischen Nachbilder verfolgen.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            }}
          >
            <Link href="/werke/abtei-im-eichwald/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Abtei im Eichwald lesen →
            </Link>
            <Link href="/motive/nacht/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Nacht als Motiv →
            </Link>
            <Link href="/begriffe/landschaft-und-nation/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Landschaft und Nation →
            </Link>
            <Link href="/epochen/romantik/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Zur Romantik-Epochenreise →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
