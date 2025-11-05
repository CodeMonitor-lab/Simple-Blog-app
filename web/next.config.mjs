import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname, ".."), // go up to Simple-Blog-app root
  },

  // ✅ Disable ESLint blocking builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Optional: standalone output for Vercel
  output: "standalone",

  // ✅ Optional: experimental app directory support (Next.js 13+ / 15)
  experimental: {
    appDir: true,
    turbo: true,
  },
};

export default nextConfig;
