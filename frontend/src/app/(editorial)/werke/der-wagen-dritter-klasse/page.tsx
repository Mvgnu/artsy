import type { Metadata } from "next";
import Link from "next/link";

import { ArtworkStrip } from "@/components/experiences/ArtworkStrip";
import { thirdClassContextArtworks } from "@/components/experiences/realismMilletDaumierArtworkSets";

export const metadata: Metadata = {
  title: "Der Wagen dritter Klasse: Nähe, Müdigkeit und soziale Ordnung",
  description:
    "Eine Werkanalyse von Honoré Daumiers The Third-Class Carriage über Eisenbahn, Körpernähe, Klasse, Blickrichtung, Mobilität und moderne Öffentlichkeit.",
  alternates: { canonical: "/werke/der-wagen-dritter-klasse/" },
};

const readings = [
  [
    "Enge ohne Kontakt",
    "Die Fahrgäste teilen denselben Wagen, doch ihre Blicke und Haltungen erzeugen keine geschlossene Gemeinschaft. Moderne Nähe wird als soziale Koexistenz sichtbar, nicht als automatische Verbundenheit.",
  ],
  [
    "Der Vordergrund gehört der Müdigkeit",
    "Die ältere Frau, die jüngere Mutter und das Kind bilden kein heroisches Familienporträt. Ihre Körper wirken schwer, gesammelt und vom Weg beansprucht. Mobilität bedeutet hier nicht Freiheit, sondern auch Warten, Sitzen und Ertragen.",
  ],
  [
    "Klasse wird räumlich organisiert",
    "Holzbänke, dicht gesetzte Körper und begrenzte Bewegungsfreiheit machen die Wagenklasse sichtbar, ohne ein erklärendes Schild zu benötigen. Infrastruktur verteilt Komfort und Lesbarkeit materiell.",
  ],
  [
    "Individuen und soziale Typen",
    "Daumier gibt den Vordergrundsfiguren körperliche Präsenz, hält ihre Biografien aber offen. Sie sind weder anonyme Masse noch vollständig individualisierte Porträts. Genau diese Zwischenstellung macht das Bild sozial lesbar.",
  ],
] as const;

const links = [
  ["Künstler", "/kuenstler/honore-daumier/", "Honoré Daumier"],
  ["Begriff", "/begriffe/moderne-oeffentlichkeit/", "Moderne Öffentlichkeit"],
  ["Ruraler Vergleich", "/werke/die-aehrenleserinnen/", "Die Ährenleserinnen"],
  ["Epoche", "/epochen/realismus/", "Realismus"],
] as const;

export default function ThirdClassCarriagePage() {
  return (
    <main style={{ background: "#d7cec0", color: "#252622" }}>
      <section style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(5rem, 12vw, 10rem) 1.25rem" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>
          Werkdecoder · ca. 1862–1864
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(4rem, 11vw, 9rem)", fontWeight: 500, letterSpacing: "-.065em", lineHeight: ".9", margin: "1rem 0", maxWidth: "10ch" }}>
          Der Wagen dritter Klasse
        </h1>
        <p style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)", lineHeight: 1.65, margin: "2rem 0 0", maxWidth: "55rem" }}>
          Menschen sitzen dicht nebeneinander und bleiben dennoch sozial getrennt. Daumier macht Eisenbahnverkehr als Klassenraum sichtbar: als geteilte Infrastruktur mit ungleich verteiltem Komfort, Blick und Bewegungsraum.
        </p>
      </section>

      <section style={{ background: "#303534", color: "#f0eadf", padding: "clamp(4rem, 9vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "92rem" }}>
          <ArtworkStrip items={thirdClassContextArtworks} title="Wagenklasse, urbane Last und industrielle Nähe" />
        </div>
      </section>

      <section style={{ margin: "0 auto", maxWidth: "78rem", padding: "clamp(5rem, 10vw, 9rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
          {readings.map(([title, text], index) => (
            <article key={title} style={{ borderTop: "1px solid rgb(37 38 34 / .35)", minHeight: "21rem", padding: "1.5rem 0" }}>
              <span style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".18em" }}>0{index + 1}</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 500, letterSpacing: "-.04em", lineHeight: 1.02, margin: "2.5rem 0 1rem" }}>
                {title}
              </h2>
              <p style={{ lineHeight: 1.78, margin: 0 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#94705c", color: "#f4ecdf", padding: "clamp(5rem, 10vw, 8rem) 1.25rem" }}>
        <div style={{ margin: "0 auto", maxWidth: "78rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".95", margin: 0, maxWidth: "14ch" }}>
            Mobilität kann soziale Unterschiede gleichzeitig verbinden und festschreiben.
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8, margin: "2rem 0 0", maxWidth: "50rem" }}>
            Die Eisenbahn erweitert Reichweite und Geschwindigkeit. Doch der Wagen zeigt, dass technische Modernisierung nicht für alle denselben Körperkomfort, dieselbe Privatheit oder dieselbe gesellschaftliche Sichtbarkeit produziert.
          </p>
        </div>
      </section>

      <nav aria-label="Weiterführende Wege" style={{ margin: "0 auto", maxWidth: "92rem", padding: "clamp(4rem, 9vw, 7rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
          {links.map(([eyebrow, href, title]) => (
            <Link key={href} href={href!} style={{ border: "1px solid rgb(37 38 34 / .3)", color: "inherit", minHeight: "13rem", padding: "1.5rem", textDecoration: "none" }}>
              <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>{eyebrow}</span>
              <strong style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, lineHeight: 1.05, marginTop: "2rem" }}>{title}</strong>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
