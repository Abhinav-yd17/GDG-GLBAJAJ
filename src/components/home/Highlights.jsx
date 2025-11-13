import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Users, Rocket, Lightbulb } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'

const Highlights = () => {
  const googlePalette = [
    { color: 'blue', class: 'text-googleBlue bg-googleBlue/10 border-googleBlue glow-blue' },
    { color: 'red', class: 'text-googleRed bg-googleRed/10 border-googleRed glow-red' },
    { color: 'yellow', class: 'text-googleYellow bg-googleYellow/10 border-googleYellow glow-yellow' },
    { color: 'green', class: 'text-googleGreen bg-googleGreen/10 border-googleGreen glow-green' }
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Technical Workshops',
      description: 'Hands-on sessions on latest technologies and frameworks'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect with like-minded developers and industry experts'
    },
    {
      icon: Rocket,
      title: 'Project Building',
      description: 'Build real-world projects and showcase your skills'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Learning',
      description: 'Stay updated with cutting-edge technologies and trends'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join <span className="text-googleBlue dark:text-googleGreen">GDG?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover opportunities to learn, grow, and connect with the developer community
            </p>
          </div>
        </RevealOnScroll>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => {
            const googleColor = googlePalette[index % 4]; // Cycle Google colors

            return (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`
                  relative p-6 text-center rounded-xl shadow-md border 
                  bg-white dark:bg-darkCard 
                  border-gray-200 dark:border-darkBorder 
                  hover:shadow-lg transition-all group cursor-pointer
                `}
              >
                {/* Icon Circle */}
                <div
                  className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 
                    ${googleColor.class.split(' ')[1]} 
                    ${googleColor.class.split(' ')[0]}
                  `}
                >
                  <highlight.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-3 ${googleColor.class.split(' ')[0]}`}>
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Hover Glow */}
                <div
                  className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none 
                    ${googleColor.class.split(' ')[3]}
                  `}
                ></div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              mt-16 bg-gray-100 dark:bg-darkCard 
              rounded-2xl border border-gray-300 dark:border-darkBorder 
              p-8
            "
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '2+', label: 'Years Active' },
                { number: '50+', label: 'Events Hosted' },
                { number: '1000+', label: 'Students Reached' },
                { number: '30+', label: 'Projects Built' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-googleBlue dark:text-googleYellow mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Highlights;
