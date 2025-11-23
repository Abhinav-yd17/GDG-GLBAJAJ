import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react'
import SectionHeader from '../components/layout/SectionHeader'
import Button from '../components/common/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'gdsc@glbajaj.ac.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 XXXXXXXXXX',
      description: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'G.L. Bajaj Institute, Greater Noida',
      description: 'Plot No. 2, Knowledge Park III'
    },
    {
      icon: Users,
      title: 'Community',
      info: 'Join our Discord',
      description: 'Connect with other members'
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have questions? We'd love to hear from you"
          accentColor="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact <span className="text-neonBlue">Information</span>
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-neonBlue/20 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-neonBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-neonBlue mb-1">{item.info}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* OFFICE HOURS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="neon-card p-6 bg-white dark:bg-[#0d0d0e] rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-neonBlue" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Office Hours
                </h4>
              </div>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="neon-card p-8 bg-white dark:bg-[#0d0d0e] rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a <span className="text-neonBlue">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-backgroundDark border border-gray-400 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-backgroundDark border border-gray-400 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-backgroundDark border border-gray-400 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-white dark:bg-backgroundDark border border-gray-400 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none resize-none"
                    placeholder="Tell us about your inquiry..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ================= GOOGLE MAP + BACKGROUND ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Find Us at <span className="text-neonPurple">GL Bajaj</span>
          </h3>

          <a
            href="https://www.google.com/maps/place/GL+Bajaj+Institute+of+Technology+%26+Management/@28.4722331,77.4863866,17z/data=!3m1!4b1!4m6!3m5!1s0x390ceb193588358f:0x8274cec5a1321578!8m2!3d28.4722284!4d77.4889615!16s%2Fg%2F11ghrkc0zw?entry=ttu&g_ep=EgoyMDI1MTEyMC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="neon-card p-6 rounded-2xl bg-white dark:bg-[#0d0d0e] border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-[1.02] transition-transform">

              {/* BACKGROUND IMAGE BOX */}
              <div
                className="aspect-video rounded-xl bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
                style={{
                  backgroundImage: "url('/assets/images/community/GLB.jpg')",
                }}
              >

                {/* LIGHT OVERLAY */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* CONTENT CARD */}
                <div className="relative bg-white/50 dark:bg-black/30 backdrop-blur-sm px-8 py-6 rounded-lg max-w-xl text-center shadow-lg">
                  <MapPin className="h-10 w-10 text-neonBlue mx-auto mb-3" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    G.L. Bajaj Institute of Technology and Management
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Plot No. 2, Knowledge Park III, Greater Noida, Uttar Pradesh 201306
                  </p>
                </div>
              </div>

            </div>
          </a>
        </motion.section>

      </div>
    </div>
  )
}

export default Contact
