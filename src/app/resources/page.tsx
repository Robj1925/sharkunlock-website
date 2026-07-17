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

          <div className="space-y-12">
            {/* Article 1 */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  NJ Interlock Laws
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Legal Requirements
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Understanding New Jersey Interlock Laws 2026</h2>
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
                      <strong className="text-brand-navy">Repeat Offenders:</strong> Mandatory license suspension followed by an interlock requirement spanning 2 to 4 years.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">The Step-by-Step Installation Process</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-brand-navy">Receive Your MVC Notice:</strong> The NJ MVC will mail you an official restoration notice detailing your interlock requirements.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Schedule an Authorized Installation:</strong> Book an appointment at an authorized New Jersey interlock service center.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Complete the Installation & Receive Certification:</strong> Our certified MVC technician will install the WR3 device, train you on how to use it, and provide you with an official <strong>NJ MVC Installation Certificate</strong>.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Submit Your Proof of Installation:</strong> Bring your signed certificate to an MVC Regional Service Center to restore your driver's license.
                    </li>
                  </ol>

                  <p className="mt-8 font-semibold">
                    <a href="/sharkunlock-website/contact" className="text-brand-orange hover:underline">Contact us today</a> to ensure your vehicle is compliant before your MVC deadline.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  User Guides & Troubleshooting
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  WR3 Handset
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Device FAQ
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">5 FAQs After Your New Jersey Breathalyzer Installation</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <div className="interlock-faq">
                  <p className="mb-6">
                    Congratulations on completing your interlock device installation! Transitioning to daily use of the WR3 breathalyzer doesn't have to be stressful. To help you drive with confidence, we've compiled the five most common questions our local New Jersey service desk receives from new clients.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">1. How do I perform a breath test correctly?</h3>
                  <p className="mb-6">
                    The WR3 handset is an advanced, compliant unit. Unlike older systems that require complicated hum-tone blowing patterns, the WR3 uses a straightforward <strong>straight blow method</strong>. Take a deep breath, blow steadily into the mouthpiece for 5 continuous seconds, and wait for the click and beep to confirm a successful sample.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">2. What if I get a "BLOW HARDER" message?</h3>
                  <p className="mb-6">
                    A "BLOW HARDER" message simply means the device didn't receive enough breath volume or pressure. Make sure you are maintaining a firm seal with your lips around the mouthpiece, and blow with consistent force from your diaphragm.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">3. How do rolling retests work while driving?</h3>
                  <p className="mb-6">
                    Once your vehicle is started, the WR3 will periodically request "rolling retests" during your journey to ensure continued compliance. The device will beep and flash to alert you. You have <strong>10 full minutes</strong> to perform the test. For your safety, do not attempt to blow while navigating heavy traffic; pull over safely to the side of the road or a parking lot before blowing.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">4. Can food or mouthwash cause a false positive?</h3>
                  <p className="mb-6">
                    Yes. Certain foods containing yeast (like bread or donuts) or alcohol-based mouthwashes can cause transient alcohol readings on the fuel-cell sensor. To avoid lockout events, <strong>always rinse your mouth thoroughly with clean water</strong> and wait 10 to 15 minutes after eating, drinking, or using mouthwash before blowing into the device.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">5. What should I do if my device locks out?</h3>
                  <p className="mb-6">
                    If you miss a rolling retest or register consecutive positive alcohol readings, your unit will trigger a temporary lockout countdown. Do not attempt to start your car repeatedly. Wait for the countdown to clear, rinse your mouth with water, and re-blow. If a permanent lockout is triggered, call our booking and support desk at <strong className="text-brand-orange">855-917-4275</strong> immediately to schedule an override service.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
