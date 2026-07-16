import { useEffect, useRef, useState } from "react";
import { schoolInfo, navLinks } from "../data/schoolData";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const contactItems = [
  { icon: "📍", text: schoolInfo.address.full },
  { icon: "📞", text: schoolInfo.contact.phone, href: `tel:${schoolInfo.contact.phoneRaw}` },
  { icon: "📌", text: `PIN: ${schoolInfo.address.pincode}` },
  { icon: "🏛️", text: "District: Kushinagar, U.P." },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { ref: footerRef, isVisible } = useInView();

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-b from-school-navy via-[#0a1d35] to-school-navy text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-school-gold/10 blur-3xl"
          style={{ animation: "float 5s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-school-blue/20 blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite 1s" }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-school-gold/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div
          className={`mb-14 overflow-hidden rounded-2xl border border-school-gold/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-1000 sm:p-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-school-gold">
                K.D Public School
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                CBSE Education in Fazilnagar, Kushinagar
              </p>
              <p className="mt-1 text-sm text-white/60">
                {schoolInfo.rating.label}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${schoolInfo.contact.phoneRaw}`}
                className="admission-cta-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-school-gold to-amber-400 px-5 py-2.5 text-sm font-bold text-school-navy transition hover:scale-105"
              >
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/${schoolInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-green-500/50 bg-green-500/10 px-5 py-2.5 text-sm font-semibold text-green-400 transition hover:scale-105 hover:bg-green-500/20"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div
            className={`lg:col-span-1 transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-school-gold/30 blur-md" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-school-gold to-amber-400 text-xl font-black text-school-navy shadow-lg">
                  KD
                </div>
              </div>
              <div>
                <p className="text-lg font-bold">{schoolInfo.name}</p>
                <p className="text-xs text-school-gold">Fazilnagar, Kushinagar</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Quality CBSE education for holistic development. Serving Fazilnagar
              and surrounding villages in Kushinagar, Uttar Pradesh.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-school-gold/30 bg-school-gold/10 px-3 py-1 text-xs font-semibold text-school-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-school-gold" />
              CBSE Affiliated
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-school-gold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-school-gold"
                  >
                    <span className="h-px w-0 bg-school-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                    <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-school-gold">
              Contact Info
            </h4>
            <ul className="mt-5 space-y-4">
              {contactItems.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 text-base">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="transition hover:text-school-gold">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Map link + institution */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-school-gold">
              Find Us
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {schoolInfo.alternateName}
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={schoolInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-school-gold/30 hover:bg-white/10"
              >
                <span className="text-lg">🗺️</span>
                <span className="text-white/80 transition group-hover:text-school-gold">
                  View on Google Maps
                </span>
              </a>
              <a
                href="#admission"
                className="group flex items-center gap-3 rounded-xl border border-school-gold/20 bg-school-gold/10 px-4 py-3 text-sm font-semibold text-school-gold transition hover:bg-school-gold/20"
              >
                <span className="text-lg">🎓</span>
                Apply for Admission →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-14 border-t border-white/10 pt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-school-gold/30 to-transparent" />
          <div className="flex flex-col items-center gap-3 text-center text-sm text-white/45 sm:flex-row sm:justify-between sm:text-left">
            <p>
              © {year} {schoolInfo.fullName}. All rights reserved.
            </p>
            <p>
              Fazilnagar, Kushinagar, Uttar Pradesh — PIN {schoolInfo.address.pincode}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
