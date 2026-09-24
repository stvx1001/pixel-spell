import { Character } from "./character";
import { Eyebrow, Heading } from "./ui";

const STEPS = [
  { n: "01", time: "1 WEEK", title: "Discover", body: "We dig into your goals, users and market to find the real problem worth solving.", bg: "bg-tint-teal" },
  { n: "02", time: "1–2 WEEKS", title: "Sketch", body: "Moodboards, flows and early concepts — we explore wide, then focus fast.", bg: "bg-tint-pink" },
  { n: "03", time: "2–6 WEEKS", title: "Cast", body: "High-fidelity design and production code, crafted pixel by pixel.", bg: "bg-tint-yellow" },
  { n: "04", time: "ONGOING", title: "Launch", body: "We ship, measure and keep polishing — your partner beyond go-live.", bg: "bg-tint-green" },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-8 bg-cream px-5 py-24 md:px-16 md:py-[140px]">
      <div className="relative mx-auto max-w-[1312px]">
        <Character name="bird-archer" sizes="380px" className="absolute -top-16 right-0 hidden w-[300px] md:block lg:-top-[100px] lg:right-[36px] lg:w-[380px]" />
        <Eyebrow n="05">How the magic happens</Eyebrow>
        <Heading pre={"A clear process.\nNo "} hot="hocus-pocus." className="mt-6" />

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className={`flex min-h-[340px] flex-col rounded-[28px] p-7 pb-8 transition-transform duration-300 hover:-translate-y-1.5 lg:min-h-[381px] ${s.bg}`}>
              <div className="flex items-center justify-between">
                <span className="font-pixel text-[28px] leading-none">{s.n}</span>
                <span className="rounded-full bg-white/70 px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.04em]">{s.time}</span>
              </div>
              <h3 className="mt-auto font-block text-[36px] tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-5 font-mono text-sm leading-[1.6] text-ink/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
