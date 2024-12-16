import React from 'react'
import Hero from './Hero'
import CommercialProperty from './components/CommercialProperty'
import OurAgents from './components/OurAgents'
import Gallery from './components/Gallery'
import ClientSays from './components/ClientSays'
import Blog from './components/Blog'
// import Contact from './components/Contact'
import ResidentialProjects from './components/ResidentialProjects'

const App = () => {
  return (
    <div>
      <Hero/>
      <CommercialProperty/>
      <ResidentialProjects/>
      <OurAgents/>
      <Gallery/>
      <ClientSays/>
      <Blog/>
      
    </div>
  )
}

export default App