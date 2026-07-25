import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { milletProfileArtworks } from "@/components/experiences/realismMilletArtworkSets";

export const metadata: Metadata = {
  title: "Jean-François Millet: Arbeit, Erde und soziale Sichtbarkeit",
  description:
    "Ein Künstlerprofil über Jean-François Millet, ländliche Arbeit, Monumentalität, religiöse Zeit und die spätere Sentimentalisierung seiner Bauernbilder.",
  alternates: { canonical: "/kuenstler/jean-francois-millet/" },
};

const phases = [
  {
    title: "Rurale Erfahrung und akademische Ambition",
    text: "Millet kannte bäuerliche Arbeit nicht nur als Motivreservoir. Gerade deshalb ist es zu einfach, seine Bilder als unmittelbare Dokumente des Landlebens zu behandeln. Sie entstehen aus Erinnerung, Studium, Atelierarbeit und dem Anspruch, alltägliche Körper in den Maßstab anspruchsvoller Salonmalerei zu überführen.",
  },
  {
    title: "Barbizon und die arbeitende Landschaft",
    text: "In Barbizon wird Landschaft weder bloße Kulisse noch unberührte Natur. Saat, Ernte, Sammeln, Hacken und Pausen strukturieren den Raum. Wetter, Boden und Tageszeit bestimmen, was Körper leisten können und wie lange eine Handlung dauert.",
  },
  {
    title: "Monumentale Wiederholung",
    text: "Millet sucht selten den einzigartigen dramatischen Augenblick. Seine Figuren säen, sammeln, tragen oder ruhen in Bewegungen, die sich wiederholen werden. Monumentalität entsteht nicht durch Triumph, sondern durch Dauer, Gewicht und die elementare Klarheit einer Tätigkeit.",
  },
  {
    title: "Religiöse und sentimentale Nachleben",
    text: "Werke wie The Angelus wurden später stark religiös, nostalgisch oder national aufgeladen. Diese Rezeptionsgeschichte gehört zum Werk, darf aber nicht verdecken, dass Geräte, Kleidung, Besitzverhältnisse und erschöpfte Körper weiterhin sichtbar bleiben.",
  },
] as const;

const links = [
  ["Werk lesen", "/werke/die-aehrenleserinnen/", "The Gleaners"],
  ["Begriff verstehen", "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/", "Ländliche Arbeit"],
  ["Grundlage", "/begriffe/arbeit-und-materiale-realitaet/", "Arbeit und materiale Realität"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function MilletPage() {
  return (
    <main style={{ background: "#efe8d7", color: "#27271f" }}>
      <section style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(5rem, 12vw, 10rem) 1.25rem" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>
          Künstlerprofil · Realismus
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 11vw, 9rem)", fontWeight: 500, letterSpacing: "-.065em", lineHeight: ".9", margin: "1rem 0", maxWidth: "10ch" }}>
          Jean-François Millet
        </h1>
        <p style={{ fontSize: "clamp(1.2rem, 2.3vw, 1.7rem)", lineHeight: 1.65, margin: "2rem 0 0", maxWidth: "52rem" }}>
          Millet machte ländliche Arbeit groß, langsam und unausweichlich sichtbar. Seine Bauern sind weder Staffage noch einfache Helden: Sie stehen zwischen körperlicher Würde, ökonomischer Abhängigkeit und späterer nostalgischer Vereinnahmung.
        </p>
      </section>

      <section style={{ background: "#292d23", color: "#f2ecdc", padding: "clamp(4rem, 9vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "92rem" }}>
          <ArtworkStrip items={milletProfileArtworks} title="Saat, Restarbeit, Gebet und Erschöpfung" />
        </div>
      </section>

      <section style={{ margin: "0 auto", maxWidth: "78rem", padding: "clamp(5rem, 10vw, 9rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))" }}>
          {phases.map((phase, index) => (
            <article key={phase.title} style={{ borderTop: "1px solid rgb(39 39 31 / .35)", minHeight: "22rem", padding: "1.5rem 0" }}>
              <span style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em" }}>0{index + 1}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.35rem", fontWeight: 500, letterSpacing: "-.035em", lineHeight: 1.02, margin: "2.5rem 0 1rem" }}>
                {phase.title}
              </h2>
              <p style={{ lineHeight: 1.78, margin: 0 }}>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#c8b67e", padding: "clamp(5rem, 10vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "78rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".95", margin: 0, maxWidth: "13ch" }}>
            Millet malt keine zeitlose Bauernwelt.
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8, margin: "2rem 0 0", maxWidth: "48rem" }}>
            Seine Bilder zeigen Tätigkeiten, deren soziale Bedeutung historisch konkret ist: Zugang zu Land, Rechte auf Erntereste, Abhängigkeit von Jahreszeiten und die Frage, welche Arbeit als würdig, bedrohlich oder malerisch akzeptabel erscheint.
          </p>
        </div>
      </section>

      <nav style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(4rem, 9vw, 7rem) 1.25rem" }} aria-label="Weiterführende Wege">
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
          {links.map(([eyebrow, href, title]) => (
            <Link key={href} href={href!} style={{ border: "1px solid rgb(39 39 31 / .3)", color: "inherit", minHeight: "13rem", padding: "1.5rem", textDecoration: "none" }}>
              <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>{eyebrow}</span>
              <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, lineHeight: 1.05, marginTop: "2rem" }}>{title}</strong>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
