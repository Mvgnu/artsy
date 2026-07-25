import type { ArtworkStripItem } from "./ArtworkStrip";

function artwork(
  filename: string,
  artist: string,
  title: string,
  date: string,
  alt: string,
  note: string,
): ArtworkStripItem {
  const encoded = encodeURIComponent(filename).replace(/%2F/g, "/");

  return {
    alt,
    artist,
    date,
    image: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encoded}`,
    note,
    source: `https://commons.wikimedia.org/wiki/File:${encoded}`,
    title,
  };
}

export const constableProfileArtworks = [
  artwork(
    "John Constable - The White Horse - Google Art Project.jpg",
    "John Constable",
    "The White Horse",
    "1819",
    "Ein weißes Pferd wird auf einer Fähre über den Fluss Stour transportiert.",
    "Der erste der großen Stour-Bilder verbindet alltägliche Arbeit, Ortskenntnis und ambitionierte Ausstellungsgröße.",
  ),
  artwork(
    "John Constable - The Hay Wain (1821).jpg",
    "John Constable",
    "The Hay Wain",
    "1821",
    "Ein Heuwagen fährt durch einen flachen Fluss vor einem ländlichen Haus und weitem Himmel.",
    "Das scheinbar friedliche Motiv ist aus Erinnerung, zahlreichen Studien und bewusst komponierter Arbeit am großen Bild entstanden.",
  ),
  artwork(
    "John Constable - Cloud Study - Google Art Project.jpg",
    "John Constable",
    "Cloud Study",
    "1822",
    "Wolken ziehen in lockeren weißen und grauen Formen über einen blauen Himmel.",
    "Die kleine Ölstudie macht Wetter zum beobachtbaren Ereignis mit Zeit, Richtung, Licht und materieller Veränderung.",
  ),
  artwork(
    "John Constable - Salisbury Cathedral from the Meadows - Google Art Project.jpg",
    "John Constable",
    "Salisbury Cathedral from the Meadows",
    "1831",
    "Eine Kathedrale steht hinter Fluss, Wiese, Wagen und einem dramatischen Regenbogen.",
    "Spätes Pathos und meteorologische Beobachtung überlagern sich; Landschaft wird zur historischen und persönlichen Spannung.",
  ),
] as const;

export const hayWainContextArtworks = [
  artwork(
    "John Constable - Flatford Mill ('Scene on a Navigable River') - Google Art Project.jpg",
    "John Constable",
    "Flatford Mill",
    "1816–1817",
    "Pferde und Arbeiter bewegen sich entlang eines Flusses vor Mühle, Bäumen und Wiesen.",
    "Das frühere Bild zeigt dieselbe Region als Verkehrs- und Arbeitsraum und verhindert, dass Constables Landschaft als unberührte Natur gelesen wird.",
  ),
  artwork(
    "John Constable - The White Horse - Google Art Project.jpg",
    "John Constable",
    "The White Horse",
    "1819",
    "Ein Pferd wird auf einer Fähre über den Fluss transportiert, während Ufer und Bäume den Blick rahmen.",
    "Das Bild etabliert das Verfahren der großen Stour-Gemälde: lokale Erinnerung wird in monumentale Landschaftsmalerei übersetzt.",
  ),
  artwork(
    "John Constable - The Hay Wain - Sketch - Google Art Project.jpg",
    "John Constable",
    "Full-size Sketch for The Hay Wain",
    "1821",
    "Eine großformatige, locker gemalte Studie zeigt Wagen, Haus, Fluss und Himmel in breiten Pinselzügen.",
    "Die Skizze macht sichtbar, dass die scheinbare Natürlichkeit des fertigen Bildes durch Überarbeitung, Variation und malerische Entscheidung entstand.",
  ),
] as const;

export const ordinaryLandscapeArtworks = [
  artwork(
    "John Constable - Cloud Study - Google Art Project.jpg",
    "John Constable",
    "Cloud Study",
    "1822",
    "Eine konzentrierte Studie von Wolken, Licht und blauem Himmel.",
    "Beobachtung bedeutet hier nicht neutrale Kopie, sondern Auswahl eines vergänglichen Zustands und seine schnelle malerische Fixierung.",
  ),
  artwork(
    "John Constable - Flatford Mill ('Scene on a Navigable River') - Google Art Project.jpg",
    "John Constable",
    "Flatford Mill",
    "1816–1817",
    "Menschen, Tiere, Wasserwege und Gebäude strukturieren eine ländliche Produktionslandschaft.",
    "Das Alltägliche erscheint nicht als motivlose Leere, sondern als Geflecht aus Arbeit, Transport, Besitz und vertrauter Topografie.",
  ),
  artwork(
    "J. M. W. Turner - Snow Storm - Steam-Boat off a Harbour's Mouth - WGA23178.jpg",
    "J. M. W. Turner",
    "Snow Storm: Steam-Boat off a Harbour's Mouth",
    "1842",
    "Ein Dampfschiff löst sich in einem Wirbel aus Schnee, Rauch und Wasser auf.",
    "Der Vergleich mit Turner zeigt, dass Wetter bei Constable stärker lokal, beobachtbar und topografisch verankert bleibt, ohne deshalb emotionslos zu sein.",
  ),
  artwork(
    "John Constable - Salisbury Cathedral from the Meadows - Google Art Project.jpg",
    "John Constable",
    "Salisbury Cathedral from the Meadows",
    "1831",
    "Gewitter, Regenbogen, Fluss und Kathedrale bilden eine dramatische Spätlandschaft.",
    "Das Werk zeigt die Grenze des Begriffs gewöhnliche Landschaft: Beobachtung kann sich mit Erinnerung, Religion und öffentlichem Pathos verdichten.",
  ),
] as const;
