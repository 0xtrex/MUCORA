import { CONTACT, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-forest/10">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
                <img
                  src="/logo.png"
                  alt="MUCORA logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display text-lg tracking-[0.14em] font-semibold text-forest-deep">
                MUCORA
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-deep/60">
              Farm-fresh mushrooms, grown local and delivered the same day
              they&apos;re picked.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-forest-deep/40">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-forest-deep/70 hover:text-forest-deep transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-forest-deep/40">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="text-sm text-forest-deep/70 hover:text-forest-deep transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-forest-deep/70 hover:text-forest-deep transition-colors"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-forest-deep/70 hover:text-forest-deep transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-forest-deep/40">
              Follow
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="text-sm text-forest-deep/70 hover:text-forest-deep transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-forest-deep/70 hover:text-forest-deep transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-forest/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-deep/45">
            &copy; {year} MUCORA. All rights reserved.
          </p>
          <p className="text-xs text-forest-deep/45">
            Grown with care, delivered with speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
