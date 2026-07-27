import React from 'react'
import './Home.css'
import Herosection from '../../Components/HeroSection/HeroSection'
import Typesofidols from '../../Components/Typesofidols/Typesofidols'

import News from '../../Components/News/News'
import TeamMember from '../../Components/TeamMember/TeamMember'

import Artpromise from '../../Components/Artpromise/Artpromise'
import Testimonial from '../../Components/Testimonial/Testimonial'
import HotCategory from '../../Components/HotCategory/HotCategory'
import HomeCard from '../../Components/HomeCard/HomeCard'
import HomeExplore from '../../Components/HomeExplore/HomeExplore'
import HomeBrowse from '../../Components/HomeBrowse/HomeBrowse'
import HomeStory from '../../Components/HomeStory/HomeStory'

import HomeMedia from '../../Components/HomeMedia/HomeMedia'
import HomeGifting from '../../Components/HomeGifting/HomeGifting'
import HomeMyth from '../../Components/HomeMyth/HomeMyth'
import HomeFollow from '../../Components/HomeFollow/HomeFollow'
import HomeOccasion from '../../Components/HomeOccasion/HomeOccasion'

const Home = () => {
  return (
    <div>
      <News/>
      <Herosection/>
      <HomeCard/>
      <HomeExplore/>
      <HomeBrowse/>
      <HomeStory/>
      <Typesofidols/>
     <Testimonial/>
     <HomeOccasion/>
      <TeamMember/>
      
      <HotCategory />
   <HomeMedia/>
   <HomeGifting/>
   <HomeMyth/>
   <HomeFollow/>
      <Artpromise/>
    </div>
  )
}

export default Home
