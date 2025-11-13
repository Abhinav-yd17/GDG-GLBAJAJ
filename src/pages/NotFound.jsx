import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import NeonText from '../components/ui/NeonText'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-backgroundDark pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text */}
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-8xl sm:text-9xl font-bold mb-4"
          >
            <NeonText color="blue" flicker>404</NeonText>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-400 mb-8 max-w-md mx-auto"
          >
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button to="/" variant="primary" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ 
              rotate: 360,
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-neonBlue/30 rounded-full opacity-50"
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              transition: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-neonPurple/30 rounded-full opacity-50"
          />

          <motion.div
            animate={{ 
              y: [0, -20, 0],
              transition: { duration: 4, repeat: Infinity }
            }}
            className="absolute top-1/3 right-1/3 w-4 h-4 bg-neonBlue rounded-full opacity-70"
          />

          <motion.div
            animate={{ 
              y: [0, 20, 0],
              transition: { duration: 3, repeat: Infinity, delay: 1 }
            }}
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-neonPurple rounded-full opacity-70"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound