import { BriefButton, type Package } from "./brief";
import { Character, type CharacterName } from "./character";
import { BattleScene, box, CampfireScene, SH, SW } from "./package-scenes";
import { Eyebrow, Heading, Sticker } from "./ui";

/* Figma "Packages" (4039:360). Each card opens with a scene the width of the card
   (420×210 on desktop); art and pixels are placed in its Figma pixels and are
   allowed to stand out above the card. The phone frame is the same card at 350
   wide, so the type steps down by that ratio (and the scenes scale with it). */
/* A pixel given by the top-left of its rotated bounding box and its size. */
const pixel = (x: number, y: number, box: number, size: number) => ({
  left: `${((x + box / 2) / SW) * 100}%`,
  top: `${((y + box / 2) / SH) * 100}%`,
  width: `${(size / SW) * 100}%`,
});

type Cast = { name: CharacterName; x: number; y: number; w: number; flip?: boolean }[];

const PACKS: {
  n: string;
  pkg: Package;
  time: string;
  tint: string;
  accent: string;
  scene: string;
  eyebrow: string;
  title: string;
  titleClass: string;
  desc: string;
  priceLabel: string;
  price: string;
  items: string[];
  cta: string;
  tone: "dark" | "pink";
  /* Figma draws a hairline square around the first and third cards */
  outlined: boolean;
  /* the second card's copy is full ink, the others are softened */
  soft: boolean;
  /* the soft shadow the cast stands on: [top, width], if the scene has one */
  ground?: [number, number];
  pixels: [number, number, number, number][];
  cast?: Cast;
  art?: React.ReactNode;
  speed?: boolean;
}[] = [
  {
    n: "01", pkg: "First Spark · Free", time: "2–3 DAYS", tint: "bg-tint-yellow", accent: "bg-yellow", scene: "bg-[#ffe3a1]",
    eyebrow: "LET’S START!", title: "First Spark", titleClass: "text-orange",
    desc: "A free first taste of the magic. See how we think before you commit to anything.",
    priceLabel: "PRICE", price: "Free",
    items: ["1 initial UI/UX screen", "Light illustration", "Light branding"],
    cta: "Start free", tone: "dark", outlined: true, soft: true,
    pixels: [[396, 18.67, 18.98, 16], [402, 61.92, 11.86, 10], [8, 41.51, 14.23, 12]],
    art: <CampfireScene />,
  },
  {
    n: "02", pkg: "Grand Spell · $50", time: "1–2 WEEKS", tint: "bg-tint-pink", accent: "bg-pink", scene: "bg-pink",
    eyebrow: "MOST COMPLETE", title: "Grand Spell", titleClass: "bg-linear-to-r from-teal-deep to-pink bg-clip-text text-transparent",
    desc: "The full spell: product screens, illustration and a brand system that holds together.",
    priceLabel: "ONE-TIME", price: "$50",
    items: ["3 primary UI/UX screens, incl. states", "Illustration", "Design system", "Branding"],
    cta: "Cast the spell", tone: "pink", outlined: false, soft: false, ground: [150, 318.67],
    pixels: [[328.67, 30.67, 18.98, 16], [358.67, 67.92, 11.86, 10], [36, 43.51, 14.23, 12]],
    art: <BattleScene />,
  },
  {
    n: "03", pkg: "Quick Charm · $12", time: "1–2 DAYS", tint: "bg-tint-teal", accent: "bg-teal", scene: "bg-[#cdebea]",
    eyebrow: "FOR QUICK WINS", title: "Quick Charm", titleClass: "text-teal-deep",
    desc: "One screen, done right. For when you need a single spell, fast.",
    priceLabel: "ONE-TIME", price: "$12",
    items: ["1 screen only", "Illustration"],
    cta: "Get a charm", tone: "dark", outlined: true, soft: true, ground: [163, 340], speed: true, pixels: [],
    cast: [{ name: "wolf-run", x: 45, y: -150.4, w: 340 }],
  },
];

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-8 bg-sand px-5 py-[72px] md:px-16 md:pt-16 md:pb-[140px]">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-[100px] lg:gap-[150px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6 text-center">
          <Eyebrow n="06">Ways to work</Eyebrow>
          <Heading pre="Pick your " hot="potion." />
          <p className="lead mx-auto max-w-[720px] text-ink/80">
            Three simple ways to start. Fixed scope, a clear price and a timeline you can plan around — and every
            project can grow from here.
          </p>
        </div>

        <div className="grid w-full gap-x-6 gap-y-[104px] lg:grid-cols-3">
          {PACKS.map((p) => (
            <article
              key={p.title}
              className={`relative mx-auto flex min-h-[713px] w-full max-w-[421px] flex-col lg:h-[860px] lg:max-w-none ${p.outlined ? "border border-ink/8" : ""}`}
            >
              {p.title === "Grand Spell" && (
                <Sticker
                  className="absolute top-[-6px] left-[70.3%] z-10 bg-pink px-[18.7px] py-[8.6px] text-[20px] lg:top-[-15px] lg:left-[68.8%] lg:px-[26px] lg:py-3 lg:text-[28px]"
                  rotate={-8}
                >
                  pick me! ✦
                </Sticker>
              )}

              <div className={`relative -mb-[23px] aspect-[420/210] shrink-0 rounded-t-[23px] lg:-mb-7 lg:rounded-t-[28px] ${p.scene}`}>
                {p.ground && (
                  <span
                    className="absolute h-[12.4%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(64,51,38,0.18),rgba(64,51,38,0))]"
                    style={box(40, p.ground[0], p.ground[1])}
                  />
                )}
                {/* The campfire is drawn under its pixels; the Grand Spell cast stands in front of them. */}
                {p.art && p.title === "First Spark" && p.art}
                {p.pixels.map(([x, y, size, side]) => (
                  <span
                    key={x}
                    className="absolute aspect-square -translate-1/2 -rotate-12 rounded-[2px] bg-white/80"
                    style={pixel(x, y, size, side)}
                  />
                ))}
                {p.art && p.title !== "First Spark" && p.art}
                {p.speed &&
                  [
                    [28, 70, 70],
                    [18, 100, 96],
                    [40, 130, 60],
                  ].map(([x, y, w]) => (
                    <span
                      key={y}
                      className="absolute h-[3.8%] rounded-full bg-white/85"
                      style={box(x, y, w)}
                    />
                  ))}
                {p.cast?.map((c) => (
                  <Character key={c.name} name={c.name} flip={c.flip} sizes="340px" className="absolute" style={box(c.x, c.y, c.w)} />
                ))}
              </div>

              <div className="relative flex flex-1 flex-col gap-5 rounded-[23px] bg-white p-[26.5px] drop-shadow-[0_-5px_6.6px_rgba(13,13,26,0.06)] lg:gap-6 lg:rounded-[28px] lg:p-8 lg:drop-shadow-[0_-6px_8px_rgba(13,13,26,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-[23px] leading-none lg:text-[28px]">{p.n}</span>
                  <span className={`rounded-full px-2.5 py-[5px] font-mono text-[9px] font-bold tracking-[0.04em] lg:px-3 lg:py-1.5 lg:text-[11px] ${p.tint}`}>
                    {p.time}
                  </span>
                </div>
                <div className="flex flex-col gap-2 lg:gap-2.5">
                  <p className={`font-mono text-[10px] tracking-[0.04em] lg:text-xs ${p.soft ? "text-ink/60" : ""}`}>{p.eyebrow}</p>
                  <h3 className={`font-display text-[36.5px] leading-tight lg:text-[44px] ${p.titleClass}`}>{p.title}</h3>
                  <p className={`font-mono text-[11.6px] leading-[1.65] lg:text-sm ${p.soft ? "text-ink/80" : ""}`}>{p.desc}</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className={`font-mono text-[10px] tracking-[0.04em] lg:text-xs ${p.soft ? "text-ink/60" : ""}`}>{p.priceLabel}</p>
                  <p className="font-block text-[40px] leading-tight tracking-[-0.02em] lg:text-5xl">{p.price}</p>
                </div>
                <hr className="border-ink/12" />
                <div className="flex flex-col gap-[11.6px] lg:gap-3.5">
                  <p className={`font-mono text-[10px] font-bold tracking-[0.04em] lg:text-xs ${p.soft ? "text-pink-deep" : "text-pink"}`}>WHAT YOU GET</p>
                  <ul className="flex flex-col gap-[11.6px] lg:gap-3.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-[11.6px] text-[13.3px] font-medium lg:gap-3.5 lg:text-base">
                        <span className={`size-[8.3px] shrink-0 rounded-[2px] lg:size-2.5 ${p.accent}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <BriefButton
                  pkg={p.pkg}
                  tone={p.tone}
                  className="mt-auto w-full"
                  size="py-[15px] pr-[23px] pl-[26.5px] text-[14px] lg:py-[18px] lg:pr-7 lg:pl-8 lg:text-[17px]"
                >
                  {p.cta}
                </BriefButton>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center font-mono text-sm text-ink/70 md:text-[15px]">
          Not sure which one fits? Book a free call and we’ll shape it around you.
        </p>
      </div>
    </section>
  );
}
