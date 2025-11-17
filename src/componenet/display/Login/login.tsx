import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function login() {
    const navigate=useNavigate();
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const handleLogin=()=>{
      if(name==="rahees"&& email==="rahees@gmail.com" && password==="rahees@123" ){
        
        return  navigate("/")
      } else{
        alert()
      } 
   
    }
    
    
    return (
        <div className='flex w-full justify-center items-center h-screen bg-[url("background_blue.jpg")] bg-repeat-round'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-80'>
                <h2 className='text-2xl font-bold mb-6 text-center text-green-700'>Login</h2>
                <h4>name</h4>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={((e)=>{setName(e.target.value);
                    })}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' />
                <h4>email</h4>
                <input
                    type='email'
                    required
                    placeholder='Email'
                    onChange={((e)=>{setEmail(e.target.value)})}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' />
                <h4>password</h4>
                <input
                    type='password'
                    required
                    placeholder='password'
                    onChange={((e)=>{setPassword(e.target.value)})}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' />
                <div className="flex justify-center items-center gap-4 mt-4">
                    <button 
                    onClick={handleLogin}
                    className="rounded bg-blue-600 text-white text-sm px-4 py-2">
                        Submit
                    </button>
                    <h4 onClick={(()=>navigate("/signup"))}
                    className="text-sm font-semibold text-blue-700 cursor-pointer hover:underline">
                        Sign up
                    </h4>
                </div>


            </div>
        </div>
    )
}

export default login