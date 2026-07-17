import { useEffect, useRef, useState } from "react";
import { academics, schoolInfo } from "../data/schoolData";

const programMeta = [
  {
    icon: "🧸",
    color: "from-pink-400 to-school-gold",
    subjects: ["Nursery", "LKG", "UKG", "Rhymes & Stories", "Art & Play"],
  },
  {
    icon: "🌟",
    color: "from-amber-400 to-school-gold",
    subjects: ["Hindi", "English", "Mathematics", "EVS", "Art & Craft"],
  },
  {
    icon: "📖",
    color: "from-school-blue to-school-navy",
    subjects: ["Science", "Social Studies", "Computer", "Sanskrit", "Sports"],
  },
];

const highlights = [
  { icon: "📚", label: "UP Board NCERT Pattern" },
  { icon: "👨‍🏫", label: "Expert Faculty" },
  { icon: "🏆", label: "Result Oriented" },
  { icon: "🎨", label: "Co-curricular Activities" },
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

export default function Academics() {
  const { ref: sectionRef, isVisible } = useInView();

  return (
    <section
      id="academics"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-school-blue/5 blur-3xl" />
        <div
          className="absolute -left-16 bottom-20 h-80 w-80 rounded-full bg-school-gold/8 blur-3xl"
          style={{ animation: "float 4.5s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,35,64,0.03),transparent_70%)]" />
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
            Academics
          </span>
          <h2 className="mt-6 text-3xl font-bold text-school-navy sm:text-5xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-school-gold via-amber-300 to-school-gold bg-clip-text text-transparent animate-shimmer">
              Programs
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
            Structured UP Board NCERT Pattern programs from pre-primary to middle
            school for holistic student development.
          </p>
        </div>

        {/* Highlight pills */}
        <div
          className={`mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {highlights.map((item, index) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-school-navy/10 bg-school-cream px-4 py-2 text-sm font-medium text-school-navy transition-all duration-300 hover:border-school-gold/40 hover:bg-school-gold/10"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span>{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>

        {/* Program cards */}
        <div
          className={`mt-16 grid gap-8 ${
            academics.length === 2
              ? "md:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
          {academics.map((program, index) => {
            const meta = programMeta[index] ?? programMeta[0];

            return (
              <div
                key={program.level}
                className={`academic-card admission-card-shine group relative overflow-hidden rounded-3xl border border-school-gold/10 bg-gradient-to-b from-white to-school-cream p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-school-gold/30 hover:shadow-2xl ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <div className="academic-glow pointer-events-none absolute inset-0 bg-gradient-to-br from-school-gold/5 via-transparent to-school-blue/5 opacity-0 transition-opacity duration-500" />

                <div className="absolute -right-2 -top-2 text-[7rem] font-black leading-none text-school-navy/[0.04] transition-all duration-500 group-hover:text-school-gold/10">
                  {index + 1}
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.color} text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      style={{ animation: `float 3.5s ease-in-out infinite ${index * 0.5}s` }}
                    >
                      {meta.icon}
                    </div>
                    <span className="rounded-full bg-school-navy/5 px-3 py-1 text-xs font-bold text-school-navy/50 transition-colors group-hover:bg-school-gold/20 group-hover:text-school-navy">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="mt-6 inline-block rounded-full border border-school-gold/30 bg-school-gold/10 px-4 py-1 text-xs font-bold text-school-navy">
                    {program.grades}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-school-navy transition-colors group-hover:text-school-blue">
                    {program.level}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {program.description}
                  </p>

                  <div className="mt-6 border-t border-school-gold/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Key Subjects
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {meta.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-school-navy shadow-sm ring-1 ring-school-navy/5 transition-all duration-300 group-hover:ring-school-gold/30"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${meta.color} transition-all duration-1000`}
                      style={{
                        width: isVisible ? `${(index + 1) * (100 / academics.length)}%` : "0%",
                        transitionDelay: `${index * 200 + 800}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curriculum overview */}
        <div
          className={`mt-16 grid gap-6 lg:grid-cols-3 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            {
              value: "I – VIII",
              label: "Classes Covered",
              icon: "🎓",
            },
            {
              value: schoolInfo.board,
              label: "Affiliated Curriculum",
              icon: "📜",
            },
            {
              value: "100%",
              label: "Holistic Approach",
              icon: "🌱",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/30 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-school-cream text-2xl transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-school-navy">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* School banner */}
        <div
          className={`relative mt-16 overflow-hidden rounded-3xl transition-all duration-1000 delay-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-blue to-school-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.2),transparent_60%)]" />
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-school-gold/10 blur-2xl"
            style={{ animation: "float 4s ease-in-out infinite" }}
          />

          <div className="relative px-8 py-10 text-center sm:px-12 sm:py-12">
            <span className="inline-block rounded-full border border-school-gold/30 bg-school-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-school-gold">
              {schoolInfo.boardShort}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              <span className="text-school-gold">{schoolInfo.name}</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Offering quality education following UP Board NCERT Pattern from
              pre-primary through middle school levels for students in the Fazilnagar,
              Babu Bazar region.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#admission"
                className="admission-cta-glow rounded-full bg-gradient-to-r from-school-gold to-amber-400 px-8 py-3 text-sm font-bold text-school-navy transition hover:scale-105"
              >
                Apply for Admission →
              </a>
              <a
                href={`tel:${schoolInfo.contact.phoneRaw}`}
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-school-gold hover:text-school-gold"
              >
                📞 {schoolInfo.contact.phone}
              </a>
              <a
                href={`tel:${schoolInfo.contact.phone2Raw}`}
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-school-gold hover:text-school-gold"
              >
                📞 {schoolInfo.contact.phone2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
