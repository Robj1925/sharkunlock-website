import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang = "en" }: { lang?: "en" | "es" }) {
  const t = {
    en: {
      contact: "Contact Us",
      phone: "Call Now",
      copyright: "© 2026 Shark Unlock Interlock. All rights reserved.",
      locations: "Our Locations",
    },
    es: {
      contact: "Contáctenos",
      phone: "Llama Ahora",
      copyright: "© 2026 Shark Unlock Interlock. Todos los derechos reservados.",
      locations: "Nuestras Ubicaciones",
    }
  }[lang];

  return (
    <footer className="bg-brand-navy text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/shark_unlock_logo.png"
            alt="Shark Unlock Interlock"
            width={150}
            height={50}
            className="brightness-0 invert object-contain"
          />
          <p className="mt-4 text-sm text-gray-300">
            Professional ignition interlock installation and servicing for North Jersey.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t.locations}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 Passaic: 105 Columbia Ave</li>
            <li>📍 Monmouth Junction: 2140 US-130 N</li>
            <li>📍 Toms River: 2133 Lakewood Rd, Unit 101</li>
            <li>📍 Little Falls: 325 Main St</li>
            <li>📍 Jersey City: 777 Communipaw Ave</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
          <p className="text-sm text-gray-300 mb-2">Admin: 437 Stockton Street, Hightstown, NJ 08520</p>
          <a href="tel:8001234567" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
            {t.phone}: (800) 123-4567
          </a>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        {t.copyright}
      </div>
    </footer>
  );
}
