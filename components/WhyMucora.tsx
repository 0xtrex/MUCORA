"use client";

import { Sprout, Truck, ThermometerSnowflake, HandHeart } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Sprout,
    title: "Grown, not shipped in",
    text: "Every mushroom is farmed in-house from spore to flush — nothing trucked in from a wholesale market.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Zero cold storage",
    text: "We pack within an hour of harvest. What you get was never sitting in a warehouse fridge.",
  },
  {
    icon: Truck,
    title: "Same-day local drop",
    text: "Order before noon and it's on your counter by evening — delivered by our own riders.",
  },
  {
    icon: HandHeart,
    title: "Hand-picked, hand-checked",
    text: "Every pack is sorted by hand for size and firmness before it leaves the farm.",
  },
];

export default function WhyMucora() {
  return (
    <section className="relative bg-cream py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-forest/40" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">
              Why MUCORA
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-2xl leading-[1.05]">
            Freshness isn&apos;t a promise. It&apos;s a supply chain.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/10 rounded-2xl overflow-hidden">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.08 * i}>
              <div className="group h-full bg-cream hover:bg-forest transition-colors duration-500 p-8 md:p-9 flex flex-col gap-6 min-h-[260px]">
                <Icon
                  strokeWidth={1.3}
                  className="h-8 w-8 text-forest transition-colors duration-500 group-hover:text-cream"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest-deep transition-colors duration-500 group-hover:text-cream">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-forest-deep/65 transition-colors duration-500 group-hover:text-cream/75">
                    {text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
