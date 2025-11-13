import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { projectsData } from '../../data/projectsData'
import Button from '../common/Button'
import RevealOnScroll from '../ui/RevealOnScroll'

const FeaturedProjects = () => {
  const featuredProjects = projectsData
    .filter(project => project.status === 'completed')
    .slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const googleColors = {
    blue: "text-googleBlue bg-googleBlue/10 border-googleBlue",
    red: "text-googleRed bg-googleRed/10 border-googleRed",
    yellow: "text-googleYellow bg-googleYellow/10 border-googleYellow",
    green: "text-googleGreen bg-googleGreen/10 border-googleGreen",
  }

  return (
    <section className="py-20 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-googleBlue dark:text-googleYellow">
              Featured <span className="text-googleRed">Projects</span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of the best projects built by our community members.
            </p>
          </div>
        </RevealOnScroll>

        {/* If no projects */}
        {featuredProjects.length === 0 ? (
          <RevealOnScroll>
            <div className="text-center py-12">
              <p className="text-2xl text-gray-500">No featured projects yet</p>
            </div>
          </RevealOnScroll>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={containerVariants}
                whileHover={{ scale: 1.02 }}
                className="
                  bg-white dark:bg-darkCard 
                  border border-gray-200 dark:border-darkBorder 
                  rounded-xl shadow-md hover:shadow-lg 
                  transition-all p-6
                "
              >
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Completed Badge */}
                  <div
                    className={`
                      absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium
                      ${googleColors.green}
                    `}
                  >
                    Completed
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-googleBlue dark:text-googleYellow mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-2 py-1 rounded text-xs border 
                        text-googleBlue border-googleBlue 
                        dark:text-googleYellow dark:border-googleYellow
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">

                    {/* GitHub */}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        className="text-gray-600 dark:text-gray-300 hover:text-googleBlue dark:hover:text-googleYellow"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}

                    {/* Live Demo */}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        className="text-gray-600 dark:text-gray-300 hover:text-googleGreen"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="small"
                    className="text-googleBlue dark:text-googleYellow"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Projects */}
        <RevealOnScroll>
          <div className="text-center mt-12">
            <Button
              to="/projects"
              variant="secondary"
              className="flex items-center gap-2 mx-auto
              text-googleBlue dark:text-googleGreen border-googleBlue dark:border-googleGreen"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}

export default FeaturedProjects
