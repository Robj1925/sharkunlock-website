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
            {/* Left Column: Direct Message Form & Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Enviar un Mensaje Directo</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1">Nombre Completo</label>
                    <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1">Correo Electrónico</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1">Número de Teléfono</label>
                    <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1">Mensaje</label>
                    <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors">
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Otras Formas de Contacto</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy">📞 Llámenos</h3>
                    <a href="tel:8559174275" className="text-brand-orange text-lg font-bold hover:underline">
                      855-917-4275
                    </a>
                    <p className="text-xs text-brand-muted">Lun-Vie: 9am-6pm, Sáb: 9am-4pm, Dom: Cerrado</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy">✉️ Correo Electrónico</h3>
                    <a href="mailto:support@sharkunlock.com" className="text-brand-muted hover:text-brand-orange transition-colors">
                      support@sharkunlock.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Locations */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Centros de Servicio</h2>
              <ul className="space-y-6 text-brand-muted">
                <li>
                  <strong className="text-brand-navy block text-lg">Centro del Condado de Passaic</strong>
                  <span className="text-sm">Passaic, Clifton, Paterson</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Centro del Condado de Middlesex</strong>
                  <span className="text-sm">Monmouth Junction, North Brunswick, Edison</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Centro del Condado de Ocean</strong>
                  <span className="text-sm">Toms River, Lakewood, Brick</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Centro del Valle de Passaic</strong>
                  <span className="text-sm">Little Falls, Wayne, Totowa</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Centro del Condado de Hudson</strong>
                  <span className="text-sm">Jersey City, Bayonne, Union City</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a href="/sharkunlock-website/es/#intake-form" className="w-full inline-flex justify-center items-center px-6 py-3 border border-brand-orange text-base font-bold rounded-md text-brand-orange hover:bg-orange-50 transition-colors">
                  Programar Instalación
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
