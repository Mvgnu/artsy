import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { gleanersContextArtworks } from "@/components/experiences/realismMilletArtworkSets";

export const metadata: Metadata = {
  title: "Die Ährenleserinnen: Arbeit nach der Ernte",
  description:
    "Eine Werkanalyse von Jean-François Millets The Gleaners über gebückte Körper, Erntereste, soziale Distanz, Horizont und monumentale Wiederholung.",
  alternates: { canonical: "/werke/die-aehrenleserinnen/" },
};

const readings = [
  ["Drei Körper, drei Phasen", "Greifen, Aufrichten, Sammeln: Die Frauen bilden keinen eingefrorenen Chor, sondern eine Folge wiederholter Bewegungen. Das Bild macht Dauer sichtbar, ohne eine Handlung zum dramatischen Höhepunkt zu erklären."],
  ["Arbeit am Rest", "Gleaning beginnt nach der eigentlichen Ernte. Die Frauen sammeln, was auf dem Feld zurückbleibt. Diese Tätigkeit hängt von sozial geregeltem Zugang, knappen Resten und körperlicher Ausdauer ab."],
  ["Der geteilte Raum", "Vorn dominieren gebückte Körper und trockene Erde. Hinten liegen Wagen, Kornschober, Arbeiter, Tiere und Aufsicht. Der Horizont trennt nicht Natur und Mensch, sondern verschiedene Positionen innerhalb derselben Produktion."],
  ["Monumental ohne Triumph", "Die Figuren sind groß, aber nicht erhöht. Ihre Gesichter bleiben schwer lesbar, ihre Bewegung bleibt nach unten gerichtet. Monumentalität verleiht Sichtbarkeit, löst Abhängigkeit jedoch nicht auf."],
] as const;

const links = [
  ["Künstler", "/kuenstler/jean-francois-millet/", "Jean-François Millet"],
  ["Begriff", "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/", "Ländliche Arbeit"],
  ["Vergleich", "/werke/die-steinklopfer/", "Die Steinklopfer"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function GleanersPage() {
  return (
    <main style={{ background: "#e8dfc9", color: "#28261f" }}>
      <section style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(5rem, 12vw, 10rem) 1.25rem" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>Werkdecoder · 1857</p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 11vw, 9rem)", fontWeight: 500, letterSpacing: "-.065em", lineHeight: ".9", margin: "1rem 0", maxWidth: "10ch" }}>
          Die Ährenleserinnen
        </h1>
        <p style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)", lineHeight: 1.65, margin: "2rem 0 0", maxWidth: "54rem" }}>
          Drei Frauen sammeln einzelne Ähren, während die eigentliche Ernte fast vollständig im Hintergrund stattfindet. Millets Bild macht soziale Ordnung nicht durch eine Parole sichtbar, sondern durch Körperhöhe, Entfernung, Restarbeit und die Verteilung des Raums.
        </p>
      </section>

      <section style={{ background: "#34372b", color: "#f1ead9", padding: "clamp(4rem, 9vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "92rem" }}>
          <ArtworkStrip items={gleanersContextArtworks} title="Säen, sammeln und die Ästhetik ländlicher Arbeit" />
        </div>
      </section>

      <section style={{ margin: "0 auto", maxWidth: "78rem", padding: "clamp(5rem, 10vw, 9rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
          {readings.map(([title, text], index) => (
            <article key={title} style={{ borderTop: "1px solid rgb(40 38 31 / .35)", minHeight: "21rem", padding: "1.5rem 0" }}>
              <span style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em" }}>0{index + 1}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 500, letterSpacing: "-.04em", lineHeight: 1.02, margin: "2.5rem 0 1rem" }}>{title}</h2>
              <p style={{ lineHeight: 1.78, margin: 0 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#b6a061", padding: "clamp(5rem, 10vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "78rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".95", margin: 0, maxWidth: "14ch" }}>
            Würde und Abhängigkeit schließen einander nicht aus.
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8, margin: "2rem 0 0", maxWidth: "50rem" }}>
            Die Größe und rhythmische Klarheit der Frauen verleihen ihrer Tätigkeit formale Bedeutung. Doch das Bild heroisiert sie nicht aus ihrer Lage heraus: Sie bleiben auf Erntereste angewiesen, körperlich gebeugt und vom sichtbaren Überfluss getrennt.
          </p>
        </div>
      </section>

      <nav aria-label="Weiterführende Wege" style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(4rem, 9vw, 7rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
          {links.map(([eyebrow, href, title]) => (
            <Link key={href} href={href!} style={{ border: "1px solid rgb(40 38 31 / .3)", color: "inherit", minHeight: "13rem", padding: "1.5rem", textDecoration: "none" }}>
              <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>{eyebrow}</span>
              <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, lineHeight: 1.05, marginTop: "2rem" }}>{title}</strong>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
