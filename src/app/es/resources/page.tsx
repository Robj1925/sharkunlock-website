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
            {/* Article 1: Legal / Informational Guide */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Leyes de Interlock en NJ
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Guía de Cumplimiento
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Comprendiendo las Directrices de Interlock de New Jersey (Guía Informativa)</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <div className="interlock-info">
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6 text-sm italic text-gray-600">
                    <strong>Aviso legal:</strong> La información proporcionada en este artículo es solo para fines informativos generales y no constituye asesoramiento legal. Consulte con un abogado calificado o con la Comisión oficial de Vehículos Motorizados de New Jersey (NJ MVC) para obtener orientación específica sobre su situación. Las sanciones y requisitos están sujetos a cambios por parte de las autoridades estatales.
                  </div>

                  <p className="mb-4">
                    Navegar por los requisitos de dispositivos de enclavamiento de encendido (IID) de New Jersey puede parecer abrumador, pero comprender el proceso general puede ayudarle a recuperar sus privilegios de conducir de manera segura. Según las pautas actuales de la Comisión de Vehículos Motorizados de New Jersey (NJ MVC), los dispositivos son comúnmente requeridos para las infracciones de DUI, aunque la duración específica del requisito depende de circunstancias individuales como los niveles de BAC y el historial previo.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">El Proceso General de Instalación y Cumplimiento</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-brand-navy">Reciba su Notificación Oficial:</strong> Por lo general, la NJ MVC emitirá una notificación oficial de restauración o una orden judicial detallando sus requisitos específicos y la duración obligatoria de su instalación.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Programe una Instalación Autorizada:</strong> Debe reservar una cita en un centro de servicio certificado y aprobado por el estado de New Jersey (como Shark Unlock).
                    </li>
                    <li>
                      <strong className="text-brand-navy">Complete la Instalación y Capacitación:</strong> Un técnico certificado instalará el dispositivo en su vehículo y le brindará capacitación integral sobre cómo usarlo de manera segura. Al finalizar, recibirá un <strong>Certificado de Instalación oficial de NJ MVC</strong>.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Envíe la Prueba a la MVC:</strong> Lleve su Certificado de Instalación oficial a un Centro de Servicio Regional de MVC para restaurar formalmente sus privilegios de conducción.
                    </li>
                  </ol>

                  <p className="mt-8 font-semibold">
                    Para conocer los requisitos legales exactos y los plazos de sanción, siempre consulte el <a href="https://www.state.nj.us/mvc/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">sitio web oficial de NJ MVC</a> o consulte a su asesor legal. Si está listo para programar su instalación certificada, <a href="/sharkunlock-website/es/contact" className="text-brand-orange hover:underline">contáctenos hoy</a>.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2: FAQs */}
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

            {/* Article 3: Vehicle Maintenance */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Mantenimiento
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Cuidado del Vehículo
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Cómo Mantener su Vehículo Mientras Usa un Alcoholímetro</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <p className="mb-4">
                  Tener instalado un dispositivo de enclavamiento de encendido (IID) no debería impedirle mantener su vehículo en óptimas condiciones. Sin embargo, debido a que el dispositivo monitorea el sistema eléctrico de su vehículo para prevenir manipulaciones, el mantenimiento de rutina como cambios de aceite o de batería requiere algunas precauciones adicionales.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">Llevando su Auto al Mecánico</h3>
                <p className="mb-4">
                  Antes de que comience cualquier trabajo, debe informar a su mecánico que tiene un IID instalado. Ellos necesitarán realizar pruebas de aliento para encender el auto y moverlo por el taller. Se recomienda encarecidamente que permanezca en el taller para proporcionar las muestras de aliento usted mismo, evitando así cualquier problema mientras el auto esté bajo su cuidado.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">Desconexiones de Batería</h3>
                <p className="mb-4">
                  El dispositivo WR3 monitorea continuamente el voltaje. Si un mecánico necesita desconectar la batería de su auto para realizar una reparación, esta pérdida de energía será registrada por el dispositivo y podría marcarse como un intento de manipulación.
                </p>
                <p className="mb-4">
                  Para evitar una infracción, <strong>siempre guarde la documentación</strong>. Pida a su mecánico una factura detallada que indique claramente la fecha, hora y el motivo por el cual se desconectó la batería. Puede presentar esta documentación durante sus citas de calibración regulares para aclarar el evento.
                </p>

                <p className="mt-8">
                  Tomar estos simples pasos asegura que su auto se mantenga saludable mientras usted sigue cumpliendo perfectamente con los requisitos de su programa.
                </p>
              </div>
            </article>

            {/* Article 4: Local Provider Benefits */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Servicio Local
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Shark Unlock
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Los Beneficios de Elegir un Proveedor Local de Interlock en New Jersey</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <p className="mb-4">
                  Cuando recibe una notificación que requiere un dispositivo de enclavamiento de encendido, tiene opciones sobre quién proporciona e instala su equipo. Aunque existen cadenas nacionales por correo, elegir un proveedor local certificado en New Jersey como Shark Unlock ofrece ventajas significativas para su tranquilidad y su bolsillo.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">1. Servicio en Persona el Mismo Día</h3>
                <p className="mb-6">
                  Los plazos de cumplimiento son estrictos. Ofrecemos citas el mismo día en nuestros cinco centros locales en los condados de Passaic, Middlesex, Ocean, Passaic Valley y Hudson. No tendrá que esperar a que llegue el equipo por correo ni depender de un mecánico externo no certificado.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">2. Capacitación Práctica del Dispositivo</h3>
                <p className="mb-6">
                  Leer un manual no sustituye a la instrucción en vivo. Nuestros técnicos certificados se sientan en el auto con usted y le muestran físicamente cómo usar el dispositivo WR3, respondiendo cualquier pregunta que tenga hasta que se sienta 100% cómodo operando el equipo.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">3. Cero Tarifas Ocultas</h3>
                <p className="mb-6">
                  Las cadenas nacionales a menudo atraen a los clientes con ofertas de "instalación gratuita", solo para imponer costosas tarifas de envío, seguros obligatorios y altos costos de calibración más adelante. Shark Unlock se enorgullece de tener precios transparentes y fijos sin costos ocultos.
                </p>

                <p className="mt-8 font-semibold">
                  Apoye a los negocios locales y obtenga un servicio confiable y sin estrés <a href="/sharkunlock-website/es/contact" className="text-brand-orange hover:underline">programando su instalación</a> con Shark Unlock hoy mismo.
                </p>
              </div>
            </article>

            {/* Article 5: Winter Weather */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Guía de Invierno
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Mantenimiento del Dispositivo
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Consejos para el Cuidado de su Dispositivo Interlock en Invierno</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <p className="mb-4">
                  Los inviernos de New Jersey pueden ser brutalmente fríos. Al igual que su teléfono inteligente o la batería de su auto, los sensores electrónicos sensibles dentro de su dispositivo de interlock pueden verse afectados por las temperaturas de congelación. Siga estos sencillos consejos para mantener su equipo WR3 funcionando perfectamente durante los meses de invierno.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">Déle Tiempo al Dispositivo para Calentarse</h3>
                <p className="mb-6">
                  En frío extremo, el dispositivo puede requerir un minuto o dos para calentar adecuadamente sus sensores internos antes de poder aceptar una muestra de aliento. Cuando gire la llave para activar el dispositivo, tenga paciencia. Espere a que la pantalla le indique que sople; soplar prematuramente mientras se está calentando resultará en una prueba inválida.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">Proteja el Dispositivo Durante la Noche</h3>
                <p className="mb-6">
                  Aunque no puede desconectar el dispositivo del vehículo, puede protegerlo del frío más severo. Al estacionar durante la noche, no deje el dispositivo expuesto en el tablero. Envuélvalo en un paño seco o colóquelo dentro de la guantera o consola central para aislarlo ligeramente de la caída de la temperatura ambiental.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">Mantenga la Boquilla Seca</h3>
                <p className="mb-6">
                  La condensación de su aliento puede congelarse dentro de la boquilla si se deja en un auto helado. Recomendamos llevar sus boquillas desmontables dentro de su casa por la noche para lavarlas y secarlas. Siempre use una boquilla limpia y seca al arrancar su auto por la mañana.
                </p>
              </div>
            </article>

          </div>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
