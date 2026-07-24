import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  moonwatchers,
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
  children: ReactNode;
  heading: string;
  headingId: string;
  kicker: string;
}

function ArtworkFeature({
  artwork,
  children,
  heading,
  headingId,
  kicker,
}: ArtworkFeatureProps) {
  return (
    <>
      <div className={styles.imageFrame}>
        <Image
          alt={artwork.imageAlt}
          fill
          sizes="(min-width: 1024px) 72vw, 100vw"
          src={artwork.imageUrl}
        />
      </div>

      <div className={styles.artworkCopy}>
        <p className={styles.sectionKicker}>{kicker}</p>
        <h2 className={styles.artworkTitle} id={headingId}>
          {heading}
        </h2>
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

const visualConnections = [
  {
    work: "Friedrich",
    thesis: "Landschaft wird zur Haltung des Sehens.",
    text: "Die Rückenfiguren zeigen keine fertige Emotion. Sie stellen uns an dieselbe Schwelle und machen gemeinsame Betrachtung zum eigentlichen Ereignis.",
  },
  {
    work: "Cole",
    thesis: "Landschaft wird zur politischen Entscheidung.",
    text: "Wildnis und kultivierte Ebene stehen nicht einfach für Chaos und Ordnung. Das Bild fragt, wer Land benennt, formt und als Fortschritt erzählt.",
  },
  {
    work: "Turner",
    thesis: "Landschaft wird zur Grenze der Wahrnehmung.",
    text: "Gischt, Rauch und Licht lösen feste Konturen auf. Das Erhabene liegt nicht nur im großen Motiv, sondern im Moment, in dem das Bild kaum noch Halt bietet.",
  },
] as const;

const deepDives = [
  {
    eyebrow: "Werk lesen",
    title: "Zwei Männer in Betrachtung des Mondes",
    text: "Komposition, Baum, Mond, drei Fassungen und die bewusst offene Deutung von Friedrichs kleinem Nachtbild.",
    href: "/werke/zwei-maenner-in-betrachtung-des-mondes/",
  },
  {
    eyebrow: "Künstlerprofil",
    title: "Caspar David Friedrich",
    text: "Vom Zeichnen im Freien zur neu zusammengesetzten Seelenlandschaft – und warum sein Werk nicht nur von Einsamkeit handelt.",
    href: "/kuenstler/caspar-david-friedrich/",
  },
  {
    eyebrow: "Motiv verstehen",
    title: "Die Rückenfigur",
    text: "Warum eine abgewandte Figur den Betrachter nicht ausschließt, sondern ihm erst einen Platz im Bild gibt.",
    href: "/motive/rueckenfigur/",
  },
  {
    eyebrow: "Werk lesen",
    title: "Whalers",
    text: "Wal, Boote, Mutterschiff und ein instabiler Horizont: wie Turner Walfang, Arbeit und Wahrnehmungsverlust in dieselbe Atmosphäre zwingt.",
    href: "/werke/whalers-turner/",
  },
  {
    eyebrow: "Künstlerprofil",
    title: "J. M. W. Turner",
    text: "Vom topografischen Zeichner zu einer Malerei, in der Licht, Wetter, Technik und Geschichte den festen Bildraum auflösen.",
    href: "/kuenstler/j-m-w-turner/",
  },
  {
    eyebrow: "Begriff verstehen",
    title: "Das Erhabene",
    text: "Warum Größe allein nicht genügt und wie Maßstab, Unbestimmtheit, Distanz und Gefahr romantische Überforderung organisieren.",
    href: "/begriffe/das-erhabene/",
  },
] as const;

export default function RomanticismPage() {
  return (
    <article className={styles.experience}>
      <header className={styles.hero}>
        <div className={styles.heroArtwork}>
          <Image
            alt={moonwatchers.imageAlt}
            fill
            preload
            sizes="(min-width: 1024px) 62vw, 100vw"
            src={moonwatchers.imageUrl}
          />
          <p className={styles.heroCredit}>
            Caspar David Friedrich, <em>{moonwatchers.title}</em>, {moonwatchers.date}.{" "}
            <a href={moonwatchers.sourceUrl}>The Met · Public Domain</a>
          </p>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.kicker}>Eine visuelle Epochenreise · ca. 1790–1850</p>
          <h1 className={styles.title}>
            Romantik
            <span>als die Landschaft zurückblickte</span>
          </h1>
          <p className={styles.intro}>
            Die Romantik machte Natur nicht bloß zum Motiv. Sie machte sie zum
            Gegenüber: größer als der Mensch, unberechenbar, tröstlich, bedrohlich und
            voller Räume, in denen sich das Innere plötzlich außen wiederfand.
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
                Die Aufklärung hatte die Welt vermessen, geordnet und erklärbar gemacht.
                Die Romantik fragte, was in diesem Bild fehlte: Gefühl, Erinnerung,
                Schrecken, Glauben, Traum und die Erfahrung, dass nicht alles
                Beherrschbare auch bedeutsam ist.
              </p>
              <p className={styles.bodyCopy}>
                Das war keine einheitliche Stilrevolution. In Deutschland konnte eine
                stille Landschaft zum spirituellen Denkraum werden. In Großbritannien
                zerfiel die Welt in Wetter und Licht. In Frankreich traten Katastrophe,
                Revolution und extreme Emotion in die Historienmalerei. Gemeinsam war
                diesen Bildern weniger ein Look als eine Spannung: Das vernünftige
                Subjekt entdeckt, dass es nicht im Mittelpunkt von allem steht.
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

        <section aria-labelledby="bild-oeffnet-tuer" className={styles.lookSection}>
          <div className={styles.lookIntro}>
            <div>
              <p className={styles.sectionKicker}>Noch einmal hinsehen</p>
              <h2 className={styles.sectionTitle} id="bild-oeffnet-tuer">
                Das erste Bild enthält bereits die ganze Frage.
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Friedrichs zwei Mondbetrachter stehen nicht vor einer spektakulären
              Aussicht. Der Blick ist versperrt, der Wald eng, der Mond klein. Gerade
              dadurch wird sichtbar, dass romantische Landschaft nicht vom Panorama
              allein lebt, sondern davon, wie ein Mensch sich zu etwas Unverfügbarem
              verhält.
            </p>
          </div>

          <div className={styles.observationGrid}>
            <article>
              <p>01 · Position</p>
              <h3>Wir sehen mit, aber nicht in die Figuren hinein.</h3>
              <span>
                Die Rückenansicht verweigert Psychologie aus dem Gesicht. Sie gibt dem
                Betrachter stattdessen eine räumliche und gedankliche Position hinter
                den beiden Männern.
              </span>
            </article>
            <article>
              <p>02 · Rahmen</p>
              <h3>Die Landschaft öffnet und verschließt sich zugleich.</h3>
              <span>
                Felsen, Wurzeln und die schräge tote Eiche bilden eine dunkle Bühne. Die
                Mondsichel ist sichtbar, aber nicht erreichbar; der Weg endet nicht in
                einer klaren Lösung.
              </span>
            </article>
            <article>
              <p>03 · Gemeinschaft</p>
              <h3>Romantische Versenkung muss nicht einsam sein.</h3>
              <span>
                Die Männer schauen gemeinsam. Friedrich verbindet das Unendliche nicht
                nur mit Isolation, sondern auch mit Freundschaft, Austausch und
                geteiltem Staunen.
              </span>
            </article>
            <article>
              <p>04 · Offenheit</p>
              <h3>Ein Symbol ist noch keine eindeutige Botschaft.</h3>
              <span>
                Christliche, mystische, politische und biografische Lesarten überlagern
                sich. Das Bild bleibt stark, weil keine davon alle Elemente endgültig
                stilllegt.
              </span>
            </article>
          </div>

          <div className={styles.inlineLinks}>
            <Link href="/werke/zwei-maenner-in-betrachtung-des-mondes/">
              Das Werk Schritt für Schritt lesen →
            </Link>
            <Link href="/motive/rueckenfigur/">Die Rückenfigur verstehen →</Link>
          </div>
        </section>
      </div>

      <section aria-labelledby="geteilte-welt" className={styles.artworkSection}>
        <div className={styles.artworkLayout}>
          <ArtworkFeature
            artwork={oxbow}
            heading="Ein Bild, zwei Welten"
            headingId="geteilte-welt"
            kicker="Thomas Cole · 1836"
          >
            <p>
              Links hängt das Gewitter noch über gebrochenen Bäumen und dichtem Wald.
              Rechts öffnet sich eine helle, bewirtschaftete Ebene. Der Connecticut
              River schneidet als große Schleife durch beide Zustände. Cole malt keine
              neutrale Aussicht, sondern eine Entscheidung, deren Ausgang offenbleibt.
            </p>
            <p>
              Selbst der Maler ist im Vordergrund versteckt: winzig zwischen Fels,
              Staffelei und Regenschirm. Seine erhöhte Position verspricht Überblick,
              doch das Bild entzieht ihm die Eindeutigkeit. Ist die helle Ordnung
              Fortschritt oder Verlust? Ist die Wildnis Ursprung, Gefahr oder eine
              bereits verschwindende Vorstellung?
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
            headingId="aufloesung"
            kicker="J. M. W. Turner · um 1845"
          >
            <p>
              Bei Turner ist die Natur nicht sauber in zwei Hälften geteilt. Sie dringt
              in die Malerei ein. Schiff, Boote, Wal, Gischt und Rauch sind noch
              erkennbar, aber ihre Grenzen lösen sich auf. Das Auge muss arbeiten und
              bleibt trotzdem unsicher.
            </p>
            <p>
              Genau darin liegt die Erfahrung des Erhabenen: Anziehung und Überforderung
              gleichzeitig. Die See ist nicht Hintergrund für menschliches Handeln. Sie
              ist eine Kraft, die Maßstab, Orientierung und sogar die Lesbarkeit des
              Bildes bestimmt.
            </p>
            <div className={styles.inlineLinks}>
              <Link href="/werke/whalers-turner/">Whalers im Detail lesen →</Link>
              <Link href="/kuenstler/j-m-w-turner/">Turners Malerei verstehen →</Link>
              <Link href="/begriffe/das-erhabene/">Das Erhabene verstehen →</Link>
            </div>
          </ArtworkFeature>
        </div>
      </section>

      <section aria-labelledby="drei-funktionen" className={styles.connectionSection}>
        <div className={styles.section}>
          <p className={styles.sectionKicker}>Die Fäden zusammenziehen</p>
          <h2 className={styles.connectionTitle} id="drei-funktionen">
            Natur ist in diesen Bildern nie bloß dieselbe Kulisse.
          </h2>
          <p className={styles.connectionLead}>
            Die drei Werke teilen Nacht, Wetter, Weite und kleine menschliche Figuren.
            Doch sie setzen diese Mittel für verschiedene Probleme ein. Erst im
            Vergleich wird sichtbar, wie weit der Begriff Romantik reicht.
          </p>

          <div className={styles.connectionGrid}>
            {visualConnections.map((connection) => (
              <article key={connection.work}>
                <p>{connection.work}</p>
                <h3>{connection.thesis}</h3>
                <span>{connection.text}</span>
              </article>
            ))}
          </div>
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
              Nebelberge und einsame Rückenfiguren prägen heute das populäre Bild der
              Epoche. Doch Romantik entstand in mehreren Ländern, Medien und politischen
              Situationen. Ihre Formen widersprechen einander, gerade weil sie dieselbe
              Frage verschieden beantworten: Was geschieht, wenn Gefühl und
              Vorstellungskraft mehr sein sollen als Störungen der Vernunft?
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
            Die romantische Landschaft zeigt nicht nur, wo wir sind. Sie fragt, wer wir
            dort werden.
          </h2>
          <div className={styles.closingCopy}>
            <p>
              Deshalb wirken diese Bilder weiterhin erstaunlich gegenwärtig. Sie geben
              der Natur eine Eigenmacht, lassen Wahrnehmung unsicher werden und
              verbinden äußere Räume mit inneren Zuständen. Die Romantik ist weniger
              eine Flucht aus der Welt als ein Versuch, ihre nicht berechenbaren Teile
              wieder sichtbar zu machen.
            </p>
            <p>
              Eine Epochenreise kann diese Felder nur öffnen. Das eigentliche Verstehen
              beginnt dort, wo ein Werk, ein Künstler oder ein Motiv lange genug
              betrachtet wird, um seine Widersprüche auszuhalten. Von hier aus wächst
              der Romantik-Silo deshalb nicht als Lexikon, sondern als Netz aus
              konkreten Blickwegen weiter.
            </p>
          </div>

          <div className={styles.deepDiveHeading}>
            <p className={styles.sectionKicker}>Tiefer in den Silo</p>
            <h3>Zwei Künstler, zwei Werke und zwei Arten, romantische Bilder zu lesen.</h3>
          </div>
          <div className={styles.deepDiveGrid}>
            {deepDives.map((deepDive) => (
              <Link
                className={styles.deepDiveCard}
                href={deepDive.href}
                key={deepDive.href}
              >
                <span>{deepDive.eyebrow}</span>
                <strong>{deepDive.title}</strong>
                <p>{deepDive.text}</p>
                <em>Öffnen →</em>
              </Link>
            ))}
          </div>

          <aside aria-labelledby="quellen" className={styles.sources}>
            <p className={styles.sectionKicker} id="quellen">
              Quellen dieser Epochenreise
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
