import type { ArtworkStripItem } from "./ArtworkStrip";

const commonsImage = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}`;
const commonsSource = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

function artwork(
  file: string,
  artist: string,
  title: string,
  date: string,
  alt: string,
  note: string,
): ArtworkStripItem {
  return {
    alt,
    artist,
    date,
    imageUrl: commonsImage(file),
    note,
    rightsLabel: "Wikimedia Commons · Public Domain",
    sourceUrl: commonsSource(file),
    title,
  };
}

export const realismPillarArtworks = [
  artwork(
    "Gustave Courbet - The Stonebreakers - WGA05457.jpg",
    "Gustave Courbet",
    "Die Steinklopfer",
    "1849",
    "Ein älterer und ein jüngerer Arbeiter zerschlagen Steine an einem Straßenrand.",
    "Courbet gibt anonymer, körperlich erschöpfender Arbeit die Größe eines Historienbildes, ohne sie in Heldentum aufzulösen.",
  ),
  artwork(
    "Jean-François Millet - Gleaners - Google Art Project 2.jpg",
    "Jean-François Millet",
    "Die Ährenleserinnen",
    "1857",
    "Drei Frauen sammeln gebückt übrig gebliebene Ähren auf einem abgeernteten Feld.",
    "Millet zeigt Arbeit als wiederholte Körperhaltung und soziale Ordnung; Monumentalität entsteht aus Dauer, Gewicht und Abstand.",
  ),
  artwork(
    "Honoré Daumier - The Third-Class Carriage - Walters 37151.jpg",
    "Honoré Daumier",
    "Wagen dritter Klasse",
    "um 1862–1864",
    "Reisende sitzen dicht gedrängt in einem einfachen Eisenbahnwagen.",
    "Daumier verlagert Realismus in moderne Mobilität, anonyme Nähe und die soziale Choreografie des öffentlichen Raums.",
  ),
] as const;

export const courbetProfileArtworks = [
  artwork(
    "Gustave Courbet - Self-Portrait (The Desperate Man) - Google Art Project.jpg",
    "Gustave Courbet",
    "Der Verzweifelte",
    "1843–1845",
    "Courbet greift sich mit weit geöffneten Augen ins Haar und blickt unmittelbar aus dem Bild.",
    "Das frühe Selbstbild zeigt, wie stark Courbet Öffentlichkeit, Körperpräsenz und künstlerische Selbstinszenierung miteinander verband.",
  ),
  artwork(
    "Gustave Courbet - A Burial at Ornans - Musée d'Orsay.jpg",
    "Gustave Courbet",
    "Ein Begräbnis in Ornans",
    "1849–1850",
    "Eine große Gruppe ländlicher Trauergäste steht entlang eines offenen Grabes.",
    "Courbet überträgt die Größe der Historienmalerei auf ein lokales Begräbnis und verweigert zugleich klare Hierarchie, Idealisierung und heroischen Abschluss.",
  ),
  artwork(
    "Gustave Courbet - The Stonebreakers - WGA05457.jpg",
    "Gustave Courbet",
    "Die Steinklopfer",
    "1849",
    "Zwei Arbeiter verrichten schwere Straßenarbeit vor einer steilen Böschung.",
    "Das Bild macht Arbeit zum Hauptgegenstand und hält Alter, Abhängigkeit, Material und Wiederholung in derselben engen Bildzone fest.",
  ),
  artwork(
    "Gustave Courbet - The Painter's Studio - Musée d'Orsay.jpg",
    "Gustave Courbet",
    "Das Atelier des Künstlers",
    "1854–1855",
    "Courbet malt im Zentrum seines Ateliers, umgeben von Modellen, Freunden und gesellschaftlichen Figuren.",
    "Courbet nennt das Werk eine reale Allegorie: ein Widerspruch, der zeigt, dass Realismus Auswahl, Konstruktion und Anspruch nie abschafft.",
  ),
] as const;

export const stoneBreakersContextArtworks = [
  artwork(
    "Gustave Courbet - The Stonebreakers - WGA05457.jpg",
    "Gustave Courbet",
    "Die Steinklopfer",
    "1849",
    "Ein junger und ein älterer Arbeiter zerschlagen und transportieren Steine.",
    "Die Gesichter bleiben verborgen, während Kleidung, Werkzeuge, Körperstellung und zersplittertes Material den sozialen Zustand sichtbar machen.",
  ),
  artwork(
    "Gustave Courbet - A Burial at Ornans - Musée d'Orsay.jpg",
    "Gustave Courbet",
    "Ein Begräbnis in Ornans",
    "1849–1850",
    "Ländliche Bewohner versammeln sich in einer breiten Reihe um ein Grab.",
    "Das Schwesterwerk zeigt, wie Courbet nicht nur Arbeit, sondern auch lokale Gemeinschaft auf ein Format hebt, das zuvor großen historischen Stoffen vorbehalten war.",
  ),
  artwork(
    "Jean-François Millet - The Sower - Google Art Project.jpg",
    "Jean-François Millet",
    "Der Sämann",
    "1850",
    "Ein Landarbeiter schreitet mit weitem Schritt über ein Feld und wirft Saat aus.",
    "Millet verdichtet Arbeit stärker zur rhythmischen, fast emblematischen Figur; der Vergleich schärft Courbets nüchternere Material- und Situationsbindung.",
  ),
  artwork(
    "Honoré Daumier - The Third-Class Carriage - Walters 37151.jpg",
    "Honoré Daumier",
    "Wagen dritter Klasse",
    "um 1862–1864",
    "Erschöpfte Reisende sitzen in einem engen Zugabteil.",
    "Daumier zeigt dieselbe gesellschaftliche Verschiebung in einem modernen Innenraum: anonyme Körper werden Träger historischer Erfahrung.",
  ),
] as const;

export const materialRealityArtworks = [
  artwork(
    "Gustave Courbet - The Stonebreakers - WGA05457.jpg",
    "Gustave Courbet",
    "Die Steinklopfer",
    "1849",
    "Arbeiter, Werkzeuge, Kleidung und gebrochener Stein füllen eine flache, gedrängte Bildzone.",
    "Materiale Realität bezeichnet nicht bloß genaue Oberfläche, sondern die Weise, in der Gewicht, Widerstand, Verschleiß und soziale Abhängigkeit sichtbar organisiert werden.",
  ),
  artwork(
    "Jean-François Millet - Gleaners - Google Art Project 2.jpg",
    "Jean-François Millet",
    "Die Ährenleserinnen",
    "1857",
    "Drei Frauen beugen sich wiederholt zum Boden, während die Ernte im Hintergrund eingebracht wird.",
    "Arbeit wird als Zeitstruktur des Körpers sichtbar: Wiederholung, Müdigkeit und geringe Ausbeute sind Teil der Form.",
  ),
  artwork(
    "Adolph Menzel - The Iron Rolling Mill - Alte Nationalgalerie.jpg",
    "Adolph Menzel",
    "Das Eisenwalzwerk",
    "1872–1875",
    "Arbeiter bedienen Maschinen in einer heißen, dicht gefüllten Industriehalle.",
    "Menzel erweitert die Frage von Handarbeit und Materialwiderstand auf industrielle Koordination, Hitze, Gefahr und technische Systeme.",
  ),
  artwork(
    "Honoré Daumier - The Third-Class Carriage - Walters 37151.jpg",
    "Honoré Daumier",
    "Wagen dritter Klasse",
    "um 1862–1864",
    "Menschen verschiedener Generationen sitzen in einem einfachen Eisenbahnabteil.",
    "Materiale Realität umfasst auch Infrastruktur, Enge und soziale Nähe: moderne Erfahrung wird durch Sitze, Wagen, Körper und erzwungene Gemeinschaft geprägt.",
  ),
] as const;
