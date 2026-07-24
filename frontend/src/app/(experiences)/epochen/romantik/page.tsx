import type { Metadata } from "next";
import Image from "next/image";

import {
  oxbow,
  romanticisms,
  sources,
  waysOfSeeing,
  whalers,
  type RomanticismArtwork,
} from "./content";
import styles from "./romantik.module.css";

export const metadata: Metadata = {
  title: "Romantik: Als die Landschaft zurückblickte",
  description:
    "Eine visuelle Reise durch Maßstab, Atmosphäre und das Erhabene in der Kunst der Romantik.",
  alternates: {
    canonical: "/epochen/romantik/",
  },
};

interface ArtworkFeatureProps {
  artwork: RomanticismArtwork;
  heading: string;
  kicker: string;
  children: React.ReactNode;
  preload?: boolean;
}

function ArtworkFeature({
  artwork,
  heading,
  kicker,
  children,
  preload = false,
}: ArtworkFeatureProps) {
  return (
    <>
      <div className={styles.imageFrame}>
        <Image
          alt={artwork.imageAlt}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 58vw, 100vw"
          src={artwork.imageUrl}
        />
      </div>

      <div className={styles.artworkCopy}>
        <p className={styles.sectionKicker}>{kicker}</p>
        <h2 className={styles.artworkTitle}>{heading}</h2>
        <div className={styles.artworkText}>{children}</div>
        <p className={styles.credit}>
          <em>{artwork.title}</em> ({artwork.originalTitle}), {artwork.artist},{" "}
          {artwork.date}. {artwork.medium}, {artwork.dimensions}. {artwork.institution}.{" "}
          {artwork.creditLine}.{" "}
          <a href={artwork.sourceUrl}>{artwork.rightsLabel} · Werkdatensatz</a>
        </p>
      </div>
    </>
  );
}

export default function RomanticismPage() {
  return (
    <article className={styles.experience}>
      <header className={styles.hero}>
        <div aria-hidden="true" className={styles.mountainFar} />
        <div aria-hidden="true" className={styles.mountain} />

        <div className={styles.heroContent}>
          <p className={styles.kicker}>Eine visuelle Epochenreise · ca. 1790–1850</p>
          <h1 className={styles.title}>
            Romantik
            <span>als die Landschaft zurückblickte</span>
          </h1>
          <p className={styles.intro}>
            Die Romantik machte Natur nicht bloß zum Motiv. Sie machte sie zum Gegenüber:
            größer als der Mensch, unberechenbar, tröstlich, bedrohlich und voller Räume,
            in denen sich das Innere plötzlich außen wiederfand.
          </p>
        </div>
      </header>

      <div className={styles.lightSection}>
        <section aria-labelledby="bruch" className={styles.section}>
          <div className={styles.ruptureGrid}>
            <div>
              <p className={styles.sectionKicker}>Der Bruch</p>
              <h2 className={styles.sectionTitle} id="bruch">
                Ordnung reichte nicht mehr aus.
              </h2>
            </div>
            <div>
              <p className={styles.sectionLead}>
                Die Aufklärung hatte die Welt vermessen, geordnet und erklärbar gemacht. Die
                Romantik fragte, was in diesem Bild fehlte: Gefühl, Erinnerung, Schrecken,
                Glauben, Traum und die Erfahrung, dass nicht alles Beherrschbare auch
                bedeutsam ist.
              </p>
              <p className={styles.bodyCopy}>
                Das war keine einheitliche Stilrevolution. In Deutschland konnte eine stille
                Landschaft zum spirituellen Denkraum werden. In Großbritannien zerfiel die
                Welt in Wetter und Licht. In Frankreich traten Katastrophe, Revolution und
                extreme Emotion in die Historienmalerei. Gemeinsam war diesen Bildern weniger
                ein Look als eine Spannung: Das vernünftige Subjekt entdeckt, dass es nicht im
                Mittelpunkt von allem steht.
              </p>
            </div>
          </div>

          <div aria-label="Drei romantische Sehweisen" className={styles.seeingGrid}>
            {waysOfSeeing.map((way) => (
              <section className={styles.seeingCard} key={way.number}>
                <p className={styles.cardNumber}>{way.number}</p>
                <h3 className={styles.cardTitle}>{way.title}</h3>
                <p className={styles.cardText}>{way.text}</p>
              </section>
            ))}
          </div>
        </section>
      </div>

      <section aria-labelledby="geteilte-welt" className={styles.artworkSection}>
        <div className={styles.artworkLayout}>
          <ArtworkFeature
            artwork={oxbow}
            heading="Ein Bild, zwei Welten"
            kicker="Thomas Cole · 1836"
            preload
          >
            <p>
              Links hängt das Gewitter noch über gebrochenen Bäumen und dichtem Wald. Rechts
              öffnet sich eine helle, bewirtschaftete Ebene. Der Connecticut River schneidet
              als große Schleife durch beide Zustände. Cole malt keine neutrale Aussicht,
              sondern eine Entscheidung, deren Ausgang offenbleibt.
            </p>
            <p>
              Selbst der Maler ist im Vordergrund versteckt: winzig zwischen Fels, Staffelei
              und Regenschirm. Seine erhöhte Position verspricht Überblick, doch das Bild
              entzieht ihm die Eindeutigkeit. Ist die helle Ordnung Fortschritt oder Verlust?
              Ist die Wildnis Ursprung, Gefahr oder eine bereits verschwindende Vorstellung?
            </p>
          </ArtworkFeature>
        </div>
      </section>

      <section
        aria-labelledby="aufloesung"
        className={`${styles.artworkSection} ${styles.turnerSection}`}
      >
        <div className={styles.artworkLayout}>
          <ArtworkFeature
            artwork={whalers}
            heading="Wenn das Bild selbst den Halt verliert"
            kicker="J. M. W. Turner · um 1845"
          >
            <p>
              Bei Turner ist die Natur nicht sauber in zwei Hälften geteilt. Sie dringt in die
              Malerei ein. Schiff, Boote, Wal, Gischt und Rauch sind noch erkennbar, aber ihre
              Grenzen lösen sich auf. Das Auge muss arbeiten und bleibt trotzdem unsicher.
            </p>
            <p>
              Genau darin liegt die Erfahrung des Erhabenen: Anziehung und Überforderung
              gleichzeitig. Die See ist nicht Hintergrund für menschliches Handeln. Sie ist
              eine Kraft, die Maßstab, Orientierung und sogar die Lesbarkeit des Bildes
              bestimmt.
            </p>
          </ArtworkFeature>
        </div>
      </section>

      <section aria-labelledby="viele-romantiken" className={styles.mapSection}>
        <div className={styles.section}>
          <div className={styles.mapIntro}>
            <div>
              <p className={styles.sectionKicker}>Keine einheitliche Ästhetik</p>
              <h2 className={styles.sectionTitle} id="viele-romantiken">
                Es gab nicht die eine Romantik.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Nebelberge und einsame Rückenfiguren prägen heute das populäre Bild der Epoche.
              Doch Romantik entstand in mehreren Ländern, Medien und politischen Situationen.
              Ihre Formen widersprechen einander, gerade weil sie dieselbe Frage verschieden
              beantworten: Was geschieht, wenn Gefühl und Vorstellungskraft mehr sein sollen
              als Störungen der Vernunft?
            </p>
          </div>

          <div className={styles.romanticismGrid}>
            {romanticisms.map((romanticism) => (
              <section className={styles.placeCard} key={romanticism.place}>
                <p className={styles.place}>{romanticism.place}</p>
                <h3 className={styles.placeTitle}>{romanticism.title}</h3>
                <p className={styles.placeText}>{romanticism.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="schluss" className={styles.closing}>
        <div className={styles.section}>
          <p className={styles.sectionKicker}>Was bleibt</p>
          <h2 className={styles.closingQuote} id="schluss">
            Die romantische Landschaft zeigt nicht, wo wir sind. Sie fragt, wer wir dort
            werden.
          </h2>
          <p className={styles.closingText}>
            Deshalb wirken diese Bilder weiterhin erstaunlich gegenwärtig. Sie geben der Natur
            eine Eigenmacht, lassen Wahrnehmung unsicher werden und verbinden äußere Räume mit
            inneren Zuständen. Die Romantik ist weniger eine Flucht aus der Welt als ein
            Versuch, ihre nicht berechenbaren Teile wieder sichtbar zu machen.
          </p>

          <aside aria-labelledby="quellen" className={styles.sources}>
            <p className={styles.sectionKicker} id="quellen">
              Quellen und Weitersehen
            </p>
            <ul className={styles.sourceList}>
              {sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url}>{source.label}</a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </article>
  );
}
