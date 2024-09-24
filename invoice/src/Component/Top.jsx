import React from 'react'
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
      
      
    </div>
  )
}
}

export default Top
