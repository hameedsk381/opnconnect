"use client";
import { cn } from "@/lib/utils";
import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

type Item = {
  title: string;
  description: React.ReactNode;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
};

type HeroProps = {
  items: Item[];
};

export function Hero({ items }: HeroProps) {
  return (
    <BentoGrid className="max-w-5xl mx-auto my-4 md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
