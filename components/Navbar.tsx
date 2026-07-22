"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The header sits transparently over the dark hero at the top of the page,
  // then gets a solid cream background once scrolled. Text needs to flip
  // from light (on the dark hero) to dark (on the cream bar) accordingly.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(46,75,59,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[80px] md:h-[88px]">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="relative flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
              <img
                src="/logo.png"
                alt="MYCORA logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span
              className={`font-display text-xl md:text-2xl tracking-[0.14em] font-semibold transition-colors duration-300 ${
                solid ? "text-forest-deep" : "text-cream"
              }`}
            >
              MYCORA
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[16px] font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  solid
                    ? "text-forest-deep/80 hover:text-forest-deep after:bg-forest"
                    : "text-cream/90 hover:text-cream after:bg-cream"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className={`text-[16px] font-medium transition-colors ${
                solid ? "text-forest-deep/80 hover:text-forest-deep" : "text-cream/90 hover:text-cream"
              }`}
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#shop"
              className={`ml-2 inline-flex items-center rounded-full px-6 py-3 text-[15px] font-semibold transition-all active:scale-[0.97] ${
                solid
                  ? "bg-forest text-cream hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/20"
                  : "bg-cream text-forest-deep hover:bg-taupe"
              }`}
            >
              Shop Fresh
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-[6px]"
          >
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                solid ? "bg-forest-deep" : "bg-cream"
              } ${open ? "translate-y-[7.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                solid ? "bg-forest-deep" : "bg-cream"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                solid ? "bg-forest-deep" : "bg-cream"
              } ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-cream/97 backdrop-blur-md border-t border-forest/10"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 text-lg font-display text-forest-deep border-b border-forest/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-3 mt-5">
                <a
                  href={CONTACT.phoneHref}
                  className="flex-1 text-center rounded-full border border-forest text-forest py-3 text-sm font-semibold"
                >
                  Call Now
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full bg-forest text-cream py-3 text-sm font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
