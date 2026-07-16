import { schoolInfo } from "../data/schoolData";

export default function Admission() {
  const steps = [
    {
      step: "01",
      title: "Visit the School",
      description:
        "Visit K.D Public School at Fazilnagar, Kushinagar during office hours to collect the admission form.",
    },
    {
      step: "02",
      title: "Submit Documents",
      description:
        "Submit the filled form along with birth certificate, previous school records, and passport-size photographs.",
    },
    {
      step: "03",
      title: "Confirmation",
      description:
        "After verification, admission is confirmed. Contact the school office for fee details and academic calendar.",
    },
  ];

  return (
    <section id="admission" className="bg-school-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
            Admissions
          </span>
          <h2 className="mt-2 text-3xl font-bold text-school-navy sm:text-4xl">
            Join K.D Public School
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Admissions are open for students seeking quality education in
            Fazilnagar, Kushinagar. Follow these simple steps to enroll your
            child.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-school-gold text-xl font-black text-school-navy">
                {item.step}
              </div>
              <h3 className="mt-6 text-lg font-bold text-school-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-school-navy p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">
              Ready to enroll your child?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Call us today for admission inquiries and school visit appointments.
            </p>
          </div>
          <a
            href={`tel:${schoolInfo.contact.phoneRaw}`}
            className="shrink-0 rounded-full bg-school-gold px-8 py-3 text-sm font-bold text-school-navy transition hover:bg-yellow-400"
          >
            📞 {schoolInfo.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
