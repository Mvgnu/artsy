import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revolution und Körper: Politische Romantik lesen",
  description:
    "Wie politische Romantik Revolution, Katastrophe und kollektive Handlung durch Körper, Menge, Verletzung, Allegorie und Zuschauerposition sichtbar macht.",
  alternates: {
    canonical: "/begriffe/revolution-und-koerper/",
  },
};

const mechanisms = [
  {
    number: "01",
    title: "Der Körper macht abstrakte Politik sichtbar.",
    text: "Freiheit, Unterdrückung oder Volk sind keine direkt sichtbaren Gegenstände. Malerei übersetzt sie in Haltung, Kleidung, Verletzung, Bewegung und Berührung. Dadurch wird politische Idee körperlich erfahrbar, aber nie neutral.",
  },
  {
    number: "02",
    title: "Die Menge verspricht Einheit und verbirgt Differenz.",
    text: "Menschenansammlungen können gemeinsame Handlungskraft zeigen. Gleichzeitig wählen Bilder aus, welche Klassen, Geschlechter und Gruppen als repräsentativ erscheinen und welche im Hintergrund verschwinden oder ganz fehlen.",
  },
  {
    number: "03",
    title: "Verletzung erzeugt Nähe und Distanz zugleich.",
    text: "Tote und Verwundete brechen heroische Erzählungen auf. Doch ihr Leid kann auch ästhetisch organisiert und für Pathos genutzt werden. Betrachtung muss deshalb zwischen Zeugenschaft, Mitgefühl und Spektakel unterscheiden.",
  },
  {
    number: "04",
    title: "Allegorie verdichtet, aber vereinfacht.",
    text: "Eine personifizierte Freiheit oder Nation macht komplexe Politik sofort lesbar. Diese Klarheit kann mobilisieren, glättet jedoch historische Widersprüche und bindet abstrakte Macht häufig an idealisierte, geschlechtlich codierte Körper.",
  },
  {
    number: "05",
    title: "Blickrichtungen organisieren Gefolgschaft.",
    text: "Wer führt, wer schaut zurück, wer fällt und wer uns ansieht, bestimmt die politische Dramaturgie eines Bildes. Der Betrachter wird nicht nur informiert, sondern räumlich und emotional positioniert.",
  },
  {
    number: "06",
    title: "Nachwirkung verändert das ursprüngliche Bild.",
    text: "Politische Bilder werden zitiert, vereinfacht und als Symbol wiederverwendet. Dabei können Fahne, Pose oder Farbcode weiterleben, während Tote, konkrete Konflikte und begrenzte historische Ergebnisse aus dem Gedächtnis verschwinden.",
  },
] as const;

const comparisons = [
  {
    artist: "Delacroix",
    title: "Der Körper als revolutionäre Energie",
    text: "In Freiheit führt das Volk verbinden Allegorie und Straßenszene eine vorwärtsdrängende Bewegung. Körper tragen Klassen, Verletzung und politische Hoffnung gleichzeitig.",
  },
  {
    artist: "Géricault",
    title: "Der Körper als Zeugnis des politischen Versagens",
    text: "Im Floß der Medusa werden Überleben, Verzweiflung und staatlicher Skandal über eine gestaffelte Gruppe erschöpfter Körper organisiert. Das Heroische entsteht aus Katastrophe, nicht aus Sieg.",
  },
  {
    artist: "Goya",
    title: "Der Körper als Ziel organisierter Gewalt",
    text: "Goyas Erschießungsszenen zeigen keine einheitliche revolutionäre Menge, sondern asymmetrische Macht. Das Opfer blickt und handelt anders als die entindividualisierte Schützenreihe.",
  },
  {
    artist: "Friedrich",
    title: "Der Körper als stiller Maßstab",
    text: "Die Rückenfigur mobilisiert keine Straße. Sie positioniert Wahrnehmung. Der Vergleich zeigt, dass politische und kontemplative Romantik den Körper unterschiedlich einsetzen, beide aber den Betrachter aktiv einordnen.",
  },
] as const;

const questions = [
  "Welche Körper dürfen handeln, und welche erscheinen nur als Opfer?",
  "Welche soziale Mischung behauptet die Menge – und wer fehlt?",
  "Wird Verletzung als Zeugnis, Warnung oder Spektakel inszeniert?",
  "Welche abstrakte Idee erhält einen Körper, und wie ist dieser Körper codiert?",
  "Wo steht der Betrachter räumlich und moralisch zum Geschehen?",
  "Was blieb bei späteren Zitaten des Bildes übrig, und was ging verloren?",
] as const;

export default function RevolutionAndBodyPage() {
  return (
    <article style={{ background: "#15110f", color: "#f0e3d0", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "86rem",
          padding: "clamp(8rem, 16vw, 14rem) 1.25rem clamp(6rem, 10vw, 9rem)",
        }}
      >
        <p
          style={{
            color: "#d69754",
            fontSize: ".75rem",
            fontWeight: 800,
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Begriff verstehen · Politische Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".82",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          Revolution
          <span style={{ color: "#a64d32", display: "block", fontStyle: "italic" }}>
            und Körper
          </span>
        </h1>
        <p
          style={{
            color: "rgb(240 227 208 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
            lineHeight: 1.7,
            margin: "4rem 0 0 auto",
            maxWidth: "42rem",
          }}
        >
          Politische Malerei zeigt keine Ideen ohne Körper. Sie muss Freiheit, Volk,
          Gewalt und Hoffnung in sichtbare Personen, Verletzungen, Gesten und Gruppen
          übersetzen – und erzeugt dabei immer neue Ein- und Ausschlüsse.
        </p>
      </header>

      <section style={{ background: "#efe2cf", color: "#241a16" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#9b4b30",
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
              fontSize: "clamp(3rem, 7vw, 6.4rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 4rem",
              maxWidth: "14ch",
            }}
          >
            Wie politische Bilder aus Geschichte eine körperliche Erfahrung machen
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              background: "rgb(36 26 22 / .2)",
            }}
          >
            {mechanisms.map((mechanism) => (
              <article
                key={mechanism.number}
                style={{ background: "#efe2cf", minHeight: "23rem", padding: "2rem" }}
              >
                <p style={{ color: "#9b4b30", fontWeight: 800 }}>{mechanism.number}</p>
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
                <p style={{ color: "rgb(36 26 22 / .72)", lineHeight: 1.76 }}>
                  {mechanism.text}
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
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d69754",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Nicht jede Romantik mobilisiert gleich
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 4rem",
              maxWidth: "15ch",
            }}
          >
            Vier Arten, den Körper zum Träger von Geschichte zu machen
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
            }}
          >
            {comparisons.map((comparison) => (
              <article
                key={comparison.artist}
                style={{ border: "1px solid rgb(240 227 208 / .17)", padding: "2rem" }}
              >
                <p style={{ color: "#d69754", fontWeight: 800 }}>{comparison.artist}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "1.4rem 0",
                  }}
                >
                  {comparison.title}
                </h3>
                <p style={{ color: "rgb(240 227 208 / .68)", lineHeight: 1.76 }}>
                  {comparison.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#a64d32", color: "#fff0dc" }}>
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
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                fontWeight: 500,
                letterSpacing: "-.045em",
                lineHeight: 1,
                margin: "1rem 0 0",
              }}
            >
              Sechs Fragen für politische Körperbilder
            </h2>
          </div>
          <ol style={{ display: "grid", gap: "1rem", lineHeight: 1.7, margin: 0 }}>
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: "#d7aa65", color: "#241a16" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "65rem",
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
            Der zentrale Unterschied
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: 1,
              margin: "1rem 0 2.5rem",
            }}
          >
            Politische Intensität ist nicht dasselbe wie politische Eindeutigkeit.
          </h2>
          <p style={{ fontSize: "1.12rem", lineHeight: 1.85, maxWidth: "47rem" }}>
            Ein Bild kann Bewegung, Mut und Empörung stark organisieren und dennoch eine
            begrenzte Vorstellung des Volkes zeigen. Gerade die stärksten politischen
            Bilder verdienen deshalb eine doppelte Lektüre: Wie erzeugen sie Beteiligung,
            und welche Widersprüche werden in dieser Beteiligung vereinfacht?
          </p>
        </div>
      </section>

      <footer style={{ background: "#efe2cf", color: "#241a16" }}>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
          }}
        >
          <Link
            href="/werke/freiheit-fuehrt-das-volk/"
            style={{ border: "1px solid rgb(36 26 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              Freiheit führt das Volk
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Das Modell am konkreten Bild prüfen →
            </span>
          </Link>
          <Link
            href="/kuenstler/eugene-delacroix/"
            style={{ border: "1px solid rgb(36 26 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              Eugène Delacroix
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Farbe, Geschichte und kolonialer Blick →
            </span>
          </Link>
          <Link
            href="/epochen/romantik/"
            style={{ border: "1px solid rgb(36 26 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              Zur Romantik
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Zurück zur Epochenreise →
            </span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
