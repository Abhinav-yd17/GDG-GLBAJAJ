import React from 'react'
import { motion } from 'framer-motion'

const GalleryGrid = ({ images, onImageClick }) => {

  const getCardColor = (category) => {
    switch (category.toLowerCase()) {
      case "workshop": return "bg-googleBlue/10 border border-googleBlue/20"
      case "hackathon": return "bg-googleRed/10 border border-googleRed/20"
      case "bootcamp": return "bg-googleYellow/10 border border-googleYellow/20"
      case "meetup": return "bg-googleGreen/10 border border-googleGreen/20"
      case "seminar": return "bg-neonPurple/10 border border-neonPurple/20"
      case "event": return "bg-gray-700/10 border border-gray-500/20"
      default: return "bg-backgroundDark border border-gray-600/20"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer aspect-square"
          onClick={() => onImageClick(image, index)}
        >
          <div
            className={`w-full h-full rounded-xl overflow-hidden shadow-xl 
              hover:shadow-2xl transition-all duration-300 
              ${getCardColor(image.category)}
            `}
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 flex items-end p-4 rounded-xl">
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.description}</p>
                <p className="text-xs text-neonBlue mt-2">{image.date}</p>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 px-3 py-1 bg-black/40 text-white 
            text-xs rounded-full backdrop-blur-md border border-white/20">
              {image.category.toUpperCase()}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default GalleryGrid
