import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { blakeProfileArtworks } from "@/components/experiences/romanticBlakeArtworkSets";

export const metadata: Metadata = {
  title: "William Blake: Druck, Dichtung und visionäre Mythologie",
  description:
    "Ein vertieftes Künstlerprofil zu William Blake: Ausbildung als Kupferstecher, illuminierte Bücher, private Mythologie, Farbdrucke und das Verhältnis von Vision und gesellschaftlicher Kritik.",
  alternates: {
    canonical: "/kuenstler/william-blake/",
  },
};

const phases = [
  {
    period: "1757–1788",
    title: "Linie, Reproduktion und gotische Vergangenheit",
    text: "Blake wurde als Kupferstecher ausgebildet und lernte Bilder durch präzise Linien, Platten und Druckvorgänge aufzubauen. Seine frühen Zeichnungen mittelalterlicher Monumente schärften den Blick für konturierte Körper, Architektur und eine Vergangenheit, die nicht als überwundene Vorstufe erschien.",
  },
  {
    period: "1789–1794",
    title: "Das Buch wird zum eigenen Bildkörper",
    text: "Mit Songs of Innocence, Songs of Experience und The Marriage of Heaven and Hell entwickelte Blake Bücher, in denen Schrift, Ornament und Figur gemeinsam auf der Platte entstanden. Gedicht und Bild illustrieren einander nicht nachträglich; die Seite selbst wird zur kleinsten Einheit seines Denkens.",
  },
  {
    period: "1793–1805",
    title: "Prophezeiungen und monumentale Einzelbilder",
    text: "In Europe, America und weiteren prophetischen Büchern verband Blake Revolution, Religion und Gegenwart mit einer eigenen Mythologie. Gleichzeitig entstanden großformatige Farbdrucke wie Newton, Nebuchadnezzar und Albion Rose, deren Figuren ganze geistige Zustände verkörpern.",
  },
  {
    period: "1805–1827",
    title: "Biblische Zyklen, Milton und Dante",
    text: "Die späten Arbeiten geben die private Mythologie nicht auf, sondern führen sie in Aufträge und große literarische Systeme hinein. Illustrationen zum Buch Hiob, zu Milton und zur Göttlichen Komödie zeigen Blake als beharrlichen Revisor, der Motive über Jahrzehnte neu druckte, kolorierte und umdeutete.",
  },
] as const;

const methods = [
  {
    title: "Linie als geistige Entscheidung",
    text: "Blakes scharfe Konturen sind keine bloße Stilsignatur. Sie trennen, verbinden und rhythmisieren Körper. Selbst dort, wo Farbe fließt, hält die Linie Figuren als denkende und handelnde Kräfte zusammen.",
  },
  {
    title: "Text und Bild ohne Rangordnung",
    text: "Eine illuminierte Seite verlangt Lesen und Schauen zugleich. Ornament kann eine Zeile öffnen, bedrängen oder ironisieren; Figuren können aus Buchstaben wachsen und den scheinbar stabilen Sinn des Textes verändern.",
  },
  {
    title: "Eigene Namen für moderne Konflikte",
    text: "Urizen, Los, Enitharmon und Albion sind keine sauber definierbaren Allegorien. Sie wechseln Rollen und Beziehungen, weil Blake mit ihnen Vernunft, Begehren, Arbeit, Nation und Vorstellungskraft als bewegliche Systeme untersucht.",
  },
  {
    title: "Mehrere Abzüge, keine endgültige Fassung",
    text: "Druckfarbe, Handkolorierung und spätere Überarbeitung verändern dasselbe Motiv von Exemplar zu Exemplar. Bei Blake ist Vervielfältigung deshalb keine identische Wiederholung, sondern kontrollierte Variation.",
  },
] as const;

export default function WilliamBlakePage() {
  return (
    <article style={{ background: "#141319", color: "#f1eadf", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#d09b58",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Künstlerprofil · Britische Romantik · 1757–1827
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.4rem, 11vw, 9rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".83",
            margin: "1.5rem 0 0",
            maxWidth: "10ch",
          }}
        >
          William
          <span style={{ color: "#d8693f", display: "block", fontStyle: "italic" }}>
            Blake
          </span>
        </h1>
        <p
          style={{
            color: "rgb(241 234 223 / .75)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.62rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "46rem",
          }}
        >
          Blake war nicht einfach ein Dichter, der Bilder hinzufügte, und kein Maler,
          der gelegentlich Verse schrieb. Er baute Bücher, Figuren und ganze
          Kosmologien, in denen Drucktechnik, Sprache, Religion und politische Gegenwart
          untrennbar zusammenarbeiten.
        </p>
      </header>

      <section style={{ background: "#eee3d2", color: "#211a18" }}>
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
            Vier Werke, vier Kräfte
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.4rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".95",
              margin: "1rem 0 3.5rem",
              maxWidth: "13ch",
            }}
          >
            Öffnung, Maß, Versenkung und apokalyptischer Druck.
          </h2>
          <ArtworkStrip
            items={blakeProfileArtworks}
            light
            title="Blakes visuelle Systeme"
          />
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
                  color: "#d09b58",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Kein plötzlicher Wahnsinnsblitz
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 6.5vw, 6rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                  maxWidth: "12ch",
                }}
              >
                Vision war bei Blake handwerklich organisiert.
              </h2>
            </div>
            <div
              style={{
                color: "rgb(241 234 223 / .72)",
                fontSize: "1.12rem",
                lineHeight: 1.85,
              }}
            >
              <p>
                Die populäre Erzählung vom unverstandenen Visionär übersieht, wie
                materiell seine Arbeit war. Platten mussten vorbereitet, rückwärts
                beschriftet, geätzt, eingefärbt, gedruckt und häufig von Hand koloriert
                werden. Blake arbeitete dabei eng mit Catherine Blake zusammen und
                behielt ungewöhnlich viel Kontrolle über Herstellung und
                Zusammenstellung seiner Bücher.
              </p>
              <p>
                Seine Visionen erscheinen deshalb nicht trotz, sondern durch Technik.
                Die wiederkehrenden Figuren bilden ein Labor, in dem Begriffe wie
                Gesetz, Energie, Begehren und Freiheit immer wieder anders angeordnet
                werden.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "5rem",
            }}
          >
            {phases.map((phase) => (
              <section
                key={phase.period}
                style={{
                  borderTop: "1px solid rgb(241 234 223 / .22)",
                  padding: "2rem 0",
                }}
              >
                <p style={{ color: "#d09b58", fontSize: ".74rem", fontWeight: 800 }}>
                  {phase.period}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.05,
                    margin: "1rem 0",
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  style={{
                    color: "rgb(241 234 223 / .68)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {phase.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#2a1a1b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#e6a45e",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Wie Blake arbeitet
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".95",
              margin: "1rem 0 4rem",
              maxWidth: "13ch",
            }}
          >
            Nicht Symbollexikon, sondern bewegliches System.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {methods.map((method, index) => (
              <section
                key={method.title}
                style={{
                  background: "rgb(255 255 255 / .04)",
                  border: "1px solid rgb(255 255 255 / .1)",
                  padding: "2rem",
                }}
              >
                <p style={{ color: "#e6a45e", fontWeight: 800, margin: 0 }}>
                  0{index + 1}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.05,
                    margin: "2rem 0 1rem",
                  }}
                >
                  {method.title}
                </h3>
                <p
                  style={{
                    color: "rgb(241 234 223 / .7)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {method.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: "#eee3d2", color: "#211a18" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
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
            Weiter in Blakes System
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2rem",
            }}
          >
            {[
              [
                "/werke/the-ancient-of-days/",
                "The Ancient of Days",
                "Das Bild als Frontispiz, Druck und Konflikt zwischen Schöpfung und Begrenzung lesen.",
              ],
              [
                "/begriffe/vision-und-prophezeiung/",
                "Vision und Prophezeiung",
                "Verstehen, wie erfundene Mythologie historische Gegenwart kritisiert, ohne einfache Zukunftsvorhersage zu sein.",
              ],
              [
                "/motive/nacht/",
                "Die Nacht",
                "Von romantischer Dunkelheit zu Blakes innerem, apokalyptischem Bildraum weiterdenken.",
              ],
              [
                "/epochen/romantik/",
                "Romantik",
                "Blake mit Friedrich, Turner, Cole, Delacroix und Géricault in Beziehung setzen.",
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
      </footer>
    </article>
  );
}
