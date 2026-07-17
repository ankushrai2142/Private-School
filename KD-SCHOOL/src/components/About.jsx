import { schoolInfo, aboutImages, galleryImages } from "../data/schoolData";
import useInView from "../hooks/useInView";

export default function About() {
  const { ref: sectionRef, isVisible } = useInView();
  const { ref: galleryRef, isVisible: galleryVisible } = useInView(0.08);

  return (
    <section id="about" ref={sectionRef} className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`reveal-section text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-school-navy sm:text-4xl">
            Welcome to{" "}
            <span className="luxury-gradient-text">{schoolInfo.name}</span>
          </h2>
          <div className={`section-divider ${isVisible ? "is-visible" : ""}`} />
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            {schoolInfo.description}
          </p>
        </div>

        {/* Hero image showcase */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className={`reveal-left relative ${isVisible ? "is-visible" : ""}`}>
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-school-gold/20" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutImages.campus}
                alt="K.D.Public School campus"
                className="h-72 w-full object-cover transition duration-700 hover:scale-105 sm:h-96"
              />
            </div>
            <div className="floating-badge absolute -bottom-6 -right-4 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-8">
              <img
                src={aboutImages.students}
                alt="Students at K.D.Public School"
                className="h-32 w-44 object-cover sm:h-40 sm:w-52"
              />
            </div>
            <div className="floating-badge-delay absolute left-6 top-6 rounded-xl bg-school-navy/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-bold text-school-gold">
                {schoolInfo.rating.score} ★
              </p>
              <p className="text-xs text-white/80">Community Rating</p>
            </div>
          </div>

          <div
            className={`reveal-right lg:pl-8 ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            <h3 className="text-2xl font-bold text-school-navy">
              A Place Where Every Child Shines
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Located in the heart of Fazilnagar, Kushinagar, our school provides
              a warm and inspiring environment where students learn, grow, and
              discover their true potential. From smart classrooms to caring
              teachers — we are committed to excellence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Established", value: "Fazilnagar" },
                { label: "District", value: "Kushinagar" },
                { label: "PIN Code", value: "274401" },
                { label: "State", value: "Uttar Pradesh" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`reveal-card rounded-xl border border-school-gold/20 bg-school-cream p-4 ${
                    isVisible ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-bold text-school-navy">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div
          ref={galleryRef}
          className={`gallery-luxury mt-24 ${galleryVisible ? "is-visible" : ""}`}
        >
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
              Campus Life
            </span>
            <h3 className="mt-2 text-2xl font-bold text-school-navy sm:text-3xl">
              Glimpses of Our School
            </h3>
            <div className={`section-divider ${galleryVisible ? "is-visible" : ""}`} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.title}
                className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-56 w-full object-cover sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy/90 via-school-navy/20 to-transparent transition-opacity duration-500 group-hover:from-school-navy/95" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <h4 className="font-bold text-white">{image.title}</h4>
                  <p className="mt-1 text-xs text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision with images */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div
            className={`reveal-card group relative overflow-hidden rounded-2xl shadow-xl ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <img
              src={aboutImages.classroom}
              alt="Our Mission - classroom learning"
              className="h-full min-h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-navy via-school-navy/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500 group-hover:-translate-y-1">
              <span className="rounded-full bg-school-gold px-3 py-1 text-xs font-bold text-school-navy">
                Our Mission
              </span>
              <p className="mt-4 leading-relaxed text-white/90">
                To provide accessible, quality education that empowers students
                from Fazilnagar, Babu Bazar, and nearby villages with knowledge,
                values, and skills needed to succeed in life.
              </p>
            </div>
          </div>

          <div
            className={`reveal-card group relative overflow-hidden rounded-2xl shadow-xl ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <img
              src={aboutImages.activities}
              alt="Our Vision - student activities"
              className="h-full min-h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-blue via-school-blue/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500 group-hover:-translate-y-1">
              <span className="rounded-full bg-school-gold px-3 py-1 text-xs font-bold text-school-navy">
                Our Vision
              </span>
              <p className="mt-4 leading-relaxed text-white/90">
                To be a leading educational institution in Kushinagar district,
                recognized for academic excellence, character building, and
                community service across the region.
              </p>
            </div>
          </div>
        </div>

        {/* Rankings */}
        <div
          className={`reveal-section relative mt-16 overflow-hidden rounded-2xl ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <img
            src={aboutImages.library}
            alt="School library"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-school-navy/85" />
          <div className="relative p-8 text-white sm:p-10">
            <h3 className="text-xl font-bold text-school-gold">
              School Rankings & Recognition
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "#27", label: schoolInfo.rankings.pincodeRank },
                { value: "Top 16%", label: schoolInfo.rankings.pincodePercentile },
                { value: "#14", label: schoolInfo.rankings.popularityRank },
                { value: "Top 24%", label: schoolInfo.rankings.indiaRank },
              ].map((rank, index) => (
                <div
                  key={rank.value}
                  className={`reveal-card rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm ${
                    isVisible ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <p className="text-2xl font-bold text-school-gold">{rank.value}</p>
                  <p className="mt-1 text-sm text-white/80">{rank.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service areas */}
        <div
          className={`reveal-section mt-16 ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="text-center text-xl font-bold text-school-navy">
            Areas We Serve
          </h3>
          <p className="mt-2 text-center text-sm text-gray-500">
            Proudly educating students from Fazilnagar and surrounding villages
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {schoolInfo.serviceAreas.map((area, index) => (
              <span
                key={area}
                className={`reveal-card rounded-full border border-school-blue/20 bg-school-cream px-4 py-1.5 text-sm text-school-navy transition hover:border-school-gold hover:bg-school-gold/10 ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${600 + index * 40}ms` }}
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
