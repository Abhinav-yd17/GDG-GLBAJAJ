import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Calendar } from 'lucide-react'
import { eventsData } from '../data/eventsData'
import EventCard from '../components/events/EventCard'
import SectionHeader from '../components/layout/SectionHeader'
import Button from '../components/common/Button'
import { useAdmin } from '../context/AdminContext'

const Events = () => {
  const { isAdmin } = useAdmin()
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [showPastEvents, setShowPastEvents] = useState(false)

  const googleChipColors = {
    all: "bg-googleBlue/15 text-googleBlue border border-googleBlue/40",
    workshop: "bg-googleRed/15 text-googleRed border border-googleRed/40",
    hackathon: "bg-googleGreen/15 text-googleGreen border border-googleGreen/40",
    seminar: "bg-googleYellow/20 text-googleYellow border border-googleYellow/40",
    meetup: "bg-googleBlue/15 text-googleBlue border border-googleBlue/40",
    competition: "bg-googleRed/15 text-googleRed border border-googleRed/40",
    bootcamp: "bg-googleGreen/15 text-googleGreen border border-googleGreen/40",
  }

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filter === 'all' || event.category === filter

    const matchesTime = showPastEvents
      ? event.status === 'completed'
      : event.status !== 'completed'

    return matchesSearch && matchesFilter && matchesTime
  })

  const categories = [
    'all', 'workshop', 'hackathon', 'seminar',
    'meetup', 'competition', 'bootcamp'
  ]

  return (
    <div className="pt-20 min-h-screen bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Section Header */}
        <SectionHeader
          title="Our Events"
          subtitle="Discover upcoming workshops, hackathons, and community events"
          accentColor="googleBlue"
        />

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-6">

            {/* Search Box */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  w-full pl-10 pr-4 py-2 rounded-lg
                  bg-white dark:bg-darkCard
                  border border-gray-300 dark:border-gray-700
                  text-gray-800 dark:text-gray-200
                  placeholder-gray-400
                  focus:border-googleBlue focus:ring-1 focus:ring-googleBlue
                  transition
                "
              />
            </div>

            {/* Upcoming / Past Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPastEvents(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-all
                  ${
                    !showPastEvents
                      ? "bg-googleBlue text-white shadow"
                      : "bg-gray-200 dark:bg-darkCard text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-darkCard/70"
                  }
                `}
              >
                Upcoming
              </button>

              <button
                onClick={() => setShowPastEvents(true)}
                className={`px-4 py-2 rounded-lg font-medium transition-all
                  ${
                    showPastEvents
                      ? "bg-googleBlue text-white shadow"
                      : "bg-gray-200 dark:bg-darkCard text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-darkCard/70"
                  }
                `}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${filter === category
                    ? googleChipColors[category]
                    : "bg-gray-200 dark:bg-darkCard text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-darkCard/70 border border-transparent"}
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No Events Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Try adjusting your search or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setFilter('all')
                setShowPastEvents(false)
              }}
              variant="secondary"
            >
              Clear Filters
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        )}

      </div>
    </div>
  )
}

export default Events
