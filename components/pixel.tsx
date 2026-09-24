/* Pixel-art shapes drawn from a bitmap: each string is a row, "1" is a filled cell.
   The bitmaps are read straight off the Figma pixel icons. */

export const BITMAPS = {
  // Products (7×7, 16px cells, 3px radius)
  smiley: ["0011100", "0100010", "1010101", "1000001", "1011101", "0100010", "0011100"],
  book: ["1111111", "1001001", "1001001", "1001001", "1001001", "1001001", "1111111"],
  gem: ["0001000", "0011100", "0111110", "1111111", "0111110", "0011100", "0001000"],
  // Services (5×5, 8px cells)
  ring: ["01110", "10001", "10101", "10001", "01110"],
  layout: ["11111", "10001", "11111", "10001", "11111"],
  brackets: ["01010", "10001", "10001", "10001", "01010"],
  diamond: ["00100", "01110", "11111", "01110", "00100"],
  // Sparks
  plus: ["00100", "00100", "11111", "00100", "00100"],
  sparkle: ["0001000", "0001000", "0011100", "1111111", "0011100", "0001000", "0001000"],
  // Floating nav icons (5×5, 3px cells)
  navWork: ["11011", "11011", "00000", "11011", "11011"],
  navServices: ["00100", "00100", "11011", "00100", "00100"],
  navProducts: ["01110", "00100", "01110", "11111", "01110"],
  navStudio: ["01110", "01110", "00000", "11111", "11111"],
  navFaq: ["11110", "00010", "00110", "00000", "00100"],
} as const;

export type BitmapName = keyof typeof BITMAPS;

export function Pixels({
  name,
  cell,
  color = "currentColor",
  radius = 0,
  className,
}: {
  name: BitmapName;
  cell: number;
  color?: string;
  radius?: number;
  className?: string;
}) {
  const rows = BITMAPS[name];
  const w = rows[0].length * cell;
  const h = rows.length * cell;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      aria-hidden="true"
      fill={color}
    >
      {rows.flatMap((row, y) =>
        [...row].map((bit, x) =>
          bit === "1" ? (
            <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} rx={radius} />
          ) : null,
        ),
      )}
    </svg>
  );
}
