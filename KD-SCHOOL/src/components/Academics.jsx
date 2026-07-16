import { academics } from "../data/schoolData";

export default function Academics() {
  return (
    <section id="academics" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
            Academics
          </span>
          <h2 className="mt-2 text-3xl font-bold text-school-navy sm:text-4xl">
            Academic Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Structured programs from primary to intermediate level, aligned with
            Uttar Pradesh Board standards.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {academics.map((program, index) => (
            <div
              key={program.level}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-school-cream p-8"
            >
              <div className="absolute -right-4 -top-4 text-8xl font-black text-school-navy/5">
                {index + 1}
              </div>
              <span className="inline-block rounded-full bg-school-gold/20 px-3 py-1 text-xs font-semibold text-school-navy">
                {program.grades}
              </span>
              <h3 className="mt-4 text-xl font-bold text-school-navy">
                {program.level}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-school-navy p-8 text-center text-white">
          <h3 className="text-xl font-bold text-school-gold">
            Also Known As: K.D Public Intermediate College
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
            The institution is recognized locally as both K.D Public School and
            K.D Public Intermediate College, offering education from primary
            through intermediate levels for students in the Fazilnagar region.
          </p>
        </div>
      </div>
    </section>
  );
}
