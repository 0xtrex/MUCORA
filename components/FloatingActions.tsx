"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={CONTACT.phoneHref}
        aria-label="Call MYCORA now"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-forest-deep text-cream shadow-lg shadow-forest-deep/30 transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="h-5 w-5" strokeWidth={2} />
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message MYCORA on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulseRing" />
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative h-6 w-6"
          aria-hidden="true"
        >
          <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.28 1.65 6.06L4 29l8.2-1.6a12.9 12.9 0 0 0 3.82.58c6.62 0 12.02-5.37 12.02-11.98C28.04 8.37 22.64 3 16.02 3Zm0 21.86c-1.9 0-3.7-.5-5.28-1.44l-.38-.22-4.87.95.98-4.75-.25-.4a9.8 9.8 0 0 1-1.5-5.22c0-5.44 4.44-9.86 9.9-9.86 5.44 0 9.87 4.42 9.87 9.86 0 5.45-4.43 9.88-9.87 10.08Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
