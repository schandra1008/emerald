import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/data/content";
import { scrollToId, startLenis, stopLenis } from "@/lib/lenis";
import { LogoWordmark } from "@/components/Logo";
import { OrderModal } from "@/components/OrderModal";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawer) stopLenis();
    else startLenis();
  }, [drawer]);

  const go = (href) => {
    setDrawer(false);
    scrollToId(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-emerald-900/30 bg-[#050807]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            data-testid="nav-logo"
            onClick={() => go("#top")}
            className="transition-opacity hover:opacity-80"
            aria-label="Emerald home"
          >
            <LogoWordmark compact />
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.slice(1).map((link) => (
              <button
                key={link.href}
                data-testid={link.testId}
                onClick={() => go(link.href)}
                className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-100/70 transition-colors hover:text-[#fcfbf7]"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              data-testid="nav-phone"
              href={PHONE_TEL}
              className="hidden items-center gap-2 font-mono text-xs tracking-wider text-emerald-100/70 transition-colors hover:text-[#d4af37] xl:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </a>
            <motion.button
              data-testid="nav-order-btn"
              onClick={() => setOrderOpen(true)}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-[#d4af37] px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#050807] transition-colors duration-300 hover:bg-[#f0d77b]"
            >
              Order Now
            </motion.button>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setDrawer(true)}
              className="rounded-full border border-emerald-900/50 p-2.5 text-emerald-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {drawer && (
          <motion.div
            data-testid="nav-mobile-drawer"
            className="fixed inset-0 z-[90] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setDrawer(false)} />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col border-l border-emerald-900/40 bg-[#0a0f0d] p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <LogoWordmark compact />
                <button
                  data-testid="nav-mobile-close"
                  onClick={() => setDrawer(false)}
                  className="rounded-full border border-emerald-900/50 p-2 text-emerald-100"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    data-testid={`mobile-${link.testId}`}
                    onClick={() => go(link.href)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="border-b border-emerald-900/30 py-4 text-left font-serif text-2xl text-[#fcfbf7] transition-colors hover:text-[#d4af37]"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <a
                href={PHONE_TEL}
                className="mt-auto flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-100/60"
              >
                <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
};
