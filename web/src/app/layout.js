import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"; // optional

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MadebyJS | Developer Blog & Projects",
  description:
    "Showcasing full-stack projects, tutorials, and developer insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* 📊 Analytics & Performance */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
