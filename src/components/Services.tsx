import { BookOpen, FileText, Calculator, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Löpande bokföring",
    description: "Vi tar hand om den dagliga bokföringen så att du kan fokusera på din verksamhet. Alltid uppdaterat och korrekt.",
  },
  {
    icon: FileText,
    title: "Bokslut & årsredovisning",
    description: "Professionella bokslut och årsredovisningar som ger dig tydlig insikt i företagets ekonomi.",
  },
  {
    icon: Calculator,
    title: "Deklaration",
    description: "Vi säkerställer att din deklaration blir korrekt och inlämnad i tid – utan onödig stress.",
  },
  {
    icon: Users,
    title: "Lönehantering",
    description: "Smidig lönehantering med alla arbetsgivaravgifter, skatteberäkningar och rapporteringar.",
  },
  {
    icon: TrendingUp,
    title: "Rådgivning",
    description: "Ekonomisk rådgivning anpassad för småföretagare. Vi hjälper dig fatta rätt beslut för tillväxt.",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="section-padding bg-sand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Våra tjänster</h2>
          <p className="section-subtitle mx-auto mt-4">
            Helhetslösningar för din ekonomi – från löpande bokföring till strategisk rådgivning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sea-light flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <button className="mt-5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all">
                Läs mer →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
