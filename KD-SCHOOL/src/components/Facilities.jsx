import { useEffect, useRef, useState } from "react";
import { facilities } from "../data/schoolData";

const accentColors = [
  "from-school-navy to-school-blue",
  "from-school-blue to-school-navy",
  "from-amber-500 to-school-gold",
  "from-emerald-600 to-teal-500",
  "from-violet-600 to-school-blue",
  "from-rose-500 to-orange-400",
];

function useInView(threshold = 0.15) {
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

export default function Facilities() {
  const { ref: sectionRef, isVisible } = useInView();

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="relative overflow-hidden bg-school-cream py-20"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 animate-float rounded-full bg-school-gold/10 blur-3xl" />
        <div
          className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-school-blue/10 blur-3xl"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-school-navy/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full border border-school-gold/30 bg-school-gold/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-school-gold">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-school-navy sm:text-4xl">
            Facilities &{" "}
            <span className="bg-gradient-to-r from-school-gold via-amber-400 to-school-gold bg-clip-text text-transparent animate-shimmer">
              Features
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            K.D Public School offers a supportive learning environment with
            modern facilities designed for the complete development of every
            student.
          </p>
        </div>

        {/* Highlight strip */}
        <div
          className={`mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-6 rounded-2xl border border-school-gold/20 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-sm transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {[
            { value: "6+", label: "Core Facilities" },
            { value: "100%", label: "Student Focus" },
            { value: "24/7", label: "Safe Campus" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-6">
              {i > 0 && <div className="hidden h-8 w-px bg-school-gold/30 sm:block" />}
              <div className="text-center">
                <p className="text-xl font-bold text-school-navy">{item.value}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facility cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`facility-card group relative overflow-hidden rounded-2xl border border-transparent bg-white p-6 shadow-sm hover:-translate-y-2 hover:border-school-gold/30 hover:shadow-xl ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Gradient top accent */}
              <div
                className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${accentColors[index % accentColors.length]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-school-gold/0 blur-2xl transition-all duration-500 group-hover:bg-school-gold/20" />

              <div className="relative flex items-start gap-4">
                <div className="relative">
                  <div className="facility-icon-ring absolute inset-0 rounded-2xl bg-school-gold/20" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-school-navy/5 to-school-blue/10 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:from-school-gold/20 group-hover:to-school-gold/5">
                    <span className="animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                      {facility.icon}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-school-navy transition-colors group-hover:text-school-blue">
                      {facility.title}
                    </h3>
                    <span className="text-xs font-bold text-school-gold/40 transition-colors group-hover:text-school-gold">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>

              {/* Animated bottom line */}
              <div className="facility-line mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-school-gold to-school-navy" />

              {/* Corner decoration */}
              <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full border border-school-gold/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          className={`mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-school-navy via-school-blue to-school-navy p-px transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-school-navy/95 px-6 py-6 sm:flex-row sm:px-8">
            <p className="text-center text-sm text-white/80 sm:text-left">
              <span className="font-semibold text-school-gold">
                Everything your child needs
              </span>{" "}
              — from smart classrooms to a safe, caring campus in Fazilnagar.
            </p>
            <a
              href="#admission"
              className="shrink-0 rounded-full bg-school-gold px-6 py-2.5 text-sm font-bold text-school-navy transition hover:scale-105 hover:bg-yellow-400"
            >
              Enroll Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
