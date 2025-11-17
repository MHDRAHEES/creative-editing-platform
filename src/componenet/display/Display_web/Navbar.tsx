import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaShoppingCart, } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";


function Navbar() {
  const navigate=useNavigate();
  return (
    <div className='flex bg-gray-100 h-20'>
      <nav className='bg-white text-white p-4 flex justify-between items-center w-full'>
        <div className='flex'>
          <img
          src='public/jt.jpg'
          alt='logo'
          className='w-25 h-18'
          />
          <h1 className='flex  items-center font-extrabold text-lg italic font-serif text-stone-900 '>Just Think_s</h1>
        </div>
        
        <ul className='list-none'>

          <li 
          onClick={(()=>navigate('/login'))}
          className='inline-block mx-4 text-black cursor-pointer'>
            <FaUser/>
            <span>Login</span>
          </li>
          <li className='inline-block mx-4 text-black cursor-pointer' onClick={(()=>navigate("/"))}>
            <FaHome/>
            <span>Home</span>
          </li>
          <li className='inline-block mx-4 text-black cursor-pointer' onClick={(()=>navigate("/cart"))}>
            <HiOutlineLogout/>
            <span>Exit</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar