import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BookingButton from '../Modal/booking_button';




function input_box() {
const location=useLocation();
const boxname=location?.state?.selectBox
const [categoryName,setCategoryName]=useState(boxname)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
 
const getUser=async()=>{
  
}
  return (
    <div className='flex justify-center items-center min-h-screen  bg-[url("background_blue.jpg")] bg-repeat-round'>
         <form className='grid gap-1  p-8 w-96 bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 rounded-xl shadow-2xl'>
            <h2 className=' flex justify-center font-bold text-3xl'> For Booking</h2>
             <label>Name <span className='text-red-600'>*</span></label>
            <input
            type='string'
            placeholder='Name'
            required
            value={fullName}
            onChange={((e)=>setFullName(e.target.value))}
            className="p-3 rounded-md outline-1 focus:ring-2 focus:ring-orange-950 mb-4 p-2 "/>
             <label>Email <span className='text-red-600'>*</span></label>
            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={((e)=>setEmail(e.target.value))}
            required
             className="p-3 rounded-md outline-1 focus:ring-2 focus:ring-orange-950 mb-4 p-2"/>
             <label>Mobile Number  <span className='text-red-600'>*</span></label>
               <input
            type='string'
            maxLength={10}
            required
            placeholder='Mobile'
             className="p-3 rounded-md outline-1 focus:ring-2 focus:ring-orange-950"/>
              <label>Category <span className='text-red-600'>*</span></label>
               <input
            type='string'
            value={boxname}
            placeholder='Category'
            onChange={((e)=>setCategoryName(e.target.value))}
             className="p-3 rounded-md outline-1 focus:ring-2 focus:ring-orange-950"/>
             <label>Description</label>
               <input
            type='string'
            placeholder='Description'
             className="p-3 rounded-md outline-1 focus:ring-2 focus:ring-orange-950"/>
             <div className='flex justify-center mt-5'>
                <BookingButton/>
             </div>
        </form>
    </div>
  )
}

export default input_box