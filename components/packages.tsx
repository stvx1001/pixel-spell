import { Character, type CharacterName } from "./character";
import { Button, BOOK_A_CALL, Eyebrow, Heading, Sticker } from "./ui";

/* Each card opens with a 420×210 "scene"; characters are placed in its Figma pixels
   and are allowed to stand out above the card. */
const SW = 420;
const SH = 210;
const place = (x: number, y: number, w: number) => ({
  left: `${(x / SW) * 100}%`,
  top: `${(y / SH) * 100}%`,
  width: `${(w / SW) * 100}%`,
});

type Cast = { name: CharacterName; x: number; y: number; w: number; flip?: boolean }[];

const PACKS: {
  n: string;
  time: string;
  tint: string;
  accent: string;
  scene: string;
  eyebrow: string;
  title: string;
  titleClass: string;
  desc: string;
  items: string[];
  cta: string;
  tone: "dark" | "pink";
  ground: number;
  cast: Cast;
  speed?: boolean;
}[] = [
  {
    n: "01", time: "2–3 WEEKS", tint: "bg-tint-yellow", accent: "bg-yellow", scene: "bg-[#ffe3a1]",
    eyebrow: "FOR NEW BRANDS", title: "Brand Starter", titleClass: "text-orange",
    desc: "Everything a new brand needs to look ready on day one.",
    items: ["Logo & wordmark", "Colour & type system", "Brand guidelines (PDF)", "Social & pitch templates"],
    cta: "Start a brand", tone: "dark", ground: 297,
    cast: [
      { name: "fox-casting", x: 15, y: -112, w: 300 },
      { name: "bird-stand", x: 225, y: -16, w: 200 },
    ],
  },
  {
    n: "02", time: "4–6 WEEKS", tint: "bg-tint-pink", accent: "bg-pink", scene: "bg-pink",
    eyebrow: "FOR LAUNCHES", title: "Website", titleClass: "bg-linear-to-r from-pink-deep to-teal-deep bg-clip-text text-transparent",
    desc: "A fast, on-brand site, designed and built by the same team.",
    items: ["UX & page design in Figma", "Built in Framer, Webflow or React", "Responsive + SEO basics", "A CMS you can edit yourself"],
    cta: "Start a website", tone: "pink", ground: 319,
    cast: [
      { name: "cat-front", x: 50, y: -137, w: 320 },
      { name: "bird-cheer", x: -23, y: -45, w: 230 },
      { name: "wolf-crouch", x: 210, y: -64, w: 250, flip: true },
    ],
  },
  {
    n: "03", time: "2 WEEKS", tint: "bg-tint-teal", accent: "bg-teal", scene: "bg-[#cdebea]",
    eyebrow: "FOR PRODUCT TEAMS", title: "Product Sprint", titleClass: "text-teal-deep",
    desc: "One focused sprint to design, test and hand off a key flow.",
    items: ["Flow & UX audit", "Hi-fi screens + clickable prototype", "Quick test with real users", "Dev-ready specs & handoff"],
    cta: "Book a sprint", tone: "dark", ground: 340, speed: true,
    cast: [{ name: "wolf-run", x: 45, y: -150, w: 340 }],
  },
];

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-8 bg-sand px-5 py-24 md:px-16 md:py-[140px]">
      <div className="mx-auto max-w-[1312px]">
        <div className="mx-auto max-w-[900px] text-center">
          <Eyebrow n="06">Ways to work</Eyebrow>
          <Heading pre="Pick your " hot="potion." className="mt-6" />
          <p className="lead mx-auto mt-6 max-w-[720px] text-ink/80">
            Three simple ways to start. Fixed scope, a clear price and a timeline you can plan around — and every
            project can grow from here.
          </p>
        </div>

        <div className="mt-40 grid gap-x-6 gap-y-44 md:mt-44 lg:grid-cols-3">
          {PACKS.map((p) => (
            <article key={p.title} className="relative mx-auto flex w-full max-w-[440px] flex-col rounded-[28px] bg-white ring-1 ring-ink/8 lg:max-w-none">
              {p.title === "Website" && (
                <Sticker className="absolute -top-12 -right-3 z-10 bg-pink ring-4 ring-sand" rotate={-8}>
                  pick me! ✦
                </Sticker>
              )}

              <div className={`relative h-[210px] rounded-t-[28px] ${p.scene}`}>
                <span
                  className="absolute h-[26px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(64,51,38,0.18),rgba(64,51,38,0))]"
                  style={{ left: `${(40 / SW) * 100}%`, top: `${(163 / SH) * 100}%`, width: `${(p.ground / SW) * 100}%` }}
                />
                {p.speed &&
                  [
                    [28, 70, 70],
                    [18, 100, 96],
                    [40, 130, 60],
                  ].map(([x, y, w]) => (
                    <span key={y} className="absolute h-2 rounded-full bg-white/80" style={{ left: `${(x / SW) * 100}%`, top: y, width: `${(w / SW) * 100}%` }} />
                  ))}
                {p.cast.map((c) => (
                  <Character key={c.name} name={c.name} flip={c.flip} sizes="340px" className="absolute" style={place(c.x, c.y, c.w)} />
                ))}
              </div>

              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-[28px] leading-none">{p.n}</span>
                  <span className={`rounded-full px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.04em] ${p.tint}`}>{p.time}</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="font-mono text-xs tracking-[0.04em] text-ink/60">{p.eyebrow}</p>
                  <h3 className={`font-display text-[40px] leading-tight ${p.titleClass}`}>{p.title}</h3>
                  <p className="font-mono text-sm leading-[1.65] text-ink/80">{p.desc}</p>
                </div>
                {/* TODO: real prices */}
                <div>
                  <p className="font-mono text-xs tracking-[0.04em] text-ink/60">STARTING FROM</p>
                  <p className="font-block text-5xl tracking-[-0.02em]">$X,XXX</p>
                </div>
                <hr className="border-ink/12" />
                <div className="flex flex-col gap-3.5">
                  <p className="font-mono text-xs font-bold tracking-[0.04em] text-pink-deep">WHAT YOU GET</p>
                  <ul className="flex flex-col gap-3.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3.5 font-medium">
                        <span className={`size-2.5 shrink-0 rounded-[2px] ${p.accent}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href={BOOK_A_CALL} tone={p.tone} className="mt-auto w-full">
                  {p.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center font-mono text-[15px] text-ink/70">
          Not sure which one fits? Book a free call and we’ll shape it around you.
        </p>
      </div>
    </section>
  );
}
