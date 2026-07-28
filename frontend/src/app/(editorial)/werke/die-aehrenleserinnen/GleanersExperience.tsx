"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./gleaners.module.css";

const gestures = [
  {
    label: "Greifen",
    position: "17% 58%",
    title: "Der Körper wird zur Linie des Bodens.",
    text: "Die linke Frau greift so tief, dass Rücken und Horizont fast parallel erscheinen. Arbeit beginnt nicht mit einem heroischen Impuls, sondern mit einer wiederholten Bewegung nach unten.",
  },
  {
    label: "Aufrichten",
    position: "49% 58%",
    title: "Entlastung bleibt ein Zwischenzustand.",
    text: "Die mittlere Figur richtet sich nur teilweise auf. Der Moment ist keine Pause, sondern der Übergang zwischen zwei Griffen. Das Bild verweigert den befreienden Höhepunkt.",
  },
  {
    label: "Sammeln",
    position: "80% 58%",
    title: "Der Ertrag passt in eine Hand.",
    text: "Die rechte Frau bündelt einzelne Ähren. Das Ergebnis ist klein, die Bewegung beginnt erneut. Millet macht aus drei Körpern eine Endlosschleife der Restarbeit.",
  },
] as const;

const links = [
  ["Jean-François Millet", "/kuenstler/jean-francois-millet/"],
  ["Ländliche Arbeit", "/begriffe/laendliche-arbeit-und-soziale-sichtbarkeit/"],
  ["Die Steinklopfer", "/werke/die-steinklopfer/"],
  ["Realismus", "/epochen/realismus/"],
] as const;

interface GleanersExperienceProps {
  imageUrl: string;
  sourceUrl: string;
}

export function GleanersExperience({ imageUrl, sourceUrl }: GleanersExperienceProps) {
  const [activeGesture, setActiveGesture] = useState(0);
  const [horizon, setHorizon] = useState(43);
  const [imageFailed, setImageFailed] = useState(false);
  const gesture = gestures[activeGesture];

  const artwork = (
    <>
      {!imageFailed ? (
        <Image
          alt="Jean-François Millets Die Ährenleserinnen: drei Frauen sammeln auf einem abgeernteten Feld einzelne Ähren; die volle Ernte liegt weit im Hintergrund."
          fill
          onError={() => setImageFailed(true)}
          priority
          sizes="100vw"
          src={imageUrl}
        />
      ) : (
        <div className={styles.imageFallback} role="status">
          <span>Die Reproduktion konnte nicht geladen werden.</span>
          <a href={sourceUrl}>Originalquelle bei Wikimedia Commons öffnen ↗</a>
        </div>
      )}
    </>
  );

  return (
    <main className={styles.page}>
      <section className={styles.opening}>
        <div className={styles.openingCopy}>
          <p className={styles.eyebrow}>Jean-François Millet · 1857 · Musée d’Orsay</p>
          <h1>
            <span>Die Ähren</span>
            <span>leserinnen</span>
          </h1>
          <p className={styles.lead}>
            Nach der Ernte beginnt die Arbeit am Rest. Dieses Bild erklärt soziale Ordnung
            nicht mit einer Parole, sondern mit drei gebückten Körpern, einem weit entfernten
            Ertrag und einer Linie, die das Feld in zwei Wirklichkeiten teilt.
          </p>
        </div>

        <figure className={styles.heroFigure}>
          <div className={styles.heroImage}>{artwork}</div>
          <div className={styles.heroCoordinates} aria-hidden="true">
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <figcaption>
            <span>Das ganze Feld zuerst. Erklärung folgt erst nach dem Blick.</span>
            <a href={sourceUrl}>Bildquelle · Wikimedia Commons · Public Domain ↗</a>
          </figcaption>
        </figure>
      </section>

      <section className={styles.gestureSection} aria-labelledby="gesture-title">
        <div className={styles.gestureCopy}>
          <p className={styles.sectionNumber}>I · Die Schleife</p>
          <h2 id="gesture-title">Drei Frauen zeigen nicht drei Tätigkeiten.</h2>
          <p>
            Sie zeigen drei Zeitpunkte derselben Tätigkeit. Wähle eine Figur und beobachte,
            wie der Körper die Arbeit weitergibt.
          </p>

          <div className={styles.gestureControls} aria-label="Bewegungsphasen auswählen">
            {gestures.map((item, index) => (
              <button
                aria-pressed={activeGesture === index}
                key={item.label}
                onClick={() => setActiveGesture(index)}
                type="button"
              >
                <span>0{index + 1}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.gestureStage}>
          <div className={styles.gestureImage}>
            {!imageFailed ? (
              <Image
                alt={`Detailphase ${activeGesture + 1}: ${gesture.label}`}
                fill
                onError={() => setImageFailed(true)}
                sizes="(min-width: 900px) 62vw, 100vw"
                src={imageUrl}
                style={{ objectPosition: gesture.position }}
              />
            ) : (
              <div className={styles.imageFallback} role="status">
                <a href={sourceUrl}>Reproduktion an der Quelle öffnen ↗</a>
              </div>
            )}
            <div className={styles.gestureReticle} aria-hidden="true" />
          </div>
          <div className={styles.gestureReading} aria-live="polite">
            <span>{gesture.label}</span>
            <h3>{gesture.title}</h3>
            <p>{gesture.text}</p>
          </div>
        </div>
      </section>

      <section className={styles.horizonSection} aria-labelledby="horizon-title">
        <div className={styles.horizonHeader}>
          <p className={styles.sectionNumber}>II · Die Grenze</p>
          <h2 id="horizon-title">Zieh die Linie durch das Feld.</h2>
          <p>
            Der Horizont ist hier keine neutrale Landschaftslinie. Er trennt die Arbeit am
            Rest von der Organisation des Ertrags.
          </p>
        </div>

        <div className={styles.horizonInstrument}>
          <div className={styles.horizonImage}>
            {!imageFailed ? (
              <>
                <Image
                  alt="Die Ährenleserinnen mit interaktiv markierter sozialer Horizontlinie"
                  fill
                  onError={() => setImageFailed(true)}
                  sizes="100vw"
                  src={imageUrl}
                />
                <div
                  className={styles.foregroundWash}
                  style={{ clipPath: `inset(${horizon}% 0 0 0)` }}
                />
                <div className={styles.horizonLine} style={{ top: `${horizon}%` }}>
                  <span>soziale Trennlinie</span>
                </div>
              </>
            ) : (
              <div className={styles.imageFallback} role="status">
                <a href={sourceUrl}>Reproduktion an der Quelle öffnen ↗</a>
              </div>
            )}
          </div>

          <label className={styles.horizonControl}>
            <span>Horizont verschieben</span>
            <input
              aria-valuetext={`${horizon} Prozent Bildhöhe`}
              max="64"
              min="30"
              onChange={(event) => setHorizon(Number(event.target.value))}
              type="range"
              value={horizon}
            />
          </label>

          <div className={styles.fieldLedger}>
            <div>
              <span>unter der Linie</span>
              <strong>3 Körper</strong>
              <p>trockene Erde, einzelne Ähren, wiederholte Bewegung</p>
            </div>
            <div>
              <span>über der Linie</span>
              <strong>die Ernte</strong>
              <p>Wagen, Kornschober, Tiere, Aufsicht und organisierter Überfluss</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.accountingSection}>
        <div className={styles.accountingWord} aria-hidden="true">
          REST
        </div>
        <div className={styles.accountingCopy}>
          <p className={styles.sectionNumber}>III · Die Bilanz</p>
          <h2>Monumentalität verändert die Sichtbarkeit. Nicht die Besitzverhältnisse.</h2>
          <p>
            Millet gibt den Frauen die Größe anspruchsvoller Salonmalerei, aber keinen
            Triumph. Ihre Gesichter bleiben schwer lesbar, die Bewegung bleibt am Boden und
            der sichtbare Überfluss bleibt räumlich getrennt.
          </p>
          <blockquote>
            Drei große Körper. Eine kleine Ausbeute. Kein Anteil am Ertrag, den das Bild im
            Hintergrund vollständig sichtbar macht.
          </blockquote>
        </div>
      </section>

      <footer className={styles.exit}>
        <p>Der Blick verlässt das Feld nicht über ein Kartenraster, sondern über vier Wege.</p>
        <nav aria-label="Weiterführende Wege">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <a className={styles.sourceLink} href={sourceUrl}>
          Werkreproduktion und vollständige Attribution öffnen ↗
        </a>
      </footer>
    </main>
  );
}
