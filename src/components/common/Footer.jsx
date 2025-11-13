import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gdsc-glbajaj', label: 'GitHub', color: 'hover:text-googleBlue' },
    { icon: Twitter, href: 'https://twitter.com/gdsc_glbajaj', label: 'Twitter', color: 'hover:text-googleBlue' },
    { icon: Instagram, href: 'https://instagram.com/gdsc_glbajaj', label: 'Instagram', color: 'hover:text-googleRed' },
    { icon: Linkedin, href: 'https://linkedin.com/company/gdsc-glbajaj', label: 'LinkedIn', color: 'hover:text-googleBlue' },
    { icon: Mail, href: 'mailto:gdsc@glbajaj.ac.in', label: 'Email', color: 'hover:text-googleGreen' },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const resourceLinks = [
    { name: 'Google Developers', href: 'https://developers.google.com' },
    { name: 'GDG Program', href: 'https://developers.google.com/community/gdsc' },
    { name: 'Google Cloud', href: 'https://cloud.google.com' },
    { name: 'Android Developers', href: 'https://developer.android.com' },
    { name: 'Firebase', href: 'https://firebase.google.com' },
    { name: 'TensorFlow', href: 'https://tensorflow.org' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <footer className="bg-lightBg dark:bg-darkBg border-t border-border relative overflow-hidden">
      {/* Background subtle color shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-googleBlue rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-googleGreen rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >

            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-googleBlue dark:text-googleYellow" />
                <span className="text-xl font-bold text-googleBlue dark:text-white">GDG GL Bajaj</span>
              </Link>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Google Developer Student Clubs – GL Bajaj is a community of builders and innovators
                exploring and creating amazing tech together.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className={`text-gray-500 dark:text-gray-300 ${social.color} transition p-2 rounded-lg bg-lightBg dark:bg-darkCard border border-border`}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-googleBlue dark:text-white mb-4 flex items-center">
                Quick Links
                <div className="ml-2 w-2 h-2 bg-googleBlue rounded-full"></div>
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-300 hover:text-googleBlue dark:hover:text-googleGreen transition flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-googleBlue dark:text-white mb-4 flex items-center">
                Resources
                <div className="ml-2 w-2 h-2 bg-googleGreen rounded-full"></div>
              </h3>

              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-googleGreen transition group flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-googleBlue dark:text-white mb-4 flex items-center">
                Contact Us
                <div className="ml-2 w-2 h-2 bg-googleRed rounded-full"></div>
              </h3>

              <address className="text-gray-600 dark:text-gray-300 not-italic space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-googleBlue dark:text-googleYellow mt-1" />
                  <div>
                    <p className="font-medium text-googleBlue dark:text-white">
                      G.L. Bajaj Institute of Technology and Management
                    </p>
                    <p className="text-sm">Knowledge Park III, Greater Noida</p>
                    <p className="text-sm">Uttar Pradesh 201306</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-googleBlue dark:text-googleYellow" />
                  <a href="mailto:gdg@glbajaj.ac.in" className="hover:text-googleBlue dark:hover:text-googleGreen transition">
                    gdg@glbajaj.ac.in
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-googleBlue dark:text-googleYellow" />
                  <a href="tel:+911234567890" className="hover:text-googleBlue dark:hover:text-googleGreen transition">
                    +91 12345 67890
                  </a>
                </div>
              </address>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} GDG GL Bajaj. All rights reserved.
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-googleBlue">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-googleBlue">Terms</a>
              <span>•</span>
              <a href="/code-of-conduct" className="hover:text-googleBlue">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
