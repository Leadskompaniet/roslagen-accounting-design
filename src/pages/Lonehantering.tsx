import { Users } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const Lonehantering = () => (
  <ServicePageTemplate
    title="Lönehantering"
    subtitle="Smidig och korrekt lönehantering – vi sköter allt från löneberäkning till arbetsgivardeklaration."
    description={`Att hantera löner korrekt är avgörande, men det kan vara komplicerat med alla regler kring skatter, sociala avgifter och semesterberäkningar. Vi tar hand om hela löneprocessen åt dig.

Vi beräknar löner, hanterar arbetsgivaravgifter, gör skatteavdrag och skickar in arbetsgivardeklarationer till Skatteverket. Vi ser också till att dina anställda får sina lönespecifikationer i tid.

Oavsett om du har en eller tjugo anställda erbjuder vi en pålitlig lönetjänst som gör att du kan vara trygg med att allt följer gällande lagar och kollektivavtal.`}
    benefits={[
      "Korrekt löneberäkning varje månad",
      "Arbetsgivardeklaration inlämnad till Skatteverket",
      "Lönespecifikationer till alla anställda",
      "Hantering av semester, sjukfrånvaro och förmåner",
      "Stöd vid frågor om kollektivavtal och arbetsrätt",
      "Årssammanställning och kontrolluppgifter",
    ]}
    process={[
      { step: "Uppsättning", description: "Vi sätter upp lönesystemet, registrerar anställda och konfigurerar allt efter dina behov." },
      { step: "Månatlig körning", description: "Vi beräknar löner, gör utbetalningar och skickar in arbetsgivardeklaration varje månad." },
      { step: "Årsavslut", description: "Vi sammanställer årets löner, hanterar kontrolluppgifter och förbereder för deklaration." },
    ]}
    testimonial={{
      quote: "Vi har fem anställda och lönehanteringen brukade ta mig en hel dag varje månad. Nu sköter Roslagen Redovisning allt – perfekt och utan krångel.",
      name: "Per Ekström",
      title: "Ägare, Ekströms Bygg, Rimbo",
    }}
    faq={[
      { question: "Kan ni hantera olika anställningsformer?", answer: "Ja, vi hanterar fast anställda, timanställda, vikarier och konsulter. Vi anpassar lönehanteringen efter dina behov." },
      { question: "Hur snabbt får mina anställda sina lönebesked?", answer: "Lönebesked skickas ut digitalt i samband med lönekörningen, vanligtvis några dagar före löneutbetalning." },
      { question: "Ingår arbetsgivardeklaration?", answer: "Ja, vi sköter alla arbetsgivardeklarationer till Skatteverket som en del av lönetjänsten." },
    ]}
    icon={<Users className="w-7 h-7 text-primary" />}
  />
);

export default Lonehantering;
