import { Calculator } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const Deklaration = () => (
  <ServicePageTemplate
    title="Deklaration"
    subtitle="Vi ser till att din deklaration blir korrekt, optimerad och inlämnad i tid – utan stress."
    description={`Deklarationen är en av årets viktigaste ekonomiska händelser, och fel kan bli kostsamma. Vi tar hand om hela processen – från att samla in underlag till att lämna in deklarationen digitalt till Skatteverket.

Vi ser till att alla avdrag tas tillvara och att allt redovisas korrekt. Oavsett om det gäller inkomstdeklaration för enskild firma, aktiebolag eller privatperson hjälper vi dig att optimera din skattesituation inom lagens ramar.

Med oss som partner kan du känna dig trygg. Vi bevakar deadlines, hanterar eventuella frågor från Skatteverket och ser till att du aldrig missar något viktigt.`}
    benefits={[
      "Korrekt och optimerad deklaration varje år",
      "Alla avdragsmöjligheter utnyttjas fullt ut",
      "Digital inlämning till Skatteverket i tid",
      "Hantering av eventuella kompletteringsförfrågningar",
      "Rådgivning kring skatteplanering för kommande år",
      "Stöd för både privatpersoner och företag",
    ]}
    process={[
      { step: "Underlag", description: "Vi samlar in alla relevanta uppgifter och underlag inför deklarationen." },
      { step: "Granskning & optimering", description: "Vi granskar varje post, identifierar avdrag och optimerar din skattesituation." },
      { step: "Inlämning & uppföljning", description: "Vi lämnar in deklarationen och bevakar att allt går igenom hos Skatteverket." },
    ]}
    testimonial={{
      quote: "Jag brukade stressa varje vår inför deklarationen. Nu vet jag att Roslagen Redovisning har koll på allt – jag behöver bara skriva under. Så skönt!",
      name: "Anna Bergqvist",
      title: "Konsult, Vaxholm",
    }}
    faq={[
      { question: "När ska deklarationen vara inlämnad?", answer: "För privatpersoner och enskilda firmor är deadline vanligtvis 2 maj. Aktiebolag har olika datum beroende på räkenskapsår. Vi håller koll åt dig." },
      { question: "Kan ni hjälpa med deklaration för privatpersoner?", answer: "Ja, vi hjälper även privatpersoner med deklaration – exempelvis vid försäljning av bostad, kapitalinkomster eller utländska inkomster." },
      { question: "Vad händer om jag fått ett föreläggande från Skatteverket?", answer: "Vi hjälper dig besvara förelägganden och komplettera med rätt information. Kontakta oss så snart du kan." },
    ]}
    icon={<Calculator className="w-7 h-7 text-primary" />}
  />
);

export default Deklaration;
