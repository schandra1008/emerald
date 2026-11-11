import { Reveal } from "@/components/Reveal";

export const SectionHeader = ({ overline, title, description, align = "left" }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d4af37]">{overline}</p>
    </Reveal>
    <Reveal delay={0.1}>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug tracking-tight text-[#fcfbf7] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.2}>
        <p className="mt-5 text-base leading-relaxed text-emerald-100/70 sm:text-lg">{description}</p>
      </Reveal>
    )}
  </div>
);
