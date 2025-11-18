"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Star, Zap } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-cyan-300 font-mono p-6 relative overflow-hidden">
      {/* Neon Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://i.imgur.com/PhRFiJY.png')] bg-cover opacity-20" />

      {/* Glitch Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold text-center mb-10 glitch"
      >
        CYBERPUNK OPEN SOURCE HUB
      </motion.h1>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
            className="p-[2px] rounded-2xl neon-border shadow-lg"
          >
            <div className="bg-black/80 rounded-2xl p-6 hover:bg-black/60 transition relative hologram">
              <Zap className="text-cyan-300 w-10 h-10 mb-4" />
              <h2 className="text-2xl mb-2 font-bold">Cyber Repo #{id}</h2>
              <p className="text-cyan-200/70 text-sm mb-6">
                Futuristic open-source module optimized for neural web systems.
              </p>
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 text-sm rounded-xl bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/40">
                  Explore
                </button>
                <Github className="w-6 h-6 hover:text-pink-400 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
