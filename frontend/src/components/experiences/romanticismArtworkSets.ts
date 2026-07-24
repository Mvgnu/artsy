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
    "Gewalt, Körper und Luxus stauen sich in einem schräg gekippten Innenraum.",
    "Das Bild zeigt, wie körperliche Überfülle politische Katastrophe auch in ein gefährlich attraktives Spektakel verwandeln kann.",
  ),
] as const;

export const rueckenfigurArtworks = [
  artwork(
    "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "Caspar David Friedrich",
    "Der Wanderer über dem Nebelmeer",
    "um 1818",
    "Ein Mann steht mit dem Rücken zum Betrachter auf einem Felsen über einem Nebelmeer.",
    "Die Figur gibt uns einen Blickpunkt, ohne die Landschaft zu erklären; ihre vermeintliche Herrschaft bleibt durch den Nebel unsicher.",
  ),
  artwork(
    "Caspar David Friedrich - Frau vor der untergehenden Sonne.jpg",
    "Caspar David Friedrich",
    "Frau vor der untergehenden Sonne",
    "um 1818",
    "Eine Frau hebt vor einem weiten Abendhimmel beide Arme leicht vom Körper ab.",
    "Die Rückenansicht verbindet individuelle Haltung und rituell wirkende Öffnung, ohne eine eindeutige Emotion festzuschreiben.",
  ),
  artwork(
    "Caspar David Friedrich - Kreidefelsen auf Rügen.jpg",
    "Caspar David Friedrich",
    "Kreidefelsen auf Rügen",
    "1818",
    "Drei Figuren stehen und knien an einer steilen Kreidekante über dem Meer.",
    "Mehrere Körperhaltungen erzeugen konkurrierende Arten des Sehens: vorsichtiges Prüfen, versunkene Betrachtung und riskante Nähe.",
  ),
] as const;

export const friedrichArtworks = [
  artwork(
    "Caspar David Friedrich - Der Mönch am Meer - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Der Mönch am Meer",
    "1808–1810",
    "Eine winzige dunkle Mönchsfigur steht vor einer fast leeren Zone aus Strand, Meer und Himmel.",
    "Friedrich reduziert Landschaft bis an die Grenze der Leere und macht Maßstab zu einer geistigen Erfahrung.",
  ),
  artwork(
    "Caspar David Friedrich - Abtei im Eichwald - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Abtei im Eichwald",
    "1809–1810",
    "Ein Trauerzug bewegt sich durch kahle Eichen zu einer gotischen Ruine.",
    "Ruine, Winter und Begräbnis verbinden individuelle Endlichkeit mit einer historischen Landschaft des Glaubens.",
  ),
  artwork(
    "Caspar David Friedrich - Das Eismeer - Hamburger Kunsthalle.jpg",
    "Caspar David Friedrich",
    "Das Eismeer",
    "1823–1824",
    "Scharfe Eisschollen verschlingen ein Schiffswrack.",
    "Die Landschaft ist kein Spiegel ruhiger Innerlichkeit, sondern eine materielle Kraft, die menschliche Planung vollständig zerlegt.",
  ),
  artwork(
    "Caspar David Friedrich - Moonrise over the Sea - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Mondaufgang am Meer",
    "1822",
    "Drei Figuren sitzen und stehen an einem felsigen Ufer vor aufsteigendem Mond und entfernten Segelschiffen.",
    "Geteilte Betrachtung, Distanz und Reise verbinden Gemeinschaft mit unerreichbarer Ferne.",
  ),
] as const;

export const turnerArtworks = [
  artwork(
    "Turner, J. M. W. - The Shipwreck - 1805.jpg",
    "J. M. W. Turner",
    "The Shipwreck",
    "1805",
    "Boote und Schiffbrüchige geraten in eine dunkle, aufgewühlte See.",
    "Frühe dramatische Erzählung und präzise Körpergruppen zeigen, dass Turners spätere Auflösung aus konkreter Ereignismalerei hervorging.",
  ),
  artwork(
    "Joseph Mallord William Turner - The Slave Ship - Google Art Project.jpg",
    "J. M. W. Turner",
    "The Slave Ship",
    "1840",
    "Ein Segelschiff fährt durch einen glühenden Sturm, während Körper und Ketten im Wasser treiben.",
    "Farbe und Wetter tragen moralische Gewalt, doch das Spektakel des Himmels droht zugleich, das konkrete Leiden zu überwältigen.",
  ),
  artwork(
    "Rain Steam and Speed the Great Western Railway.jpg",
    "J. M. W. Turner",
    "Rain, Steam and Speed",
    "1844",
    "Eine Lokomotive rast durch Regen und Dampf über eine Brücke auf den Betrachter zu.",
    "Technik erscheint nicht als sauberer Gegensatz zur Natur, sondern als neue atmosphärische und körperliche Geschwindigkeit.",
  ),
  artwork(
    "JMW Turner - Snow Storm - Steam-Boat off a Harbour's Mouth - WGA23178.jpg",
    "J. M. W. Turner",
    "Snow Storm: Steam-Boat off a Harbour's Mouth",
    "1842",
    "Ein Dampfschiff ist kaum innerhalb eines kreisenden Wirbels aus Wasser, Rauch und Schnee zu erkennen.",
    "Das Ereignis und die Malweise destabilisieren einander; Sehen wird zur unsicheren körperlichen Arbeit.",
  ),
] as const;

export const coleArtworks = [
  artwork(
    "Thomas Cole - The Falls of Kaaterskill.jpg",
    "Thomas Cole",
    "The Falls of Kaaterskill",
    "1826",
    "Ein Wasserfall stürzt durch eine felsige Waldschlucht, während eine kleine Figur am Rand steht.",
    "Die Landschaft erscheint monumental und scheinbar unberührt, obwohl Aussicht, Tourismus und nationale Bildproduktion bereits in ihr eingeschrieben sind.",
  ),
  artwork(
    "Cole Thomas The Course of Empire The Savage State 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: The Savage State",
    "1836",
    "Jäger bewegen sich durch eine stürmische Küstenlandschaft mit Bergen und Bucht.",
    "Die Serie beginnt mit einer als ursprünglich erzählten Natur und macht Landschaft zur Bühne einer vorbestimmten Zivilisationsgeschichte.",
  ),
  artwork(
    "Cole Thomas The Consummation The Course of the Empire 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: Consummation",
    "1836",
    "Eine prächtige Stadt besetzt Bucht und Ufer mit monumentaler Architektur.",
    "Überfluss und perfekte Ordnung markieren nicht das Ende der Geschichte, sondern ihren gefährlichsten Höhepunkt.",
  ),
  artwork(
    "Cole Thomas The Course of Empire Desolation 1836.jpg",
    "Thomas Cole",
    "The Course of Empire: Desolation",
    "1836",
    "Mondlicht liegt über Ruinen, Wasser und zurückkehrender Vegetation.",
    "Coles Zyklus endet mit einer Landschaft, die die politische Ordnung überlebt und ihre Monumente in Material verwandelt.",
  ),
] as const;

export const delacroixArtworks = [
  artwork(
    "Eugène Delacroix - The Barque of Dante.jpg",
    "Eugène Delacroix",
    "Die Dantebarke",
    "1822",
    "Dante und Vergil fahren durch ein dunkles Gewässer, an dessen Boot sich verdammte Körper klammern.",
    "Literarischer Stoff wird durch nasse Haut, Drehungen und Farbakzente zu körperlicher Gegenwart.",
  ),
  artwork(
    "Eugène Delacroix - The Massacre at Chios - WGA6163.jpg",
    "Eugène Delacroix",
    "Das Massaker von Chios",
    "1824",
    "Gefangene und sterbende Menschen sind über einen offenen Landschaftsraum verteilt.",
    "Das Historienbild verweigert einen rettenden Helden und lässt Leid, Distanz und exotisierenden Blick gleichzeitig bestehen.",
  ),
  artwork(
    "Eugène Delacroix - The Death of Sardanapalus - WGA6173.jpg",
    "Eugène Delacroix",
    "Der Tod des Sardanapal",
    "1827",
    "Ein Herrscher beobachtet die Zerstörung von Menschen, Tieren und Luxusgütern in einem roten Innenraum.",
    "Farbe organisiert Gewalt als Überfülle und macht moralische Abstoßung von visueller Anziehung schwer trennbar.",
  ),
  artwork(
    "Eugène Delacroix - Femmes d'Alger dans leur appartement - Louvre.jpg",
    "Eugène Delacroix",
    "Die Frauen von Algier in ihrem Gemach",
    "1834",
    "Mehrere Frauen sitzen in einem reich ausgestatteten Innenraum, während eine Dienerin sich entfernt.",
    "Die malerische Intimität ist zugleich Produkt eines kolonialen Blicks, der Zugang, Stofflichkeit und Fremdheit europäisch ordnet.",
  ),
] as const;

export const moonwatchersContextArtworks = [
  artwork(
    "Caspar David Friedrich - Moonrise over the Sea - Google Art Project.jpg",
    "Caspar David Friedrich",
    "Mondaufgang am Meer",
    "1822",
    "Drei Figuren betrachten Mond und Segelschiffe über dem Meer.",
    "Wie im Nachtbild entsteht Bedeutung aus geteilter Betrachtung, doch der offene Horizont ersetzt den engen Waldrahmen.",
  ),
  artwork(
    "Caspar David Friedrich - Frau vor der untergehenden Sonne.jpg",
    "Caspar David Friedrich",
    "Frau vor der untergehenden Sonne",
    "um 1818",
    "Eine einzelne Frau steht mit erhobenen Armen vor einer weiten Abendlandschaft.",
    "Die Rückenfigur wird hier körperlich expressiver und zeigt, wie stark Friedrich Haltung variieren konnte, ohne ein Gesicht zu benötigen.",
  ),
  artwork(
    "Caspar David Friedrich - Kreidefelsen auf Rügen.jpg",
    "Caspar David Friedrich",
    "Kreidefelsen auf Rügen",
    "1818",
    "Drei Figuren reagieren unterschiedlich auf eine steile Küstenlandschaft.",
    "Der Vergleich löst die Rückenfigur aus der Formel der einsamen Versenkung und macht soziale Rollen des Sehens sichtbar.",
  ),
] as const;

export const whalersContextArtworks = [
  artwork(
    "Turner, J. M. W. - The Shipwreck - 1805.jpg",
    "J. M. W. Turner",
    "The Shipwreck",
    "1805",
    "Menschen kämpfen in Booten und Wellen um Orientierung und Überleben.",
    "Das frühere Werk zeigt noch deutlichere Körper und Boote; Whalers verschiebt dieselbe maritime Gefahr stärker in optische Unsicherheit.",
  ),
  artwork(
    "Joseph Mallord William Turner - The Slave Ship - Google Art Project.jpg",
    "J. M. W. Turner",
    "The Slave Ship",
    "1840",
    "Körper, Ketten, Meer und Sonnenuntergang sind in glühender Farbe miteinander verschränkt.",
    "Beide Bilder verbinden maritime Ökonomie und Gewalt mit spektakulärem Wetter und stellen die Frage, ob Atmosphäre Leid sichtbar macht oder überstrahlt.",
  ),
  artwork(
    "JMW Turner - Snow Storm - Steam-Boat off a Harbour's Mouth - WGA23178.jpg",
    "J. M. W. Turner",
    "Snow Storm: Steam-Boat off a Harbour's Mouth",
    "1842",
    "Ein Dampfschiff verliert sich in einem kreisenden Sturm.",
    "Das Bild treibt die in Whalers spürbare Instabilität weiter: Das Fahrzeug wird fast vollständig von seiner eigenen Atmosphäre absorbiert.",
  ),
] as const;

export const oxbowContextArtworks = [
  artwork(
    "Thomas Cole - The Falls of Kaaterskill.jpg",
    "Thomas Cole",
    "The Falls of Kaaterskill",
    "1826",
    "Eine kleine Figur steht in einer monumentalen Schlucht unter einem Wasserfall.",
    "Der frühere Landschaftstyp setzt menschliche Präsenz als Maßstab ein, ohne die spätere politische Teilung des Oxbow so ausdrücklich zu machen.",
  ),
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

export const gericaultArtworks = [
  artwork(
    "Théodore Géricault - Officier de chasseurs à cheval de la garde impériale chargeant.jpg",
    "Théodore Géricault",
    "Offizier der Chasseurs beim Angriff",
    "1812",
    "Ein Kavallerieoffizier dreht sich auf einem steigenden Pferd inmitten von Rauch und Kampf zurück.",
    "Das frühe Bild bündelt militärische Energie, unsicheren Boden und heroische Pose, bevor Géricault Niederlage und Zusammenbruch ins Zentrum rückte.",
  ),
  artwork(
    "Théodore Géricault - Cuirassier blessé quittant le feu.jpg",
    "Théodore Géricault",
    "Verwundeter Kürassier, das Schlachtfeld verlassend",
    "1814",
    "Ein Soldat führt sein Pferd vorsichtig einen Hang hinab und blickt angespannt zurück.",
    "Der triumphale Angriff kippt in Rückzug und Unsicherheit; militärischer Körper und Tier verlieren ihre souveräne Richtung.",
  ),
  artwork(
    "Raft of the Medusa.jpg",
    "Théodore Géricault",
    "Das Floß der Medusa",
    "1818–1819",
    "Überlebende, Tote und Sterbende bilden auf einem notdürftigen Floß zwei gegeneinander arbeitende Körperpyramiden.",
    "Géricault verwandelt einen politischen Skandal in ein monumentales Bild zwischen Zeugenschaft, Hoffnung und spektakulärer Komposition.",
  ),
  artwork(
    "Théodore Géricault - Monomane du vol.jpg",
    "Théodore Géricault",
    "Monomanie des Diebstahls",
    "um 1821–1824",
    "Ein älterer Mann wird frontal und nah vor dunklem Grund porträtiert.",
    "Die späte Serie ersetzt Massenszene und Historienpathos durch konzentrierte Individualität, ohne die Person auf eine sichtbare Diagnose zu reduzieren.",
  ),
] as const;

export const raftContextArtworks = [
  artwork(
    "Théodore Géricault - Study of Truncated Limbs.jpg",
    "Théodore Géricault",
    "Studie abgetrennter Gliedmaßen",
    "1818–1819",
    "Abgetrennte Arme und Beine liegen auf einem Stoff vor dunklem Grund.",
    "Die Studie zeigt, wie Géricault anatomische Genauigkeit, Verwesungsfarbe und stille Anordnung vorbereitete, bevor diese Beobachtung in das monumentale Floß einging.",
  ),
  artwork(
    "Théodore Géricault - Study of a Model for the Raft of the Medusa.jpg",
    "Théodore Géricault",
    "Studie eines Modells für das Floß der Medusa",
    "1818–1819",
    "Ein männlicher Körper liegt verdreht und schwer auf einem provisorischen Untergrund.",
    "Die einzelne Pose macht sichtbar, dass die große Gruppenkomposition aus intensiv studierten Gewichten, Gelenken und erschöpften Körperlagen gebaut wurde.",
  ),
  artwork(
    "Théodore Géricault - Portrait of Joseph.jpg",
    "Théodore Géricault",
    "Porträt von Joseph",
    "um 1818–1819",
    "Ein Schwarzer Mann ist als selbstständiges Brustbild mit direkter Präsenz dargestellt.",
    "Joseph diente als Modell für die winkende Figur an der Spitze des Floßes; das Porträt erlaubt, seine Individualität jenseits der Funktion im Historienbild wahrzunehmen.",
  ),
] as const;

export const catastropheTestimonyArtworks = [
  artwork(
    "Raft of the Medusa.jpg",
    "Théodore Géricault",
    "Das Floß der Medusa",
    "1818–1819",
    "Eine Gruppe Schiffbrüchiger kämpft zwischen Toten, Verzweiflung und einem kaum sichtbaren Rettungsschiff.",
    "Das Bild verbindet konkreten Skandal, körperliche Zeugenschaft und monumentale Historienmalerei, ohne die Katastrophe in eindeutige Erlösung aufzulösen.",
  ),
  artwork(
    "Francisco de Goya - Fusillade du 3 mai 1808.jpg",
    "Francisco de Goya",
    "Der 3. Mai 1808",
    "1814",
    "Zivilisten werden nachts von einer anonymen Soldatenreihe erschossen.",
    "Goya organisiert Zeugenschaft als asymmetrische Begegnung zwischen individualisierten Opfern und mechanisierter Staatsgewalt.",
  ),
  artwork(
    "Eugène Delacroix - The Massacre at Chios - WGA6163.jpg",
    "Eugène Delacroix",
    "Das Massaker von Chios",
    "1824",
    "Gefangene, Verwundete und Sterbende warten in einer offenen, scheinbar gleichgültigen Landschaft.",
    "Die fehlende Rettungsfigur zwingt den Betrachter, Leid ohne heroischen Abschluss auszuhalten und zugleich den europäischen Blick auf fremdes Leiden zu prüfen.",
  ),
  artwork(
    "Théodore Géricault - Monomane du commandement militaire.jpg",
    "Théodore Géricault",
    "Monomanie des militärischen Kommandos",
    "um 1821–1824",
    "Ein Mann wird frontal, still und mit konzentriertem Gesicht vor dunklem Grund gezeigt.",
    "Die Katastrophe schrumpft hier auf individuelle Nachwirkung: Geschichte wird nicht als Ereignis, sondern als verletzliche und schwer lesbare Person sichtbar.",
  ),
] as const;
