const {withNativeWind} = require('nativewind/metro');
import React from 'react'
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Top from '../Component/Top'

const HomeScreen = () => {
  const navigate = useNavigate()
  const clicktext =()=>{
    console.log("login success")
    navigate("\login")
  }
  return (
    <div className='container'>
      <h1>Hello Welcome to the Invoice system</h1>lets go to explore<button onClick={clicktext} className='button'>login</button>
    </div>
  );
}

export default HomeScreen
