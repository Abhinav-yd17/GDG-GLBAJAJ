import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AdminProvider } from './context/AdminContext'
import { EventProvider } from './context/EventContext'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import PageTransition from './components/common/PageTransition'
import ScrollToTop from './components/layout/ScrollToTop'

// Pages
import Home from './pages/Home'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <EventProvider>
          <Router>
            <ScrollToTop />
            <div className="App bg-backgroundDark min-h-screen">
              <Navbar />
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
              <Footer />
            </div>
          </Router>
        </EventProvider>
      </AdminProvider>
    </ThemeProvider>
  )
}

export default App