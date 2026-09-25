import Image from "next/image";
import { asset } from "@/lib/asset";

/* The Studio section's campfire (Figma "Campfire" 4117:522): the island vector, the
   staff and sword props, and the four resting characters. Positioned in the frame's
   600×470 pixels as percentages so it scales as one piece (the phone frame is the
   same scene at 350 wide). The art in public/campfire/ is each layer's own image
   from Figma: the character PNGs are the raw "Art", the shadows the blurred ellipse. */
const SW = 600;
const SH = 470;
const box = (x: number, y: number, w: number, h: number) => ({
  left: `${(x / SW) * 100}%`,
  top: `${(y / SH) * 100}%`,
  width: `${(w / SW) * 100}%`,
  height: `${(h / SH) * 100}%`,
});

/* Inset of each layer inside its square mascot frame, straight from Figma. */
const CAST = [
  { name: "bird", x: 65, y: 38.8, s: 170, shadow: "92.88% 39.72% 3.38% 34.03%", blur: "-40% -5.71%", art: "14.98% 24.1% 4% 24.08%" },
  { name: "wolf", x: 362, y: 4, s: 200, shadow: "93% 36.45% 3.5% 36.8%", blur: "-42.86% -5.61%", art: "9.5% 20.5% 4.72% 26.85%" },
  { name: "cat", x: 63, y: 99.2, s: 230, shadow: "93.25% 33.02% 3.75% 27.98%", blur: "-50% -3.85%", art: "33.53% 11.88% 2.1% 14.4%" },
  { name: "fox", x: 330, y: 108.8, s: 220, shadow: "92.5% 31.63% 3.5% 31.62%", blur: "-37.5% -4.08%", art: "12.93% 14.92% 3.73% 16.8%" },
];

/* Props: the rotated frame's bounding box, the unrotated size and the art's inset. */
const PROPS = [
  { name: "staff", x: 348.78, y: 95.99, w: 98.433, h: 144.017, iw: 60.705, ih: 131.704, rotate: 18, art: "5.58% 12.11%" },
  { name: "sword", x: 192.63, y: 65.64, w: 78.737, h: 168.711, iw: 162.261, ih: 51.341, rotate: 100, art: "11.94% 3.78%" },
];

const src = (file: string) => asset(`/campfire/${file}`);

export function Campfire({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[600/470] ${className}`} aria-hidden="true">
      <div className="absolute" style={box(0, -150, 600, 640)}>
        <Image src={src("campfire.svg")} alt="" fill sizes="600px" />
      </div>

      {PROPS.map((p) => (
        <div key={p.name} className="absolute flex items-center justify-center" style={box(p.x, p.y, p.w, p.h)}>
          <div
            className="relative shrink-0"
            style={{ width: `${(p.iw / p.w) * 100}%`, height: `${(p.ih / p.h) * 100}%`, transform: `rotate(${p.rotate}deg)` }}
          >
            <div className="absolute" style={{ inset: p.art }}>
              <Image src={src(`${p.name}.png`)} alt="" fill sizes="150px" className="object-contain" />
            </div>
          </div>
        </div>
      ))}

      {CAST.map((c) => (
        <div key={c.name} className="absolute" style={box(c.x, c.y, c.s, c.s)}>
          <div className="absolute" style={{ inset: c.shadow }}>
            <div className="absolute" style={{ inset: c.blur }}>
              <Image src={src(`shadow-${c.name}.svg`)} alt="" fill sizes="120px" />
            </div>
          </div>
          <div className="absolute" style={{ inset: c.art }}>
            <Image src={src(`${c.name}.png`)} alt="" fill sizes="170px" className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}
