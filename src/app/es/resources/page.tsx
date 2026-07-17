import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResourcesES() {
  return (
    <>
      <Navbar lang="es" />
      <main className="flex-1 bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Recursos y Artículos</h1>
            <p className="text-lg text-brand-muted">
              Información importante y guías para ayudarle a navegar por sus requisitos del alcoholímetro.
            </p>
          </div>

          <div className="space-y-12">
            {/* Article 1 */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Leyes de Interlock en NJ
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Requisitos Legales
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Comprendiendo las Leyes de Interlock de New Jersey 2026</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <div className="interlock-info">
                  <p className="mb-4">
                    Navegar por las leyes de dispositivos de enclavamiento de encendido (IID) de New Jersey puede ser abrumador, pero mantenerse en cumplimiento es esencial para recuperar y mantener sus privilegios de conducir. Según las pautas actualizadas para 2026 de la Comisión de Vehículos Motorizados de New Jersey (MVC), los dispositivos son requeridos para todos los infractores primerizos y reincidentes.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">¿Quién está obligado a instalar un dispositivo?</h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong className="text-brand-navy">Primeros infractores (BAC 0.08% a 0.10%):</strong> Requerido a instalar el dispositivo por tres meses.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Primeros infractores (BAC 0.10% a 0.15%):</strong> Obligatorio por una duración que varía de 7 a 12 meses.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Primeros infractores (BAC 0.15% o más):</strong> Suspensión obligatoria de licencia, seguida de 9 a 15 meses de cumplimiento.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Infractores reincidentes:</strong> Suspensión obligatoria de licencia seguida de un requisito de interlock de 2 a 4 años.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">El Proceso de Instalación Paso a Paso</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-brand-navy">Reciba su Notificación de MVC:</strong> La NJ MVC le enviará por correo una notificación oficial de restauración detallando sus requisitos.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Programe una Instalación Autorizada:</strong> Reserve una cita en un centro de servicio autorizado en New Jersey.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Complete la Instalación y Reciba Certificación:</strong> Nuestro técnico certificado instalará el dispositivo WR3, lo capacitará y le proporcionará un <strong>Certificado de Instalación oficial de NJ MVC</strong>.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Envíe su Prueba de Instalación:</strong> Lleve su certificado firmado a un Centro de Servicio Regional de MVC para restaurar su licencia.
                    </li>
                  </ol>

                  <p className="mt-8 font-semibold">
                    <a href="/es/contact" className="text-brand-orange hover:underline">Contáctenos hoy</a> para asegurarse de que su vehículo cumpla con las normas antes de su fecha límite.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Guías de Usuario y Soporte
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Dispositivo WR3
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Preguntas Frecuentes
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">5 Preguntas Frecuentes Después de su Instalación de Alcoholímetro en New Jersey</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <div className="interlock-faq">
                  <p className="mb-6">
                    ¡Felicitaciones por completar la instalación de su dispositivo interlock! La transición al uso diario del alcoholímetro WR3 no tiene que ser estresante. Para ayudarle a conducir con confianza, hemos recopilado las cinco preguntas más comunes que recibe nuestra mesa de servicio en New Jersey.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">1. ¿Cómo realizo una prueba de aliento correctamente?</h3>
                  <p className="mb-6">
                    El dispositivo WR3 es una unidad avanzada. A diferencia de sistemas más antiguos, el WR3 utiliza un <strong>método de soplado directo</strong>. Respire profundo, sople constantemente en la boquilla durante 5 segundos continuos, y espere el clic y el pitido para confirmar una muestra exitosa.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">2. ¿Qué pasa si recibo el mensaje "BLOW HARDER" (SOPLE MÁS FUERTE)?</h3>
                  <p className="mb-6">
                    Este mensaje significa que el dispositivo no recibió suficiente volumen o presión de aire. Asegúrese de mantener un sello firme con los labios alrededor de la boquilla, y sople con fuerza consistente desde su diafragma.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">3. ¿Cómo funcionan las repruebas en movimiento (rolling retests)?</h3>
                  <p className="mb-6">
                    Una vez que el vehículo está encendido, el WR3 solicitará periódicamente "repruebas en movimiento" durante su viaje. El dispositivo pitará y parpadeará para alertarle. Tiene <strong>10 minutos completos</strong> para realizar la prueba. Por su seguridad, busque un lugar seguro para estacionar antes de soplar.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">4. ¿Puede la comida o el enjuague bucal causar un falso positivo?</h3>
                  <p className="mb-6">
                    Sí. Ciertos alimentos que contienen levadura (como pan o donas) o enjuagues bucales a base de alcohol pueden causar lecturas transitorias de alcohol en el sensor. Para evitar bloqueos, <strong>siempre enjuáguese la boca con agua limpia</strong> y espere de 10 a 15 minutos después de comer o beber antes de soplar.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">5. ¿Qué debo hacer si mi dispositivo se bloquea?</h3>
                  <p className="mb-6">
                    Si pierde una reprueba en movimiento o registra lecturas positivas consecutivas, su unidad activará una cuenta regresiva de bloqueo temporal. No intente encender su auto repetidamente. Espere a que la cuenta regresiva termine, enjuáguese la boca con agua y vuelva a soplar. Si se activa un bloqueo permanente, llame a nuestra mesa de reservas y soporte al <strong className="text-brand-orange">855-917-4275</strong> inmediatamente.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
