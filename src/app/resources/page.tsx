import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Resources() {
  return (
    <>
      <Navbar lang="en" />
      <main className="flex-1 bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Resources & Articles</h1>
            <p className="text-lg text-brand-muted">
              Important information and guides to help you navigate your ignition interlock requirements.
            </p>
          </div>

          <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Navigating New Jersey's Ignition Interlock Laws (2026)</h2>
            <div className="prose prose-brand max-w-none text-brand-muted">
              <div className="interlock-info">
                <p className="mb-4">
                  Navigating New Jersey's ignition interlock laws can be overwhelming, but staying compliant is essential to regaining and keeping your driving privileges. Under the updated 2026 New Jersey MVC (Motor Vehicle Commission) guidelines, ignition interlock devices (IIDs) are required for all first-time and repeat DUI offenders.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">Who is Required to Install an Interlock Device?</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong className="text-brand-navy">First Offenders (BAC 0.08% to 0.10%):</strong> Required to install an interlock device on their primary vehicle for three months.
                  </li>
                  <li>
                    <strong className="text-brand-navy">First Offenders (BAC 0.10% to 0.15%):</strong> Required to install an IID for a duration ranging from 7 to 12 months.
                  </li>
                  <li>
                    <strong className="text-brand-navy">First Offenders (BAC 0.15% or higher):</strong> Mandatory license suspension during the installation period, followed by 9 to 15 months of IID compliance.
                  </li>
                  <li>
                    <strong className="text-brand-navy">Repeat Offenders:</strong> Face longer suspension periods (typically 1 to 8 years) followed by 2 to 4 years of mandatory IID use.
                  </li>
                </ul>
                
                <p className="mt-8">
                  <a href="/contact" className="text-brand-orange font-bold hover:underline">Contact us today</a> to ensure your vehicle is compliant before your MVC deadline.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
