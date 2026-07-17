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
            {/* Article 1: Legal / Informational Guide */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  NJ Interlock Laws
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Compliance Guide
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Understanding New Jersey Interlock Guidelines (Informational Guide)</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <div className="interlock-info">
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6 text-sm italic text-gray-600">
                    <strong>Disclaimer:</strong> The information provided in this article is for general informational purposes only and does not constitute legal advice. Please consult with a qualified attorney or the official New Jersey Motor Vehicle Commission (NJ MVC) for guidance specific to your situation. Penalties and requirements are subject to change by state authorities.
                  </div>

                  <p className="mb-4">
                    Navigating New Jersey's ignition interlock requirements can seem overwhelming, but understanding the general process can help you regain your driving privileges smoothly and safely. Under current New Jersey Motor Vehicle Commission (NJ MVC) guidelines, ignition interlock devices (IIDs) are commonly required for DUI offenses, though the specific duration of the requirement depends on individual circumstances such as BAC levels and prior history.
                  </p>

                  <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">The General Installation & Compliance Process</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-brand-navy">Receive Your Official Notice:</strong> Typically, the NJ MVC will issue an official restoration notice or court order detailing your specific interlock requirements and the mandatory duration of your installation.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Schedule an Authorized Installation:</strong> You must book an appointment with a state-approved, certified New Jersey interlock service center (like Shark Unlock).
                    </li>
                    <li>
                      <strong className="text-brand-navy">Complete the Installation & Training:</strong> A certified technician will install the device in your vehicle and provide comprehensive training on how to use it safely. Upon completion, you will receive an official <strong>NJ MVC Installation Certificate</strong>.
                    </li>
                    <li>
                      <strong className="text-brand-navy">Submit Proof to the MVC:</strong> Take your official Installation Certificate to an MVC Regional Service Center to formally restore your driving privileges.
                    </li>
                  </ol>

                  <p className="mt-8 font-semibold">
                    For exact legal requirements and penalty timelines, always refer to the <a href="https://www.state.nj.us/mvc/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">official NJ MVC website</a> or consult your legal counsel. If you're ready to schedule your certified installation, <a href="/sharkunlock-website/contact" className="text-brand-orange hover:underline">contact us today</a>.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2: FAQs */}
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

            {/* Article 3: Vehicle Maintenance */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Maintenance
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Vehicle Care
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">How to Maintain Your Vehicle While Using an Ignition Interlock</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <p className="mb-4">
                  Having an ignition interlock device (IID) installed shouldn't stop you from keeping your vehicle in top condition. However, because the device monitors your vehicle's electrical system to prevent tampering, routine maintenance like oil changes or battery replacements requires a few extra precautions.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">Taking Your Car to the Mechanic</h3>
                <p className="mb-4">
                  Before any work begins, you must inform your mechanic that an IID is installed. They will need to perform breath tests to start the car and move it around the shop. It is highly recommended that you stay at the shop to provide the breath samples yourself, preventing any accidental missed retests or issues while the car is in their care.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">Battery Disconnections</h3>
                <p className="mb-4">
                  The WR3 handset continuously monitors voltage. If a mechanic needs to disconnect your car's battery to perform a repair, this power loss will be recorded by the device and may be flagged as a tampering attempt. 
                </p>
                <p className="mb-4">
                  To prevent a violation, <strong>always keep documentation</strong>. Ask your mechanic for a detailed invoice that clearly states the date, time, and reason the battery was disconnected. You can present this documentation during your regular calibration appointments to clear the event.
                </p>

                <p className="mt-8">
                  Taking these simple steps ensures that your car stays healthy while you remain perfectly compliant with your program requirements.
                </p>
              </div>
            </article>

            {/* Article 4: Local Provider Benefits */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Local Service
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Shark Unlock
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">The Benefits of Choosing a Local New Jersey Interlock Provider</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <p className="mb-4">
                  When you receive a notice requiring an ignition interlock device, you have a choice in who provides and installs your equipment. While national, mail-order chains exist, choosing a local, New Jersey-certified provider like Shark Unlock offers significant advantages for your peace of mind and your wallet.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">1. Same-Day, In-Person Service</h3>
                <p className="mb-6">
                  Compliance deadlines are strict. We offer same-day appointments across our five local hubs in Passaic, Middlesex, Ocean, Passaic Valley, and Hudson counties. You won't have to wait for equipment to arrive in the mail or rely on an uncertified third-party mechanic.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">2. Hands-On Device Training</h3>
                <p className="mb-6">
                  Reading a manual is no substitute for live instruction. Our certified technicians sit in the car with you and physically show you how to use the WR3 handset, answering any questions you have until you are 100% comfortable operating the device.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">3. Zero Hidden Fees</h3>
                <p className="mb-6">
                  National chains often lure clients in with "free installation" offers, only to mandate expensive shipping fees, mandatory insurance add-ons, and costly calibration charges later. Shark Unlock prides itself on transparent, flat-rate pricing with no hidden costs.
                </p>

                <p className="mt-8 font-semibold">
                  Support local business and get reliable, stress-free service by <a href="/sharkunlock-website/contact" className="text-brand-orange hover:underline">booking your installation</a> with Shark Unlock today.
                </p>
              </div>
            </article>

            {/* Article 5: Winter Weather */}
            <article className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-brand-orange">
                  Winter Guide
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Device Maintenance
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Winter Weather Tips for Your Ignition Interlock Device</h2>
              <div className="prose prose-brand max-w-none text-brand-muted">
                <p className="mb-4">
                  New Jersey winters can be brutally cold. Just like your smartphone or car battery, the sensitive electronic fuel-cell sensors inside your ignition interlock device can be affected by freezing temperatures. Follow these simple tips to keep your WR3 handset functioning perfectly during the winter months.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">Give the Device Time to Warm Up</h3>
                <p className="mb-6">
                  In extreme cold, the handset may require a minute or two to properly warm its internal sensors before it can accept a breath sample. When you turn the key to activate the device, be patient. Wait for the screen to prompt you to blow—blowing prematurely while it's warming up will result in an invalid test.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">Protect the Handset Overnight</h3>
                <p className="mb-6">
                  While you cannot disconnect the handset from the vehicle, you can protect it from the harshest cold. When parking overnight, do not leave the handset exposed on the dashboard. Wrap it in a dry cloth or place it inside the glove compartment or center console to insulate it slightly from the ambient temperature drop.
                </p>

                <h3 className="text-xl font-bold text-brand-navy mt-8 mb-2">Keep the Mouthpiece Dry</h3>
                <p className="mb-6">
                  Condensation from your breath can freeze inside the mouthpiece if left in a freezing car. We recommend bringing your detachable mouthpieces inside your home overnight to wash and dry them. Always use a clean, dry mouthpiece when starting your car in the morning.
                </p>
              </div>
            </article>

          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
