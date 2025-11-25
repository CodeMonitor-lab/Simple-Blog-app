import React from "react";
import { ToolsCard } from "@/components/card";
import toolsData from "@/data/my-tool.json";

const Page = () => {
  return (
    <main>
        <h1>dev Tools</h1>
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsData.map((item, index) => (
          <ToolsCard
            key={index}
            icon={item.icon}
            color={item.color}
            title={item.title}
            desc={item.desc}
            slugPath={item.slug}
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
