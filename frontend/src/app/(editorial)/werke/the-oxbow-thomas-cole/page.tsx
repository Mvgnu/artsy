import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const artwork = {
  title: "View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm—The Oxbow",
  shortTitle: "The Oxbow",
  artist: "Thomas Cole",
  date: "1836",
  medium: "Öl auf Leinwand",
  dimensions: "130,8 × 193 cm",
  institution: "The Metropolitan Museum of Art, New York",
  credit: "Gift of Mrs. Russell Sage, 1908",
  imageUrl:
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10497/1655152/main-image",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/10497",
  alt: "The Oxbow von Thomas Cole: eine große Flussschleife teilt eine dunkle wilde Waldlandschaft links von einer hellen kultivierten Ebene rechts.",
};

export const metadata: Metadata = {
  title: "The Oxbow von Thomas Cole: Bildanalyse",
  description:
    "Eine genaue Bildanalyse von Thomas Coles The Oxbow über Wildnis, Landwirtschaft, Fortschritt und die Macht des Überblicks.",
  alternates: {
    canonical: "/werke/the-oxbow-thomas-cole/",
  },
};

const observations = [
  {
    number: "01",
    title: "Das Bild ist entlang einer Wetterfront geteilt.",
    text: "Links drängen gebrochene Bäume, Fels und dunkle Wolken nach vorn. Rechts liegt die Flussschleife in hellem Licht. Die Trennung ist kein sauberer Schnitt, sondern eine Spannung, die sich über Himmel, Gelände und Blickrichtung zieht.",
  },
  {
    number: "02",
    title: "Die rechte Hälfte ist nicht einfach friedlicher.",
    text: "Felder, Wege und Rauchspuren zeigen menschliche Ordnung. Doch diese Ordnung bedeutet zugleich Eingriff, Besitz und Umformung. Das Licht macht sie attraktiv, aber nicht automatisch unschuldig.",
  },
  {
    number: "03",
    title: "Cole versteckt sich im Vordergrund.",
    text: "Zwischen Felsen, Regenschirm und Staffelei erscheint der Künstler winzig. Er beansprucht den Überblick und relativiert ihn zugleich: Der Beobachter ist Teil der Landschaft, nicht ihr neutraler Herrscher.",
  },
  {
    number: "04",
    title: "Die Flussschleife verbindet, was das Bild trennt.",
    text: "Der Connecticut River zieht eine große Kurve durch die Ebene. Er funktioniert als formales Zentrum, Verkehrsweg und Zeichen einer Landschaft, die zugleich Naturraum und wirtschaftliche Infrastruktur ist.",
  },
] as const;

const readings = [
  {
    title: "Wildnis gegen Zivilisation",
    text: "Die offensichtlichste Lesart erkennt links ungezähmte Natur und rechts kultivierte Ordnung. Sie erklärt die Komposition, wird aber problematisch, wenn sie die rechte Seite automatisch als Fortschritt bewertet.",
  },
  {
    title: "Warnung vor Expansion",
    text: "Cole sorgte sich um die Zerstörung der Landschaft durch Besiedlung und wirtschaftliche Entwicklung. Das Gewitter kann deshalb nicht nur Gefahr der Wildnis, sondern auch drohender Verlust eines verschwindenden Naturraums sein.",
  },
  {
    title: "Nationales Selbstbild",
    text: "Das Gemälde zeigt eine junge Nation, die sich über Land definiert. Der Blick von oben erzeugt Übersicht und Besitzgefühl. Landschaft wird dadurch zu einer politischen Vorstellung davon, wer das Land sieht, deutet und formt.",
  },
  {
    title: "Die Leerstelle indigener Geschichte",
    text: "Die scheinbar leere Wildnis war weder unbewohnt noch geschichtslos. Eine heutige Analyse muss beachten, dass nationale Landschaftsbilder indigene Präsenz und Vertreibung häufig unsichtbar machten.",
  },
] as const;

export default function OxbowPage() {
  return (
    <article style={{ background: "#e9e1cf", color: "#18211e", minHeight: "100vh" }}>
      <header style={{ padding: "clamp(5rem, 10vw, 8rem) 1.25rem 3rem", textAlign: "center" }}>
        <p style={{ color: "#8c5b35", fontWeight: 800, letterSpacing: ".18em" }}>
          WERKDEKODER · 1836
        </p>
        <h1 style={{ maxWidth: "11ch", margin: "1rem auto 2rem", fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: .9 }}>
          The Oxbow
        </h1>
        <p style={{ maxWidth: "42rem", margin: "0 auto", fontSize: "1.25rem", lineHeight: 1.75 }}>
          Ein berühmtes Landschaftsbild, das nicht zwischen Natur und Zivilisation entscheidet,
          sondern zeigt, wie sehr diese Begriffe politisch gemacht sind.
        </p>
      </header>

      <figure style={{ width: "min(94rem, calc(100% - 2rem))", margin: "0 auto" }}>
        <div style={{ position: "relative", aspectRatio: "1.475", background: "#111816" }}>
          <Image alt={artwork.alt} fill priority sizes="100vw" src={artwork.imageUrl} style={{ objectFit: "contain" }} />
        </div>
        <figcaption style={{ marginTop: "1rem", fontSize: ".82rem", lineHeight: 1.6 }}>
          <em>{artwork.shortTitle}</em>, {artwork.artist}, {artwork.date}. {artwork.medium}, {artwork.dimensions}. {artwork.institution}. {artwork.credit}. <a href={artwork.sourceUrl}>Public Domain · Werkdatensatz</a>
        </figcaption>
      </figure>

      <section style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
        <p style={{ color: "#8c5b35", fontWeight: 800, letterSpacing: ".18em" }}>ERSTER BLICK</p>
        <h2 style={{ maxWidth: "15ch", margin: "1rem 0 3rem", fontFamily: "var(--font-serif)", fontSize: "clamp(3.2rem, 8vw, 6.5rem)", fontWeight: 500, letterSpacing: "-.05em", lineHeight: .96 }}>
          Zwei Landschaften teilen sich eine Leinwand.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "2rem" }}>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.85 }}>
            Der Blick fällt von Mount Holyoke auf die große Schleife des Connecticut River.
            Links ist die Natur nah, dunkel und körperlich. Rechts wird sie fern, übersichtlich
            und in Felder gegliedert. Cole baut damit keine einfache Vorher-nachher-Erzählung,
            sondern einen Konflikt in Echtzeit.
          </p>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.85 }}>
            Die Bildhälften sind voneinander abhängig. Ohne die dunkle Linke erschiene die
            rechte Ordnung weniger hell; ohne die rechte Ebene wäre die Wildnis links nur
            dramatische Natur. Erst der Vergleich macht beide zu politischen Kategorien.
          </p>
        </div>
      </section>

      <section style={{ background: "#17211e", color: "#f1ead9" }}>
        <div style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
          <p style={{ color: "#d5ae68", fontWeight: 800, letterSpacing: ".18em" }}>VIER BILDENTSCHEIDUNGEN</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "1px", marginTop: "3rem", background: "rgb(241 234 217 / .18)" }}>
            {observations.map((observation) => (
              <article key={observation.number} style={{ padding: "2rem", background: "#17211e" }}>
                <span style={{ color: "#d5ae68", fontWeight: 800 }}>{observation.number}</span>
                <h3 style={{ margin: "3rem 0 1rem", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500 }}>{observation.title}</h3>
                <p style={{ margin: 0, color: "rgb(241 234 217 / .74)", lineHeight: 1.8 }}>{observation.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
        <p style={{ color: "#8c5b35", fontWeight: 800, letterSpacing: ".18em" }}>DER BLICK VON OBEN</p>
        <h2 style={{ maxWidth: "14ch", margin: "1rem 0 2rem", fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, lineHeight: .98 }}>
          Überblick ist nie nur ein optischer Vorteil.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))", gap: "2rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            Der erhöhte Standort erlaubt es, das Tal als Ganzes zu sehen. Diese Übersicht
            macht Landschaft lesbar: Felder, Wege, Wasser und Wald werden zu einem System.
            Genau darin liegt auch eine Form von Macht. Was aus der Nähe komplex und bewohnt
            ist, kann aus der Distanz als Fläche erscheinen.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            Coles winzige Selbstfigur stört diese Souveränität. Der Maler sitzt nicht außerhalb
            der Szene. Er ist körperlich im unwegsamen Vordergrund verankert und muss seinen
            Überblick erst konstruieren. Das Bild zeigt damit zugleich die Verlockung und die
            Fragwürdigkeit des panoramatischen Blicks.
          </p>
        </div>
      </section>

      <section style={{ background: "#cbb98f" }}>
        <div style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
          <p style={{ color: "#5e3926", fontWeight: 800, letterSpacing: ".18em" }}>VIER LESARTEN</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "1rem", marginTop: "3rem" }}>
            {readings.map((reading) => (
              <article key={reading.title} style={{ padding: "2rem", border: "1px solid rgb(24 33 30 / .2)", background: "rgb(233 225 207 / .42)" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500 }}>{reading.title}</h3>
                <p style={{ margin: "1rem 0 0", lineHeight: 1.8 }}>{reading.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "clamp(6rem, 12vw, 10rem) 0" }}>
        <p style={{ color: "#8c5b35", fontWeight: 800, letterSpacing: ".18em" }}>NICHT ÜBERSEHEN</p>
        <h2 style={{ maxWidth: "16ch", margin: "1rem 0 2rem", fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, lineHeight: .98 }}>
          „Wildnis“ ist kein neutraler Zustand.
        </h2>
        <p style={{ maxWidth: "48rem", fontSize: "1.15rem", lineHeight: 1.9 }}>
          Das Bild macht menschliche Nutzung rechts sichtbar und lässt sie links fast verschwinden.
          Eine heutige Betrachtung sollte deshalb fragen, wessen Geschichte in der Kategorie
          Wildnis fehlt. Die Landschaft war nicht leer; sie wurde durch nationale Bildkultur
          häufig als leer erzählt. Diese Leerstelle ändert nicht die formale Kraft des Gemäldes,
          aber sie verändert, was sein Gegensatz von Natur und Zivilisation bedeutet.
        </p>
      </section>

      <footer style={{ background: "#17211e", color: "#f1ead9" }}>
        <div style={{ width: "min(78rem, calc(100% - 2.5rem))", margin: "0 auto", padding: "5rem 0 7rem" }}>
          <p style={{ color: "#d5ae68", fontWeight: 800, letterSpacing: ".18em" }}>WEITERLESEN</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", gap: "1rem", marginTop: "2rem" }}>
            <Link href="/kuenstler/thomas-cole/">Thomas Cole kennenlernen →</Link>
            <Link href="/begriffe/landschaft-und-nation/">Landschaft und Nation verstehen →</Link>
            <Link href="/begriffe/das-erhabene/">Das Erhabene vergleichen →</Link>
            <Link href="/epochen/romantik/">Zurück zur Romantik →</Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
