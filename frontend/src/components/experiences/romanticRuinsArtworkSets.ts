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

export const abbeyContextArtworks = [
  artwork(
    "Caspar David Friedrich - Das Kreuz im Gebirge (1805-07).jpg",
    "Caspar David Friedrich",
    "Das Kreuz im Gebirge",
    "1807–1808",
    "Ein Kruzifix steht auf einem bewaldeten Berg vor rötlichem Abendhimmel; Sonnenstrahlen brechen hinter dem Fels hervor.",
    "Friedrich verlegt das religiöse Bild in die Landschaft. Glaube wird nicht durch eine intakte Kirche garantiert, sondern über Distanz, Licht und den schwierigen Aufstieg organisiert.",
  ),
  artwork(
    "Caspar David Friedrich - Winter Landscape with Church - WGA08245.jpg",
    "Caspar David Friedrich",
    "Winterlandschaft mit Kirche",
    "1811",
    "Ein Mann sitzt betend an einem Felsen, während sich hinter Tannen die Türme einer gotischen Kirche aus dem Nebel erheben.",
    "Die ferne Kirche erscheint zugleich als Architektur, Vision und unerreichbares Versprechen. Wie in der Abtei entsteht religiöse Bedeutung aus räumlicher Trennung.",
  ),
  artwork(
    "Caspar David Friedrich - The Cemetery Entrance - WGA08275.jpg",
    "Caspar David Friedrich",
    "Der Friedhofseingang",
    "1825",
    "Zwei kleine Figuren stehen vor einem monumentalen dunklen Tor, hinter dem Grabkreuze und kahle Bäume sichtbar werden.",
    "Das Tor macht Erinnerung zu einer Schwelle. Der Zugang zur Vergangenheit ist möglich, aber weder offen noch übersichtlich.",
  ),
] as const;

export const ruinMemoryArtworks = [
  artwork(
    "Caspar David Friedrich - Abtei im Eichwald - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Abtei im Eichwald",
    "1809–1810",
    "Ein Trauerzug trägt einen Sarg durch kahle Eichen zu einer gotischen Kirchenruine im winterlichen Dämmerlicht.",
    "Die Ruine ist kein neutraler Rest. Sie bündelt Begräbnis, Glaubensgeschichte, Natur und nationale Vergangenheit in einem offenen Erinnerungsraum.",
  ),
  artwork(
    "Ruine Eldena im Riesengebirge (Caspar David Friedrich)-WUS08485.jpg",
    "Caspar David Friedrich",
    "Ruine Eldena im Riesengebirge",
    "1830–1834",
    "Die gotische Ruine des Klosters Eldena steht in einer erfundenen Gebirgslandschaft, umgeben von Bäumen und weitem Himmel.",
    "Friedrich versetzt ein konkretes norddeutsches Baufragment in eine andere Landschaft. Erinnerung arbeitet hier nicht dokumentarisch, sondern montierend.",
  ),
  artwork(
    "Hubert Robert View of the Grande Galerie in Ruins.jpg",
    "Hubert Robert",
    "Imaginäre Ansicht der Grande Galerie des Louvre als Ruine",
    "1796",
    "Menschen bewegen sich zwischen eingestürzten Gewölben, Trümmern und überwucherten Resten der Louvre-Galerie.",
    "Robert imaginiert die eigene Gegenwart bereits als archäologischen Rest. Die Ruine erzeugt Distanz zu einer Ordnung, die zur Entstehungszeit noch nicht vergangen war.",
  ),
  artwork(
    "Cole Thomas The Course of Empire Desolation 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: Desolation",
    "1836",
    "Mondlicht fällt auf verlassene Ruinen am Wasser, während Pflanzen und Stille die frühere imperiale Stadt ersetzen.",
    "Cole macht die Ruine zum Endpunkt einer politischen Zeitfolge. Natur bewahrt das Vergangene nicht unverändert, sondern verwandelt seine Monumente weiter.",
  ),
] as const;

export const nightArtworks = [
  artwork(
    "Caspar David Friedrich - Two Men Contemplating the Moon - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Zwei Männer in Betrachtung des Mondes",
    "1819–1820",
    "Zwei Männer stehen mit dem Rücken zum Betrachter in einem dunklen Wald und sehen auf eine schmale Mondsichel.",
    "Die Nacht reduziert Sichtbarkeit, ohne den Blick zu beenden. Gemeinsames Sehen wird wichtiger als vollständiges Erkennen.",
  ),
  artwork(
    "Caspar David Friedrich - Mondaufgang am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Mondaufgang am Meer",
    "1822",
    "Drei Figuren betrachten an einer felsigen Küste den aufgehenden Mond und entfernte Segelschiffe.",
    "Mondlicht öffnet den Horizont, lässt Entfernung aber bestehen. Die Nacht verbindet Gemeinschaft, Erwartung und unerreichbare Ferne.",
  ),
  artwork(
    "Joseph Mallord William Turner - Fishermen at Sea - Google Art Project.jpg",
    "J. M. W. Turner",
    "Fishermen at Sea",
    "1796",
    "Ein kleines Fischerboot wird auf dunkler See von starkem Mondlicht beleuchtet, während Felsen und Wellen den Raum begrenzen.",
    "Bei Turner ist Nacht nicht stille Versenkung, sondern ein Konflikt zwischen punktuellem Licht, gefährlicher Arbeit und kaum lesbarer Umgebung.",
  ),
  artwork(
    "Samuel Palmer - Cornfield and Church by Moonlight - Google Art Project.jpg",
    "Samuel Palmer",
    "Cornfield and Church by Moonlight",
    "um 1830",
    "Ein üppiges Kornfeld, Bäume und eine Kirche verdichten sich unter einem hellen Mond zu einer traumartig geschlossenen Landschaft.",
    "Palmers Nacht macht die Welt nicht leer, sondern übervoll. Mondlicht verwandelt Alltag und Ernte in eine visionäre pastorale Ordnung.",
  ),
] as const;
