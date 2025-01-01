'use client'

import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const topics = [
  "Latest Articles",
  "Trending Topics",
  "Web Development",
  "Programming Languages",
  "Data Science & Analytics",
  "Artificial Intelligence & Machine Learning",
  "Blockchain Technology",
  "Cybersecurity Insights",
  "Mobile App Development",
  "Cloud Technologies",
  "DevOps Practices",
]

interface ContentTabsProps {
  onTabChange: (tab: string) => void;
}

export function ContentTabs({ onTabChange }: ContentTabsProps) {
  return (
    <Tabs defaultValue="Latest Articles" className="w-full" onValueChange={onTabChange}>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <TabsList className="inline-flex h-10 items-center justify-center rounded-none p-1">
          {topics.map((topic) => (
            <TabsTrigger
              key={topic}
              value={topic}
              className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-primary focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            >
              {topic}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </Tabs>
  )
}
