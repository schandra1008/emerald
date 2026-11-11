import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { EMAIL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const initialForm = { name: "", phone: "", email: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Tell us your name";
    if (!form.email.trim()) next.email = "We need an email to reply";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "That email looks off";
    if (!form.message.trim()) next.message = "A few words go a long way";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm(initialForm);
      toast.success("Shukran! Your message is on its way — we'll reply within a day.");
    }, 900);
  };

  const inputClass = (key) =>
    `w-full border-b bg-transparent py-3 text-sm text-[#fcfbf7] placeholder:text-emerald-100/30 focus:outline-none transition-colors ${
      errors[key] ? "border-red-400/70" : "border-emerald-900/50 focus:border-[#d4af37]"
    }`;

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-[#071009] py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            overline="Get in Touch"
            title={
              <>
                Reserve a table, or just <span className="italic text-[#d4af37]">say salaam.</span>
              </>
            }
            description="Call or WhatsApp to order or reserve — or drop us a line and the family will get back to you."
          />
          <div className="mt-10 space-y-6">
            {[
              {
                icon: MapPin,
                label: "Head Office",
                value: "#19, 4th Floor, E-Block, Al Shoala (Naboodah) Building, Port Saeed, Deira, Dubai, UAE",
              },
              { icon: Phone, label: "Call / WhatsApp", value: PHONE_DISPLAY, href: PHONE_TEL },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Instagram, label: "Instagram", value: "@emeraldrestaurantuae", href: INSTAGRAM_URL },
            ].map((row) => (
              <Reveal key={row.label} delay={0.05}>
                <div className="flex items-start gap-4">
                  <span className="rounded-full border border-emerald-900/50 p-2.5 text-[#d4af37]">
                    <row.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-100/40">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-[#fcfbf7] transition-colors hover:text-[#d4af37]"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-[#fcfbf7]">{row.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <form
            data-testid="contact-form"
            onSubmit={submit}
            noValidate
            className="rounded-3xl border border-emerald-900/30 bg-[#0d1310]/90 p-8 sm:p-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#d4af37]">
              Drop us a line
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <input
                  data-testid="contact-name-input"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Name"
                  className={inputClass("name")}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <input
                    data-testid="contact-phone-input"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="Phone (optional)"
                    className={inputClass("phone")}
                  />
                </div>
                <div>
                  <input
                    data-testid="contact-email-input"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="Email*"
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div>
                <textarea
                  data-testid="contact-message-input"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Table for four, this Friday? Catering for fifty? Tell us."
                  rows={4}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
              </div>
            </div>
            <button
              data-testid="contact-submit-btn"
              type="submit"
              disabled={sending}
              className="mt-9 w-full rounded-full bg-[#d4af37] py-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#050807] transition-all duration-300 hover:bg-[#f0d77b] disabled:cursor-wait disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            <p className="mt-4 text-center font-mono text-[10px] text-emerald-100/30">
              We reply within a day — usually faster during grill hours.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
