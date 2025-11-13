import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/layout/SectionHeader'
import Button from '../components/common/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Web Development',
      excerpt: 'Learn the basics of HTML, CSS, and JavaScript to start your web development journey.',
      author: 'Aarav Sharma',
      date: '2024-03-01',
      readTime: '5 min read',
      category: 'web development',
      image: '/images/blog/web-dev.jpg',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning',
      excerpt: 'A complete guide to ML concepts, algorithms, and real-world uses.',
      author: 'Neha Gupta',
      date: '2024-02-25',
      readTime: '8 min read',
      category: 'ai/ml',
      image: '/images/blog/ml-intro.jpg',
      tags: ['ML', 'AI', 'Python']
    },
    {
      id: 3,
      title: 'Building Your First Android App',
      excerpt: 'Step-by-step tutorial on creating your first Android application using Kotlin.',
      author: 'Priya Patel',
      date: '2024-02-20',
      readTime: '6 min read',
      category: 'mobile',
      image: '/images/blog/android-app.jpg',
      tags: ['Android', 'Kotlin']
    },
    {
      id: 4,
      title: 'Cloud Computing Fundamentals',
      excerpt: 'Learn the basics of cloud computing and GCP.',
      author: 'Siddharth Singh',
      date: '2024-02-15',
      readTime: '7 min read',
      category: 'cloud',
      image: '/images/blog/cloud-computing.jpg',
      tags: ['Cloud', 'GCP']
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      excerpt: 'Design principles and best practices for creating user-friendly interfaces.',
      author: 'Vikram Joshi',
      date: '2024-02-10',
      readTime: '5 min read',
      category: 'design',
      image: '/images/blog/ui-ux.jpg',
      tags: ['Design', 'Figma']
    },
    {
      id: 6,
      title: 'Version Control with Git',
      excerpt: 'Master Git & GitHub for collaboration.',
      author: 'Rohan Kumar',
      date: '2024-02-05',
      readTime: '6 min read',
      category: 'tools',
      image: '/images/blog/git.jpg',
      tags: ['Git', 'GitHub']
    }
  ]

  const categories = ['all', 'web development', 'ai/ml', 'mobile', 'cloud', 'design', 'tools']

  // Google Theme Colors
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "web development":
        return "bg-googleBlue/15 border border-googleBlue/40 text-googleBlue"
      case "ai/ml":
        return "bg-googleRed/15 border border-googleRed/40 text-googleRed"
      case "mobile":
        return "bg-googleYellow/20 border border-googleYellow/40 text-googleYellow"
      case "cloud":
        return "bg-googleGreen/15 border border-googleGreen/40 text-googleGreen"
      case "design":
        return "bg-neonPurple/20 border border-neonPurple/40 text-neonPurple"
      case "tools":
        return "bg-gray-600/20 border border-gray-500/40 text-gray-200"
      default:
        return "bg-gray-700/20 border border-gray-600/30 text-gray-300"
    }
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFilter = filter === 'all' || post.category === filter
    return matchesSearch && matchesFilter
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <SectionHeader
          title="Our Blog"
          subtitle="Stay updated with tutorials, insights, and news from our community"
          accentColor="blue"
        />

        {/* Search + Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-6">

            {/* Search Box */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-backgroundDark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-googleBlue focus:ring-1 focus:ring-googleBlue outline-none"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${filter === category 
                    ? "bg-googleBlue text-white" 
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <RevealOnScroll>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Post</h2>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-googleBlue/30 bg-backgroundDark hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                  {/* Featured Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-700"
                    />

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-4 py-1 bg-googleBlue/20 border border-googleBlue/40 text-googleBlue rounded-full text-sm font-semibold backdrop-blur-lg">
                      FEATURED
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h3>

                    <p className="text-gray-400 mb-6 text-lg">
                      {filteredPosts[0].excerpt}
                    </p>

                    {/* Meta Data */}
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" /> {filteredPosts[0].author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> {formatDate(filteredPosts[0].date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> {filteredPosts[0].readTime}
                      </span>
                    </div>

                    <Button variant="primary" className="flex items-center gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            </section>
          </RevealOnScroll>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 1 ? (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Latest Posts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl overflow-hidden border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ${getCategoryColor(post.category)} bg-backgroundDark`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Category Badge */}
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${getCategoryColor(post.category)}`}>
                      {post.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(post.category)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {post.author}</span>
                        <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {formatDate(post.date)}</span>
                      </div>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                    </div>

                    <Button variant="ghost" size="small" className="w-full flex justify-center gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ) : null}

      </div>
    </div>
  )
}

export default Blog
