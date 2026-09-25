"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Arrow, buttonClass, EMAIL, type Tone } from "./ui";

/* The "Tell us about your spell" form (Figma "Brief Modal — Desktop" 4121:478 and
   "— Mobile 390" 4121:543). Every "Book a call" and package button opens it.
   The site is static, so sending it opens the visitor's email app with the brief
   filled in, addressed to the studio. */

export const PACKAGES = ["First Spark · Free", "Grand Spell · $50", "Quick Charm · $12"] as const;
export type Package = (typeof PACKAGES)[number];
const NEEDS = ["UI/UX", "Illustration", "Branding", "Design system"];

const OPEN_EVENT = "brief:open";
const openBrief = (pkg?: Package) => window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: pkg }));

/* A button that looks like <Button> but opens the brief form, optionally with a package picked. */
export function BriefButton({
  pkg,
  tone = "dark",
  arrow = true,
  className,
  size,
  onClick,
  children,
}: {
  pkg?: Package;
  tone?: Tone;
  arrow?: boolean;
  className?: string;
  /* padding and type size, to replace the default ones */
  size?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openBrief(pkg);
      }}
      className={buttonClass(tone, className, size)}
    >
      {children}
      {arrow && <Arrow tone={tone} />}
    </button>
  );
}

/* Same, for text links and the nav: no pill styling. */
export function BriefLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" onClick={() => openBrief()} className={className}>
      {children}
    </button>
  );
}

const field = "flex flex-col gap-2";
const label = "font-mono text-xs font-bold";
const input =
  "h-[52px] w-full rounded-[14px] border border-ink/14 bg-cream px-4 text-[15px] font-medium placeholder:text-[#8a8795] focus:border-pink focus:outline-none";
const chip = "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-pink";
const chipOn = "border-ink bg-ink text-white";
const chipOff = "border-ink/16 bg-white hover:border-ink/40";

/* `mascot` is the fox, rendered on the server (a <Character> reads the disk at build time). */
export function BriefModal({ mascot }: { mascot: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [pkg, setPkg] = useState<Package | null>(null);
  const [needs, setNeeds] = useState<string[]>([]);
  const id = useId();

  useEffect(() => {
    const dialog = ref.current!;
    const open = (e: Event) => {
      const picked = (e as CustomEvent<Package | undefined>).detail;
      if (picked) setPkg(picked);
      if (!dialog.open) dialog.showModal();
    };
    window.addEventListener(OPEN_EVENT, open);
    if (window.location.hash === "#brief") dialog.showModal();
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const close = () => ref.current?.close();

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Package: ${pkg ?? "Not sure yet"}`,
      `What we need: ${needs.length ? needs.join(", ") : "—"}`,
      `Deadline: ${get("deadline") || "—"}`,
      `References: ${get("references") || "—"}`,
      "",
      get("brief"),
    ].join("\n");
    const subject = `New brief from ${get("name")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    close();
  };

  return (
    <dialog
      ref={ref}
      id="brief"
      aria-labelledby={`${id}-title`}
      // Clicking the dimmed area (the dialog itself, outside the card) closes it.
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-0 size-full max-h-none max-w-none overflow-y-auto bg-transparent p-0 pt-[60px] backdrop:bg-ink/55 md:px-5 md:pt-24 md:pb-12"
    >
      <div className="relative mx-auto w-full max-w-[680px]">
        {/* Scene */}
        <div className="relative h-24 rounded-t-[28px] bg-tint-pink md:h-[110px]">
          {mascot}
          {[
            ["left-[306px] top-[30px] size-[13px] md:left-[590px] md:top-[27px] md:size-[14px]"],
            ["left-[244px] top-[60px] size-[9px] md:left-[530px] md:top-[56px]"],
            ["left-[180px] top-[26px] size-[11px] md:left-[306px] md:top-[24px]"],
          ].map(([cls]) => (
            <span key={cls} aria-hidden="true" className={`absolute -rotate-12 rounded-[2px] bg-pink/70 ${cls}`} />
          ))}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-base font-medium transition-transform hover:rotate-90"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form onSubmit={send} className="flex flex-col gap-[22px] bg-white px-5 pt-8 pb-9 md:rounded-b-[28px] md:px-10">
          <div className="flex flex-col gap-2">
            <h2 id={`${id}-title`} className="font-display text-[38px] leading-[1.25]">
              Tell us about your spell
            </h2>
            <p className="font-mono text-sm text-[#4a4858]">
              Two minutes. We’ll reply within one working day with next steps and a clear quote.
            </p>
          </div>

          <div className="flex flex-col gap-[22px] md:flex-row md:gap-4">
            <label className={`${field} flex-1`}>
              <span className={label}>YOUR NAME</span>
              <input name="name" required autoComplete="name" placeholder="Ada Lovelace" className={input} />
            </label>
            <label className={`${field} flex-1`}>
              <span className={label}>EMAIL</span>
              <input name="email" type="email" required autoComplete="email" placeholder="ada@company.com" className={input} />
            </label>
          </div>

          <fieldset className="flex flex-col gap-2.5">
            <legend className={`${label} mb-2.5`}>PICK A PACKAGE</legend>
            <div className="flex flex-wrap gap-2">
              {PACKAGES.map((p) => (
                <label key={p} className={`${chip} ${pkg === p ? chipOn : chipOff}`}>
                  <input type="radio" name="package" value={p} checked={pkg === p} onChange={() => setPkg(p)} className="sr-only" />
                  {p}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-2.5">
            <legend className={`${label} mb-2.5`}>WHAT DO YOU NEED?</legend>
            <div className="flex flex-wrap gap-2">
              {NEEDS.map((n) => {
                const on = needs.includes(n);
                return (
                  <label key={n} className={`${chip} ${on ? chipOn : chipOff}`}>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => setNeeds(on ? needs.filter((x) => x !== n) : [...needs, n])}
                      className="sr-only"
                    />
                    <span aria-hidden="true" className={`size-3.5 rounded-[4px] ${on ? "bg-yellow" : "border-[1.5px] border-ink/30"}`} />
                    {n}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className={field}>
            <span className={label}>YOUR BRIEF</span>
            <textarea
              name="brief"
              required
              placeholder="What are we making, who is it for, and what does success look like?"
              className={`${input} h-[120px] resize-none py-[15px]`}
            />
          </label>

          <div className="flex flex-col gap-[22px] md:flex-row md:gap-4">
            <label className={`${field} flex-1`}>
              <span className={label}>DEADLINE</span>
              <input name="deadline" placeholder="e.g. end of October" className={input} />
            </label>
            <label className={`${field} flex-1`}>
              <span className={label}>REFERENCES (OPTIONAL)</span>
              {/* A static site cannot receive files, so this takes links (Figma, Drive, Dropbox…). */}
              <input
                name="references"
                placeholder="＋  Paste a link to your files"
                className={`${input} border-[1.2px] border-dashed border-ink/22 text-center text-sm placeholder:text-[#4a4858] focus:text-left`}
              />
            </label>
          </div>

          <button type="submit" className={buttonClass("dark", "w-full md:text-[17px]")}>
            Send the brief <Arrow glyph="✦" />
          </button>
          <p className="text-center font-mono text-[13px] text-[#4a4858]">
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="underline-offset-2 hover:underline">
              {EMAIL}
            </a>
          </p>
        </form>
      </div>
    </dialog>
  );
}
