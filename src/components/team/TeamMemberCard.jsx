import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'

const googleColors = [
  { name: "blue", color: "text-googleBlue", bg: "bg-googleBlue/20", border: "border-googleBlue", glow: "glow-googleBlue" },
  { name: "red", color: "text-googleRed", bg: "bg-googleRed/20", border: "border-googleRed", glow: "glow-googleRed" },
  { name: "yellow", color: "text-googleYellow", bg: "bg-googleYellow/20", border: "border-googleYellow", glow: "glow-googleYellow" },
  { name: "green", color: "text-googleGreen", bg: "bg-googleGreen/20", border: "border-googleGreen", glow: "glow-googleGreen" }
]

const TeamMemberCard = ({ member, index }) => {
  const theme = googleColors[index % 4] // rotate Google colors per card

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}

      /* FIXED → now supports BOTH modes */
      className={`p-6 text-center group hover:shadow-xl rounded-2xl border 
      ${theme.border} shadow-lg 
      bg-white dark:bg-[#111827] transition-all duration-300`}
      
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >

      {/* Member Photo */}
      <div className="relative mb-4">
        <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 
        ${theme.border} transition-all duration-300`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Glow */}
        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 ${theme.glow}`}></div>
      </div>

      {/* FIX → Light Mode text visible */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {member.name}
      </h3>

      {/* Role */}
      <p className={`font-medium mb-2 ${theme.color}`}>
        {member.role}
      </p>

      {/* Branch + Year */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
        {member.year} Year • {member.branch}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {member.skills.slice(0, 3).map((skill, i) => (
          <span
            key={i}
            className={`px-2 py-1 text-xs rounded-full ${theme.bg} ${theme.color}`}
          >
            {skill}
          </span>
        ))}

        {member.skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">
            +{member.skills.length - 3}
          </span>
        )}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-3">

        {member.linkedin && (
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-[#0077b5] transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
        )}

        {member.github && (
          <motion.a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </motion.a>
        )}

        <motion.a
          href={`mailto:${member.email}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 dark:text-gray-400 hover:text-googleBlue transition-colors"
        >
          <Mail className="h-5 w-5" />
        </motion.a>

      </div>
    </motion.div>
  )
}

export default TeamMemberCard
