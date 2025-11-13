import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  as: Component = 'button',
  href,
  to,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonBlue focus:ring-offset-2 focus:ring-offset-backgroundDark'
  
  const variants = {
    primary: 'bg-neonBlue text-backgroundDark hover:bg-cyan-400 focus:ring-neonBlue neon-button',
    secondary: 'bg-transparent border border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-backgroundDark focus:ring-neonBlue',
    ghost: 'bg-transparent text-neonBlue hover:bg-neonBlue/10 focus:ring-neonBlue',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component className={classes} {...props}>
        {children}
      </Component>
    </motion.div>
  )
}

export default Button