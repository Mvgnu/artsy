import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { environment } from "@/lib/platform/environment";
import { foundationAccessibility } from "@/lib/platform/release-gates";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(environment.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "Leerraum",
    template: "%s | Leerraum",
  },
  description:
    "Leerraum wird eine visuelle Kunstgeschichte zum Entdecken, Verstehen und Weitersehen.",
  robots: {
    index: false,
    follow: false,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={foundationAccessibility.documentLanguage}>
      <body className="min-h-screen antialiased">
        <a className="skip-link" href={`#${foundationAccessibility.mainContentId}`}>
          {foundationAccessibility.skipLinkLabel}
        </a>

        <div className="flex min-h-screen flex-col">
          <header className="border-b border-line/80 bg-canvas/90">
            <div className="mx-auto flex w-full max-w-[var(--content-width)] items-center justify-between px-5 py-5 sm:px-8">
              <Link
                className="font-serif text-2xl font-semibold tracking-[-0.03em] no-underline"
                href="/"
              >
                Leerraum
              </Link>
              <nav aria-label="Hauptnavigation" className="flex items-center gap-5">
                <Link
                  className="text-sm font-semibold underline decoration-line decoration-1 hover:decoration-ink"
                  href="/"
                >
                  Startseite
                </Link>
                <Link
                  className="text-sm font-semibold underline decoration-line decoration-1 hover:decoration-ink"
                  href="/epochen/romantik/"
                >
                  Romantik
                </Link>
              </nav>
            </div>
          </header>

          <main
            className="flex-1"
            id={foundationAccessibility.mainContentId}
            tabIndex={-1}
          >
            {children}
          </main>

          <footer className="border-t border-line/80">
            <div className="mx-auto flex w-full max-w-[var(--content-width)] flex-col gap-2 px-5 py-8 text-sm text-muted sm:px-8">
              <p>Leerraum · Visuelle Kunstgeschichte aus der Schweiz.</p>
              <p>Werkangaben, Bildquellen und Credits stehen direkt bei den Bildern.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
