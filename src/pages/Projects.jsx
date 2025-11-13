import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Github, ExternalLink, Users, Calendar, Code } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import SectionHeader from '../components/layout/SectionHeader'
import Button from '../components/common/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'web app', 'ai/ml', 'mobile', 'desktop', 'iot']

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-[#34A853] bg-[#34A853]/20'
      case 'in progress':
        return 'text-[#FBBC05] bg-[#FBBC05]/20'
      case 'planned':
        return 'text-[#4285F4] bg-[#4285F4]/20'
      default:
        return 'text-gray-500 bg-gray-300/30'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'web app':
        return 'border-[#4285F4] text-[#4285F4]'
      case 'ai/ml':
        return 'border-[#EA4335] text-[#EA4335]'
      case 'mobile':
        return 'border-[#FBBC05] text-[#FBBC05]'
      case 'desktop':
        return 'border-[#34A853] text-[#34A853]'
      case 'iot':
        return 'border-[#4285F4] text-[#4285F4]'
      default:
        return 'border-gray-400 text-gray-400'
    }
  }

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )

    const matchesFilter = filter === 'all' || project.category === filter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Our Projects"
          subtitle="Discover innovative projects built by our community members"
          accentColor="blue"
        />

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">

            {/* Search Box */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-darkBg border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-500 focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === category
                      ? 'bg-[#4285F4] text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-lg bg-white dark:bg-darkCard border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>

                <div
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs border bg-white/80 dark:bg-black/20 ${getCategoryColor(project.category)}`}>
                  {project.category}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-[#4285F4]/10 text-[#4285F4] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Team Members */}
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                <Users className="h-4 w-4 mr-2" />
                {project.team.length} team members
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center">

                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[#4285F4] transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <Button variant="ghost" size="small">
                  View Details
                </Button>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
