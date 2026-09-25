import { BriefModal } from "@/components/brief";
import { Character } from "@/components/character";
import { Faq } from "@/components/faq-section";
import { FloatingNav } from "@/components/floating-nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Packages } from "@/components/packages";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Studio } from "@/components/studio";
import { Testimonials } from "@/components/testimonials";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <Marquee />
        <Studio />
        <Work />
        <Services />
        <Packages />
        <Products />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <FloatingNav />
      <BriefModal
        mascot={
          <Character
            name="fox-casting"
            sizes="210px"
            className="absolute top-[-63.2px] left-[14.5px] w-[170px] md:top-[-87.6px] md:left-[28.5px] md:w-[210px]"
          />
        }
      />
    </>
  );
}
