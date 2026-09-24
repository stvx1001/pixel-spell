"use client";

import { useId, useState } from "react";

const QA = [
  ["How much does a project cost?", "Every project gets a fixed quote after a free 30-minute call. The packages above are where most projects start; bigger scopes are priced per phase, so you always know the number before we begin."],
  ["How long will it take?", "A Brand Starter takes 2–3 weeks, a Website 4–6 weeks and a Product Sprint 2 weeks. You get a week-by-week plan before kickoff."],
  ["What do you need from me?", "One decision-maker, about 30 minutes a week for check-ins, and whatever you already have: logo, copy, research, access to your tools. We send a short checklist after the first call."],
  ["Do you work with teams outside Indonesia?", "Yes. We’re based in Jakarta (GMT+7) and work async-first, in English or Bahasa Indonesia, with calls at a time that suits you."],
  ["Can you work with our own developers?", "Of course. We can hand over clean Figma files and specs, or build alongside your team in React, Framer or Webflow."],
  ["What happens after launch?", "You can keep us on a monthly care plan for updates, new pages and design support, or take everything in-house with a full handover."],
];

export function FaqList() {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <ul className="flex flex-col gap-4">
      {QA.map(([q, a], i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <li key={q} className={`rounded-3xl bg-white ring-1 transition-shadow ${isOpen ? "ring-pink/50" : "ring-ink/8 hover:ring-ink/20"}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-[26px] pr-[26px] pl-8 text-left text-[clamp(18px,1.6vw,22px)] font-semibold tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
              >
                {q}
                <span
                  aria-hidden="true"
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[22px] font-medium transition-[background-color,color,rotate] duration-300 ${isOpen ? "rotate-180 bg-pink text-white" : "bg-ink/6"}`}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={id} role="region" className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden px-8 font-mono text-[15px] leading-[1.7] text-ink/80">
                <span className="block pb-[26px]">{a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
