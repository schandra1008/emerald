import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { LOCATIONS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const Locations = () => (
  <section id="locations" data-testid="locations-section" className="relative py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeader
        overline="Find Us"
        title={
          <>
            Two homes, <span className="italic text-[#d4af37]">one flame.</span>
          </>
        }
        description="Better yet, see us in person — Deira where it began, and our newest home on the Marina promenade."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {LOCATIONS.map((loc, i) => (
          <Reveal key={loc.id} delay={0.1 * i}>
            <div
              data-testid={loc.testId}
              className="group h-full overflow-hidden rounded-3xl border border-emerald-900/30 bg-[#0d1310]/90 transition-all duration-300 hover:border-[#d4af37]/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={loc.img}
                  alt={loc.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1310] via-[#050807]/20 to-transparent" />
                <span
                  className={`absolute left-5 top-5 rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] backdrop-blur-sm ${
                    loc.id === "marina"
                      ? "border border-[#d4af37]/50 bg-[#d4af37]/15 text-[#f0d77b]"
                      : "border border-emerald-800/60 bg-emerald-950/70 text-emerald-300"
                  }`}
                >
                  {loc.badge}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold text-[#fcfbf7]">{loc.name}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-emerald-100/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                  {loc.address}
                </p>
                <div className="mt-5 space-y-2 border-t border-emerald-900/30 pt-5">
                  {loc.hours.map((h) => (
                    <p key={h.day} className="flex items-center justify-between font-mono text-xs text-emerald-100/60">
                      <span className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[#d4af37]/70" />
                        {h.day}
                      </span>
                      <span>{h.time}</span>
                    </p>
                  ))}
                </div>
                <p className="mt-4 font-serif text-sm italic text-emerald-100/50">"{loc.note}"</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    data-testid={loc.id === "marina" ? "whatsapp-order-btn" : `whatsapp-${loc.id}-btn`}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#10b981] px-5 py-2.5 text-xs font-semibold text-[#050807] transition-transform duration-200 hover:scale-[1.03]"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    data-testid={loc.id === "marina" ? "call-now-btn" : `call-${loc.id}-btn`}
                    href={PHONE_TEL}
                    className="flex items-center gap-2 rounded-full border border-emerald-900/50 px-5 py-2.5 text-xs font-semibold text-emerald-100 transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                  >
                    <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
                  </a>
                  <a
                    data-testid={`directions-${loc.id}-link`}
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-100/50 transition-colors hover:text-[#d4af37]"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
