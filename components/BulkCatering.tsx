"use client";

import { PackageCheck, ChefHat, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/data";
import Reveal from "./Reveal";

export default function BulkCatering() {
  return (
    <section id="bulk" className="relative bg-taupe py-24 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-forest-deep/40" />
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest-deep/70">
                  Bulk &amp; catering orders
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-balance text-3xl md:text-4xl lg:text-5xl font-semibold text-forest-deep leading-[1.1]">
                Farm-fresh mushrooms in bulk, at the best price in West Bengal.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-forest-deep/75 leading-relaxed text-[16.5px]">
                We supply caterers, restaurants, and event kitchens directly
                from our farm — no distributor markup, no cold-storage delay.
                Every bulk order comes with zero preservatives and zero
                bleach, exactly as it leaves the farm.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`${CONTACT.whatsappHref}%20I%27d%20like%20to%20enquire%20about%20a%20bulk%2Fcatering%20order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-4 text-[15px] font-semibold text-cream transition-all hover:bg-forest active:scale-[0.97]"
                >
                  Enquire on WhatsApp
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-forest-deep/30 px-7 py-4 text-[15px] font-semibold text-forest-deep hover:bg-forest-deep/5 transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              {
                icon: PackageCheck,
                title: "Cheapest bulk pricing in West Bengal",
                text: "Direct from farm to your kitchen — no middlemen markup.",
              },
              {
                icon: ShieldCheck,
                title: "Zero preservative, zero bleach",
                text: "Every bulk order arrives exactly as it left the farm.",
              },
              {
                icon: ChefHat,
                title: "Built for caterers & restaurants",
                text: "Consistent size and quality, order after order.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.08 * i}>
                <div className="flex items-start gap-4 rounded-2xl bg-cream/60 p-5">
                  <Icon strokeWidth={1.4} className="h-7 w-7 text-forest-deep shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-forest-deep text-[15px]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-forest-deep/65">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
