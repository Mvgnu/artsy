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

export const sublimeArtworks = [
  artwork(
    "Caspar David Friedrich - Das Eismeer - Hamburger Kunsthalle.jpg",
    "Caspar David Friedrich",
    "Das Eismeer",
    "1823–1824",
    "Zackige Eisschollen türmen sich über dem kaum sichtbaren Wrack eines Schiffs.",
    "Das Schiff verschwindet fast unter einer Natur, deren Maßstab jede menschliche Hoffnung zerdrückt.",
  ),
  artwork(
    "Joseph Mallord William Turner, Snow Storm.jpg",
    "J. M. W. Turner",
    "Snow Storm: Hannibal and his Army Crossing the Alps",
    "1812",
    "Ein dunkler Schneesturm wölbt sich über winzigen Soldaten und Hannibals Heer.",
    "Die kreisende Wettermasse macht Geschichte klein und bedroht zugleich die Lesbarkeit des Bildes.",
  ),
  artwork(
    "Raft of the Medusa.jpg",
    "Théodore Géricault",
    "Das Floß der Medusa",
    "1818–1819",
    "Schiffbrüchige Körper bilden auf einem Floß eine ansteigende Gruppe zum fernen Rettungsschiff.",
    "Katastrophe wird erhaben, weil Hoffnung und körperlicher Zusammenbruch im selben Aufbau gegeneinander arbeiten.",
  ),
  artwork(
    "Cole Thomas The Course of Empire Destruction 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: Destruction",
    "1836",
    "Eine monumentale Stadt wird von Krieg, Feuer und einstürzender Architektur überwältigt.",
    "Cole überträgt erhabene Naturgewalt auf die Geschichte selbst: Zivilisation wird zur unkontrollierbaren Katastrophe.",
  ),
] as const;

export const landscapeNationArtworks = [
  artwork(
    "Cole Thomas The Course of Empire The Savage State 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: The Savage State",
    "1836",
    "Wilde Landschaft mit Jägern, Bergen, Wolken und noch kaum sichtbarer Besiedlung.",
    "Die vermeintliche Ursprünglichkeit ist bereits eine kulturelle Erzählung darüber, wann Land als Geschichte beginnt.",
  ),
  artwork(
    "Cole Thomas The Course of Empire The Arcadian or Pastoral State 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: The Arcadian or Pastoral State",
    "1836",
    "Eine grüne Küstenlandschaft wird von Feldern, Tempeln und friedlicher Arbeit geordnet.",
    "Die pastorale Mitte lässt Nutzung harmonisch erscheinen und macht Besitz zur scheinbar natürlichen Entwicklung.",
  ),
  artwork(
    "Cole Thomas The Consummation The Course of the Empire 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: Consummation",
    "1836",
    "Eine strahlende imperiale Stadt füllt Bucht und Ufer mit Architektur, Schiffen und Festzügen.",
    "Der maximale Überblick produziert ein nationales Idealbild, dessen Macht gerade durch seine visuelle Ordnung überzeugend wirkt.",
  ),
  artwork(
    "Cole Thomas The Course of Empire Desolation 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: Desolation",
    "1836",
    "Ruinen stehen in stiller Abendlandschaft, während Pflanzen und Wasser den Ort zurückerobern.",
    "Die nationale Erzählung endet nicht im Fortschritt, sondern in einer Landschaft, die menschliche Herrschaft überdauert.",
  ),
] as const;

export const revolutionBodyArtworks = [
  artwork(
    "Eugène Delacroix - The Massacre at Chios - WGA6163.jpg",
    "Eugène Delacroix",
    "Das Massaker von Chios",
    "1824",
    "Erschöpfte, verwundete und gefangene Menschen sitzen und liegen dicht im Vordergrund.",
    "Politische Gewalt erscheint nicht als heroischer Zusammenstoß, sondern als Verteilung von Verletzlichkeit über einzelne Körper.",
  ),
  artwork(
    "Raft of the Medusa.jpg",
    "Théodore Géricault",
    "Das Floß der Medusa",
    "1818–1819",
    "Überlebende und Tote sind auf einem notdürftigen Floß zu einer dramatischen Pyramide geordnet.",
    "Die Menge wird zugleich handelndes Kollektiv, Zeugnis staatlichen Versagens und spektakulär inszenierter Körperverband.",
  ),
  artwork(
    "Francisco de Goya - Fusillade du 3 mai 1808.jpg",
    "Francisco de Goya",
    "Der 3. Mai 1808",
    "1814",
    "Ein weiß gekleideter Mann breitet vor einer anonymen Schützenreihe die Arme aus.",
    "Goya trennt die individualisierten Opfer von der mechanischen Gewalt der Täter und zwingt den Blick in diese Asymmetrie.",
  ),
  artwork(
    "Eugène Delacroix - The Death of Sardanapalus - WGA6173.jpg",
    "Eugène Delacroix",
    "Der Tod des Sardanapal",
    "1827",
    "Ein rotes Bett überblickt ein chaotisches Feld aus kämpfenden, sterbenden und geopferten Körpern.",
    "Die Komposition zeigt, wie Farbe und Bewegung Gewalt zugleich sichtbar machen und ästhetisch verführen können.",
  ),
] as const;

export const ruckenfigurArtworks = [
  artwork(
    "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "Caspar David Friedrich",
    "Wanderer über dem Nebelmeer",
    "um 1818",
    "Ein Mann im dunklen Mantel steht mit dem Rücken zum Betrachter über einem Meer aus Nebel.",
    "Die zentrale Figur leiht uns einen Standort, blockiert aber zugleich die vollständige Aneignung der Aussicht.",
  ),
  artwork(
    "Caspar David Friedrich - Woman before the Rising Sun (Woman before the Setting Sun) - WGA08253.jpg",
    "Caspar David Friedrich",
    "Frau vor der aufgehenden Sonne",
    "um 1818–1820",
    "Eine Frau steht mit ausgebreiteten Armen vor einer tief stehenden Sonne und einer weiten Landschaft.",
    "Die Rückenfigur wird zur körperlichen Geste zwischen Andacht, Öffnung und schwer eindeutig lesbarer Emotion.",
  ),
  artwork(
    "Caspar David Friedrich - Mondaufgang am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Mondaufgang am Meer",
    "1822",
    "Drei Figuren sitzen und stehen am Ufer und blicken auf Mond und zurückkehrende Segelschiffe.",
    "Mehrere Rückenfiguren verwandeln Betrachtung in eine geteilte soziale Handlung statt in reine Einsamkeit.",
  ),
] as const;

export const friedrichProfileArtworks = [
  artwork(
    "Caspar David Friedrich - Der Mönch am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Der Mönch am Meer",
    "1808–1810",
    "Eine winzige dunkle Figur steht vor nahezu leerem Strand, Meer und Himmel.",
    "Friedrich reduziert Landschaft radikal und macht Leere, Horizont und menschlichen Maßstab zum eigentlichen Ereignis.",
  ),
  artwork(
    "Caspar David Friedrich - Abtei im Eichwald - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Abtei im Eichwald",
    "1809–1810",
    "Eine Prozession bewegt sich zwischen kahlen Eichen und einer gotischen Kirchenruine.",
    "Architektur, Winter und Begräbniszug verbinden Naturbeobachtung mit Zeit, Glauben und Vergänglichkeit.",
  ),
  artwork(
    "Caspar David Friedrich - Das Eismeer - Hamburger Kunsthalle.jpg",
    "Caspar David Friedrich",
    "Das Eismeer",
    "1823–1824",
    "Aufgebrochene Eisplatten bilden eine scharfkantige Struktur über einem Schiffswrack.",
    "Das späte Werk zeigt Friedrichs Landschaft nicht als Stimmungshintergrund, sondern als materielle Kraft ohne menschliche Mitte.",
  ),
  artwork(
    "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "Caspar David Friedrich",
    "Wanderer über dem Nebelmeer",
    "um 1818",
    "Ein Wanderer steht auf einem Felsen über nebelverhüllten Bergen.",
    "Das berühmte Motiv bündelt Aussicht, Rückenfigur und Unbestimmtheit, ohne den Betrachter zu einem eindeutigen Gefühl zu zwingen.",
  ),
] as const;

export const turnerProfileArtworks = [
  artwork(
    "Turner-rain-steam-and-speed.jpg",
    "J. M. W. Turner",
    "Rain, Steam and Speed",
    "1844",
    "Eine Lokomotive fährt durch Regen und Dampf über eine Brücke auf den Betrachter zu.",
    "Technik erscheint nicht als festes Objekt, sondern als Geschwindigkeit, Wetter und instabile Wahrnehmung.",
  ),
  artwork(
    "Slave-ship.jpg",
    "J. M. W. Turner",
    "The Slave Ship",
    "1840",
    "Ein glühender Sturm umgibt ein Schiff, während Körper und Ketten im aufgewühlten Meer treiben.",
    "Farbe und Naturgewalt machen historische Gewalt sichtbar, ohne die problematische Verwandlung des Leidens in Spektakel aufzulösen.",
  ),
  artwork(
    "Joseph Mallord William Turner, Snow Storm.jpg",
    "J. M. W. Turner",
    "Snow Storm: Hannibal and his Army Crossing the Alps",
    "1812",
    "Ein gewaltiger dunkler Bogen aus Wetter dominiert ein kaum lesbares Heer.",
    "Schon früh verschiebt Turner Historienmalerei vom Helden zur Atmosphäre, die menschliche Handlung fast verschluckt.",
  ),
  artwork(
    "Fighting Téméraire.jpg",
    "J. M. W. Turner",
    "The Fighting Temeraire",
    "1839",
    "Ein heller alter Segler wird von einem dunklen Dampfschlepper in den Sonnenuntergang gezogen.",
    "Turner verbindet Erinnerung und Industrialisierung in einer präzisen, aber emotional aufgeladenen Übergangsszene.",
  ),
] as const;

export const coleProfileArtworks = [
  artwork(
    "Cole Thomas The Course of Empire The Savage State 1836.jpg",
    "Thomas Cole",
    "The Savage State",
    "1836",
    "Ungezähmte Landschaft und kleine Jäger eröffnen Coles Zyklus über Aufstieg und Fall eines Reiches.",
    "Der Anfang des Zyklus zeigt bereits, dass Natur bei Cole immer als historische Bühne gelesen wird.",
  ),
  artwork(
    "Cole Thomas The Consummation The Course of the Empire 1836.jpg",
    "Thomas Cole",
    "The Consummation of Empire",
    "1836",
    "Eine glänzende Stadt füllt die Landschaft mit Architektur, Schiffen und zeremonieller Ordnung.",
    "Cole macht Zivilisation visuell überwältigend und bereitet gerade dadurch ihre spätere Fragilität vor.",
  ),
  artwork(
    "Cole Thomas The Course of Empire Destruction 1836.jpg",
    "Thomas Cole",
    "Destruction",
    "1836",
    "Die zuvor geordnete Stadt zerfällt in Krieg, Feuer, Flucht und einstürzende Monumente.",
    "Geschichte wird zur moralischen Landschaft, in der Macht ihre eigene Katastrophe hervorbringt.",
  ),
  artwork(
    "Thomas Cole, The Voyage of Life - Youth, 1842, NGA 52451.jpg",
    "Thomas Cole",
    "The Voyage of Life: Youth",
    "1842",
    "Ein junger Reisender steuert auf einem Boot aus einer üppigen Landschaft auf ein Luftschloss zu.",
    "Der Lebenszyklus zeigt Coles zweite große Methode: Landschaft als psychologische und moralische Erzählung.",
  ),
] as const;

export const delacroixProfileArtworks = [
  artwork(
    "The Barque of Dante.jpg",
    "Eugène Delacroix",
    "Die Dantebarke",
    "1822",
    "Dante und Vergil fahren durch ein aufgewühltes Wasser voller ringender Körper.",
    "Das frühe Salonbild zeigt bereits Delacroix' Interesse an Literatur, körperlicher Verdichtung und bewegter Farbe.",
  ),
  artwork(
    "Eugène Delacroix - The Massacre at Chios - WGA6163.jpg",
    "Eugène Delacroix",
    "Das Massaker von Chios",
    "1824",
    "Gefangene und Sterbende füllen den Vordergrund einer weit geöffneten, aber trostlosen Landschaft.",
    "Die Historienmalerei verliert ihr heroisches Zentrum und wird zur widersprüchlichen Nähe zu politischem Leid.",
  ),
  artwork(
    "Eugène Delacroix - The Death of Sardanapalus - WGA6173.jpg",
    "Eugène Delacroix",
    "Der Tod des Sardanapal",
    "1827",
    "Rot, Gold und nackte Körper bilden eine diagonal organisierte Szene von Luxus und Vernichtung.",
    "Farbe strukturiert Handlung und Begehren zugleich – gerade deshalb bleibt die Darstellung ethisch instabil.",
  ),
  artwork(
    "Eugène Delacroix - The Women of Algiers - WGA6188.jpg",
    "Eugène Delacroix",
    "Die Frauen von Algier",
    "1834",
    "Mehrere Frauen sitzen in einem reich ausgestatteten Innenraum, beobachtet aus kurzer Distanz.",
    "Das Werk erweitert Delacroix' Farbwelt, muss aber zugleich als Produkt kolonialer Zugänglichkeit und europäischer Blickmacht gelesen werden.",
  ),
] as const;

export const moonwatchersContextArtworks = [
  artwork(
    "Caspar David Friedrich - Mondaufgang am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Mondaufgang am Meer",
    "1822",
    "Drei Menschen betrachten am Ufer den Mond und entfernte Schiffe.",
    "Das verwandte Werk zeigt, wie Friedrich gemeinsames Sehen mit Entfernung, Erwartung und maritimer Bewegung verbindet.",
  ),
  artwork(
    "Caspar David Friedrich - Woman before the Rising Sun (Woman before the Setting Sun) - WGA08253.jpg",
    "Caspar David Friedrich",
    "Frau vor der aufgehenden Sonne",
    "um 1818–1820",
    "Eine einzelne Frau öffnet ihre Arme vor dem Licht einer tief stehenden Sonne.",
    "Die deutlichere Geste macht sichtbar, wie offen und zurückgenommen die Körpersprache der beiden Mondbetrachter bleibt.",
  ),
  artwork(
    "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "Caspar David Friedrich",
    "Wanderer über dem Nebelmeer",
    "um 1818",
    "Ein einzelner Wanderer steht erhöht über einer unübersichtlichen Nebellandschaft.",
    "Der Vergleich trennt populäre heroische Einsamkeit von der geteilten, seitlich organisierten Betrachtung der zwei Männer.",
  ),
] as const;

export const whalersContextArtworks = [
  artwork(
    "Slave-ship.jpg",
    "J. M. W. Turner",
    "The Slave Ship",
    "1840",
    "Ein Handelsschiff verschwindet im Sturm, während versklavte Menschen im Meer treiben.",
    "Wie in Whalers verbindet Turner maritime Ökonomie mit einer Atmosphäre, die das Geschehen zugleich enthüllt und entgrenzt.",
  ),
  artwork(
    "Joseph Mallord William Turner - The Shipwreck - WGA23165.jpg",
    "J. M. W. Turner",
    "The Shipwreck",
    "1805",
    "Boote und Menschen kämpfen in schweren Wellen um Orientierung und Überleben.",
    "Das frühere Bild zeigt Turners Ausgangspunkt in einer noch deutlicher lesbaren maritimen Katastrophe.",
  ),
  artwork(
    "Fighting Téméraire.jpg",
    "J. M. W. Turner",
    "The Fighting Temeraire",
    "1839",
    "Ein ausgedientes Kriegsschiff wird von einem Dampfschlepper zum Abwracken gezogen.",
    "Arbeit, Schiffstyp und historische Ökonomie bleiben hier klarer sichtbar als in der aufgelösten Jagdszene von Whalers.",
  ),
] as const;

export const oxbowContextArtworks = [
  artwork(
    "Cole Thomas The Course of Empire The Savage State 1836.jpg",
    "Thomas Cole",
    "The Savage State",
    "1836",
    "Eine dramatische Landschaft ist nur von wenigen jagenden Figuren besetzt.",
    "Das Werk macht deutlich, dass Coles vermeintliche Wildnis bereits Teil einer historischen Entwicklungslogik ist.",
  ),
  artwork(
    "Cole Thomas The Course of Empire The Arcadian or Pastoral State 1836.jpg",
    "Thomas Cole",
    "The Arcadian or Pastoral State",
    "1836",
    "Felder, Tiere, Tempel und Menschen bilden eine idealisierte kultivierte Landschaft.",
    "Die rechte Hälfte des Oxbow steht in derselben Tradition, doch ihre Ordnung bleibt durch Wetter und Aussichtspunkt stärker befragt.",
  ),
  artwork(
    "Cole Thomas The Course of Empire Destruction 1836.jpg",
    "Thomas Cole",
    "Destruction",
    "1836",
    "Eine imperiale Stadt wird von Krieg und Feuer zerstört.",
    "Coles Zyklus verhindert, dass die kultivierte Seite des Oxbow einfach als dauerhaftes Ziel der Geschichte gelesen wird.",
  ),
] as const;

export const libertyContextArtworks = [
  artwork(
    "Eugène Delacroix - The Massacre at Chios - WGA6163.jpg",
    "Eugène Delacroix",
    "Das Massaker von Chios",
    "1824",
    "Politische Gewalt erscheint als Gruppe erschöpfter und gefangener Einzelkörper.",
    "Im Vergleich wird sichtbar, wie stark Freiheit führt das Volk Leid später in eine vorwärtsdrängende kollektive Form verwandelt.",
  ),
  artwork(
    "Raft of the Medusa.jpg",
    "Théodore Géricault",
    "Das Floß der Medusa",
    "1818–1819",
    "Eine Körperpyramide steigt von Toten zu winkenden Überlebenden an.",
    "Géricaults Aufbau ist ein wichtiger formaler Vorläufer, doch seine Hoffnung bleibt fern und prekär statt allegorisch verkörpert.",
  ),
  artwork(
    "Francisco de Goya - Fusillade du 3 mai 1808.jpg",
    "Francisco de Goya",
    "Der 3. Mai 1808",
    "1814",
    "Ein unbewaffneter Mann steht vor einer anonymen Schützenreihe und bereits erschossenen Körpern.",
    "Goyas asymmetrische Gewalt bietet keinen führenden Volkskörper und macht den Unterschied zwischen Opferbild und Revolutionsikone sichtbar.",
  ),
] as const;
