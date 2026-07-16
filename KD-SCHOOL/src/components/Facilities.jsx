import { facilities } from "../data/schoolData";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-school-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-school-navy sm:text-4xl">
            Facilities & Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            K.D Public School offers a supportive learning environment with
            modern facilities designed for the complete development of every
            student.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-school-navy/5 text-2xl transition group-hover:bg-school-gold/20">
                {facility.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-school-navy">
                {facility.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
