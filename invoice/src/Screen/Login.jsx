import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <div className='login-form'>
        <div className='form-group'>
          <label htmlFor='username'>User Name</label>
          <input type='text' id='username' name='username' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
        </div>
        <button  className='button' ><Link to={'/dashboard'} className='link'>Login</Link></button>
      </div>
    </div>
  );
}

export default Login;
