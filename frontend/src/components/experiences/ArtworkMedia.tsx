"use client";

import Image from "next/image";
import { useState } from "react";

interface ArtworkMediaProps {
  alt: string;
  aspectRatio?: string;
  caption: string;
  credit: string;
  imageUrl: string;
  objectPosition?: string;
  sourceUrl: string;
}

export function ArtworkMedia({
  alt,
  aspectRatio = "16 / 10",
  caption,
  credit,
  imageUrl,
  objectPosition = "center",
  sourceUrl,
}: ArtworkMediaProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          aspectRatio,
          background: "#1d201c",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {failed ? (
          <div
            role="img"
            aria-label={alt}
            style={{
              alignItems: "center",
              color: "#efe8da",
              display: "flex",
              height: "100%",
              justifyContent: "center",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div>
              <strong
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.8rem",
                }}
              >
                Bild konnte nicht geladen werden
              </strong>
              <a
                href={sourceUrl}
                style={{ color: "inherit", display: "inline-block", marginTop: "1rem" }}
              >
                Originalquelle öffnen →
              </a>
            </div>
          </div>
        ) : (
          <Image
            alt={alt}
            fill
            onError={() => setFailed(true)}
            sizes="100vw"
            src={imageUrl}
            style={{ objectFit: "cover", objectPosition }}
          />
        )}
      </div>
      <figcaption
        style={{
          alignItems: "start",
          display: "grid",
          gap: ".75rem",
          gridTemplateColumns: "minmax(0, 1fr) auto",
          paddingTop: ".9rem",
        }}
      >
        <p style={{ lineHeight: 1.6, margin: 0 }}>{caption}</p>
        <a
          href={sourceUrl}
          style={{
            color: "inherit",
            fontSize: ".76rem",
            fontWeight: 800,
            textAlign: "right",
            textDecorationThickness: "1px",
          }}
        >
          {credit} ↗
        </a>
      </figcaption>
    </figure>
  );
}
