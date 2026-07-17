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

          <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Navegando las Leyes del Alcoholímetro de New Jersey (2026)</h2>
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
                    <strong className="text-brand-navy">Infractores reincidentes:</strong> Enfrentan períodos de suspensión más largos seguidos de 2 a 4 años de uso obligatorio.
                  </li>
                </ul>
                
                <p className="mt-8">
                  <a href="/es/contact" className="text-brand-orange font-bold hover:underline">Contáctenos hoy</a> para asegurarse de que su vehículo cumpla con las normas antes de su fecha límite de MVC.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer lang="es" />
    </>
  );
}
