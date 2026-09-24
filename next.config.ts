import type { NextConfig } from "next";

/* The site is a static export. On GitHub Pages it lives under /pixel-spell, so the
   deploy workflow sets NEXT_PUBLIC_BASE_PATH=/pixel-spell; everywhere else
   (npm run dev, a custom domain, Vercel) it is empty and the site sits at /. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
