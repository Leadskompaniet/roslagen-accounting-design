import { BookOpen } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const LopandeBokforing = () => (
  <ServicePageTemplate
    title="Löpande bokföring"
    subtitle="Vi sköter din dagliga bokföring så att du kan fokusera på det du gör bäst – driva ditt företag."
    description={`Som småföretagare har du fullt upp med att driva din verksamhet. Att dessutom hålla ordning på kvitton, fakturor och kontoutdrag kan vara överväldigande. Det är här vi kommer in.

Vi tar hand om hela din löpande bokföring – från att registrera verifikationer och stämma av bankkonton till att hantera leverantörsfakturor och kundreskontra. Du slipper tänka på momsrapporter och avstämningar, och kan istället lita på att allt sköts korrekt och i tid.

Genom att använda moderna molnbaserade system ger vi dig full insyn i din ekonomi i realtid, oavsett var du befinner dig.`}
    benefits={[
      "Alla verifikationer bokförda löpande och korrekt",
      "Månatliga avstämningar av bank och konton",
      "Momsdeklaration inlämnad i tid varje period",
      "Löpande rapporter så du alltid har koll på ekonomin",
      "Digitalt och pappersfritt – smidigt och modernt",
      "Personlig kontakt med din redovisningskonsult",
    ]}
    process={[
      { step: "Första mötet", description: "Vi träffas och går igenom din verksamhet, dina behov och sätter upp ett smidigt arbetsflöde." },
      { step: "Löpande hantering", description: "Vi bokför dina affärshändelser löpande, stämmer av konton och lämnar in momsdeklarationer." },
      { step: "Uppföljning", description: "Du får regelbundna rapporter och avstämningar. Vi finns alltid tillgängliga för frågor." },
    ]}
    testimonial={{
      quote: "Sedan vi anlitade Roslagskompaniet för vår löpande bokföring har jag äntligen tid att fokusera på mina kunder istället för kvitton. De är noggranna, snabba och alltid tillgängliga.",
      name: "Maria Lindström",
      title: "Ägare, Lindströms Café, Norrtälje",
    }}
    faq={[
      { question: "Hur ofta bokför ni?", answer: "Vi bokför löpande, vanligtvis varje vecka eller månad beroende på hur mycket aktivitet ditt företag har. Vi anpassar oss helt efter dina behov." },
      { question: "Vilka bokföringsprogram använder ni?", answer: "Vi arbetar med ledande molnbaserade system som Fortnox och Visma. Om du redan har ett system kan vi anpassa oss efter det." },
      { question: "Vad kostar löpande bokföring?", answer: "Priset beror på mängden verifikationer och komplexiteten i din verksamhet. Vi ger dig alltid ett tydligt prisförslag efter vårt första möte." },
      { question: "Kan jag se mina siffror i realtid?", answer: "Absolut! Genom molnbaserade system har du alltid tillgång till uppdaterade rapporter och kan följa din ekonomi var du än befinner dig." },
    ]}
    icon={<BookOpen className="w-7 h-7 text-primary" />}
  />
);

export default LopandeBokforing;
