import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { darkRomanticismArtworks } from "@/components/experiences/romanticGoyaArtworkSets";

export const metadata: Metadata = {
  title: "Dunkle Romantik: Vernunft, Angst und das Ungeheuerliche",
  description:
    "Was dunkle Romantik bedeutet: Goya, Albtraum, Gewalt, Aberglaube, institutionelle Vernunft, leere Räume und sechs Fragen zur Bildanalyse.",
  alternates: {
    canonical: "/begriffe/dunkle-romantik/",
  },
};

const distinctions = [
  {
    term: "Dunkelheit",
    text: "ist zunächst eine optische Bedingung. Weniger Sichtbarkeit verändert Orientierung, Nähe, Zeitgefühl und die Verteilung von Aufmerksamkeit.",
  },
  {
    term: "Angst",
    text: "ist eine Reaktion auf eine erwartete oder unbestimmte Gefahr. Bilder können Angst darstellen, erzeugen oder analysieren, ohne selbst irrational zu sein.",
  },
  {
    term: "Das Unheimliche",
    text: "entsteht, wenn etwas Vertrautes fremd zurückkehrt: ein Haus, ein Körper, eine Familie, ein Ritual oder eine vernünftige Ordnung, die plötzlich bedrohlich wirkt.",
  },
  {
    term: "Dunkle Romantik",
    text: "bezeichnet keine einzige Stilform. Sie untersucht, wie Vernunft, Begehren, Schuld, Herrschaft und Fantasie ihre verdrängten oder zerstörerischen Seiten sichtbar machen.",
  },
] as const;

const functions = [
  {
    title: "Vernunft kann selbst zum Instrument werden.",
    text: "Gewehre, Verwaltung, Messung und Disziplin sind nicht das Gegenteil des Ungeheuerlichen. In Goyas Bildern können sie Gewalt effizient organisieren und moralische Verantwortung in Funktionen aufteilen.",
  },
  {
    title: "Fantasie diagnostiziert statt nur zu fliehen.",
    text: "Hexen, Dämonen und groteske Körper verdichten soziale Ängste, Aberglauben, sexuelle Macht und institutionelle Heuchelei. Das Fantastische macht reale Beziehungen sichtbar, indem es sie übersteigert.",
  },
  {
    title: "Der Körper verliert seine sichere Grenze.",
    text: "Verschlingen, Verstümmeln, Verbergen und Verwandeln bedrohen die Vorstellung eines autonomen Körpers. Gewalt erscheint als materieller Prozess, der Identität und Handlungsmacht verändert.",
  },
  {
    title: "Leere kann belastender sein als Spektakel.",
    text: "Der Hund zeigt kaum Handlung und fast keinen erzählerischen Kontext. Gerade die große unbestimmte Fläche macht Erwartung, Isolation und fehlende Antwort zum eigentlichen Gegenstand.",
  },
] as const;

const questions = [
  "Welche vernünftige, religiöse oder soziale Ordnung wird im Bild behauptet?",
  "Wo zeigt das Bild, dass diese Ordnung versagt, kippt oder Gewalt produziert?",
  "Ist die Bedrohung sichtbar verkörpert oder nur als Leerstelle, Blick und Erwartung vorhanden?",
  "Welche Rolle spielen Titel, Serienzusammenhang, Auftrag und ursprünglicher Ausstellungsort?",
  "Gibt das Bild dem Betrachter eine sichere Außenposition oder verwickelt es ihn in das Geschehen?",
  "Was bleibt konkret historisch, und was öffnet sich zu einer allgemeineren psychischen oder politischen Lesart?",
] as const;

const traps = [
  {
    title: "Alles Dunkle ist automatisch romantisch.",
    text: "Schwarzer Grund, Nacht oder Gewalt genügen nicht. Entscheidend ist, wie das Bild Subjekt, Vernunft, Natur, Geschichte und Vorstellungskraft neu gegeneinander ordnet.",
  },
  {
    title: "Das Monster kommt nur von außen.",
    text: "Viele dunkle Bilder zeigen Bedrohung als Produkt vertrauter Institutionen, Familienverhältnisse, Herrschaftsformen oder verdrängter Wünsche.",
  },
  {
    title: "Irrationalität ersetzt jede Analyse.",
    text: "Goya konstruiert seine Druckfolgen, Titel und Kompositionen äußerst bewusst. Kontrollierte Bildarbeit kann gerade dazu dienen, Kontrollverlust präzise zu untersuchen.",
  },
  {
    title: "Biografie erklärt das ganze Bild.",
    text: "Krankheit, Alter und Isolation sind relevant, aber sie dürfen politische Ereignisse, Mediengeschichte, Auftrag, Serienstruktur und kulturelle Bildtraditionen nicht ersetzen.",
  },
] as const;

export default function DarkRomanticismPage() {
  return (
    <article style={{ background: "#121011", color: "#eee5d8", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#bd8657",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Begriff verstehen · Dunkle Romantik
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
          Wenn die
          <span style={{ color: "#994431", display: "block", fontStyle: "italic" }}>
            Ordnung zurückschlägt
          </span>
        </h1>
        <p
          style={{
            color: "rgb(238 229 216 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "47rem",
          }}
        >
          Dunkle Romantik ist nicht bloß Kunst mit Monstern, Nacht und Blut. Sie beginnt
          dort, wo vertraute Ordnungen ihre verdrängten Kosten zeigen: Vernunft wird
          technisch kalt, Familie zerstörerisch, Religion massenhaft, Fantasie politisch
          und der eigene Körper unsicher.
        </p>
      </header>

      <section style={{ background: "#e8ddcf", color: "#211a17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#8e4b35",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Begriffe auseinanderhalten
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {distinctions.map((distinction) => (
              <article
                key={distinction.term}
                style={{
                  borderTop: "1px solid rgb(33 26 23 / .26)",
                  minHeight: "17rem",
                  padding: "1.5rem 0",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    letterSpacing: "-.04em",
                    lineHeight: 1,
                  }}
                >
                  {distinction.term}
                </h2>
                <p style={{ lineHeight: 1.75 }}>{distinction.text}</p>
              </article>
            ))}
          </div>
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
              color: "#bd8657",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier visuelle Funktionen
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
            Kritik, Masse, Verschlingen und Leere.
          </h2>
          <ArtworkStrip
            items={darkRomanticismArtworks}
            title="Vier Formen des Dunklen"
          />
        </div>
      </section>

      <section style={{ background: "#281d1a" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d0a06b",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Was dunkle Bilder leisten
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {functions.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "rgb(255 255 255 / .035)",
                  minHeight: "20rem",
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
                  {item.title}
                </h2>
                <p style={{ color: "rgb(238 229 216 / .7)", lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#e8ddcf", color: "#211a17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "78rem",
            padding: "clamp(6rem, 12vw, 11rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#8e4b35",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Fragen an ein dunkles Bild
          </p>
          <ol
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              listStyle: "none",
              margin: "2.5rem 0 0",
              padding: 0,
            }}
          >
            {questions.map((question, index) => (
              <li
                key={question}
                style={{
                  borderTop: "1px solid rgb(33 26 23 / .25)",
                  fontSize: "1.15rem",
                  lineHeight: 1.65,
                  padding: "1.5rem 0",
                }}
              >
                <span style={{ color: "#8e4b35", display: "block", fontWeight: 800 }}>
                  0{index + 1}
                </span>
                {question}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 12vw, 11rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#bd8657",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Lesefallen
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
              <article
                key={trap.title}
                style={{
                  border: "1px solid rgb(238 229 216 / .16)",
                  minHeight: "18rem",
                  padding: "2rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    letterSpacing: "-.03em",
                    lineHeight: 1.05,
                  }}
                >
                  {trap.title}
                </h2>
                <p style={{ color: "rgb(238 229 216 / .7)", lineHeight: 1.75 }}>
                  {trap.text}
                </p>
              </article>
            ))}
          </div>

          <nav
            aria-label="Weiterführende Wege"
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              marginTop: "4rem",
            }}
          >
            {[
              ["Francisco Goya kennenlernen", "/kuenstler/francisco-goya/"],
              ["Der 3. Mai 1808 lesen", "/werke/der-dritte-mai-1808/"],
              ["Vision und Prophezeiung", "/begriffe/vision-und-prophezeiung/"],
            ].map(([label, href]) => (
              <Link
                href={href!}
                key={href}
                style={{
                  border: "1px solid rgb(238 229 216 / .18)",
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
