import Image from "next/image";
import { asset } from "@/lib/asset";
import { BriefLink } from "./brief";
import { Island } from "./character";
import { EMAIL } from "./ui";

/* TODO: real social URLs */
const SOCIAL = [
  ["Instagram", "#"],
  ["Dribbble", "#"],
  ["Behance", "#"],
  ["LinkedIn", "#"],
];

/* A row of items with pink dots between them. `stackOnPhone` drops the dots and puts
   each item on its own line below md, as in the Figma mobile footer. */
function Dotted({ items, gap = "gap-2 md:gap-5", stackOnPhone = false }: { items: React.ReactNode[]; gap?: string; stackOnPhone?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center ${stackOnPhone ? "flex-col gap-2 md:flex-row md:gap-5" : gap}`}>
      {items.map((item, i) => (
        <span key={i} className={`flex items-center ${gap}`}>
          {i > 0 && (
            <span className={`text-pink ${stackOnPhone ? "hidden md:inline" : ""}`} aria-hidden="true">
              •
            </span>
          )}
          {item}
        </span>
      ))}
    </div>
  );
}

const link = "transition-colors hover:text-pink-deep";

export function Footer() {
  return (
    <footer className="bg-cream pt-[72px] text-center md:pt-[120px]">
      <div className="flex flex-col items-center gap-5 px-5 text-sm font-medium md:text-base">
        <Image src={asset("/logo.svg")} alt="Pixel Spell" width={189} height={52} className="mb-7 h-auto w-[200px] md:hidden" />
        <Dotted items={SOCIAL.map(([label, href]) => <a key={label} href={href} className={link}>{label}</a>)} />
        <Dotted
          stackOnPhone
          items={[
            <a key="mail" href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>,
            <span key="city">Jakarta, Indonesia</span>,
            <BriefLink key="call" className={link}>Book a call ↗</BriefLink>,
          ]}
        />
        <Dotted
          stackOnPhone
          gap="gap-2 md:gap-3.5"
          items={[
            <span key="c" className="font-mono text-xs font-normal tracking-[0.04em]">© 2026 PIXEL SPELL STUDIO</span>,
            <span key="m" className="font-mono text-xs font-normal tracking-[0.04em]">MADE WITH MAGIC, NOT TEMPLATES ✦</span>,
          ]}
        />
      </div>
      <Island className="mx-auto mt-8 max-w-[1440px] md:mt-12" />
    </footer>
  );
}
