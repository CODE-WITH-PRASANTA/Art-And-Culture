import React from 'react'
import ShopBestsellerhero from '../../Components/ShopBestsellerhero/ShopBestsellerhero'
import AllProducts from '../../Components/AllProducts/AllProducts'
import Bestsellercard from '../../Components/Bestsellercard/Bestsellercard'
import Bestsellerfollow from '../../Components/Bestsellerfollow/Bestsellerfollow'
import Bestsellerabout from '../../Components/Bestsellerabout/Bestsellerabout'
import ExploreFollow from '../../Components/ExploreFollow/ExploreFollow'

const ShopBestseller = () => {
  return (
    <div>
<ShopBestsellerhero/>
<AllProducts/>
<Bestsellercard/>
<Bestsellerfollow/>
<Bestsellerabout/>
    </div>
  )
}

export default ShopBestseller