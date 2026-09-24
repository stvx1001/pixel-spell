/* The three Works card illustrations, redrawn as SVG from the Figma shapes
   (each Media frame is 382×273). */

const shadow = (id: string, opacity: number) => (
  <filter id={id} x="-40%" y="-40%" width="180%" height="180%">
    <feDropShadow dx="0" dy="11.9" stdDeviation="11.9" floodColor="#1a124d" floodOpacity={opacity} />
  </filter>
);

export function NookArt() {
  return (
    <svg viewBox="0 0 382 273" className="size-full" aria-hidden="true">
      <defs>
        <linearGradient id="nook-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe27a" />
          <stop offset="1" stopColor="#ffc24b" />
        </linearGradient>
        {shadow("nook-sh", 0.18)}
        <clipPath id="nook-p3">
          <rect width="106.8" height="219.5" rx="15.4" />
        </clipPath>
      </defs>
      <rect width="382" height="273" fill="url(#nook-bg)" />
      <g transform="translate(54.6 41.5)" filter="url(#nook-sh)">
        <rect width="106.8" height="219.5" rx="15.4" fill="#fff" />
        <rect x="11.9" y="23.7" width="83" height="89" rx="11.9" fill="#ffe27a" />
        <text x="11.9" y="148" fontFamily="var(--font-archivo-black)" fontSize="20.2" fill="#f2a900">
          Nook.
        </text>
        <rect x="11.9" y="178" width="83" height="21.4" rx="7.1" fill="#ffc24b" />
      </g>
      <g transform="translate(137.6 23.7)" filter="url(#nook-sh)">
        <rect width="106.8" height="219.5" rx="15.4" fill="#fff" />
        <rect x="9.5" y="11.9" width="41.5" height="5.9" rx="3" fill="#0d0e1a" />
        <rect x="9.5" y="26.1" width="87.8" height="16.6" rx="8.3" fill="#f3f1ea" />
        <rect x="9.5" y="51" width="87.8" height="89" rx="10.7" fill="#cfe3fa" />
        <rect x="9.5" y="147.1" width="41.5" height="41.5" rx="8.3" fill="#ffe27a" />
        <rect x="55.8" y="147.1" width="41.5" height="41.5" rx="8.3" fill="#f9c6d8" />
        <rect x="9.5" y="195.7" width="87.8" height="4.7" rx="2.4" fill="#edebe4" />
      </g>
      <g transform="translate(220.7 41.5)" filter="url(#nook-sh)">
        <rect width="106.8" height="219.5" rx="15.4" fill="#fff" />
        <g clipPath="url(#nook-p3)">
          <rect width="106.8" height="94.9" fill="#ffd24a" />
        </g>
        <rect x="-19" y="-19" width="38" height="38" rx="5.9" fill="#e4572e" transform="translate(61.3 23.7) rotate(-45)" />
        <rect x="9.5" y="104.4" width="53.4" height="7.1" rx="3.6" fill="#0d0e1a" />
        <rect x="9.5" y="118.6" width="87.8" height="23.7" rx="7.1" fill="#f3f1ea" />
        <rect x="9.5" y="147.1" width="87.8" height="23.7" rx="7.1" fill="#f3f1ea" />
        <rect x="9.5" y="187.4" width="87.8" height="22.5" rx="7.1" fill="#ffc24b" />
      </g>
    </svg>
  );
}

export function LumenArt() {
  return (
    <svg viewBox="0 0 382 273" className="size-full" aria-hidden="true">
      <defs>
        <linearGradient id="lumen-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfe3fa" />
          <stop offset="1" stopColor="#b8a6ff" />
        </linearGradient>
        <linearGradient id="lumen-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#6e4bff" />
        </linearGradient>
        <filter id="lumen-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        {shadow("lumen-sh", 0.25)}
        {shadow("lumen-sh2", 0.3)}
        {shadow("lumen-sh3", 0.18)}
      </defs>
      <rect width="382" height="273" fill="url(#lumen-bg)" />
      <circle cx="191" cy="124.6" r="89" fill="#fff" fillOpacity="0.7" filter="url(#lumen-blur)" />
      <circle cx="191" cy="100.8" r="35.6" fill="url(#lumen-mark)" filter="url(#lumen-sh)" />
      <circle cx="191" cy="100.8" r="16.6" fill="#0d0e1a" />
      <text x="191" y="188" textAnchor="middle" fontFamily="var(--font-archivo-black)" fontSize="38" letterSpacing="-1.5" fill="#0d0e1a">
        lumen
      </text>
      <g transform="translate(249.1 189.8) rotate(12)" filter="url(#lumen-sh2)">
        <rect width="136.4" height="85.4" rx="9.5" fill="#0d0e1a" />
        <rect x="11.9" y="11.9" width="20.2" height="15.4" rx="3.6" fill="#b9a8ff" />
        <text x="11.9" y="71" fontFamily="var(--font-geist-mono)" fontSize="8.3" fill="#fff">
          •••• 2026
        </text>
      </g>
      <g transform="translate(28.5 213.5)" filter="url(#lumen-sh3)">
        <rect width="100.8" height="33.2" rx="16.6" fill="#fff" />
        <circle cx="16.6" cy="16.6" r="10.7" fill="#6e4bff" />
        <text x="33.2" y="20" fontFamily="var(--font-geist)" fontWeight="500" fontSize="8.9" fill="#0d0e1a">
          Aa  Brand kit
        </text>
      </g>
    </svg>
  );
}

const STARS: [number, number, number][] = [
  [36.8, 36.8, 1.2], [83.9, 226.3, 0.9], [333.7, 54.9, 1.5], [309.3, 238.2, 0.9],
  [178.9, 24.6, 0.9], [54, 148.9, 0.6], [356.8, 155.1, 0.9],
];
const BARS: [number, number][] = [
  [14.2, 8.3], [20.8, 15.4], [27.3, 22.5], [33.8, 29.7], [40.3, 8.3], [46.9, 15.4], [53.4, 22.5], [59.9, 29.7],
  [66.4, 8.3], [73, 15.4], [79.5, 22.5], [86, 29.7], [92.5, 8.3], [99.1, 15.4],
];

export function MoonrestArt() {
  return (
    <svg viewBox="0 0 382 273" className="size-full" aria-hidden="true">
      <defs>
        <linearGradient id="moon-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7b5cff" />
          <stop offset="1" stopColor="#e08cff" />
        </linearGradient>
        <linearGradient id="moon-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3c4" />
          <stop offset="1" stopColor="#ffb86b" />
        </linearGradient>
        <linearGradient id="moon-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2c9e" />
          <stop offset="1" stopColor="#7b5cff" />
        </linearGradient>
        <mask id="moon-cut">
          <rect width="382" height="273" fill="#fff" />
          <circle cx="139.35" cy="103.85" r="56.35" fill="#000" />
        </mask>
        <filter id="moon-halo" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="11.9" floodColor="#ffb86b" floodOpacity="0.6" />
        </filter>
        {shadow("moon-sh", 0.35)}
      </defs>
      <rect width="382" height="273" fill="url(#moon-bg)" />
      {STARS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#fff" fillOpacity="0.9" />
      ))}
      <g filter="url(#moon-halo)">
        <circle cx="106.75" cy="130.45" r="65.25" fill="url(#moon-glow)" mask="url(#moon-cut)" />
      </g>
      <g transform="translate(219.5 23.7)" filter="url(#moon-sh)">
        <rect width="118.6" height="237.3" rx="16.6" fill="url(#moon-phone)" />
        <text x="14.2" y="44" fontFamily="var(--font-archivo-black)" fontSize="13" fill="#fff">
          Relax time
        </text>
        <circle cx="59.35" cy="109.75" r="38.55" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.8" />
        <circle cx="59.35" cy="109.75" r="23.75" fill="#e08cff" />
        {BARS.map(([x, h], i) => (
          <rect key={i} x={x} y={176.2 - h / 2} width="2.4" height={h} rx="1.2" fill="#fff" fillOpacity="0.8" />
        ))}
        <circle cx="59.3" cy="211.1" r="15.4" fill="#fff" />
      </g>
    </svg>
  );
}
