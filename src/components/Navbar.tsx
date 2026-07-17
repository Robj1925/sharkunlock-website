"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ lang = "en" }: { lang?: "en" | "es" }) {
  const [isOpen, setIsOpen] = useState(false);

  const t = {
    en: {
      home: "Home",
      devices: "Devices & Training",
      resources: "Resources",
      contact: "Contact Us",
      switch: "Español",
      switchLink: "/es",
    },
    es: {
      home: "Inicio",
      devices: "Dispositivos y Entrenamiento",
      resources: "Recursos",
      contact: "Contáctenos",
      switch: "English",
      switchLink: "/",
    },
  }[lang];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link href={lang === "en" ? "/" : "/es"}>
                <Image
                  src="/sharkunlock-website/shark_unlock_logo.png"
                  alt="Shark Unlock Interlock"
                  width={150}
                  height={50}
                  className="object-contain h-12 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href={lang === "en" ? "/" : "/es"} className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-orange text-sm font-medium transition-colors">
              {t.home}
            </Link>
            <Link href={lang === "en" ? "/devices-and-training" : "/es/devices-and-training"} className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-orange text-sm font-medium transition-colors">
              {t.devices}
            </Link>
            <Link href={lang === "en" ? "/resources" : "/es/resources"} className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-orange text-sm font-medium transition-colors">
              {t.resources}
            </Link>
            <Link href={lang === "en" ? "/contact" : "/es/contact"} className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-orange text-sm font-medium transition-colors">
              {t.contact}
            </Link>
            
            <Link href={t.switchLink} className="ml-4 inline-flex items-center px-4 py-2 border border-brand-navy text-sm font-medium rounded-md text-brand-navy bg-white hover:bg-gray-50 transition-colors">
              {t.switch}
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href={lang === "en" ? "/" : "/es"} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-brand-orange transition-colors">
            {t.home}
          </Link>
          <Link href={lang === "en" ? "/devices-and-training" : "/es/devices-and-training"} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-brand-orange transition-colors">
            {t.devices}
          </Link>
          <Link href={lang === "en" ? "/resources" : "/es/resources"} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-brand-orange transition-colors">
            {t.resources}
          </Link>
          <Link href={lang === "en" ? "/contact" : "/es/contact"} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-brand-orange transition-colors">
            {t.contact}
          </Link>
          <Link href={t.switchLink} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold text-brand-navy hover:bg-gray-50 hover:border-brand-orange transition-colors">
            {t.switch}
          </Link>
        </div>
      </div>
    </nav>
  );
}
