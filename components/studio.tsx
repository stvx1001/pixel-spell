import { Campfire } from "./campfire";
import { Eyebrow, Heading } from "./ui";

const VALUES = [
  ["bg-pink", "Design + code under one roof"],
  ["bg-yellow", "Senior craft on every pixel"],
  ["bg-teal", "Direct line, no account managers"],
  ["bg-green", "Fast, honest, fixed timelines"],
];

/* Figma "About" (4035:360): the campfire scene and the studio intro. */
export function Studio() {
  return (
    <section id="studio" className="scroll-mt-8 bg-sand px-5 py-[72px] md:px-16 md:py-[140px]">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-10 lg:flex-row lg:gap-14">
        <Campfire className="w-full max-w-[350px] shrink-0 md:max-w-[600px] lg:w-[600px]" />

        <div className="flex w-full flex-1 flex-col gap-7">
          <Eyebrow n="01">The studio</Eyebrow>
          <Heading pre={"Small studio.\nSerious "} hot="magic." />
          <p className="lead text-ink/85">
            Pixel Spell is a design &amp; engineering studio founded in 2026. We keep things small on purpose, so every
            project gets senior-level craft and you always talk directly to the people doing the work.
          </p>
          <ul className="flex flex-col gap-4">
            {VALUES.map(([color, text]) => (
              <li key={text} className="flex items-center gap-3.5 text-[17px] font-medium md:text-[20px]">
                <span className={`size-3.5 shrink-0 rounded-[3px] ${color}`} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          {/* TODO: founder name */}
          <p className="font-hand text-[22px] md:text-[30px]">— Founder Name, Founder &amp; Creative Director</p>
        </div>
      </div>
    </section>
  );
}
