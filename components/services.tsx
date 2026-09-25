import { Character } from "./character";
import { Pixels, type BitmapName } from "./pixel";
import { Eyebrow } from "./ui";

const SERVICES: { title: string; body: string; icon: BitmapName; color: string; tint: string }[] = [
  { title: "Branding", body: "Identity, logo systems, voice & brand guidelines that make you unmistakable.", icon: "ring", color: "bg-pink", tint: "bg-tint-pink" },
  { title: "UI/UX Design", body: "Research-led product design for apps, dashboards and platforms people enjoy.", icon: "layout", color: "bg-yellow", tint: "bg-tint-yellow" },
  { title: "Web Development", body: "Fast, animated, production-ready websites built with modern frameworks.", icon: "brackets", color: "bg-teal", tint: "bg-tint-teal" },
  { title: "3D & Motion", body: "Characters, illustrations and micro-interactions that bring your brand to life.", icon: "diamond", color: "bg-green", tint: "bg-[#e3f2d8]" },
];

/* Figma "Services" (4021:7957). The pixel icon sits on a 9×9 grid inside its tile. */
export function Services() {
  return (
    <section id="services" className="scroll-mt-8 bg-sand px-5 pt-[72px] pb-6 md:px-16 md:pt-[140px] md:pb-10">
      <div className="relative mx-auto max-w-[1312px]">
        <Character
          name="cat-front"
          sizes="220px"
          className="absolute top-[169px] right-[-26px] z-10 w-[176px] md:top-[122.8px] md:right-[-30px] md:w-[220px]"
        />

        <div className="relative pr-[110px] md:pr-0">
          <Eyebrow n="03">What we conjure</Eyebrow>
          <h2 className="title mt-6">
            One studio.
            <br />
            Every <span className="text-pink">spell</span> you need.
          </h2>
          <p className="max-w-[520px] font-mono text-sm leading-[1.65]">
            From a first logo to a full product launch — strategy, design and code under one roof.
          </p>
        </div>

        <ul className="relative mt-10 grid gap-3.5 md:mt-[72px] md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className="group flex flex-col gap-2.5 rounded-[20px] bg-white px-5 pt-5 pb-6 md:h-[340px] md:gap-3.5 md:rounded-3xl md:px-7 md:pt-7 md:pb-8"
            >
              <span className={`flex size-[60px] items-center justify-center rounded-2xl md:size-[76px] md:rounded-[20px] ${s.tint}`}>
                <span
                  className={`flex size-10 items-center justify-center rounded-[10px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 md:size-14 md:rounded-[14px] ${s.color}`}
                >
                  <Pixels name={s.icon} cell={56 / 9} color="var(--color-ink)" className="size-[22.2px] md:size-[31.1px]" />
                </span>
              </span>
              <span className="font-mono text-sm tracking-[0.04em] text-pink-deep">0{i + 1}</span>
              <h3 className="font-block text-[32px] leading-tight tracking-[-0.02em]">{s.title}</h3>
              <p className="font-mono text-sm leading-[1.6]">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
