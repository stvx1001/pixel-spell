import type { Metadata } from "next";
import {
  Archivo_Black,
  Caveat,
  Geist,
  Geist_Mono,
  Shrikhand,
  Silkscreen,
} from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({ variable: "--font-shrikhand", weight: "400", subsets: ["latin"] });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const archivoBlack = Archivo_Black({ variable: "--font-archivo-black", weight: "400", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", weight: "700", subsets: ["latin"] });
const silkscreen = Silkscreen({ variable: "--font-silkscreen", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Spell — Design & Engineering Studio",
  description:
    "Pixel Spell is a design & engineering studio in Jakarta crafting brands, interfaces and websites that feel a little bit like magic.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const fonts = [shrikhand, geist, geistMono, archivoBlack, caveat, silkscreen]
    .map((f) => f.variable)
    .join(" ");
  return (
    <html lang="en" className={`${fonts} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
