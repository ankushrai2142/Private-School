import { useEffect, useRef, useState } from "react";
import { schoolInfo, schoolImages } from "../data/schoolData";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import admissionVideo from "../assets/images/WhatsApp Video 2026-07-16 at 5.52.18 PM.mp4";

const steps = [
  {
    step: "01",
    title: "Visit the School",
    description:
      "Visit K.D.Public School at Fazilnagar, Kushinagar during office hours to collect the admission form.",
    icon: "🏫",
  },
  {
    step: "02",
    title: "Submit Documents",
    description:
      "Submit the filled form along with birth certificate, previous school records, and passport-size photographs.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Confirmation",
    description:
      "After verification, admission is confirmed. Contact the school office for fee details and academic calendar.",
    icon: "✅",
  },
];

const documents = [
  "Birth Certificate",
  "Previous School Records",
  "Passport-size Photographs",
  "Aadhaar Card (Student & Parent)",
  "Transfer Certificate (if applicable)",
];

function useInView(threshold = 0.12) {
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

export default function Admission() {
  const { ref: sectionRef, isVisible } = useInView();

  return (
    <section
      id="admission"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-school-cream via-white to-school-cream py-24"
    >
      {/* Luxury background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-school-gold/5 blur-3xl" />
        <div
          className="absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-school-navy/5 blur-3xl"
          style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-school-gold/20 to-transparent"
          style={{ animation: "shimmer 4s linear infinite" }}
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
            Admissions Open
          </span>
          <h2 className="mt-6 text-3xl font-bold text-school-navy sm:text-5xl">
            Join{" "}
            <span className="bg-gradient-to-r from-school-gold via-amber-300 to-school-gold bg-clip-text text-transparent animate-shimmer">
              K.D.Public School
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
            Begin your child&apos;s journey toward excellence. Admissions are open
            for students seeking quality education in Fazilnagar, Kushinagar.
          </p>
        </div>

        {/* Timeline connector (desktop) */}
        <div className="relative mt-20 hidden lg:block">
          <div
            className={`admission-timeline absolute left-[16.67%] right-[16.67%] top-10 h-0.5 bg-gradient-to-r from-school-gold via-school-navy to-school-gold ${isVisible ? "is-visible" : ""}`}
          />
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:mt-10 lg:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`admission-step admission-card-shine group relative overflow-hidden rounded-3xl border border-school-gold/10 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-school-gold/40 hover:shadow-2xl ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 180 + 400}ms` }}
            >
              {/* Rotating gradient border on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-school-gold via-school-navy to-school-gold opacity-20"
                  style={{ animation: "rotate-border 4s linear infinite" }}
                />
              </div>

              <div className="relative">
                {/* Step badge */}
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 rounded-full bg-school-gold/30 blur-md transition-all group-hover:blur-lg" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-school-gold to-amber-400 text-2xl font-black text-school-navy shadow-xl transition-transform duration-500 group-hover:scale-110">
                    {item.step}
                  </div>
                  <span
                    className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-school-navy text-sm shadow-lg transition-transform duration-300 group-hover:rotate-12"
                    style={{ animation: `float 3s ease-in-out infinite ${index * 0.4}s` }}
                  >
                    {item.icon}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-school-navy transition-colors group-hover:text-school-blue">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                {/* Step indicator dots */}
                <div className="mt-6 flex justify-center gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dot <= index
                          ? "w-6 bg-school-gold"
                          : "w-1.5 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* School video */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
              Campus Tour
            </span>
            <h3 className="mt-2 text-2xl font-bold text-school-navy sm:text-3xl">
              Experience K.D.Public School
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
              Watch a glimpse of our school campus, students, and learning
              environment at Fazilnagar, Kushinagar.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-school-gold/50 via-school-navy/30 to-school-blue/50 opacity-70 blur-sm" />
            <div className="relative overflow-hidden rounded-3xl border border-school-gold/20 bg-school-navy shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
                  <p className="text-sm font-semibold text-white">
                    School Video
                  </p>
                </div>
                <span className="text-xs text-school-gold">K.D.Public School</span>
              </div>
              <video
                className="aspect-video w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                poster={schoolImages.campus}
              >
                <source src={admissionVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Documents + Info panel */}
        <div
          className={`mt-20 grid gap-8 lg:grid-cols-2 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Documents checklist */}
          <div className="overflow-hidden rounded-3xl border border-school-gold/15 bg-gradient-to-br from-school-navy to-school-blue p-8 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-school-gold/20 text-2xl">
                📄
              </div>
              <div>
                <h3 className="text-xl font-bold text-school-gold">
                  Required Documents
                </h3>
                <p className="text-sm text-white/60">
                  Keep these ready for a smooth admission
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {documents.map((doc, index) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-school-gold/30 hover:bg-white/10"
                  style={{
                    animation: isVisible
                      ? `fade-up 0.5s ease-out ${index * 0.1 + 0.8}s forwards`
                      : "none",
                    opacity: isVisible ? undefined : 0,
                  }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-school-gold/20 text-xs font-bold text-school-gold">
                    ✓
                  </span>
                  <span className="text-sm text-white/90">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: "🕐",
                title: "Office Hours",
                detail: "Monday – Saturday, 9:00 AM – 6:00 PM",
              },
              {
                icon: "📍",
                title: "Location",
                detail: schoolInfo.address.full,
              },
              {
                icon: "🎓",
                title: "Classes Offered",
                detail: "Primary to High School(Class I – X)",
              },
            ].map((info, index) => (
              <div
                key={info.title}
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-school-gold/30 hover:shadow-lg"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-school-cream text-xl transition-transform duration-300 group-hover:scale-110">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-school-navy">{info.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luxury CTA */}
        <div
          className={`relative mt-16 overflow-hidden rounded-3xl transition-all duration-1000 delay-900 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-blue to-school-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.15),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-6 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left lg:px-12 lg:py-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-school-gold">
                Limited Seats Available
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Ready to enroll your child?
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/70">
                Call us today for admission inquiries and school visit
                appointments. Our team is here to guide you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={`tel:${schoolInfo.contact.phoneRaw}`}
                className="admission-cta-glow group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-school-gold to-amber-400 px-8 py-4 text-base font-bold text-school-navy transition hover:scale-105"
              >
                <span className="text-xl transition-transform group-hover:rotate-12">
                  📞
                </span>
                {schoolInfo.contact.phone}
              </a>
              <a
                href={`https://wa.me/${schoolInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-green-400"
              >
                <WhatsAppIcon className="h-4 w-4 text-green-400" />
                Or message us on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
