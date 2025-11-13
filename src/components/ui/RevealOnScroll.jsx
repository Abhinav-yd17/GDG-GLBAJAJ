import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const RevealOnScroll = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  scale = 1,
  blur = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // smoother trigger
  })

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  const initialPos = directions[direction] || { y: 40 }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity" }} // GPU boost
      initial={{
        opacity: 0,
        scale: scale !== 1 ? 0.96 : 1,
        filter: blur ? "blur(8px)" : "blur(0px)",
        ...initialPos,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // smooth “easeOutExpo”
              },
            }
          : {
              opacity: 0,
              ...initialPos,
              scale: scale !== 1 ? 0.96 : 1,
              filter: blur ? "blur(8px)" : "blur(0px)",
            }
      }
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
