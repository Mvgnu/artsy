import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freiheit führt das Volk: Delacroix' Revolutionsbild lesen",
  description:
    "Eine vertiefte Bildanalyse von Eugène Delacroix' Freiheit führt das Volk: Allegorie, Klassen, Barrikade, Tote, Blickführung und politische Nachwirkung.",
  alternates: {
    canonical: "/werke/freiheit-fuehrt-das-volk/",
  },
};

const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg";

const observations = [
  {
    number: "01",
    title: "Die Pyramide trägt keine stabile Ordnung.",
    text: "Liberty bildet die Spitze einer Dreiecksbewegung, doch ihr Fundament besteht aus Toten, Trümmern und taumelnden Körpern. Der klassische Aufbau stabilisiert das Bild nur teilweise; materiell ruht der Aufstieg auf Verlust.",
  },
  {
    number: "02",
    title: "Allegorie betritt die schmutzige Gegenwart.",
    text: "Die zentrale Frau ist zugleich reale Straßenkämpferin und überzeitliche Verkörperung der Freiheit. Ihre nackte Brust, phrygische Mütze und Trikolore heben sie aus der Menge heraus, während Schmutz, Gewehr und Schritt sie wieder in das konkrete Geschehen zurückziehen.",
  },
  {
    number: "03",
    title: "Die Menge behauptet soziale Breite.",
    text: "Arbeiter, Bürger, Jugendliche und bewaffnete Kämpfer erscheinen nebeneinander. Das Bild erzeugt damit eine Vorstellung gemeinsamer Bewegung über Klassen hinweg. Zugleich bleiben Frauen, Kolonisierte und viele reale politische Akteure außerhalb dieser Einheit.",
  },
  {
    number: "04",
    title: "Die Toten sind nicht bloß dramatischer Vordergrund.",
    text: "Ihre entblößten und verdrehten Körper machen sichtbar, dass politische Erhebung nicht nur aus Symbolen besteht. Sie unterbrechen den heroischen Vorwärtsdrang und zwingen den Blick, Kosten und Pathos gleichzeitig auszuhalten.",
  },
] as const;

const tensions = [
  {
    title: "Reportage oder Mythos?",
    text: "Das Gemälde bezieht sich auf die Julirevolution von 1830, dokumentiert aber keinen einzelnen Moment. Delacroix verdichtet verschiedene soziale Figuren, Kostüme und Bildtraditionen zu einer Szene, die historisch konkret und bereits mythisch ist.",
  },
  {
    title: "Volk oder ausgewählte Öffentlichkeit?",
    text: "Die Gruppe wirkt plural, doch sie bildet kein neutrales gesellschaftliches Abbild. Das Gemälde entwirft, wer als repräsentatives Volk erscheinen darf und welche Differenzen für den Moment der Einheit zurücktreten sollen.",
  },
  {
    title: "Freiheit oder neue Ordnung?",
    text: "Die Julirevolution stürzte Karl X., führte aber nicht zu einer sozialen Republik. Das Bild wurde zum Symbol allgemeiner Befreiung, obwohl der historische Ausgang begrenzter und widersprüchlicher war.",
  },
  {
    title: "Emanzipation oder sexualisierte Allegorie?",
    text: "Liberty besitzt Handlungsmacht, führt bewaffnet und blickt zurück. Gleichzeitig wird ihr Körper exponiert und ästhetisch verfügbar. Die Figur verbindet politische Autorität mit einer langen Bildtradition, in der abstrakte Ideen weiblich verkörpert und männlich betrachtet werden.",
  },
] as const;

export default function LibertyLeadingThePeoplePage() {
  return (
    <article style={{ background: "#efe2cf", color: "#251a16", minHeight: "100vh" }}>
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
          minHeight: "90svh",
        }}
      >
        <div
          style={{
            alignContent: "end",
            background: "#8e3f2a",
            color: "#fff2df",
            display: "grid",
            padding: "clamp(6rem, 12vw, 10rem) clamp(1.25rem, 6vw, 6rem)",
          }}
        >
          <p
            style={{
              fontSize: ".74rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Werk lesen · 1830
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4rem, 9vw, 8rem)",
              fontWeight: 500,
              letterSpacing: "-.055em",
              lineHeight: ".88",
              margin: "1.5rem 0 0",
            }}
          >
            Freiheit führt
            <span style={{ color: "#e6b76d", display: "block", fontStyle: "italic" }}>
              das Volk
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              lineHeight: 1.7,
              margin: "3rem 0 0",
              maxWidth: "38rem",
            }}
          >
            Delacroix verbindet Straßenkampf und Allegorie so eng, dass das Bild
            zugleich historische Szene, politisches Versprechen und nachträglich
            geglätteter Mythos wird.
          </p>
        </div>

        <figure style={{ margin: 0, minHeight: "34rem", position: "relative" }}>
          <Image
            alt="Freiheit führt das Volk von Eugène Delacroix: eine bewaffnete Frau mit Trikolore führt eine gemischte Gruppe über Barrikadentote."
            fill
            preload
            sizes="(min-width: 900px) 55vw, 100vw"
            src={imageUrl}
            style={{ objectFit: "contain", background: "#161211" }}
          />
          <figcaption
            style={{
              background: "rgb(22 18 17 / .9)",
              bottom: 0,
              color: "#f3e7d5",
              fontSize: ".72rem",
              left: 0,
              lineHeight: 1.5,
              padding: ".8rem 1rem",
              position: "absolute",
              right: 0,
            }}
          >
            Eugène Delacroix, <em>La Liberté guidant le peuple</em>, 1830, Öl auf
            Leinwand, Musée du Louvre. Public Domain.
          </figcaption>
        </figure>
      </header>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "82rem",
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
                  color: "#994a31",
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
                  fontSize: "clamp(3rem, 7vw, 6.2rem)",
                  fontWeight: 500,
                  letterSpacing: "-.05em",
                  lineHeight: ".96",
                  margin: "1rem 0 0",
                }}
              >
                Der Aufstieg beginnt im Vordergrund mit einem Hindernis.
              </h2>
            </div>
            <div style={{ fontSize: "1.1rem", lineHeight: 1.82 }}>
              <p>
                Der Blick trifft zuerst auf Tote und Barrikadenschutt. Erst darüber
                erhebt sich die vorwärtsdrängende Gruppe. Die Bewegung ist eindeutig
                nach vorn gerichtet, aber der Weg bleibt materiell und moralisch unrein.
              </p>
              <p>
                Liberty blickt zurück, während sie vorangeht. Diese Drehung verbindet
                Führung und Kontrolle: Sie ruft die Menge, überprüft ihre Gefolgschaft
                und zieht den Betrachter in dieselbe Bewegungsrichtung hinein.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1px",
              gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
              marginTop: "5rem",
              background: "rgb(37 26 22 / .2)",
            }}
          >
            {observations.map((observation) => (
              <article
                key={observation.number}
                style={{ background: "#efe2cf", minHeight: "24rem", padding: "2rem" }}
              >
                <p style={{ color: "#994a31", fontWeight: 800 }}>
                  {observation.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.06,
                    margin: "3.5rem 0 1.5rem",
                  }}
                >
                  {observation.title}
                </h3>
                <p style={{ color: "rgb(37 26 22 / .72)", lineHeight: 1.75 }}>
                  {observation.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#191311", color: "#f1e5d3" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "82rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#d79a55",
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
            Das Bild wird zur Ikone, weil es Widerspruch in eine starke Form zwingt.
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
                style={{ border: "1px solid rgb(241 229 211 / .17)", padding: "2rem" }}
              >
                <h3
                  style={{
                    color: "#d79a55",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {tension.title}
                </h3>
                <p
                  style={{
                    color: "rgb(241 229 211 / .7)",
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

      <section style={{ background: "#d8ad68", color: "#271b16" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
            margin: "0 auto",
            maxWidth: "82rem",
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
              Politische Nachwirkung
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
              Spätere Nutzung macht aus dem Gemälde keine neutrale Freiheitsmarke.
            </h2>
          </div>
          <div style={{ fontSize: "1.08rem", lineHeight: 1.82 }}>
            <p>
              Das Bild wurde in republikanischen, revolutionären, kommerziellen und
              popkulturellen Zusammenhängen wiederverwendet. Dabei lässt sich die
              zentrale Figur leicht aus ihrer historischen Umgebung lösen. Übrig bleibt
              eine sofort erkennbare Formel: Fahne, Vorwärtsbewegung, Volk.
            </p>
            <p>
              Eine genaue Betrachtung führt die verlorenen Elemente zurück: tote Körper,
              Klassenunterschiede, Rauch, bewaffnete Gewalt und einen politischen Sieg,
              der keineswegs alle Hoffnungen der Straße erfüllte.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            margin: "0 auto",
            maxWidth: "82rem",
            padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
          }}
        >
          <Link
            href="/kuenstler/eugene-delacroix/"
            style={{ border: "1px solid rgb(37 26 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              Eugène Delacroix
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Farbe, Körper und politische Historie →
            </span>
          </Link>
          <Link
            href="/begriffe/revolution-und-koerper/"
            style={{ border: "1px solid rgb(37 26 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              Revolution und Körper
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Die größere Bildlogik verstehen →
            </span>
          </Link>
          <Link
            href="/epochen/romantik/"
            style={{ border: "1px solid rgb(37 26 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.2rem" }}>
              Zur Romantik
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Zurück zur Epochenreise →
            </span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
