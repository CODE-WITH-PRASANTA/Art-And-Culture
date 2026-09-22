import React from 'react'
import OrdersDashboard from '../../Component/OrdersDashboard/OrdersDashboard'
import FilterOrders from '../../Component/FilterOrders/FilterOrders'
import OrderFeatures from '../../Component/OrderFeatures/OrderFeatures'

const Orders = () => {
  return (
    <div>
        <OrdersDashboard />
        <FilterOrders />
        <OrderFeatures />
    </div>
  )
}

export default Orders