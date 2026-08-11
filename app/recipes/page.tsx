import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { RECIPES } from "@/lib/recipes-data";

export const metadata: Metadata = {
  title: "বাটন মাশরুমের রেসিপি — ২০+ বাংলা রেসিপি",
  description:
    "MUCORA-এর ২০+ বাংলা বাটন মাশরুম রেসিপি — ঝোল, কষা, ভাজা, বিরিয়ানি থেকে স্যুপ, স্যান্ডউইচ সবকিছু, সম্পূর্ণ পরিমাণ ও পদ্ধতি সহ।",
};

export default function RecipesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-40 pb-24 max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-forest/40" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">
                রেসিপি বুক
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-3xl leading-[1.1]">
              বাটন মাশরুম দিয়ে ২০+ বাংলা রেসিপি
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-forest-deep/70 leading-relaxed">
              ঝোল থেকে বিরিয়ানি, ভাজা থেকে স্যুপ — আপনার প্রিয় বাটন মাশরুম
              দিয়ে তৈরি করুন এই সহজ, ধাপে ধাপে বাংলা রেসিপিগুলো।
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECIPES.map((r, i) => (
              <Reveal key={r.slug} delay={0.04 * (i % 6)}>
                <a
                  href={`/recipes/${r.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-white border border-forest/[0.06] overflow-hidden shadow-[0_1px_2px_rgba(22,38,28,0.06)] transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] bg-forest/10 overflow-hidden">
                    <SafeImage
                      src={`/recipes/${r.slug}.png`}
                      alt={r.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wider rounded-full bg-forest-deep/90 text-cream px-2.5 py-1">
                      {r.difficulty}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="font-display text-lg font-semibold text-forest-deep group-hover:text-forest transition-colors">
                      {r.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-forest-deep/65 flex-1">
                      {r.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 pt-4 border-t border-forest/10 font-mono text-[11px] uppercase tracking-wider text-forest-deep/45">
                      <span>{r.time}</span>
                      <span>&middot;</span>
                      <span>{r.servings}</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
