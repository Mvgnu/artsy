import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { visionProphecyArtworks } from "@/components/experiences/romanticBlakeArtworkSets";

export const metadata: Metadata = {
  title: "Vision und Prophezeiung in der Romantik",
  description:
    "Ein kunsthistorischer Begriffsguide zu Vision, Prophezeiung und privater Mythologie: Zukunftsvorhersage, Gegenwartsdiagnose, Text-Bild-Beziehung und erfundene Kosmologien bei William Blake.",
  alternates: {
    canonical: "/begriffe/vision-und-prophezeiung/",
  },
};

const distinctions = [
  {
    term: "Vision",
    text: "Eine Vision beansprucht eine Wahrnehmung jenseits des gewöhnlich Sichtbaren. Im Kunstwerk ist sie dennoch gestaltet: durch Komposition, Material, gelernte Bildtraditionen und eine bestimmte Position des Betrachters.",
  },
  {
    term: "Prophezeiung",
    text: "Prophetische Kunst muss keine konkrete Zukunft vorhersagen. Sie kann die Gegenwart in eine andere Zeitskala versetzen, verborgene Folgen sichtbar machen und bestehende Ordnung aus einer radikaleren Perspektive beurteilen.",
  },
  {
    term: "Offenbarung",
    text: "Offenbarung behauptet häufig eine autoritative Quelle. Ein Bild kann diesen Anspruch bestätigen, aber auch zeigen, wie Autorität erzeugt wird: durch Licht, Schrift, Stimme, Körpergröße oder den Ausschluss anderer Perspektiven.",
  },
  {
    term: "Private Mythologie",
    text: "Eigene Figuren und Namen bilden kein abgeschlossenes Fantasylexikon. Sie erlauben Künstlern, moderne Konflikte aus ihren üblichen Begriffen zu lösen und als Beziehungen zwischen Kräften, Körpern und Welten neu anzuordnen.",
  },
] as const;

const questions = [
  "Welche gegenwärtige Ordnung wird in eine andere Zeit, Welt oder Mythologie übersetzt?",
  "Stammen Figuren und Namen aus einer geteilten Tradition, aus einem privaten System oder aus beidem?",
  "Wie erzeugen Licht, Maßstab, Schrift und Körper den Eindruck besonderer Autorität?",
  "Arbeiten Text und Bild zusammen, widersprechen sie sich oder öffnen sie unterschiedliche Lesarten?",
  "Welche Wirkung hat das verwendete Medium — Einzelbild, Buchseite, Druckfolge oder handkolorierter Abzug?",
  "Was bleibt absichtlich unaufgelöst und verhindert eine einfache Übersetzung in eine Botschaft?",
] as const;

const traps = [
  {
    title: "Vision mit spontaner Eingebung verwechseln",
    text: "Auch ein visionäres Bild entsteht durch Auswahl, Revision und Technik. Der Hinweis auf Inspiration erklärt noch nicht, wie ein Werk seine Wirkung organisiert.",
  },
  {
    title: "Jede Figur einmalig festlegen",
    text: "In privaten Mythologien können Figuren ihre Funktion verändern. Ein Name ist deshalb besser als Knoten in einem Beziehungsnetz zu lesen als als Karteikarte mit endgültiger Bedeutung.",
  },
  {
    title: "Prophezeiung nur rückwärts auf Erfüllung prüfen",
    text: "Die Frage, ob eine Zukunft korrekt vorhergesagt wurde, verengt das Werk. Interessanter ist, welche Gegenwartskritik durch den prophetischen Abstand möglich wird.",
  },
  {
    title: "Religiöse Sprache für unpolitisch halten",
    text: "Biblische, apokalyptische und kosmologische Formen können sehr konkrete Konflikte über Arbeit, Armut, Sexualität, Nation, Revolution und institutionelle Macht tragen.",
  },
] as const;

export default function VisionUndProphezeiungPage() {
  return (
    <article style={{ background: "#15141a", color: "#f2eadf", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#dca254",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Begriff verstehen · Romantik
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.9rem, 10vw, 8.2rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".85",
            margin: "1.5rem 0 0",
            maxWidth: "12ch",
          }}
        >
          Vision und
          <span style={{ color: "#d96b43", display: "block", fontStyle: "italic" }}>
            Prophezeiung
          </span>
        </h1>
        <p
          style={{
            color: "rgb(242 234 223 / .75)",
            fontSize: "clamp(1.18rem, 2.2vw, 1.58rem)",
            lineHeight: 1.75,
            margin: "3.5rem 0 0 auto",
            maxWidth: "47rem",
          }}
        >
          Prophetische Kunst zeigt nicht einfach, was später geschehen wird. Sie baut
          einen Abstand zur Gegenwart, in dem Macht, Religion, Vernunft und Begehren als
          Teile eines anderen Systems sichtbar werden. William Blake macht diesen
          Abstand selbst zum Medium seiner Kunst.
        </p>
      </header>

      <section style={{ background: "#eee2d0", color: "#211a18" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#965033",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Begriffe auseinanderhalten
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".95",
              margin: "1rem 0 4rem",
              maxWidth: "14ch",
            }}
          >
            Das Unsichtbare ist nicht automatisch dasselbe.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {distinctions.map((item) => (
              <section
                key={item.term}
                style={{ border: "1px solid rgb(33 26 24 / .2)", padding: "2rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.25rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.term}
                </h3>
                <p style={{ color: "rgb(33 26 24 / .72)", lineHeight: 1.78 }}>
                  {item.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "4rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 25rem), 1fr))",
            }}
          >
            <div>
              <p
                style={{
                  color: "#dca254",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Blakes entscheidender Schritt
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3.1rem, 7vw, 6.2rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".95",
                  margin: "1rem 0 0",
                  maxWidth: "12ch",
                }}
              >
                Er illustriert kein fertiges System. Er druckt eines in Bewegung.
              </h2>
            </div>
            <div
              style={{
                color: "rgb(242 234 223 / .72)",
                fontSize: "1.12rem",
                lineHeight: 1.85,
              }}
            >
              <p>
                In Blakes illuminierten Büchern stehen Gedicht, Figur und Ornament auf
                derselben Platte. Dadurch gibt es keinen neutralen Text, der später
                bebildert wird. Leserichtung, Rand, Farbe und Schriftbild gehören zur
                Aussage.
              </p>
              <p>
                Die eigenen Namen schaffen Distanz zu vertrauten politischen und
                theologischen Kategorien. Doch diese Distanz ist kein Rückzug aus der
                Geschichte. Revolution, Repression, Kinderarbeit, Armut, Sexualmoral und
                religiöse Herrschaft werden in eine kosmische Konfliktsprache übersetzt.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "5rem" }}>
            <ArtworkStrip
              items={visionProphecyArtworks}
              title="Vier Formen visionärer Autorität"
            />
          </div>
        </div>
      </section>

      <section style={{ background: "#2d1d20" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#e8aa62",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Fragen an ein visionäres Bild
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".95",
              margin: "1rem 0 4rem",
              maxWidth: "13ch",
            }}
          >
            Erst Form und Funktion prüfen, dann Symbole benennen.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
            }}
          >
            {questions.map((question, index) => (
              <article
                key={question}
                style={{
                  background: "rgb(255 255 255 / .04)",
                  border: "1px solid rgb(255 255 255 / .1)",
                  minHeight: "13rem",
                  padding: "2rem",
                }}
              >
                <p style={{ color: "#e8aa62", fontWeight: 800, margin: 0 }}>
                  0{index + 1}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    lineHeight: 1.15,
                    margin: "2rem 0 0",
                  }}
                >
                  {question}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#eee2d0", color: "#211a18" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#965033",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier häufige Kurzschlüsse
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {traps.map((trap) => (
              <section
                key={trap.title}
                style={{ borderTop: "2px solid #965033", padding: "1.75rem 0" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.08,
                    margin: 0,
                  }}
                >
                  {trap.title}
                </h3>
                <p style={{ color: "rgb(33 26 24 / .72)", lineHeight: 1.75 }}>
                  {trap.text}
                </p>
              </section>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "4rem",
            }}
          >
            {[
              [
                "/kuenstler/william-blake/",
                "William Blake",
                "Das technische und biografische Gerüst hinter der visionären Bildwelt kennenlernen.",
              ],
              [
                "/werke/the-ancient-of-days/",
                "The Ancient of Days",
                "Urizen, Zirkel und Frontispiz als konkreten Testfall lesen.",
              ],
              [
                "/motive/nacht/",
                "Die Nacht",
                "Visionäre Innenräume mit romantischer Dunkelheit, Mondlicht und eingeschränkter Wahrnehmung vergleichen.",
              ],
              [
                "/begriffe/katastrophe-und-zeugenschaft/",
                "Katastrophe und Zeugenschaft",
                "Prüfen, wie prophetische Distanz und dokumentarischer Anspruch unterschiedlich Geschichte formen.",
              ],
            ].map(([href, title, text]) => (
              <Link
                href={href!}
                key={href}
                style={{
                  border: "1px solid rgb(33 26 24 / .2)",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "15rem",
                  padding: "1.75rem",
                  textDecoration: "none",
                }}
              >
                <strong
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                  }}
                >
                  {title}
                </strong>
                <p style={{ color: "rgb(33 26 24 / .72)", lineHeight: 1.7 }}>{text}</p>
                <span style={{ fontWeight: 800, marginTop: "auto" }}>Öffnen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
