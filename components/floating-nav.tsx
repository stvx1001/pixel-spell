"use client";

import { useEffect, useState } from "react";
import { Pixels, type BitmapName } from "./pixel";
import { BriefLink } from "./brief";

export const NAV_LINKS: { id: string; label: string; icon: BitmapName }[] = [
  { id: "work", label: "Work", icon: "navWork" },
  { id: "services", label: "Services", icon: "navServices" },
  { id: "products", label: "Products", icon: "navProducts" },
  { id: "studio", label: "Studio", icon: "navStudio" },
  { id: "faq", label: "FAQ", icon: "navFaq" },
];

/* Hidden on a phone (the Figma mobile frame hides it); MobileMenu carries the links there.
   Which link lights up: the last linked section whose top has passed 40% of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return active;
}

export function FloatingNav() {
  const active = useActiveSection();
  return (
    <nav
      aria-label="Main"
      className="fixed bottom-7 left-1/2 z-50 hidden max-w-[calc(100vw-16px)] -translate-x-1/2 items-center gap-0.5 rounded-full bg-white p-1.5 shadow-[0_12px_32px_rgba(58,42,16,0.12)] ring-1 ring-ink/8 md:flex"
    >
      <a href="#top" aria-label="Back to top" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink/4 transition-transform hover:rotate-12 md:size-12">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <rect width="10" height="10" rx="3" fill="var(--color-pink)" />
          <rect x="12" width="10" height="10" rx="3" fill="var(--color-yellow)" />
          <rect y="12" width="10" height="10" rx="3" fill="var(--color-teal)" />
          <rect x="12" y="12" width="10" height="10" rx="3" fill="var(--color-green)" />
        </svg>
      </a>
      {NAV_LINKS.map(({ id, label, icon }) => {
        const on = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={on ? "location" : undefined}
            aria-label={label}
            className={`flex items-center gap-2 rounded-full px-3 py-3 text-base font-medium transition-colors md:px-4 ${on ? "bg-ink/6 text-ink" : "text-ink/75 hover:bg-ink/4 hover:text-ink"}`}
          >
            <Pixels name={icon} cell={3} color={on ? "var(--color-pink)" : "currentColor"} className={on ? "" : "opacity-60"} />
            <span className={on ? "" : "hidden lg:inline"}>{label}</span>
          </a>
        );
      })}
      <span className="mx-1 h-6 w-px bg-ink/10" aria-hidden="true" />
      <BriefLink className="flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-pink">
        Book a call
        <span className="text-yellow" aria-hidden="true">↗</span>
      </BriefLink>
    </nav>
  );
}
