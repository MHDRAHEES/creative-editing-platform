import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SBtoast from '../ToastMessage/toast';
// import { Target } from 'lucide-react';
// import SBToast from '../ToastMessage/toast';

function signup() {
  const navigate=useNavigate();
  const API_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";
  const [fullName,seFullName]=useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
  // const [description, setDescription] = useState("")
  // const [categoryName, setCategoryName] = useState("")
const handleSubmit = async () => {
  if (!email&&!fullName&&!password){
     SBtoast.show('All fields required','warning')
     return;
  }
  try {
    const res = await fetch(`${API_URL}/api/auth/signup`, {
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
    <div className='flex w-full  h-screen'>
      <div className='relative text-white w-3/4 h-screen  bg-[url(public/pexels-rquiros-2330137.jpg)] bg-cover bg-center'>
        <div className='text-white flex flex-col items-center text-center mt-130'>
        <h3 className='font-serif text-8xl'>Join Us</h3>
        <h1 className='font-mono text-5xl'>Start your journey</h1>
        <p>Create your account, unleash your creativity, and let your story come alive.</p>
        </div>
      </div>
      <div className='flex w-1/4 bg-gradient-to-l from-neutral-600 via-neutral-900 to-neutral-950 h-screen justify-center items-center'>
        <div className='bg-gradient-to-br from-slate-400 via-slate-800 to-slate-900  p-8 rounded-lg shadow-lg w-80'>
            <h3 className='text-2xl font-bold mb-6 text-center text-white'>Sign up</h3>
             <label className='text-white'>Name <span className='text-red-600'>*</span></label>
            <input
            type='text'
            required
            placeholder='Name'
            onChange={(e)=>seFullName(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded placeholder:text-white'/>
             <label className='text-white'>Email <span className='text-red-600'>*</span></label>
            <input
            type='email'
            required
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded placeholder:text-white'/>
            <label className='text-white'>Password <span className='text-red-600'>*</span></label>
            <input
            type='password'
            placeholder='Password'
            required
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded placeholder:text-white'/>
            <label className='text-white'>Mobile Number</label>
            <input
            type='text'
            placeholder='Phone Number'
            maxLength={10}
            onChange={(e)=>setMobile(e.target.value)}
            className='w-full mb-4 p-2 border border-gray-300 rounded placeholder:text-white '/>
            <div className='flex justify-center'>
                <button onClick={handleSubmit} className='rounded bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 p-2 text-white'>Submit</button>
            </div>
            
        </div>
       </div>
    </div>
  )
}

export default signup