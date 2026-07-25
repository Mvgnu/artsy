import Link from "next/link";
import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { friedrichProfileArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function FriedrichLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <VisualEssayLayout
        description="Die Auswahl führt von radikaler Leere über Ruine und Prozession bis zu Eis und erhöhter Aussicht. Sie zeigt, dass Friedrichs Werk weder auf Nebel noch auf den einsamen Wanderer reduziert werden kann."
        items={friedrichProfileArtworks}
        title="Vier Werke jenseits des Friedrich-Klischees"
      >
        {children}
      </VisualEssayLayout>
      <aside style={{ background: "#d7cebd", color: "#211f1b" }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "74rem",
            padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: "#72543b",
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Friedrich weiter auffächern
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".98",
              margin: "1rem 0 2.5rem",
              maxWidth: "14ch",
            }}
          >
            Ruine und Nacht zeigen, wie seine Landschaften Zeit organisieren.
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            }}
          >
            <Link href="/werke/abtei-im-eichwald/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Abtei im Eichwald lesen →
            </Link>
            <Link href="/begriffe/ruine-und-erinnerung/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Ruine und Erinnerung →
            </Link>
            <Link href="/motive/nacht/" style={{ border: "1px solid rgb(33 31 27 / .18)", padding: "1.5rem" }}>
              Die Nacht als Motiv →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
