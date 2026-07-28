import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkMedia } from "@/components/experiences/ArtworkMedia";

export const metadata: Metadata = {
  title: "Die Ährenleserinnen: Arbeit nach der Ernte",
  description:
    "Eine visuelle Werkanalyse von Jean-François Millets The Gleaners über Bewegung, Erntereste, soziale Distanz und monumentale Wiederholung.",
  alternates: { canonical: "/werke/die-aehrenleserinnen/" },
};

const source =
  "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg";
const image =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jean-Fran%C3%A7ois%20Millet%20-%20Gleaners%20-%20Google%20Art%20Project%202.jpg";

const links = [
  ["Künstler", "/kuenstler/jean-francois-millet/", "Jean-François Millet"],
  [
    "Begriff",
    "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/",
    "Ländliche Arbeit",
  ],
  ["Vergleich", "/werke/die-steinklopfer/", "Die Steinklopfer"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function GleanersPage() {
  return (
    <main style={{ background: "#d9cfb8", color: "#211f19" }}>
      <section
        style={{
          display: "grid",
          gap: "3rem",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(18rem, .55fr)",
          margin: "0 auto",
          maxWidth: "100rem",
          padding: "clamp(4rem, 9vw, 8rem) 1.25rem 3rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".2em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Werkdecoder · Jean-François Millet · 1857
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4rem, 11vw, 9.5rem)",
              fontWeight: 500,
              letterSpacing: "-.07em",
              lineHeight: ".84",
              margin: "1.2rem 0 0",
              maxWidth: "8ch",
            }}
          >
            Nach der Ernte beginnt die Arbeit am Rest.
          </h1>
        </div>
        <p
          style={{
            alignSelf: "end",
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            lineHeight: 1.72,
            margin: 0,
          }}
        >
          Millet zeigt keine idyllische Feldszene. Er baut eine soziale Ordnung aus
          Körperhöhe, Entfernung und Wiederholung: vorne drei Frauen, hinten der Ertrag,
          dazwischen ein Horizont, der fast wie eine Grenze funktioniert.
        </p>
      </section>

      <section style={{ padding: "0 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "100rem" }}>
          <ArtworkMedia
            alt="Drei Ährenleserinnen beugen sich auf einem abgeernteten Feld, während im Hintergrund die große Ernte eingebracht wird."
            aspectRatio="16 / 8.5"
            caption="Jean-François Millet, Die Ährenleserinnen, 1857. Das ganze Bild: drei gebückte Körper im Vordergrund, Überfluss und Organisation weit dahinter."
            credit="Wikimedia Commons · Public Domain"
            imageUrl={image}
            sourceUrl={source}
          />
        </div>
      </section>

      <section
        style={{
          margin: "0 auto",
          maxWidth: "100rem",
          padding: "clamp(6rem, 12vw, 11rem) 1.25rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "clamp(3rem, 7vw, 7rem)",
            gridTemplateColumns: "minmax(0, .7fr) minmax(0, 1.3fr)",
          }}
        >
          <div style={{ position: "sticky", top: "2rem", alignSelf: "start" }}>
            <p
              style={{
                fontSize: ".7rem",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              01 · Eine Bewegung in drei Zeiten
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 500,
                letterSpacing: "-.055em",
                lineHeight: ".95",
                margin: "1rem 0",
              }}
            >
              Greifen. Aufrichten. Sammeln.
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: 1.82 }}>
              Die drei Frauen bilden keinen dekorativen Chor. Ihre Körper zeigen aufeinander
              folgende Phasen derselben Tätigkeit. Der Blick wandert von links nach rechts
              und erlebt Arbeit als endlose Schleife statt als dramatischen Augenblick.
            </p>
          </div>

          <div style={{ display: "grid", gap: "2rem" }}>
            {[
              ["20% center", "Die linke Figur greift tief nach unten. Der Rücken bildet fast eine horizontale Lastlinie."],
              ["50% center", "Die mittlere Figur richtet sich nur teilweise auf. Entlastung bleibt ein Zwischenzustand."],
              ["79% center", "Die rechte Figur sammelt die gefundenen Ähren. Das Ergebnis bleibt klein, die Bewegung beginnt erneut."],
            ].map(([position, caption], index) => (
              <ArtworkMedia
                key={position}
                alt={`Detail ${index + 1} aus Millets Die Ährenleserinnen`}
                aspectRatio="3 / 2"
                caption={caption}
                credit="Wikimedia Commons · Public Domain"
                imageUrl={image}
                objectPosition={position}
                sourceUrl={source}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#24271f", color: "#f0eadb" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
            margin: "0 auto",
            maxWidth: "100rem",
            padding: "clamp(6rem, 12vw, 10rem) 1.25rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#c8ad6d",
                fontSize: ".7rem",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              02 · Der Horizont als soziale Trennlinie
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 500,
                letterSpacing: "-.055em",
                lineHeight: ".95",
                margin: "1rem 0",
              }}
            >
              Vorne die Reste. Hinten der Ertrag.
            </h2>
          </div>
          <div style={{ alignSelf: "end" }}>
            <p style={{ color: "rgb(240 234 219 / .75)", fontSize: "1.15rem", lineHeight: 1.85 }}>
              Wagen, Kornschober, Tiere und weitere Arbeiter liegen in der Ferne. Dort wird
              die eigentliche Ernte organisiert. Die Frauen im Vordergrund arbeiten dagegen
              an dem, was übrig bleibt. Perspektive wird so zum sozialen Argument.
            </p>
            <div
              style={{
                borderTop: "1px solid rgb(240 234 219 / .25)",
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "1fr 1fr",
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
              }}
            >
              <div>
                <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem" }}>
                  Vordergrund
                </strong>
                <span style={{ color: "rgb(240 234 219 / .68)", lineHeight: 1.6 }}>
                  gebückte Körper, trockene Erde, einzelne Ähren
                </span>
              </div>
              <div>
                <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem" }}>
                  Hintergrund
                </strong>
                <span style={{ color: "rgb(240 234 219 / .68)", lineHeight: 1.6 }}>
                  volle Wagen, Kornschober, Aufsicht, organisierter Überfluss
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "clamp(3rem, 7vw, 7rem)",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(18rem, .65fr)",
          margin: "0 auto",
          maxWidth: "100rem",
          padding: "clamp(6rem, 12vw, 10rem) 1.25rem",
        }}
      >
        <ArtworkMedia
          alt="Die Ährenleserinnen in einer engeren Ansicht, bei der die drei Frauen fast die gesamte Bildbreite tragen."
          aspectRatio="4 / 3"
          caption="Die Größe der Figuren verleiht ihnen Sichtbarkeit, doch ihre Haltung bleibt nach unten gezogen. Monumentalität bedeutet hier nicht Befreiung."
          credit="Wikimedia Commons · Public Domain"
          imageUrl={image}
          objectPosition="center 58%"
          sourceUrl={source}
        />
        <div style={{ alignSelf: "center" }}>
          <p
            style={{
              fontSize: ".7rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            03 · Monumental ohne Triumph
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".95",
              margin: "1rem 0",
            }}
          >
            Würde und Abhängigkeit bleiben gleichzeitig sichtbar.
          </h2>
          <p style={{ fontSize: "1.12rem", lineHeight: 1.82 }}>
            Millet vergrößert die Frauen, ohne sie aus ihrer Lage herauszumalen. Ihre Gesichter
            bleiben schwer lesbar, ihre Arbeit bleibt niedrig am Boden, und der sichtbare
            Überfluss gehört weiterhin einer anderen Zone des Bildes.
          </p>
        </div>
      </section>

      <section style={{ background: "#b19a62", color: "#211f19" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)",
            margin: "0 auto",
            maxWidth: "94rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".95",
              margin: 0,
            }}
          >
            Das Bild ist keine Parole. Es ist eine organisierte Erfahrung von Ungleichheit.
          </h2>
          <p style={{ alignSelf: "end", fontSize: "1.2rem", lineHeight: 1.85, margin: 0 }}>
            Seine politische Kraft liegt nicht in einer eindeutigen Botschaft, sondern darin,
            dass wir den Abstand zwischen Arbeit und Ertrag körperlich mitsehen. Die Seite endet
            deshalb nicht mit einer Bildergalerie, sondern mit der Frage, wie andere realistische
            Werke soziale Ordnung über Räume, Werkzeuge und Körper verteilen.
          </p>
        </div>
      </section>

      <nav
        aria-label="Weiterführende Wege"
        style={{ margin: "0 auto", maxWidth: "94rem", padding: "clamp(4rem, 9vw, 7rem) 1.25rem" }}
      >
        <div
          style={{
            display: "grid",
            gap: "1px",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            background: "rgb(33 31 25 / .3)",
            border: "1px solid rgb(33 31 25 / .3)",
          }}
        >
          {links.map(([eyebrow, href, title]) => (
            <Link
              key={href}
              href={href}
              style={{
                background: "#d9cfb8",
                color: "inherit",
                minHeight: "12rem",
                padding: "1.5rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: ".7rem",
                  fontWeight: 800,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </span>
              <strong
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  marginTop: "2rem",
                }}
              >
                {title} →
              </strong>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
