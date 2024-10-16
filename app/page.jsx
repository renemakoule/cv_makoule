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
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Ajustez ce délai selon vos besoins

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateTheme = () => {
      const currentHour = new Date().getHours()
      const sunriseHour = 6 // 6h du matin
      const sunsetHour = 18 // 18h du soir

      if (currentHour >= sunriseHour && currentHour < sunsetHour) {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }

    // Mettre à jour le thème immédiatement
    updateTheme()

    // Mettre à jour le thème toutes les minutes
    const interval = setInterval(updateTheme, 60000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <main className={`main ${theme}`}>
      <Hero />
      <About />
      <Service />
      <Cta />
      <Projets />
    </main>
  )
}