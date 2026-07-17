import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar lang="en" />
      <main className="flex-1 bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Contact Us</h1>
            <p className="text-lg text-brand-muted">
              Have questions or need to schedule an appointment? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Direct Message Form & Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Send a Direct Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-brand-orange focus:border-brand-orange outline-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Other Ways to Reach Us</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy">📞 Call Us</h3>
                    <a href="tel:8559174275" className="text-brand-orange text-lg font-bold hover:underline">
                      855-917-4275
                    </a>
                    <p className="text-xs text-brand-muted">Mon-Fri: 9am-6pm, Sat: 9am-4pm, Sun: Closed</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy">✉️ Email</h3>
                    <a href="mailto:support@sharkunlock.com" className="text-brand-muted hover:text-brand-orange transition-colors">
                      support@sharkunlock.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy">🏢 Administration Office</h3>
                    <p className="text-brand-muted text-sm">437 Stockton Street<br/>Hightstown, NJ 08520</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Locations */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Service Centers</h2>
              <ul className="space-y-6 text-brand-muted">
                <li>
                  <strong className="text-brand-navy block text-lg">Passaic County Hub</strong>
                  <span className="text-sm">Passaic, Clifton, Paterson</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Middlesex County Hub</strong>
                  <span className="text-sm">Monmouth Junction, North Brunswick, Edison</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Ocean County Hub</strong>
                  <span className="text-sm">Toms River, Lakewood, Brick</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Passaic Valley Hub</strong>
                  <span className="text-sm">Little Falls, Wayne, Totowa</span>
                </li>
                <li>
                  <strong className="text-brand-navy block text-lg">Hudson County Hub</strong>
                  <span className="text-sm">Jersey City, Bayonne, Union City</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a href="/sharkunlock-website/#intake-form" className="w-full inline-flex justify-center items-center px-6 py-3 border border-brand-orange text-base font-bold rounded-md text-brand-orange hover:bg-orange-50 transition-colors">
                  Schedule Installation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
