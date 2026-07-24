import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { revolutionBodyArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function RevolutionBodyLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Delacroix, Géricault und Goya organisieren politische Geschichte über sehr verschiedene Körper: Gefangene, Schiffbrüchige, Opfer einer Exekution und Figuren im gewaltsamen Spektakel. Erst nebeneinander wird sichtbar, wie stark Komposition politische Rollen verteilt."
      items={revolutionBodyArtworks}
      title="Politik wird sichtbar, sobald Körper verteilt werden"
    >
      {children}
    </VisualEssayLayout>
  );
}
