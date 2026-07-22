"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";
import Reveal from "./Reveal";
import MyceliumThread from "./MyceliumThread";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-forest-deep py-28 md:py-32 overflow-hidden grain">
      <MyceliumThread
        color="#E8DEC9"
        className="pointer-events-none absolute -top-10 -left-16 w-[220px] h-[360px] opacity-40 hidden lg:block"
      />
      <MyceliumThread
        color="#B7A48A"
        className="pointer-events-none absolute -bottom-16 -right-10 w-[220px] h-[360px] opacity-40 hidden lg:block rotate-180"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-taupe">
            Ready when you are
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-balance text-4xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.02] max-w-3xl mx-auto">
            Fresh mushrooms are one message away.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg mx-auto text-cream/65 leading-relaxed">
            Call us or drop a WhatsApp message — tell us what you need and
            we&apos;ll confirm your delivery slot right away.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-cream px-8 py-4 text-[15px] font-semibold text-forest-deep transition-all hover:bg-taupe active:scale-[0.97]"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
              WhatsApp Now
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-8 py-4 text-[15px] font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10 active:scale-[0.97]"
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
