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

export const goyaProfileArtworks = [
  artwork(
    "Francisco de Goya y Lucientes - The Parasol - Google Art Project.jpg",
    "Francisco de Goya",
    "Der Sonnenschirm",
    "1777",
    "Eine elegant gekleidete junge Frau sitzt mit einem Hund, während ein Begleiter einen Sonnenschirm über sie hält.",
    "Das frühe Teppichkarton zeigt Goyas Fähigkeit, höfische Erwartungen, modische Oberfläche und soziale Rollen in scheinbar leichter Alltagsszene zu verbinden.",
  ),
  artwork(
    "Francisco de Goya - The Third of May 1808 - Prado in Google Earth.jpg",
    "Francisco de Goya",
    "Der 3. Mai 1808",
    "1814",
    "Ein Mann in weißem Hemd breitet vor einer anonymen Reihe französischer Soldaten die Arme aus.",
    "Das Historienbild verweigert einen siegreichen Mittelpunkt und organisiert Gewalt als asymmetrische Konfrontation zwischen individualisierten Opfern und mechanischer Exekution.",
  ),
  artwork(
    "Francisco de Goya, The Sleep of Reason Produces Monsters.jpg",
    "Francisco de Goya",
    "Der Schlaf der Vernunft gebiert Ungeheuer",
    "1799",
    "Ein Künstler ist über einem Tisch zusammengesunken, während Eulen und Fledermäuse hinter ihm auftauchen.",
    "Die Radierung macht Vernunft nicht zum einfachen Gegenmittel der Fantasie; sie zeigt, wie unkontrollierte Einbildung und unzureichende Kritik einander gefährlich verstärken können.",
  ),
  artwork(
    "Francisco de Goya, Saturn Devouring His Son.jpg",
    "Francisco de Goya",
    "Saturn verschlingt seinen Sohn",
    "um 1819–1823",
    "Eine riesige, wild blickende Gestalt beißt in einen verstümmelten menschlichen Körper vor schwarzem Grund.",
    "Die Schwarze Malerei löst Mythos aus klassischer Distanz und verwandelt Herrschaft, Zeit und Angst in eine nahezu private körperliche Attacke.",
  ),
] as const;

export const thirdOfMayContextArtworks = [
  artwork(
    "Francisco de Goya - The Second of May 1808 - Google Art Project.jpg",
    "Francisco de Goya",
    "Der 2. Mai 1808",
    "1814",
    "Zivilisten und mamlukische Reiter kämpfen in einem dichten, chaotischen Straßenraum.",
    "Das Gegenstück zeigt Gewalt als unübersichtlichen Nahkampf; erst der Vergleich macht sichtbar, wie radikal der 3. Mai Täter und Opfer räumlich trennt.",
  ),
  artwork(
    "Francisco de Goya, The Disasters of War, plate 15, And there is no remedy.jpg",
    "Francisco de Goya",
    "Und es gibt keine Hilfe",
    "um 1810–1815",
    "Ein gefesselter Mann steht vor unsichtbaren Gewehren, während weitere Erschießungen im Hintergrund stattfinden.",
    "Die Druckgrafik reduziert den historischen Schauplatz auf Wiederholung, Nähe und Ausweglosigkeit; Gewalt erscheint seriell statt als einmaliger Ausnahmezustand.",
  ),
  artwork(
    "Francisco de Goya, The Disasters of War, plate 39, A heroic feat! With dead men!.jpg",
    "Francisco de Goya",
    "Große Heldentat! Mit Toten!",
    "um 1810–1815",
    "Verstümmelte Körper hängen an einem Baum vor leerem Landschaftsraum.",
    "Der bittere Titel demontiert heroische Kriegssprache und zwingt den Blick auf Körper, die von jeder glorreichen Erzählung ausgeschlossen sind.",
  ),
] as const;

export const darkRomanticismArtworks = [
  artwork(
    "Francisco de Goya, The Sleep of Reason Produces Monsters.jpg",
    "Francisco de Goya",
    "Der Schlaf der Vernunft gebiert Ungeheuer",
    "1799",
    "Ein zusammengesunkener Zeichner wird von Eulen, Fledermäusen und einer lauernden Katze umgeben.",
    "Das Blatt verbindet Kritik, Fantasie und Selbstgefährdung: Das Ungeheuerliche entsteht weder nur außerhalb noch nur innerhalb des vernünftigen Subjekts.",
  ),
  artwork(
    "Francisco de Goya, Witches' Sabbath (The Great He-Goat).jpg",
    "Francisco de Goya",
    "Hexensabbat",
    "um 1820–1823",
    "Eine dunkle Gruppe drängt sich um eine große bocksgestaltige Figur in einem fast schwarzen Raum.",
    "Goya zeigt kollektive Angst als soziale Form: Gesichter, Masse und Leere erzeugen eine Gemeinschaft, die durch Unterwerfung und Erwartung zusammengehalten wird.",
  ),
  artwork(
    "Francisco de Goya, Saturn Devouring His Son.jpg",
    "Francisco de Goya",
    "Saturn verschlingt seinen Sohn",
    "um 1819–1823",
    "Saturn hält einen blutenden Körper in beiden Händen und blickt mit weit geöffneten Augen in den dunklen Raum.",
    "Mythos wird zum Bild zerstörerischer Herrschaft, die Zukunft aus Angst vor ihrem Verlust vernichtet.",
  ),
  artwork(
    "Francisco de Goya - Perro semihundido - Google Art Project.jpg",
    "Francisco de Goya",
    "Der Hund",
    "um 1819–1823",
    "Nur der Kopf eines kleinen Hundes erscheint unter einer großen leeren, schräg geteilten Fläche.",
    "Die fast motivlose Komposition verschiebt das Dunkle von sichtbarer Gewalt zu Unsicherheit, Isolation und einem Blick ohne erreichbares Gegenüber.",
  ),
] as const;
