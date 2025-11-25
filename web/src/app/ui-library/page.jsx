"use client";

import React from "react";
import { ToolsCard } from "@/components/card";
import uiData from '@/data/ui-tool.json'

const Page = () => {
  return (
    <main className="p-20 space-y-16">
     <section>
        <h1 className="text-3xl font-bold mb-8">UI</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiData.map((item, index) => (
            <ToolsCard
              key={index}
              icon={item.icon}
              color={item.color}
              title={item.title}
              desc={item.desc}
              slugPath={item.slug}
            />
          ))}
        </div>
      </section>
      

    </main>
  );
};

export default Page;
