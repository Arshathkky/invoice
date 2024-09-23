import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className='container'>
      <h1>Hello Welcome to the Invoice system</h1>
      
      lets go to explore<Link to={"\login"}> login</Link>
    </div>
  )
}

export default HomeScreen
