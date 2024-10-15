'use client';

import {  
  RiLinkedinFill, 
  RiFacebookFill,
  RiMailFill,
  RiGithubLine,
  RiWhatsappLine 
} from 'react-icons/ri';
import Link from 'next/link';
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const icons = [
  {
    path: 'https://www.linkedin.com/in/rene-makoule',
    name: <RiLinkedinFill />
  },
  {
    path: 'mailto:renemakoule@gmail.com',
    name: <RiMailFill />
  },
  {
    path: 'https://github.com/renemakoule/',
    name: <RiGithubLine />
  },
  {
    path: '/',
    name: <RiWhatsappLine />
  }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <AnimatePresence>
      <motion.div 
        className={`${containerStyles}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={icon.path}>
              <motion.div 
                className={`${iconStyles}`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {icon.name}
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default Socials