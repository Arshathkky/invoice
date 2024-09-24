import React, {  useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate();
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/api/login/login', { username,password });
        if(response.data.status === "success"){
          navigate('/dashboard');
        }
        else{
          alert("fails")
        }
    } catch (err) {
        console.error(err); // This will now catch and log any errors
    }
};

 
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-group'>
          <label htmlFor='username'>User Name</label>
          <input 
              type='text' 
              id="username"
              onChange={(e)=>setUserName(e.target.value)} 
              name="username"
              value={username} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input 
              type='password' 
              onChange={(e)=>setPassword(e.target.value)} 
              name='password' 
              value={password}
              />
        </div>
        <button type='submit'  className='button' >Login</button>
      </form>
    </div>
  );
}

export default Login;
