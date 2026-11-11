import { Gem } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/content";

export const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="relative overflow-hidden border-y border-emerald-900/30 bg-[#071009] py-5"
  >
    <div className="marquee-track flex w-max items-center whitespace-nowrap">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 font-mono text-sm uppercase tracking-[0.35em] text-emerald-100/60">
            {item}
          </span>
          <Gem className="h-3.5 w-3.5 text-[#d4af37]/70" />
        </span>
      ))}
    </div>
  </div>
);
