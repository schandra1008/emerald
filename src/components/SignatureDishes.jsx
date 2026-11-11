import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { DELIVERY, SIGNATURE_DISHES } from "@/data/content";
import { startLenis, stopLenis } from "@/lib/lenis";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const SignatureDishes = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active) stopLenis();
    else startLenis();
  }, [active]);

  return (
    <section id="signatures" data-testid="signatures-section" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            overline="Signature Dishes"
            title={
              <>
                The plates that built <span className="italic text-[#d4af37]">a legend.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-emerald-100/50">
              From the Americas to the Middle East to the rest of Asia — one kitchen,
              one fire, no borders.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SIGNATURE_DISHES.map((dish, i) => (
            <Reveal key={dish.id} delay={0.06 * i} className={dish.span}>
              <button
                data-testid={dish.testId}
                onClick={() => setActive(dish)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-emerald-900/30 bg-[#0d1310]/90 text-left transition-all duration-300 hover:border-[#d4af37]/50 hover:shadow-[0_10px_40px_rgba(16,185,129,0.12)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1310] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-[#d4af37]/40 bg-[#050807]/70 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-[#f0d77b] backdrop-blur-sm">
                    {dish.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold text-[#fcfbf7] transition-colors group-hover:text-[#f0d77b]">
                      {dish.name}
                    </h3>
                    <span className="whitespace-nowrap font-mono text-sm text-[#d4af37]">{dish.price}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-emerald-100/60">{dish.desc}</p>
                  <span className="mt-auto flex items-center gap-2 pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/40 transition-colors group-hover:text-[#d4af37]">
                    View dish
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            data-testid="dish-modal"
            className="fixed inset-0 z-[95] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setActive(null)} />
            <motion.div
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-emerald-900/40 bg-[#0d1310]"
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative h-64 sm:h-72">
                <img src={active.img} alt={active.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1310] via-transparent to-transparent" />
                <button
                  data-testid="dish-modal-close"
                  onClick={() => setActive(null)}
                  className="absolute right-5 top-5 rounded-full border border-emerald-900/50 bg-[#050807]/70 p-2 text-emerald-100/70 backdrop-blur-sm transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                  aria-label="Close dish details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-serif text-3xl font-semibold text-[#fcfbf7]">{active.name}</h3>
                  <span className="font-mono text-lg text-[#d4af37]">{active.price}</span>
                </div>
                <p className="mt-3 leading-relaxed text-emerald-100/70">{active.desc}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/40">
                  Get it delivered —
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {DELIVERY.map((d) => (
                    <a
                      key={d.name}
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`dish-modal-${d.name.toLowerCase().replace(/\s/g, "-")}-link`}
                      className="flex items-center gap-1.5 rounded-full border border-emerald-900/50 px-4 py-2 font-mono text-[11px] tracking-wider text-emerald-200/80 transition-all duration-300 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                    >
                      {d.name} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
