import React from 'react';
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { login } from './redux/slices/LoginSlice';
const Login = () => {
    const dispatch = useDispatch()
    
  const [formData, setFormData] = useState({
    email : ' ',
    password: '',
  });
  console.log(formData);
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
     e.preventDefault();
dispatch(login(formData))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
