import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { libertyContextArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function LibertyLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Delacroix' frühere Opfergruppe, Géricaults prekäre Hoffnung und Goyas Exekutionsszene zeigen, wie außergewöhnlich die führende Allegorie in Freiheit führt das Volk ist. Der Vergleich hält Triumph, Kosten und Bildtradition gleichzeitig sichtbar."
      items={libertyContextArtworks}
      light
      title="Drei Gegenbilder zur vorwärtsdrängenden Freiheit"
    >
      {children}
    </VisualEssayLayout>
  );
}
