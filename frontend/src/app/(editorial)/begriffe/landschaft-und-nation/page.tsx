import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landschaft und Nation: Wie Bilder Land politisch machen",
  description:
    "Ein Begriffsdossier über Landschaft, Nation, Wildnis, Eigentum und Erinnerung in der Kunst der Romantik.",
  alternates: {
    canonical: "/begriffe/landschaft-und-nation/",
  },
};

const mechanisms = [
  {
    title: "Aus Land wird Bedeutung",
    text: "Ein Landschaftsbild zeigt nicht nur Gelände. Es ordnet, welche Orte als schön, wild, fruchtbar, gefährlich, leer oder schützenswert erscheinen. Damit verteilt es kulturellen Wert.",
  },
  {
    title: "Der Blick erzeugt Besitznähe",
    text: "Panoramen und erhöhte Standpunkte machen große Räume überschaubar. Was überblickt werden kann, wirkt leichter benennbar, vermessbar und verfügbar.",
  },
  {
    title: "Abwesenheit wird zur Erzählung",
    text: "Wenn Arbeit, Besiedlung oder indigene Präsenz aus einem Bild verschwinden, erscheint Landschaft zeitlos und unberührt. Diese Leere ist häufig hergestellt, nicht gefunden.",
  },
  {
    title: "Natur stützt Zukunftsbilder",
    text: "Landschaft kann Fortschritt legitimieren oder vor ihm warnen. Sie kann Expansion als Schicksal, Nation als natürliche Gemeinschaft oder Zerstörung als moralischen Verfall darstellen.",
  },
] as const;

const questions = [
  "Von welchem Standort aus wird das Land betrachtet?",
  "Welche menschlichen Spuren sind sichtbar – und welche fehlen?",
  "Was erscheint als natürlich, obwohl es politisch oder wirtschaftlich erzeugt wurde?",
  "Welche Zukunft verspricht oder befürchtet das Bild?",
  "Wer darf das Land benennen, nutzen und als Heimat darstellen?",
  "Welche Geschichte wird durch die Kategorie Wildnis verdrängt?",
] as const;

export default function LandscapeNationPage() {
  return (
    <article style={{ background: "#ede6d6", color: "#17201d", minHeight: "100vh" }}>
      <header
        style={{
          background: "#183028",
          color: "#f4eddc",
          padding: "clamp(7rem, 14vw, 12rem) 1.25rem",
        }}
      >
        <div style={{ width: "min(80rem, 100%)", margin: "0 auto" }}>
          <p style={{ color: "#d6b16d", fontWeight: 800, letterSpacing: ".18em" }}>
            BEGRIFFSDOSSIER
          </p>
          <h1
            style={{
              maxWidth: "11ch",
              margin: "1rem 0 2rem",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4.5rem, 11vw, 9rem)",
              fontWeight: 500,
              letterSpacing: "-.06em",
              lineHeight: 0.86,
            }}
          >
            Landschaft und Nation
          </h1>
          <p style={{ maxWidth: "46rem", fontSize: "1.3rem", lineHeight: 1.78 }}>
            Nationen erscheinen oft als politische Institutionen. In Bildern wirken sie
            jedoch häufig wie Natur: als Berge, Flüsse, Küsten, Felder und Horizonte.
            Gerade diese Natürlichkeit muss erklärt werden.
          </p>
        </div>
      </header>

      <section
        style={{
          width: "min(78rem, calc(100% - 2.5rem))",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) 0",
        }}
      >
        <p style={{ color: "#8a5a37", fontWeight: 800, letterSpacing: ".18em" }}>
          GRUNDIDEE
        </p>
        <h2
          style={{
            maxWidth: "15ch",
            margin: "1rem 0 3rem",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.2rem, 8vw, 7rem)",
            fontWeight: 500,
            letterSpacing: "-.05em",
            lineHeight: 0.95,
          }}
        >
          Landschaft ist keine neutrale Bühne für Geschichte.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
            gap: "2rem",
          }}
        >
          <p style={{ fontSize: "1.16rem", lineHeight: 1.9 }}>
            Ein Landschaftsbild wählt aus, rahmt und ordnet. Es entscheidet, wo der
            Horizont liegt, welche Spuren menschlicher Nutzung sichtbar sind und welche
            Form von Natur als charakteristisch für ein Land gilt. Diese Entscheidungen
            können nationale Identität stabilisieren, auch wenn kein Wappen und keine
            Flagge vorkommen.
          </p>
          <p style={{ fontSize: "1.16rem", lineHeight: 1.9 }}>
            In der Romantik wurde Landschaft besonders wirksam, weil Gefühl, Geschichte
            und Natur miteinander verschmolzen. Der Blick auf einen Fluss oder ein
            Gebirge konnte zugleich Erinnerung, Zukunftsversprechen und politische
            Besitzvorstellung sein.
          </p>
        </div>
      </section>

      <section style={{ background: "#cbbb96" }}>
        <div
          style={{
            width: "min(78rem, calc(100% - 2.5rem))",
            margin: "0 auto",
            padding: "clamp(6rem, 12vw, 10rem) 0",
          }}
        >
          <p style={{ color: "#5b3827", fontWeight: 800, letterSpacing: ".18em" }}>
            VIER MECHANISMEN
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              gap: "1rem",
              marginTop: "3rem",
            }}
          >
            {mechanisms.map((mechanism, index) => (
              <article
                key={mechanism.title}
                style={{
                  padding: "2rem",
                  background: "rgb(237 230 214 / .48)",
                  border: "1px solid rgb(23 32 29 / .18)",
                }}
              >
                <span style={{ color: "#70452d", fontWeight: 800 }}>0{index + 1}</span>
                <h3
                  style={{
                    margin: "3rem 0 1rem",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                  }}
                >
                  {mechanism.title}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.8 }}>{mechanism.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#17201d", color: "#f2ead8" }}>
        <div
          style={{
            width: "min(78rem, calc(100% - 2.5rem))",
            margin: "0 auto",
            padding: "clamp(6rem, 12vw, 10rem) 0",
          }}
        >
          <p style={{ color: "#d6b16d", fontWeight: 800, letterSpacing: ".18em" }}>
            DAS PROBLEM DER WILDNIS
          </p>
          <h2
            style={{
              maxWidth: "15ch",
              margin: "1rem 0 2rem",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              lineHeight: 0.98,
            }}
          >
            „Unberührt“ kann eine Form politischer Unsichtbarkeit sein.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
              gap: "2rem",
            }}
          >
            <p
              style={{
                color: "rgb(242 234 216 / .78)",
                fontSize: "1.1rem",
                lineHeight: 1.9,
              }}
            >
              Der Begriff Wildnis kann reale ökologische Eigenständigkeit und
              Schutzbedürftigkeit benennen. In nationalen Bildwelten wurde er aber auch
              verwendet, um Land als leer, ursprünglich und verfügbar erscheinen zu
              lassen. So verschwanden indigene Nutzung, Souveränität und Vertreibung aus
              dem sichtbaren Raum.
            </p>
            <p
              style={{
                color: "rgb(242 234 216 / .78)",
                fontSize: "1.1rem",
                lineHeight: 1.9,
              }}
            >
              Eine kritische Bildanalyse muss deshalb zwei Dinge gleichzeitig können:
              die ästhetische und ökologische Kraft von Landschaft ernst nehmen und
              fragen, welche politische Arbeit die Vorstellung unberührter Natur
              leistet.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          width: "min(78rem, calc(100% - 2.5rem))",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) 0",
        }}
      >
        <p style={{ color: "#8a5a37", fontWeight: 800, letterSpacing: ".18em" }}>
          THOMAS COLE ALS FALLSTUDIE
        </p>
        <h2
          style={{
            maxWidth: "16ch",
            margin: "1rem 0 2rem",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 500,
            lineHeight: 0.98,
          }}
        >
          The Oxbow macht den nationalen Konflikt sichtbar.
        </h2>
        <p style={{ maxWidth: "50rem", fontSize: "1.16rem", lineHeight: 1.9 }}>
          In Coles Bild stehen dunkler Wald und kultivierte Ebene einander gegenüber.
          Der erhöhte Blick fasst das Land zu einem Panorama zusammen, während der
          winzige Maler seine eigene Position offenlegt. Das Werk kann als Sorge um
          verschwindende Natur, als Feier menschlicher Ordnung und als Kritik an
          territorialer Verfügbarkeit gelesen werden. Seine Stärke liegt darin, dass
          diese Lesarten einander nicht vollständig ablösen.
        </p>
        <div
          style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
        >
          <Link href="/werke/the-oxbow-thomas-cole/">The Oxbow genau lesen →</Link>
          <Link href="/kuenstler/thomas-cole/">Thomas Cole kennenlernen →</Link>
        </div>
      </section>

      <section style={{ background: "#d6c8a9" }}>
        <div
          style={{
            width: "min(78rem, calc(100% - 2.5rem))",
            margin: "0 auto",
            padding: "clamp(6rem, 12vw, 10rem) 0",
          }}
        >
          <p style={{ color: "#68412c", fontWeight: 800, letterSpacing: ".18em" }}>
            SECHS FRAGEN AN JEDES LANDSCHAFTSBILD
          </p>
          <ol
            style={{
              margin: "3rem 0 0",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "1px",
              background: "rgb(23 32 29 / .2)",
            }}
          >
            {questions.map((question, index) => (
              <li
                key={question}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4rem 1fr",
                  gap: "1rem",
                  padding: "1.5rem",
                  background: "#e2d7bf",
                  alignItems: "start",
                }}
              >
                <strong>0{index + 1}</strong>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.7rem",
                    lineHeight: 1.25,
                  }}
                >
                  {question}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        style={{
          width: "min(78rem, calc(100% - 2.5rem))",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) 0",
        }}
      >
        <p style={{ color: "#8a5a37", fontWeight: 800, letterSpacing: ".18em" }}>
          VERGLEICH INNERHALB DER ROMANTIK
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          <article style={{ padding: "2rem", border: "1px solid rgb(23 32 29 / .2)" }}>
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              Friedrich
            </h3>
            <p style={{ lineHeight: 1.8 }}>
              Landschaft wird zum inneren, spirituellen und gemeinschaftlichen Denkraum.
            </p>
          </article>
          <article style={{ padding: "2rem", border: "1px solid rgb(23 32 29 / .2)" }}>
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              Turner
            </h3>
            <p style={{ lineHeight: 1.8 }}>
              Landschaft destabilisiert Wahrnehmung und zeigt Natur, Technik und Gewalt
              als Kräftefeld.
            </p>
          </article>
          <article style={{ padding: "2rem", border: "1px solid rgb(23 32 29 / .2)" }}>
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              Cole
            </h3>
            <p style={{ lineHeight: 1.8 }}>
              Landschaft wird zur nationalen Geschichts- und Zukunftserzählung.
            </p>
          </article>
        </div>
      </section>

      <footer style={{ background: "#183028", color: "#f4eddc" }}>
        <div
          style={{
            width: "min(78rem, calc(100% - 2.5rem))",
            margin: "0 auto",
            padding: "5rem 0 7rem",
          }}
        >
          <p style={{ color: "#d6b16d", fontWeight: 800, letterSpacing: ".18em" }}>
            WEITERLESEN
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <Link href="/werke/the-oxbow-thomas-cole/">The Oxbow analysieren →</Link>
            <Link href="/kuenstler/thomas-cole/">Thomas Cole kennenlernen →</Link>
            <Link href="/begriffe/das-erhabene/">Das Erhabene vergleichen →</Link>
            <Link href="/epochen/romantik/">Zurück zur Romantik →</Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
