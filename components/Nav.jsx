'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: 'mailto:renemakoule@gmail.com', name: 'contact' }
]

export default function Nav({ containerStyles, linkStyles, underlineStyles }) {
  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link 
          href={link.path} 
          key={index} 
          className={`capitalize ${linkStyles} relative`}
        >
          {link.name}
          {link.path === path && (
            <motion.span 
              initial={{ y: '-100%' }} 
              animate={{ y: 0 }} 
              transition={{ type: 'tween' }} 
              layoutId='underline'
              className={`absolute left-0 bottom-0 ${underlineStyles}`}
            />
          )}
        </Link>
      ))}
    </nav>
  )
}