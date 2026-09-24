import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { asset } from "@/lib/asset";

/* The cast. Each entry is one Figma component, exported as a square PNG at 2x
   (the whole component frame, so the soft ground shadow comes with it).
   Drop the file at public/characters/<name>.png and it replaces the placeholder
   on the next build — no code change needed. */
export const CHARACTERS = {
  "fox-idle": { label: "Fox · Idle", figma: "4050:379" },
  "fox-casting": { label: "Fox · Casting", figma: "4050:382" },
  "cat-front": { label: "Cat · Front", figma: "4057:384" },
  "cat-rest": { label: "Cat · Rest", figma: "4057:405" },
  "wolf-crouch": { label: "Wolf · Crouch", figma: "4062:396" },
  "wolf-run": { label: "Wolf · Run", figma: "4062:399" },
  "wolf-sneak": { label: "Wolf · Sneak", figma: "4062:405" },
  "bird-stand": { label: "Bird · Stand", figma: "4059:396" },
  "bird-cheer": { label: "Bird · Cheer", figma: "4059:399" },
  "bird-archer": { label: "Bird · Archer", figma: "4059:402" },
} as const;

export type CharacterName = keyof typeof CHARACTERS;

const has = (file: string) => fs.existsSync(path.join(process.cwd(), "public", file));

export function Character({
  name,
  flip = false,
  preload = false,
  sizes = "400px",
  className = "",
  style,
}: {
  name: CharacterName;
  flip?: boolean;
  preload?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const file = `characters/${name}.png`;
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} aspect-square ${className}`} style={style} aria-hidden="true">
      {has(file) ? (
        <Image
          src={asset(`/${file}`)}
          alt=""
          fill
          sizes={sizes}
          preload={preload}
          className="object-contain"
          style={flip ? { transform: "scaleX(-1)" } : undefined}
        />
      ) : (
        <Placeholder label={CHARACTERS[name].label} />
      )}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-[14%] flex items-end justify-center rounded-[40%_40%_24px_24px] border-2 border-dashed border-ink/20 bg-white/40 pb-[8%]">
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/50">{label}</span>
    </div>
  );
}

/* The footer island is one big illustration (Figma frame "Spell Isle", 4070:418). */
export function Island({ className = "" }: { className?: string }) {
  const file = "island.png";
  if (has(file)) {
    return (
      <div className={`relative aspect-[1440/860] ${className}`}>
        <Image src={asset(`/${file}`)} alt="Pixel Spell's island, with the fox, cat, wolf and bird" fill sizes="100vw" className="object-contain" />
      </div>
    );
  }
  return (
    <div className={`relative flex aspect-[1440/860] items-center justify-center ${className}`}>
      <div className="flex h-[70%] w-[80%] items-center justify-center rounded-[48px] border-2 border-dashed border-ink/20 bg-tint-green/60">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/50">Spell Isle illustration · island.png</span>
      </div>
    </div>
  );
}
