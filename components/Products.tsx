"use client";

import { motion } from "framer-motion";
import { PRODUCTS, CONTACT } from "@/lib/data";
import MushroomMark from "./MushroomMark";
import Reveal from "./Reveal";

const VARIANT_BG: Record<string, string> = {
  oyster: "bg-forest",
  button: "bg-taupe",
  shiitake: "bg-forest-deep",
  milky: "bg-taupe-light",
  portobello: "bg-forest-light",
  lionsmane: "bg-forest",
};

export default function Products() {
  return (
    <section id="shop" className="relative bg-forest-deep py-28 md:py-36 grain overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-taupe" />
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-taupe">
                  This week&apos;s harvest
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.05]">
                Six varieties.
                <br />
                Picked this morning.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-cream/60 leading-relaxed">
              Prices update with the season. Tap a variety to order it directly
              on WhatsApp — no account, no checkout, just a message.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * (i % 3)}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 overflow-hidden h-full"
              >
                {p.tag && (
                  <span className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-wider rounded-full border border-cream/25 text-cream/70 px-2.5 py-1">
                    {p.tag}
                  </span>
                )}
                <div
                  className={`relative flex h-40 items-center justify-center rounded-xl ${VARIANT_BG[p.variant]} overflow-hidden`}
                >
                  <MushroomMark
                    strokeWidth={0.9}
                    className="h-24 w-24 text-cream/90 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  />
                </div>

                <div className="mt-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-semibold text-cream">{p.name}</h3>
                  <p className="font-mono text-[11px] italic text-taupe mt-1">{p.latin}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-cream/60 flex-1">
                    {p.blurb}
                  </p>

                  <div className="mt-6 flex items-center justify-between pt-5 border-t border-cream/10">
                    <div>
                      <span className="font-display text-lg font-semibold text-cream">
                        ₹{p.price}
                      </span>
                      <span className="ml-1.5 text-xs text-cream/45">/ {p.unit}</span>
                    </div>
                    <a
                      href={`${CONTACT.whatsappHref}%20I%27d%20like%20to%20order%3A%20${encodeURIComponent(
                        p.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[13px] font-semibold text-forest-deep transition-all hover:bg-taupe active:scale-95"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
