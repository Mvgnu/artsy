import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { goyaProfileArtworks } from "@/components/experiences/romanticGoyaArtworkSets";

export const metadata: Metadata = {
  title: "Francisco Goya: Hof, Krieg und die dunkle Moderne",
  description:
    "Ein vertieftes Künstlerprofil zu Francisco Goya: Teppichkartons, Hofporträts, Caprichos, Krieg, Schwarze Malereien und die Krise von Vernunft und Macht.",
  alternates: {
    canonical: "/kuenstler/francisco-goya/",
  },
};

const phases = [
  {
    period: "1746–1792",
    title: "Vom Provinzkünstler zum Hofmaler",
    text: "Goya arbeitete zunächst für kirchliche Auftraggeber und die königliche Teppichmanufaktur. Die Kartons zeigen Feste, Spiele, Mode und soziale Rollen in heller Farbigkeit. Schon hier beobachtet er Gesten, Blicke und Hierarchien genauer, als es die dekorative Funktion erwarten lässt.",
  },
  {
    period: "1792–1807",
    title: "Krankheit, Druckgrafik und gesellschaftliche Kritik",
    text: "Nach einer schweren Erkrankung, die ihn dauerhaft taub machte, wurde Goyas Kunst stärker von privater Arbeit und Druckgrafik geprägt. In den Caprichos untersucht er Aberglauben, Eitelkeit, sexuelle Doppelmoral, Gewalt und institutionelle Dummheit. Fantastische Wesen sind dabei keine Flucht aus der Gesellschaft, sondern ihre zugespitzte Diagnose.",
  },
  {
    period: "1808–1814",
    title: "Besatzung, Aufstand und Krieg ohne Heldensicherheit",
    text: "Die napoleonische Invasion Spaniens und der anschließende Krieg verschoben Goyas Blick grundlegend. Der 2. und 3. Mai 1808 sowie die Disasters of War zeigen Gewalt nicht als klare nationale Heldenerzählung, sondern als Chaos, Exekution, Hunger, Verstümmelung und Wiederholung.",
  },
  {
    period: "1814–1828",
    title: "Späte Isolation und private Wandbilder",
    text: "In den sogenannten Schwarzen Malereien erscheinen Mythos, Alter, Angst, Gewalt und religiöse Masse ohne öffentliche Auftragssituation. Die Bilder wurden direkt auf die Wände seines Hauses gemalt. Ihre heutige Form ist Ergebnis späterer Übertragung auf Leinwand, doch ihre enge, private Bildwelt bleibt entscheidend.",
  },
] as const;

const methods = [
  {
    title: "Nähe ohne moralische Bequemlichkeit",
    text: "Goya führt den Betrachter dicht an Opfer, Täter und Zuschauer heran, ohne eine sichere Position außerhalb der Szene anzubieten. Blickbeziehungen und Bildränder machen Mitsehen zu einer belasteten Handlung.",
  },
  {
    title: "Serien statt Einzelikonen",
    text: "Caprichos und Disasters of War denken in Folgen. Bedeutung entsteht durch Wiederholung, Variation und Brüche zwischen Blättern. Gewalt wird dadurch nicht zum außergewöhnlichen Höhepunkt, sondern zu einem System.",
  },
  {
    title: "Ironische Titel als zweite Stimme",
    text: "Viele Drucke erhalten durch ihre Bildunterschriften eine bissige Gegenstimme. Der Text erklärt nicht neutral, sondern verschärft Widersprüche, entlarvt heroische Sprache oder macht den Betrachter zum Adressaten.",
  },
  {
    title: "Das Ungeheuerliche bleibt menschlich",
    text: "Hexen, Dämonen und mythologische Körper externalisieren Angst, aber sie ersetzen keine sozialen Ursachen. Goyas Fantastik bleibt mit Herrschaft, Aberglauben, Gewalt, Sexualität und institutioneller Vernunft verknüpft.",
  },
] as const;

export default function FranciscoGoyaPage() {
  return (
    <article style={{ background: "#16120f", color: "#f1e6d5", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#c48e56",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Künstlerprofil · Spanische Romantik und Moderne
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          Francisco
          <span style={{ color: "#a44932", display: "block", fontStyle: "italic" }}>
            Goya
          </span>
        </h1>
        <p
          style={{
            color: "rgb(241 230 213 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "46rem",
          }}
        >
          Goya bewegte sich zwischen Hof und Straße, Auftrag und privater Wand,
          Ölmalerei und Druckgrafik. Seine Kunst zeigt nicht einfach den Sieg des
          Irrationalen über die Vernunft. Sie untersucht, wie Vernunft, Macht,
          Aberglaube und Fantasie ineinander kippen können.
        </p>
      </header>

      <section style={{ background: "#e9dfcf", color: "#211b17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
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
            Vier Werke, vier Öffentlichkeiten
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 3.5rem",
              maxWidth: "14ch",
            }}
          >
            Von höfischer Oberfläche zu privater Finsternis.
          </h2>
          <ArtworkStrip
            items={goyaProfileArtworks}
            light
            title="Goyas wechselnde Bildwelten"
          />
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c48e56",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Karriere in vier Brüchen
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {phases.map((phase) => (
              <article
                key={phase.period}
                style={{
                  border: "1px solid rgb(241 230 213 / .16)",
                  minHeight: "23rem",
                  padding: "2rem",
                }}
              >
                <p style={{ color: "#c48e56", fontWeight: 800 }}>{phase.period}</p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.3rem",
                    fontWeight: 500,
                    letterSpacing: "-.035em",
                    lineHeight: 1.03,
                  }}
                >
                  {phase.title}
                </h2>
                <p style={{ color: "rgb(241 230 213 / .7)", lineHeight: 1.75 }}>
                  {phase.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#281d18" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d0a66a",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Wie Goya arbeitet
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {methods.map((method) => (
              <article
                key={method.title}
                style={{
                  background: "rgb(255 255 255 / .035)",
                  minHeight: "18rem",
                  padding: "2rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.15rem",
                    fontWeight: 500,
                    letterSpacing: "-.035em",
                    lineHeight: 1.04,
                  }}
                >
                  {method.title}
                </h2>
                <p style={{ color: "rgb(241 230 213 / .7)", lineHeight: 1.75 }}>
                  {method.text}
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
            maxWidth: "74rem",
            padding: "clamp(6rem, 12vw, 11rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#c48e56",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Nicht nur Vorläufer der Moderne
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.2rem, 8vw, 6.8rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".94",
              margin: "1rem 0 2.5rem",
            }}
          >
            Goya ist interessant, weil seine Bilder mehrere Ordnungen zugleich bewohnen.
          </h2>
          <div
            style={{
              color: "rgb(241 230 213 / .74)",
              display: "grid",
              fontSize: "1.15rem",
              gap: "1.5rem",
              lineHeight: 1.8,
            }}
          >
            <p>
              Er war Hofmaler und scharfer Beobachter höfischer Macht. Er arbeitete für
              öffentliche Erinnerung und produzierte zugleich Bildfolgen, die erst
              später vollständig publiziert wurden. Er malte religiöse und mythologische
              Stoffe, ohne ihre Autorität einfach zu bestätigen.
            </p>
            <p>
              Gerade diese Übergänge machen Goya für die Romantik wichtig. Das Dunkle
              ist bei ihm weder bloß Stimmung noch private Psychologie. Es entsteht
              dort, wo politische Gewalt, soziale Rollen, Fantasie und institutionelle
              Vernunft ihre Grenzen offenlegen.
            </p>
          </div>

          <nav
            aria-label="Weiterführende Goya-Wege"
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              marginTop: "4rem",
            }}
          >
            {[
              ["Der 3. Mai 1808 lesen", "/werke/der-dritte-mai-1808/"],
              ["Dunkle Romantik verstehen", "/begriffe/dunkle-romantik/"],
              [
                "Katastrophe und Zeugenschaft",
                "/begriffe/katastrophe-und-zeugenschaft/",
              ],
            ].map(([label, href]) => (
              <Link
                href={href!}
                key={href}
                style={{
                  border: "1px solid rgb(241 230 213 / .18)",
                  color: "inherit",
                  padding: "1.5rem",
                  textDecoration: "none",
                }}
              >
                {label} →
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </article>
  );
}
