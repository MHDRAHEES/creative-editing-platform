import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SBtoast from '../ToastMessage/toast';
import { Target } from 'lucide-react';
import SBToast from '../ToastMessage/toast';

function signup() {
  const navigate=useNavigate();
  const [fullName,seFullName]=useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
  const [description, setDescription] = useState("")
  const [categoryName, setCategoryName] = useState("")
const handleSubmit = async () => {
  if (!email&&!fullName&&!password){
     SBtoast.show('All fields required','warning')
     return;
  }
  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        mobile,
        password,
      }),
    })

    const data = await res.json()
    const success = res?.status === 200;
 
    if (!success) {
      SBtoast.show('Invalid Signup','error')
     return;
    }
    if(success){
      SBtoast.show('Signup Success','success')
      navigate('/')
      
    }
   localStorage.setItem('token',data?.token);
    console.log("Success:", data)
  } catch (error) {
    console.error("Error:", error)
  }
}


  return (
    <div className='flex w-full justify-center items-center h-screen bg-[url("background_blue.jpg")] bg-repeat-round'>
        <div className='bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 p-8 rounded-lg shadow-lg w-80'>
            <h3 className='text-2xl font-bold mb-6 text-center text-green-700'>Sign up</h3>
             <label>Name <span className='text-red-600'>*</span></label>
            <input
            type='text'
            required
            placeholder='Name'
            onChange={(e)=>seFullName(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
             <label>Email <span className='text-red-600'>*</span></label>
            <input
            type='email'
            required
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <label>Password <span className='text-red-600'>*</span></label>
            <input
            type='password'
            placeholder='Password'
            required
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <label>Mobile Number</label>
            <input
            type='text'
            placeholder='Phone Number'
            maxLength={10}
            onChange={(e)=>setMobile(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <div className='flex justify-center'>
                <button onClick={handleSubmit} className='rounded bg-blue-800 p-2 text-white'>Submit</button>
            </div>
            
        </div>
    </div>
  )
}

export default signup