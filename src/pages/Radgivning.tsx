import { TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const Radgivning = () => (
  <ServicePageTemplate
    title="Rådgivning"
    subtitle="Ekonomisk rådgivning som hjälper dig fatta smartare beslut och få ditt företag att växa."
    description={`Bra ekonomisk rådgivning handlar inte bara om siffror – det handlar om att förstå din verksamhet, dina mål och de möjligheter som finns. Vi fungerar som din ekonomiska samtalspartner och ger dig det beslutsunderlag du behöver.

Oavsett om du funderar på att expandera, investera, anställa eller optimera din skattesituation finns vi här för att guida dig. Vi kombinerar lokal förståelse med bred ekonomisk kompetens för att ge dig rådgivning som verkligen gör skillnad.

Vi tror på långsiktiga relationer och proaktiv rådgivning. Istället för att bara rapportera vad som hänt hjälper vi dig planera vad som ska hända härnäst.`}
    benefits={[
      "Personlig rådgivning anpassad efter din bransch och situation",
      "Skatteplanering och optimering av företagets struktur",
      "Budgetering och likviditetsplanering",
      "Stöd vid företagsstart, ombildning eller avveckling",
      "Ekonomiska analyser och nyckeltal för bättre beslutsunderlag",
      "Löpande uppföljning och proaktiva förslag",
    ]}
    process={[
      { step: "Nulägesanalys", description: "Vi kartlägger din ekonomiska situation, dina mål och identifierar möjligheter." },
      { step: "Strategisk plan", description: "Vi tar fram en handlingsplan med konkreta rekommendationer och åtgärder." },
      { step: "Löpande stöd", description: "Vi följer upp regelbundet och justerar planen efter hur din verksamhet utvecklas." },
    ]}
    testimonial={{
      quote: "Tack vare rådgivningen från Roslagen Redovisning vågade jag ta steget att anställa min första medarbetare. De hjälpte mig räkna på allt och jag kände mig trygg i beslutet.",
      name: "Sara Nilsson",
      title: "Frisör & företagare, Norrtälje",
    }}
    faq={[
      { question: "Vad kostar rådgivning?", answer: "Vi erbjuder olika upplägg beroende på dina behov – från enstaka rådgivningsmöten till löpande rådgivning. Det första mötet är alltid kostnadsfritt." },
      { question: "Kan ni hjälpa mig starta företag?", answer: "Absolut! Vi hjälper dig välja rätt företagsform, registrera bolaget och sätta upp en ekonomisk plan från start." },
      { question: "Behöver jag vara kund hos er för att få rådgivning?", answer: "Nej, du behöver inte vara befintlig kund. Vi erbjuder rådgivning som fristående tjänst, men många väljer att kombinera den med våra övriga tjänster." },
    ]}
    icon={<TrendingUp className="w-7 h-7 text-primary" />}
  />
);

export default Radgivning;
