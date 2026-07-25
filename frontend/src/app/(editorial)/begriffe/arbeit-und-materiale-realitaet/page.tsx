import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { materialRealityArtworks } from "@/components/experiences/realismArtworkSets";

export const metadata: Metadata = {
  title: "Arbeit und materiale Realität in der Kunst",
  description:
    "Ein Begriffswerkzeug für Arbeit, Gewicht, Wiederholung, Werkzeug, Infrastruktur und soziale Abhängigkeit in realistischer Kunst.",
  alternates: { canonical: "/begriffe/arbeit-und-materiale-realitaet/" },
};

const distinctions = [
  {
    title: "Arbeit ist mehr als dargestellte Tätigkeit",
    text: "Entscheidend ist, wie das Bild Dauer, Kraftaufwand, Wiederholung, Körperhaltung und fehlende Handlungsfreiheit organisiert. Eine arbeitende Figur allein macht noch keine Analyse von Arbeit.",
  },
  {
    title: "Material ist nicht bloß Oberfläche",
    text: "Stein, Erde, Eisen, Stoff oder Holz wirken als Widerstand. Sie bestimmen Haltung, Werkzeuggebrauch, Tempo und Risiko und verbinden formale Dichte mit sozialen Bedingungen.",
  },
  {
    title: "Infrastruktur verteilt Sichtbarkeit",
    text: "Straßen, Felder, Eisenbahnen, Fabriken und Wagen sind keine neutralen Bühnen. Sie ordnen Bewegung, Nähe, Abhängigkeit und den Zugang zu Ressourcen.",
  },
  {
    title: "Monumentalität kann Hierarchien verschieben",
    text: "Wenn anonyme Arbeiter oder Reisende große Bildformate und ernste Kompositionen beanspruchen, verändert sich nicht nur das Motiv. Verändert wird, wem historische Bedeutung zugeschrieben wird.",
  },
] as const;

const questions = [
  "Welche Arbeit geschieht tatsächlich, und welche vorbereitenden oder unsichtbaren Tätigkeiten setzt sie voraus?",
  "Wie verteilen Werkzeuge und Materialien Kraft zwischen Körper und Umgebung?",
  "Zeigt die Komposition einen einmaligen Moment oder eine endlose Wiederholung?",
  "Welche Infrastruktur macht die dargestellte Tätigkeit möglich oder notwendig?",
  "Wer erhält ein individuelles Gesicht, und wer bleibt sozial oder funktional lesbar?",
  "Wie verändert Format, Perspektive und Bilddichte die historische Würde des Motivs?",
] as const;

export default function LaborMaterialRealityPage() {
  return (
    <main style={{ background: "#dfd6c8", color: "#211f1b" }}>
      <section
        style={{
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(7rem, 13vw, 12rem) 1.25rem 6rem",
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
            fontSize: "clamp(4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".88",
            margin: "1.5rem 0 0",
            maxWidth: "11ch",
          }}
        >
          Arbeit wird sichtbar, wenn Widerstand Form annimmt.
        </h1>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 23rem), 1fr))",
            marginTop: "5rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Materiale Realität bezeichnet nicht die möglichst genaue Wiedergabe von
            Dingen. Gemeint ist die Weise, in der Gewicht, Reibung, Hitze, Enge,
            Verschleiß und Wiederholung soziale Erfahrung strukturieren.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}>
            Der Begriff hilft, Arbeit nicht auf Symbolik oder moralische Botschaft zu
            reduzieren. Er fragt stattdessen, wie Körper mit Werkzeugen, Stoffen,
            Verkehrswegen und Produktionsräumen gekoppelt werden und welche historischen
            Unterschiede dadurch sichtbar werden.
          </p>
        </div>
      </section>

      <section
        style={{ background: "#292a24", color: "#f1eadf", padding: "6rem 1.25rem" }}
      >
        <div style={{ margin: "0 auto", maxWidth: "94rem" }}>
          <ArtworkStrip
            items={materialRealityArtworks}
            title="Stein, Erde, Eisenbahn und Industrie"
          />
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
        }}
      >
        {distinctions.map((item, index) => (
          <article
            key={item.title}
            style={{
              borderTop: "1px solid rgb(33 31 27 / .3)",
              minHeight: "20rem",
              padding: "1.5rem 0",
            }}
          >
            <span style={{ fontSize: ".72rem", fontWeight: 800 }}>0{index + 1}</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.35rem",
                fontWeight: 500,
                letterSpacing: "-.04em",
                lineHeight: 1,
                margin: "2rem 0 0",
              }}
            >
              {item.title}
            </h2>
            <p style={{ lineHeight: 1.78, margin: "1.25rem 0 0" }}>{item.text}</p>
          </article>
        ))}
      </section>

      <section style={{ background: "#b6a37d", padding: "6rem 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "76rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".95",
              margin: 0,
            }}
          >
            Sechs Fragen für Bilder von Arbeit
          </h2>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              listStyle: "none",
              margin: "4rem 0 0",
              padding: 0,
            }}
          >
            {questions.map((question, index) => (
              <li
                key={question}
                style={{
                  borderTop: "1px solid rgb(33 31 27 / .35)",
                  fontSize: "1.08rem",
                  lineHeight: 1.7,
                  paddingTop: "1.25rem",
                }}
              >
                <strong style={{ marginRight: ".75rem" }}>0{index + 1}</strong>
                {question}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ padding: "5rem 1.25rem" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            margin: "0 auto",
            maxWidth: "94rem",
          }}
        >
          <Link
            href="/werke/die-steinklopfer/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong
              style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: 500,
              }}
            >
              Die Steinklopfer
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Das Modell an Courbets zerstörtem Hauptwerk erproben.
            </span>
          </Link>
          <Link
            href="/kuenstler/gustave-courbet/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong
              style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: 500,
              }}
            >
              Gustave Courbet
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Monumentale Gegenwart als künstlerische Strategie verfolgen.
            </span>
          </Link>
          <Link
            href="/epochen/realismus/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong
              style={{
                display: "block",
                fontFamily: "var(--font-serif)",
                fontSize: "2.25rem",
                fontWeight: 500,
              }}
            >
              Realismus
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Das Begriffswerkzeug in den neuen Epochensilo einordnen.
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
