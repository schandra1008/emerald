import { Instagram, Mail } from "lucide-react";
import { DELIVERY, EMAIL, INSTAGRAM_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/data/content";
import { scrollToId } from "@/lib/lenis";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

export const Footer = () => (
  <footer data-testid="footer-section" className="relative overflow-hidden border-t border-emerald-900/30">
    <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#064e3b]/25 blur-[140px]" />
    <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <Reveal>
        <button
          data-testid="footer-logo"
          onClick={() => scrollToId("#top")}
          className="flex items-center gap-5 text-left"
          aria-label="Back to top"
        >
          <LogoMark className="h-14 w-14" />
          <span className="font-serif text-5xl font-bold tracking-tight text-[#fcfbf7] sm:text-6xl">
            EMERALD
            <span className="block font-mono text-[10px] font-normal uppercase tracking-[0.5em] text-[#d4af37]">
              Serving Generations Since 1977
            </span>
          </span>
        </button>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 border-t border-emerald-900/30 pt-10 sm:grid-cols-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-100/40">Explore</p>
          <div className="mt-4 flex flex-col gap-2.5">
            {NAV_LINKS.slice(1).map((link) => (
              <button
                key={link.href}
                data-testid={`footer-${link.testId}`}
                onClick={() => scrollToId(link.href)}
                className="w-fit text-sm text-emerald-100/60 transition-colors hover:text-[#d4af37]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-100/40">Contact</p>
          <div className="mt-4 space-y-2.5 text-sm text-emerald-100/60">
            <a href={PHONE_TEL} className="block transition-colors hover:text-[#d4af37]">
              {PHONE_DISPLAY}
            </a>
            <a
              data-testid="footer-email-link"
              href={`mailto:${EMAIL}`}
              className="flex w-fit items-center gap-2 transition-colors hover:text-[#d4af37]"
            >
              <Mail className="h-3.5 w-3.5" /> {EMAIL}
            </a>
            <a
              data-testid="footer-instagram-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 transition-colors hover:text-[#d4af37]"
            >
              <Instagram className="h-3.5 w-3.5" /> @emeraldrestaurantuae
            </a>
            <p className="max-w-xs pt-2 text-xs leading-relaxed text-emerald-100/40">
              #19, 4th Floor, E-Block, Al Shoala (Naboodah) Building, Port Saeed, Deira, Dubai, UAE
            </p>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-100/40">Delivery</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {DELIVERY.map((d) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-${d.name.toLowerCase().replace(/\s/g, "-")}-link`}
                className="rounded-full border border-emerald-900/50 px-4 py-1.5 font-mono text-[11px] tracking-wider text-emerald-200/70 transition-all duration-300 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              >
                {d.name}
              </a>
            ))}
          </div>
          <p className="mt-6 max-w-xs font-serif text-lg italic leading-relaxed text-emerald-100/50">
            "The fire never went out."
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-emerald-900/30 pt-8 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-100/40">
          © 2026 Emerald Group LLC — All Rights Reserved
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-100/40">
          Deira · Dubai Marina · UAE
        </p>
      </div>
    </div>
  </footer>
);
