"use client"

import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import SparklesText from "@/components/ui/sparkles-text"

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <SparklesText text="My Projects"
                    className="section-title mb-12 xl:mb-24 text-center mx-auto"
                  />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      {/* Shadow effect */}
      <div className="shadow_1"></div>
      </div>
  )
}

const testimonials = [
  {
    image: "/work/1.png",
    link: "/projects"
  },
  {
    image: "/work/2.png",
    link: "/projects"
  },
  {
    image: "/work/3.png",
    link: "/projects"
  },
  {
    image: "/work/4.png",
    link: "/projects"
  },
  {
    image: "/work/5.png",
    link: "/projects"
  },
  {
    image: "/work/6.png",
    link: "/projects"
  },
  {
    image: "/work/7.png",
    link: "/projects"
  },
]

// Modifiez le composant InfiniteMovingCards pour inclure les liens
