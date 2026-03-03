import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Varför oss", href: "#varfor-oss" },
  { label: "Omdömen", href: "#omdomen" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          Roslagen<span className="text-primary">Redovisning</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Boka konsultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Meny"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-background border-b border-border px-6 pb-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium text-center hover:opacity-90 transition-opacity"
            >
              Boka konsultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
