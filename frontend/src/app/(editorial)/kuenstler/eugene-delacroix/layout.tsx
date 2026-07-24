import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { delacroixProfileArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function DelacroixLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Die vier Werke ersetzen die bisherige Fixierung auf Freiheit führt das Volk. Sie verbinden literarische Imagination, politische Katastrophe, inszenierte Gewalt und den kolonial geprägten Innenraum zu einem breiteren Bild von Delacroix' Malerei."
      items={delacroixProfileArtworks}
      light
      title="Delacroix vor und nach der Revolutionsikone"
    >
      {children}
    </VisualEssayLayout>
  );
}
