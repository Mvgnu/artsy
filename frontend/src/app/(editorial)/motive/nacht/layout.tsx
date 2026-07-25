import Link from "next/link";
import type { ReactNode } from "react";

export default function NightLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <aside style={{ background: "#26171d", color: "#f2e9dc" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "88rem",
            padding: "clamp(5rem, 10vw, 8rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#e3a45d",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Von äußerer Dunkelheit zur inneren Kosmologie
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 1.5rem",
              maxWidth: "13ch",
            }}
          >
            Bei Blake wird Nacht nicht nur gesehen. Sie wird gedruckt, benannt und bevölkert.
          </h2>
          <p
            style={{
              color: "rgb(242 233 220 / .72)",
              fontSize: "1.12rem",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "48rem",
            }}
          >
            Friedrich und Turner verändern Wahrnehmung durch Dunkelheit, Mondlicht und
            unsichere Horizonte. Blake verschiebt dieselbe Frage in Bücher und eigene
            Mythologien: Welche Kräfte erscheinen, wenn eine vertraute Ordnung nicht mehr
            als einzige Wirklichkeit gilt?
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
              marginTop: "3rem",
            }}
          >
            {[
              [
                "/kuenstler/william-blake/",
                "William Blake",
                "Drucktechnik, illuminierte Bücher und die Entwicklung seiner eigenen Mythologie.",
              ],
              [
                "/begriffe/vision-und-prophezeiung/",
                "Vision und Prophezeiung",
                "Wie Bilder besondere Autorität erzeugen und Gegenwart in eine andere Welt übersetzen.",
              ],
              [
                "/werke/the-ancient-of-days/",
                "The Ancient of Days",
                "Urizen misst die Dunkelheit — und macht Ordnung selbst zum Konflikt.",
              ],
            ].map(([href, title, text]) => (
              <Link
                href={href}
                key={href}
                style={{
                  border: "1px solid rgb(242 233 220 / .17)",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "14rem",
                  padding: "1.75rem",
                  textDecoration: "none",
                }}
              >
                <strong
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 500,
                  }}
                >
                  {title}
                </strong>
                <p style={{ color: "rgb(242 233 220 / .7)", lineHeight: 1.7 }}>{text}</p>
                <span style={{ fontWeight: 800, marginTop: "auto" }}>Öffnen →</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
