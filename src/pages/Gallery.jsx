import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { galleryData } from '../data/galleryData'
import GalleryGrid from '../components/gallery/GalleryGrid'
import GalleryModal from '../components/gallery/GalleryModal'
import SectionHeader from '../components/layout/SectionHeader'

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = ['all', 'workshop', 'hackathon', 'seminar', 'meetup', 'bootcamp', 'event']

  const filteredImages = galleryData.filter(image => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filter === 'all' || image.category === filter

    return matchesSearch && matchesFilter
  })

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <SectionHeader
          title="Photo Gallery"
          subtitle="Capturing moments from our events and community activities"
          accentColor="blue"
        />

        {/* Filters + Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-6">

            {/* Search */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white placeholder-gray-400
                  focus:border-googleBlue focus:ring-1 focus:ring-googleBlue outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
                    ${
                      filter === category
                        ? 'bg-googleBlue text-white border-googleBlue'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">
              No Photos Found
            </h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <GalleryGrid
            images={filteredImages}
            onImageClick={openModal}
          />
        )}

        {/* Modal */}
        <GalleryModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
          currentIndex={currentIndex}
          totalImages={filteredImages.length}
        />
      </div>
    </div>
  )
}

export default Gallery
