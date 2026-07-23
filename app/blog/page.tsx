import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Mushroom Guides & Local Delivery Blog",
  description:
    "Guides on mushroom varieties, nutrition, and where to buy fresh mushrooms online across Kolkata, Barasat, and West Bengal — from the team at MUCORA.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-40 pb-24 max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-forest/40" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">
                The MUCORA Journal
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-2xl leading-[1.05]">
              Mushroom guides, nutrition, and local delivery notes.
            </h1>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={0.06 * i}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-white border border-forest/[0.06] p-8 shadow-[0_1px_2px_rgba(22,38,28,0.06)] transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-taupe">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    &middot; {post.readTime}
                  </span>
                  <h2 className="mt-4 font-display text-xl md:text-2xl font-semibold text-forest-deep group-hover:text-forest transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-forest-deep/65 flex-1">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                    Read more
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
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
