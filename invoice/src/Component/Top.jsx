const {withNativeWind} = require('nativewind/metro');
import React from 'react'
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import { Link } from 'react-router-dom'
import { useNavigate,useLocation } from 'react-router-dom'
import Dashboard from '../Screen/Dashboard';

const Top = () => {
  const navigate = useNavigate();
  const callback = ()=>{
      navigate(-1);
  }
  const location = useLocation();
  if(location.pathname === '/login' || location.pathname === '/'){
    return null;
  }
  else {

    
    return (
      <div className='top-container'>
        <button className='button' onClick={callback}> Back</button>
        <button className='button'><Link className='link' to="/dashboard">Home</Link></button>
        <button className='button'><Link className='link' to="/">Sign Out</Link></button>
      </div>
    );
}
}

export default Top
