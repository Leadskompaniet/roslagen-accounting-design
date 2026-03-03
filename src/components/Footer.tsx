const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-xl font-semibold">
              Roslagen<span className="opacity-60">Redovisning</span>
            </p>
            <p className="mt-3 text-sm opacity-60 leading-relaxed">
              Din lokala redovisningsbyrå i Roslagen. Trygg, personlig och digital bokföring
              för småföretagare.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-3">Tjänster</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>Löpande bokföring</li>
              <li>Bokslut & årsredovisning</li>
              <li>Deklaration</li>
              <li>Lönehantering</li>
              <li>Rådgivning</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>0176-123 45</li>
              <li>info@roslagenredovisning.se</li>
              <li>Hamnvägen 12, Norrtälje</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Roslagen Redovisning. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
