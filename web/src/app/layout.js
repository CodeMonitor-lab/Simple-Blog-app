import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout"; // ✅ Correct import
import { Analytics } from "@vercel/analytics/next"

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {/* Analytics */}
        <Analytics />
        {/* 🌐 Navbar */}
        <Navbar />

        {/* 🧱 Main Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* ⚙️ Footer */}
        <Footer />
      </body>
    </html>
  );
}
