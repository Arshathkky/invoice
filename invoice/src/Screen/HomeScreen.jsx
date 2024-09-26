import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()
  const clicktext =()=>{
    console.log("login success")
    navigate("\dashboard")
  }
  return (
    <div className='container'>
      <h1>Hello Welcome to the Invoice system</h1>
      
      lets go to explore<button onClick={clicktext} className='button'>login</button> 
    </div>
  )
}

export default HomeScreen
