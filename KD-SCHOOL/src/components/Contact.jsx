import { useEffect, useRef, useState } from "react";
import { schoolInfo } from "../data/schoolData";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const contactDetails = [
  {
    icon: "📍",
    title: "Address",
    content: (
      <>
        {schoolInfo.address.line1}
        <br />
        {schoolInfo.address.line2}
        <br />
        PIN: {schoolInfo.address.pincode}
      </>
    ),
    color: "from-school-navy to-school-blue",
  },
  {
    icon: "📞",
    title: "Phone",
    content: (
      <a
        href={`tel:${schoolInfo.contact.phoneRaw}`}
        className="font-semibold text-school-blue transition hover:text-school-gold"
      >
        {schoolInfo.contact.phone}
      </a>
    ),
    color: "from-school-gold to-amber-400",
  },
  {
    icon: "⭐",
    title: "Rating",
    content: (
      <>
        <span className="font-bold text-school-gold">
          {schoolInfo.rating.score} ★
        </span>{" "}
        out of 5 ({schoolInfo.rating.reviews} reviews)
      </>
    ),
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: "🏫",
    title: "Institution",
    content: schoolInfo.fullName,
    color: "from-violet-600 to-school-blue",
  },
];

const quickInfo = [
  { icon: "🕐", label: "Mon – Sat", value: "9 AM – 6 PM" },
  { icon: "📚", label: "Board", value: "CBSE" },
  { icon: "📌", label: "District", value: "Kushinagar" },
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

export default function Contact() {
  const { ref: sectionRef, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-school-cream to-white py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-school-gold/8 blur-3xl" />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-school-navy/5 blur-3xl"
          style={{ animation: "float 5s ease-in-out infinite 1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-school-gold/40 bg-school-gold/10 px-5 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-school-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-school-gold" />
            Get in Touch
          </span>
          <h2 className="mt-6 text-3xl font-bold text-school-navy sm:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-school-gold via-amber-300 to-school-gold bg-clip-text text-transparent animate-shimmer">
              Us
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
            Visit us at Fazilnagar, Kushinagar or reach out by phone for
            admissions, inquiries, and more information.
          </p>
        </div>

        {/* Quick info strip */}
        <div
          className={`mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-6 rounded-2xl border border-school-gold/15 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {quickInfo.map((item, index) => (
            <div key={item.label} className="flex items-center gap-6">
              {index > 0 && (
                <div className="hidden h-8 w-px bg-school-gold/20 sm:block" />
              )}
              <div className="flex items-center gap-2 text-center">
                <span className="text-lg">{item.icon}</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="text-sm font-bold text-school-navy">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="space-y-5">
            {contactDetails.map((item, index) => (
              <div
                key={item.title}
                className={`contact-card admission-card-shine group flex items-start gap-5 overflow-hidden rounded-2xl border border-school-gold/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/30 hover:shadow-xl ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 120 + 300}ms` }}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  style={{ animation: `float 3.5s ease-in-out infinite ${index * 0.4}s` }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-school-navy transition-colors group-hover:text-school-blue">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <div
              className={`flex flex-wrap gap-3 pt-2 transition-all duration-700 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <a
                href={`tel:${schoolInfo.contact.phoneRaw}`}
                className="admission-cta-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-school-navy to-school-blue px-6 py-3 text-sm font-bold text-white transition hover:scale-105"
              >
                📞 Call School
              </a>
              <a
                href={`https://wa.me/${schoolInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 px-6 py-3 text-sm font-semibold text-green-700 transition hover:scale-105 hover:bg-green-50"
              >
                <WhatsAppIcon className="h-5 w-5 text-green-600" />
                WhatsApp
              </a>
              <a
                href={schoolInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-school-gold px-6 py-3 text-sm font-semibold text-school-navy transition hover:scale-105 hover:bg-school-gold/10"
              >
                🗺️ Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className={`contact-map-frame relative ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-school-gold/40 via-school-navy/20 to-school-blue/40 opacity-60 blur-sm" />
            <div className="relative overflow-hidden rounded-3xl border border-school-gold/20 bg-white p-2 shadow-2xl">
              <div className="flex items-center justify-between rounded-t-2xl bg-school-navy px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-school-gold" />
                  <p className="text-sm font-semibold text-white">
                    Find Us on Map
                  </p>
                </div>
                <span className="text-xs text-school-gold">Fazilnagar, 274401</span>
              </div>
              <iframe
                title="K.D.Public School Location Map"
                src={schoolInfo.mapEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-b-2xl"
              />
            </div>

            {/* Map pin decoration */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-school-gold/20 bg-white px-4 py-2.5 shadow-lg"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <span className="text-lg">📍</span>
              <div>
                <p className="text-xs font-bold text-school-navy">K.D.Public School</p>
                <p className="text-[10px] text-gray-400">Kushinagar, U.P.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby schools */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
              In the Area
            </span>
            <h3 className="mt-2 text-2xl font-bold text-school-navy sm:text-3xl">
              Nearby Educational Institutions
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {schoolInfo.nearbySchools.map((school, index) => (
              <div
                key={school.name}
                className="academic-card group overflow-hidden rounded-2xl border border-school-gold/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-school-gold/30 hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 120 + 900}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-school-cream text-lg transition-transform group-hover:scale-110">
                    🏫
                  </div>
                  <span className="rounded-full bg-school-gold/10 px-2.5 py-0.5 text-xs font-bold text-school-gold">
                    ★ {school.rating}
                  </span>
                </div>
                <h4 className="mt-4 font-bold text-school-navy transition-colors group-hover:text-school-blue">
                  {school.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {school.address}
                </p>
                <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-school-gold to-school-navy transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`relative mt-16 overflow-hidden rounded-3xl transition-all duration-1000 delay-900 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-blue to-school-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.15),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-4 px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-school-gold">
                We&apos;re Here to Help
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Have questions? Call or visit us today!
              </p>
            </div>
            <a
              href={`tel:${schoolInfo.contact.phoneRaw}`}
              className="admission-cta-glow shrink-0 rounded-full bg-gradient-to-r from-school-gold to-amber-400 px-8 py-3 text-sm font-bold text-school-navy transition hover:scale-105"
            >
              📞 {schoolInfo.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
