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
    "Ein Bauer schreitet mit weit ausgreifender Bewegung über ein Feld und wirft Saat aus.",
    "Millet verbindet körperliche Arbeit, monumentale Silhouette und eine Landschaft, die weder idyllische Kulisse noch bloßer Hintergrund bleibt.",
  ),
  artwork(
    "Jean-François Millet - Gleaners - Google Art Project 2.jpg",
    "Jean-François Millet",
    "The Gleaners",
    "1857",
    "Drei Frauen sammeln gebückt übrig gebliebene Ähren auf einem abgeernteten Feld.",
    "Die wiederholte Körperhaltung und der Abstand zur reichen Ernte im Hintergrund machen soziale Ordnung über Raum und Dauer sichtbar.",
  ),
  artwork(
    "Jean-François Millet - The Angelus - Google Art Project.jpg",
    "Jean-François Millet",
    "The Angelus",
    "1857–1859",
    "Ein Bauer und eine Bäuerin stehen still auf einem Feld und senken die Köpfe zum Gebet.",
    "Das Bild zeigt, wie Arbeit, Ritual und Abendlicht eine soziale Zeitordnung bilden, ohne bäuerliches Leben vollständig zu harmonisieren.",
  ),
  artwork(
    "Jean-François Millet - Man with a Hoe - Google Art Project.jpg",
    "Jean-François Millet",
    "Man with a Hoe",
    "1860–1862",
    "Ein erschöpfter Feldarbeiter stützt sich schwer auf eine Hacke.",
    "Die gebrochene Haltung macht körperliche Beanspruchung sichtbar und verweigert die sichere Trennung zwischen Würde, Härte und Erschöpfung.",
  ),
] as const;

export const gleanersContextArtworks = [
  artwork(
    "Jean-François Millet - Gleaners - Google Art Project 2.jpg",
    "Jean-François Millet",
    "The Gleaners",
    "1857",
    "Drei Frauen sammeln Ähren in gebückter Haltung, während im Hintergrund große Erntemengen lagern.",
    "Das zentrale Bild organisiert Armut nicht über dramatische Handlung, sondern über wiederholte Körper, kleine Erträge und räumliche Distanz.",
  ),
  artwork(
    "Jean-François Millet - The Sower - Google Art Project.jpg",
    "Jean-François Millet",
    "The Sower",
    "1850",
    "Ein einzelner Sämann bewegt sich energisch durch das dunkle Feld.",
    "Der Vergleich zeigt Millet zwischen heroischer Bewegung und genauer sozialer Arbeitssituation; Monumentalität kann Würde geben, aber auch typisieren.",
  ),
  artwork(
    "Jean-François Millet - The Angelus - Google Art Project.jpg",
    "Jean-François Millet",
    "The Angelus",
    "1857–1859",
    "Zwei arbeitende Menschen unterbrechen ihre Tätigkeit zum Gebet.",
    "Hier strukturiert Ritual den Arbeitstag. Das macht sichtbar, dass ländliche Zeit nicht nur aus Produktion, sondern auch aus Gewohnheit und religiöser Ordnung besteht.",
  ),
  artwork(
    "Jules Breton - The End of the Working Day - Google Art Project.jpg",
    "Jules Breton",
    "The End of the Working Day",
    "1886–1887",
    "Landarbeiterinnen gehen am Ende des Tages durch ein leuchtendes Feld.",
    "Bretons stärker harmonisierte Spätfassung ländlicher Arbeit schärft den Unterschied zwischen sozialer Sichtbarkeit und malerischer Versöhnung.",
  ),
] as const;

export const daumierProfileArtworks = [
  artwork(
    "Honoré Daumier - The Third-Class Carriage - Google Art Project.jpg",
    "Honoré Daumier",
    "The Third-Class Carriage",
    "ca. 1862–1864",
    "Fahrgäste sitzen eng in einem Eisenbahnwagen dritter Klasse.",
    "Daumier macht moderne Öffentlichkeit als geteilten, aber sozial ungleichen Raum sichtbar: Nähe erzeugt weder Gemeinschaft noch vollständige Isolation.",
  ),
  artwork(
    "Honoré Daumier - Rue Transnonain, le 15 Avril 1834.jpg",
    "Honoré Daumier",
    "Rue Transnonain, 15 April 1834",
    "1834",
    "Ein getöteter Mann liegt in einem verwüsteten Innenraum über einem Kind.",
    "Die Lithografie verwandelt staatliche Gewalt nicht in heroische Aktion, sondern in die stumme Evidenz eines privaten Raums nach dem Ereignis.",
  ),
  artwork(
    "Honoré Daumier - The Uprising - Google Art Project.jpg",
    "Honoré Daumier",
    "The Uprising",
    "ca. 1860",
    "Eine verdichtete Menge drängt vorwärts, angeführt von einem Mann mit erhobener Faust.",
    "Die Masse erscheint zugleich als politische Kraft und als schwer lesbarer kollektiver Körper, der individuelle Identitäten verschluckt.",
  ),
  artwork(
    "Honoré Daumier - The Laundress - Google Art Project.jpg",
    "Honoré Daumier",
    "The Laundress",
    "ca. 1863",
    "Eine Wäscherin steigt mit einem Kind und schwerer Wäsche eine Treppe hinauf.",
    "Städtische Arbeit wird über Last, Steigung und familiäre Begleitung sichtbar, nicht über spektakuläre Industrie.",
  ),
] as const;

export const thirdClassContextArtworks = [
  artwork(
    "Honoré Daumier - The Third-Class Carriage - Google Art Project.jpg",
    "Honoré Daumier",
    "The Third-Class Carriage",
    "ca. 1862–1864",
    "Eng sitzende Fahrgäste füllen den Vordergrund eines Eisenbahnwagens.",
    "Die Komposition macht Transport zu einer sozialen Anordnung aus Körpernähe, Blicken, Müdigkeit und begrenztem Raum.",
  ),
  artwork(
    "Honoré Daumier - The Second-Class Carriage - Google Art Project.jpg",
    "Honoré Daumier",
    "The Second-Class Carriage",
    "ca. 1864",
    "Bürgerliche Reisende sitzen geordnet in einem Eisenbahnabteil.",
    "Der Klassenvergleich zeigt, dass Mobilität nicht neutral ist: dieselbe Infrastruktur verteilt Komfort, Haltung und soziale Lesbarkeit unterschiedlich.",
  ),
  artwork(
    "Honoré Daumier - The Laundress - Google Art Project.jpg",
    "Honoré Daumier",
    "The Laundress",
    "ca. 1863",
    "Eine arbeitende Frau trägt Wäsche und begleitet ein Kind durch die Stadt.",
    "Der Vergleich verschiebt moderne Öffentlichkeit von der Eisenbahn zur alltäglichen Bewegung durch urbane Infrastruktur.",
  ),
  artwork(
    "Adolph Menzel - Eisenwalzwerk - Alte Nationalgalerie.jpg",
    "Adolph Menzel",
    "The Iron Rolling Mill",
    "1872–1875",
    "Arbeiter bewegen sich zwischen glühendem Metall und schweren Maschinen in einer Fabrikhalle.",
    "Menzel erweitert den urbanen Publikumsraum zur industriellen Produktionsgemeinschaft, in der Nähe durch Hitze, Lärm und geteilte Gefahr entsteht.",
  ),
] as const;

export const ruralLaborArtworks = [
  gleanersContextArtworks[0],
  milletProfileArtworks[0],
  milletProfileArtworks[3],
  artwork(
    "Rosa Bonheur - Ploughing in the Nivernais - Google Art Project.jpg",
    "Rosa Bonheur",
    "Ploughing in the Nivernais",
    "1849",
    "Mehrere Ochsengespanne pflügen schwere Erde in langen Reihen.",
    "Bonheur macht tierische Kraft, Bodenwiderstand und organisierte Zusammenarbeit sichtbar und erweitert Arbeit über den menschlichen Körper hinaus.",
  ),
] as const;

export const urbanPublicsArtworks = [
  thirdClassContextArtworks[0],
  daumierProfileArtworks[1],
  daumierProfileArtworks[3],
  thirdClassContextArtworks[3],
] as const;
