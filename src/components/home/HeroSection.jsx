import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import Button from '../common/Button'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Google theme overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-white/80 to-lightBg 
          dark:from-darkBg/50 dark:to-darkBg">
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          
          {/* Google colored title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 flex flex-wrap justify-center gap-3 leading-tight">

            {/* GDG (Google colors) */}
            <motion.span
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-googleBlue">G</span>
              <span className="text-googleRed">D</span>
              <span className="text-googleYellow">G</span>
            </motion.span>

            {/* GL Bajaj with Google gradient */}
            <motion.span
              className="relative inline-block text-transparent bg-clip-text 
              bg-gradient-to-r
              from-googleBlue via-googleRed via-googleYellow to-googleGreen
              animate-gradient px-2"
              style={{
                WebkitTextFillColor: "transparent",
                overflow: "visible",
              }}
              animate={{
                opacity: [0.8, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              GL Bajaj
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            Google Developer Groups
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Empowering students to bridge the gap between theory and practice. 
            Join us to learn, build, and grow together.
          </motion.p>

        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            to="/events" 
            variant="primary" 
            size="large"
            className="flex items-center gap-2 bg-googleBlue hover:bg-blue-600 text-white"
          >
            <Calendar className="h-5 w-5" />
            View Events
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            to="/team"
            variant="secondary"
            size="large"
            className="flex items-center gap-2 border-googleBlue text-googleBlue dark:text-googleYellow dark:border-googleYellow"
          >
            <Users className="h-5 w-5" />
            Join Team
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '500+', label: 'Members' },
            { number: '50+', label: 'Events' },
            { number: '20+', label: 'Projects' },
            { number: '15+', label: 'Workshops' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-googleBlue dark:text-googleYellow mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-googleBlue dark:border-googleYellow rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-googleBlue dark:bg-googleYellow rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
