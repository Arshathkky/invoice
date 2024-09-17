import React from 'react'
import Navbar from '../Component/Navbar'
import SalesGraph from '../Component/SalesGraphs'

const Dashboard = () => {
  return (
    <div className='dashboard_container'>
      <div >
            <Navbar/>
      </div>

      <div>
            <SalesGraph/>
      </div>
      
    </div>
  )
}

export default Dashboard
