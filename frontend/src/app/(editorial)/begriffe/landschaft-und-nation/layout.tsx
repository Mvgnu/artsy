import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { landscapeNationArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function LandscapeNationLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Coles Zyklus zeigt besonders klar, wie Landschaft einen politischen Zeitstrahl baut: vermeintlicher Ursprung, pastorale Nutzung, imperiale Fülle und spätere Ruine. Der Bildatlas macht diese Erzählung direkt vergleichbar."
      items={landscapeNationArtworks}
      light
      title="Wie Landschaft Geschichte natürlich aussehen lässt"
    >
      {children}
    </VisualEssayLayout>
  );
}
