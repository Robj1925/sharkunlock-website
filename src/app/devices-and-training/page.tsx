import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DevicesAndTraining() {
  return (
    <>
      <Navbar lang="en" />
      <main className="flex-1 bg-brand-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Devices & Training</h1>
            <p className="text-lg text-brand-muted">
              Learn how to operate your WR3 Ignition Interlock Handset with ease.
            </p>
          </div>

          {/* Device Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <Image 
                src="/wr3_product_handset.png" 
                alt="WR3 Interlock Handset" 
                width={250} 
                height={400} 
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">The WR3 Interlock Handset</h2>
              <p className="text-brand-muted mb-6">
                The WR3 is the industry standard for reliable, fast, and hygienic breath alcohol testing. Designed with an ergonomic shape and clear display, it allows you to get on the road quickly without unnecessary delays.
              </p>
              <ul className="space-y-2 text-brand-navy font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">✓</span> Fast warm-up times even in cold New Jersey winters
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">✓</span> Simple blow-hum pattern
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">✓</span> Discretely fits in the palm of your hand
                </li>
              </ul>
            </div>
          </div>

          {/* Training Videos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 border-b pb-4">Training Videos</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">WR3 Training Video</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src="https://www.youtube.com/embed/DmxKyGEKqZM?si=B7SdML-7zXOkPTcy" 
                    title="WR3 Training Video" 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">How the WR3 Handset Works</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src="https://www.youtube.com/embed/P0jRTsPT4mk?si=CF7lXBznZu3xW1f5" 
                    title="How WR3 Handset works" 
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
      <Footer lang="en" />
    </>
  );
}
