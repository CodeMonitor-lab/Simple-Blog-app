import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname, ".."), // monorepo root
    // ✅ experimental turbo is automatic now
  },

  // ✅ Disable ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Standalone output for Vercel
  output: "standalone",

  // ✅ TypeScript optional: ignore build errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Image optimization example
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
};

export default nextConfig;
