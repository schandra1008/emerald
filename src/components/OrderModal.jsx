import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { DELIVERY, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/data/content";
import { startLenis, stopLenis } from "@/lib/lenis";
import { LogoMark } from "@/components/Logo";

export const OrderModal = ({ open, onClose }) => {
  useEffect(() => {
    if (open) stopLenis();
    else startLenis();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="order-modal"
          className="fixed inset-0 z-[95] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-900/40 bg-[#0d1310] p-8"
            initial={{ y: 50, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              data-testid="order-modal-close"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-emerald-900/50 p-2 text-emerald-100/60 transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              aria-label="Close order modal"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
                Delivered to your door
              </p>
            </div>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-[#fcfbf7]">
              Order Emerald, hot off the coals.
            </h3>
            <p className="mt-2 text-sm text-emerald-100/60">
              Pick your delivery partner — same fire, thirty-odd minutes.
            </p>
            <div className="mt-6 space-y-3">
              {DELIVERY.map((d) => (
                <a
                  key={d.name}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`order-${d.name.toLowerCase().replace(/\s/g, "-")}-link`}
                  className="group flex items-center justify-between rounded-2xl border border-emerald-900/40 bg-emerald-950/30 px-5 py-4 transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-emerald-950/60"
                >
                  <span className="font-serif text-lg text-[#fcfbf7]">{d.name}</span>
                  <ArrowUpRight className="h-5 w-5 text-emerald-100/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d4af37]" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                data-testid="order-whatsapp-btn"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#10b981] px-4 py-3 text-sm font-semibold text-[#050807] transition-transform duration-200 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                data-testid="order-call-btn"
                href={PHONE_TEL}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-emerald-900/50 px-4 py-3 text-sm font-semibold text-emerald-100 transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
