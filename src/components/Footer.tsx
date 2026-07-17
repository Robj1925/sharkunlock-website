import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang = "en" }: { lang?: "en" | "es" }) {
  const t = {
    en: {
      contact: "Contact Us",
      phone: "Call Now",
      copyright: "© 2026 Shark Unlock Interlock Inc. All Rights Reserved.",
      locations: "Our Locations",
      hours: "Mon-Fri: 9am-6pm, Sat: 9am-4pm, Sun: Closed",
    },
    es: {
      contact: "Contáctenos",
      phone: "Llama Ahora",
      copyright: "© 2026 Shark Unlock Interlock Inc. Todos los derechos reservados.",
      locations: "Nuestras Ubicaciones",
      hours: "Lun-Vie: 9am-6pm, Sáb: 9am-4pm, Dom: Cerrado",
    }
  }[lang];

  return (
    <footer className="bg-brand-navy text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/sharkunlock-website/shark_unlock_logo.png"
            alt="Shark Unlock Interlock"
            width={150}
            height={50}
            className="brightness-0 invert object-contain mb-4"
          />
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href={lang === "en" ? "/" : "/es"} className="hover:text-white">Home</Link></li>
            <li><Link href={lang === "en" ? "/devices-and-training" : "/es/devices-and-training"} className="hover:text-white">Devices & Training</Link></li>
            <li><Link href={lang === "en" ? "/resources" : "/es/resources"} className="hover:text-white">Resources</Link></li>
            <li><Link href={lang === "en" ? "/contact" : "/es/contact"} className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">{t.contact}</h3>
          <a href="mailto:support@sharkunlock.com" className="text-sm text-gray-300 hover:text-white block mb-4">support@sharkunlock.com</a>
          <a href="tel:8559174275" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
            {t.phone}: 855-917-4275
          </a>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{t.locations}</h3>
          <ul className="space-y-3 text-xs text-gray-300">
            <li><strong>Passaic County Hub:</strong> Passaic, Clifton, Paterson</li>
            <li><strong>Middlesex County Hub:</strong> Monmouth Junction, North Brunswick, Edison</li>
            <li><strong>Ocean County Hub:</strong> Toms River, Lakewood, Brick</li>
            <li><strong>Passaic Valley Hub:</strong> Little Falls, Wayne, Totowa</li>
            <li><strong>Hudson County Hub:</strong> Jersey City, Bayonne, Union City</li>
          </ul>
          <p className="mt-4 text-xs font-semibold text-brand-orange">{t.hours}</p>
        </div>
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-8">
        {t.copyright}
      </div>
    </footer>
  );
}
