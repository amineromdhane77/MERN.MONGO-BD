import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 function Login() {
 
   
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>
      {console.log(result)
      if(result.data ==='Success'){
    navigate('/home')
  }
    })
    .catch(err=>console.log(err))
}




  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-10'>
<div className='bg-white p-3 rounded w-25'>
<h2>Login</h2>
<Form onSubmit={handleSubmit}>
       <div className="mb-3">
      <label htmlFor='email'>
        <strong>Email</strong>
        </label>
        <input
          
          type="email"
          placeholder="Entrer email"
          autoComplete='off'
          name='email'
          className='form-control rounded-0'
          onChange={(e)=>setEmail(e.target.value)}  
        />
       </div>
       <div className="mb-3">
      <label htmlFor='email'>
        <strong>password</strong>
        </label>
        <input
          
          type="password"
          placeholder="Entrer password"
          autoComplete='off'
          name='email'
          className='form-control rounded-0'
          onChange={(e)=>setPassword(e.target.value)}  
        />
       </div>
    
      
    <Button type="submit" className='btn btn-success w-100 rounded-0'>login</Button>
    </Form>
    <h3>already have a count</h3>
    <Link to='/register' type="submit" className='btn btn-default border w-100  rounded-0 text-decoration-none'>Singup</Link>

    </div>
    </div>
   
  )
}

  

export default Login;