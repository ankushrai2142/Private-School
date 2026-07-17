import { useEffect, useState } from "react";
import { navLinks, schoolInfo } from "../data/schoolData";
import logo from "../assets/images/LOGO.jpeg";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const whatsappUrl = `https://wa.me/${schoolInfo.contact.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about admission at K.D.Public School, Fazilnagar."
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`navbar-luxury navbar-luxury--enter fixed top-0 left-0 right-0 z-50 bg-school-navy/90 backdrop-blur-xl ${
        scrolled ? "navbar-luxury--scrolled" : "shadow-lg"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-400 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <a href="#home" className="navbar-brand group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-school-gold/20 blur-sm transition-opacity group-hover:opacity-100 opacity-60" />
            <img
              src={logo}
              alt={`${schoolInfo.name} logo`}
              className="navbar-logo-ring relative h-12 w-12 rounded-full object-cover ring-2 ring-school-gold/50 transition-all duration-300 group-hover:ring-school-gold"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-white transition-colors duration-300 group-hover:text-school-gold">
              {schoolInfo.name}
            </p>
            <p className="text-xs text-school-gold/90 transition-all duration-300 group-hover:text-school-gold">
              Fazilnagar, Kushinagar
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-luxury rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-school-gold"
                style={{ animationDelay: `${index * 80 + 400}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="navbar-whatsapp hidden h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:inline-flex"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>

        <button
          type="button"
          className="navbar-menu-btn rounded-lg p-2 text-white transition-colors hover:text-school-gold md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`navbar-mobile-panel border-t border-white/10 bg-school-navy/98 backdrop-blur-xl md:hidden ${
          open ? "navbar-mobile-panel--open" : ""
        }`}
      >
        <div className="navbar-mobile-panel__inner">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar-mobile-link block rounded-lg px-3 py-2.5 text-white/90 hover:bg-white/10 hover:text-school-gold"
                  style={{ transitionDelay: open ? `${index * 60 + 80}ms` : "0ms" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-mobile-link mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                style={{ transitionDelay: open ? `${navLinks.length * 60 + 80}ms` : "0ms" }}
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-luxury__gold-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-school-gold/70 to-transparent" />
    </header>
  );
}
