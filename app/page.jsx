"use client"

import { useState, useEffect } from "react"
import About from "@/components/About"
import Cta from "@/components/Cta"
import Hero from "@/components/Hero"
import Service from "@/components/Service"
import Projets from '@/components/Projets'
import LoadingAnimation from '@/components/LoadingAnimation'

// Custom hook for theme management
function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const updateTheme = () => {
      const currentHour = new Date().getHours()
      const sunriseHour = 6 // 6h du matin
      const sunsetHour = 18 // 18h du soir

      setTheme(currentHour >= sunriseHour && currentHour < sunsetHour ? 'light' : 'dark')
    }

    // Update theme immediately
    updateTheme()

    // Set up an interval to check every minute
    const interval = setInterval(updateTheme, 60000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return theme
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const theme = useTheme()

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Adjust this delay as needed

    return () => clearTimeout(timer)
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