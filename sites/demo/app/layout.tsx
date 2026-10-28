import type { Metadata } from "next";
import "@artsy/explorer/style.css";

export const metadata: Metadata = {
  title: "Artsy — follow a thread through art",
  description: "An evidence-backed art atlas foundation. Follow real connections between artworks, makers, places, periods and ideas.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
