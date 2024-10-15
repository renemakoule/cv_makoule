"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import BoxReveal from "@/components/ui/box-reveal";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import SparklesText from "@/components/ui/sparkles-text"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Hero = () => {
  return (
    <section className="py-8 xl:py-14 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none noto-sans-jp">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8 mt-10">
          {/* text */}
          <div className="flex flex-col items-center justify-center mx-auto xl:mx-0 text-center xl:text-left">
          <p className="bg-zinc-800 hover:bg-gradient-to-r from-[#531849] via-[#07596d] to-[#dd059c] rounded-full w-full px-3 py-1 text-xs space-x-2 flex items-center justify-center lg:hidden">
                  <SparklesText 
                  text='New'
                  className="text-xs bg-white text-black hover:bg-white hover:text-[#fd4e22] rounded-full px-2"
                  />
                   <SparklesText text="Open with a PC for a better visual"
                    className="text-xs text-white poppins-extralight-italic"
                  />
                </p>
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] mt-10">
              <BoxReveal boxColor={"#47E8FDFF"} duration={2}>
                Web Developer, Administrator System
              </BoxReveal>
            </div>
            <BoxReveal boxColor={"#47E8FDFF"} duration={2}>
            <SparklesText text="Hi, my name is Rene Boris MAKOULE"
                    className="h1 mb-4 text-center"
                  />
              <p className="subtitle max-w-[790px] text-center mx-auto xl:mx-0">
                Brief description of my professional profile, my experiences and
                my desire to unlock new challenges.
              </p>
            </BoxReveal>
            {/** buttons */}

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="mailto:renemakoule@gmail.com">
                <RainbowButton variant="secondary" className="gap-x-2">
                  Contact me <Send size={16} />
                </RainbowButton>
              </Link>
              <Link href="/">
                <Button className="gap-x-2 animate-bounce">
                  Get Cv <Download size={18} />
                </Button>
              </Link>
            </div>

            {/**social */}
            <BoxReveal boxColor={"#47E8FDFF"} duration={2}>
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[25px] hover:text-primary
                    transition-all"
              />
            </BoxReveal>
          </div>
          {/* images */}
          <motion.div
            className="hidden xl:flex relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/**badge 1 */}
            <Badge
              containerStyles="absolute top-[10%] -left-[10rem] transition-all duration-300 hover:scale-110 animate-fade-in"
              icon={<RiBriefcase4Fill className="animate-pulse" />}
              endCountNum={1}
              badgeText="years of experience"
            />
            {/**badge 2 */}
            <Badge
              containerStyles="absolute top-[60%] -left-[7rem] transition-all duration-300 hover:scale-110 animate-fade-in animation-delay-300"
              icon={<RiTodoFill className="animate-bounce" />}
              endCountNum={4}
              endCountText=""
              badgeText="Finished Projects"
            />
            {/**badge 3 */}
            <Badge
              containerStyles="absolute top-[35%] -right-1 transition-all duration-300 hover:scale-110 animate-fade-in animation-delay-600"
              icon={<RiTeamFill className="animate-spin-slow" />}
              endCountNum={9}
              endCountText="K"
              badgeText="Happy Clients"
            />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark
          w-[500px] h-[500px] bg-no-repeat absolute -bottom-15 -right-2
          animate-pulse"
            ></div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DevImg
                containerStyles="bg-hero_shape w-[400px] h-[362px] bg-no-repeat relative bg-top -left-20"
                imgSrc="/develop.png"
              />
            </motion.div>
          </motion.div>
          {/* icons */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
      {/* Shadow effect */}
      <div className="shadow_1"></div>
    </section>
  );
};

export default Hero;
