import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'

const GOOGLE_COLORS = {
  workshop: "text-googleBlue bg-googleBlue/20 border-googleBlue",
  hackathon: "text-googleRed bg-googleRed/20 border-googleRed",
  seminar: "text-googleYellow bg-googleYellow/20 border-googleYellow",
  meetup: "text-googleGreen bg-googleGreen/20 border-googleGreen",
  bootcamp: "text-googleRed bg-googleRed/20 border-googleRed",
  event: "text-googleYellow bg-googleYellow/20 border-googleYellow",
  default: "text-googleBlue bg-googleBlue/20 border-googleBlue"
}

const GalleryModal = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalImages
}) => {
  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = image.image
    link.download = `gdsc-${image.title.toLowerCase().replace(/\s+/g, '-')}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const colorClass =
    GOOGLE_COLORS[image.category] || GOOGLE_COLORS.default

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-6xl max-h-full w-full border border-googleBlue/30 rounded-xl shadow-lg overflow-hidden bg-backgroundDark"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-googleBlue transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="absolute -top-12 right-12 text-white hover:text-googleBlue transition-colors z-10"
          >
            <Download className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 
                text-white hover:text-googleBlue transition-colors z-10 
                bg-black/50 backdrop-blur-sm rounded-full p-3"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                text-white hover:text-googleBlue transition-colors z-10 
                bg-black/50 backdrop-blur-sm rounded-full p-3"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {totalImages > 1 && (
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm 
            text-white px-3 py-1 rounded-full text-sm border border-googleBlue/40">
              {currentIndex + 1} / {totalImages}
            </div>
          )}

          {/* Image */}
          <div className="rounded-lg overflow-hidden bg-backgroundDark p-2">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-lg"
            />
          </div>

          {/* Info Section */}
          <div className="mt-6 text-white px-2 pb-6">
            <h3 className="text-2xl font-bold mb-2">{image.title}</h3>

            <p className="text-gray-300 text-lg mb-3">
              {image.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-googleBlue font-semibold">{image.date}</span>

              <span className={`px-3 py-1 rounded-full text-sm border ${colorClass}`}>
                {image.category.toUpperCase()}
              </span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GalleryModal
