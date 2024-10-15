'use client'
import React from "react";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import BoxReveal from "@/components/ui/box-reveal";
import RetroGrid from "@/components/ui/retro-grid";
import SparklesText from "@/components/ui/sparkles-text"

const Cta = () => {
  return (
    <section className="relative py-24 bg-black/10 dark:bg-secondary/40 noto-sans-jp flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <BoxReveal boxColor={"#47E8FDFF"} duration={2}>
          <SparklesText text="Prepared to turn your ideas into reality? I'm here to help"
                    className="h2 max-w-xl text-center mb-8"
                  />
          </BoxReveal>
          <Link href="mailto:renemakoule@gmail.com">
            <RainbowButton className="animate-bounce">Contact me</RainbowButton>
          </Link>
        </div>
      </div>
      <RetroGrid />
    </section>
  );
};

export default Cta;
