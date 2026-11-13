import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { IMAGES, STATS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const Stat = ({ value, suffix, label, testId }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} data-testid={testId} className="border-l border-emerald-900/40 pl-5">
      <p className="font-serif text-5xl font-bold text-[#fcfbf7] lg:text-6xl">
        {String(display).padStart(2, "0")}
        <span className="text-[#d4af37]">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/50">
        {label}
      </p>
    </div>
  );
};

export const Story = () => (
  <section id="story" data-testid="story-section" className="relative py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        overline="Our Heritage"
        title={
          <>
            Four decades over <span className="italic text-[#d4af37]">open fire.</span>
          </>
        }
      />

      <div data-testid="story-bento-grid" className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7" delay={0.05}>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-emerald-900/30 bg-[#0d1310]/90 p-8 sm:p-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
                The Emerald Experience
              </p>
              <p className="mt-6 font-serif text-2xl leading-relaxed text-[#fcfbf7] sm:text-3xl">
                At Emerald Group, we blend innovation with tradition — a legacy
                spanning over four decades of dining, retail and trade in Dubai.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-emerald-100/70">
                At Emerald Restaurant, exceptional customer satisfaction begins long
                before the plate: the finest ingredients, sourced daily, crafted by
                our in-house chefs over live charcoal. Serving generations since
                1977, we take pride in a dining experience that stands the test of time.
              </p>
            </div>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-100/40">
              Emerald Group LLC · Dubai, UAE
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <div className="group relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-emerald-900/30">
            <img
              src={IMAGES.charcoalFlame}
              alt="Live charcoal grill at Emerald"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050807]/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#f0d77b]">
              The fire never went out
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="group relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-emerald-900/30">
            <img
              src={IMAGES.dubaiNight}
              alt="Dubai at night"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050807]/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#f0d77b]">
              Deira 1977 → Marina 2026
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.2}>
          <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-[#0d1310] to-[#0a1f17] p-8 sm:p-12">
            <Quote className="h-8 w-8 text-[#d4af37]" />
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-[#fcfbf7] sm:text-3xl">
              "Serving generations isn't our slogan. It's our ledger — every family,
              every table, every night since 1977."
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-100/50">
              The Emerald Family
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.testId} {...s} />
        ))}
      </div>
    </div>
  </section>
);
