import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { ruckenfigurArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function RuckenfigurLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Die Rückenfigur ist keine einzelne Pose. Bei Friedrich kann sie Aussicht blockieren, den Körper zur Geste öffnen oder Betrachtung auf mehrere Menschen verteilen. Die drei Werke zeigen diese Funktionen direkt nebeneinander."
      items={ruckenfigurArtworks}
      light
      title="Drei Rückenfiguren, drei verschiedene Beziehungen zur Welt"
    >
      {children}
    </VisualEssayLayout>
  );
}
