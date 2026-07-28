import type { Metadata } from "next";

import { GleanersExperience } from "./GleanersExperience";

export const metadata: Metadata = {
  title: "Die Ährenleserinnen: Arbeit nach der Ernte",
  description:
    "Eine interaktive Werkanalyse von Jean-François Millets Die Ährenleserinnen über wiederholte Bewegung, Erntereste, soziale Distanz und monumentale Sichtbarkeit.",
  alternates: { canonical: "/werke/die-aehrenleserinnen/" },
};

const sourceUrl =
  "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg";

const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg";

export default function GleanersPage() {
  return <GleanersExperience imageUrl={imageUrl} sourceUrl={sourceUrl} />;
}
