import { Pixels, type BitmapName } from "./pixel";
import { EMAIL, Eyebrow, Heading, Sticker } from "./ui";

const PRODUCTS: { kind: string; name: string; body: string; icon: BitmapName; color: string }[] = [
  { kind: "FIGMA UI KIT", name: "Pixel Kit", body: "A playful, production-ready UI kit with 400+ components and dark mode.", icon: "smiley", color: "bg-yellow" },
  { kind: "WEBSITE TEMPLATES", name: "Spellbook", body: "Framer & Webflow templates that launch your site in a weekend, not a month.", icon: "book", color: "bg-teal" },
  { kind: "AI DESIGN ASSISTANT", name: "Familiar", body: "A Figma plugin that tidies layers, names things and checks your specs for you.", icon: "gem", color: "bg-rose" },
];

const waitlist = (name: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(`Waitlist: ${name}`)}`;

/* Figma "Products" (4034:360). The phone frame is the same card at 350 wide. */
export function Products() {
  const sticker = "absolute z-10 bg-green";
  return (
    <section id="products" className="scroll-mt-8 bg-cream px-5 py-[72px] md:px-16 md:pt-40 md:pb-[140px]">
      <div className="relative mx-auto max-w-[1312px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6 text-center">
          <Eyebrow n="06">Products</Eyebrow>
          <Heading pre="Spells in a " hot="bottle." />
          <p className="lead mx-auto max-w-[700px] text-ink/80">
            Beyond client work, we brew our own tools for designers and product teams. Get early access before anyone
            else.
          </p>
        </div>
        <Sticker className={`${sticker} top-[300px] right-[20px] hidden px-7 py-3.5 text-[30px] xl:inline-block`} rotate={8}>
          freshly brewing ✦
        </Sticker>

        <div className="relative mt-10 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          <Sticker className={`${sticker} top-[-16px] right-[-2px] px-[17.4px] py-[8.7px] text-[18.6px] md:hidden`} rotate={8}>
            freshly brewing ✦
          </Sticker>
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-[23px] border border-ink/8 bg-white transition-transform duration-300 hover:-translate-y-1.5 md:rounded-[28px]"
            >
              <div className={`relative flex h-[183px] items-center justify-center md:h-[220px] ${p.color}`}>
                <span className="absolute top-[16.6px] left-[16.6px] rounded-full bg-white px-2.5 py-[5px] font-mono text-[9px] font-bold tracking-[0.04em] md:top-5 md:left-5 md:px-3 md:py-1.5 md:text-[11px]">
                  COMING SOON
                </span>
                <Pixels
                  name={p.icon}
                  cell={16}
                  radius={3}
                  color="var(--color-ink)"
                  className="size-[93px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 md:size-28"
                />
              </div>
              <div className="flex flex-col gap-2.5 p-[23px] md:gap-3 md:p-7">
                <p className="font-mono text-[10px] tracking-[0.04em] text-ink/60 md:text-xs">{p.kind}</p>
                <h3 className="font-display text-[33px] leading-tight md:text-[40px]">{p.name}</h3>
                <p className="font-mono text-[11.6px] leading-[1.65] text-ink/80 md:text-sm">{p.body}</p>
                <a
                  href={waitlist(p.name)}
                  className="inline-flex w-fit items-center gap-2 pt-[6.6px] text-[13.3px] font-semibold text-pink-deep hover:underline md:pt-2 md:text-base"
                >
                  Join the waitlist <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
