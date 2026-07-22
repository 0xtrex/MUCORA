"use client";

import { PROCESS_STEPS } from "@/lib/data";
import Reveal from "./Reveal";
import MyceliumThread from "./MyceliumThread";

export default function Process() {
  return (
    <section id="process" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-forest/40" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">
              How it grows
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-2xl leading-[1.05]">
            From spore to your kitchen in four stages.
          </h2>
        </Reveal>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-4 gap-y-14 gap-x-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden md:block h-px bg-forest/15" />
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={0.1 * i}>
              <div className="relative flex flex-col">
                <div className="flex items-center gap-4 md:block">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-deep font-mono text-xs text-cream">
                    {s.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-forest-deep md:mt-6">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-forest-deep/65 max-w-xs">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <MyceliumThread
        vertical={false}
        color="#2E4B3B"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-[320px] h-[100px] opacity-70 hidden md:block"
      />
    </section>
  );
}
