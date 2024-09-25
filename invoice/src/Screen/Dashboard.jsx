import React from 'react'
import Navbar from '../Component/Navbar'
import SalesGraph from '../Component/SalesGraphs'

import Top from '../Component/Top'
import LineCharts from '../Component/LineCharts'

const Dashboard = () => {
  return (
   
      
      <div className='dashboard_container'>
        <div >
              <Navbar/>
        </div>

        <div className='right'>
              <SalesGraph/>
              <LineCharts/>
        </div>
        
      </div>
   
  )
}

export default Dashboard
