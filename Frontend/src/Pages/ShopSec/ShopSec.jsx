import React from 'react'
import './ShopSec.css'
import ShopBreadCrum from '../../Components/ShopBreadCrum/ShopBreadCrum'
import Collection from '../../Components/Collection/Collection'
import BrassDiyasMain from '../../Components/BrassDiyasMain/BrassDiyasMain'
import ForHome from '../../Components/ForHome/ForHome'
import Followalong from '../../Components/Followalong/Followalong'
import Range from '../../Components/Range/Range'
import Smallthings from '../../Components/Smallthings/Smallthings'





const ShopSec = () => {
  return (
    <div>
      <ShopBreadCrum />
      <Collection/>
      <BrassDiyasMain/>
      <ForHome/>
      <Followalong/>
      <Range/>
      <Smallthings/>
    
    </div>
  )
}

export default ShopSec