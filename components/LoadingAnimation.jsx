"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

export default function CenteredLoadingAnimation() {
  const [balls, setBalls] = useState([])

  useEffect(() => {
    const newBalls = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * 2 * Math.PI
      return {
        id: i,
        initialX: Math.cos(angle) * 100,
        initialY: Math.sin(angle) * 100,
        color: colors[i % colors.length]
      }
    })
    setBalls(newBalls)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="relative w-64 h-64">
        {balls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full"
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: ball.color,
              top: '50%',
              left: '50%',
            }}
            initial={{ x: ball.initialX, y: ball.initialY }}
            animate={{
              x: [ball.initialX, 0, ball.initialX],
              y: [ball.initialY, 0, ball.initialY],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        ))}
      </div>
    </div>
  )
}
