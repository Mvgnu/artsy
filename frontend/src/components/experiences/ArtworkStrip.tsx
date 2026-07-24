import Image from "next/image";

export interface ArtworkStripItem {
  alt: string;
  artist: string;
  date: string;
  imageUrl: string;
  note: string;
  rightsLabel: string;
  sourceUrl: string;
  title: string;
}

interface ArtworkStripProps {
  items: readonly ArtworkStripItem[];
  light?: boolean;
  title: string;
}

export function ArtworkStrip({ items, light = false, title }: ArtworkStripProps) {
  const foreground = light ? "#211916" : "#f2e7d7";
  const muted = light ? "rgb(33 25 22 / .7)" : "rgb(242 231 215 / .68)";
  const border = light ? "rgb(33 25 22 / .18)" : "rgb(242 231 215 / .16)";
  const card = light ? "#e8ddcb" : "rgb(242 231 215 / .035)";

  return (
    <section aria-label={title}>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
        }}
      >
        {items.map((item) => (
          <figure
            key={`${item.artist}-${item.title}`}
            style={{
              border: `1px solid ${border}`,
              background: card,
              margin: 0,
              overflow: "hidden",
            }}
          >
            <div style={{ aspectRatio: "4 / 5", position: "relative" }}>
              <Image
                alt={item.alt}
                fill
                sizes="(min-width: 1100px) 25vw, (min-width: 700px) 50vw, 100vw"
                src={item.imageUrl}
                style={{ objectFit: "cover" }}
              />
            </div>
            <figcaption style={{ padding: "1.25rem" }}>
              <p
                style={{
                  color: muted,
                  fontSize: ".68rem",
                  fontWeight: 800,
                  letterSpacing: ".12em",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {item.artist} · {item.date}
              </p>
              <h3
                style={{
                  color: foreground,
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  margin: ".9rem 0 0",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: muted, lineHeight: 1.65, margin: "1rem 0 0" }}>
                {item.note}
              </p>
              <a
                href={item.sourceUrl}
                style={{
                  color: foreground,
                  display: "inline-block",
                  fontSize: ".76rem",
                  fontWeight: 800,
                  marginTop: "1rem",
                }}
              >
                {item.rightsLabel}
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
