import { schoolInfo, stats, schoolImages } from "../data/schoolData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-school-navy via-school-blue to-school-navy pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-school-gold blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full border border-school-gold/40 bg-school-gold/10 px-4 py-1 text-sm font-medium text-school-gold">
            {schoolInfo.rating.label}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {schoolInfo.name}
          </h1>

          <p className="mt-2 text-lg font-medium text-school-gold sm:text-xl">
            Fazilnagar, Kushinagar (U.P.)
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {schoolInfo.tagline}. Providing quality education and holistic
            development for students across Fazilnagar and surrounding villages in
            Kushinagar district.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#admission"
              className="rounded-full bg-school-gold px-8 py-3 text-sm font-bold text-school-navy shadow-lg transition hover:bg-yellow-400 hover:shadow-xl"
            >
              Apply for Admission
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-school-gold hover:text-school-gold"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-school-gold">
                {schoolInfo.rating.score}
              </p>
              <p className="text-xs text-white/60">Google Rating</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-school-gold">274401</p>
              <p className="text-xs text-white/60">PIN Code</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-school-gold">U.P.</p>
              <p className="text-xs text-white/60">Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-school-gold/20" />
            <img
              src={schoolImages.campus}
              alt="K.D Public School campus"
              className="relative h-80 w-full rounded-3xl object-cover shadow-2xl sm:h-96"
            />
            <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <img
                src={schoolImages.assembly}
                alt="Students at K.D Public School"
                className="h-28 w-36 object-cover sm:h-32 sm:w-44"
              />
            </div>

            <div className="absolute left-4 top-4 rounded-xl bg-school-navy/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm">
              <p className="text-xs font-medium text-school-gold">CBSE School</p>
              <p className="text-sm font-bold">Fazilnagar</p>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-medium text-gray-500">Popularity Rank</p>
              <p className="text-lg font-bold text-school-navy">
                {schoolInfo.rankings.popularityRank}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-school-gold sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
