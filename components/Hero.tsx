"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CONTACT } from "@/lib/data";
import MushroomMark from "./MushroomMark";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const spores = Array.from({ length: 14 });

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-forest-deep grain"
    >
      {/* ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-forest/60 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-taupe/20 blur-[140px]" />
      </div>

      {/* drifting spores */}
      <div className="pointer-events-none absolute inset-0">
        {spores.map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cream/70 animate-spore"
            style={{
              left: `${(i * 7.3) % 100}%`,
              bottom: `${(i * 13) % 60}%`,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]), scale }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]"
      >
        <MushroomMark className="w-[560px] h-[560px] text-cream" strokeWidth={0.6} />
      </motion.div>

      <div className="relative flex-1 flex items-center max-w-content mx-auto w-full px-6 md:px-10 pt-24 pb-16">
        <motion.div style={{ y, opacity }} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-taupe" />
            <span className="font-mono text-xs md:text-[13px] tracking-[0.25em] uppercase text-taupe-light text-taupe">
              Grown local &middot; Delivered fresh
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-[15vw] leading-[0.92] sm:text-[10.5vw] md:text-[7.5vw] lg:text-[104px] xl:text-[116px] font-bold text-cream max-w-5xl"
          >
            Grown in the dark.
            <br />
            <span className="text-taupe">Delivered in the light.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-lg text-xl text-cream/80 leading-relaxed"
          >
            MUCORA farms fresh mushrooms and gets them to your door the same
            day they&apos;re picked — no cold storage, no middlemen, just what
            was growing this morning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-base font-semibold text-forest-deep transition-all hover:bg-taupe active:scale-[0.97]"
            >
              Shop the harvest
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-base font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10 active:scale-[0.97]"
            >
              Order on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-cream/15 pt-6"
          >
            {[
              ["6", "varieties"],
              ["24hr", "farm to door"],
              ["0", "cold storage days"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-cream">{n}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-cream/50">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-2 text-cream/40">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-9 w-px bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
