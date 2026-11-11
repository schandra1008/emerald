import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Flame } from "lucide-react";
import { DELIVERY, IMAGES } from "@/data/content";
import { scrollToId } from "@/lib/lenis";
import { LogoMark } from "@/components/Logo";

const EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${className}`}>
    <motion.span
      className="block pr-[0.14em] will-change-transform"
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.15, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const RotatingBadge = () => (
  <div className="animate-spin-slow absolute -bottom-8 -left-6 h-28 w-28 sm:-left-10 sm:h-32 sm:w-32">
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
      </defs>
      <circle cx="50" cy="50" r="49" fill="#050807" stroke="rgba(212,175,55,0.35)" />
      <text className="fill-[#d4af37]" style={{ fontSize: "8.6px", letterSpacing: "2.6px" }}>
        <textPath href="#badge-circle">EMERALD · DUBAI · SINCE 1977 ·</textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <LogoMark className="h-9 w-9" />
    </div>
  </div>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[560px] w-[560px] rounded-full bg-[#064e3b]/30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-52 right-0 h-[480px] w-[480px] rounded-full bg-[#d97706]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-[#d4af37]"
          >
            <Flame className="h-3.5 w-3.5" />
            Est. 1977 · Deira → Dubai Marina
          </motion.p>

          <h1
            data-testid="hero-title"
            className="mt-6 font-serif font-bold leading-[0.95] tracking-tight text-[#fcfbf7]"
          >
            <MaskedLine delay={0.35} className="text-[clamp(2.6rem,8vw,6.6rem)]">
              SERVING
            </MaskedLine>
            <MaskedLine delay={0.5} className="text-[clamp(2.6rem,8vw,6.6rem)]">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d77b] to-[#d4af37] bg-clip-text italic text-transparent">
                GENERATIONS
              </span>
            </MaskedLine>
            <MaskedLine delay={0.68} className="mt-3">
              <span className="font-mono text-sm font-medium uppercase tracking-[0.5em] text-emerald-100/70 sm:text-base">
                — Since 1977
              </span>
            </MaskedLine>
          </h1>

          <motion.p
            data-testid="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-emerald-100/70 sm:text-lg"
          >
            Dubai's oldest flame. Charcoal chicken, shawarmas, kabsa and late-night
            legends — cooked over live fire for four decades, now by the Marina water.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.button
              data-testid="hero-menu-cta"
              onClick={() => scrollToId("#menu")}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-[#d4af37] px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#050807] transition-colors duration-300 hover:bg-[#f0d77b]"
            >
              Explore the Menu
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.button>
            <motion.button
              data-testid="hero-reserve-cta"
              onClick={() => scrollToId("#contact")}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-emerald-100/25 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fcfbf7] transition-colors duration-300 hover:border-[#d4af37]/70 hover:text-[#d4af37]"
            >
              Reserve a Table
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/40">
              Order in —
            </span>
            {DELIVERY.map((d) => (
              <a
                key={d.name}
                data-testid={d.testId}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-900/50 bg-emerald-950/40 px-4 py-1.5 font-mono text-[11px] tracking-wider text-emerald-200/80 transition-all duration-300 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              >
                {d.name}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
            className="relative mx-auto max-w-md"
          >
            <div className="overflow-hidden rounded-b-3xl rounded-t-[999px] border border-emerald-900/40 shadow-[0_40px_120px_rgba(2,44,34,0.6)]">
              <motion.img
                src={IMAGES.heroDish}
                alt="Emerald signature charcoal feast"
                data-testid="hero-dish-image"
                style={{ y: imgY }}
                className="h-[440px] w-full scale-115 object-cover sm:h-[540px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050807]/50 via-transparent to-transparent" />
            </div>
            <RotatingBadge />
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
              className="absolute -right-3 top-14 rounded-2xl border border-emerald-900/40 bg-[#0d1310]/90 px-4 py-3 backdrop-blur-md sm:-right-8"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#d4af37]">
                Charcoal-fired
              </p>
              <p className="mt-1 font-serif text-lg text-[#fcfbf7]">49 years of fire</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        data-testid="hero-scroll-cue"
        onClick={() => scrollToId("#story")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-emerald-100/40 transition-colors hover:text-[#d4af37] md:flex"
        aria-label="Scroll to story"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.35em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
};
