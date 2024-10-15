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
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025109/1_c3fetz.png",
    link: "/projects"
  },
  {
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025109/2_m05idt.png",
    link: "/projects"
  },
  {
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025108/3_tbxac4.png",
    link: "/projects"
  },
  {
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025109/4_ezw76m.png",
    link: "/projects"
  },
  {
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025109/5_buea4r.png",
    link: "/projects"
  },
  {
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025110/6_cqbp01.png",
    link: "/projects"
  },
  {
    image: "https://res.cloudinary.com/dqljfnmpk/image/upload/v1729025110/7_wpfqqa.png",
    link: "/projects"
  },
]
// Modifiez le composant InfiniteMovingCards pour inclure les liens
