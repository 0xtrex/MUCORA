"use client";

import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-cream py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-forest/40" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">
              Word of mouth
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-2xl leading-[1.05]">
            Trusted by home cooks and chefs alike.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <figure className="h-full flex flex-col rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(22,38,28,0.06)] border border-forest/[0.06]">
                <span className="font-display text-4xl text-taupe leading-none">&ldquo;</span>
                <blockquote className="mt-2 flex-1 text-[15.5px] leading-relaxed text-forest-deep/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-forest/10">
                  <div className="font-display font-semibold text-forest-deep text-[15px]">
                    {t.name}
                  </div>
                  <div className="text-xs text-forest-deep/50 mt-0.5">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
