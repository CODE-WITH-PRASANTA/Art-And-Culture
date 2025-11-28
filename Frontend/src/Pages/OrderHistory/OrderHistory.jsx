import React from 'react'
import './OrderHistory.css'
import OrdersTable from '../../Components/OrdersTable/OrdersTable'
import OrderBreadcrumb from '../../Components/OrderBreadcrumb/OrderBreadcrumb'

const OrderHistory = () => {
  return (
    <>
    <OrderBreadcrumb/>
    <OrdersTable/>
    
    </>
  )
}

export default OrderHistory