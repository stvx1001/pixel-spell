import { Character } from "./character";
import { Pixels } from "./pixel";
import { Button, Eyebrow } from "./ui";
import { LumenArt, MoonrestArt, NookArt } from "./work-art";

const WORKS = [
  { title: "Nook (Productivity Game App)", tags: "UI/UX · 3D", Art: NookArt, tilt: 3, lift: 0 },
  { title: "Lumen (Fintech Brand Identity)", tags: "BRANDING · WEB", Art: LumenArt, tilt: -2, lift: 18 },
  { title: "Moonrest (Meditation & Sleep App)", tags: "UI/UX · MOTION", Art: MoonrestArt, tilt: 2, lift: 3 },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-8 bg-sand px-5 pt-24 pb-28 md:px-16 md:pt-[120px] md:pb-[140px]">
      <div className="relative mx-auto max-w-[1312px] text-center">
        <Eyebrow n="01" className="text-ink">Some of our spells</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(52px,8.2vw,118px)] leading-none tracking-[-0.01em]">
          Some of our
          <br />
          finest <span className="text-pink">spells!</span>
        </h2>
        <p className="lead mx-auto mt-9 max-w-[720px]">
          Brands, apps and websites we’ve conjured for startups and growing teams — every one designed, built and
          polished with care.
        </p>

        {/* Stickers around the heading (desktop only) */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
          <figure className="absolute top-[70px] left-6 w-[232px] rotate-[7deg] rounded-md bg-white p-3.5 pb-[18px] shadow-[0_14px_28px_rgba(58,42,16,0.16)]">
            <div className="relative h-[190px] overflow-hidden rounded-[2px] bg-tint-pink">
              <Character name="fox-idle" sizes="250px" className="absolute top-[-52px] left-[-28px] w-[248px]" />
            </div>
            <figcaption className="mt-2.5 text-left font-hand text-[26px] leading-tight">our resident wizard ↘</figcaption>
          </figure>
          <div className="absolute top-12 right-[118px] flex size-[104px] rotate-[12deg] items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(58,42,16,0.18)] ring-2 ring-ink">
            <div className="flex size-[72px] items-center justify-center rounded-full bg-yellow">
              <Pixels name="plus" cell={8} color="var(--color-pink)" />
            </div>
          </div>
          <div className="absolute top-[236px] right-[-14px] flex -rotate-[10deg] flex-col items-center rounded-full bg-teal px-10 py-6 font-hand text-[34px] leading-[1.1]">
            <span className="text-white">pixel-perfect</span>
            <span>but playful ✦</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1347px] gap-10 md:mt-[72px] md:grid-cols-3 md:gap-9">
        {WORKS.map(({ title, tags, Art, tilt, lift }) => (
          <a
            key={title}
            href="#work"
            className="group mx-auto block w-full max-w-[410px] rounded-[28px] bg-white p-3.5 pb-[22px] shadow-[0_18px_36px_rgba(58,42,16,0.12)] transition-transform duration-300 hover:rotate-0! hover:-translate-y-2 md:mt-(--lift) md:rotate-(--tilt)"
            style={{ "--tilt": `${tilt}deg`, "--lift": `${lift}px` } as React.CSSProperties}
          >
            <div className="aspect-[382/273] overflow-hidden rounded-[18px]">
              <div className="size-full transition-transform duration-500 group-hover:scale-[1.04]">
                <Art />
              </div>
            </div>
            <div className="mt-[18px] flex items-center justify-between gap-4 px-2">
              <div>
                <h3 className="text-[clamp(17px,1.4vw,20px)] font-semibold tracking-[-0.01em]">{title}</h3>
                <p className="mt-1.5 font-mono text-xs tracking-[0.04em] text-ink/80">{tags}</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sand transition-colors group-hover:bg-yellow" aria-hidden="true">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-[72px] text-center">
        <Button href="#work">View all works</Button>
      </div>
    </section>
  );
}
