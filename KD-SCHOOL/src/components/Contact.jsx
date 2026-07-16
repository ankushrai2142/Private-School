import { schoolInfo } from "../data/schoolData";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-school-gold">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold text-school-navy sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Visit us at Fazilnagar, Kushinagar or reach out by phone for
            admissions, inquiries, and more information.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-school-cream p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-bold text-school-navy">Address</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {schoolInfo.address.line1}
                    <br />
                    {schoolInfo.address.line2}
                    <br />
                    PIN: {schoolInfo.address.pincode}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-school-cream p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-bold text-school-navy">Phone</h3>
                  <a
                    href={`tel:${schoolInfo.contact.phoneRaw}`}
                    className="mt-1 block text-sm font-semibold text-school-blue hover:underline"
                  >
                    {schoolInfo.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-school-cream p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold text-school-navy">Rating</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {schoolInfo.rating.score} out of 5 ({schoolInfo.rating.reviews}{" "}
                    reviews)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-school-cream p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏫</span>
                <div>
                  <h3 className="font-bold text-school-navy">Institution</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {schoolInfo.fullName}
                    <br />
                    Also known as: {schoolInfo.alternateName}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${schoolInfo.contact.phoneRaw}`}
                className="rounded-full bg-school-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-school-blue"
              >
                Call School
              </a>
              <a
                href={`https://wa.me/${schoolInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-green-600 px-6 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
              >
                WhatsApp
              </a>
              <a
                href={schoolInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-school-gold px-6 py-2.5 text-sm font-semibold text-school-navy transition hover:bg-school-gold/10"
              >
                View on Google
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="K.D Public School Location Map"
              src={schoolInfo.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-school-navy">
            Nearby Educational Institutions
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {schoolInfo.nearbySchools.map((school) => (
              <div
                key={school.name}
                className="rounded-xl border border-gray-100 bg-school-cream p-5"
              >
                <h4 className="font-semibold text-school-navy">{school.name}</h4>
                <p className="mt-1 text-xs text-gray-500">{school.address}</p>
                <p className="mt-2 text-sm font-medium text-school-gold">
                  ★ {school.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
