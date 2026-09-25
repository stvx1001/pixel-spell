"use client";

import { useEffect, useState } from "react";
import { BriefButton } from "./brief";
import { NAV_LINKS } from "./floating-nav";
import { Pixels } from "./pixel";

/* The phone header's round menu button (Figma "Menu Button" 4073:1805). The floating
   nav is hidden on a phone, so its links live here. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="relative z-20 flex size-11 flex-col items-center justify-center gap-[3.5px] rounded-full bg-ink"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-[2.5px] w-[18px] rounded-[2px] bg-white transition-[transform,opacity] duration-200 ${
              open ? (i === 0 ? "translate-y-[6px] rotate-45" : i === 2 ? "-translate-y-[6px] -rotate-45" : "opacity-0") : ""
            }`}
          />
        ))}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute top-[54px] right-0 z-20 flex w-[min(300px,calc(100vw-40px))] flex-col gap-1 rounded-3xl bg-white p-2 shadow-[0_12px_32px_rgba(58,42,16,0.16)] ring-1 ring-ink/8"
        >
          {NAV_LINKS.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-full px-4 py-3 text-base font-medium text-ink/80 hover:bg-ink/4 hover:text-ink"
            >
              <Pixels name={icon} cell={3} className="opacity-45" />
              {label}
            </a>
          ))}
          <BriefButton onClick={() => setOpen(false)} className="mt-1 w-full">
            Book a call
          </BriefButton>
        </nav>
      )}
    </div>
  );
}
