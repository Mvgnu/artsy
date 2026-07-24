import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { turnerProfileArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function TurnerLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Dampf, Sklavenschiff, antike Armee und ausgedientes Kriegsschiff zeigen, wie Turner moderne Technik, historische Gewalt und Erinnerung durch Wetter und Licht organisiert – nicht als linearen Weg zur Abstraktion."
      items={turnerProfileArtworks}
      light
      title="Turners Atmosphäre trägt immer Geschichte"
    >
      {children}
    </VisualEssayLayout>
  );
}
