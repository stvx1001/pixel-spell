import { Pixels } from "./pixel";

const ITEMS = ["FIGMA", "FRAMER", "WEBFLOW", "REACT", "NEXT.JS", "BLENDER"];

function Run() {
  return (
    <div className="flex shrink-0 items-center gap-9 pr-9">
      <span className="text-yellow">TOOLS WE CAST WITH</span>
      <Pixels name="plus" cell={4} color="var(--color-yellow)" />
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-9">
          <span>{item}</span>
          <Pixels name="plus" cell={4} color="var(--color-yellow)" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Tools we cast with" className="overflow-hidden bg-ink py-[30px] font-block text-[clamp(28px,2.8vw,40px)] leading-[44px] tracking-[-0.01em] text-cream">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Run />
        <div aria-hidden="true" className="flex">
          <Run />
        </div>
      </div>
    </section>
  );
}
