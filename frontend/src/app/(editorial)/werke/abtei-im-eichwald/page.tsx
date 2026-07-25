import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { abbeyContextArtworks } from "@/components/experiences/romanticRuinsArtworkSets";

export const metadata: Metadata = {
  title: "Abtei im Eichwald: Friedrichs Ruine lesen",
  description:
    "Eine vertiefte Bildanalyse von Caspar David Friedrichs Abtei im Eichwald: Trauerzug, gotische Ruine, Eichen, Grabzeichen, Winterlicht und Erinnerung.",
  alternates: {
    canonical: "/werke/abtei-im-eichwald/",
  },
};

const heroFile = "Caspar David Friedrich - Abtei im Eichwald - Google Art Project.jpg";
const heroImage = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(heroFile)}`;
const heroSource = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(heroFile)}`;

const observations = [
  {
    number: "01",
    title: "Der Zug ist kleiner als die Landschaft seiner Erinnerung.",
    text: "Mönche tragen einen Sarg durch Schnee und Grabfelder. Ihre dunklen Körper bilden eine schmale horizontale Bewegung, während Eichen und Ruinenportal den größten Teil des Bildes beherrschen. Der einzelne Tod tritt in einen viel älteren zeitlichen Raum ein.",
  },
  {
    number: "02",
    title: "Das Portal steht, obwohl das Gebäude verschwunden ist.",
    text: "Die gotische Fenster- und Wandöffnung hat keinen geschlossenen Kirchenraum mehr. Sie rahmt Bäume, Dämmerung und Himmel. Architektur funktioniert dadurch weniger als Schutzraum denn als durchlässige Form, in der Verlust sichtbar bleibt.",
  },
  {
    number: "03",
    title: "Die Eichen wiederholen und übertreffen die Architektur.",
    text: "Kahle Stämme steigen wie Pfeiler auf, Äste verzweigen sich wie Maßwerk. Natur ersetzt die Kirche nicht einfach. Beide Formen werden so eng aufeinander bezogen, dass unklar bleibt, welche Ordnung die andere überlebt oder erinnert.",
  },
  {
    number: "04",
    title: "Das Licht verspricht keinen klaren Morgen.",
    text: "Der Himmel hellt sich nahe dem Horizont auf, doch Vordergrund und Baumzone bleiben dunkel. Das Bild hält Hoffnung und Endgültigkeit gleichzeitig offen: Es gibt Orientierung, aber keine sichtbare Auferstehungsszene und keinen sicheren Ausgang.",
  },
] as const;

const tensions = [
  {
    title: "Andacht oder historische Trauer?",
    text: "Kreuze, Prozession und gotische Architektur erlauben eine christliche Lesart. Gleichzeitig kann die zerstörte Kirche als Bild verlorener kultureller und politischer Ordnung erscheinen. Friedrich bindet Glauben und Geschichte an dieselben materiellen Reste, ohne sie gleichzusetzen.",
  },
  {
    title: "Natur als Trost oder Gleichgültigkeit?",
    text: "Schnee, Eichen und Himmel können zyklische Erneuerung andeuten. Doch der Winter ist hart, die Bäume sind kahl und das Gebäude bleibt zerstört. Natur heilt die Geschichte nicht sichtbar; sie trägt, verändert und überdauert ihre Spuren.",
  },
  {
    title: "Ruine als Verlust oder neue Bildform?",
    text: "Die Abtei ist funktional unbrauchbar, visuell aber hochwirksam. Gerade der Verlust des Dachs und Innenraums öffnet Architektur zur Landschaft. Das Bild macht aus Zerstörung eine neue Form des Sehens, ohne den Verlust dadurch ungeschehen zu machen.",
  },
  {
    title: "Gemeinschaft oder Einsamkeit?",
    text: "Anders als viele populäre Friedrich-Bilder zeigt die Abtei eine Gruppe. Doch die Figuren bleiben klein, anonym und fast vom Dunkel absorbiert. Gemeinschaft besteht hier als Ritual und Bewegung, nicht als psychologisch lesbares Miteinander.",
  },
] as const;

export default function AbbeyInTheOakwoodPage() {
  return (
    <article style={{ background: "#e8e2d5", color: "#1d2423", minHeight: "100vh" }}>
      <header
        style={{
          background: "#0f1515",
          color: "#f0eadf",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 29rem), 1fr))",
          minHeight: "92svh",
        }}
      >
        <div
          style={{
            alignContent: "end",
            display: "grid",
            padding: "clamp(6rem, 12vw, 11rem) clamp(1.25rem, 6vw, 6rem)",
          }}
        >
          <p
            style={{
              color: "#b8a276",
              fontSize: ".74rem",
              fontWeight: 800,
              letterSpacing: ".2em",
              textTransform: "uppercase",
            }}
          >
            Werk lesen · 1809–1810
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4rem, 9vw, 8.5rem)",
              fontWeight: 500,
              letterSpacing: "-.06em",
              lineHeight: ".86",
              margin: "1.5rem 0 0",
              maxWidth: "10ch",
            }}
          >
            Abtei
            <span style={{ color: "#a7b2ad", display: "block", fontStyle: "italic" }}>
              im Eichwald
            </span>
          </h1>
          <p
            style={{
              color: "rgb(240 234 223 / .74)",
              fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
              lineHeight: 1.72,
              margin: "3rem 0 0",
              maxWidth: "38rem",
            }}
          >
            Ein Begräbniszug bewegt sich nicht in eine intakte Kirche, sondern in eine
            Öffnung aus Stein, Bäumen und Dämmerung. Friedrich macht die Ruine zum Ort,
            an dem persönliche Trauer, Glaubensgeschichte und verlorene Ordnung
            gleichzeitig sichtbar werden.
          </p>
        </div>

        <figure style={{ margin: 0, minHeight: "38rem", position: "relative" }}>
          <Image
            alt="Caspar David Friedrichs Abtei im Eichwald: Ein Trauerzug zieht durch kahle Eichen zu einer gotischen Kirchenruine im winterlichen Dämmerlicht."
            fill
            preload
            sizes="(min-width: 900px) 55vw, 100vw"
            src={heroImage}
            style={{ background: "#111716", objectFit: "contain" }}
          />
          <figcaption
            style={{
              background: "rgb(8 12 12 / .88)",
              bottom: 0,
              color: "#e9e2d6",
              fontSize: ".72rem",
              left: 0,
              lineHeight: 1.55,
              padding: ".8rem 1rem",
              position: "absolute",
              right: 0,
            }}
          >
            Caspar David Friedrich, <em>Abtei im Eichwald</em>, 1809–1810. Alte
            Nationalgalerie, Berlin.{" "}
            <a href={heroSource}>Wikimedia Commons · Public Domain</a>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 23rem), 1fr))",
            }}
          >
            <div>
              <p
                style={{
                  color: "#705944",
                  fontSize: ".72rem",
                  fontWeight: 800,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                }}
              >
                Erster Blick
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3rem, 7vw, 6.4rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                  maxWidth: "12ch",
                }}
              >
                Alles führt zu einer Tür, die in keinen geschlossenen Raum mehr führt.
              </h2>
            </div>
            <div style={{ fontSize: "1.08rem", lineHeight: 1.84 }}>
              <p>
                Der Blick folgt dem Begräbniszug nach rechts und zugleich nach hinten in
                das Bild. Doch der erwartete Innenraum fehlt. Hinter dem gotischen
                Portal stehen weitere Bäume; durch das Maßwerk erscheint Himmel. Die
                Prozession tritt nicht aus der Natur heraus, sondern tiefer in einen
                Raum ein, in dem Natur und Architektur einander durchdringen.
              </p>
              <p>
                Diese Verschiebung ist entscheidend. Friedrich malt keine pittoreske
                Ruine als hübsches Zeichen vergangenen Alters. Die beschädigte
                Architektur organisiert das gesamte Verhältnis von Lebenden, Toten und
                Geschichte. Sie bewahrt eine Form, aber nicht mehr die Institution, die
                diese Form einmal vollständig machte.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgb(29 36 35 / .18)",
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
              marginTop: "5rem",
            }}
          >
            {observations.map((observation) => (
              <article
                key={observation.number}
                style={{ background: "#e8e2d5", minHeight: "24rem", padding: "2rem" }}
              >
                <p style={{ color: "#705944", fontWeight: 800 }}>
                  {observation.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "3.2rem 0 1.4rem",
                  }}
                >
                  {observation.title}
                </h3>
                <p style={{ color: "rgb(29 36 35 / .72)", lineHeight: 1.76 }}>
                  {observation.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#182020", color: "#eee7dc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "92rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#bca374",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Drei Nachbarbilder
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 2rem",
              maxWidth: "13ch",
            }}
          >
            Sakrale Form bleibt bei Friedrich sichtbar, aber nie selbstverständlich.
          </h2>
          <p
            style={{
              color: "rgb(238 231 220 / .7)",
              fontSize: "1.15rem",
              lineHeight: 1.78,
              margin: "0 0 3.5rem",
              maxWidth: "46rem",
            }}
          >
            Kreuz, ferne Kirche und Friedhofstor zeigen drei andere Arten, Religion in
            Landschaft zu übersetzen. Der Vergleich verhindert, dass die Abtei nur als
            Bild von Tod gelesen wird: Sie gehört zu einer längeren Untersuchung
            darüber, wie Glaube nach dem Verlust eines geschlossenen Bildraums
            erscheinen kann.
          </p>
          <ArtworkStrip
            items={abbeyContextArtworks}
            title="Sakrale Distanz bei Caspar David Friedrich"
          />
        </div>
      </section>

      <section style={{ background: "#d4c8b4", color: "#201f1b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "84rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#6b4b36",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Vier Spannungen
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
            Das Bild bleibt stark, weil keine Deutung den Verlust vollständig schließt.
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
            }}
          >
            {tensions.map((tension) => (
              <article
                key={tension.title}
                style={{ border: "1px solid rgb(32 31 27 / .18)", padding: "2rem" }}
              >
                <h3
                  style={{
                    color: "#6b4b36",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.08,
                    margin: 0,
                  }}
                >
                  {tension.title}
                </h3>
                <p
                  style={{
                    color: "rgb(32 31 27 / .72)",
                    lineHeight: 1.78,
                    margin: "1.5rem 0 0",
                  }}
                >
                  {tension.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f1515", color: "#eee7dc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "72rem",
            padding: "clamp(6rem, 11vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#bca374",
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
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: "1rem 0 3rem",
            }}
          >
            Von der einzelnen Ruine zu Erinnerung, Nacht und Friedrichs Gesamtwerk.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            }}
          >
            <Link
              href="/begriffe/ruine-und-erinnerung/"
              style={{ border: "1px solid rgb(238 231 220 / .18)", padding: "1.5rem" }}
            >
              Ruine und Erinnerung verstehen →
            </Link>
            <Link
              href="/motive/nacht/"
              style={{ border: "1px solid rgb(238 231 220 / .18)", padding: "1.5rem" }}
            >
              Die Nacht als Motiv lesen →
            </Link>
            <Link
              href="/kuenstler/caspar-david-friedrich/"
              style={{ border: "1px solid rgb(238 231 220 / .18)", padding: "1.5rem" }}
            >
              Caspar David Friedrich →
            </Link>
            <Link
              href="/epochen/romantik/"
              style={{ border: "1px solid rgb(238 231 220 / .18)", padding: "1.5rem" }}
            >
              Zur Romantik-Epochenreise →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
