import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar lang="en" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-brand-navy text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/car_interior_hero_bg.png"
              alt="Car interior"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-brand-orange text-white mb-6">
                  NJ MVC Certified Provider
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Get Back on the Road. Fast & Hassle-Free.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                  Top-rated ignition interlock installation in North Jersey. No hidden fees, bilingual support, and same-day appointments available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#intake-form" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors">
                    Schedule Installation
                  </a>
                  <a href="tel:8001234567" className="inline-flex justify-center items-center px-8 py-3 border-2 border-white text-base font-bold rounded-md text-brand-navy bg-white hover:bg-gray-100 transition-colors">
                    Call (800) 123-4567
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <Image
                  src="/nj_mvc_certified_badge.png"
                  alt="NJ MVC Certified"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Centers Grid */}
        <section className="py-20 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Convenient North Jersey Locations</h2>
              <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                We have certified installation centers across New Jersey to get you serviced quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { city: "Paterson", address: "105 Columbia Ave, Paterson, NJ" },
                { city: "Passaic", address: "Passaic Service Center, NJ" },
                { city: "Monmouth Junction", address: "2140 US-130 N, Monmouth Junction, NJ" },
                { city: "Toms River", address: "2133 Lakewood Rd, Unit 101, Toms River, NJ" },
                { city: "Little Falls", address: "325 Main St, Little Falls, NJ" },
                { city: "Jersey City", address: "777 Communipaw Ave, Jersey City, NJ" },
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{loc.city}</h3>
                  <p className="text-brand-muted mb-4">{loc.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer" className="text-brand-orange font-semibold hover:underline">
                    Get Directions &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intake Form Section */}
        <section id="intake-form" className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Ready to Schedule?</h2>
              <p className="text-lg text-brand-muted">
                Fill out the form below and our team will contact you within 15 minutes to confirm your appointment.
              </p>
            </div>
            
            <div className="bg-brand-bg p-4 md:p-8 rounded-xl shadow-inner border border-gray-200 min-h-[600px] relative">
              <iframe 
                src="https://forms.zohopublic.com/sharkunlock/form/Intake/formperma/placeholder" 
                className="w-full h-[600px] border-none rounded relative z-10"
                title="Shark Unlock Intake Form"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center z-0 text-brand-muted">
                Loading secure intake form...
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
