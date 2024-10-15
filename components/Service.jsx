"use client";
import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import ShineBorder from "@/components/ui/shine-border"
import SparklesText from "@/components/ui/sparkles-text"

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: [
      "Web development is a constantly evolving discipline, influenced by the emergence of new technologies, new web standards, and changing expectations for performance and user experience.",
    ],
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Data Analyst in Excel",
    description: [
      "A data analyst in Excel combines a deep understanding of data with technical skills to extract valuable insights and help businesses make informed decisions.",
    ],
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "System Administration",
    description: [
      "System administrators are vital for maintaining operational continuity by quickly addressing technical issues and preventing service interruptions.",
    ],
  },
];

const Service = () => {
  return (
    <section className="mt-32 noto-sans-jp">
      <div className="container mx-auto items-center justify-center">
      <SparklesText text="My Services"
                    className="section-title mb-12 xl:mb-24 text-center mx-auto"
                  />

        {/**grid item */}
        <div className="container mx-auto px-8 py-6">
          <div className="grid xl:grid-cols-3 justify-center gap-y-10 gap-x-6 justify-items-center">
            {serviceData.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="rounded-md"
                >
                <ShineBorder
                    className="w-full max-w-[410px] h-[330px] border rounded-md flex flex-col pt-16 pb-10 justify-center items-center relative cursor-pointer"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  >
                    <CardContent className="text-center mt-10">
                      <CardTitle className="mb-4">{item.title}</CardTitle>
                      <CardDescription className="text-lg">
                        <ul className="list-disc pl-5">
                          {item.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </ul>
                      </CardDescription>
                    </CardContent>
                </ShineBorder>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
