import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-xl font-semibold">
              Roslagskompaniet
            </p>
            <p className="mt-3 text-sm opacity-60 leading-relaxed">
              Din lokala redovisningsbyrå i Roslagen. Trygg, personlig och digital bokföring
              för småföretagare.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-3">Tjänster</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><Link to="/tjanster/lopande-bokforing" className="hover:opacity-100 transition-opacity">Löpande bokföring</Link></li>
              <li><Link to="/tjanster/bokslut-arsredovisning" className="hover:opacity-100 transition-opacity">Bokslut & årsredovisning</Link></li>
              <li><Link to="/tjanster/deklaration" className="hover:opacity-100 transition-opacity">Deklaration</Link></li>
              <li><Link to="/tjanster/lonehantering" className="hover:opacity-100 transition-opacity">Lönehantering</Link></li>
              <li><Link to="/tjanster/radgivning" className="hover:opacity-100 transition-opacity">Rådgivning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>070-053 18 00</li>
              <li>ekonomi@roslagskompaniet.se</li>
              <li>Sturegatan 20c, Sundbyberg</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Roslagskompaniet. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
