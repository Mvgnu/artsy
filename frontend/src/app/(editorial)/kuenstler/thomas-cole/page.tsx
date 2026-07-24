import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const oxbow = {
  title: "The Oxbow",
  imageUrl:
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10497/1655152/main-image",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/10497",
  alt: "Thomas Coles The Oxbow: links dunkler Wald und Gewitter, rechts eine helle Flussschleife mit kultivierten Feldern.",
};

export const metadata: Metadata = {
  title: "Thomas Cole: Landschaft, Fortschritt und amerikanischer Mythos",
  description:
    "Ein Künstlerprofil über Thomas Cole, die Hudson River School und die politische Bedeutung seiner Landschaften.",
  alternates: {
    canonical: "/kuenstler/thomas-cole/",
  },
};

const phases = [
  {
    date: "1801–1818",
    title: "Migration und frühe Prägung",
    text: "Cole wurde in Bolton in England geboren und emigrierte als Jugendlicher mit seiner Familie in die Vereinigten Staaten. Die Erfahrung eines rasch industrialisierten Englands und eines expandierenden Amerikas blieb ein wichtiger Hintergrund seiner späteren Landschaftsvorstellungen.",
  },
  {
    date: "1820er",
    title: "Landschaft wird zur Berufung",
    text: "Nach autodidaktischen Anfängen und Reisen entlang des Hudson River fand Cole ein Publikum für groß gedachte amerikanische Landschaften. Seine Bilder verbanden genaue Naturbeobachtung mit komponierten moralischen und historischen Aussagen.",
  },
  {
    date: "1830er",
    title: "Zyklen über Aufstieg und Verfall",
    text: "In Serien wie The Course of Empire verwandelte Cole Landschaft in ein Modell der Geschichte. Natur, Stadt, Krieg und Ruine wurden zu Stationen einer Warnung vor Expansion, Luxus und politischer Selbstüberschätzung.",
  },
  {
    date: "1840er",
    title: "Glaube, Nation und Vermächtnis",
    text: "Späte Werke verbanden religiöse Symbolik, persönliche Melancholie und nationale Zukunftsfragen. Cole starb 1848, doch seine Bildsprache prägte die Hudson River School und die amerikanische Vorstellung von Landschaft dauerhaft.",
  },
] as const;

const strategies = [
  {
    title: "Beobachtung plus Konstruktion",
    text: "Cole zeichnete reale Orte, setzte sie im Atelier aber neu zusammen. Seine Landschaften sehen topografisch glaubwürdig aus, sind jedoch argumentativ gebaut.",
  },
  {
    title: "Natur als moralische Bühne",
    text: "Wetter, Licht, Baumgruppen und Fernsicht stehen nicht neutral nebeneinander. Sie ordnen Werte wie Gefahr, Hoffnung, Maßlosigkeit, Verlust und Erneuerung.",
  },
  {
    title: "Der Überblick als Machtposition",
    text: "Viele Bilder geben dem Betrachter einen erhöhten Standort. Dieser Überblick wirkt souverän, macht aber auch sichtbar, wie Landschaft vermessen, benannt und verfügbar gedacht wird.",
  },
  {
    title: "Fortschritt ohne Eindeutigkeit",
    text: "Cole kritisierte Zerstörung und Expansion, blieb aber Teil einer Kultur, die das Land als nationale Zukunftsfläche deutete. Diese Spannung macht seine Werke produktiver als eine einfache Pro- oder Anti-Fortschrittsbotschaft.",
  },
] as const;

export default function ThomasColePage() {
  return (
    <article
      style={{
        background: "#e9e1cf",
        color: "#17211e",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
          minHeight: "82svh",
          background: "#17211e",
          color: "#f3ecdc",
        }}
      >
        <div
          style={{
            display: "grid",
            alignContent: "end",
            padding: "clamp(6rem, 12vw, 10rem) clamp(1.25rem, 7vw, 7rem)",
          }}
        >
          <p style={{ color: "#d2aa66", fontWeight: 800, letterSpacing: ".18em" }}>
            KÜNSTLERPROFIL · 1801–1848
          </p>
          <h1
            style={{
              maxWidth: "8ch",
              margin: "1rem 0 2rem",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4.5rem, 11vw, 9rem)",
              fontWeight: 500,
              letterSpacing: "-.06em",
              lineHeight: ".86",
            }}
          >
            Thomas Cole
          </h1>
          <p style={{ maxWidth: "34rem", fontSize: "1.25rem", lineHeight: 1.75 }}>
            Cole malte Landschaft nicht als leere Natur. Er machte sie zum Ort, an dem eine
            junge Nation über Fortschritt, Eigentum, Erinnerung und ihre eigene Zukunft
            nachdachte.
          </p>
        </div>
        <div style={{ position: "relative", minHeight: "34rem" }}>
          <Image alt={oxbow.alt} fill priority sizes="(min-width: 900px) 50vw, 100vw" src={oxbow.imageUrl} style={{ objectFit: "cover" }} />
        </div>
      </header>

      <section style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
        <p style={{ color: "#8b5b36", fontWeight: 800, letterSpacing: ".18em" }}>
          WARUM COLE WICHTIG IST
        </p>
        <h2 style={{ maxWidth: "13ch", margin: "1rem 0 3rem", fontFamily: "var(--font-serif)", fontSize: "clamp(3.2rem, 8vw, 7rem)", fontWeight: 500, letterSpacing: "-.05em", lineHeight: .95 }}>
          Landschaft wurde bei ihm zur Geschichtserzählung.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))", gap: "1.25rem" }}>
          <p style={{ fontSize: "1.17rem", lineHeight: 1.85 }}>
            Cole gilt als zentrale Figur der Hudson River School. Der Begriff bezeichnet
            keine Schule im institutionellen Sinn, sondern eine lose Gruppe von Malern,
            die amerikanische Landschaften mit großer topografischer Aufmerksamkeit und
            ebenso großer symbolischer Aufladung darstellten.
          </p>
          <p style={{ fontSize: "1.17rem", lineHeight: 1.85 }}>
            Seine Bilder entstanden in einer Zeit territorialer Expansion, beschleunigter
            Besiedlung und wirtschaftlicher Umformung. Wenn Cole Wildnis und kultiviertes
            Land gegenüberstellt, malt er deshalb nicht nur Naturzustände. Er malt konkurrierende
            Vorstellungen davon, was Amerika sein sollte.
          </p>
        </div>
      </section>

      <section style={{ background: "#c9b78e" }}>
        <div style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 11vw, 9rem) 0" }}>
          <p style={{ color: "#5e3825", fontWeight: 800, letterSpacing: ".18em" }}>LEBEN UND ARBEIT</p>
          <div style={{ display: "grid", gap: "1px", marginTop: "3rem", background: "rgb(23 33 30 / .22)", border: "1px solid rgb(23 33 30 / .22)" }}>
            {phases.map((phase) => (
              <section key={phase.date} style={{ display: "grid", gridTemplateColumns: "minmax(7rem, .25fr) 1fr", gap: "2rem", padding: "2rem", background: "#d9caa8" }}>
                <strong>{phase.date}</strong>
                <div>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500 }}>{phase.title}</h3>
                  <p style={{ margin: "1rem 0 0", lineHeight: 1.75 }}>{phase.text}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
        <p style={{ color: "#8b5b36", fontWeight: 800, letterSpacing: ".18em" }}>WIE SEINE BILDER ARBEITEN</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", gap: "1rem", marginTop: "3rem" }}>
          {strategies.map((strategy, index) => (
            <article key={strategy.title} style={{ padding: "2rem", border: "1px solid rgb(23 33 30 / .2)" }}>
              <span style={{ color: "#8b5b36", fontWeight: 800 }}>0{index + 1}</span>
              <h3 style={{ margin: "3rem 0 1rem", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500 }}>{strategy.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.75 }}>{strategy.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#17211e", color: "#f3ecdc" }}>
        <div style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
          <p style={{ color: "#d2aa66", fontWeight: 800, letterSpacing: ".18em" }}>DIE SCHWIERIGE FRAGE</p>
          <h2 style={{ maxWidth: "15ch", margin: "1rem 0 2rem", fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, lineHeight: .98 }}>
            Wer darf Landschaft als „leer“ oder „wild“ erzählen?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "2rem" }}>
            <p style={{ color: "rgb(243 236 220 / .78)", fontSize: "1.08rem", lineHeight: 1.85 }}>
              Coles Sorge um zerstörte Natur ist real. Gleichzeitig beruhte die Vorstellung
              unberührter amerikanischer Wildnis häufig darauf, indigene Präsenz, Nutzung
              und Vertreibung unsichtbar zu machen. Ein kritischer Blick muss beide Ebenen
              zusammenhalten.
            </p>
            <p style={{ color: "rgb(243 236 220 / .78)", fontSize: "1.08rem", lineHeight: 1.85 }}>
              Deshalb ist Cole weder bloß Naturschützer noch bloß Ideologe der Expansion.
              Seine Gemälde zeigen eine Gesellschaft, die ihre Widersprüche in Landschaft
              projiziert – und gerade dadurch mehr verrät, als eine eindeutige Botschaft es könnte.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "5rem 0 7rem" }}>
        <p style={{ color: "#8b5b36", fontWeight: 800, letterSpacing: ".18em" }}>WEITERLESEN</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", gap: "1rem", marginTop: "2rem" }}>
          <Link href="/werke/the-oxbow-thomas-cole/">The Oxbow Schritt für Schritt lesen →</Link>
          <Link href="/begriffe/landschaft-und-nation/">Landschaft und Nation verstehen →</Link>
          <Link href="/epochen/romantik/">Zurück zur Romantik →</Link>
          <a href={oxbow.sourceUrl}>Werkdatensatz bei The Met →</a>
        </div>
      </footer>
    </article>
  );
}
