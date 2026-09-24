import { Pixels, type BitmapName } from "./pixel";
import { Eyebrow, Heading, Sticker } from "./ui";

const PRODUCTS: { kind: string; name: string; body: string; icon: BitmapName; color: string }[] = [
  { kind: "FIGMA UI KIT", name: "Pixel Kit", body: "A playful, production-ready UI kit with 400+ components and dark mode.", icon: "smiley", color: "bg-yellow" },
  { kind: "WEBSITE TEMPLATES", name: "Spellbook", body: "Framer & Webflow templates that launch your site in a weekend, not a month.", icon: "book", color: "bg-teal" },
  { kind: "AI DESIGN ASSISTANT", name: "Familiar", body: "A Figma plugin that tidies layers, names things and checks your specs for you.", icon: "gem", color: "bg-rose" },
];

export function Products() {
  return (
    <section id="products" className="scroll-mt-8 bg-cream px-5 pt-24 pb-24 md:px-16 md:pt-40 md:pb-[140px]">
      <div className="relative mx-auto max-w-[1312px]">
        <div className="mx-auto max-w-[740px] text-center">
          <Eyebrow n="03">Products</Eyebrow>
          <Heading pre="Spells in a " hot="bottle." className="mt-6" />
          <p className="lead mx-auto mt-6 max-w-[700px] text-ink/80">
            Beyond client work, we brew our own tools for designers and product teams. Get early access before anyone
            else.
          </p>
        </div>
        <Sticker className="absolute top-[300px] right-[20px] hidden bg-green xl:inline-block" rotate={8}>
          freshly brewing ✦
        </Sticker>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-[28px] bg-white ring-1 ring-ink/8 transition-transform duration-300 hover:-translate-y-1.5">
              <div className={`relative flex h-[220px] items-center justify-center ${p.color}`}>
                <span className="absolute top-5 left-5 rounded-full bg-white px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.04em]">
                  COMING SOON
                </span>
                <Pixels name={p.icon} cell={16} radius={3} color="var(--color-ink)" className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <div className="flex flex-col gap-3 p-7">
                <p className="font-mono text-xs tracking-[0.04em] text-ink/60">{p.kind}</p>
                <h3 className="font-display text-[40px] leading-tight">{p.name}</h3>
                <p className="font-mono text-sm leading-[1.65] text-ink/80">{p.body}</p>
                <a href="#contact" className="mt-2 inline-flex w-fit items-center gap-2 font-medium text-pink-deep hover:underline">
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
