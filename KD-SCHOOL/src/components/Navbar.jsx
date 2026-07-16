import { useState } from "react";
import { navLinks, schoolInfo } from "../data/schoolData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-school-navy/95 backdrop-blur-md shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-school-gold text-lg font-bold text-school-navy">
            KD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-white">
              {schoolInfo.name}
            </p>
            <p className="text-xs text-school-gold">Fazilnagar, Kushinagar</p>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-school-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${schoolInfo.contact.phoneRaw}`}
          className="hidden rounded-full bg-school-gold px-5 py-2 text-sm font-semibold text-school-navy transition hover:bg-yellow-400 md:inline-block"
        >
          Call Now
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-school-navy px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${schoolInfo.contact.phoneRaw}`}
                className="mt-2 block rounded-full bg-school-gold px-5 py-2 text-center text-sm font-semibold text-school-navy"
              >
                Call {schoolInfo.contact.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
