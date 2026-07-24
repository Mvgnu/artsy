import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { gericaultArtworks } from "@/components/experiences/romanticismArtworkSets";

export const metadata: Metadata = {
  title: "Théodore Géricault: Körper, Katastrophe und moderne Geschichte",
  description:
    "Ein vertieftes Künstlerprofil zu Théodore Géricault: militärische Bilder, Das Floß der Medusa, anatomische Studien, Schwarze Modelle und die Monomanie-Porträts.",
  alternates: {
    canonical: "/kuenstler/theodore-gericault/",
  },
};

const phases = [
  {
    period: "1791–1812",
    title: "Ausbildung, Pferde und militärische Energie",
    text: "Géricault studierte Pferde, Reiter und die Bewegung großer Körper mit ungewöhnlicher Intensität. Der Offizier der Chasseurs beim Angriff machte ihn 1812 bekannt: kein ruhiges Reiterporträt, sondern eine explosive Drehung aus Tier, Rauch, Waffen und unsicherem Boden.",
  },
  {
    period: "1814–1817",
    title: "Vom Angriff zum Rückzug",
    text: "Der Verwundete Kürassier verlässt das Schlachtfeld statt es zu beherrschen. In der politischen Unsicherheit nach Napoleons Niederlage verschob sich Géricaults Blick vom heroischen Impuls auf Erschöpfung, Rückzug und beschädigte Souveränität.",
  },
  {
    period: "1817–1819",
    title: "Das Floß als Untersuchung",
    text: "Für Das Floß der Medusa sprach Géricault mit Überlebenden, ließ ein Modell des Floßes bauen, studierte Leichen und abgetrennte Gliedmaßen und arbeitete mit lebenden Modellen. Das Ergebnis ist zugleich politisches Skandalbild, körperliche Recherche und monumentale Historienmalerei.",
  },
  {
    period: "1820–1824",
    title: "Individuelle Gesichter nach der Katastrophe",
    text: "In England beobachtete Géricault moderne Armut, Pferderennen und städtisches Leben. Seine späten Monomanie-Porträts zeigen einzelne Menschen in konzentrierter Nähe. Sie sind historisch mit problematischen psychiatrischen Kategorien verbunden, reduzieren die Dargestellten aber nicht auf Karikatur oder sichtbare Diagnose.",
  },
] as const;

const methods = [
  {
    title: "Gewicht statt bloßer Geste",
    text: "Körper kippen, tragen, hängen und widerstehen. Géricaults Dramaturgie entsteht nicht nur aus erhobenen Armen, sondern aus Schwerkraft, Gelenken und dem Verhältnis zwischen lebender Kraft und materieller Erschöpfung.",
  },
  {
    title: "Recherche als Bildpraxis",
    text: "Zeugenaussagen, Modelle, anatomische Studien und Beobachtung ersetzen keine Interpretation. Sie geben der Malerei jedoch eine ungewöhnlich konkrete materielle Grundlage, aus der erst die monumentale Form entsteht.",
  },
  {
    title: "Hoffnung ohne Sicherheit",
    text: "Viele Kompositionen bauen auf eine mögliche Wende hin, verweigern aber den sicheren Ausgang. Das Rettungsschiff im Floß ist sichtbar und beinahe unsichtbar zugleich; Blick und Handlung bleiben prekär.",
  },
  {
    title: "Individualität gegen Typisierung",
    text: "Besonders in den Porträts wird die Spannung zwischen medizinischer Kategorie und individueller Person sichtbar. Kleidung, Haltung und Gesicht tragen Bedeutung, ohne sich vollständig als Symptom lesen zu lassen.",
  },
] as const;

export default function TheodoreGericaultPage() {
  return (
    <article style={{ background: "#171411", color: "#f0e6d7", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "86rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#ca9b5d",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Künstlerprofil · Französische Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8.5rem)",
            fontWeight: 500,
            letterSpacing: "-.055em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
            maxWidth: "11ch",
          }}
        >
          Théodore
          <span style={{ color: "#a65b3a", display: "block", fontStyle: "italic" }}>
            Géricault
          </span>
        </h1>
        <p
          style={{
            color: "rgb(240 230 215 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "43rem",
          }}
        >
          Géricault machte moderne Geschichte körperlich, ohne sie in eine eindeutige
          Heldenerzählung zu verwandeln. Angriff, Rückzug, Schiffbruch und psychische
          Verletzlichkeit werden bei ihm zu verschiedenen Zuständen derselben unsicheren
          Moderne.
        </p>
      </header>

      <section style={{ background: "#e9dfcf", color: "#211b17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "86rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#8f4d32",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Werke, vier Zustände
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 3.5rem",
              maxWidth: "13ch",
            }}
          >
            Vom militärischen Impuls zur stillen Person
          </h2>
          <ArtworkStrip items={gericaultArtworks} light title="Werke von Théodore Géricault" />
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
              color: "#ca9b5d",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Entwicklung
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
            Eine kurze Karriere ohne ruhigen Mittelpunkt
          </h2>
          <div style={{ display: "grid", gap: "1px", background: "rgb(240 230 215 / .16)" }}>
            {phases.map((phase) => (
              <section
                key={phase.period}
                style={{
                  background: "#171411",
                  display: "grid",
                  gap: "1.5rem",
                  gridTemplateColumns: "minmax(7rem, .35fr) minmax(0, 1fr)",
                  padding: "clamp(1.5rem, 4vw, 3rem)",
                }}
              >
                <p style={{ color: "#ca9b5d", fontWeight: 800, margin: 0 }}>{phase.period}</p>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      fontWeight: 500,
                      lineHeight: 1.05,
                      margin: 0,
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      color: "rgb(240 230 215 / .7)",
                      lineHeight: 1.8,
                      margin: "1rem 0 0",
                      maxWidth: "50rem",
                    }}
                  >
                    {phase.text}
                  </p>
                </div>
              </section>
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
            Wie seine Bilder arbeiten
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {methods.map((method) => (
              <article
                key={method.title}
                style={{ border: "1px solid rgb(255 240 221 / .24)", padding: "2rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.05,
                    margin: 0,
                  }}
                >
                  {method.title}
                </h3>
                <p style={{ lineHeight: 1.76, margin: "1.5rem 0 0" }}>{method.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#d7bd8b", color: "#251d16" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "76rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: 0,
              maxWidth: "15ch",
            }}
          >
            Nicht nur der Maler eines Schiffbruchs
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.82, margin: "2rem 0 0", maxWidth: "48rem" }}>
            Das Floß der Medusa bündelt Géricaults Fragen, aber es erschöpft sie nicht.
            Seine Reiterbilder untersuchen beschädigte Handlungsmacht; die anatomischen
            Studien prüfen, wie Tod materiell aussieht; die späten Porträts verlagern
            historische Unsicherheit in einzelne Gesichter. Zusammen zeigen sie eine Kunst,
            die weder Heldentum noch Diagnose unbefragt übernimmt.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2rem", marginTop: "2.5rem" }}>
            <Link href="/werke/das-floss-der-medusa/">Das Floß der Medusa genau lesen →</Link>
            <Link href="/begriffe/katastrophe-und-zeugenschaft/">
              Katastrophe und Zeugenschaft verstehen →
            </Link>
            <Link href="/epochen/romantik/">Zur Romantik →</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
