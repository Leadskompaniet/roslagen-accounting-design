import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Roslagen skärgård i morgonljus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <h1
          className="section-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Trygg bokföring
          <br />
          <span className="text-primary">i Roslagen</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Personlig redovisning med digital kompetens. Vi hjälper småföretagare i
          Roslagen att fokusera på det som verkligen betyder något&nbsp;–&nbsp;din verksamhet.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#kontakt"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-base font-medium hover:opacity-90 transition-opacity shadow-soft"
          >
            Boka kostnadsfri konsultation
          </a>
          <a
            href="#tjanster"
            className="text-foreground border border-border px-8 py-3.5 rounded-lg text-base font-medium hover:bg-muted transition-colors"
          >
            Våra tjänster
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
