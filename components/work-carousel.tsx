"use client";

import { Children, useState } from "react";

/* Desktop carousel (Figma "Carousel Controls" 4132:330): the arrows cycle the cards
   through the three tilted slots. On a phone the cards simply stack. */
const TILTS = [3, -2, 2];

export function WorkCarousel({ children }: { children: React.ReactNode }) {
  const cards = Children.toArray(children);
  const [first, setFirst] = useState(0);
  const n = cards.length;
  const order = cards.map((_, i) => cards[(first + i) % n]);
  const step = (d: number) => setFirst((first + d + n) % n);

  return (
    <>
      <div className="mt-10 flex flex-col items-center gap-5 md:mt-[72px] md:flex-row md:justify-center md:gap-9">
        {order.map((card, slot) => (
          <div
            key={(card as React.ReactElement).key}
            className="w-full max-w-[350px] rotate-(--tilt) transition-transform duration-300 hover:rotate-0 md:max-w-[410px] md:flex-1"
            style={{ "--tilt": `${TILTS[slot % TILTS.length]}deg` } as React.CSSProperties}
          >
            {card}
          </div>
        ))}
      </div>

      <div className="mt-[72px] hidden items-center justify-center gap-4 md:flex">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous work"
          className="flex size-[58px] items-center justify-center rounded-full border-2 border-ink bg-white text-[22px] font-medium transition-transform hover:-translate-x-0.5"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next work"
          className="flex size-[58px] items-center justify-center rounded-full bg-ink text-[22px] font-medium text-yellow transition-transform hover:translate-x-0.5"
        >
          →
        </button>
      </div>
    </>
  );
}
