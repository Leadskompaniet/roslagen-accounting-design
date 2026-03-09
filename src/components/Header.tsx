import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Löpande bokföring", href: "/tjanster/lopande-bokforing" },
  { label: "Bokslut & årsredovisning", href: "/tjanster/bokslut-arsredovisning" },
  { label: "Deklaration", href: "/tjanster/deklaration" },
  { label: "Lönehantering", href: "/tjanster/lonehantering" },
  { label: "Rådgivning", href: "/tjanster/radgivning" },
];

const navLinks = [
  { label: "Om oss", href: "/#om-oss" },
  { label: "Varför oss", href: "/#varfor-oss" },
  { label: "Omdömen", href: "/#omdomen" },
  { label: "Kontakt", href: "/#kontakt" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    // If we're on the homepage and it's an anchor link
    if (location.pathname === "/" && href.startsWith("/#")) {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          Roslags<span className="text-primary">kompaniet</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Tjänster dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Tjänster
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-card border border-border/50 rounded-xl shadow-elevated py-2 animate-fade-in">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#kontakt"
            onClick={() => handleNavClick("/#kontakt")}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Boka konsultation
          </Link>
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
            {/* Mobile Tjänster accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Tjänster
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-border">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#kontakt"
              onClick={() => handleNavClick("/#kontakt")}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium text-center hover:opacity-90 transition-opacity"
            >
              Boka konsultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
