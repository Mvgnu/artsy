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

export const iconicMasterpieceArtworks = [
  artwork(
    "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "Caspar David Friedrich",
    "Wanderer über dem Nebelmeer",
    "um 1818",
    "Ein Mann mit Gehstock steht mit dem Rücken zum Betrachter auf einem Felsen über einem Meer aus Nebel.",
    "Die Rückenfigur bündelt Selbstbeobachtung, räumliche Unsicherheit und die Versuchung, den Blick mit Beherrschung zu verwechseln.",
  ),
  artwork(
    "Eugène Delacroix - Le 28 Juillet. La Liberté guidant le peuple.jpg",
    "Eugène Delacroix",
    "Die Freiheit führt das Volk",
    "1830",
    "Eine allegorische Frauenfigur mit Trikolore führt Bewaffnete über Barrikaden und Tote.",
    "Das Bild verbindet aktuelle Straßenkämpfe, Allegorie, soziale Typen und monumentale Historienmalerei zu einer instabilen politischen Ikone.",
  ),
  artwork(
    "The Fighting Temeraire, JMW Turner, National Gallery.jpg",
    "J. M. W. Turner",
    "The Fighting Temeraire",
    "1839",
    "Ein großes Segelkriegsschiff wird von einem kleinen Dampfschlepper durch leuchtendes Abendlicht gezogen.",
    "Technischer Übergang erscheint als Bild von Erinnerung, Veralterung und kontrollierter Verabschiedung statt als simple Fortschrittserzählung.",
  ),
  artwork(
    "Francisco de Goya, Saturno devorando a su hijo (1819-1823).jpg",
    "Francisco de Goya",
    "Saturn verschlingt seinen Sohn",
    "1819–1823",
    "Eine riesige dunkle Gestalt beißt in den verstümmelten Körper eines kleineren Menschen.",
    "Der Mythos wird in eine private Wandmalerei ohne sichere Distanz, heroischen Rahmen oder stabile symbolische Ordnung verwandelt.",
  ),
] as const;

export const wandererContextArtworks = [
  artwork(
    "Caspar David Friedrich - Der Mönch am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Der Mönch am Meer",
    "1808–1810",
    "Ein winziger Mönch steht vor einem fast leeren Meer und einem riesigen Himmel.",
    "Der Vergleich zeigt, wie Friedrich eine Figur entweder in extremer Leere auflösen oder als erhöhten Blickkörper stabilisieren kann.",
  ),
  artwork(
    "Caspar David Friedrich - Chalk Cliffs on Rügen - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Kreidefelsen auf Rügen",
    "1818",
    "Drei Figuren halten sich an einer steilen, hellen Küstenkante über blauem Meer auf.",
    "Mehrere Figuren und die gefährliche Vorderkante machen sichtbar, dass romantische Aussicht kein rein souveräner Fernblick ist.",
  ),
  artwork(
    "Caspar David Friedrich - Two Men Contemplating the Moon - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Zwei Männer in Betrachtung des Mondes",
    "1819–1820",
    "Zwei Männer stehen gemeinsam vor einem aufsteigenden Mond zwischen dunklen Bäumen.",
    "Der geteilte Blick bietet ein Gegenmodell zum isolierten Wanderer: Wahrnehmung kann auch gemeinschaftlich und dialogisch organisiert werden.",
  ),
] as const;

export const libertyContextArtworks = [
  artwork(
    "Eugène Delacroix - La Barque de Dante.jpg",
    "Eugène Delacroix",
    "Die Dantebarke",
    "1822",
    "Dante und Vergil überqueren ein aufgewühltes Gewässer, während sich Verdammte am Boot festhalten.",
    "Frühe Historienmalerei zeigt Delacroix' Interesse an bewegten Gruppen, extremen Körpern und emotionalem Farbdruck.",
  ),
  artwork(
    "Eugène Delacroix - La Mort de Sardanapale.jpg",
    "Eugène Delacroix",
    "Der Tod des Sardanapal",
    "1827",
    "Ein Herrscher beobachtet aus einem roten Bett die Zerstörung seines Besitzes und die Tötung von Menschen und Tieren.",
    "Die überladene Komposition macht deutlich, wie Delacroix Gewalt, Luxus und malerische Bewegung zugleich organisieren konnte.",
  ),
  artwork(
    "Barricade rue Soufflot 1848.jpg",
    "Horace Vernet zugeschrieben",
    "Barrikade in der Rue Soufflot",
    "1848",
    "Eine Pariser Barrikade wird von bewaffneten Männern und einer Trikolore besetzt.",
    "Der Vergleich mit einem späteren Revolutionsbild zeigt, wie Delacroix aktuelle Straßenpolitik in Allegorie und Historienformat überführt.",
  ),
] as const;

export const temeraireContextArtworks = [
  artwork(
    "J. M. W. Turner - The Slave Ship - Google Art Project.jpg",
    "J. M. W. Turner",
    "The Slave Ship",
    "1840",
    "Ein Schiff kämpft in rotem Sturmlicht, während Körper und Ketten im Wasser treiben.",
    "Turners Auflösung von Form kann Erinnerung politisieren und Gewalt sichtbar machen, nicht nur Atmosphäre erzeugen.",
  ),
  artwork(
    "J. M. W. Turner - Rain, Steam and Speed - National Gallery file.jpg",
    "J. M. W. Turner",
    "Rain, Steam and Speed",
    "1844",
    "Eine Dampflokomotive fährt frontal durch Regen und Dunst über eine Brücke.",
    "Industrie erscheint hier nicht als Schlepper einer alten Welt, sondern als unmittelbare Geschwindigkeit, Wahrnehmungsdruck und moderne Bewegung.",
  ),
  artwork(
    "JMW Turner - The Burning of the Houses of Lords and Commons.jpg",
    "J. M. W. Turner",
    "The Burning of the Houses of Lords and Commons",
    "1834–1835",
    "Das britische Parlament brennt in intensivem Orange über der Themse.",
    "Feuer, Wasser, Zuschauer und modernes Ereignis zeigen Turners Fähigkeit, Zeitgeschichte in atmosphärische Spektakel zu übersetzen.",
  ),
] as const;

export const saturnContextArtworks = [
  artwork(
    "Francisco Goya - El aquelarre - Google Art Project.jpg",
    "Francisco de Goya",
    "Der Hexensabbat",
    "1797–1798",
    "Eine gehörnte Ziegengestalt sitzt zwischen Hexen und Kindern in einer nächtlichen Landschaft.",
    "Das frühere Hexenbild nutzt groteske Fantasie noch in einer klareren Gruppenszene und für einen bekannten Auftraggeberkontext.",
  ),
  artwork(
    "Francisco de Goya y Lucientes - The Colossus - Google Art Project.jpg",
    "Francisco de Goya oder Werkstatt",
    "Der Koloss",
    "um 1808–1812",
    "Eine riesige Gestalt erhebt sich über einer Landschaft, während Menschen und Tiere fliehen.",
    "Unsichere Autorschaft und offene Bedeutung passen zu Goyas Bildwelt, in der politische Gewalt und monströse Körper einander überlagern.",
  ),
  artwork(
    "Goya - Perro semihundido - Google Art Project.jpg",
    "Francisco de Goya",
    "Der Hund",
    "1819–1823",
    "Der kleine Kopf eines Hundes erscheint unter einer großen leeren braunen Fläche.",
    "Innerhalb derselben Hausausstattung reicht psychische Bedrohung von maximaler körperlicher Gewalt bis zu fast vollständiger Leere.",
  ),
] as const;
