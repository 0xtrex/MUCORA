"use client";

import { MapPin, Clock3 } from "lucide-react";
import { DELIVERY_AREAS, CONTACT } from "@/lib/data";
import Reveal from "./Reveal";

export default function DeliveryArea() {
  const loopAreas = [...DELIVERY_AREAS, ...DELIVERY_AREAS];

  return (
    <section id="delivery" className="relative bg-forest py-28 md:py-32 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-cream/40" />
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-cream/60">
                  Local delivery
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-balance text-4xl md:text-5xl font-semibold text-cream leading-[1.05]">
                Currently delivering across your city — expanding every season.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
                MUCORA is a local-first farm. We deliver fresh within our
                current radius today, with more zones opening as our harvest
                grows — and a national shipping line on the way.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                  <Clock3 strokeWidth={1.4} className="h-6 w-6 text-taupe shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display text-cream font-semibold">Order by 12 PM</div>
                    <div className="text-sm text-cream/55">Delivered same evening</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin strokeWidth={1.4} className="h-6 w-6 text-taupe shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display text-cream font-semibold">Not sure you&apos;re in range?</div>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-taupe underline underline-offset-4 hover:text-cream transition-colors"
                    >
                      Ask us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-cream/45">
                Zones we currently serve
              </span>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {DELIVERY_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 rounded-lg bg-cream/[0.05] px-3.5 py-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-taupe" />
                    <span className="text-[14px] text-cream/85">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 border-t border-cream/10 pt-10 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {loopAreas.map((area, i) => (
            <span
              key={`${area}-${i}`}
              className="font-display text-4xl md:text-5xl font-semibold text-cream/[0.08] px-8 whitespace-nowrap"
            >
              {area} &middot;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
