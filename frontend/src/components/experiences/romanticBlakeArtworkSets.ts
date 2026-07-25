import type { ArtworkStripItem } from "./ArtworkStrip";

const commonsImage = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}`;
const commonsSource = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

function artwork(
  file: string,
  title: string,
  date: string,
  alt: string,
  note: string,
): ArtworkStripItem {
  return {
    alt,
    artist: "William Blake",
    date,
    imageUrl: commonsImage(file),
    note,
    rightsLabel: "Wikimedia Commons · Public Domain",
    sourceUrl: commonsSource(file),
    title,
  };
}

export const blakeProfileArtworks = [
  artwork(
    "William Blake - Albion Rose - from A Large Book of Designs 1793-6.jpg",
    "Albion Rose (Glad Day)",
    "um 1793–1796",
    "Eine nackte, leuchtende Figur steht mit ausgebreiteten Armen über dunklem Grund.",
    "Der geöffnete Körper macht Freiheit, nationale Personifikation und geistige Energie zu einer einzigen aufwärtsdrängenden Geste.",
  ),
  artwork(
    "The Ancient of Days by William Blake.jpg",
    "Europe: a Prophecy, Frontispiz (The Ancient of Days)",
    "1794",
    "Eine weißhaarige Figur kniet in einer leuchtenden Scheibe und misst mit einem Zirkel die Dunkelheit.",
    "Das Bild verbindet Schöpfung mit Begrenzung: Geometrie bringt Ordnung hervor und schneidet zugleich Möglichkeiten ab.",
  ),
  artwork(
    "William Blake - Newton.png",
    "Newton",
    "1795, überarbeitet um 1805",
    "Isaac Newton sitzt nackt auf einem Felsen und zeichnet mit einem Zirkel ein geometrisches Diagramm.",
    "Newton konzentriert sich vollständig auf die messbare Fläche und übersieht die organische, farbige Welt, auf der er sitzt.",
  ),
  artwork(
    "William Blake - The Great Red Dragon and the Woman Clothed with the Sun - Google Art Project.jpg",
    "The Great Red Dragon and the Woman Clothed with the Sun",
    "um 1805",
    "Ein mächtiger geflügelter Drache beugt sich über eine liegende, von Licht umgebene Frau.",
    "Die biblische Vision wird nicht ruhig illustriert, sondern als räumlicher und körperlicher Machtkampf neu erfunden.",
  ),
] as const;

export const ancientOfDaysContextArtworks = [
  artwork(
    "William Blake - Albion Rose - from A Large Book of Designs 1793-6.jpg",
    "Albion Rose (Glad Day)",
    "um 1793–1796",
    "Eine leuchtende Figur breitet Arme und Beine aus und scheint aus der Dunkelheit aufzusteigen.",
    "Albions Öffnung bildet das Gegenbild zum gekrümmten, messenden Körper des Urizen: Ausdehnung statt Einteilung.",
  ),
  artwork(
    "William Blake - Newton.png",
    "Newton",
    "1795, überarbeitet um 1805",
    "Newton beugt sich über eine Zeichnung und setzt den Zirkel an eine geometrische Konstruktion.",
    "Wie Urizen ordnet Newton die Welt durch Maß und Linie; bei ihm wird besonders deutlich, was außerhalb des Diagramms unbeachtet bleibt.",
  ),
  artwork(
    "William Blake - Elohim Creating Adam - WGA2219.jpg",
    "Elohim Creating Adam",
    "1795",
    "Eine göttliche Figur zieht einen horizontal liegenden Adam aus Dunkelheit und Materie hervor.",
    "Schöpfung erscheint als schmerzhafte Bindung an Körper, Erde und Sterblichkeit und widerspricht jeder einfachen Vorstellung eines harmonischen Anfangs.",
  ),
] as const;

export const visionProphecyArtworks = [
  artwork(
    'William Blake - Songs of Innocence and of Experience, Plate 42, "The Tyger" (Bentley 42) - Google Art Project.jpg',
    "Songs of Experience: The Tyger",
    "1794",
    "Gedichtzeilen sind von Pflanzenformen und einem kleinen Tiger unterhalb des Textes umgeben.",
    "Text, Ornament und Tierbild bilden keine getrennten Ebenen: Die gedruckte Seite ist zugleich Gedicht, Bildraum und materielles Objekt.",
  ),
  artwork(
    "The Ancient of Days by William Blake.jpg",
    "Europe: a Prophecy, Frontispiz (The Ancient of Days)",
    "1794",
    "Eine kosmische Figur misst mit einem Zirkel einen dunklen Raum unterhalb einer leuchtenden Scheibe.",
    "Prophezeiung bedeutet hier keine Zukunftsvorhersage, sondern eine erfundene Bildwelt, die gegenwärtige Systeme von Gesetz, Religion und Vernunft prüft.",
  ),
  artwork(
    "William Blake - Albion Rose - from A Large Book of Designs 1793-6.jpg",
    "Albion Rose (Glad Day)",
    "um 1793–1796",
    "Eine strahlende menschliche Figur öffnet sich symmetrisch in einem Feld aus Licht und Farbe.",
    "Blakes Figuren sind keine stabilen Lexikoneinträge: Albion kann Körper, Land, Menschheit und einen umkämpften geistigen Zustand zugleich bezeichnen.",
  ),
  artwork(
    "Hecate, or The Night of Enitharmon's Joy, Butlin 316.jpg",
    "The Night of Enitharmon's Joy",
    "1795",
    "Eine zentrale weibliche Figur sitzt zwischen zwei seitlichen Gestalten, Tieren und einer nächtlichen Landschaft.",
    "Die dichte, rätselhafte Szene zeigt, wie Blake bekannte mythologische Namen mit eigener Kosmologie, Sexualpolitik und apokalyptischer Atmosphäre verschränkt.",
  ),
] as const;

export const blakeAxisArtworks = [
  visionProphecyArtworks[0],
  blakeProfileArtworks[1],
  blakeProfileArtworks[3],
] as const;
