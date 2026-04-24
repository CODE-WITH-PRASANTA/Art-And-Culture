import React from 'react'
import StatsCards from '../../Component/StatsCards/StatsCards'
import AnalyticsSection from '../../Component/AnalyticsSection/AnalyticsSection'
import CustomerGrowth from '../../Component/CustomerGrowth/CustomerGrowth'
import CustomerInsights from '../../Component/CustomerInsights/CustomerInsights'
import PropertyDeviceSection from '../../Component/PropertyDeviceSection/PropertyDeviceSection'
import RegionMapSection from '../../Component/RegionMapSection/RegionMapSection'
import CustomerListTable from '../../Component/CustomerListTable/CustomerListTable'

const Dashboard = () => {
  return (
    <div>
      <StatsCards />
      <AnalyticsSection />
      <CustomerGrowth />
      <CustomerInsights />
      <PropertyDeviceSection />
      <RegionMapSection />
      <CustomerListTable />
    </div>
  )
}

export default Dashboard
