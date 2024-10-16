'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggler from "./ThemeToggler"
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('light')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
  
  return (
    <header 
      className={`
        sticky top-0 z-30 transition-all noto-sans-jp text-[15px]
        ${isScrolled ? 'bg-black/30 shadow-lg dark:bg-accent/30' : 'bg-transparent'}
        ${pathname === '/' ? 'bg-transparent' : ''}
        ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-black bg-white'}
      `}
    >
      <div className="container px-4 py-4">
        <div className='flex justify-center items-center'>
          <div className='flex items-center space-x-4 rounded-full px-4'>
            <Logo />
            <Nav 
              containerStyles='hidden xl:flex space-x-4 items-center' 
              linkStyles={`relative hover:text-primary transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              underlineStyles='absolute left-0 top-full h-[1px] bg-primary w-full'
            />
            <ThemeToggler currentTheme={theme} setTheme={setTheme} />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}