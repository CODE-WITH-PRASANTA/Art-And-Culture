import React from 'react'
import './Home.css'
import Herosection from '../../Components/HeroSection/HeroSection'
import Typesofidols from '../../Components/Typesofidols/Typesofidols'
import Trendingproducts from '../../Components/Trendingproducts/Trendingproducts'
import News from '../../Components/News/News'

const Home = () => {
  return (
    <div>
      <News/>
      <Herosection/>
      <Typesofidols/>
      <Trendingproducts/>
    </div>
  )
}

export default Home
