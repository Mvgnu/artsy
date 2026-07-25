import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import { ruralLaborArtworks, urbanPublicsArtworks } from "./realismMilletDaumierArtworkSets";

const paths = [
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/jean-francois-millet/",
    title: "Jean-François Millet",
    text: "Wie Saat, Ernte, Restarbeit und religiöse Zeit bäuerliche Körper monumental und zugleich sozial abhängig machen.",
  },
  {
    eyebrow: "Werkdecoder",
    href: "/werke/die-aehrenleserinnen/",
    title: "Die Ährenleserinnen",
    text: "Gebückte Körper, Erntereste und räumliche Distanz: soziale Ordnung ohne dramatische Parole.",
  },
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/honore-daumier/",
    title: "Honoré Daumier",
    text: "Karikatur, staatliche Gewalt, urbane Arbeit und die gedrängten sozialen Räume moderner Öffentlichkeit.",
  },
  {
    eyebrow: "Werkdecoder",
    href: "/werke/der-wagen-dritter-klasse/",
    title: "Der Wagen dritter Klasse",
    text: "Wie Eisenbahnverkehr Körper verbindet, Komfort verteilt und Klassendifferenzen materiell organisiert.",
  },
] as const;

export function RealismRuralUrbanAxis() {
  return (
    <aside style={{ background: "#242823", color: "#eee7d8" }}>
      <div style={{ margin: "0 auto", maxWidth: "94rem", padding: "clamp(6rem, 12vw, 10rem) 1.25rem" }}>
        <p style={{ color: "#c2a86b", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>
          Zwei soziale Räume des Realismus
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".94", margin: "1rem 0 2rem", maxWidth: "13ch" }}>
          Feld und Wagen: Arbeit wird sichtbar, Öffentlichkeit wird eng.
        </h2>
        <p style={{ color: "rgb(238 231 216 / .72)", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", lineHeight: 1.8, maxWidth: "48rem" }}>
          Millet organisiert soziale Unterschiede über Boden, Ertrag, Wiederholung und Entfernung. Daumier zeigt sie über Sitzordnung, Infrastruktur, Mobilität und geteilten Innenraum. Beide machen Klasse sichtbar, ohne ihre Figuren auf bloße Beispiele zu reduzieren.
        </p>

        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))", marginTop: "4rem" }}>
          <ArtworkStrip items={ruralLaborArtworks} title="Rurale Arbeit und soziale Distanz" />
          <ArtworkStrip items={urbanPublicsArtworks} title="Urbane Öffentlichkeit und Klasse" />
        </div>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))", marginTop: "4rem" }}>
          {paths.map((path) => (
            <Link key={path.href} href={path.href} style={{ border: "1px solid rgb(238 231 216 / .18)", color: "inherit", display: "flex", flexDirection: "column", minHeight: "18rem", padding: "1.5rem", textDecoration: "none" }}>
              <span style={{ color: "#c2a86b", fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>{path.eyebrow}</span>
              <strong style={{ fontFamily: "var(--font-serif)", fontSize: "2.1rem", fontWeight: 500, lineHeight: 1.04, marginTop: "2rem" }}>{path.title}</strong>
              <p style={{ color: "rgb(238 231 216 / .68)", lineHeight: 1.7 }}>{path.text}</p>
              <em style={{ fontStyle: "normal", fontWeight: 800, marginTop: "auto", paddingTop: "1.5rem" }}>Öffnen →</em>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
