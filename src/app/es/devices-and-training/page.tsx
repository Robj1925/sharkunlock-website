import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DevicesAndTrainingES() {
  return (
    <>
      <Navbar lang="es" />
      <main className="flex-1 bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Dispositivos y Entrenamiento</h1>
            <p className="text-lg text-brand-muted">
              Aprenda a operar su dispositivo de encendido WR3 con facilidad.
            </p>
          </div>

          {/* Device Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <Image 
                src="/wr3_product_handset.png" 
                alt="Dispositivo WR3 Interlock" 
                width={250} 
                height={400} 
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">El Dispositivo WR3</h2>
              <p className="text-brand-muted mb-6">
                El WR3 es el estándar de la industria para pruebas de alcohol en el aliento confiables, rápidas e higiénicas. Diseñado con una forma ergonómica y pantalla clara, le permite volver a la carretera rápidamente sin demoras innecesarias.
              </p>
              <ul className="space-y-2 text-brand-navy font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">✓</span> Tiempos de calentamiento rápidos incluso en los fríos inviernos de New Jersey
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">✓</span> Patrón simple de soplar-zumbar (blow-hum)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">✓</span> Cabe discretamente en la palma de su mano
                </li>
              </ul>
            </div>
          </div>

          {/* Training Videos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 border-b pb-4">Videos de Entrenamiento</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Video de Entrenamiento WR3</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src="https://www.youtube.com/embed/DmxKyGEKqZM?si=B7SdML-7zXOkPTcy" 
                    title="Video de Entrenamiento WR3" 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Cómo funciona el dispositivo WR3</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src="https://www.youtube.com/embed/P0jRTsPT4mk?si=CF7lXBznZu3xW1f5" 
                    title="Cómo funciona el WR3" 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
