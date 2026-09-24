import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq-section";
import { FloatingNav } from "@/components/floating-nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Packages } from "@/components/packages";
import { Process } from "@/components/process";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Studio } from "@/components/studio";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Products />
        <Studio />
        <Process />
        <Packages />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingNav />
    </>
  );
}
