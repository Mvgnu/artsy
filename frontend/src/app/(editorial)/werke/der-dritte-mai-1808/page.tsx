import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { thirdOfMayContextArtworks } from "@/components/experiences/romanticGoyaArtworkSets";

export const metadata: Metadata = {
  title: "Der 3. Mai 1808: Goyas Bild der Exekution",
  description:
    "Eine genaue Bildanalyse von Francisco Goyas Der 3. Mai 1808: Komposition, Licht, Täter, Opfer, Erinnerung und die Verbindung zu den Disasters of War.",
  alternates: {
    canonical: "/werke/der-dritte-mai-1808/",
  },
};

const observations = [
  {
    number: "01",
    title: "Die Gewehre bilden eine einzige Maschine.",
    text: "Die Soldaten stehen mit dem Rücken zu uns. Ihre Körper verschmelzen zu einer geschlossenen diagonalen Wand aus Tornistern, Beinen und Gewehrläufen. Individuelle Gesichter fehlen; entscheidend ist die wiederholbare Funktion der Exekution.",
  },
  {
    number: "02",
    title: "Das Licht rettet niemanden.",
    text: "Die Laterne liegt am Boden zwischen Täter- und Opfergruppe. Sie macht die Szene sichtbar, liefert aber keine moralische oder religiöse Auflösung. Aufklärung wird buchstäblich zur Beleuchtung einer technisch organisierten Tötung.",
  },
  {
    number: "03",
    title: "Der Mann in Weiß ist Mittelpunkt und nächstes Opfer.",
    text: "Sein Hemd reflektiert das Laternenlicht, seine Arme öffnen die Figur, und kleine Wundmale erinnern an christliche Bildtypen. Doch seine Pose garantiert keine Erlösung. Die Gewehre sind bereits auf ihn gerichtet.",
  },
  {
    number: "04",
    title: "Die Zukunft der Szene wartet im Hintergrund.",
    text: "Hinter dem Mann in Weiß stehen weitere Gefangene. Manche bedecken ihr Gesicht, andere blicken auf die Toten. Das Bild zeigt daher nicht nur einen einzelnen Märtyrermoment, sondern einen Ablauf, der sich unmittelbar fortsetzen wird.",
  },
  {
    number: "05",
    title: "Der Vordergrund ist bereits voller Konsequenzen.",
    text: "Blut, verdrehte Körper und die Nähe des erschossenen Mannes am unteren Bildrand machen die Exekution materiell. Die Toten sind kein symbolischer Hinweis; sie blockieren den Raum und werden zur Zukunft der Wartenden.",
  },
  {
    number: "06",
    title: "Madrid ist sichtbar und zugleich abwesend.",
    text: "Die Stadt liegt dunkel am Horizont. Das Geschehen findet vor ihr statt, aber nicht in einer identifizierbaren repräsentativen Architektur. Erinnerung wird nicht durch einen triumphalen Ort stabilisiert, sondern durch eine nächtliche Randzone.",
  },
] as const;

const tensions = [
  {
    title: "Märtyrer oder gewöhnlicher Mann?",
    text: "Die Pose und das weiße Hemd erhöhen die Figur, doch Kleidung, Gesicht und Umgebung bleiben zeitgenössisch. Goya verwendet religiöse Resonanz, ohne den historischen Körper in eine sichere Heiligenlegende aufzulösen.",
  },
  {
    title: "Nationales Denkmal oder universelle Anklage?",
    text: "Das Werk erinnert an spanische Opfer französischer Besatzung. Gleichzeitig vermeidet es eine triumphale nationale Gegengewalt. Seine formale Asymmetrie kann über den konkreten Konflikt hinaus als Bild staatlich organisierter Exekution gelesen werden.",
  },
  {
    title: "Dokument oder Konstruktion?",
    text: "Goya war kein Augenzeuge dieses konkreten Moments. Das Bild entstand 1814, sechs Jahre nach den Ereignissen. Seine Kraft liegt daher nicht in fotografischer Protokolltreue, sondern in einer bewusst komponierten Form öffentlicher Erinnerung.",
  },
] as const;

export default function ThirdOfMayPage() {
  return (
    <article style={{ background: "#171310", color: "#f2e7d8", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 15vw, 13rem) 1.25rem clamp(5rem, 9vw, 8rem)",
        }}
      >
        <p
          style={{
            color: "#d0a15f",
            fontSize: ".74rem",
            fontWeight: 800,
            letterSpacing: ".19em",
            textTransform: "uppercase",
          }}
        >
          Werkdecoder · Francisco Goya · 1814
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4rem, 10vw, 8.5rem)",
            fontWeight: 500,
            letterSpacing: "-.055em",
            lineHeight: ".87",
            margin: "1.5rem 0 0",
            maxWidth: "11ch",
          }}
        >
          Der 3. Mai
          <span style={{ color: "#a84b34", display: "block", fontStyle: "italic" }}>
            1808
          </span>
        </h1>
        <p
          style={{
            color: "rgb(242 231 216 / .74)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
            lineHeight: 1.72,
            margin: "3.5rem 0 0 auto",
            maxWidth: "46rem",
          }}
        >
          Goya malt keine Schlacht und keinen Sieg. Er malt den kurzen Abstand zwischen
          einem technischen Befehl und einem Körper, der gleich getroffen wird. Das Bild
          organisiert Erinnerung über diese unerträgliche zeitliche Nähe.
        </p>
      </header>

      <section style={{ background: "#e8ddcd", color: "#221b17" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#934a32",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Beobachtungen
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {observations.map((observation) => (
              <article
                key={observation.number}
                style={{
                  borderTop: "1px solid rgb(34 27 23 / .28)",
                  minHeight: "20rem",
                  padding: "1.5rem 0",
                }}
              >
                <p style={{ color: "#934a32", fontWeight: 800 }}>
                  {observation.number}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.15rem",
                    fontWeight: 500,
                    letterSpacing: "-.035em",
                    lineHeight: 1.03,
                  }}
                >
                  {observation.title}
                </h2>
                <p style={{ lineHeight: 1.75 }}>{observation.text}</p>
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
              color: "#d0a15f",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Was der Vergleich verändert
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
            Aufstand, Exekution und serielle Gewalt.
          </h2>
          <ArtworkStrip
            items={thirdOfMayContextArtworks}
            title="Drei Formen desselben Kriegs"
          />
        </div>
      </section>

      <section style={{ background: "#2b201b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d4ad72",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Drei Spannungen, keine einfache Auflösung
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "2.5rem",
            }}
          >
            {tensions.map((tension) => (
              <article
                key={tension.title}
                style={{
                  background: "rgb(255 255 255 / .035)",
                  minHeight: "19rem",
                  padding: "2rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    fontWeight: 500,
                    letterSpacing: "-.035em",
                    lineHeight: 1.04,
                  }}
                >
                  {tension.title}
                </h2>
                <p style={{ color: "rgb(242 231 216 / .7)", lineHeight: 1.75 }}>
                  {tension.text}
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
              color: "#d0a15f",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Warum das Bild modern wirkt
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
            Es zeigt Gewalt als Verfahren, nicht als Ausnahme.
          </h2>
          <div
            style={{
              color: "rgb(242 231 216 / .74)",
              display: "grid",
              fontSize: "1.15rem",
              gap: "1.5rem",
              lineHeight: 1.8,
            }}
          >
            <p>
              Die Schützenreihe ist austauschbar, der Ablauf wiederholbar und das Licht
              funktional. Gleichzeitig besteht die Opferseite aus individuellen
              Reaktionen: Aufbegehren, Gebet, Verbergen, Erstarren und bereits
              eingetretenem Tod.
            </p>
            <p>
              Diese ungleiche Verteilung von Individualität ist die politische Form des
              Bildes. Goya macht nicht nur Leid sichtbar. Er zeigt, wie eine Institution
              Menschen in Funktionen und Körper in Ziele verwandelt.
            </p>
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
                  border: "1px solid rgb(242 231 216 / .18)",
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
