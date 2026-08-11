import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { CONTACT } from "@/lib/data";
import { RECIPES } from "@/lib/recipes-data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return RECIPES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const recipe = RECIPES.find((r) => r.slug === params.slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} রেসিপি`,
    description: recipe.description,
  };
}

export default function RecipeDetailPage({ params }: Props) {
  const recipe = RECIPES.find((r) => r.slug === params.slug);
  if (!recipe) notFound();

  const related = RECIPES.filter((r) => r.slug !== recipe.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <article className="pt-40 pb-24 max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <a
              href="/recipes"
              className="font-mono text-xs uppercase tracking-wider text-forest/60 hover:text-forest transition-colors"
            >
              &larr; সব রেসিপি দেখুন
            </a>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <Reveal delay={0.05}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-forest/10">
                <SafeImage
                  src={`/recipes/${recipe.slug}.png`}
                  alt={recipe.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.1}>
                <h1 className="font-display text-balance text-3xl md:text-4xl font-semibold text-forest-deep leading-[1.15]">
                  {recipe.title}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-forest-deep/70 leading-relaxed">{recipe.description}</p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-forest-deep/5 px-4 py-2 text-sm font-medium text-forest-deep">
                    ⏱ {recipe.time}
                  </span>
                  <span className="rounded-full bg-forest-deep/5 px-4 py-2 text-sm font-medium text-forest-deep">
                    👥 {recipe.servings}
                  </span>
                  <span className="rounded-full bg-forest-deep/5 px-4 py-2 text-sm font-medium text-forest-deep">
                    📊 {recipe.difficulty}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8">
                  <h2 className="font-display text-xl font-semibold text-forest-deep mb-4">
                    উপকরণ
                  </h2>
                  <ul className="space-y-2.5">
                    {recipe.ingredients.map((ing, i) => (
                      <li
                        key={i}
                        className="flex items-baseline justify-between gap-4 border-b border-forest/10 pb-2.5 text-[15px]"
                      >
                        <span className="text-forest-deep/85">{ing.item}</span>
                        <span className="font-mono text-[13px] text-forest-deep/50 whitespace-nowrap">
                          {ing.qty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 max-w-2xl">
              <h2 className="font-display text-xl font-semibold text-forest-deep mb-6">
                রন্ধনপ্রণালী
              </h2>
              <ol className="space-y-5">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-deep font-mono text-xs text-cream">
                      {i + 1}
                    </span>
                    <p className="text-[15.5px] leading-relaxed text-forest-deep/80 pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-16 rounded-2xl bg-forest-deep p-8 md:p-10 text-center">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-cream">
                তাজা বাটন মাশরুম দরকার?
              </h3>
              <p className="mt-2 text-cream/70 text-sm">
                এই রেসিপির জন্য MUCORA থেকে অর্ডার করুন — একদম তাজা, খামার থেকে সরাসরি।
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="/#shop"
                  className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest-deep hover:bg-taupe transition-colors"
                >
                  শপ থেকে অর্ডার করুন
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
                >
                  WhatsApp করুন
                </a>
              </div>
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={0.3}>
              <div className="mt-16 pt-10 border-t border-forest/10">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-forest-deep/40 mb-5">
                  আরও রেসিপি দেখুন
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <a
                      key={r.slug}
                      href={`/recipes/${r.slug}`}
                      className="rounded-xl bg-white border border-forest/[0.06] p-4 hover:shadow-md transition-shadow"
                    >
                      <span className="font-display font-semibold text-forest-deep text-[15px]">
                        {r.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
