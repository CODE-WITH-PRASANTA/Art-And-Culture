import React from 'react'
import './Home.css'
import Herosection from '../../Components/HeroSection/HeroSection'
import Typesofidols from '../../Components/Typesofidols/Typesofidols'
import Trendingproducts from '../../Components/Trendingproducts/Trendingproducts'
import News from '../../Components/News/News'
import TeamMember from '../../Components/TeamMember/TeamMember'


import GodCollectionSection from '../../Components/GodCollectionSection/GodCollectionSection'

import Artpromise from '../../Components/Artpromise/Artpromise'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Category from '../Category/Category'

const Home = () => {
  return (
    <div>
      <News/>
      <Herosection/>
      <Typesofidols/>
     <Testimonial/>
      <Trendingproducts/>
      <TeamMember/>
      <Category />
      <GodCollectionSection/>
      <Artpromise/>
    </div>
  )
}

export default Home
