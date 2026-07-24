import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { friedrichProfileArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function FriedrichLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Die Auswahl führt von radikaler Leere über Ruine und Prozession bis zu Eis und erhöhter Aussicht. Sie zeigt, dass Friedrichs Werk weder auf Nebel noch auf den einsamen Wanderer reduziert werden kann."
      items={friedrichProfileArtworks}
      title="Vier Werke jenseits des Friedrich-Klischees"
    >
      {children}
    </VisualEssayLayout>
  );
}
