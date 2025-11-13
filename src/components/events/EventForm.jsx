import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Button from '../common/Button'

const EventForm = ({ isOpen, onClose, onSubmit, event }) => {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    date: event?.date || '',
    venue: event?.venue || '',
    description: event?.description || '',
    category: event?.category || 'workshop',
    status: event?.status || 'upcoming',
    attendees: event?.attendees || 0,
    duration: event?.duration || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-backgroundDark border border-neonBlue/30 rounded-2xl p-6 w-full max-w-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {event ? 'Edit Event' : 'Create New Event'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-neonBlue transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Venue
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 2 hours, 1 day"
                className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
              >
                <option value="workshop">Workshop</option>
                <option value="hackathon">Hackathon</option>
                <option value="seminar">Seminar</option>
                <option value="meetup">Meetup</option>
                <option value="competition">Competition</option>
                <option value="bootcamp">Bootcamp</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Expected Attendees
            </label>
            <input
              type="number"
              name="attendees"
              value={formData.attendees}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none resize-none"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {event ? 'Update Event' : 'Create Event'}
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default EventForm