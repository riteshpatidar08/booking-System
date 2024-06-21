import React, { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { login } from './redux/slices/LoginSlice';
import { useNavigate } from 'react-router-dom';
import { CSpinner } from '@coreui/react';


const Login = () => {

  const {role , token ,loading} = useSelector((state)=> state.login)


  console.log(role,token)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
   
    if (role === 'admin') {
      navigate('/dashboard');
    } 
  }, [role]);


  const [formData, setFormData] = useState({
    email: ' ',
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
    dispatch(login(formData));
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
        <button type="submit">{loading ? <CSpinner color="primary" /> : 'login'}</button>
      </form>
    </div>
  );
};

export default Login;
