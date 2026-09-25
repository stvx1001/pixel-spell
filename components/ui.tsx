import Link from "next/link";

/* "(06)  WAYS TO WORK" */
export function Eyebrow({ n, children, className = "text-pink-deep" }: { n: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>
      ({n})  {children}
    </p>
  );
}

/* A Shrikhand heading where one word is pink: <Heading pre="Pick your " hot="potion." /> */
export function Heading({
  pre,
  hot,
  post = "",
  as: Tag = "h2",
  className = "",
}: {
  pre: string;
  hot: string;
  post?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`title whitespace-pre-line ${className}`}>
      {pre}
      <span className="text-pink">{hot}</span>
      {post}
    </Tag>
  );
}

export type Tone = "dark" | "pink" | "light";
const tones: Record<Tone, string> = {
  dark: "bg-ink text-white hover:bg-ink/85",
  pink: "bg-pink text-white hover:bg-pink-deep",
  light: "bg-white/70 text-ink ring-1 ring-ink/12 hover:bg-white",
};

/* The pill button's look, shared by <Button> (a link) and <BriefButton> (opens the brief form). */
const SIZE = "py-4 pr-7 pl-8 text-[15px] md:py-[18px] md:text-[17px]";
export const buttonClass = (tone: Tone, className = "", size = SIZE) =>
  `group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-[background-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink ${size} ${tones[tone]} ${className}`;

/* The yellow ↗ used throughout the design. */
export function Arrow({ tone = "dark", glyph = "↗" }: { tone?: Tone; glyph?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${tone === "light" ? "" : "text-yellow"}`}
    >
      {glyph}
    </span>
  );
}

export function Button({
  href,
  children,
  tone = "dark",
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(tone, className)}>
      {children}
      {arrow && <Arrow tone={tone} />}
    </Link>
  );
}

/* Rotated Caveat pill sticker: "freshly brewing ✦", "pick me! ✦" */
export function Sticker({
  children,
  className = "",
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={`rounded-full font-hand leading-none whitespace-nowrap text-white ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export const EMAIL = "hello@pixelspell.studio";
