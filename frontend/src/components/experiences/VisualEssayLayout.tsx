import type { ReactNode } from "react";

import { ArtworkStrip, type ArtworkStripItem } from "./ArtworkStrip";

interface VisualEssayLayoutProps {
  children: ReactNode;
  description: string;
  eyebrow?: string;
  items: readonly ArtworkStripItem[];
  light?: boolean;
  title: string;
}

export function VisualEssayLayout({
  children,
  description,
  eyebrow = "Bildatlas",
  items,
  light = false,
  title,
}: VisualEssayLayoutProps) {
  const background = light ? "#eee6d8" : "#11191b";
  const foreground = light ? "#211916" : "#f2e7d7";
  const muted = light ? "rgb(33 25 22 / .7)" : "rgb(242 231 215 / .68)";
  const accent = light ? "#8b5139" : "#c6a96b";

  return (
    <>
      {children}
      <aside style={{ background, color: foreground }}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "92rem",
            padding: "clamp(5rem, 10vw, 9rem) 1.25rem",
          }}
        >
          <p
            style={{
              color: accent,
              fontSize: ".72rem",
              fontWeight: 800,
              letterSpacing: ".18em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 500,
              letterSpacing: "-.05em",
              lineHeight: ".96",
              margin: "1rem 0 0",
              maxWidth: "13ch",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: muted,
              fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
              lineHeight: 1.75,
              margin: "2rem 0 3.5rem",
              maxWidth: "46rem",
            }}
          >
            {description}
          </p>
          <ArtworkStrip items={items} light={light} title={title} />
        </div>
      </aside>
    </>
  );
}
