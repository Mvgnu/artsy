import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { saturnContextArtworks } from "@/components/experiences/romanticIconicArtworkSets";

export const metadata: Metadata = {
  title: "Saturn verschlingt seinen Sohn – Bildanalyse",
  description:
    "Goyas Saturn verschlingt seinen Sohn: Schwarze Malereien, Mythos, Körpergewalt, private Wandmalerei und die Grenzen symbolischer Deutung.",
  alternates: { canonical: "/werke/saturn-verschlingt-seinen-sohn/" },
};

const questions = [
  "Was verändert sich, wenn ein Mythos ohne heroischen Rahmen erscheint?",
  "Wie wirken Maßstab, Dunkelheit und enger Bildraum zusammen?",
  "Welche Details verhindern eine distanzierte allegorische Lektüre?",
  "Was bedeutet es, dass das Bild Teil einer privaten Hausausstattung war?",
  "Wie vorsichtig muss politische oder biografische Deutung formuliert werden?",
  "Warum ist die heutige Museumspräsentation nicht mit dem ursprünglichen Ort identisch?",
] as const;

export default function SaturnPage() {
  return (
    <main style={{ background: "#17120f", color: "#eee4d5" }}>
      <article
        style={{
          margin: "0 auto",
          maxWidth: "78rem",
          padding: "clamp(4rem, 9vw, 8rem) 1.25rem",
        }}
      >
        <p
          style={{
            color: "#c46f4f",
            fontSize: ".75rem",
            fontWeight: 800,
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Werk lesen · Francisco de Goya
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8rem)",
            letterSpacing: "-.055em",
            lineHeight: ".92",
            margin: "1rem 0",
          }}
        >
          Saturn verschlingt seinen Sohn
        </h1>
        <p
          style={{
            color: "rgb(238 228 213 / .82)",
            fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
            lineHeight: 1.55,
            maxWidth: "52rem",
          }}
        >
          Goya greift einen bekannten Mythos auf, entfernt jedoch fast alles, was ihn
          als geordnete Historienmalerei stabilisieren könnte. Übrig bleiben Körper,
          Blick, Hunger und ein Raum ohne sichere Distanz.
        </p>

        <section
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            marginTop: "5rem",
          }}
        >
          {[
            [
              "Der Körper des Saturn",
              "Die Gestalt ist riesig, angespannt und unproportioniert. Ihre körperliche Präsenz ersetzt jede majestätische göttliche Ordnung.",
            ],
            [
              "Das Opfer",
              "Der kleinere Körper ist bereits verstümmelt und besitzt keine heroische Identität. Gewalt erscheint als Handlung, nicht als fernes mythologisches Beispiel.",
            ],
            [
              "Der Blick",
              "Saturn blickt mit weit geöffneten Augen aus dem Bildraum heraus. Dadurch bleibt unklar, ob er überrascht, bedroht, wahnsinnig oder selbst beobachtet ist.",
            ],
            [
              "Der ursprüngliche Ort",
              "Das Bild gehörte zu den sogenannten Schwarzen Malereien in Goyas Haus. Seine heutige isolierte Museumspräsentation verändert Maßstab, Nachbarschaft und Funktion.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                borderTop: "1px solid rgb(238 228 213 / .22)",
                paddingTop: "1.25rem",
              }}
            >
              <h2
                style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: 0 }}
              >
                {title}
              </h2>
              <p style={{ color: "rgb(238 228 213 / .76)", lineHeight: 1.75 }}>
                {text}
              </p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "6rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              letterSpacing: "-.04em",
            }}
          >
            Mythos ohne beruhigende Ordnung
          </h2>
          <p
            style={{
              color: "rgb(238 228 213 / .8)",
              fontSize: "1.15rem",
              lineHeight: 1.8,
              maxWidth: "54rem",
            }}
          >
            Der Saturn-Mythos kann Macht, Zeit, Generationenkonflikt oder Angst vor
            Ablösung tragen. Das Bild legt keine dieser Bedeutungen endgültig fest.
            Seine malerische Unmittelbarkeit und der ursprüngliche private Kontext
            machen jede eindeutige politische oder psychologische Übersetzung riskant.
            Die Gewalt bleibt lesbar, ohne vollständig erklärbar zu werden.
          </p>
        </section>

        <ArtworkStrip
          items={saturnContextArtworks}
          title="Goyas Spektrum zwischen Groteske, Koloss und Leere"
        />

        <section style={{ marginTop: "6rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "3rem" }}>
            Sechs Fragen an die Wandmalerei
          </h2>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              paddingLeft: "1.5rem",
              lineHeight: 1.7,
            }}
          >
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </section>

        <nav
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            marginTop: "6rem",
          }}
        >
          {[
            ["Zum Goya-Profil", "/kuenstler/francisco-goya/"],
            ["Dunkle Romantik", "/begriffe/dunkle-romantik/"],
            ["Das Unheimliche", "/begriffe/das-unheimliche/"],
            ["Zur Romantik", "/epochen/romantik/"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href!}
              style={{
                border: "1px solid rgb(238 228 213 / .2)",
                color: "inherit",
                padding: "1.25rem",
                textDecoration: "none",
              }}
            >
              {label} →
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
