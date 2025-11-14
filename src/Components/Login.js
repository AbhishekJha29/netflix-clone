import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../utils/constant';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = () => {
    setIsLogin(!isLogin);
  }

  const getInputData = async (e)=>{
    e.preventDefault();
    if (isLogin) {
      const user = {email, password};
      try {
        const res = await axios.post(`${API_END_POINT}/login`,user);
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }else{
        const user = {fullName, email, password};
        console.log(user)
    try {
      const res = await axios.post(`${API_END_POINT}/register`,user)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    }

     setFullName("");
     setEmail("");
     setPassword("");
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg' alt='banner' />
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Sign Up"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          }
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin ? "Login" : "Signup"}</button>
          <p className='text-white mt-2'>{isLogin ? "New to Netflix" : "Already have an account"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Sign Up" : "Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
