"use client";
import React from "react";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { SeoAndGrowthCard } from "@/components/card";
import { HeroBanner, Philosohpy, CTA } from "@/components/ui";

const Page = () => {
  return (
    <article className="max-w-5xl mx-auto px-6 py-10 prose dark:prose-invert">
      {/* HEADER */}
      <header className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroBanner
            icon={<Rocket className="w-14 h-14 mx-auto text-sky-500 mb-4" />}
            title="Building Websites That Work — Fast, Scalable & SEO-Ready"
            description="Hi, I’m Johny Since — a full-stack developer who builds all kinds of websites that help brands grow through clean code, great design, and smart SEO."
          />
        </motion.div>
      </header>

      {/* TECH STACK + TOOLS */}
      <SeoAndGrowthCard />

      {/* PHILOSOPHY */}
      {/* <Philosohpy /> */}

      {/* CTA */}
      <CTA
        title="Let’s Build Something Meaningful — Together"
        description="Have a project idea or want to collaborate? Reach out anytime."
        buttonText="Contact Me"
        bg
      />
    </article>
  );
};

export default Page;
