import { Character } from "./character";
import { Eyebrow, Heading } from "./ui";

const VALUES = [
  ["bg-pink", "Design + code under one roof"],
  ["bg-yellow", "Senior craft on every pixel"],
  ["bg-teal", "Direct line, no account managers"],
  ["bg-green", "Fast, honest, fixed timelines"],
];

/* Placeholder quotes from the Figma file — replace with real ones before launch. */
const QUOTES = [
  { quote: "They turned a messy idea into a brand our users actually talk about. Fast, thoughtful and genuinely fun to work with.", mark: "text-pink", dot: "bg-tint-pink", tilt: -2 },
  { quote: "Design and development in one team saved us weeks. The handoff problem just… disappeared.", mark: "text-teal", dot: "bg-tint-teal", tilt: 1.5 },
  { quote: "Every detail was considered. Our new site converts better and finally feels like us.", mark: "text-yellow", dot: "bg-tint-yellow", tilt: -1 },
];

export function Studio() {
  return (
    <section id="studio" className="scroll-mt-8 bg-sand px-5 py-24 md:px-16 md:py-[140px]">
      <div className="mx-auto grid max-w-[1312px] items-center gap-16 lg:grid-cols-[476px_1fr] lg:gap-24">
        <figure className="relative mx-auto w-full max-w-[476px] rotate-[3deg] rounded-lg bg-white p-[18px] pb-6 shadow-[0_20px_40px_rgba(58,42,16,0.16)]">
          {/* TODO: founder photo */}
          <div className="flex aspect-[440/500] items-center justify-center rounded bg-[linear-gradient(160deg,var(--color-tint-pink),var(--color-tint-teal))]">
            <span className="font-mono text-[13px] font-bold tracking-[0.04em] text-ink/40">FOUNDER PHOTO</span>
          </div>
          <figcaption className="mt-4 text-center font-hand text-[30px]">the one behind the spells ✦</figcaption>
          <Character name="wolf-sneak" sizes="240px" className="absolute right-[-12px] bottom-[-10px] w-[160px] md:right-[-40px] md:w-[240px]" />
        </figure>

        <div className="flex flex-col gap-7">
          <Eyebrow n="04">The studio</Eyebrow>
          <Heading pre={"Small studio.\nSerious "} hot="magic." />
          <p className="lead text-ink/85">
            Pixel Spell is a design &amp; engineering studio founded in 2026. We keep things small on purpose, so every
            project gets senior-level craft and you always talk directly to the people doing the work.
          </p>
          <ul className="flex flex-col gap-4">
            {VALUES.map(([color, text]) => (
              <li key={text} className="flex items-center gap-3.5 text-[17px] font-medium">
                <span className={`size-2.5 rounded-[2px] ${color}`} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          {/* TODO: founder name */}
          <p className="font-hand text-[30px]">— Founder Name, Founder &amp; Creative Director</p>
        </div>
      </div>

      <div className="mx-auto mt-[120px] max-w-[1312px]">
        <h2 className="text-center font-display text-[clamp(36px,3.9vw,56px)] leading-tight tracking-[-0.01em]">Kind words from kind people</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.quote}
              className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-[0_14px_30px_rgba(58,42,16,0.10)] transition-transform duration-300 hover:rotate-0! md:rotate-(--tilt)"
              style={{ "--tilt": `${-q.tilt}deg` } as React.CSSProperties}
            >
              <span className={`font-display text-[64px] leading-[0.6] ${q.mark}`} aria-hidden="true">
                “
              </span>
              <blockquote className="text-[20px] leading-[1.45] font-medium tracking-[-0.01em]">{q.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className={`size-11 rounded-full ${q.dot}`} aria-hidden="true" />
                <span>
                  <span className="block text-[15px] font-semibold">Client Name</span>
                  <span className="font-mono text-[11px] tracking-[0.04em] text-ink/60">ROLE, COMPANY</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
