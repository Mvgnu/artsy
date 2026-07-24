import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eugène Delacroix: Farbe, Konflikt und politische Romantik",
  description:
    "Ein vertieftes Künstlerprofil zu Eugène Delacroix: Ausbildung, Farbe, Literatur, Revolution, Kolonialblick und die politische Kraft seiner Malerei.",
  alternates: {
    canonical: "/kuenstler/eugene-delacroix/",
  },
};

const libertyImage =
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg";

const phases = [
  {
    period: "1798–1822",
    title: "Zwischen Akademie und literarischer Imagination",
    text: "Delacroix wurde in Paris ausgebildet, orientierte sich aber früh weniger an glatter klassizistischer Ordnung als an Rubens, venezianischer Farbe, Shakespeare, Byron und zeitgenössischen Katastrophen. Literatur war für ihn kein bloßer Stofflieferant. Sie bot Situationen, in denen Leidenschaft, Gewalt und moralische Unübersichtlichkeit sichtbar werden konnten.",
  },
  {
    period: "1822–1830",
    title: "Skandal, Massaker und moderne Historienmalerei",
    text: "Mit Werken wie Dantebarke und Das Massaker von Chios verschob Delacroix das Historienbild. Statt heroischer Klarheit zeigte er Körper, die leiden, taumeln und einander widersprechen. Politische Geschichte erschien nicht als sauber geordnete Lehre, sondern als überfüllte Gegenwart aus Gewalt, Mitgefühl, Distanz und Spektakel.",
  },
  {
    period: "1830–1840",
    title: "Revolution, Staatsauftrag und Nordafrika",
    text: "Die Julirevolution von 1830 führte zu Freiheit führt das Volk, doch Delacroix war kein einfacher Revolutionsmaler. Zugleich arbeitete er für staatliche Programme und reiste 1832 nach Nordafrika. Seine dortigen Bilder erweiterten seine Farb- und Stoffwelt, blieben aber in koloniale Blickordnungen eingebunden, die Menschen und Räume als europäische Bildressource verfügbar machten.",
  },
  {
    period: "1840–1863",
    title: "Monumentale Dekoration und kontrollierte Unruhe",
    text: "In großen Wandprogrammen verband Delacroix Bewegung, Farbkontraste und historische Allegorie mit architektonischer Ordnung. Seine späte Malerei ist nicht einfach freier geworden. Sie zeigt vielmehr, wie dynamische Kräfte innerhalb monumentaler Systeme organisiert werden können, ohne ihre Spannung ganz zu verlieren.",
  },
] as const;

const strategies = [
  {
    title: "Farbe als Handlung",
    text: "Farbe beschreibt bei Delacroix nicht nur Stoffe und Licht. Warme und kalte Kontraste ziehen Figuren zusammen, trennen Gruppen, beschleunigen Blickbewegungen und erzeugen emotionale Temperatur.",
  },
  {
    title: "Der Körper als politisches Feld",
    text: "Körper tragen Klasse, Verletzung, Begehren, Angst und Handlungsmacht. Sie sind selten neutrale Träger einer Idee; ihre Haltung und Verwundbarkeit machen historische Konflikte physisch erfahrbar.",
  },
  {
    title: "Allegorie in der Gegenwart",
    text: "Delacroix lässt abstrakte Begriffe wie Freiheit nicht außerhalb der Geschichte schweben. Allegorische Figuren treten in konkrete Straßen, über Tote und zwischen bewaffnete Bürger. Dadurch gewinnt die Idee Kraft, aber auch Widerspruch.",
  },
  {
    title: "Instabile Zuschauerposition",
    text: "Viele Bilder geben keinen sicheren moralischen Aussichtspunkt. Der Betrachter steht nahe an Gewalt und Pathos, wird emotional hineingezogen und bleibt zugleich mit der Frage zurück, ob Mitgefühl, Schaulust und politische Zustimmung auseinanderzuhalten sind.",
  },
] as const;

export default function EugeneDelacroixPage() {
  return (
    <article
      style={{
        background: "#181311",
        color: "#f2e7d7",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "grid",
          minHeight: "88svh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
          }}
        >
          <div
            style={{
              alignContent: "end",
              display: "grid",
              padding: "clamp(6rem, 12vw, 10rem) clamp(1.25rem, 6vw, 6rem)",
            }}
          >
            <p
              style={{
                color: "#dca15d",
                fontSize: ".75rem",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              Künstlerprofil · Französische Romantik
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(4.2rem, 11vw, 9rem)",
                fontWeight: 500,
                letterSpacing: "-.055em",
                lineHeight: ".82",
                margin: "1.5rem 0 0",
              }}
            >
              Eugène
              <span style={{ color: "#dca15d", display: "block", fontStyle: "italic" }}>
                Delacroix
              </span>
            </h1>
            <p
              style={{
                color: "rgb(242 231 215 / .74)",
                fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                lineHeight: 1.7,
                margin: "3rem 0 0",
                maxWidth: "37rem",
              }}
            >
              Delacroix malte politische Geschichte nicht als geordnete Abfolge großer
              Männer. Er machte sie zu einer dichten Oberfläche aus Farbe, verletzlichen
              Körpern, Pathos und widersprüchlicher Nähe.
            </p>
          </div>

          <figure
            style={{
              margin: 0,
              minHeight: "32rem",
              position: "relative",
            }}
          >
            <Image
              alt="Eugène Delacroix' Freiheit führt das Volk: eine bewaffnete Frauenfigur mit Trikolore führt Menschen über eine Barrikade."
              fill
              preload
              sizes="(min-width: 900px) 50vw, 100vw"
              src={libertyImage}
              style={{ objectFit: "cover", objectPosition: "56% center" }}
            />
            <figcaption
              style={{
                background: "rgb(24 19 17 / .82)",
                bottom: 0,
                fontSize: ".72rem",
                left: 0,
                lineHeight: 1.5,
                padding: ".8rem 1rem",
                position: "absolute",
                right: 0,
              }}
            >
              Eugène Delacroix, <em>La Liberté guidant le peuple</em>, 1830. Musée du
              Louvre. Public Domain.
            </figcaption>
          </figure>
        </div>
      </header>

      <section style={{ background: "#f0e5d3", color: "#211916" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "82rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#9a4d2e",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Eine Karriere in Spannungen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 4rem",
              maxWidth: "12ch",
            }}
          >
            Moderne Geschichte ohne sicheren Mittelpunkt
          </h2>

          <div
            style={{ display: "grid", gap: "1px", background: "rgb(33 25 22 / .18)" }}
          >
            {phases.map((phase) => (
              <section
                key={phase.period}
                style={{
                  background: "#f0e5d3",
                  display: "grid",
                  gap: "1.5rem",
                  gridTemplateColumns: "minmax(7rem, .35fr) minmax(0, 1fr)",
                  padding: "clamp(1.5rem, 4vw, 3rem)",
                }}
              >
                <p style={{ color: "#9a4d2e", fontWeight: 800, margin: 0 }}>
                  {phase.period}
                </p>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      fontWeight: 500,
                      lineHeight: 1.05,
                      margin: 0,
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      color: "rgb(33 25 22 / .73)",
                      lineHeight: 1.8,
                      margin: "1rem 0 0",
                      maxWidth: "48rem",
                    }}
                  >
                    {phase.text}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "82rem",
            padding: "clamp(6rem, 11vw, 10rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#dca15d",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Wie Delacroix Bilder antreibt
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
            Gefühl ist bei ihm keine Alternative zur Politik.
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            }}
          >
            {strategies.map((strategy) => (
              <article
                key={strategy.title}
                style={{
                  border: "1px solid rgb(242 231 215 / .16)",
                  minHeight: "19rem",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.05,
                    margin: 0,
                  }}
                >
                  {strategy.title}
                </h3>
                <p
                  style={{
                    color: "rgb(242 231 215 / .68)",
                    lineHeight: 1.75,
                    margin: "2rem 0 0",
                  }}
                >
                  {strategy.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#9a4d2e", color: "#fff1dd" }}>
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
              Kein neutraler Meister der Farbe
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 500,
                letterSpacing: "-.045em",
                lineHeight: 1,
                margin: "1rem 0 0",
              }}
            >
              Die Energie seiner Malerei entlastet ihre Bilder nicht von Geschichte.
            </h2>
          </div>
          <div
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.82,
              maxWidth: "43rem",
            }}
          >
            <p>
              Delacroix wird häufig als Befreier der Farbe gefeiert. Das ist formal
              nachvollziehbar, kann aber politische und koloniale Zusammenhänge
              unsichtbar machen. Seine Malerei erzeugt starke emotionale Beteiligung;
              gerade deshalb muss gefragt werden, wessen Leid sichtbar wird, wer als
              handelndes Subjekt erscheint und welche Räume als fremd oder verfügbar
              inszeniert werden.
            </p>
            <p>
              Seine Bedeutung liegt nicht darin, eindeutige Antworten zu liefern. Sie
              liegt darin, dass seine Bilder politische Ideen in Körper, Stoffe,
              Verletzungen und Blickrichtungen übersetzen und dabei ihre Widersprüche
              nicht vollständig beruhigen.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ background: "#f0e5d3", color: "#211916" }}>
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
            href="/werke/freiheit-fuehrt-das-volk/"
            style={{ border: "1px solid rgb(33 25 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.25rem" }}>
              Freiheit führt das Volk lesen
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Allegorie, Barrikade, Klassen und Tote im Detail →
            </span>
          </Link>
          <Link
            href="/begriffe/revolution-und-koerper/"
            style={{ border: "1px solid rgb(33 25 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.25rem" }}>
              Revolution und Körper
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Wie politische Malerei Ideen verkörpert →
            </span>
          </Link>
          <Link
            href="/epochen/romantik/"
            style={{ border: "1px solid rgb(33 25 22 / .2)", padding: "2rem" }}
          >
            <strong style={{ display: "block", fontSize: "1.25rem" }}>
              Zur Romantik
            </strong>
            <span style={{ display: "block", marginTop: ".8rem" }}>
              Zurück zur visuellen Epochenreise →
            </span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
