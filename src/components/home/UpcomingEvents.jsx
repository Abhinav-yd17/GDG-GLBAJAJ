import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users, Plus } from 'lucide-react'
import { eventsData } from '../../data/eventsData'
import { formatDate } from '../../utils/helpers'
import Button from '../common/Button'
import EventCard from '../events/EventCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import { useAdmin } from '../../context/AdminContext'

const UpcomingEvents = () => {
  const { isAdmin } = useAdmin()
  const [showAll, setShowAll] = useState(false)

  const upcomingEvents = eventsData
    .filter(event => event.status === 'upcoming')
    .slice(0, showAll ? 6 : 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Upcoming <span className="text-neonBlue">Events</span>
              </h2>
              <p className="text-xl text-gray-400">
                Join our next events and level up your skills
              </p>
            </div>
            
            {isAdmin && (
              <Button 
                variant="primary" 
                className="flex items-center gap-2 mt-4 md:mt-0"
              >
                <Plus className="h-5 w-5" />
                Add Event
              </Button>
            )}
          </div>
        </RevealOnScroll>

        {upcomingEvents.length === 0 ? (
          <RevealOnScroll>
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                No Upcoming Events
              </h3>
              <p className="text-gray-500">
                Check back later for new events!
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        )}

        {eventsData.filter(event => event.status === 'upcoming').length > 3 && (
          <RevealOnScroll>
            <div className="text-center">
              <Button
                variant="secondary"
                onClick={() => setShowAll(!showAll)}
                className="mx-auto"
              >
                {showAll ? 'Show Less' : 'View All Events'}
              </Button>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

export default UpcomingEvents