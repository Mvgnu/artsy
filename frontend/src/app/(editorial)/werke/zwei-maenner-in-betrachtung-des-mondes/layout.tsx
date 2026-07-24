import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { moonwatchersContextArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function MoonwatchersLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Drei verwandte Friedrich-Bilder schärfen die Besonderheit der Mondbetrachter: gemeinsames statt heroisch einzelnes Sehen, zurückgenommene Gestik und ein Horizont, der Erwartung erzeugt, ohne eine klare Auflösung zu liefern."
      items={moonwatchersContextArtworks}
      title="Was sich im Vergleich erst zeigt"
    >
      {children}
    </VisualEssayLayout>
  );
}
