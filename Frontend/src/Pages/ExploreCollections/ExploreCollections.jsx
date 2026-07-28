import React from 'react'
import ExploreCollectionHero from '../../Components/ExploreCollectionHero/ExploreCollectionHero'
import Exploreallproducts from '../../Components/Exploreallproducts/Exploreallproducts'
import ExploreCard from '../../Components/ExploreCard/ExploreCard'
import ExploreFollow from '../../Components/ExploreFollow/ExploreFollow'
import ExploreAbout from '../../Components/ExploreAbout/ExploreAbout'

const ExploreCollections = () => {
  return (
    <div>
        <ExploreCollectionHero/>
        <Exploreallproducts/>
        <ExploreCard/>
        <ExploreFollow/>
        <ExploreAbout/>
        </div>
  )
}

export default ExploreCollections