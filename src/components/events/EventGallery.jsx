import React from 'react'
import { motion } from 'framer-motion'

const EventGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No images available for this event.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group cursor-pointer aspect-square"
        >
          <img
            src={image}
            alt={`Event gallery ${index + 1}`}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </motion.div>
      ))}
    </div>
  )
}

export default EventGallery