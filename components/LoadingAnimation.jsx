"use client"

import { motion } from "framer-motion"

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-pink-700 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}