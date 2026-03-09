const About = () => {
  return (
    <section id="om-oss" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2 className="section-title">Lokalt förankrade<br />i Roslagen</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vi är en redovisningsbyrå med rötter i Roslagen. Med gedigen erfarenhet och
                en genuin passion för att hjälpa lokala företagare bygger vi långsiktiga
                relationer baserade på förtroende och transparens.
              </p>
              <p>
                Hos oss får du en personlig kontakt som verkligen lär känna din verksamhet.
                Vi kombinerar traditionell omtanke med moderna digitala verktyg för att ge
                dig den bästa möjliga servicen.
              </p>
              <p>
                Oavsett om du driver ett enmansföretag eller ett växande småföretag – vi
                finns här för att stötta dig i varje steg.
              </p>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img
                src={therese}
                alt="Therese Lindén – Roslagskompaniet"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="font-display text-lg font-semibold text-primary-foreground">Therese Lindén</p>
                <p className="text-primary-foreground/70 text-sm">20 års erfarenhet inom redovisning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
