import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { ancientOfDaysContextArtworks } from "@/components/experiences/romanticBlakeArtworkSets";

export const metadata: Metadata = {
  title: "The Ancient of Days von William Blake: Bildanalyse",
  description:
    "Eine genaue Bildanalyse von William Blakes Frontispiz zu Europe: a Prophecy: Urizen, Zirkel, Lichtscheibe, Drucktechnik, Varianten und die Ambivalenz von Schöpfung und Begrenzung.",
  alternates: {
    canonical: "/werke/the-ancient-of-days/",
  },
};

const observations = [
  {
    number: "01",
    title: "Der Körper ist zugleich mächtig und zusammengedrängt.",
    text: "Breite Schultern, gespannte Arme und muskulöse Beine versprechen Kraft. Doch die Figur kniet tief, faltet sich in die Scheibe und muss den ganzen Körper verdrehen, um den Zirkel nach unten zu führen.",
  },
  {
    number: "02",
    title: "Der Zirkel erzeugt keine neutrale Geometrie.",
    text: "Seine Spitzen treffen in einen dunklen, noch nicht geordneten Raum. Messen erscheint deshalb als aktiver Eingriff: Eine Welt wird bestimmt, aber auch auf einen Umfang, eine Grenze und ein System festgelegt.",
  },
  {
    number: "03",
    title: "Licht ist konzentriert, nicht grenzenlos.",
    text: "Die helle Scheibe strahlt, bleibt aber von schweren Wolken umgeben. Das Licht breitet sich nicht frei aus; es wird zu einer eingefassten Zone, aus der die Figur nach außen arbeitet.",
  },
  {
    number: "04",
    title: "Der Blick folgt der Hand statt dem Gesicht.",
    text: "Das gesenkte Haupt und die nach vorn stürzenden Haare machen das Gesicht schwer lesbar. Aufmerksamkeit wandert über Arm, Hand und Werkzeug zur unteren Bildkante. Autorität wird als Handlung, nicht als Porträt inszeniert.",
  },
  {
    number: "05",
    title: "Die Bildkante wird zur Schwelle.",
    text: "Die Zirkelspitzen reichen fast aus dem Bildraum heraus. Dadurch scheint die gemessene Welt unterhalb des Frontispizes zu liegen — möglicherweise im Buch, das nach dieser Seite beginnt, und im Raum des Lesers.",
  },
  {
    number: "06",
    title: "Farbe verändert die Bedeutung jedes Abzugs.",
    text: "Blake druckte und kolorierte mehrere Exemplare. Unterschiede in Dunkelheit, Gold, Rot und Wolkenstruktur verschieben das Verhältnis von Offenbarung, Hitze, Bedrohung und materieller Schwere.",
  },
] as const;

export default function AncientOfDaysPage() {
  return (
    <article style={{ background: "#171318", color: "#f2eadf", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#e1a14d",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Werk lesen · William Blake · 1794
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.9rem, 10vw, 8.5rem)",
            fontWeight: 500,
            letterSpacing: "-.06em",
            lineHeight: ".84",
            margin: "1.5rem 0 0",
            maxWidth: "12ch",
          }}
        >
          The Ancient
          <span style={{ color: "#df6a3b", display: "block", fontStyle: "italic" }}>
            of Days
          </span>
        </h1>
        <p
          style={{
            color: "rgb(242 234 223 / .75)",
            fontSize: "clamp(1.18rem, 2.2vw, 1.58rem)",
            lineHeight: 1.75,
            margin: "3.5rem 0 0 auto",
            maxWidth: "46rem",
          }}
        >
          Eine leuchtende Figur misst die Dunkelheit. Das klingt nach souveräner Schöpfung.
          Doch Haltung, Bildrand und Buchkontext machen aus dem kosmischen Architekten eine
          viel unsicherere Gestalt: Urizen ordnet die Welt, indem er sie begrenzt.
        </p>
      </header>

      <section style={{ background: "#f0e4d0", color: "#211a17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
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
                  color: "#965033",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Zuerst den Titel korrigieren
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                  maxWidth: "13ch",
                }}
              >
                Das Bild war eine Tür in ein Buch.
              </h2>
            </div>
            <div style={{ fontSize: "1.12rem", lineHeight: 1.85 }}>
              <p>
                Blake entwarf das Motiv als Frontispiz zu <em>Europe: a Prophecy</em>. Der
                heute geläufige Titel <em>The Ancient of Days</em> löst es leicht aus dieser
                Funktion und lässt es wie ein selbstständiges Bild des biblischen
                Schöpfergottes erscheinen.
              </p>
              <p>
                Innerhalb von Blakes Mythologie wird die Figur gewöhnlich als Urizen
                verstanden: eine Macht von Gesetz, Abstraktion, Einteilung und erstarrter
                Vernunft. Er ist weder schlicht böse noch ein stabiles Symbol. Seine Ordnung
                ist produktiv und gefährlich zugleich.
              </p>
            </div>
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
          <p
            style={{
              color: "#e1a14d",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Beobachtungen
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
            Schöpfung wird als körperliche Arbeit sichtbar.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
            }}
          >
            {observations.map((observation) => (
              <section
                key={observation.number}
                style={{
                  border: "1px solid rgb(242 234 223 / .14)",
                  minHeight: "21rem",
                  padding: "2rem",
                }}
              >
                <p style={{ color: "#e1a14d", fontWeight: 800, margin: 0 }}>
                  {observation.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "2.2rem 0 1rem",
                  }}
                >
                  {observation.title}
                </h3>
                <p style={{ color: "rgb(242 234 223 / .7)", lineHeight: 1.75, margin: 0 }}>
                  {observation.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#30201d" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#efa75c",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Drei Gegenproben
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.1rem, 7vw, 6.4rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".95",
              margin: "1rem 0 1.5rem",
              maxWidth: "13ch",
            }}
          >
            Was geschieht, wenn Körper sich öffnen, messen oder gebunden werden?
          </h2>
          <p
            style={{
              color: "rgb(242 234 223 / .7)",
              fontSize: "1.12rem",
              lineHeight: 1.8,
              margin: "0 0 3.5rem",
              maxWidth: "48rem",
            }}
          >
            Albion, Newton und Adam zeigen keine drei Übersetzungen desselben Symbols. Sie
            bilden ein Spannungsfeld: Befreiung, rationale Fixierung und die schmerzhafte
            Verkörperung eines geschaffenen Menschen.
          </p>
          <ArtworkStrip items={ancientOfDaysContextArtworks} title="Öffnung, Maß und Bindung" />
        </div>
      </section>

      <section style={{ background: "#f0e4d0", color: "#211a17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
            }}
          >
            <div>
              <p
                style={{
                  color: "#965033",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Die tragfähige Deutung
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 6.5vw, 5.8rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                  maxWidth: "12ch",
                }}
              >
                Nicht Vernunft gegen Fantasie — sondern Ordnung als umkämpfte Kraft.
              </h2>
            </div>
            <div style={{ fontSize: "1.12rem", lineHeight: 1.85 }}>
              <p>
                Blake verwirft Denken, Handwerk oder Form nicht. Sein eigenes Bild ist hoch
                organisiert und technisch anspruchsvoll. Die Kritik richtet sich gegen ein
                System, das seine Grenzen mit der ganzen Wirklichkeit verwechselt.
              </p>
              <p>
                Der Zirkel ist deshalb weder nur Werkzeug des Bösen noch eindeutiges Zeichen
                göttlicher Harmonie. Er macht die politische und geistige Frage sichtbar,
                wer Grenzen setzt, welche Welt dadurch entsteht und was jenseits des
                gemessenen Kreises unsichtbar bleibt.
              </p>
            </div>
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
              ["/kuenstler/william-blake/", "William Blake", "Technik, Bücher und private Mythologie im gesamten Werk verfolgen."],
              ["/begriffe/vision-und-prophezeiung/", "Vision und Prophezeiung", "Das Bild als Teil einer erfundenen Kosmologie und historischen Kritik lesen."],
              ["/begriffe/das-erhabene/", "Das Erhabene", "Kosmischen Maßstab mit romantischer Überforderung und Distanz vergleichen."],
            ].map(([href, title, text]) => (
              <Link
                href={href}
                key={href}
                style={{
                  border: "1px solid rgb(33 26 23 / .2)",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "14rem",
                  padding: "1.75rem",
                  textDecoration: "none",
                }}
              >
                <strong style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500 }}>
                  {title}
                </strong>
                <p style={{ color: "rgb(33 26 23 / .7)", lineHeight: 1.7 }}>{text}</p>
                <span style={{ fontWeight: 800, marginTop: "auto" }}>Weiterlesen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
