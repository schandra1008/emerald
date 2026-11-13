import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { BLOG_POSTS } from "@/data/content";
import { startLenis, stopLenis } from "@/lib/lenis";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const Blogs = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active) stopLenis();
    else startLenis();
  }, [active]);

  return (
    <section id="blogs" data-testid="blogs-section" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          overline="Culinary Journal"
          title={
            <>
              Stories from <span className="italic text-[#d4af37]">the charcoal line.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={0.1 * i}>
              <article
                data-testid={post.testId}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-emerald-900/30 bg-[#0d1310]/90 transition-all duration-300 hover:border-[#d4af37]/50"
                onClick={() => setActive(post)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1310] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                    <span className="text-[#d4af37]">{post.category}</span>
                    <span className="h-px w-6 bg-emerald-900/60" />
                    <span className="text-emerald-100/40">{post.date}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-[#fcfbf7] transition-colors group-hover:text-[#f0d77b]">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-emerald-100/60">{post.excerpt}</p>
                  <span className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/40 transition-colors group-hover:text-[#d4af37]">
                    Read story
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            data-testid="blog-modal"
            className="fixed inset-0 z-[95] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setActive(null)} />
            <motion.div
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-emerald-900/40 bg-[#0d1310]"
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative h-60">
                <img src={active.img} alt={active.title} decoding="async" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1310] via-transparent to-transparent" />
                <button
                  data-testid="blog-modal-close"
                  onClick={() => setActive(null)}
                  className="absolute right-5 top-5 rounded-full border border-emerald-900/50 bg-[#050807]/70 p-2 text-emerald-100/70 backdrop-blur-sm transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                  aria-label="Close article"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                  <span className="text-[#d4af37]">{active.category}</span>
                  <span className="h-px w-6 bg-emerald-900/60" />
                  <span className="text-emerald-100/40">{active.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-snug text-[#fcfbf7]">
                  {active.title}
                </h3>
                {active.body.split("\n\n").map((para, idx) => (
                  <p key={idx} className="mt-4 leading-relaxed text-emerald-100/70">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
