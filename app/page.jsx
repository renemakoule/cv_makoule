"use client"

import { useState, useEffect } from "react"
import About from "@/components/About"
import Cta from "@/components/Cta"
import Hero from "@/components/Hero"
import Service from "@/components/Service"
import Projets from '@/components/Projets'
import LoadingAnimation from '@/components/LoadingAnimation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Ajustez ce délai selon vos besoins

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <main className='main'>
      <Hero />
      <About />
      <Service />
      <Cta />
      <Projets />
    </main>
  )
}