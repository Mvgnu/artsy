import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { ruralLaborArtworks } from "@/components/experiences/realismMilletArtworkSets";

export const metadata: Metadata = {
  title: "Ländliche Arbeit und soziale Sichtbarkeit",
  description:
    "Ein Begriffstext über Feldarbeit, Restarbeit, Werkzeuge, Wiederholung, soziale Distanz und die Bildpolitik ländlicher Sichtbarkeit im Realismus.",
  alternates: { canonical: "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/" },
};

const distinctions = [
  ["Arbeit ist nicht Landschaftsstaffage", "Ländliche Figuren erklären nicht nur Maßstab oder Jahreszeit. Ihre Tätigkeiten strukturieren Raum, Rhythmus, Körperhaltung und die Verteilung von Ressourcen."],
  ["Sichtbarkeit ist nicht automatisch Würde", "Ein groß dargestellter Körper kann weiterhin anonym, abhängig und sozial marginal bleiben. Monumentalität muss deshalb zusammen mit Haltung, Blickzugang und Handlungsspielraum gelesen werden."],
  ["Idealisiert heißt nicht unwahr", "Abendlicht, klare Rhythmen oder harmonische Gruppierung können Arbeit versöhnen, ohne ihre sozialen Bedingungen vollständig zu leugnen. Entscheidend ist, was diese ästhetische Ordnung sichtbar macht und was sie beruhigt."],
  ["Materialität ist sozial organisiert", "Boden, Saat, Ernte, Werkzeuge und Wetter sind physische Bedingungen. Wer Zugang zu Land, Resten, Zeit oder Geräten hat, ist jedoch historisch und rechtlich geregelt."],
] as const;

const questions = [
  "Welche Tätigkeit ist dargestellt, und an welchem Punkt ihres Zyklus?",
  "Wer besitzt Boden, Ertrag, Werkzeug oder Transportmittel?",
  "Wie formen Wiederholung und Dauer die Körper?",
  "Welche Distanz trennt Arbeitende von Ertrag, Aufsicht oder Öffentlichkeit?",
  "Wird Mühe ästhetisch versöhnt, verschärft oder neutralisiert?",
  "Welche Formen von Arbeit bleiben außerhalb des Bildes?",
] as const;

const links = [
  ["Werk", "/werke/die-aehrenleserinnen/", "Die Ährenleserinnen"],
  ["Künstler", "/kuenstler/jean-francois-millet/", "Jean-François Millet"],
  ["Grundbegriff", "/begriffe/arbeit-und-materiale-realitaet/", "Arbeit und materiale Realität"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function RuralLaborPage() {
  return (
    <main style={{ background: "#eee6d5", color: "#27261f" }}>
      <section style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(5rem, 12vw, 10rem) 1.25rem" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>Begriff · Realismus</p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.8rem, 10vw, 8.5rem)", fontWeight: 500, letterSpacing: "-.065em", lineHeight: ".91", margin: "1rem 0", maxWidth: "12ch" }}>
          Ländliche Arbeit und soziale Sichtbarkeit
        </h1>
        <p style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)", lineHeight: 1.65, margin: "2rem 0 0", maxWidth: "56rem" }}>
          Realistische Bauernbilder zeigen nicht einfach „das einfache Leben“. Sie ordnen Körper, Boden, Eigentum, Ertrag und Blickbarkeit. Die entscheidende Frage lautet nicht nur, wer arbeitet, sondern unter welchen Bedingungen diese Arbeit sichtbar werden darf.
        </p>
      </section>

      <section style={{ background: "#30342a", color: "#f2ecdc", padding: "clamp(4rem, 9vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "92rem" }}>
          <ArtworkStrip items={ruralLaborArtworks} title="Restarbeit, Erschöpfung, Ideal und Industrie" />
        </div>
      </section>

      <section style={{ margin: "0 auto", maxWidth: "78rem", padding: "clamp(5rem, 10vw, 9rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
          {distinctions.map(([title, text], index) => (
            <article key={title} style={{ borderTop: "1px solid rgb(39 38 31 / .35)", minHeight: "20rem", padding: "1.5rem 0" }}>
              <span style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em" }}>0{index + 1}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.25rem", fontWeight: 500, letterSpacing: "-.04em", lineHeight: 1.03, margin: "2.3rem 0 1rem" }}>{title}</h2>
              <p style={{ lineHeight: 1.78, margin: 0 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#c8b77e", padding: "clamp(5rem, 10vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "78rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".95", margin: 0 }}>Sechs Fragen an Bilder der Arbeit</h2>
          <ol style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", listStyle: "none", margin: "3rem 0 0", padding: 0 }}>
            {questions.map((question, index) => (
              <li key={question} style={{ borderTop: "1px solid rgb(39 38 31 / .35)", fontSize: "1.08rem", lineHeight: 1.65, padding: "1.25rem 0" }}>
                <strong style={{ marginRight: ".75rem" }}>0{index + 1}</strong>{question}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <nav aria-label="Weiterführende Wege" style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(4rem, 9vw, 7rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
          {links.map(([eyebrow, href, title]) => (
            <Link key={href} href={href!} style={{ border: "1px solid rgb(39 38 31 / .3)", color: "inherit", minHeight: "13rem", padding: "1.5rem", textDecoration: "none" }}>
              <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>{eyebrow}</span>
              <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, lineHeight: 1.05, marginTop: "2rem" }}>{title}</strong>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
