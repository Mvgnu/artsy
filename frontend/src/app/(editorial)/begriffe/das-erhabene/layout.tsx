import type { ReactNode } from "react";

import { VisualEssayLayout } from "@/components/experiences/VisualEssayLayout";
import { sublimeArtworks } from "@/components/experiences/romanticismArtworkSets";

export default function SublimeLayout({ children }: { children: ReactNode }) {
  return (
    <VisualEssayLayout
      description="Vier Werke zeigen, dass Erhabenheit nicht auf Berge oder Stürme beschränkt ist. Eis, Wetter, Schiffbruch und der Zusammenbruch einer Stadt erzeugen jeweils andere Formen von Maßstabsverlust und Überforderung."
      items={sublimeArtworks}
      title="Vier Arten, das menschliche Maß zu verlieren"
    >
      {children}
    </VisualEssayLayout>
  );
}
