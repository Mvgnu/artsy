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

export const milletProfileArtworks = [
  artwork(
    "Jean-François Millet - The Sower - Google Art Project.jpg",
    "Jean-François Millet",
    "The Sower",
    "1850",
    "Ein Bauer schreitet über einen dunklen Acker und wirft Saatgut mit weit ausholender Bewegung aus.",
    "Millet monumentalisiert eine wiederholte Arbeitsbewegung, ohne den Körper aus Erde, Gewicht und ökonomischem Risiko zu lösen.",
  ),
  artwork(
    "Jean-François Millet - Gleaners - Google Art Project 2.jpg",
    "Jean-François Millet",
    "The Gleaners",
    "1857",
    "Drei Frauen sammeln gebückt einzelne Ähren auf einem abgeernteten Feld.",
    "Die niedrige Körperhaltung, das breite Feld und der entfernte Ertrag machen soziale Ordnung über Raum und Wiederholung sichtbar.",
  ),
  artwork(
    "Jean-François Millet - The Angelus - Google Art Project.jpg",
    "Jean-François Millet",
    "The Angelus",
    "1857–1859",
    "Ein Mann und eine Frau halten auf einem Feld inne und senken die Köpfe zum Gebet.",
    "Arbeit, religiöse Zeit und später sentimentale Rezeption überlagern sich; das Bild ist weder reine Frömmigkeit noch bloße Sozialanklage.",
  ),
  artwork(
    "Jean-François Millet - Man with a Hoe - Google Art Project.jpg",
    "Jean-François Millet",
    "Man with a Hoe",
    "1860–1862",
    "Ein erschöpfter Landarbeiter stützt sich auf eine Hacke und blickt mit offenem Mund nach vorn.",
    "Der Körper erscheint als gezeichnete Arbeitskraft; gerade diese physische Präsenz löste Debatten über Würde, Hässlichkeit und soziale Bedrohung aus.",
  ),
] as const;

export const gleanersContextArtworks = [
  artwork(
    "Jean-François Millet - The Sower - Google Art Project.jpg",
    "Jean-François Millet",
    "The Sower",
    "1850",
    "Ein Säender bewegt sich diagonal durch den Acker und verteilt Saatgut.",
    "Die weit ausgreifende Bewegung zeigt Arbeit als zyklische Investition in eine unsichere Zukunft, nicht als einzelne dramatische Handlung.",
  ),
  artwork(
    "Jules Breton - The Recall of the Gleaners - Google Art Project.jpg",
    "Jules Breton",
    "The Recall of the Gleaners",
    "1859",
    "Eine Gruppe von Ährensammlerinnen kehrt im Abendlicht vom Feld zurück.",
    "Bretons weichere Inszenierung zeigt, wie ländliche Arbeit gleichzeitig sozial lesbar und ästhetisch versöhnt werden konnte.",
  ),
  artwork(
    "Jean-François Millet - The Angelus - Google Art Project.jpg",
    "Jean-François Millet",
    "The Angelus",
    "1857–1859",
    "Zwei Feldarbeiter unterbrechen ihre Arbeit zum Gebet, während Arbeitsgeräte und Kartoffelkorb vor ihnen stehen.",
    "Die Szene verschiebt den Rhythmus vom Sammeln zur Pause und zeigt, wie religiöse und ökonomische Zeit denselben Körper ordnen.",
  ),
] as const;

export const ruralLaborArtworks = [
  artwork(
    "Jean-François Millet - Gleaners - Google Art Project 2.jpg",
    "Jean-François Millet",
    "The Gleaners",
    "1857",
    "Drei Frauen sammeln einzelne Ähren auf einem weiten, bereits abgeernteten Feld.",
    "Die Arbeit liegt buchstäblich nach dem eigentlichen Ertrag: Sichtbar wird eine soziale Position, die von Resten, Zugang und körperlicher Ausdauer abhängt.",
  ),
  artwork(
    "Jean-François Millet - Man with a Hoe - Google Art Project.jpg",
    "Jean-François Millet",
    "Man with a Hoe",
    "1860–1862",
    "Ein erschöpfter Arbeiter stützt sich auf sein Werkzeug vor einer trockenen Erdfläche.",
    "Die Hacke ist zugleich Werkzeug, Stütze und Zeichen davon, wie Arbeit den Körper langfristig formt.",
  ),
  artwork(
    "Jules Breton - The Recall of the Gleaners - Google Art Project.jpg",
    "Jules Breton",
    "The Recall of the Gleaners",
    "1859",
    "Ährensammlerinnen ziehen im warmen Abendlicht vom Feld fort.",
    "Der Vergleich macht sichtbar, dass ländliche Arbeit auch durch Licht, Gruppierung und idealisierte Harmonie politisch entschärft werden kann.",
  ),
  artwork(
    "Adolph Menzel - Eisenwalzwerk - Google Art Project.jpg",
    "Adolph Menzel",
    "Eisenwalzwerk",
    "1872–1875",
    "Arbeiter bewegen glühendes Metall durch eine dichte industrielle Halle.",
    "Rurale und industrielle Arbeit teilen Wiederholung, Gefahr und körperliche Abhängigkeit, erzeugen aber sehr unterschiedliche Räume sozialer Sichtbarkeit.",
  ),
] as const;

export const milletAxisArtworks = [
  milletProfileArtworks[0],
  milletProfileArtworks[1],
  milletProfileArtworks[3],
] as const;
