import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { RealismMilletAxis } from "@/components/experiences/RealismMilletAxis";
import { realismPillarArtworks } from "@/components/experiences/realismArtworkSets";

const paths = [
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/gustave-courbet/",
    title: "Gustave Courbet",
    text: "Wie Courbet monumentale Formate, lokale Gegenwart und sichtbare Materie gegen die Hierarchien der akademischen Malerei richtet.",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/die-steinklopfer/",
    title: "Die Steinklopfer",
    text: "Warum zwei anonyme Arbeiter auf großem Format weder zu Helden noch zu bloßen Sozialtypen werden.",
  },
  {
    eyebrow: "Begriff verstehen",
    href: "/begriffe/arbeit-und-materiale-realitaet/",
    title: "Arbeit und materiale Realität",
    text: "Wie Gewicht, Wiederholung, Werkzeug, Kleidung, Infrastruktur und Verschleiß historische Erfahrung sichtbar machen.",
  },
] as const;

export default function RealismPage() {
  return (
    <>
      <main style={{ background: "#e8e0d2", color: "#211f1b" }}>
        <section
          style={{
            margin: "0 auto",
            maxWidth: "96rem",
            padding: "clamp(7rem, 14vw, 13rem) 1.25rem clamp(5rem, 10vw, 9rem)",
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
            Epoche · Realismus
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4.5rem, 13vw, 11rem)",
              fontWeight: 500,
              letterSpacing: "-.065em",
              lineHeight: ".84",
              margin: "1.5rem 0 0",
              maxWidth: "9ch",
            }}
          >
            Realität wird nicht entdeckt. Sie wird neu gewichtet.
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
                fontSize: "clamp(1.2rem, 2.3vw, 1.65rem)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Realismus bedeutet nicht, dass Kunst plötzlich aufhört auszuwählen, zu
              komponieren oder zu erfinden. Neu verteilt werden vielmehr Größe,
              Aufmerksamkeit und historische Würde. Arbeiter, Beerdigungen, Eisenbahnwagen
              und industrielle Hallen beanspruchen nun Formate und formale Ernsthaftigkeit,
              die lange anderen Gegenständen vorbehalten waren.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}>
              Die Epoche reagiert auf Revolutionen, Urbanisierung, neue Medien, soziale
              Konflikte und industrielle Arbeit. Sie ist weder einheitlicher Stil noch
              bloße Gegenbewegung zur Romantik. Courbet, Millet, Daumier und Menzel
              entwickeln unterschiedliche Verfahren dafür, Gegenwart, Körper und Materie
              als geschichtlich wirksam zu zeigen.
            </p>
          </div>
        </section>

        <section
          style={{ background: "#292a24", color: "#f1eadf", padding: "6rem 1.25rem" }}
        >
          <div style={{ margin: "0 auto", maxWidth: "94rem" }}>
            <ArtworkStrip
              items={realismPillarArtworks}
              title="Arbeit, Mobilität und die neue Würde des Gegenwärtigen"
            />
          </div>
        </section>

        <section
          style={{
            margin: "0 auto",
            maxWidth: "94rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {paths.map((path) => (
              <Link
                href={path.href}
                key={path.href}
                style={{
                  border: "1px solid rgb(33 31 27 / .25)",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "22rem",
                  padding: "2rem",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 800,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                  }}
                >
                  {path.eyebrow}
                </span>
                <strong
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.8rem",
                    fontWeight: 500,
                    letterSpacing: "-.045em",
                    lineHeight: 1,
                    marginTop: "2.5rem",
                  }}
                >
                  {path.title}
                </strong>
                <p style={{ lineHeight: 1.75, margin: "1.25rem 0 0" }}>{path.text}</p>
                <em
                  style={{
                    fontStyle: "normal",
                    fontWeight: 800,
                    marginTop: "auto",
                    paddingTop: "2rem",
                  }}
                >
                  Öffnen →
                </em>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ background: "#b6a37d", padding: "6rem 1.25rem" }}>
          <div
            style={{
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
              margin: "0 auto",
              maxWidth: "94rem",
            }}
          >
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
              Die Romantik verschwindet nicht. Ihre Fragen wechseln den gesellschaftlichen
              Ort.
            </h2>
            <div style={{ alignSelf: "end" }}>
              <p style={{ fontSize: "1.12rem", lineHeight: 1.8, margin: 0 }}>
                Monumentalität, Katastrophe, politische Gemeinschaft, Landschaft und
                subjektive Erfahrung bleiben wichtig. Realistische Künstler prüfen jedoch
                stärker, wer in diesen Bildern sichtbar wird, welche Arbeit Räume trägt
                und wie Gegenwart ohne mythologischen oder historischen Abstand dargestellt
                werden kann.
              </p>
              <Link
                href="/epochen/romantik/"
                style={{
                  color: "inherit",
                  display: "inline-block",
                  fontWeight: 800,
                  marginTop: "2rem",
                }}
              >
                Zur Romantik zurückblicken →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <RealismMilletAxis />
    </>
  );
}
