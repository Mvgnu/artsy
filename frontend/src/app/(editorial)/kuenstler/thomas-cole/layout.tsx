import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { coleProfileArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function ColeLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Coles Karriere wird hier nicht über ein einziges Panorama erzählt. Der Bildatlas verbindet Wildnis, imperiale Fülle, Zerstörung und den allegorischen Lebensweg – seine zwei wichtigsten Arten, Landschaft in Geschichte zu verwandeln."
      items={coleProfileArtworks}
      title="Landschaft als Reich, Lebenslauf und Warnung"
    >
      {children}
    </VisualEssayLayout>
  );
}
