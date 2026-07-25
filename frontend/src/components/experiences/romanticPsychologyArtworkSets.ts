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

export const dreamArtworks = [
  artwork(
    "Henry Fuseli - The Nightmare.JPG",
    "Johann Heinrich Füssli",
    "The Nightmare",
    "1781",
    "Eine bewusstlose Frau liegt ausgestreckt, während ein koboldartiges Wesen auf ihrer Brust sitzt und ein Pferdekopf aus der Dunkelheit erscheint.",
    "Der Traum ist kein privates Inneres, sondern eine Bühne, auf der Körper, Begehren, Angst und theatrale Übertreibung sichtbar werden.",
  ),
  artwork(
    "William Blake - Jacob's Ladder - Google Art Project.jpg",
    "William Blake",
    "Jacob's Ladder",
    "ca. 1805",
    "Leuchtende Gestalten steigen und fallen auf einer spiralförmigen Leiter über dem schlafenden Jakob.",
    "Blake macht den Traum zu einer geordneten Offenbarung: Schlaf öffnet einen anderen Erkenntnisraum, statt bloß Kontrolle auszusetzen.",
  ),
  artwork(
    "Francisco de Goya - The sleep of reason produces monsters (No. 43), from Los Caprichos - Google Art Project.jpg",
    "Francisco Goya",
    "Der Schlaf der Vernunft gebiert Ungeheuer",
    "1799",
    "Ein schlafender Zeichner wird von Eulen, Fledermäusen und einem Luchs umgeben.",
    "Das Blatt hält offen, ob die Monster durch ausgeschaltete Vernunft entstehen oder ob Imagination sichtbar macht, was vernünftige Ordnung verdrängt.",
  ),
  artwork(
    "Samuel Palmer - The Magic Apple Tree - Google Art Project.jpg",
    "Samuel Palmer",
    "The Magic Apple Tree",
    "ca. 1830",
    "Ein leuchtender Baum steht in einer dichten nächtlichen Landschaft mit Figuren und Tieren.",
    "Der visionäre Zustand ist hier weder Albtraum noch Botschaft, sondern eine Verdichtung vertrauter Natur zu übersteigerter Gegenwart.",
  ),
] as const;

export const uncannyArtworks = [
  artwork(
    "Caspar David Friedrich - Der Mönch am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Der Mönch am Meer",
    "1808–1810",
    "Eine winzige dunkle Figur steht vor fast leerem Strand, Meer und Himmel.",
    "Das Unheimliche entsteht nicht durch ein Monster, sondern durch Maßstab, Leere und den Verlust vertrauter räumlicher Orientierung.",
  ),
  artwork(
    "Francisco de Goya - Saturn Devouring His Son - Prado Museum.jpg",
    "Francisco Goya",
    "Saturn verschlingt seinen Sohn",
    "ca. 1819–1823",
    "Eine riesige Gestalt beißt in einen blutenden menschlichen Körper vor schwarzem Grund.",
    "Die vertraute Vaterfigur kippt in radikale Gewalt; Mythos wird nicht distanziert erzählt, sondern als körperlich nahe Störung präsentiert.",
  ),
  artwork(
    "William Blake - The Ghost of a Flea.jpg",
    "William Blake",
    "The Ghost of a Flea",
    "ca. 1819–1820",
    "Eine muskulöse, schuppige Kreatur hält eine Schale und bewegt sich über eine nächtliche Bühne.",
    "Blake gibt einer behaupteten Vision präzise Körperlichkeit. Das Unheimliche liegt in der überzeugenden Form eines Wesens, dessen ontologischer Status unsicher bleibt.",
  ),
  artwork(
    "The Abbey in the Oakwood - Caspar David Friedrich - Google Cultural Institute.jpg",
    "Caspar David Friedrich",
    "Abtei im Eichwald",
    "1809–1810",
    "Ein Trauerzug zieht durch kahle Eichen zu einer gotischen Ruine.",
    "Ruine, Winter und Bestattung machen Vertrautes fremd: Kirche, Wald und Gemeinschaft bleiben erkennbar, funktionieren aber nicht mehr in gewohnter Form.",
  ),
] as const;

export const melancholyArtworks = [
  artwork(
    "Caspar David Friedrich - Frau vor der untergehenden Sonne.jpg",
    "Caspar David Friedrich",
    "Frau vor der untergehenden Sonne",
    "ca. 1818",
    "Eine Frau steht mit ausgebreiteten Armen vor einer untergehenden Sonne.",
    "Melancholie erscheint nicht als eindeutige Trauer, sondern als zeitliche Schwebe zwischen Öffnung, Abschied und unerreichbarer Ferne.",
  ),
  artwork(
    "Théodore Géricault - Portrait of a Woman Suffering from Obsessive Envy - Google Art Project.jpg",
    "Théodore Géricault",
    "Porträt einer Frau mit sogenannter Neid-Monomanie",
    "ca. 1822",
    "Eine ältere Frau blickt angespannt aus dunkler Kleidung und gedämpftem Hintergrund.",
    "Das Porträt ist historisch mit problematischer Diagnostik verbunden, zeigt aber zugleich, wie psychische Zustände nicht vollständig im Gesicht aufgehen.",
  ),
  artwork(
    "J. M. W. Turner - The Fighting Temeraire tugged to her last berth to be broken up, 1838 - National Gallery.jpg",
    "J. M. W. Turner",
    "The Fighting Temeraire",
    "1839",
    "Ein alter Segler wird bei Sonnenuntergang von einem kleinen Dampfschlepper gezogen.",
    "Melancholie entsteht aus historischem Übergang: Das Vergangene ist noch sichtbar, aber seine Funktion und sein Zeitalter enden bereits.",
  ),
  artwork(
    "Francisco de Goya - The Dog.jpg",
    "Francisco Goya",
    "Der Hund",
    "ca. 1819–1823",
    "Nur der Kopf eines Hundes erscheint über einer schrägen Erdfläche in weitem leerem Raum.",
    "Die Bildfläche bietet kaum Handlung oder Erklärung. Melancholie wird zur anhaltenden Situation ohne sicheren Gegenstand und ohne Auflösung.",
  ),
] as const;

export const solitudeArtworks = [
  artwork(
    "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "Caspar David Friedrich",
    "Wanderer über dem Nebelmeer",
    "ca. 1818",
    "Ein Mann steht auf einem Felsen über einem von Nebel bedeckten Gebirge.",
    "Die Rückenfigur verbindet Selbstbehauptung und Unerreichbarkeit: Sie besitzt den Aussichtspunkt, bleibt für Betrachtende aber psychologisch verschlossen.",
  ),
  artwork(
    "Caspar David Friedrich - The Monk by the Sea - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Der Mönch am Meer",
    "1808–1810",
    "Eine einzelne Figur steht an einem nahezu leeren Strand vor dunklem Meer und hohem Himmel.",
    "Einsamkeit wird über Proportion und Umgebung erzeugt. Die Figur ist nicht nur allein, sondern ihrer Fähigkeit zur räumlichen Beherrschung beraubt.",
  ),
  artwork(
    "John Constable - Study of Clouds, 1822.jpg",
    "John Constable",
    "Wolkenstudie",
    "1822",
    "Wolken bewegen sich über einen blauen Himmel ohne sichtbare Menschen oder Architektur.",
    "Ein menschenleeres Bild ist nicht automatisch einsam. Die Studie zeigt, dass Einsamkeit erst durch ein Verhältnis zwischen Abwesenheit, Blickposition und Erwartung entsteht.",
  ),
  artwork(
    "Joseph Mallord William Turner - Snow Storm - Steam-Boat off a Harbour's Mouth - WGA23178.jpg",
    "J. M. W. Turner",
    "Snow Storm: Steam-Boat off a Harbour's Mouth",
    "1842",
    "Ein Dampfschiff löst sich fast vollständig in einem Wirbel aus Schnee, Rauch und Wasser auf.",
    "Isolation kann auch ein technisches und körperliches Verhältnis sein: Das Schiff bleibt in Bewegung, verliert aber Orientierung und sicheren Abstand zur Umwelt.",
  ),
] as const;
