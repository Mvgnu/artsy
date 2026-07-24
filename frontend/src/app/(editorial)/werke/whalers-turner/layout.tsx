import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { whalersContextArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function WhalersLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Drei andere maritime Werke zeigen, was Turner in Whalers verändert: vom noch lesbaren Schiffbruch über das ökonomisch und moralisch aufgeladene Sklavenschiff bis zum historischen Abschied des Temeraire."
      items={whalersContextArtworks}
      light
      title="Turners Meer ist nie bloß Wetter"
    >
      {children}
    </VisualEssayLayout>
  );
}
