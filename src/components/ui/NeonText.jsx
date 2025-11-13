import React from 'react'
import { motion } from 'framer-motion'

const NeonText = ({ 
  children, 
  className = '', 
  color = 'blue',
  flicker = false 
}) => {
  const colors = {
    blue: 'text-[#00ffff]',     
    purple: 'text-[#8b5cf6]',   
    white: 'text-[#ffffff]'     
  }

  const glowColors = {
    blue: 'drop-shadow-[0_0_3px_rgba(0,255,255,0.35)] drop-shadow-[0_0_6px_rgba(0,255,255,0.25)]',
    purple: 'drop-shadow-[0_0_3px_rgba(139,92,246,0.35)] drop-shadow-[0_0_6px_rgba(139,92,246,0.25)]',
    white: 'drop-shadow-[0_0_3px_rgba(255,255,255,0.3)] drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]'
  }

  return (
    <motion.span
      className={`${colors[color]} ${glowColors[color]} ${flicker ? 'flicker' : ''} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      {children}
    </motion.span>
  )
}

export default NeonText
