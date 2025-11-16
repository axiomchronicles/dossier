import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsTicker from './components/SkillsTicker'
import Achievements from './components/Achievements'
import ScrollIndicator from './components/ScrollIndicator'

const Home = () => {
  return (
    <div>
      <ScrollIndicator />
      <HeroSection />
      <Achievements />
      <GithubProjects />
      <SkillsTicker />
    </div>
  )
}

export default Home