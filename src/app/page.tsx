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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-brand-orange text-white mb-6">
                  NJ MVC Certified Provider
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  LOCAL IGNITION INTERLOCK INSTALLATIONS
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-lg">
                  Certified, Reliable Service in New Jersey to Regain Your License Safely.
                </p>
                <p className="text-lg md:text-xl font-bold text-brand-orange mb-8 max-w-lg">
                  ✓ Same-Day Appointments | ✓ 100% NJ MVC Compliant | ✓ No Hidden Fees
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#intake-form" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors">
                    GET STARTED NOW
                  </a>
                  <a href="tel:8559174275" className="inline-flex justify-center items-center px-8 py-3 border-2 border-white text-base font-bold rounded-md text-brand-navy bg-white hover:bg-gray-100 transition-colors">
                    Call 855-917-4275
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <Image
                  src="/sharkunlock-website/nj_mvc_certified_badge.png"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Passaic */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Passaic County Hub</h3>
                <p className="text-brand-muted mb-4">Serving Passaic, Clifton, Paterson, and surrounding cities.</p>
                <p className="text-brand-orange font-bold mb-4 text-sm">
                  ⚠️ APPOINTMENT REQUIRED. Book your installation directly through our online intake form, or call our booking desk at 855-917-4275 to schedule an appointment.
                </p>
                <p className="font-semibold text-brand-navy mb-4">Booking Desk: 855-917-4275</p>
                <a href="#intake-form" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                  Book Installation
                </a>
              </div>
              
              {/* Middlesex */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Middlesex County Hub</h3>
                <p className="text-brand-muted mb-4">Serving Monmouth Junction, North Brunswick, Edison, and surrounding regions.</p>
                <p className="text-brand-orange font-bold mb-4 text-sm">
                  ⚠️ APPOINTMENT REQUIRED. Book your installation directly through our online intake form, or call our booking desk at 855-917-4275 to schedule an appointment.
                </p>
                <p className="font-semibold text-brand-navy mb-4">Booking Desk: 855-917-4275</p>
                <a href="#intake-form" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                  Book Installation
                </a>
              </div>

              {/* Ocean */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Ocean County Hub</h3>
                <p className="text-brand-muted mb-4">Serving Toms River, Lakewood, Brick, and surrounding shore regions.</p>
                <p className="text-brand-orange font-bold mb-4 text-sm">
                  ⚠️ APPOINTMENT REQUIRED. Book your installation directly through our online intake form, or call our booking desk at 855-917-4275 to schedule an appointment.
                </p>
                <p className="font-semibold text-brand-navy mb-4">Booking Desk: 855-917-4275</p>
                <a href="#intake-form" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                  Book Installation
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Passaic Valley */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Passaic Valley Hub</h3>
                <p className="text-brand-muted mb-4">Serving Little Falls, Wayne, Totowa, and surrounding regions.</p>
                <p className="text-brand-orange font-bold mb-4 text-sm">
                  ⚠️ APPOINTMENT REQUIRED. Book your installation directly through our online intake form, or call our booking desk at 855-917-4275 to schedule an appointment.
                </p>
                <p className="font-semibold text-brand-navy mb-4">Booking Desk: 855-917-4275</p>
                <a href="#intake-form" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                  Book Installation
                </a>
              </div>

              {/* Hudson County */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Hudson County Hub</h3>
                <p className="text-brand-muted mb-4">Serving Jersey City, Bayonne, Union City, and surrounding regions.</p>
                <p className="text-brand-orange font-bold mb-4 text-sm">
                  ⚠️ APPOINTMENT REQUIRED. Book your installation directly through our online intake form, or call our booking desk at 855-917-4275 to schedule an appointment.
                </p>
                <p className="font-semibold text-brand-navy mb-4">Booking Desk: 855-917-4275</p>
                <a href="#intake-form" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                  Book Installation
                </a>
              </div>
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
