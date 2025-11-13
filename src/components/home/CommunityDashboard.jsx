import React from 'react'
import { motion } from 'framer-motion'
import { Users, Trophy, Calendar, Code, Award, Target } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'

const CommunityDashboard = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Active Members',
      description: 'Growing community of developers',
      color: 'blue',
      google: 'text-googleBlue bg-googleBlue/10'
    },
    {
      icon: Trophy,
      value: '20+',
      label: 'Hackathons',
      description: 'Successful competitions organized',
      color: 'red',
      google: 'text-googleRed bg-googleRed/10'
    },
    {
      icon: Calendar,
      value: '50+',
      label: 'Events',
      description: 'Workshops and seminars conducted',
      color: 'yellow',
      google: 'text-googleYellow bg-googleYellow/10'
    },
    {
      icon: Code,
      value: '30+',
      label: 'Projects',
      description: 'Open source contributions',
      color: 'green',
      google: 'text-googleGreen bg-googleGreen/10'
    },
    {
      icon: Award,
      value: '100+',
      label: 'Certifications',
      description: 'Students certified in various technologies',
      color: 'blue',
      google: 'text-googleBlue bg-googleBlue/10'
    },
    {
      icon: Target,
      value: '15+',
      label: 'Technologies',
      description: 'Different tech stacks covered',
      color: 'yellow',
      google: 'text-googleYellow bg-googleYellow/10'
    }
  ]

  const googleProgress = {
    blue: "bg-googleBlue",
    red: "bg-googleRed",
    yellow: "bg-googleYellow",
    green: "bg-googleGreen",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Community <span className="text-googleBlue dark:text-googleGreen">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tracking our growth and impact in the developer community
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              className="
                p-6 rounded-xl shadow-md 
                bg-white dark:bg-darkCard 
                border border-gray-200 dark:border-darkBorder 
                transition-all
              "
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.google}`}
              >
                <stat.icon className="h-6 w-6" />
              </div>

              {/* Value */}
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </p>

              {/* Progress Bar */}
              <motion.div
                className={`h-1 rounded-full mt-4 ${googleProgress[stat.color]}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight Box */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              mt-16 text-center 
              bg-gray-100 dark:bg-darkCard 
              rounded-2xl border border-gray-300 dark:border-darkBorder 
              p-10 max-w-4xl mx-auto
            "
          >
            <h3 className="text-2xl font-bold text-googleBlue dark:text-googleYellow mb-4">
              Join Our Growing Community
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Be part of India's fastest growing student developer community.
              Learn, collaborate, and build amazing projects together.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-300">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-googleBlue rounded-full"></div>
                Weekly Tech Sessions
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-googleRed rounded-full"></div>
                Project Collaborations
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-googleGreen rounded-full"></div>
                Industry Expert Talks
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-googleYellow rounded-full"></div>
                Hackathon Participation
              </span>
            </div>
          </motion.div>
        </RevealOnScroll>

      </div>
    </section>
  )
}

export default CommunityDashboard
