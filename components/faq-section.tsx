import { Character } from "./character";
import { FaqList } from "./faq";
import { Eyebrow, Heading } from "./ui";

/* Figma "FAQ" (4039:462). On a phone the resting cat sits beside the heading. */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-8 bg-cream px-5 py-[72px] md:px-16 md:py-[140px]">
      <div className="mx-auto grid max-w-[1312px] gap-8 lg:grid-cols-[460px_1fr] lg:gap-24">
        <div className="relative flex flex-col gap-6">
          <Eyebrow n="08">FAQ</Eyebrow>
          <Heading pre={"Asked &\n"} hot="answered." />
          <p className="lead text-ink/80">
            The things people usually ask before they book. Still curious? Bring your question to a free call.
          </p>
          <Character name="cat-rest" sizes="280px" className="absolute top-[-20px] right-[-6px] w-[150px] lg:relative lg:top-auto lg:right-auto lg:w-[280px]" />
        </div>
        <FaqList />
      </div>
    </section>
  );
}
