import React from 'react'
import { AnalyticsChart } from '../components/AnalyticsChart'

const page = () => {
  return (
    <div> 
        <h1 className="text-2xl font-semibold text-gray-900 mb-9">Analytics</h1>
        <AnalyticsChart />
    </div>
  )
}

export default page