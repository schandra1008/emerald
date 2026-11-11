import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const rotations = ["lg:-rotate-1", "lg:rotate-1", "lg:-rotate-1"];

export const Testimonials = () => (
  <section id="testimonials" data-testid="testimonials-section" className="relative bg-[#071009] py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        overline="We Value Your Feedback"
        title={
          <>
            Word travels <span className="italic text-[#d4af37]">faster than smoke.</span>
          </>
        }
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.testId} delay={0.1 * i}>
            <figure
              data-testid={t.testId}
              className={`flex h-full flex-col rounded-3xl border border-emerald-900/30 bg-[#0d1310]/90 p-8 transition-all duration-500 hover:rotate-0 hover:border-[#d4af37]/50 ${rotations[i]}`}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-lg italic leading-relaxed text-[#fcfbf7]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-emerald-900/30 pt-5">
                <p className="font-semibold text-[#fcfbf7]">{t.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/50">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
