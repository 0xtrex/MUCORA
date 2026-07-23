import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mucora.shop"),
  title: {
    default: "MUCORA — Fresh Mushrooms Online in Kolkata, Barasat & West Bengal",
    template: "%s — MUCORA",
  },
  description:
    "Buy fresh mushrooms online from MUCORA — a local farm growing oyster, button, shiitake, milky, portobello and lion's mane mushrooms. Same-day delivery across Kolkata, Barasat and West Bengal.",
  keywords: [
    "MUCORA",
    "mushroom",
    "fresh mushrooms",
    "buy mushrooms online",
    "mushroom online",
    "button mushroom",
    "oyster mushroom",
    "shiitake mushroom",
    "mushroom in kolkata",
    "mushroom in west bengal",
    "mushroom in barasat",
    "mushroom delivery kolkata",
    "local mushroom farm",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MUCORA — Fresh Mushrooms Online in Kolkata, Barasat & West Bengal",
    description:
      "Farm-fresh mushrooms, grown local and delivered same-day. Order online or on WhatsApp.",
    siteName: "MUCORA",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MUCORA",
  description:
    "MUCORA is a local mushroom farm growing and delivering fresh oyster, button, shiitake, milky, portobello and lion's mane mushrooms across Kolkata, Barasat and West Bengal.",
  telephone: "+91-8420424903",
  areaServed: [
    { "@type": "City", name: "Kolkata" },
    { "@type": "City", name: "Barasat" },
    { "@type": "State", name: "West Bengal" },
  ],
  priceRange: "₹₹",
  url: "https://mucora.shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased font-body bg-cream text-forest-deep">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
