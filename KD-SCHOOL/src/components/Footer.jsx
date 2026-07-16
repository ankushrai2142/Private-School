import { schoolInfo } from "../data/schoolData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-school-navy py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-school-gold text-lg font-bold text-school-navy">
                KD
              </div>
              <div>
                <p className="font-bold">{schoolInfo.name}</p>
                <p className="text-xs text-school-gold">Fazilnagar, Kushinagar</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Quality education for holistic development. Serving Fazilnagar and
              surrounding villages in Kushinagar, Uttar Pradesh.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-school-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-school-gold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-school-gold">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-school-gold">
                  Academics
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-school-gold">
                  Admission
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-school-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-school-gold">Contact Info</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{schoolInfo.address.full}</li>
              <li>
                <a
                  href={`tel:${schoolInfo.contact.phoneRaw}`}
                  className="hover:text-school-gold"
                >
                  {schoolInfo.contact.phone}
                </a>
              </li>
              <li>PIN: {schoolInfo.address.pincode}</li>
              <li>District: Kushinagar, U.P.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            © {year} {schoolInfo.fullName}. All rights reserved.
          </p>
          <p className="mt-1">
            Fazilnagar, Kushinagar, Uttar Pradesh — PIN {schoolInfo.address.pincode}
          </p>
        </div>
      </div>
    </footer>
  );
}
