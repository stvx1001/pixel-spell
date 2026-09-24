import { Character } from "./character";
import { FaqList } from "./faq";
import { Eyebrow, Heading } from "./ui";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-8 bg-cream px-5 py-24 md:px-16 md:py-[140px]">
      <div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[460px_1fr] lg:gap-24">
        <div className="flex flex-col gap-6">
          <Eyebrow n="07">FAQ</Eyebrow>
          <Heading pre={"Asked &\n"} hot="answered." />
          <p className="lead text-ink/80">
            The things people usually ask before they book. Still curious? Bring your question to a free call.
          </p>
          <Character name="cat-rest" sizes="280px" className="hidden w-[280px] lg:block" />
        </div>
        <FaqList />
      </div>
    </section>
  );
}
