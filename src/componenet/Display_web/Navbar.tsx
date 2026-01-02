import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaShoppingCart,FaUserSecret } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import ExitDialoge from '../ToastMessage/dialogue';
import SBToast from '../ToastMessage/toast';
interface User {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
}

function Navbar() {
  const navigate=useNavigate();
  const [showAlert,setShowAlert]=useState(false)
  const [user, setUser] = useState<User | null>(null);

  const token =localStorage.getItem("token")
  const getUser =async ()=>{
try{
const res=await fetch("http://localhost:5000/api/auth/profile",{
  method:'GET',
  headers:{
     Authorization: `Bearer ${token}`,
  }
})
const data=await res.json();
if(data.success){
  setUser(data.user)
}

}catch(error){
  console.log(error)
}
  }

    useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  const handleSignout=()=>{
    localStorage.removeItem('token');
    setUser(null);
    setShowAlert(false)
    SBToast.show("Logged out successfully",'success');
    navigate('/')
  }
 
 
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
        {user ?(
           <li 
          onClick={(()=>navigate('/login'))}
          className='inline-block mx-4 text-black cursor-pointer'>
            <FaUser/>
            <span>{user?.fullName}</span>
          </li>
        ):   <li 
          onClick={(()=>navigate('/login'))}
          className='inline-block mx-4 text-black cursor-pointer'>
            <FaUser/>
            <span>Login</span>
          </li>}
       
          <li className='inline-block mx-4 text-black cursor-pointer' onClick={(()=>navigate("/"))}>
            <FaHome/>
            <span>Home</span>
          </li>
           <li className='inline-block mx-4 text-black cursor-pointer' onClick={(()=>navigate("/users"))}>
            <FaUserSecret />
            <span>Users</span>
          </li>
          {user &&          
          <li className='inline-block mx-4 text-black cursor-pointer' onClick={()=>setShowAlert(true)}>
            <HiOutlineLogout/>
            <span>Sign Out</span>
          </li>}

            {showAlert && (
          <ExitDialoge
          onConfirm={handleSignout}
          onCancel={() => setShowAlert(false)}
        />)}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar