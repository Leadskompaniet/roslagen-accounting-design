import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Roslagen Redovisning har varit en trygg partner i över fem år. De förstår min verksamhet och ger alltid kloka råd. Kan inte tänka mig en bättre byrå.",
    name: "Maria Lindström",
    title: "Ägare, Lindströms Café, Norrtälje",
  },
  {
    quote:
      "Äntligen en redovisningsbyrå som förklarar saker på ett begripligt sätt. Jag känner mig lugn inför varje bokslut tack vare dem.",
    name: "Erik Johansson",
    title: "Snickare & företagare, Östhammar",
  },
  {
    quote:
      "Professionella, snabba och alltid tillgängliga. De har hjälpt mig digitalisera hela min ekonomihantering. Starkt rekommenderat!",
    name: "Anna Bergqvist",
    title: "Konsult, Vaxholm",
  },
];

const Testimonials = () => {
  return (
    <section id="omdomen" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Vad våra kunder säger</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8 flex flex-col">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-display text-base font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
