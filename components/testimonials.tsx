/* Figma "Testimonials" (4117:470). Placeholder quotes from the Figma file — replace
   with real ones before launch. */
const QUOTES = [
  { quote: "They turned a messy idea into a brand our users actually talk about. Fast, thoughtful and genuinely fun to work with.", mark: "text-pink", dot: "bg-tint-pink", tilt: 2 },
  { quote: "Design and development in one team saved us weeks. The handoff problem just… disappeared.", mark: "text-teal", dot: "bg-tint-teal", tilt: -1.5 },
  { quote: "Every detail was considered. Our new site converts better and finally feels like us.", mark: "text-yellow", dot: "bg-tint-yellow", tilt: 1 },
];

export function Testimonials() {
  return (
    <section aria-labelledby="kind-words" className="bg-sand px-5 py-[72px] md:px-16 md:py-[140px]">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-12">
        <h2 id="kind-words" className="text-center font-display text-[32px] leading-[1.25] tracking-[-0.01em] md:text-[56px]">
          Kind words from kind people
        </h2>
        <div className="grid w-full gap-4 md:grid-cols-3 md:items-center md:gap-8">
          {QUOTES.map((q) => (
            <figure
              key={q.quote}
              className="flex rotate-(--tilt) flex-col gap-6 rounded-3xl bg-white p-8 shadow-[0_14px_30px_rgba(58,42,16,0.10)] transition-transform duration-300 hover:rotate-0"
              style={{ "--tilt": `${q.tilt}deg` } as React.CSSProperties}
            >
              <span className={`font-display text-[32px] leading-[0.6] md:text-[64px] ${q.mark}`} aria-hidden="true">
                “
              </span>
              <blockquote className="text-[17px] leading-[1.45] font-medium tracking-[-0.01em] md:text-[20px]">{q.quote}</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className={`size-11 shrink-0 rounded-full ${q.dot}`} aria-hidden="true" />
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold md:text-base">Client Name</span>
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
