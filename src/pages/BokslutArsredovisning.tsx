import { FileText } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BokslutArsredovisning = () => (
  <ServicePageTemplate
    title="Bokslut & årsredovisning"
    subtitle="Vi skapar korrekta bokslut och årsredovisningar som ger dig och dina intressenter full insyn."
    description={`Ett bokslut är mer än bara siffror – det är en sammanfattning av ditt företags ekonomiska resa under året. Vi ser till att allt stämmer och att din årsredovisning uppfyller alla krav från Bolagsverket.

Vi går igenom alla poster, gör nödvändiga periodiseringar och justeringar, och sammanställer en tydlig och professionell årsredovisning. Vi förklarar också resultaten på ett begripligt sätt så att du kan använda informationen som beslutsunderlag.

Oavsett om du driver enskild firma eller aktiebolag har vi erfarenheten som krävs för att leverera ett korrekt och genomarbetat bokslut.`}
    benefits={[
      "Genomarbetat bokslut med alla nödvändiga avstämningar",
      "Professionell årsredovisning enligt god redovisningssed",
      "Inlämning till Bolagsverket och Skatteverket",
      "Tydlig genomgång av resultatet med dig som företagare",
      "Rådgivning kring skatteoptimering inför bokslut",
      "Alla periodiseringar och justeringar hanterade",
    ]}
    process={[
      { step: "Förberedelse", description: "Vi samlar in och granskar allt underlag. Alla konton stäms av och periodiseringar görs." },
      { step: "Bokslutsarbete", description: "Vi upprättar bokslutet och sammanställer årsredovisningen enligt gällande regler." },
      { step: "Genomgång & inlämning", description: "Vi går igenom resultatet med dig, besvarar frågor och sköter inlämning till myndigheterna." },
    ]}
    testimonial={{
      quote: "Det bästa med Roslagen Redovisning är att de alltid tar sig tid att förklara bokslutet. Jag förstår äntligen mina siffror och kan planera framåt med trygghet.",
      name: "Erik Johansson",
      title: "Snickare & företagare, Östhammar",
    }}
    faq={[
      { question: "När behöver bokslutet vara klart?", answer: "Aktiebolag ska lämna in årsredovisningen senast sju månader efter räkenskapsårets slut. Vi planerar i god tid så det aldrig blir stressigt." },
      { question: "Behöver jag en revisor?", answer: "Mindre aktiebolag är oftast befriade från revisionsplikt. Vi hjälper dig avgöra om du behöver en revisor eller inte." },
      { question: "Kan ni hantera bolag med brutet räkenskapsår?", answer: "Absolut. Vi har erfarenhet av alla typer av räkenskapsår och anpassar oss efter ditt bolags upplägg." },
    ]}
    icon={<FileText className="w-7 h-7 text-primary" />}
  />
);

export default BokslutArsredovisning;
