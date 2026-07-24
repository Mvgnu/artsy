export const foundationAccessibility = {
  documentLanguage: "de",
  mainContentId: "main-content",
  skipLinkLabel: "Zum Inhalt springen",
} as const;

export const performanceBudgets = {
  cumulativeLayoutShift: 0.1,
  interactionToNextPaintMs: 200,
  largestContentfulPaintMs: 2500,
} as const;

export const releaseCommands = [
  "format:check",
  "typecheck",
  "lint",
  "test",
  "test:a11y",
  "test:performance",
  "build",
] as const;
