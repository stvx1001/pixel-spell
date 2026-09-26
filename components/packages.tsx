import { BriefButton, type Package } from "./brief";
import { BattleScene, CampfireScene, SH, SW, WorkshopScene } from "./package-scenes";
import { Eyebrow, Heading } from "./ui";

/* Figma "Packages" (4039:360, phone 4073:1144). All three cards are scaled copies of
   one 421×860 card: 90%, 110% and 96% on desktop (bottom-aligned, the Grand Spell
   card tallest) and ~83% on a phone. So every size in a card is written in that base
   card's pixels times --u, one base pixel at the card's current width (a container
   unit), and the card scales as one piece at any width. The glows are the exception:
   their shadows are the same size on every card in Figma. */
const u = (n: number) => `calc(${n} * var(--u))`;
/* A pixel given by the top-left of its rotated bounding box and its size. */
const pixel = (x: number, y: number, box: number, size: number) => ({
  left: `${((x + box / 2) / SW) * 100}%`,
  top: `${((y + box / 2) / SH) * 100}%`,
  width: `${(size / SW) * 100}%`,
});

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
  art: React.ReactNode;
  /* "Card glow" (4177:8898–8900): white backing with a coloured glow */
  glow: string;
  /* desktop width, as a grid fraction: the card's scale */
  fr: string;
}[] = [
  {
    n: "01", pkg: "First Spark · Free", time: "2–3 DAYS", tint: "bg-tint-yellow", accent: "bg-yellow", scene: "bg-[#ffe3a1]",
    eyebrow: "LET’S START!", title: "First Spark", titleClass: "text-orange",
    desc: "A free first taste of the magic. See how we think before you commit to anything.",
    priceLabel: "PRICE", price: "Free",
    items: ["1 initial UI/UX screen", "Light illustration", "Light branding"],
    cta: "Start free", tone: "dark", outlined: true, soft: true, fr: "0.9fr",
    glow: "shadow-[0_14px_48px_0_rgba(255,181,71,0.4)]",
    pixels: [[396, 18.67, 18.98, 16], [402, 61.92, 11.86, 10], [8, 41.51, 14.23, 12]],
    art: <CampfireScene />,
  },
  {
    n: "02", pkg: "Grand Spell · $50", time: "1–2 WEEKS", tint: "bg-tint-pink", accent: "bg-pink", scene: "bg-pink",
    eyebrow: "MOST COMPLETE", title: "Grand Spell", titleClass: "bg-linear-to-r from-teal-deep to-pink bg-clip-text text-transparent",
    desc: "The full spell: product screens, illustration and a brand system that holds together.",
    priceLabel: "ONE-TIME", price: "$50",
    items: ["3 primary UI/UX screens, incl. states", "Illustration", "Design system", "Branding"],
    cta: "Cast the spell", tone: "pink", outlined: false, soft: false, ground: [150, 318.67], fr: "1.1fr",
    glow: "border-3 border-pink shadow-[0_0_140px_0_rgba(255,202,72,0.35),0_22px_80px_14px_rgba(242,84,158,0.6)]",
    pixels: [[328.67, 30.67, 18.98, 16], [358.67, 67.92, 11.86, 10], [36, 43.51, 14.23, 12]],
    art: <BattleScene />,
  },
  {
    n: "03", pkg: "Quick Charm · $12", time: "1–2 DAYS", tint: "bg-tint-teal", accent: "bg-teal", scene: "bg-[#cdebea]",
    eyebrow: "FOR QUICK WINS", title: "Quick Charm", titleClass: "text-teal-deep",
    desc: "One screen, done right. For when you need a single spell, fast.",
    priceLabel: "ONE-TIME", price: "$12",
    items: ["1 screen only", "Illustration"],
    cta: "Get a charm", tone: "dark", outlined: true, soft: true, fr: "0.96fr", pixels: [],
    glow: "shadow-[0_0_24px_4px_rgba(255,255,255,0.9),0_16px_64px_6px_rgba(109,185,185,0.55)]",
    art: <WorkshopScene />,
  },
];

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-8 bg-sand px-5 py-[72px] md:px-16 md:pt-16 md:pb-[140px]">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-[100px] lg:gap-[185px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6 text-center">
          <Eyebrow n="06">Ways to work</Eyebrow>
          <Heading pre="Pick your " hot="potion." />
          <p className="lead mx-auto max-w-[720px] text-ink/80">
            Three simple ways to start. Fixed scope, a clear price and a timeline you can plan around — and every
            project can grow from here.
          </p>
        </div>

        <div className="grid w-full gap-y-[104px] lg:grid-cols-(--cols) lg:items-end lg:gap-x-6 lg:px-2" style={{ "--cols": PACKS.map((p) => p.fr).join(" ") } as React.CSSProperties}>
          {PACKS.map((p) => (
            <article key={p.title} className="@container relative mx-auto w-full max-w-[421px] lg:max-w-none">
              <div
                className={`relative flex flex-col ${p.outlined ? "border border-ink/8" : ""}`}
                style={{ "--u": "calc(100cqw / 421)", height: u(860) } as React.CSSProperties}
              >
                {/* Card glow. Grand Spell's pink line sits just outside the card. */}
                <span
                  aria-hidden="true"
                  className={`absolute bg-white ${p.glow} ${p.title === "Grand Spell" ? "-inset-[3px]" : "-inset-px"}`}
                  style={{ borderRadius: p.title === "Grand Spell" ? `calc(${u(28)} + 3px)` : u(28) }}
                />

                <div
                  className={`relative aspect-[420/210] shrink-0 ${p.scene}`}
                  style={{ marginBottom: u(-28), borderRadius: `${u(28)} ${u(28)} 0 0` }}
                >
                  {p.ground && (
                    <span
                      className="absolute h-[12.4%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(64,51,38,0.18),rgba(64,51,38,0))]"
                      style={{ left: `${(40 / SW) * 100}%`, top: `${(p.ground[0] / SH) * 100}%`, width: `${(p.ground[1] / SW) * 100}%` }}
                    />
                  )}
                  {/* The campfire is drawn under its pixels; the Grand Spell cast stands in front of them. */}
                  {p.title === "First Spark" && p.art}
                  {p.pixels.map(([x, y, size, side]) => (
                    <span
                      key={x}
                      className="absolute aspect-square -translate-1/2 -rotate-12 rounded-[2px] bg-white/80"
                      style={pixel(x, y, size, side)}
                    />
                  ))}
                  {p.title !== "First Spark" && p.art}
                </div>

                <div
                  className="relative flex flex-1 flex-col bg-white"
                  style={{ gap: u(24), padding: u(32), borderRadius: u(28), filter: `drop-shadow(0 ${u(-6)} ${u(8)} rgba(13,13,26,0.06))` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-pixel leading-[normal]" style={{ fontSize: u(28) }}>{p.n}</span>
                    <span
                      className={`rounded-full font-mono font-bold tracking-[0.04em] ${p.tint}`}
                      style={{ fontSize: u(11), padding: `${u(6)} ${u(12)}` }}
                    >
                      {p.time}
                    </span>
                  </div>
                  <div className="relative flex flex-col" style={{ gap: u(10) }}>
                    <p className={`font-mono tracking-[0.04em] ${p.soft ? "text-ink/60" : ""}`} style={{ fontSize: u(12) }}>{p.eyebrow}</p>
                    <h3 className={`w-fit font-display leading-[normal] ${p.titleClass}`} style={{ fontSize: u(44) }}>{p.title}</h3>
                    <p className={`font-mono leading-[1.65] ${p.soft ? "text-ink/80" : ""}`} style={{ fontSize: u(14) }}>{p.desc}</p>
                    {p.title === "Grand Spell" && (
                      /* "Sticker / Pick me" (4039:459), beside the title */
                      <span
                        aria-hidden="true"
                        className="absolute -translate-1/2 -rotate-8 rounded-full bg-pink font-hand leading-none whitespace-nowrap text-white"
                        style={{ left: u(335.4), top: u(72), fontSize: u(17.4), padding: `${u(7.5)} ${u(16.1)}` }}
                      >
                        pick me! ✦
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col" style={{ gap: u(2) }}>
                    <p className={`font-mono tracking-[0.04em] ${p.soft ? "text-ink/60" : ""}`} style={{ fontSize: u(12) }}>{p.priceLabel}</p>
                    <p className="font-block leading-[normal] tracking-[-0.02em]" style={{ fontSize: u(48) }}>{p.price}</p>
                  </div>
                  <hr className="border-ink/12" />
                  <div className="flex flex-col" style={{ gap: u(14) }}>
                    <p className={`font-mono font-bold tracking-[0.04em] ${p.soft ? "text-pink-deep" : "text-pink"}`} style={{ fontSize: u(12) }}>
                      WHAT YOU GET
                    </p>
                    <ul className="flex flex-col" style={{ gap: u(14) }}>
                      {p.items.map((item) => (
                        <li key={item} className="flex items-center font-medium" style={{ gap: u(14), fontSize: u(16) }}>
                          <span className={`shrink-0 rounded-[2px] ${p.accent}`} style={{ width: u(10), height: u(10) }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <BriefButton
                    pkg={p.pkg}
                    tone={p.tone}
                    className="mt-auto w-full"
                    size="py-[calc(18*var(--u))] pr-[calc(28*var(--u))] pl-[calc(32*var(--u))] text-[length:calc(17*var(--u))]"
                  >
                    {p.cta}
                  </BriefButton>
                </div>
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
