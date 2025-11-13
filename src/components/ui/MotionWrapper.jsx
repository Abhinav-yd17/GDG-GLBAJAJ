import React from 'react'
import { motion } from 'framer-motion'

const MotionWrapper = ({ 
  children, 
  className = '',
  variants,
  initial = "initial",
  animate = "animate",
  whileInView,
  viewport = { once: true, margin: "-50px" },
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper