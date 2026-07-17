import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://robj1925.github.io/sharkunlock-website/"),
  title: "Shark Unlock Interlock | Ignition Interlock Devices in NJ",
  description: "Get your ignition interlock device installed quickly and reliably in Passaic, Paterson, and North Jersey. No hidden fees. English & Español.",
  openGraph: {
    title: "Shark Unlock Interlock | Ignition Interlock Devices in NJ",
    description: "Get your ignition interlock device installed quickly and reliably in Passaic, Paterson, and North Jersey. No hidden fees. English & Español.",
    url: "https://robj1925.github.io/sharkunlock-website/",
    siteName: "Shark Unlock",
    images: [
      {
        url: "https://robj1925.github.io/sharkunlock-website/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shark Unlock Interlock Homepage Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shark Unlock Interlock | Ignition Interlock Devices in NJ",
    description: "Get your ignition interlock device installed quickly and reliably in Passaic, Paterson, and North Jersey. No hidden fees. English & Español.",
    images: ["https://robj1925.github.io/sharkunlock-website/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
