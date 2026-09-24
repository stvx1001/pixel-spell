import { Character } from "./character";
import { Pixels, type BitmapName } from "./pixel";
import { Eyebrow } from "./ui";

const SERVICES: { title: string; body: string; icon: BitmapName; color: string }[] = [
  { title: "Branding", body: "Identity, logo systems, voice & brand guidelines that make you unmistakable.", icon: "ring", color: "bg-pink" },
  { title: "UI/UX Design", body: "Research-led product design for apps, dashboards and platforms people enjoy.", icon: "layout", color: "bg-yellow" },
  { title: "Web Development", body: "Fast, animated, production-ready websites built with modern frameworks.", icon: "brackets", color: "bg-teal" },
  { title: "3D & Motion", body: "Characters, illustrations and micro-interactions that bring your brand to life.", icon: "diamond", color: "bg-green" },
];

export function Services() {
  return (
    // The card's rounded corners sit on the sand of Works above and the cream of Products below.
    <div className="bg-[linear-gradient(var(--color-sand)_50%,var(--color-cream)_50%)]">
      <section id="services" className="relative scroll-mt-8 rounded-[32px] bg-ink px-5 pt-24 pb-24 text-cream md:rounded-[48px] md:px-16 md:pt-[140px] md:pb-[140px]">
        <Character name="cat-front" sizes="320px" className="absolute -top-[180px] right-4 w-[220px] md:-top-[268px] md:right-[60px] md:w-[320px]" />

        <div className="mx-auto max-w-[1312px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow n="02" className="text-yellow">What we conjure</Eyebrow>
              <h2 className="title mt-6">
                One studio.
                <br />
                Every <span className="text-pink">spell</span> you need.
              </h2>
            </div>
            <p className="max-w-[340px] font-mono text-sm leading-[1.65] text-cream/80 lg:text-right">
              From a first logo to a full product launch — strategy, design and code under one roof.
            </p>
          </div>

          <ul className="mt-[72px] border-b border-cream/18">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-x-4 gap-y-3 border-t border-cream/18 py-7 md:grid-cols-[80px_1fr_360px_72px] md:gap-8 md:py-9"
              >
                <span className="font-mono text-sm tracking-[0.04em] text-cream/80">0{i + 1}</span>
                <h3 className="font-block text-[clamp(30px,3.9vw,56px)] leading-none tracking-[-0.02em] transition-[color,translate] duration-300 group-hover:translate-x-2 group-hover:text-yellow">
                  {s.title}
                </h3>
                <p className="col-span-full font-mono text-sm leading-[1.6] text-cream/80 md:col-span-1">{s.body}</p>
                <span
                  className={`col-start-3 row-start-1 flex size-14 items-center justify-center rounded-[14px] md:col-start-4 md:size-[72px] md:rounded-[18px] ${s.color} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
                >
                  <Pixels name={s.icon} cell={8} color="var(--color-ink)" className="scale-[0.8] md:scale-100" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
