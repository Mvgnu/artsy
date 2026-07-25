import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { nightArtworks } from "@/components/experiences/romanticRuinsArtworkSets";

export const metadata: Metadata = {
  title: "Die Nacht als Motiv der Romantik",
  description:
    "Wie romantische Kunst Nacht, Mondlicht, Dämmerung und Dunkelheit nutzt, um Wahrnehmung, Arbeit, Gemeinschaft, Erinnerung und Vision neu zu ordnen.",
  alternates: {
    canonical: "/motive/nacht/",
  },
};

const modes = [
  {
    number: "01",
    title: "Nacht begrenzt Wissen, nicht Aufmerksamkeit.",
    text: "Dunkelheit entfernt Details und sichere Entfernungen. Gerade dadurch werden kleine Unterschiede wichtig: eine Mondsichel, ein Lichtreflex, eine Silhouette oder ein kaum sichtbarer Weg. Sehen wird langsamer und bewusster.",
  },
  {
    number: "02",
    title: "Mondlicht baut eine zweite Ordnung der Welt.",
    text: "Es beleuchtet selektiv, glättet Farben und verbindet weit entfernte Dinge. Die Landschaft bleibt dieselbe und wirkt dennoch verwandelt. Romantische Nacht ist deshalb keine bloße Abwesenheit des Tages, sondern eine andere Bildlogik.",
  },
  {
    number: "03",
    title: "Nacht verändert soziale Nähe.",
    text: "Figuren können gemeinsam schauen, arbeiten oder warten, ohne psychologisch ausgelesen zu werden. Silhouetten und Rückenansichten machen Haltung, Abstand und geteilte Richtung wichtiger als Gesichtsausdruck.",
  },
  {
    number: "04",
    title: "Nacht kann Alltag gefährlich oder visionär machen.",
    text: "Turners Fischer bleiben einer konkreten Arbeit ausgesetzt; Palmers Kornfeld wird unter Mondlicht fast übernatürlich fruchtbar. Dasselbe Motiv kann Unsicherheit verstärken oder eine geschlossene, traumartige Fülle erzeugen.",
  },
  {
    number: "05",
    title: "Dämmerung macht Zeit selbst sichtbar.",
    text: "Der Übergang zwischen Tag und Nacht ist weder stabiler Zustand noch abrupter Schnitt. Langsames Verschwinden und Auftauchen erlaubt Bildern, Erinnerung, Erwartung und bevorstehenden Verlust in derselben Atmosphäre zu halten.",
  },
  {
    number: "06",
    title: "Nacht bietet keine automatische Innerlichkeit.",
    text: "Ein dunkles Bild ist nicht zwangsläufig melancholisch oder spirituell. Entscheidend ist, was Dunkelheit mit Handlung, Raum und Blick macht. Sie kann kontemplativ, ökonomisch, erotisch, religiös oder bedrohlich organisiert sein.",
  },
] as const;

const terms = [
  {
    term: "Dunkelheit",
    text: "Der geringe sichtbare Informationsanteil. Sie kann Nacht, Innenraum, Wetter oder Schatten entstehen lassen.",
  },
  {
    term: "Nacht",
    text: "Ein zeitlicher Zustand, der Arbeit, Bewegung, Sicherheit und soziale Regeln verändert.",
  },
  {
    term: "Dämmerung",
    text: "Der Übergang, in dem Formen noch oder schon sichtbar sind und Zeit als Veränderung erfahren wird.",
  },
  {
    term: "Mondlicht",
    text: "Eine selektive Lichtquelle, die Nähe und Ferne neu verbindet, ohne die Welt vollständig zu erhellen.",
  },
] as const;

const questions = [
  "Welche Informationen verschwinden, und welche werden durch ihre Seltenheit wichtiger?",
  "Ist das Licht natürliche Orientierung, spirituelles Zeichen oder dramatische Inszenierung?",
  "Was tun die Figuren nachts — schauen, arbeiten, reisen, warten oder träumen sie?",
  "Erzeugt die Dunkelheit Gemeinschaft, Isolation oder eine unsichere Mischung aus beidem?",
  "Ist die Landschaft wirklich leerer als am Tag, oder nur anders geordnet?",
  "Welche Stimmung wird häufig vorausgesetzt, obwohl die Komposition etwas Komplexeres zeigt?",
] as const;

export default function NightMotifPage() {
  return (
    <article style={{ background: "#0b1115", color: "#edf0ec", minHeight: "100vh" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "88rem",
          padding: "clamp(8rem, 16vw, 14rem) 1.25rem clamp(6rem, 10vw, 9rem)",
        }}
      >
        <p
          style={{
            color: "#d0b36c",
            fontSize: ".75rem",
            fontWeight: 800,
            letterSpacing: ".2em",
            textTransform: "uppercase",
          }}
        >
          Motiv verstehen · Licht nach dem Tag
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(5rem, 15vw, 12rem)",
            fontWeight: 500,
            letterSpacing: "-.07em",
            lineHeight: ".78",
            margin: "1.5rem 0 0",
            maxWidth: "8ch",
          }}
        >
          Die
          <span style={{ color: "#9fb0bc", display: "block", fontStyle: "italic" }}>
            Nacht
          </span>
        </h1>
        <p
          style={{
            color: "rgb(237 240 236 / .72)",
            fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
            lineHeight: 1.72,
            margin: "4rem 0 0 auto",
            maxWidth: "44rem",
          }}
        >
          Romantische Nacht ist nicht einfach ein dunkler Filter über der Landschaft.
          Sie nimmt Sicherheit aus dem Blick, verändert Arbeit und Gemeinschaft und
          lässt Mondlicht, Silhouetten und entfernte Zeichen eine eigene Ordnung bilden.
        </p>
      </header>

      <section style={{ background: "#e4e2dc", color: "#1a2226" }}>
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
              gap: "4rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 23rem), 1fr))",
            }}
          >
            <div>
              <p
                style={{
                  color: "#755a36",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Gegen den Kurzschluss
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7vw, 6.3rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                  maxWidth: "12ch",
                }}
              >
                Nacht bedeutet nicht automatisch Einsamkeit, Traum oder Melancholie.
              </h2>
            </div>
            <div style={{ fontSize: "1.08rem", lineHeight: 1.84 }}>
              <p>
                Solche Deutungen können passen, werden aber oft zu früh aufgerufen. Zwei
                Mondbetrachter stehen gemeinsam. Turners Fischer arbeiten unter realer
                Gefahr. Palmers Felder wirken dicht, fruchtbar und fast festlich. Die
                Nacht verändert jedes dieser Bilder, aber nicht auf dieselbe Weise.
              </p>
              <p>
                Analytisch stärker ist deshalb die Frage: Welche Beziehungen werden
                durch geringe Sichtbarkeit neu organisiert? Manche Formen verschwinden,
                andere werden zu Zeichen. Licht erhält Richtungsmacht. Entfernungen
                wirken größer oder überraschend nah. Körper verlieren Individualität und
                gewinnen Haltung.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
              marginTop: "5rem",
              background: "rgb(26 34 38 / .18)",
            }}
          >
            {terms.map((item) => (
              <article
                key={item.term}
                style={{ background: "#e4e2dc", padding: "2rem" }}
              >
                <h3
                  style={{
                    color: "#755a36",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.term}
                </h3>
                <p
                  style={{
                    color: "rgb(26 34 38 / .7)",
                    lineHeight: 1.72,
                    margin: "1.25rem 0 0",
                  }}
                >
                  {item.text}
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
            maxWidth: "92rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d0b36c",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Nächte
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.4rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 2rem",
              maxWidth: "14ch",
            }}
          >
            Gemeinsames Sehen, ferne Reise, gefährliche Arbeit und visionäre Ernte.
          </h2>
          <p
            style={{
              color: "rgb(237 240 236 / .68)",
              fontSize: "1.15rem",
              lineHeight: 1.78,
              margin: "0 0 3.5rem",
              maxWidth: "48rem",
            }}
          >
            Die Auswahl bewegt sich bewusst über Friedrich hinaus. Turner nutzt
            Mondlicht, um ein kleines Boot gegen eine fast unlesbare See zu behaupten.
            Samuel Palmer verdichtet Kirche, Feld und Vegetation zu einer pastoralen
            Vision. Nacht ist damit keine nationale oder stilistische Einheitsform,
            sondern ein flexibles Verfahren zur Neuordnung der Welt.
          </p>
          <ArtworkStrip
            items={nightArtworks}
            title="Vier romantische Ordnungen der Nacht"
          />
        </div>
      </section>

      <section style={{ background: "#1b2931", color: "#eaf0f0" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#cfb16b",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Sechs Wirkungen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 4rem",
              maxWidth: "14ch",
            }}
          >
            Was Nacht mit Raum, Körper und Zeit tun kann.
          </h2>

          <div
            style={{
              background: "rgb(234 240 240 / .16)",
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            }}
          >
            {modes.map((item) => (
              <article
                key={item.number}
                style={{ background: "#1b2931", minHeight: "23rem", padding: "2rem" }}
              >
                <p style={{ color: "#cfb16b", fontWeight: 800 }}>{item.number}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "3rem 0 1.4rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "rgb(234 240 240 / .7)", lineHeight: 1.76 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#9a7d45", color: "#101619" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
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
              Sechs Fragen an ein Nachtbild
            </h2>
          </div>
          <ol style={{ display: "grid", gap: "1rem", lineHeight: 1.72, margin: 0 }}>
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: "#e4e2dc", color: "#1a2226" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "72rem",
            padding: "clamp(6rem, 11vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#755a36",
              fontWeight: 800,
              letterSpacing: ".16em",
              textTransform: "uppercase",
            }}
          >
            Im Silo weitergehen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 5.6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: "1rem 0 3rem",
            }}
          >
            Von Mondlicht zu Ruine, Rückenfigur und erhabener Wahrnehmung.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            }}
          >
            <Link
              href="/werke/zwei-maenner-in-betrachtung-des-mondes/"
              style={{ border: "1px solid rgb(26 34 38 / .18)", padding: "1.5rem" }}
            >
              Zwei Männer im Mondlicht →
            </Link>
            <Link
              href="/werke/abtei-im-eichwald/"
              style={{ border: "1px solid rgb(26 34 38 / .18)", padding: "1.5rem" }}
            >
              Abtei im Eichwald →
            </Link>
            <Link
              href="/begriffe/ruine-und-erinnerung/"
              style={{ border: "1px solid rgb(26 34 38 / .18)", padding: "1.5rem" }}
            >
              Ruine und Erinnerung →
            </Link>
            <Link
              href="/begriffe/das-erhabene/"
              style={{ border: "1px solid rgb(26 34 38 / .18)", padding: "1.5rem" }}
            >
              Das Erhabene →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
