import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { courbetProfileArtworks } from "@/components/experiences/realismArtworkSets";

export const metadata: Metadata = {
  title: "Gustave Courbet: Realismus, Öffentlichkeit und materielle Gegenwart",
  description:
    "Ein Künstlerprofil über Courbets monumentale Gegenwart, lokale Körper, reale Allegorie, Selbstinszenierung und politischen Anspruch.",
  alternates: { canonical: "/kuenstler/gustave-courbet/" },
};

const phases = [
  {
    title: "Der Künstler als sichtbare Figur",
    text: "Frühe Selbstbildnisse zeigen Courbet nicht als neutralen Beobachter. Er dramatisiert Blick, Körper und Persönlichkeit und macht die eigene öffentliche Rolle zum Teil seines Realismus.",
  },
  {
    title: "Ornans wird monumental",
    text: "Mit den Steinklopfern und dem Begräbnis in Ornans überträgt Courbet große Formate auf Arbeit und lokale Gemeinschaft. Entscheidend ist nicht bloß das Motiv, sondern die Veränderung der Bildhierarchie.",
  },
  {
    title: "Die reale Allegorie",
    text: "Das Atelier des Künstlers verbindet konkrete Personen mit programmatischer Ordnung. Der scheinbare Widerspruch im Untertitel zeigt, dass Realismus auf Konstruktion und Deutung nicht verzichtet.",
  },
  {
    title: "Kunst, Institution und Politik",
    text: "Courbet organisiert eigene Ausstellungen, streitet über staatliche Anerkennung und wird während der Pariser Kommune politisch aktiv. Diese Öffentlichkeit prägt die Rezeption, erklärt die Werke aber nicht vollständig.",
  },
] as const;

export default function GustaveCourbetPage() {
  return (
    <main style={{ background: "#e4ddd0", color: "#211f1b" }}>
      <section
        style={{
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(7rem, 13vw, 12rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>
          Künstlerprofil · Realismus
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.2rem, 12vw, 10rem)",
            fontWeight: 500,
            letterSpacing: "-.065em",
            lineHeight: ".86",
            margin: "1.4rem 0 0",
            maxWidth: "9ch",
          }}
        >
          Gustave Courbet malt Gegenwart auf Kollisionskurs.
        </h1>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 23rem), 1fr))",
            marginTop: "5rem",
          }}
        >
          <p style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)", lineHeight: 1.65, margin: 0 }}>
            Courbets Realismus besteht nicht darin, die Welt möglichst neutral abzuschreiben.
            Er zwingt Gegenwart in Formate, Institutionen und Blickordnungen, die dafür nicht
            vorgesehen waren. Lokale Trauergäste, Straßenarbeiter, Freunde, Modelle und der
            Künstler selbst beanspruchen historische Sichtbarkeit.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}>
            Deshalb ist Courbet zugleich Beobachter, Konstrukteur und Provokateur. Sichtbare
            Materie, grobe Malweise und zeitgenössische Motive bilden keinen Gegensatz zu
            Komposition oder Programm. Sie sind die Mittel, mit denen er die soziale Ordnung
            des Bildes verändert.
          </p>
        </div>
      </section>

      <section style={{ background: "#292a24", color: "#f1eadf", padding: "6rem 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "94rem" }}>
          <ArtworkStrip items={courbetProfileArtworks} title="Selbstbild, Gemeinschaft, Arbeit und Programm" />
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
          margin: "0 auto",
          maxWidth: "94rem",
          padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
        }}
      >
        {phases.map((phase, index) => (
          <article
            key={phase.title}
            style={{ borderTop: "1px solid rgb(33 31 27 / .3)", minHeight: "19rem", padding: "1.5rem 0" }}
          >
            <span style={{ fontSize: ".72rem", fontWeight: 800 }}>0{index + 1}</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.4rem",
                fontWeight: 500,
                letterSpacing: "-.04em",
                lineHeight: 1,
                margin: "2rem 0 0",
              }}
            >
              {phase.title}
            </h2>
            <p style={{ lineHeight: 1.78, margin: "1.25rem 0 0" }}>{phase.text}</p>
          </article>
        ))}
      </section>

      <section style={{ background: "#b6a37d", padding: "6rem 1.25rem" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            margin: "0 auto",
            maxWidth: "94rem",
          }}
        >
          <Link href="/werke/die-steinklopfer/" style={{ color: "inherit", textDecoration: "none" }}>
            <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 500 }}>
              Die Steinklopfer
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Arbeit, Alter, Werkzeug und Material in einem verlorenen Hauptwerk lesen.
            </span>
          </Link>
          <Link href="/begriffe/arbeit-und-materiale-realitaet/" style={{ color: "inherit", textDecoration: "none" }}>
            <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 500 }}>
              Arbeit und materiale Realität
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Ein übertragbares Modell für Körper, Wiederholung, Widerstand und Infrastruktur.
            </span>
          </Link>
          <Link href="/epochen/realismus/" style={{ color: "inherit", textDecoration: "none" }}>
            <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 500 }}>
              Realismus
            </strong>
            <span style={{ display: "block", lineHeight: 1.7, marginTop: "1rem" }}>
              Courbet mit Millet, Daumier und Menzel in ein größeres Feld stellen.
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
