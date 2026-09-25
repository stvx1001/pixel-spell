import { Pixels } from "./pixel";

const ITEMS = ["FIGMA", "FRAMER", "WEBFLOW", "REACT", "NEXT.JS", "BLENDER"];

function Run() {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 md:gap-9 md:pr-9">
      <span className="text-yellow">TOOLS WE CAST WITH</span>
      <Pixels name="plus" cell={4} color="var(--color-yellow)" />
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-5 md:gap-9">
          <span>{item}</span>
          <Pixels name="plus" cell={4} color="var(--color-yellow)" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Tools we cast with" className="overflow-hidden bg-ink py-[19px] font-block text-[24px] leading-[26px] tracking-[-0.01em] text-cream md:py-[30px] md:text-[40px] md:leading-[44px]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Run />
        <div aria-hidden="true" className="flex">
          <Run />
        </div>
      </div>
    </section>
  );
}
