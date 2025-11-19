import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Users } from 'lucide-react'
import { teamData } from '../data/teamData'
import TeamMemberCard from '../components/team/TeamMemberCard'
import SectionHeader from '../components/layout/SectionHeader'

const googleColors = [
  "text-googleBlue border-googleBlue",
  "text-googleRed border-googleRed",
  "text-googleYellow border-googleYellow",
  "text-googleGreen border-googleGreen"
]

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  // NORMALIZED ROLES (important for correct filtering)
  const roles = [
    'all',
    'faculty coordinator',
    'gdg lead',
    'technical lead',
    'CyberSecurity lead',
    'event management lead',
    'ai-ml lead',
    'Competitive Programming lead',
    'Devlopment lead',
    'graphic designing lead',
  ]

  const normalizedSearch = searchTerm.toLowerCase().trim()

  // FILTER MEMBERS BY SEARCH + ROLE
  const filteredMembers = teamData.filter(member => {
    const matchesSearch =
      (member.name || '').toLowerCase().includes(normalizedSearch) ||
      (member.role || '').toLowerCase().includes(normalizedSearch) ||
      (member.branch || '').toLowerCase().includes(normalizedSearch)

    const matchesFilter =
      filter === 'all' ||
      (member.role || '').toLowerCase() === filter.toLowerCase()

    return matchesSearch && matchesFilter
  })

  // GROUP MEMBERS BY ROLE
  const membersByRole = filteredMembers.reduce((acc, member) => {
    const role = (member.role || 'Other')

    if (!acc[role]) acc[role] = []
    acc[role].push(member)

    return acc
  }, {})

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Page Header */}
        <SectionHeader
          title="Meet Our Team"
          subtitle="The passionate students driving GDG GL Bajaj forward"
          accentColor="blue"
        />

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-6">

            {/* Search Bar */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-googleBlue focus:ring-1 focus:ring-googleBlue outline-none"
              />
            </div>

            {/* Role Filters */}
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setFilter(role)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    filter === role
                      ? `bg-googleBlue text-white border-googleBlue`
                      : `bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600`
                  }`}
                >
                  {role
                    .split(" ")
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                </button>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Team Grid */}
        {Object.keys(membersByRole).length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No Team Members Found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <div className="space-y-16">

            {/* Dynamic Role Sections */}
            {Object.entries(membersByRole).map(([role, members], roleIndex) => (
              <motion.section
                key={role}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className={`text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b ${
                    googleColors[roleIndex % 4].split(" ")[1]
                  }`}
                >
                  {role}
                </h2>

                {/* Member Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {members.map((member, index) => (
                    <TeamMemberCard key={member.id} member={member} index={index} />
                  ))}
                </div>
              </motion.section>
            ))}

          </div>
        )}

        {/* CTA Box */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-googleBlue/20 via-googleRed/20 to-googleGreen/20 rounded-2xl p-8 border border-googleBlue">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We’re always looking for passionate developers, designers and innovators!
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  )
}

export default Team
