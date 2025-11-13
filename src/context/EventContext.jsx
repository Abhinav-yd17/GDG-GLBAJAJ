import React, { createContext, useContext, useState, useEffect } from 'react'
import { eventsData } from '../data/eventsData'

const EventContext = createContext()

export const useEvent = () => useContext(EventContext)

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    // Simulate API call
    const fetchEvents = async () => {
      setLoading(true)
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setEvents(eventsData)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Error fetching events:', error)
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const addEvent = (eventData) => {
    const newEvent = {
      ...eventData,
      id: Math.max(...events.map(e => e.id), 0) + 1,
      attendees: 0,
      status: 'upcoming'
    }
    setEvents(prev => [newEvent, ...prev])
  }

  const updateEvent = (id, eventData) => {
    setEvents(prev => prev.map(event => 
      event.id === id ? { ...event, ...eventData } : event
    ))
  }

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id))
  }

  const registerForEvent = (eventId) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId 
        ? { ...event, attendees: event.attendees + 1 }
        : event
    ))
  }

  const value = {
    events,
    loading,
    selectedEvent,
    setSelectedEvent,
    addEvent,
    updateEvent,
    deleteEvent,
    registerForEvent
  }

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  )
}