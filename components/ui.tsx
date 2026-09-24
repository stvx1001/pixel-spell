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

type Tone = "dark" | "pink" | "light";
const tones: Record<Tone, string> = {
  dark: "bg-ink text-white hover:bg-ink/85",
  pink: "bg-pink text-white hover:bg-pink-deep",
  light: "bg-white/70 text-ink ring-1 ring-ink/12 hover:bg-white",
};

/* Pill button with the yellow ↗ used throughout the design. */
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
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[17px] font-medium transition-[background-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink ${tones[tone]} ${className}`}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${tone === "dark" ? "text-yellow" : ""}`}
        >
          ↗
        </span>
      )}
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
      className={`inline-block rounded-full px-7 py-3 font-hand text-[28px] leading-none whitespace-nowrap text-white ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export const BOOK_A_CALL = "mailto:hello@pixelspell.studio?subject=Let%E2%80%99s%20cast%20a%20spell";
