import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactES() {
  return (
    <>
      <Navbar lang="es" />
      <main className="flex-1 bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Contáctenos</h1>
            <p className="text-lg text-brand-muted">
              ¿Tiene preguntas o necesita programar una cita? Estamos aquí para ayudarle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Ponerse en contacto</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">📞 Llámenos</h3>
                  <a href="tel:8001234567" className="text-brand-orange text-xl font-bold hover:underline">
                    (800) 123-4567
                  </a>
                  <p className="text-sm text-brand-muted mt-1">Disponible Lunes a Viernes, 8am a 6pm</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">✉️ Correo Electrónico</h3>
                  <a href="mailto:support@sharkunlock.com" className="text-brand-orange hover:underline">
                    support@sharkunlock.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">🏢 Oficina de Administración</h3>
                  <p className="text-brand-muted">
                    437 Stockton Street<br/>
                    Hightstown, NJ 08520
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Centros de Servicio</h2>
              <ul className="space-y-4 text-brand-muted">
                <li><strong className="text-brand-navy">Paterson:</strong> 105 Columbia Ave</li>
                <li><strong className="text-brand-navy">Passaic:</strong> Passaic Service Center</li>
                <li><strong className="text-brand-navy">Monmouth Junction:</strong> 2140 US-130 N</li>
                <li><strong className="text-brand-navy">Toms River:</strong> 2133 Lakewood Rd, Unit 101</li>
                <li><strong className="text-brand-navy">Little Falls:</strong> 325 Main St</li>
                <li><strong className="text-brand-navy">Jersey City:</strong> 777 Communipaw Ave</li>
              </ul>
              <div className="mt-8">
                <a href="/es/#intake-form" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors">
                  Programe su Instalación
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
