import Image from "next/image";
import { asset } from "@/lib/asset";
import { Character } from "./character";

/* The hero "stage" is the Figma hero (1440 wide) from y=80 to y=840. Everything on it
   is positioned in those Figma pixels and converted to percentages, so the whole
   composition scales as one piece. */
const W = 1440;
const H = 760;
const at = (x: number, y: number, w: number) => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  width: `${(w / W) * 100}%`,
});

const PIXELS = [
  { x: 208, y: 444, s: 18, c: "var(--color-pink)" },
  { x: 932, y: 172, s: 10, c: "var(--color-yellow)" },
  { x: 1262, y: 448, s: 22, c: "var(--color-yellow)" },
  { x: 158, y: 624, s: 14, c: "var(--color-green)" },
  { x: 1306, y: 604, s: 14, c: "var(--color-teal)" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-16 md:pb-[84px]">
      <div className="flex items-center justify-between px-5 pt-6 md:px-16 md:pt-10">
        <a href="#top" aria-label="Pixel Spell — home">
          <Image src={asset("/logo.svg")} alt="Pixel Spell" width={189} height={52} preload className="h-auto w-28 md:w-[189px]" />
        </a>
        <p className="flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[13px] font-medium text-ink/85 ring-1 ring-ink/8 md:text-[15px]">
          <span className="size-2 rounded-full bg-green shadow-[0_0_0_3px_rgba(114,179,58,0.35)]" />
          <span className="hidden sm:inline">Booking projects for</span> Q4 2026
        </p>
      </div>

      <h1 className="sr-only">We cast pixel spells — Pixel Spell is a design &amp; engineering studio in Jakarta, est. 2026.</h1>

      <div className="relative mx-auto mt-4 aspect-[1440/760] w-full max-w-[1440px] md:mt-10">
        {/* Arched headline, behind the characters */}
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
          <path id="arc-title" d="M64.4 328.6 A1020 1020 0 0 1 1375.6 328.6" fill="none" />
          <text fontFamily="var(--font-shrikhand)" fontSize="116" dominantBaseline="central" letterSpacing="1">
            <textPath href="#arc-title" startOffset="50%" textAnchor="middle">
              <tspan fill="var(--color-ink)">we cast pixel </tspan>
              <tspan fill="var(--color-pink)">spells</tspan>
            </textPath>
          </text>
        </svg>

        {/* Soft ground shadow the cast stands on */}
        <div
          className="absolute rounded-[50%] bg-[radial-gradient(closest-side,rgba(64,51,38,0.16),rgba(64,51,38,0))]"
          style={{ ...at(230, 684, 1000), height: `${(56 / H) * 100}%` }}
        />

        {/* Back to front, as in Figma */}
        <Character name="fox-idle" flip preload sizes="40vw" className="absolute" style={at(137, 143, 580)} />
        <Character name="cat-front" preload sizes="45vw" className="absolute" style={at(400, 86, 640)} />
        <Character name="wolf-crouch" flip preload sizes="42vw" className="absolute" style={at(733, 149, 600)} />
        <Character name="bird-stand" preload sizes="32vw" className="absolute" style={at(290, 283, 460)} />

        {PIXELS.map((p, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute aspect-square animate-[bob_4s_ease-in-out_infinite] rounded-[3px]"
            style={{ ...at(p.x, p.y, p.s), background: p.c, animationDelay: `${i * -0.8}s` }}
          />
        ))}

        {/* Small arched subtitle, on top */}
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
          <path id="arc-sub" d="M562.8 218.7 A905 905 0 0 1 1452.2 578" fill="none" />
          <text fontFamily="var(--font-geist-mono)" fontSize="13" letterSpacing="2.4" fill="var(--color-ink)" fillOpacity="0.6" dominantBaseline="central">
            <textPath href="#arc-sub" startOffset="50%" textAnchor="middle">
              DESIGN &amp; ENGINEERING STUDIO · JAKARTA · EST. 2026
            </textPath>
          </text>
        </svg>
      </div>

      <p className="mx-auto mt-10 max-w-[1000px] px-6 text-center text-[clamp(24px,3.1vw,44px)] leading-[1.2] font-medium tracking-[-0.02em] md:mt-[50px]">
        We make brands and products impossible to forget, with design, code and a little{" "}
        <span className="text-pink">magic.</span>
      </p>
    </header>
  );
}
