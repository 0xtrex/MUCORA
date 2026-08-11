import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Our Farm & Fresh Mushrooms",
  description: "A look inside MUCORA — our farm, grow rooms, harvesting process, and the fresh mushrooms we deliver every day.",
};

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs.readdirSync(dir).filter((file) => /\.(jpe?g|png|webp)$/i.test(file)).sort();
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const images = getGalleryImages();
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-40 pb-24 max-w-content mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-forest/40" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-forest/60">Gallery</span>
          </div>
          <h1 className="font-display text-balance text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-deep max-w-2xl leading-[1.05]">
            A look inside MUCORA.
          </h1>
          <p className="mt-6 max-w-xl text-forest-deep/70 leading-relaxed">
            Our farm, our grow rooms, our harvest, and the mushrooms we deliver fresh every day.
          </p>
          <GalleryGrid images={images} />
        </section>
      </main>
      <Footer />
    </>
  );
}
