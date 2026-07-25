import Link from "next/link";
import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { moonwatchersContextArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function MoonwatchersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <VisualEssayLayout
        description="Drei verwandte Friedrich-Bilder schärfen die Besonderheit der Mondbetrachter: gemeinsames statt heroisch einzelnes Sehen, zurückgenommene Gestik und ein Horizont, der Erwartung erzeugt, ohne eine klare Auflösung zu liefern."
        items={moonwatchersContextArtworks}
        title="Was sich im Vergleich erst zeigt"
      >
        {children}
      </VisualEssayLayout>
      <aside style={{ background: "#111a20", color: "#edf0ec" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            margin: "0 auto",
            maxWidth: "74rem",
            padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#d0b36c",
                fontSize: ".72rem",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              Vom Werk zum Motiv
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                fontWeight: 500,
                letterSpacing: "-.05em",
                lineHeight: ".98",
                margin: "1rem 0 0",
              }}
            >
              Was ändert sich, wenn nicht Friedrich, sondern die Nacht selbst im
              Mittelpunkt steht?
            </h2>
          </div>
          <div style={{ alignSelf: "end" }}>
            <p style={{ color: "rgb(237 240 236 / .7)", lineHeight: 1.78, margin: 0 }}>
              Der Motivweg vergleicht die Mondbetrachter mit Turner und Samuel Palmer
              und trennt gemeinsame Versenkung von gefährlicher Arbeit und visionärer
              Fülle.
            </p>
            <Link
              href="/motive/nacht/"
              style={{
                border: "1px solid rgb(237 240 236 / .18)",
                display: "inline-block",
                fontWeight: 800,
                marginTop: "1.5rem",
                padding: "1rem 1.25rem",
              }}
            >
              Die Nacht als Motiv öffnen →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
