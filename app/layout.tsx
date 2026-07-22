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
  metadataBase: new URL("https://mycora.in"),
  title: {
    default: "MYCORA — Farm-Fresh Mushrooms, Grown Local",
    template: "%s — MYCORA",
  },
  description:
    "MYCORA grows and delivers fresh, premium mushrooms straight from our farm to your kitchen. Order online or on WhatsApp for same-day local delivery.",
  keywords: [
    "MYCORA",
    "fresh mushrooms",
    "buy mushrooms online",
    "oyster mushroom",
    "shiitake",
    "button mushroom",
    "local mushroom delivery",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MYCORA — Farm-Fresh Mushrooms, Grown Local",
    description:
      "Fresh, premium mushrooms grown local and delivered to your door. Order on WhatsApp or by phone.",
    siteName: "MYCORA",
    type: "website",
  },
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
