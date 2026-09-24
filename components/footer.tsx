import { Island } from "./character";
import { BOOK_A_CALL } from "./ui";

/* TODO: real social URLs */
const SOCIAL = [
  ["Instagram", "#"],
  ["Dribbble", "#"],
  ["Behance", "#"],
  ["LinkedIn", "#"],
];

function Dotted({ items }: { items: React.ReactNode[] }) {
  return (
    <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-5">
          {i > 0 && <span className="text-pink" aria-hidden="true">•</span>}
          {item}
        </span>
      ))}
    </p>
  );
}

const link = "transition-colors hover:text-pink-deep";

export function Footer() {
  return (
    <footer className="bg-cream pt-20 text-center md:pt-[120px]">
      <div className="flex flex-col gap-5 px-5 font-medium">
        <Dotted items={SOCIAL.map(([label, href]) => <a key={label} href={href} className={link}>{label}</a>)} />
        <Dotted
          items={[
            <a key="mail" href="mailto:hello@pixelspell.studio" className={link}>hello@pixelspell.studio</a>,
            <span key="city">Jakarta, Indonesia</span>,
            <a key="call" href={BOOK_A_CALL} className={link}>Book a call ↗</a>,
          ]}
        />
        <p className="font-mono text-xs tracking-[0.04em] text-ink/70">
          © 2026 PIXEL SPELL STUDIO <span className="mx-3 text-pink" aria-hidden="true">•</span> MADE WITH MAGIC, NOT TEMPLATES ✦
        </p>
      </div>
      <Island className="mx-auto mt-12 max-w-[1440px]" />
    </footer>
  );
}
