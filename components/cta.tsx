import { Character } from "./character";
import { Pixels } from "./pixel";
import { Button, BOOK_A_CALL, Eyebrow } from "./ui";

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-8 bg-cream px-3 pb-6 md:px-6">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-[linear-gradient(120deg,#d3ecec_0%,#f9e2ec_55%,#fff2d6_100%)] px-6 pt-24 pb-72 text-center md:rounded-[48px] md:py-[136px]">
        {/* soft light blobs */}
        <span className="absolute top-20 left-[100px] -z-10 h-40 w-[520px] rotate-[25deg] rounded-[50%] bg-white/70 blur-[60px]" />
        <span className="absolute top-[360px] left-[800px] -z-10 h-40 w-[560px] rotate-[25deg] rounded-[50%] bg-[#fff4e0]/80 blur-[60px]" />
        <span className="absolute top-[420px] left-[300px] -z-10 h-[120px] w-[420px] rotate-[25deg] rounded-[50%] bg-white/50 blur-[60px]" />

        <Pixels name="sparkle" cell={14} radius={2.8} color="var(--color-pink)" className="absolute top-[90px] left-[120px] hidden md:block" />
        <Pixels name="sparkle" cell={8} radius={1.6} color="#ffffff" className="absolute top-[110px] right-[116px] hidden md:block" />
        <Pixels name="sparkle" cell={8} radius={1.6} color="var(--color-rose)" className="absolute top-[470px] left-[200px] hidden md:block" />

        <Eyebrow n="08">Start a project</Eyebrow>
        <h2 className="mx-auto mt-9 max-w-[930px] font-display text-[clamp(48px,7.5vw,108px)] leading-none tracking-[-0.01em]">
          Got an idea?
          <br />
          Let’s cast a <span className="text-pink">spell</span>.
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={BOOK_A_CALL} className="text-lg shadow-[0_10px_28px_rgba(13,14,26,0.18)]">
            Book a call
          </Button>
          <a
            href="mailto:hello@pixelspell.studio"
            className="rounded-full bg-white/70 px-7 py-[18px] font-mono text-base ring-1 ring-ink/12 transition-colors hover:bg-white"
          >
            hello@pixelspell.studio
          </a>
        </div>

        <Character
          name="fox-casting"
          sizes="360px"
          className="absolute bottom-0 left-1/2 w-[280px] -translate-x-1/2 md:top-[236px] md:right-[-68px] md:bottom-auto md:left-auto md:w-[360px] md:translate-x-0"
        />
      </div>
    </section>
  );
}
