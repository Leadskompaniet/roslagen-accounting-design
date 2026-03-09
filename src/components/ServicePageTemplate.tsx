import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Quote, Phone, Mail, CheckCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface ServiceTestimonial {
  quote: string;
  name: string;
  title: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: { step: string; description: string }[];
  testimonial: ServiceTestimonial;
  faq: { question: string; answer: string }[];
  icon: React.ReactNode;
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  benefits,
  process,
  testimonial,
  faq,
  icon,
}: ServicePageProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Tack för ditt meddelande! Vi återkommer så snart vi kan.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 section-padding bg-sea-light">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tillbaka till startsidan
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                {icon}
              </div>
              <h1 className="section-title text-3xl md:text-4xl lg:text-5xl">{title}</h1>
            </div>
            <p className="section-subtitle mt-4">{subtitle}</p>
          </div>
        </section>

        {/* Description + Benefits */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Så hjälper vi dig
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                {description}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Det här får du
              </h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-sand-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">Så fungerar det</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((p, i) => (
                <div key={i} className="glass-card p-8 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-semibold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {p.step}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto glass-card p-10 text-center">
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-5" />
            <p className="text-foreground text-lg leading-relaxed italic mb-6">
              "{testimonial.quote}"
            </p>
            <p className="font-display text-base font-semibold text-foreground">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-sm">{testimonial.title}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-sand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-12">Vanliga frågor</h2>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-display font-semibold text-foreground text-sm md:text-base">
                      {item.question}
                    </span>
                    <span className="text-muted-foreground text-lg ml-4">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Contact Form */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">
                Intresserad av {title.toLowerCase()}?
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Kontakta oss för en kostnadsfri konsultation – vi berättar mer om hur vi kan hjälpa just dig.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Namn
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                    placeholder="Ditt namn"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      E-post
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                      placeholder="din@epost.se"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
                      placeholder="070-123 45 67"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none"
                    placeholder="Berätta kort om ditt behov..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-soft"
                >
                  Skicka förfrågan
                </button>
              </form>

              <div className="flex flex-col justify-center gap-8">
                <div className="glass-card p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Föredrar du att ringa?
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">070-053 18 00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">ekonomi@roslagskompaniet.se</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Mån–Fre 08:00–17:00
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Kostnadsfri konsultation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Vi erbjuder alltid ett kostnadsfritt första möte där vi går igenom dina behov och ger dig en tydlig bild av vad vi kan hjälpa dig med.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
