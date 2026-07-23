import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Products from "@/components/Products";
import { CONTACT } from "@/lib/data";

type Props = {
  eyebrow: string;
  h1: string;
  intro: string;
  paragraphs: string[];
  faq: { q: string; a: string }[];
};

export default function LocalLandingPage({ eyebrow, h1, intro, paragraphs, faq }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-40 pb-20 max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-forest/40" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">
                {eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-3xl leading-[1.05]">
              {h1}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-forest-deep/70 leading-relaxed">{intro}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#shop"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[15px] font-semibold text-cream hover:bg-forest-deep transition-colors"
              >
                Shop the harvest
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-7 py-4 text-[15px] font-semibold text-forest-deep hover:bg-forest/5 transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </Reveal>

          <div className="mt-16 max-w-2xl space-y-5">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-[16px] leading-relaxed text-forest-deep/75">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 max-w-2xl">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-forest-deep">
                Frequently asked questions
              </h2>
            </Reveal>
            <div className="mt-6 space-y-6">
              {faq.map((item, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <div className="border-b border-forest/10 pb-6">
                    <h3 className="font-display font-semibold text-forest-deep">{item.q}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-forest-deep/65">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Products />
      </main>
      <Footer />
    </>
  );
}
