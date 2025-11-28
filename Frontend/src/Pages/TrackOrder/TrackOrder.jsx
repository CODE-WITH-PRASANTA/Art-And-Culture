import React from 'react'
import './TrackOrder.css'
import SubscribeHero from '../../Components/SubscribeHero/SubscribeHero'
import OrderDetails from '../../Components/OrderDetails/OrderDetails'
import TrackOrderBreadcrumb from '../../Components/TrackOrderBreadcrumb/TrackOrderBreadcrumb'

const TrackOrder = () => {
  return (
    <>
    <TrackOrderBreadcrumb/>
    <OrderDetails/>
    <SubscribeHero/>



    </>
  )
}

export default TrackOrder