import React from 'react'
import "./FreshCollection.css"
import ShopByGodSlider from '../../Components/ShopByGodSlider/ShopByGodSlider'
import DivineFinder from '../../Components/DivineFinder/DivineFinder'
import GodCollectionSection from '../../Components/GodCollectionSection/GodCollectionSection'
import ShopByCollection from '../../Components/ShopByCollection/ShopByCollection'
import ProductShowcase from '../../Components/ProductShowcase/ProductShowcase'
import ShopByFestivalsSlider from '../../Components/ShopByFestivalsSlider/ShopByFestivalsSlider'
import ShopByPurpose from '../../Components/ShopByPurpose/ShopByPurpose'
import PromiseSection from '../../Components/PromiseSection/PromiseSection'
import FreshCollectionBanner from '../../Components/FreshCollectionBanner/FreshCollectionBanner'

const FreshCollection = () => {
  return (
    <>
    <FreshCollectionBanner/>
    <ShopByGodSlider/>
    <DivineFinder/>
    <GodCollectionSection/>
    <ShopByCollection/>
    <ProductShowcase/>
    <ShopByFestivalsSlider/>
    <PromiseSection/>
    <ShopByPurpose/>
    
    </>
  )
}

export default FreshCollection