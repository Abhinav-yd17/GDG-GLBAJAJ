import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, Edit } from 'lucide-react'
import { formatDate } from '../../utils/helpers'
import { useAdmin } from '../../context/AdminContext'

const EventCard = ({ event, index }) => {
  const { isAdmin } = useAdmin()

  /* ================================
        GOOGLE COLOR SYSTEM
     ================================= */

  const google = {
    blue: "text-googleBlue bg-googleBlue/10 border-googleBlue",
    red: "text-googleRed bg-googleRed/10 border-googleRed",
    yellow: "text-googleYellow bg-googleYellow/10 border-googleYellow",
    green: "text-googleGreen bg-googleGreen/10 border-googleGreen",
  }

  /* ---------------------------
     STATUS BADGE COLORS
  ---------------------------- */
  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming": return `${google.green}`
      case "ongoing": return `${google.yellow}`
      case "completed": return "text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
      default: return "text-gray-400 bg-gray-200"
    }
  }

  /* ---------------------------
     CATEGORY COLORS
  ---------------------------- */
  const getCategoryColor = (category) => {
    switch (category) {
      case "workshop": return google.blue
      case "hackathon": return google.red
      case "seminar": return google.green
      case "bootcamp": return google.yellow
      default: return "text-gray-400 border-gray-300"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="
        p-6 rounded-xl shadow-md transition-all
        bg-white border border-gray-200 
        dark:bg-darkCard dark:border-darkBorder
        hover:shadow-lg
      "
    >

      {/* Event Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Status Badge */}
        <div
          className={`
            absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full 
            ${getStatusColor(event.status)}
          `}
        >
          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </div>

        {/* Category Badge */}
        <div
          className={`
            absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full border
            ${getCategoryColor(event.category)}
          `}
        >
          {event.category}
        </div>
      </div>

      {/* Event Title */}
      <h3 className="
        text-xl font-semibold mb-3 
        text-googleBlue dark:text-googleYellow
      ">
        {event.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {event.description}
      </p>

      {/* Event Meta Info */}
      <div className="space-y-2 mb-4">

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2 text-googleBlue" />
          <span className="text-sm">{formatDate(event.date)}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-2 text-googleRed" />
          <span className="text-sm">{event.venue}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Clock className="h-4 w-4 mr-2 text-googleYellow" />
          <span className="text-sm">{event.duration}</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Users className="h-4 w-4 mr-2 text-googleGreen" />
          <span className="text-sm">{event.attendees} attendees</span>
        </div>

      </div>

      {/* Admin Edit Button */}
      {isAdmin && (
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              p-2 text-gray-500 dark:text-gray-300 
              hover:text-googleBlue dark:hover:text-googleYellow 
              transition-colors
            "
          >
            <Edit className="h-4 w-4" />
          </motion.button>
        </div>
      )}

    </motion.div>
  )
}

export default EventCard
