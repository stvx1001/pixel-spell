import Image from "next/image";
import { asset } from "@/lib/asset";
import { Character } from "./character";
import { MobileMenu } from "./mobile-menu";

/* The hero "stage" is the Figma hero (1440 wide) from y=80 to y=840. Everything on it
   is positioned in those Figma pixels and converted to percentages, so the whole
   composition scales as one piece. The phone has its own composition (Figma "Hero v2"
   in the Mobile 390 frame), staged the same way from y=80 to y=380. */
const stage = (W: number, H: number) => (x: number, y: number, w: number) => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  width: `${(w / W) * 100}%`,
});
const W = 1440;
const H = 760;
const at = stage(W, H);
const MW = 390;
const MH = 300;
const atM = stage(MW, MH);

const PIXELS = [
  { x: 208, y: 444, s: 18, c: "var(--color-pink)" },
  { x: 932, y: 172, s: 10, c: "var(--color-yellow)" },
  { x: 1262, y: 448, s: 22, c: "var(--color-yellow)" },
  { x: 158, y: 624, s: 14, c: "var(--color-green)" },
  { x: 1306, y: 604, s: 14, c: "var(--color-teal)" },
];

const PIXELS_MOBILE = [
  { x: 14, y: 172.6, s: 10.8, c: "var(--color-pink)" },
  { x: 356.8, y: 172.6, s: 13.2, c: "var(--color-yellow)" },
  { x: 361.6, y: 230.2, s: 8.4, c: "var(--color-teal)" },
  { x: 14, y: 237.4, s: 8.4, c: "var(--color-green)" },
  { x: 268.8, y: 75.4, s: 6, c: "var(--color-yellow)" },
];

function Pixel({ style, color, i }: { style: React.CSSProperties; color: string; i: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute aspect-square animate-[bob_4s_ease-in-out_infinite] rounded-[3px]"
      style={{ ...style, background: color, animationDelay: `${i * -0.8}s` }}
    />
  );
}

function Headline({ id, path, fontSize, length, letterSpacing }: { id: string; path: string; fontSize: number; length?: number; letterSpacing?: number }) {
  return (
    <>
      <path id={id} d={path} fill="none" />
      <text fontFamily="var(--font-shrikhand)" fontSize={fontSize} dominantBaseline="central" letterSpacing={letterSpacing}>
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle" textLength={length} lengthAdjust={length ? "spacing" : undefined}>
          <tspan fill="var(--color-ink)">we cast pixel </tspan>
          <tspan fill="var(--color-pink)">spells</tspan>
        </textPath>
      </text>
    </>
  );
}

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-14 md:pb-[110px]">
      <div className="flex items-start justify-between px-5 pt-[18px] md:items-center md:px-16 md:pt-10">
        <a href="#top" aria-label="Pixel Spell — home" className="mt-1 md:mt-0">
          <Image src={asset("/logo.svg")} alt="Pixel Spell" width={189} height={52} preload className="h-auto w-[117px] md:w-[189px]" />
        </a>
        <p className="hidden items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[15px] font-medium text-ink/85 ring-1 ring-ink/8 md:flex">
          <span className="size-2 rounded-full bg-green shadow-[0_0_0_3px_rgba(114,179,58,0.35)]" />
          Booking projects for Q4 2026
        </p>
        <MobileMenu />
      </div>

      <h1 className="sr-only">We cast pixel spells — Pixel Spell is a design &amp; engineering studio in Jakarta, est. 2026.</h1>

      {/* Phone */}
      <div className="relative mx-auto mt-[18px] aspect-[390/300] w-full md:hidden">
        <svg viewBox={`0 0 ${MW} ${MH}`} className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
          <Headline id="arc-title-m" path="M-52.3 182.2 A285.5 285.5 0 0 1 442.3 182.2" fontSize={32.48} length={338} />
        </svg>
        <div
          className="absolute h-[6.72%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(64,51,38,0.16),rgba(64,51,38,0))]"
          style={atM(16.8, 260.4, 360)}
        />
        <Character name="fox-idle" flip preload sizes="54vw" className="absolute" style={atM(-16.7, 65.8, 208.8)} />
        <Character name="cat-front" preload sizes="60vw" className="absolute" style={atM(78, 45, 230.4)} />
        <Character name="wolf-crouch" flip preload sizes="56vw" className="absolute" style={atM(197.9, 67.8, 216)} />
        <Character name="bird-stand" preload sizes="43vw" className="absolute" style={atM(38.4, 116.2, 165.6)} />
        {PIXELS_MOBILE.map((p, i) => (
          <Pixel key={i} i={i} color={p.c} style={atM(p.x, p.y, p.s)} />
        ))}
      </div>

      {/* Desktop */}
      <div className="relative mx-auto -mt-3 hidden aspect-[1440/760] w-full max-w-[1440px] md:block">
        {/* Arched headline, behind the characters */}
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
          <Headline id="arc-title" path="M64.4 328.6 A1020 1020 0 0 1 1375.6 328.6" fontSize={116} letterSpacing={1} />
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
          <Pixel key={i} i={i} color={p.c} style={at(p.x, p.y, p.s)} />
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

      <p className="mx-auto mt-5 max-w-[350px] px-0 text-center text-[20px] leading-[1.2] font-bold tracking-[-0.02em] md:mt-[50px] md:max-w-[1000px] md:px-6 md:text-[32px] md:leading-[1.25]">
        We make brands and products impossible to forget, with design, code and a little{" "}
        <span className="text-pink">magic.</span>
      </p>
    </header>
  );
}
