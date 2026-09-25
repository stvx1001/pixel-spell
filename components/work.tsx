import { Character } from "./character";
import { Pixels } from "./pixel";
import { Button, Eyebrow } from "./ui";
import { WorkCarousel } from "./work-carousel";
import { LumenArt, MoonrestArt, NookArt } from "./work-art";

const WORKS = [
  { id: "nook", title: "Nook (Productivity Game App)", tags: "UI/UX · 3D", Art: NookArt },
  { id: "lumen", title: "Lumen (Fintech Brand Identity)", tags: "BRANDING · WEB", Art: LumenArt },
  { id: "moonrest", title: "Moonrest (Meditation & Sleep App)", tags: "UI/UX · MOTION", Art: MoonrestArt },
];

/* The three stickers around the heading. Each is placed by its centre: in the 1312px
   header on a wide screen, and in a 350px strip above the heading (at 0.52–0.55 scale)
   below that, as in the Figma mobile frame. */
function Stickers() {
  const centred = "absolute -translate-x-1/2 -translate-y-1/2";
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 h-[150px] w-[350px] -translate-x-1/2 xl:h-full xl:w-full" aria-hidden="true">
      <figure
        className={`${centred} top-[75.6px] left-[57.4px] w-[228px] scale-[0.52] rotate-[7deg] rounded-md bg-white p-3.5 pb-[18px] shadow-[0_14px_28px_rgba(58,42,16,0.16)] xl:top-[215.6px] xl:left-[123px] xl:scale-100`}
      >
        <div className="relative h-[190px] overflow-hidden rounded-[2px] bg-tint-pink">
          <Character name="fox-idle" sizes="250px" className="absolute top-[-52px] left-[-28px] w-[248px]" />
        </div>
        <figcaption className="mt-2.5 text-center font-hand text-[26px] leading-tight">our resident wizard ↘</figcaption>
      </figure>
      <div
        className={`${centred} top-[36.8px] left-[170px] flex size-[104px] scale-50 rotate-[12deg] items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(58,42,16,0.18)] ring-2 ring-ink xl:top-[109.7px] xl:left-[1130px] xl:scale-100`}
      >
        <div className="flex size-[72px] items-center justify-center rounded-full bg-yellow">
          <Pixels name="plus" cell={8} color="var(--color-pink)" />
        </div>
      </div>
      <div
        className={`${centred} top-[70.5px] left-[284.7px] flex scale-[0.55] -rotate-[10deg] flex-col items-center rounded-full bg-teal px-10 py-6 font-hand text-[34px] leading-[1.1] whitespace-nowrap xl:top-[278.4px] xl:left-[1216.3px] xl:scale-100`}
      >
        <span className="text-white">pixel-perfect</span>
        <span>but playful ✦</span>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-8 bg-sand px-5 py-[72px] md:px-16 md:pt-[120px] md:pb-[140px]">
      <div className="relative mx-auto max-w-[1312px] pt-[150px] text-center xl:h-[400px] xl:pt-0">
        <Stickers />
        <Eyebrow n="02" className="text-ink">Some of our spells</Eyebrow>
        <h2 className="mt-4 font-display text-[clamp(52px,8.2vw,118px)] leading-none tracking-[-0.01em] md:mt-[26px]">
          Some of our
          <br />
          finest <span className="text-pink">spells!</span>
        </h2>
        <p className="lead mx-auto mt-4 max-w-[720px] text-ink md:mt-9">
          Brands, apps and websites we’ve conjured for startups and growing teams — every one designed, built and
          polished with care.
        </p>
      </div>

      <WorkCarousel>
        {WORKS.map(({ id, title, tags, Art }) => (
          <a
            key={id}
            href="#work"
            className="group block rounded-[24px] bg-white p-3 pb-[19px] shadow-[0_15px_31px_rgba(58,42,16,0.12)] transition-transform duration-300 hover:-translate-y-2 md:rounded-[28px] md:p-3.5 md:pb-[22px] md:shadow-[0_18px_36px_rgba(58,42,16,0.12)]"
          >
            <div className="aspect-[382/273] overflow-hidden rounded-[15px] md:rounded-[18px]">
              <div className="size-full transition-transform duration-500 group-hover:scale-[1.04]">
                <Art />
              </div>
            </div>
            <div className="mt-[15px] flex items-center justify-between gap-2 px-[7px] text-left md:mt-[18px] md:px-2">
              <div>
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] xl:text-[20px] xl:whitespace-nowrap">{title}</h3>
                <p className="mt-[5px] font-mono text-[10px] tracking-[0.04em] text-ink/80 md:mt-1.5 md:text-xs">{tags}</p>
              </div>
              <span
                className="flex shrink-0 items-center justify-center rounded-full bg-sand px-2.5 py-2 text-sm font-medium transition-colors group-hover:bg-yellow md:px-3 md:py-2.5 md:text-base"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </a>
        ))}
      </WorkCarousel>

      <div className="mt-10 text-center md:hidden">
        <Button href="#work">View all works</Button>
      </div>
    </section>
  );
}
