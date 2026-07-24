import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const artwork = {
  title: "Whalers",
  artist: "Joseph Mallord William Turner",
  date: "um 1845",
  medium: "Öl auf Leinwand",
  dimensions: "91,8 × 122,6 cm",
  institution: "The Metropolitan Museum of Art, New York",
  imageUrl:
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437854/1685823/main-image",
  sourceUrl: "https://www.metmuseum.org/art/collection/search/437854",
  creditLine: "Catharine Lorillard Wolfe Collection, Wolfe Fund, 1896",
  alt: "Ein Walfangschiff und kleine Boote erscheinen in bewegter See, während ein dunkler Wal links aus Gischt und Rauch auftaucht.",
} as const;

const landmarks = [
  {
    label: "01 · Der Wal",
    title: "Das zentrale Opfer liegt nicht im Zentrum.",
    text: "Links unten ragt ein dunkler Rücken oder Kopf aus der See. Der Wal ist groß genug, um die Handlung auszulösen, aber klein genug, um zunächst übersehen zu werden. Turner macht das Sehen selbst unsicher: Der Betrachter muss das gejagte Tier aus der Atmosphäre herauslösen.",
  },
  {
    label: "02 · Die Boote",
    title: "Arbeit erscheint als fragiles Netz kleiner Körper.",
    text: "Die Walfänger sitzen in niedrigen Booten, deren Konturen von Gischt und Bewegung unterbrochen werden. Sie handeln organisiert, wirken gegenüber Meer und Tier aber erschreckend klein. Das Bild zeigt technische Koordination, ohne daraus vollständige Kontrolle zu machen.",
  },
  {
    label: "03 · Das Schiff",
    title: "Das Mutterschiff ist zugleich Schutz und Bedrohung.",
    text: "Der große dunkle Rumpf hält die Expedition zusammen. Seine Masse stabilisiert die Komposition kurz, doch Rauch, Segel und Wasser lösen auch ihn wieder auf. Die menschliche Infrastruktur bleibt Teil derselben gefährlichen Atmosphäre.",
  },
  {
    label: "04 · Der Horizont",
    title: "Es gibt keinen bequemen Überblick.",
    text: "Meer und Himmel trennen sich nicht sauber. Helligkeit sammelt sich in der Mitte, während dunkle Formen an den Rändern auftauchen und verschwinden. Dadurch fehlt der feste Horizont, von dem aus das Geschehen moralisch oder räumlich leicht geordnet werden könnte.",
  },
] as const;

const readings = [
  {
    title: "Erhabene Natur",
    text: "Die See überfordert Maßstab und Wahrnehmung. Anziehung und Gefahr fallen zusammen; der Betrachter möchte genauer sehen und erlebt zugleich, dass klare Sicht nicht verfügbar ist.",
  },
  {
    title: "Industrie auf dem Meer",
    text: "Walfang war organisierte Rohstoffgewinnung. Schiff, Boote, Harpunen und Arbeitsteilung verweisen auf eine globale Ökonomie, die Tierkörper in Öl und Profit verwandelte.",
  },
  {
    title: "Moralische Unruhe",
    text: "Turner liefert keine eindeutige Anklage und keine heroische Feier. Gerade diese Instabilität ist produktiv: Das Bild zeigt Können, Risiko, Gewalt und wirtschaftlichen Zweck gleichzeitig.",
  },
] as const;

export const metadata: Metadata = {
  title: "Whalers von J. M. W. Turner lesen",
  description:
    "Eine detaillierte Bildanalyse von Turners Whalers: Wal, Boote, Schiff, Horizont, Walfang, das Erhabene und die instabile Wahrnehmung.",
  alternates: {
    canonical: "/werke/whalers-turner/",
  },
};

export default function WhalersPage() {
  return (
    <article className="bg-[#d7c9a3] text-[#241f18]">
      <header className="bg-[#171e1f] text-[#f0eadc]">
        <div className="mx-auto w-full max-w-[96rem] px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a84e]">
            Werkdecoder · um 1845
          </p>
          <h1 className="mt-5 max-w-[12ch] font-serif text-6xl leading-[0.9] font-medium tracking-[-0.055em] sm:text-8xl lg:text-9xl">
            Whalers
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#f0eadc]/72 sm:text-xl">
            Turner zeigt eine Jagd, deren Gegenstände sichtbar bleiben und sich dennoch
            ständig entziehen. Das Bild handelt deshalb zugleich vom Walfang und von der
            Grenze dessen, was ein Auge in Bewegung sicher erfassen kann.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-[110rem]">
          <div className="relative aspect-[1.335] bg-black">
            <Image
              alt={artwork.alt}
              fill
              preload
              sizes="100vw"
              src={artwork.imageUrl}
            />
          </div>
          <figcaption className="px-5 py-4 text-xs leading-5 text-[#f0eadc]/60 sm:px-8">
            {artwork.artist}, <em>{artwork.title}</em>, {artwork.date}. {artwork.medium}
            , {artwork.dimensions}. {artwork.institution}. {artwork.creditLine}.{" "}
            <a className="font-semibold underline" href={artwork.sourceUrl}>
              Public Domain · The Met Open Access
            </a>
          </figcaption>
        </figure>
      </header>

      <section className="mx-auto grid w-full max-w-[84rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#744128]">
            Erster Blick
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
            Das Bild lässt sich nicht auf einmal besitzen.
          </h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#241f18]/74">
          <p>
            Aus der Entfernung scheint alles in einer hellen, gelblich-grauen Bewegung
            zu schweben. Erst nach und nach werden Wal, Boote, Schiff, Masten und
            Menschen unterscheidbar. Turner baut die Komposition nicht um eine klare
            Hauptfigur, sondern um ein gestörtes Sucherlebnis.
          </p>
          <p>
            Das ist kein Mangel an Zeichnung. Die Unsicherheit ist konstruiert. Dunkle
            Formen tauchen an verschiedenen Stellen auf, während die Mitte von Licht und
            Wasser überflutet wird. Das Auge springt, prüft, verliert und findet erneut.
          </p>
        </div>
      </section>

      <section className="bg-[#222a29] text-[#eee8db]">
        <div className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d5a856]">
            Vier Orientierungspunkte
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2">
            {landmarks.map((landmark) => (
              <article className="bg-[#222a29] p-7 sm:p-10" key={landmark.label}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d5a856]">
                  {landmark.label}
                </p>
                <h2 className="mt-8 font-serif text-3xl leading-tight font-medium tracking-[-0.03em] sm:text-4xl">
                  {landmark.title}
                </h2>
                <p className="mt-5 leading-7 text-[#eee8db]/68">{landmark.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#744128]">
              Was der Gegenstand verändert
            </p>
            <h2 className="mt-4 max-w-[12ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
              Walfang ist keine austauschbare Staffage für einen Sturm.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#241f18]/74">
            <p>
              Mitte des 19. Jahrhunderts verband Walfang Fernhandel, gefährliche Arbeit
              und die systematische Tötung großer Meeressäuger. Walöl wurde unter
              anderem für Beleuchtung und industrielle Zwecke genutzt. Das Gemälde trägt
              diese Ökonomie in sich, selbst wenn es keinen erklärenden Text mitliefert.
            </p>
            <p>
              Dadurch verändert sich auch das Erhabene. Die Menschen begegnen einer
              überwältigenden Natur nicht als passive Wanderer, sondern als Jäger und
              Arbeiter. Sie riskieren ihr Leben und üben zugleich organisierte Gewalt
              aus. Furcht, Bewunderung und moralische Distanz lassen sich nicht sauber
              trennen.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {readings.map((reading) => (
            <article
              className="border border-[#241f18]/16 bg-white/25 p-7"
              key={reading.title}
            >
              <h3 className="font-serif text-3xl font-medium tracking-[-0.03em]">
                {reading.title}
              </h3>
              <p className="mt-4 leading-7 text-[#241f18]/70">{reading.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#8f673f] text-[#fff5e4]">
        <div className="mx-auto grid w-full max-w-[84rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffe0aa]">
              Nicht einfach „fast abstrakt“
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[0.96] font-medium tracking-[-0.045em] sm:text-7xl">
              Die Auflösung trägt Bedeutung.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#fff5e4]/78">
            <p>
              Wer das Bild nur als Vorstufe moderner Abstraktion liest, verliert seinen
              spezifischen Konflikt. Die Farbbewegung ist nicht unabhängig von Wal,
              Boot, Arbeit und Gefahr. Sie macht erfahrbar, wie unsicher diese Situation
              ist.
            </p>
            <p>
              Turner löst die Welt also nicht auf, um den Gegenstand hinter sich zu
              lassen. Er löst sie auf, damit der Gegenstand körperlich und psychologisch
              unter Druck gerät. Malweise und Erzählung sind nicht zwei Ebenen, sondern
              dasselbe Ereignis.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#744128]">
          Weitersehen
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            className="border border-[#241f18]/16 p-6 no-underline"
            href="/kuenstler/j-m-w-turner/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#744128]">
              Künstler
            </span>
            <strong className="mt-4 block font-serif text-2xl">
              Turners Malerei verstehen
            </strong>
          </Link>
          <Link
            className="border border-[#241f18]/16 p-6 no-underline"
            href="/begriffe/das-erhabene/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#744128]">
              Begriff
            </span>
            <strong className="mt-4 block font-serif text-2xl">Das Erhabene</strong>
          </Link>
          <Link
            className="border border-[#241f18]/16 p-6 no-underline"
            href="/epochen/romantik/"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#744128]">
              Epoche
            </span>
            <strong className="mt-4 block font-serif text-2xl">
              Zur Romantik zurück
            </strong>
          </Link>
        </div>
      </section>
    </article>
  );
}
