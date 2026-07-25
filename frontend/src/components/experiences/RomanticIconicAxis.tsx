import Link from "next/link";

import { ArtworkStrip } from "./ArtworkStrip";
import { iconicMasterpieceArtworks } from "./romanticIconicArtworkSets";

const paths = [
  {
    eyebrow: "Werk lesen",
    href: "/werke/wanderer-ueber-dem-nebelmeer/",
    text: "Rückenfigur, Nebel und Höhe: warum Aussicht bei Friedrich zugleich Selbstbehauptung und Erkenntnisgrenze bedeutet.",
    title: "Wanderer über dem Nebelmeer",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/die-freiheit-fuehrt-das-volk/",
    text: "Allegorie, Barrikade und soziale Typen: wie Delacroix aktuelle Revolution in eine dauerhaft umkämpfte Ikone verwandelt.",
    title: "Die Freiheit führt das Volk",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/the-fighting-temeraire/",
    text: "Segelschiff, Dampfkraft und Abendlicht: Turner über technischen Wandel, nationale Erinnerung und kontrollierten Abschied.",
    title: "The Fighting Temeraire",
  },
  {
    eyebrow: "Werk lesen",
    href: "/werke/saturn-verschlingt-seinen-sohn/",
    text: "Mythos ohne heroische Distanz: Körpergewalt, private Wandmalerei und die Grenzen eindeutiger Deutung bei Goya.",
    title: "Saturn verschlingt seinen Sohn",
  },
] as const;

export function RomanticIconicAxis() {
  return (
    <aside style={{ background: "#f1ece3", color: "#211d19" }}>
      <div style={{ margin: "0 auto", maxWidth: "94rem", padding: "clamp(6rem, 12vw, 11rem) 1.25rem" }}>
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))", marginBottom: "4rem" }}>
          <div>
            <p style={{ color: "#9a4d32", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".2em", margin: 0, textTransform: "uppercase" }}>
              Ikonische Werke der Romantik
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.4rem, 8vw, 7rem)", fontWeight: 500, letterSpacing: "-.055em", lineHeight: ".94", margin: "1rem 0 0", maxWidth: "13ch" }}>
              Berühmt heißt noch nicht eindeutig.
            </h2>
          </div>
          <p style={{ alignSelf: "end", color: "rgb(33 29 25 / .72)", fontSize: "clamp(1.08rem, 2vw, 1.35rem)", lineHeight: 1.8, margin: 0, maxWidth: "44rem" }}>
            Diese vier Bilder sind zu Symbolen ihrer Epoche geworden. Die Decoder lesen gegen die verkürzte Reproduktion: Sie fragen nach Blickmacht, politischer Allegorie, technischem Übergang und privater Gewalt.
          </p>
        </div>

        <ArtworkStrip items={iconicMasterpieceArtworks} title="Vier Ikonen, vier instabile Bedeutungsräume" />

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", marginTop: "4rem" }}>
          {paths.map((path) => (
            <Link key={path.href} href={path.href} style={{ border: "1px solid rgb(33 29 25 / .2)", color: "inherit", display: "flex", flexDirection: "column", minHeight: "21rem", padding: "2rem", textDecoration: "none" }}>
              <span style={{ color: "#9a4d32", fontSize: ".7rem", fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>
                {path.eyebrow}
              </span>
              <strong style={{ fontFamily: "var(--font-serif)", fontSize: "2.3rem", fontWeight: 500, letterSpacing: "-.04em", lineHeight: 1.02, marginTop: "2rem" }}>
                {path.title}
              </strong>
              <p style={{ color: "rgb(33 29 25 / .68)", lineHeight: 1.72, margin: "1.25rem 0 0" }}>{path.text}</p>
              <em style={{ fontStyle: "normal", fontWeight: 800, marginTop: "auto", paddingTop: "2rem" }}>Öffnen →</em>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
