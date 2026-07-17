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
              src="/sharkunlock-website/car_interior_hero_bg.png"
              alt="Car interior"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(242,169,0,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
                  State Approved Installation
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
                  Get Back on the Road <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Today</span>.
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                  Fast, discreet, and reliable ignition interlock installation across our 5 New Jersey service hubs.
                </p>
                
                <div className="text-sm font-semibold text-gray-300 mb-8">
                  ✓ Same-Day Appointments | ✓ 100% State Compliant | ✓ No Hidden Fees
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="#intake-form" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20">
                    GET STARTED NOW
                  </a>
                  <a href="tel:8559174275" className="inline-flex justify-center items-center px-8 py-3 border-2 border-white/20 text-base font-bold rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    Call 855-917-4275
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Centers Grid */}
        <section className="py-20 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Certified New Jersey Installation Centers</h2>
              <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                We have certified installation centers across New Jersey to get you serviced quickly.
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-brand-orange p-6 mb-12 rounded-r-lg max-w-4xl mx-auto">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-brand-orange text-2xl">⚠️</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-brand-navy">Appointment Required for All Locations</h3>
                  <p className="mt-1 text-brand-muted">
                    We do not accept walk-ins. Please book your installation directly through our <a href="#intake-form" className="text-brand-orange hover:underline font-semibold">online intake form</a> below, or call our centralized booking desk at <strong className="text-brand-navy">855-917-4275</strong> to schedule an appointment at any of our hubs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Passaic County Hub", cities: "Passaic, Clifton, Paterson" },
                { name: "Middlesex County Hub", cities: "Monmouth Junction, North Brunswick, Edison" },
                { name: "Ocean County Hub", cities: "Toms River, Lakewood, Brick" },
                { name: "Passaic Valley Hub", cities: "Little Falls, Wayne, Totowa" },
                { name: "Hudson County Hub", cities: "Jersey City, Bayonne, Union City" }
              ].map((hub, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{hub.name}</h3>
                  <p className="text-sm text-brand-muted">Serving {hub.cities} and surrounding regions.</p>
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
                src="https://forms.zohopublic.com/sharkunlock/form/SharkUnlockClientIntake1/formperma/TxjeMZv_oi0HkRf1BqEoPU4kxDYTLP5Dhz3bhHY9ZwA" 
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
