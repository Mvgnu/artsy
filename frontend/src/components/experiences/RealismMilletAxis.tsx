import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import { milletAxisArtworks } from "./realismMilletArtworkSets";

const paths = [
  {
    eyebrow: "Künstlerprofil",
    href: "/kuenstler/jean-francois-millet/",
    title: "Jean-François Millet",
    text: "Wie ländliche Erfahrung, Salonambition und spätere Sentimentalisierung in Millets Bauernbildern zusammenwirken.",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/die-aehrenleserinnen/",
    title: "Die Ährenleserinnen",
    text: "Drei gebückte Körper im Vordergrund, sichtbarer Überfluss in der Ferne: soziale Ordnung als räumliche Komposition.",
  },
  {
    eyebrow: "Begriff verstehen",
    href: "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/",
    title: "Ländliche Arbeit",
    text: "Wie Boden, Ertrag, Werkzeuge, Dauer und Zugang bestimmen, welche Arbeit sichtbar und welche ästhetisch beruhigt wird.",
  },
] as const;

export function RealismMilletAxis() {
  return (
    <aside style={{ background: "#d7c99e", color: "#28261f" }}>
      <div style={{ margin: "0 auto", maxWidth: "94rem", padding: "clamp(6rem, 12vw, 10rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 25rem), 1fr))", marginBottom: "4rem" }}>
          <div>
            <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>
              Neue Arbeitsachse im Realismus-Silo
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.4rem, 8vw, 7rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".94", margin: "1rem 0 0", maxWidth: "12ch" }}>
              Nach der Ernte beginnt die Arbeit am Rest.
            </h2>
          </div>
          <p style={{ alignSelf: "end", fontSize: "clamp(1.08rem, 2vw, 1.35rem)", lineHeight: 1.8, margin: 0, maxWidth: "44rem" }}>
            Courbet macht Material, Anstrengung und monumentale Gegenwart sichtbar. Millet verschiebt den Fokus auf zyklische Arbeit, soziale Zugangsrechte und Körper, deren Abhängigkeit gerade durch ihre Größe nicht verschwindet.
          </p>
        </div>

        <ArtworkStrip items={milletAxisArtworks} title="Saat, Restarbeit und gezeichnete Körper" />

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", marginTop: "4rem" }}>
          {paths.map((path) => (
            <Link key={path.href} href={path.href} style={{ border: "1px solid rgb(40 38 31 / .3)", color: "inherit", display: "flex", flexDirection: "column", minHeight: "20rem", padding: "2rem", textDecoration: "none" }}>
              <span style={{ fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>{path.eyebrow}</span>
              <strong style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 500, letterSpacing: "-.04em", lineHeight: 1.02, marginTop: "2.5rem" }}>{path.title}</strong>
              <p style={{ lineHeight: 1.72, margin: "1.25rem 0 0" }}>{path.text}</p>
              <em style={{ fontStyle: "normal", fontWeight: 800, marginTop: "auto", paddingTop: "2rem" }}>Öffnen →</em>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
