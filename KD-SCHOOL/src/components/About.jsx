import { schoolInfo } from "../data/schoolData";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-school-navy sm:text-4xl">
            Welcome to {schoolInfo.name}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            {schoolInfo.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-school-cream p-8">
            <h3 className="text-xl font-bold text-school-navy">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To provide accessible, quality education that empowers students
              from Fazilnagar, Banbira, and nearby villages with knowledge,
              values, and skills needed to succeed in life. We believe every
              child deserves a nurturing environment where learning is engaging
              and holistic development is prioritized.
            </p>
          </div>

          <div className="rounded-2xl bg-school-cream p-8">
            <h3 className="text-xl font-bold text-school-navy">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To be a leading educational institution in Kushinagar district,
              recognized for academic excellence, character building, and
              community service. We aim to shape responsible citizens who
              contribute positively to society and the nation.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-school-gold/20 bg-gradient-to-r from-school-navy to-school-blue p-8 text-white">
          <h3 className="text-xl font-bold text-school-gold">School Rankings & Recognition</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold text-school-gold">#27</p>
              <p className="mt-1 text-sm text-white/80">
                {schoolInfo.rankings.pincodeRank}
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold text-school-gold">Top 16%</p>
              <p className="mt-1 text-sm text-white/80">
                {schoolInfo.rankings.pincodePercentile}
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold text-school-gold">#14</p>
              <p className="mt-1 text-sm text-white/80">
                {schoolInfo.rankings.popularityRank}
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold text-school-gold">Top 24%</p>
              <p className="mt-1 text-sm text-white/80">
                {schoolInfo.rankings.indiaRank}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-xl font-bold text-school-navy">
            Areas We Serve
          </h3>
          <p className="mt-2 text-center text-sm text-gray-500">
            Proudly educating students from Fazilnagar and surrounding villages
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {schoolInfo.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-school-blue/20 bg-school-cream px-4 py-1.5 text-sm text-school-navy"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
