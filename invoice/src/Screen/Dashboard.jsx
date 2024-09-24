import React from 'react'
import Navbar from '../Component/Navbar'
import SalesGraph from '../Component/SalesGraphs'

import Top from '../Component/Top'

const Dashboard = () => {
  return (
    <div>
      
      <div className='dashboard_container'>
        <div >
              <Navbar/>
        </div>

        <div>
              <SalesGraph/>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard
