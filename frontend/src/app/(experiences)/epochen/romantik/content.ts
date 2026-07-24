export interface RomanticismArtwork {
  id: string;
  title: string;
  originalTitle: string;
  artist: string;
  date: string;
  medium: string;
  dimensions: string;
  institution: string;
  imageUrl: string;
  imageAlt: string;
  sourceUrl: string;
  rightsLabel: string;
  creditLine: string;
}

export const oxbow: RomanticismArtwork = {
  id: "the-oxbow",
  title: "Die Flussbiegung",
  originalTitle:
    "View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm—The Oxbow",
  artist: "Thomas Cole",
  date: "1836",
  medium: "Öl auf Leinwand",
  dimensions: "130,8 × 193 cm",
  institution: "The Metropolitan Museum of Art, New York",
  imageUrl:
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10497/1655152/main-image",
  imageAlt:
    "Eine weite Flusslandschaft nach einem Gewitter: links dunkle, wilde Vegetation, rechts sonnenbeschienene Felder und eine große Flussschleife.",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/10497",
  rightsLabel: "Public Domain · The Met Open Access",
  creditLine: "Gift of Mrs. Russell Sage, 1908",
};

export const whalers: RomanticismArtwork = {
  id: "whalers",
  title: "Das Walschiff",
  originalTitle: "Whalers",
  artist: "Joseph Mallord William Turner",
  date: "um 1845",
  medium: "Öl auf Leinwand",
  dimensions: "91,8 × 122,6 cm",
  institution: "The Metropolitan Museum of Art, New York",
  imageUrl:
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437854/1685823/main-image",
  imageAlt:
    "Ein Walfangschiff und kleine Boote lösen sich beinahe in hellem Gischt, Rauch und bewegter See auf; links ragt ein dunkler Wal aus dem Wasser.",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/437854",
  rightsLabel: "Public Domain · The Met Open Access",
  creditLine: "Catharine Lorillard Wolfe Collection, Wolfe Fund, 1896",
};

export const waysOfSeeing = [
  {
    number: "01",
    title: "Maßstab",
    text: "Menschen werden klein, Horizonte groß. Nicht weil die Figur unwichtig wäre, sondern weil ihr Bewusstsein an etwas gerät, das es nicht vollständig fassen kann.",
  },
  {
    number: "02",
    title: "Atmosphäre",
    text: "Nebel, Nacht, Sturm und Gegenlicht sind keine Kulisse. Sie machen Unsicherheit sichtbar und verwandeln Landschaft in einen seelischen Zustand.",
  },
  {
    number: "03",
    title: "Schwelle",
    text: "Fenster, Ufer, Klippen, Ruinen und Waldränder markieren Übergänge. Die romantische Figur steht häufig dort, wo das Vertraute endet.",
  },
] as const;

export const romanticisms = [
  {
    place: "Deutschland",
    title: "Die Landschaft nach innen wenden",
    text: "Bei Caspar David Friedrich wird Natur zum offenen Denkraum: still, präzise und doch nicht eindeutig auflösbar.",
  },
  {
    place: "Großbritannien",
    title: "Licht und Materie destabilisieren",
    text: "Turner und Constable beobachten Wetter so genau, bis Beobachtung in Bewegung, Kraft und beinahe abstrakte Malerei kippt.",
  },
  {
    place: "Frankreich",
    title: "Gefühl politisch aufladen",
    text: "Géricault und Delacroix tragen Katastrophe, Revolution, Gewalt und exotisierende Imagination in das große Historienbild.",
  },
  {
    place: "Vereinigte Staaten",
    title: "Landschaft als Nation erzählen",
    text: "Thomas Cole verbindet Erhabenheit mit Fragen nach Besiedlung, Fortschritt, Verdrängung und der Zukunft des Landes.",
  },
] as const;

export const sources = [
  {
    label: "The Met: Romanticism",
    url: "https://www.metmuseum.org/essays/romanticism",
  },
  {
    label: "The Met: Caspar David Friedrich – The Soul of Nature",
    url: "https://www.metmuseum.org/exhibitions/caspar-david-friedrich-the-soul-of-nature",
  },
  {
    label: "The Met: The Hudson River School",
    url: "https://www.metmuseum.org/essays/the-hudson-river-school",
  },
] as const;
