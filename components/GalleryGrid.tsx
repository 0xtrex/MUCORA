"use client";
import Reveal from "./Reveal";

type Props = { images: string[] };

export default function GalleryGrid({ images }: Props) {
  if (images.length === 0) {
    return (
      <div className="mt-16 rounded-2xl border border-dashed border-forest/20 p-12 text-center">
        <p className="font-mono text-sm text-forest-deep/50">
          No photos yet — drop image files into <code className="text-forest-deep/70">public/gallery/</code> and they&apos;ll show up here automatically.
        </p>
      </div>
    );
  }
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((file, i) => (
        <Reveal key={file} delay={Math.min(i * 0.04, 0.4)} className="relative aspect-square rounded-2xl overflow-hidden bg-forest/5 group">
          <img
            src={`/gallery/${encodeURIComponent(file)}`}
            alt="MUCORA farm"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  );
}
