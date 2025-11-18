import React from 'react'
import './Home.css'
import Herosection from '../../Components/HeroSection/HeroSection'
import Typesofidols from '../../Components/Typesofidols/Typesofidols'
import Trendingproducts from '../../Components/Trendingproducts/Trendingproducts'
import News from '../../Components/News/News'
import Giftfinder from '../../Components/Giftfinder/Giftfinder'
import Findgiftsbyocassions from '../../Components/Findgiftsbyocassions/Findgiftsbyocassions'
import GodCollectionSection from '../../Components/GodCollectionSection/GodCollectionSection'
import Celebrationscalendar from '../../Components/Celebrationscalendar/Celebrationscalendar'
import Artpromise from '../../Components/Artpromise/Artpromise'

const Home = () => {
  return (
    <div>
      <News/>
      <Herosection/>
      <Typesofidols/>
      <Giftfinder/>
      <Trendingproducts/>
      <Findgiftsbyocassions/>
      <Celebrationscalendar/>
      <GodCollectionSection/>
      <Artpromise/>
    </div>
  )
}

export default Home
