import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Highlights from '../components/home/Highlights'
import UpcomingEvents from '../components/home/UpcomingEvents'
import CommunityDashboard from '../components/home/CommunityDashboard'
import PhotoGallery from '../components/home/PhotoGallery'
import FeaturedProjects from '../components/home/FeaturedProjects'

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <Highlights />
      <UpcomingEvents />
      <CommunityDashboard />
      <FeaturedProjects />
      <PhotoGallery />
    </div>
  )
}

export default Home