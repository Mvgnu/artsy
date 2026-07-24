import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { oxbowContextArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function OxbowLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Coles Reichszyklus macht die beiden Hälften des Oxbow historisch lesbar. Wildnis, pastorale Nutzung und Zerstörung zeigen, warum das Gemälde weder einfache Fortschrittswerbung noch reine Naturschwärmerei ist."
      items={oxbowContextArtworks}
      title="Das geteilte Tal innerhalb von Coles Geschichtsmodell"
    >
      {children}
    </VisualEssayLayout>
  );
}
