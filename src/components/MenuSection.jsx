import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const MenuSection = () => {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter(
      (item) =>
        (category === "all" || item.category === category) &&
        (!q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <section id="menu" data-testid="menu-section" className="relative bg-[#071009] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          overline="The Menu"
          title={
            <>
              Multi-cuisine, <span className="italic text-[#d4af37]">one fire.</span>
            </>
          }
          description="Charcoal & grills, Arabic rice plates, American fusion, Asian favorites and the sweet finish — every dish leaves the same kitchen."
        />

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  data-testid={cat.testId}
                  onClick={() => setCategory(cat.id)}
                  className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    category === cat.id
                      ? "bg-[#d4af37] font-semibold text-[#050807]"
                      : "border border-emerald-900/50 text-emerald-100/60 hover:border-[#d4af37]/50 hover:text-[#d4af37]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-100/40" />
              <input
                data-testid="menu-search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the menu..."
                className="w-full border-b border-emerald-900/50 bg-transparent py-3 pl-7 font-mono text-sm text-[#fcfbf7] placeholder:text-emerald-100/30 focus:border-[#d4af37] focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                layout
                key={item.name}
                data-testid={`menu-item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.02, ease: "easeOut" }}
                className="group border-b border-emerald-900/30 py-5"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-[#d4af37]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#fcfbf7] transition-colors group-hover:text-[#f0d77b] sm:text-xl">
                    {item.name}
                  </h3>
                  <span className="mx-1 flex-1 border-b border-dashed border-emerald-900/40" />
                  <span className="whitespace-nowrap font-mono text-sm text-[#d4af37]">
                    AED {item.price}
                  </span>
                </div>
                <p className="mt-1 pl-8 text-sm text-emerald-100/50">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {items.length === 0 && (
          <p data-testid="menu-empty-state" className="mt-12 text-center font-mono text-sm text-emerald-100/40">
            Nothing on the grill by that name — try "charcoal" or "kabsa".
          </p>
        )}

        <Reveal delay={0.1}>
          <p className="mt-14 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-100/40">
            Dine-in · Takeaway · Delivery — prices in UAE Dirhams
          </p>
        </Reveal>
      </div>
    </section>
  );
};
