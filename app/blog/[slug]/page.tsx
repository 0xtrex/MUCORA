import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { CONTACT } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog-data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <article className="pt-40 pb-24 max-w-content mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <a href="/blog" className="font-mono text-xs uppercase tracking-wider text-forest/60 hover:text-forest transition-colors">
                &larr; Back to journal
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-balance text-3xl md:text-5xl font-semibold text-forest-deep leading-[1.1]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-5 font-mono text-xs uppercase tracking-wider text-taupe">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}{" "}
                &middot; {post.readTime}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5">
                {post.content.map((para, i) => (
                  <p key={i} className="text-[17px] leading-relaxed text-forest-deep/80">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 rounded-2xl bg-forest-deep p-8 md:p-10 text-center">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-cream">
                  Ready to order fresh mushrooms?
                </h3>
                <p className="mt-2 text-cream/70 text-sm">
                  Message us on WhatsApp or browse this week&apos;s harvest.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href="/#shop"
                    className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest-deep hover:bg-taupe transition-colors"
                  >
                    Shop the harvest
                  </a>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </Reveal>

            {related.length > 0 && (
              <Reveal delay={0.25}>
                <div className="mt-16 pt-10 border-t border-forest/10">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-forest-deep/40">
                    Keep reading
                  </h4>
                  <div className="mt-5 space-y-4">
                    {related.map((r) => (
                      <a
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block text-forest-deep font-display font-medium hover:text-forest transition-colors"
                      >
                        {r.title} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
