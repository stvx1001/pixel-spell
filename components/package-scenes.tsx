import Image from "next/image";
import { asset } from "@/lib/asset";

/* The art at the top of the First Spark and Grand Spell cards (Figma "Packages",
   4039:360). Positions are the Figma pixels of the 420×210 card scene, as
   percentages, so a scene scales with its card. Files are in public/packages/. */
export const SW = 420;
export const SH = 210;
export const box = (x: number, y: number, w: number, h?: number) => ({
  left: `${(x / SW) * 100}%`,
  top: `${(y / SH) * 100}%`,
  width: `${(w / SW) * 100}%`,
  ...(h === undefined ? {} : { height: `${(h / SH) * 100}%` }),
});

const src = (file: string) => asset(`/packages/${file}`);

/* "Illustration / Campfire (vector)" (4150:1776): some 25 vector layers, rendered
   together from Figma's own layer code into one image (3×, with room for the staff
   that reaches above the scene). */
export function CampfireScene() {
  return (
    <div className="absolute" style={box(3, -48, 413.12, 244.4)}>
      <Image src={src("campfire.webp")} alt="" fill sizes="(min-width: 1024px) 420px, 100vw" />
    </div>
  );
}

/* A mascot frame: a square box with the ground shadow and the raw art inset, as Figma lays it out. */
function Mascot({ x, y, s, name, shadow, blur, art }: { x: number; y: number; s: number; name: string; shadow: string; blur: string; art: string }) {
  return (
    <div className="absolute aspect-square" style={box(x, y, s)}>
      <div className="absolute" style={{ inset: shadow }}>
        <div className="absolute" style={{ inset: blur }}>
          <Image src={src(`shadow-${name}.svg`)} alt="" fill sizes="200px" />
        </div>
      </div>
      <div className="absolute" style={{ inset: art }}>
        <Image src={src(`${name}-${name === "bird" ? "archer" : "battle"}.png`)} alt="" fill sizes="220px" className="object-contain" />
      </div>
    </div>
  );
}

/* A layer of the magic effect: FX frames are 500×410 at (-40,-200); each layer is inset within that. */
function Fx({ file, inset, blur }: { file: string; inset: string; blur?: string }) {
  return (
    <div className="absolute" style={{ inset }}>
      <div className="absolute" style={{ inset: blur ?? "0" }}>
        <Image src={src(`fx-${file}.svg`)} alt="" fill sizes="400px" />
      </div>
    </div>
  );
}

/* The Grand Spell battle: magic behind, the bird and the fox, magic in front, then
   the cat and the wolf, back to front as in Figma. */
export function BattleScene() {
  const fxFrame = box(-40, -200, 500, 410);
  return (
    <>
      <div className="absolute" style={fxFrame}>
        <Fx file="glow" inset="9.76% 19.6% 26.83% 20.4%" blur="-5.38% -4.67%" />
        <Fx file="circle" inset="79.02% 10.8% 6.34% 10.8%" blur="-13.33% -2.04%" />
        <Fx file="swirl-back" inset="22.68% 19.12% 43.2% 12.96%" />
      </div>
      <Mascot name="bird" x={262} y={-150} s={160} shadow="92.63% 38.42% 3.13% 31.33%" blur="-35.29% -4.96%" art="15.55% 13.73% 10.35% 14.15%" />
      <Mascot name="fox" x={68} y={-136} s={250} shadow="93% 28.75% 3% 38.75%" blur="-37.5% -4.62%" art="3.5% 7.5% 17% 7.5%" />
      <div className="absolute" style={fxFrame}>
        <Fx file="swirl-front" inset="36.85% 13.04% 29% 19.92%" />
        <Fx file="sparkles" inset="16.83% 8% 39.51% 2.4%" />
        <Fx file="sparkles-gold" inset="17.8% 22.8% 67.07% 24.6%" />
        <Fx file="pixels" inset="21.95% 33.2% 59.02% 10%" />
      </div>
      <Mascot name="cat" x={-35} y={-74} s={260} shadow="93% 28.17% 3.5% 30.58%" blur="-42.86% -3.64%" art="27.6% 7.7% 4% 15.15%" />
      <Mascot name="wolf" x={232} y={-20} s={205} shadow="92.75% 27.7% 3.25% 32.55%" blur="-37.5% -3.77%" art="25.25% 17.58% 3.68% 22.13%" />
    </>
  );
}
