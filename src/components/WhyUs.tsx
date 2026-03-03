import { MapPin, UserCheck, Monitor, Eye, Clock } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Lokal närvaro",
    description: "Vi finns i Roslagen och känner till de lokala förutsättningarna.",
  },
  {
    icon: UserCheck,
    title: "Personlig kontakt",
    description: "Du får alltid samma rådgivare som lär känna just din verksamhet.",
  },
  {
    icon: Monitor,
    title: "Digitala lösningar",
    description: "Moderna verktyg som gör din bokföring enkel och tillgänglig.",
  },
  {
    icon: Eye,
    title: "Transparent prissättning",
    description: "Inga dolda kostnader. Du vet alltid vad du betalar för.",
  },
  {
    icon: Clock,
    title: "Snabb återkoppling",
    description: "Vi svarar snabbt och finns tillgängliga när du behöver oss.",
  },
];

const WhyUs = () => {
  return (
    <section id="varfor-oss" className="section-padding bg-sea-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Varför välja oss</h2>
          <p className="section-subtitle mx-auto mt-4">
            Vi tror på nära relationer, modern teknik och enkel bokföring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
