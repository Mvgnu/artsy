import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { raftContextArtworks } from "@/components/experiences/romanticismArtworkSets";

export const metadata: Metadata = {
  title: "Das Floß der Medusa: Géricaults Katastrophenbild lesen",
  description:
    "Eine vertiefte Bildanalyse von Théodore Géricaults Das Floß der Medusa: Komposition, Überlebende, Tote, Joseph, Rettung, Staatsversagen und Zeugenschaft.",
  alternates: {
    canonical: "/werke/das-floss-der-medusa/",
  },
};

const imageUrl =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Raft%20of%20the%20Medusa.jpg";

const observations = [
  {
    number: "01",
    title: "Zwei Pyramiden organisieren Verzweiflung und Hoffnung.",
    text: "Links sinkt die Gruppe in tote und erschöpfte Körper zurück. Rechts steigt sie über Gesten, Tücher und ausgestreckte Arme zu den winkenden Figuren an. Der Aufbau verspricht Bewegung, doch beide Pyramiden stehen auf demselben instabilen Floß.",
  },
  {
    number: "02",
    title: "Das Rettungsschiff ist sichtbar und beinahe nicht vorhanden.",
    text: "Am Horizont erscheint die Argus als winziger heller Punkt. Diese extreme Distanz macht Hoffnung real, aber nicht sicher. Der Betrachter erkennt mehr als viele Figuren und teilt trotzdem nicht die Gewissheit einer tatsächlichen Rettung.",
  },
  {
    number: "03",
    title: "Der Vordergrund verweigert den heroischen Einstieg.",
    text: "Tote und sterbende Körper liegen so nah, dass die Bildfläche fast zur physischen Schwelle wird. Der alte Mann, der einen jüngeren Toten hält, stoppt die Aufwärtsbewegung und bindet private Trauer an den öffentlichen Skandal.",
  },
  {
    number: "04",
    title: "Joseph trägt die höchste Hoffnung – aber nicht allein.",
    text: "Der Schwarze Modellathlet Joseph stand für die winkende Figur an der Spitze. Seine Position ist formal zentral und wurde oft abolitionistisch gelesen. Doch die Bedeutung entsteht innerhalb einer Gruppe, deren Schwarze Figuren sichtbar sind, ohne dass das Bild ihre individuellen Geschichten vollständig erzählt.",
  },
] as const;

const tensions = [
  {
    title: "Dokument oder Konstruktion?",
    text: "Géricault recherchierte intensiv und sprach mit Überlebenden. Trotzdem zeigt das Gemälde keinen fotografisch fixierten Moment. Körper, Wetter und Rettung wurden für maximale Spannung neu geordnet.",
  },
  {
    title: "Zeugenschaft oder Spektakel?",
    text: "Die monumentale Größe zwingt Aufmerksamkeit auf einen politischen Skandal. Zugleich macht dieselbe Größe Leid ästhetisch überwältigend. Kritisches Sehen muss beides gleichzeitig festhalten.",
  },
  {
    title: "Naturkatastrophe oder Staatsversagen?",
    text: "Das Meer bedroht die Menschen, doch der Ausgangspunkt war menschliche Fehlentscheidung: inkompetente Führung, privilegierte Rettungsboote und das Zurücklassen des Floßes. Die Natur darf die politische Verantwortung nicht verschleiern.",
  },
  {
    title: "Hoffnung oder nachträgliche Erlösung?",
    text: "Der Horizont bietet Rettung, aber keine triumphale Gewissheit. Historisch überlebten nur wenige. Das Bild lässt Hoffnung als Handlung erscheinen, nicht als Versprechen eines gerechten Ausgangs.",
  },
] as const;

export default function RaftOfTheMedusaPage() {
  return (
    <article style={{ background: "#e8dfd0", color: "#221b17", minHeight: "100vh" }}>
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
          minHeight: "92svh",
        }}
      >
        <div
          style={{
            alignContent: "end",
            background: "#2a211c",
            color: "#f2e8d8",
            display: "grid",
            padding: "clamp(6rem, 12vw, 10rem) clamp(1.25rem, 6vw, 6rem)",
          }}
        >
          <p
            style={{
              color: "#d1a162",
              fontSize: ".74rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Werk lesen · 1818–1819
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.8rem, 9vw, 7.6rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".88",
              margin: "1.5rem 0 0",
              maxWidth: "10ch",
            }}
          >
            Das Floß
            <span style={{ color: "#b4613f", display: "block", fontStyle: "italic" }}>
              der Medusa
            </span>
          </h1>
          <p
            style={{
              color: "rgb(242 232 216 / .76)",
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              lineHeight: 1.72,
              margin: "3rem 0 0",
              maxWidth: "39rem",
            }}
          >
            Géricault machte aus einem aktuellen Skandal ein monumentales Historienbild.
            Das Werk zeigt nicht nur Schiffbruch, sondern die Frage, wie politisches
            Versagen als körperliche Erfahrung, öffentliche Anklage und visuelles
            Spektakel zugleich erscheinen kann.
          </p>
        </div>

        <figure
          style={{
            background: "#171311",
            margin: 0,
            minHeight: "36rem",
            position: "relative",
          }}
        >
          <Image
            alt="Théodore Géricaults Das Floß der Medusa: Tote, Sterbende und winkende Überlebende auf einem notdürftigen Floß im offenen Meer."
            fill
            preload
            sizes="(min-width: 900px) 56vw, 100vw"
            src={imageUrl}
            style={{ objectFit: "contain" }}
          />
          <figcaption
            style={{
              background: "rgb(23 19 17 / .9)",
              bottom: 0,
              color: "#f2e8d8",
              fontSize: ".72rem",
              left: 0,
              lineHeight: 1.5,
              padding: ".8rem 1rem",
              position: "absolute",
              right: 0,
            }}
          >
            Théodore Géricault, <em>Le Radeau de la Méduse</em>, 1818–1819, Öl auf
            Leinwand, Musée du Louvre. Wikimedia Commons · Public Domain.
          </figcaption>
        </figure>
      </header>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            }}
          >
            <div>
              <p
                style={{
                  color: "#914f34",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Der historische Kern
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                }}
              >
                Das Meer war nicht der einzige Täter.
              </h2>
            </div>
            <div style={{ fontSize: "1.08rem", lineHeight: 1.82 }}>
              <p>
                Die französische Fregatte <em>Méduse</em> lief 1816 vor Westafrika auf
                Grund. Weil die Rettungsboote nicht für alle reichten, wurden etwa 150
                Menschen auf ein improvisiertes Floß gesetzt. Das Zugseil wurde gekappt;
                nach dreizehn Tagen wurden nur fünfzehn Menschen lebend gefunden.
              </p>
              <p>
                Der Kapitän hatte seine Stellung politischen Beziehungen während der
                Bourbonen-Restauration zu verdanken. Das Unglück wurde deshalb zum
                Symbol inkompetenter und privilegierter Staatsführung. Géricaults Bild
                benennt diesen Zusammenhang nicht durch Text, baut ihn aber in die
                Körper und die verweigerte Rettung ein.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgb(34 27 23 / .18)",
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
              marginTop: "5rem",
            }}
          >
            {observations.map((observation) => (
              <article
                key={observation.number}
                style={{ background: "#e8dfd0", minHeight: "24rem", padding: "2rem" }}
              >
                <p style={{ color: "#914f34", fontWeight: 800 }}>
                  {observation.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "3rem 0 1.4rem",
                  }}
                >
                  {observation.title}
                </h3>
                <p style={{ color: "rgb(34 27 23 / .72)", lineHeight: 1.76 }}>
                  {observation.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#1a1613", color: "#f0e5d5" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "86rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d1a162",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Unter der großen Komposition
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 3.5rem",
              maxWidth: "14ch",
            }}
          >
            Recherche, Modell und individuelle Präsenz
          </h2>
          <ArtworkStrip
            items={raftContextArtworks}
            title="Studien und Modelle zum Floß der Medusa"
          />
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
            Vier Spannungen
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {tensions.map((tension) => (
              <article
                key={tension.title}
                style={{ border: "1px solid rgb(255 240 221 / .24)", padding: "2rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {tension.title}
                </h3>
                <p style={{ lineHeight: 1.78, margin: "1.5rem 0 0" }}>{tension.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#d7bd8b", color: "#251d16" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "72rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.7rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: 0,
            }}
          >
            Das Bild klagt an, ohne ein Urteil zu illustrieren.
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.82,
              margin: "2rem 0 0",
              maxWidth: "48rem",
            }}
          >
            Seine politische Kraft liegt gerade darin, dass Verantwortung, Körper und
            Rettung nicht in eine einfache Botschaft zerfallen. Die Überlebenden
            handeln, die Toten bleiben sichtbar, der Staat fehlt und die Hoffnung steht
            am Rand der Wahrnehmbarkeit. Der Betrachter muss diese Ebenen
            zusammenhalten.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem 2rem",
              marginTop: "2.5rem",
            }}
          >
            <Link href="/kuenstler/theodore-gericault/">Géricault kennenlernen →</Link>
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
