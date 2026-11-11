import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { setLenis } from "@/lib/lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { SignatureDishes } from "@/components/SignatureDishes";
import { MenuSection } from "@/components/MenuSection";
import { Locations } from "@/components/Locations";
import { Testimonials } from "@/components/Testimonials";
import { Blogs } from "@/components/Blogs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    setLenis(lenis);
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050807] font-sans text-[#fcfbf7] antialiased">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <SignatureDishes />
        <MenuSection />
        <Locations />
        <Testimonials />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}

export default App;
