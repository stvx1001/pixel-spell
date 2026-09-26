import Image from "next/image";
import { asset } from "@/lib/asset";

/* The art at the top of the package cards (Figma "Packages", 4039:360). Every card is
   a scaled copy of one 420×210 scene; positions are that scene's Figma pixels as
   percentages, so a scene scales with its card. Files are in public/packages/. */
export const SW = 420;
export const SH = 210;
export const box = (x: number, y: number, w: number, h?: number) => ({
  left: `${(x / SW) * 100}%`,
  top: `${(y / SH) * 100}%`,
  width: `${(w / SW) * 100}%`,
  ...(h === undefined ? {} : { height: `${(h / SH) * 100}%` }),
});

/* A few Grand Spell layers sit elsewhere in the phone frame. `at()` places a layer at
   (x, y) from lg up and at the phone position below it (same scene pixels). */
type Phone = { x?: number; y?: number };
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const at = (x: number, y: number, phone: Phone = {}) =>
  ({
    "--l": pct(phone.x ?? x, SW),
    "--t": pct(phone.y ?? y, SH),
    "--l-lg": pct(x, SW),
    "--t-lg": pct(y, SH),
  }) as React.CSSProperties;
const atClass = "left-(--l) top-(--t) lg:left-(--l-lg) lg:top-(--t-lg)";

const src = (file: string) => asset(`/packages/${file}`);

/* First Spark: "Illustration / Campfire (vector)" (4150:1776), ~25 vector layers
   rendered together from Figma's own layer code into one image (3×, with room for
   the staff that reaches above the scene). */
export function CampfireScene() {
  return (
    <>
      <div className="absolute" style={box(3, -48, 413.12, 244.4)}>
        <Image src={src("campfire.webp")} alt="" fill sizes="(min-width: 1024px) 420px, 100vw" />
      </div>
      {/* Firelight: a warm glow over the flame that flickers (the flame is part of the image) */}
      <span
        aria-hidden="true"
        className="absolute animate-flicker rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,214,120,0.95),rgba(255,150,60,0.45)_50%,rgba(255,150,60,0)_100%)] mix-blend-screen"
        style={box(163, 18, 110, 110)}
      />
    </>
  );
}

/* Quick Charm: "Illustration / Charm workshop" (4183:478), one image. */
export function WorkshopScene() {
  return (
    <div className="absolute animate-float [animation-duration:5s]" style={box(2.17, -105.94, 416.67, 285.1)}>
      <Image src={src("workshop.webp")} alt="" fill sizes="(min-width: 1024px) 420px, 100vw" className="object-contain" />
    </div>
  );
}

/* A mascot frame: a square box with the ground shadow and the raw art inset, as Figma
   lays it out. `flip` mirrors the whole frame, shadow included, as Figma's flip does. */
function Mascot({
  name,
  x,
  y,
  s,
  phone,
  shadow,
  blur,
  art,
  flip = false,
  motion = "",
}: {
  name: string;
  x: number;
  y: number;
  s: number;
  phone?: Phone;
  shadow: string;
  blur: string;
  art: string;
  flip?: boolean;
  /* an animation class and its delay: "animate-float" floats, "animate-breathe" breathes */
  motion?: string;
}) {
  const [anim, delay = "0s"] = motion.split(" ");
  return (
    <div
      className={`absolute aspect-square ${atClass} ${flip ? "-scale-x-100" : ""} ${anim ?? ""}`}
      style={{ width: pct(s, SW), ...at(x, y, phone), animationDelay: delay }}
    >
      <div className="absolute" style={{ inset: shadow }}>
        <div className="absolute" style={{ inset: blur }}>
          <Image src={src(`shadow-${name}.svg`)} alt="" fill sizes="200px" />
        </div>
      </div>
      <div className="absolute" style={{ inset: art }}>
        <Image src={src(`${name}-battle.png`)} alt="" fill sizes="250px" className="object-contain" />
      </div>
    </div>
  );
}

/* A layer of the magic effect, inset in its 500×410 FX frame. */
function Fx({ file, inset, blur, motion = "", delay = "0s" }: { file: string; inset: string; blur?: string; motion?: string; delay?: string }) {
  return (
    <div className={`absolute ${motion}`} style={{ inset, animationDelay: delay }}>
      <div className="absolute" style={{ inset: blur ?? "0" }}>
        <Image src={src(`fx-${file}.svg`)} alt="" fill sizes="400px" />
      </div>
    </div>
  );
}

function FxFrame({ x, y, phone, children }: { x: number; y: number; phone?: Phone; children: React.ReactNode }) {
  return (
    <div className={`absolute ${atClass}`} style={{ width: pct(500, SW), height: pct(410, SH), ...at(x, y, phone) }}>
      {children}
    </div>
  );
}

/* Grand Spell: the battle. Magic behind, then the bird, fox, cat and wolf in their
   battle poses, then magic in front of everyone, as in Figma. */
export function BattleScene() {
  return (
    <>
      <FxFrame x={-40} y={-200} phone={{ y: -188 }}>
        <Fx file="glow" inset="9.76% 19.6% 26.83% 20.4%" blur="-5.38% -4.67%" motion="animate-shimmer" />
        <Fx file="circle" inset="79.02% 10.8% 6.34% 10.8%" blur="-13.33% -2.04%" motion="animate-shimmer" delay="-1.6s" />
        <Fx file="swirl-back" inset="22.68% 19.12% 43.2% 12.96%" motion="animate-shimmer" delay="-0.8s" />
      </FxFrame>
      <Mascot name="bird" x={252} y={-146} s={168} phone={{ y: -119.6 }} motion="animate-float" shadow="93% 30% 3.5% 37.5%" blur="-42.86% -4.62%" art="4% 4.5% 21.68% 5.5%" />
      <Mascot name="fox" x={68} y={-136} s={250} phone={{ y: -119.2 }} flip motion="animate-float -1.8s" shadow="93% 28.75% 3% 38.75%" blur="-37.5% -4.62%" art="3.5% 7.5% 17% 7.5%" />
      <Mascot name="cat" x={-19.66} y={-25.95} s={212} phone={{ x: -8, y: -20.34 }} motion="animate-breathe" shadow="91.5% 18.75% 4% 18.75%" blur="-33.33% -2.4%" art="4% 8.64% 5.5% 8.64%" />
      <Mascot name="wolf" x={171.04} y={-39.04} s={232} phone={{ x: 165.6, y: -39.8 }} motion="animate-breathe -1.5s" shadow="91.5% 17.5% 4.5% 27.5%" blur="-37.5% -2.73%" art="29.3% 2% 6% 2%" />
      <FxFrame x={-28.67} y={-118.94} phone={{ x: -40, y: -188 }}>
        <Fx file="swirl-front" inset="36.85% 13.04% 29% 19.92%" motion="animate-shimmer" delay="-2.2s" />
        <Fx file="sparkles" inset="16.83% 8% 39.51% 2.4%" motion="animate-twinkle" />
        <Fx file="sparkles-gold" inset="17.8% 22.8% 67.07% 24.6%" motion="animate-twinkle" delay="-1.2s" />
        <Fx file="pixels" inset="21.95% 33.2% 59.02% 10%" motion="animate-twinkle" delay="-0.6s" />
      </FxFrame>
    </>
  );
}
