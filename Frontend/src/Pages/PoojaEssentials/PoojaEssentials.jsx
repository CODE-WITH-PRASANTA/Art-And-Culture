import React from 'react'
import "./PoojaEssentials.css"
import PoojaEssentialsHeader from '../../Components/PoojaEssentialsHeader/PoojaEssentialsHeader'
import FestiveGrid from '../../Components/FestiveGrid/FestiveGrid'
import PoojaSections from '../../Components/PoojaPremium/PoojaPremium'

const PoojaEssentials = () => {
  return (
    <>
    <PoojaEssentialsHeader/>
    <FestiveGrid/>
    <PoojaSections/>
    
    </>
  )
}

export default PoojaEssentials
