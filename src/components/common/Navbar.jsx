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
          ? "bg-lightBg/80 dark:bg-[#0B0F19]/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex gap-1 text-2xl font-extrabold">
              <span className="text-googleBlue">G</span>
              <span className="text-googleRed">D</span>
              <span className="text-googleYellow">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              GL Bajaj
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all ${
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

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 dark:text-gray-300"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* =======================
          MOBILE FULLSCREEN MENU
      ======================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white dark:bg-[#0B0F19] p-6"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1 text-2xl font-extrabold">
                <span className="text-googleBlue">G</span>
                <span className="text-googleRed">D</span>
                <span className="text-googleYellow">G</span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-3 mt-8">
              {navItems.map((item) => {
                const active = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg px-4 py-3 rounded-xl transition-all ${
                      active
                        ? "bg-googleBlue/20 text-googleBlue dark:bg-googleYellow/20 dark:text-googleYellow"
                        : "text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
