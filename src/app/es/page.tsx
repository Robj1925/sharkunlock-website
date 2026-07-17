import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomeES() {
  return (
    <>
      <Navbar lang="es" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-brand-navy text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sharkunlock-website/car_interior_hero_bg.png"
              alt="Interior del coche"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(242,169,0,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
                  Instalación Aprobada por el Estado
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
                  Vuelva a Conducir <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Hoy Mismo</span>.
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                  Instalación de alcoholímetro rápida, discreta y confiable en nuestros 5 centros de servicio en New Jersey.
                </p>
                
                <div className="text-sm font-semibold text-gray-300 mb-8">
                  ✓ Citas el Mismo Día | ✓ 100% Cumplimiento Estatal | ✓ Sin Tarifas Ocultas
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#intake-form" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors">
                    COMENZAR AHORA
                  </a>
                  <a href="tel:8559174275" className="inline-flex justify-center items-center px-8 py-3 border-2 border-white text-base font-bold rounded-md text-brand-navy bg-white hover:bg-gray-100 transition-colors">
                    Llamar al 855-917-4275
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <Image
                  src="/sharkunlock-website/wr3_product_handset.png"
                  alt="Dispositivo de Enclavamiento WR3"
                  width={600}
                  height={350}
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Centers Grid */}
        <section className="py-20 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Centros de Instalación Certificados en New Jersey</h2>
              <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                Contamos con centros de instalación certificados en todo New Jersey para atenderle rápidamente.
              </p>
              <div className="bg-orange-50 border-l-4 border-brand-orange p-6 mb-12 rounded-r-lg max-w-4xl mx-auto mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-brand-orange text-2xl">⚠️</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-brand-navy text-left">Se Requiere Cita en Todas las Ubicaciones</h3>
                    <p className="mt-1 text-brand-muted text-left">
                      No aceptamos visitas sin cita previa. Reserve su instalación directamente a través de nuestro <a href="#intake-form" className="text-brand-orange hover:underline font-semibold">formulario de admisión en línea</a> a continuación, o llame a nuestro centro de reservas al <strong className="text-brand-navy">855-917-4275</strong> para programar una cita en cualquiera de nuestros centros.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { name: "Centro del Condado de Passaic", cities: "Passaic, Clifton, Paterson" },
                  { name: "Centro del Condado de Middlesex", cities: "Monmouth Junction, North Brunswick, Edison" },
                  { name: "Centro del Condado de Ocean", cities: "Toms River, Lakewood, Brick" },
                  { name: "Centro de Passaic Valley", cities: "Little Falls, Wayne, Totowa" },
                  { name: "Centro del Condado de Hudson", cities: "Jersey City, Bayonne, Union City" }
                ].map((hub, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default">
                    <div className="w-12 h-12 bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{hub.name}</h3>
                    <p className="text-sm text-brand-muted">Sirviendo a {hub.cities} y regiones circundantes.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intake Form Section */}
        <section id="intake-form" className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">¿Listo para Programar?</h2>
              <p className="text-lg text-brand-muted">
                Complete el formulario a continuación y nuestro equipo se comunicará con usted dentro de los 15 minutos para confirmar su cita.
              </p>
            </div>
            
            <div className="bg-brand-bg p-4 md:p-8 rounded-xl shadow-inner border border-gray-200 min-h-[600px] relative">
              <iframe 
                src="https://forms.zohopublic.com/sharkunlock/form/SharkUnlockClientIntake1/formperma/TxjeMZv_oi0HkRf1BqEoPU4kxDYTLP5Dhz3bhHY9ZwA" 
                className="w-full h-[600px] border-none rounded relative z-10"
                title="Formulario de Shark Unlock"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center z-0 text-brand-muted">
                Cargando formulario seguro...
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
