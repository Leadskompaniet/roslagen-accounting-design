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
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sea-light to-sand overflow-hidden shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-display text-6xl md:text-7xl font-bold text-primary/20">15+</p>
                  <p className="font-display text-xl text-foreground mt-2">års erfarenhet</p>
                  <div className="w-16 h-px bg-primary/30 mx-auto mt-4" />
                  <p className="text-muted-foreground text-sm mt-4">
                    Hundratals nöjda kunder i Roslagen och Norrtälje
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
