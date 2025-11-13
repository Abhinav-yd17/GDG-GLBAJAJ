import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* =======================
              SIMPLE GDG LOGO (Option 2)
          ========================== */}
          <Link to="/" className="flex items-center space-x-3 group">

            {/* GDG in Google colors */}
            <div className="flex gap-1 text-2xl font-extrabold">
              <span className="text-googleBlue">G</span>
              <span className="text-googleRed">D</span>
              <span className="text-googleYellow">G</span>
            </div>

            {/* GL Bajaj normal text */}
            <span className="text-xl font-bold text-gray-900 dark:text-gray-200 group-hover:opacity-80 transition">
              GL Bajaj
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-googleBlue dark:text-googleYellow"
                      : "text-gray-700 dark:text-gray-300 hover:text-googleBlue dark:hover:text-googleGreen"
                  }`}
                >
                  {item.name}

                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-googleBlue dark:bg-googleYellow rounded-full"
                    />
                  )}
                </Link>
              )
            })}

            <DarkModeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-googleBlue dark:hover:text-googleGreen"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border dark:border-border/50"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const active = location.pathname === item.path
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-all ${
                        active
                          ? "text-googleBlue dark:text-googleYellow bg-googleBlue/10 dark:bg-googleYellow/10"
                          : "text-gray-700 dark:text-gray-300 hover:text-googleBlue dark:hover:text-googleGreen hover:bg-gray-100 dark:hover:bg-darkCard"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
