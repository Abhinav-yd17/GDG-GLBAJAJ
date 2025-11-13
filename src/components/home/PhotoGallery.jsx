import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryData } from '../../data/galleryData'
import RevealOnScroll from '../ui/RevealOnScroll'
import Button from '../common/Button'

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const googleColors = [
    { border: "border-googleBlue", glow: "glow-blue" },
    { border: "border-googleRed", glow: "glow-red" },
    { border: "border-googleYellow", glow: "glow-yellow" },
    { border: "border-googleGreen", glow: "glow-green" }
  ]

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryData.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryData[nextIndex])
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryData[prevIndex])
  }

  const displayedImages = galleryData.slice(0, 6)

  return (
    <section className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Photo <span className="text-googleBlue dark:text-googleGreen">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Capturing moments from events and community activities
            </p>
          </div>
        </RevealOnScroll>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {displayedImages.map((image, index) => {
            const color = googleColors[index % 4];

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-md relative">

                  <motion.img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.08 }}
                  />

                  {/* Colored Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-300">{image.description}</p>
                    </div>
                  </div>

                  {/* Google Color Hover Border */}
                  <div
                    className={`
                      absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                      transition-all duration-300 border-4 ${color.border} ${color.glow}
                    `}
                  ></div>

                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View Full Button */}
        <RevealOnScroll>
          <div className="text-center">
            <Button to="/gallery" variant="secondary">
              View Full Gallery
            </Button>
          </div>
        </RevealOnScroll>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-googleBlue transition-colors z-10"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Prev Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-googleBlue transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-googleBlue transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Modal Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                  <p className="text-googleBlue mt-2">{selectedImage.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default PhotoGallery
