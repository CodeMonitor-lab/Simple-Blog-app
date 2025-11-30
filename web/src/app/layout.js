import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"; // optional

// ✅ Correct Geist imports for Next.js 15+
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "MadebyJS | Developer Blog & Projects",
  description:
    "Showcasing full-stack projects, tutorials, and developer insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights /> 
      </body>
    </html>
  );
}
