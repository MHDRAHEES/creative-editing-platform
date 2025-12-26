import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SBtoast from '../ToastMessage/toast';
import SBToast from '../ToastMessage/toast';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/authSlice";

function login() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const[loading,setLoading]=useState(false)
const handleLogin = async () => {
  setLoading(true)
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await res.json()
    console.log(data, "login response")
    if (!res.ok) {
        SBtoast.show(data.message || "Login failed", "error");
        return;
      }

    if (data.success) {
    localStorage.setItem("token", data.token);



      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );
console.log("DISPATCHED USER:", data.token);
     SBtoast.show("Login successful", "success");
      setTimeout(() => {
          navigate("/");
        }, 1200)
    }
  } catch (error) {
      SBtoast.show("Invalid email or password", "error");
    }finally{
      setLoading(false)
    }
}

    return (
        <div className='flex w-full justify-center items-center h-screen bg-[url("background_blue.jpg")] bg-repeat-round'>
            <div className='bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 rounded-xl shadow-2xl p-8 rounded-lg shadow-lg w-80'>
                <h2 className='text-2xl font-bold mb-6 text-center text-green-700'>Login</h2>
               <label>Name</label>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e)=>{setName(e.target.value);
                    }}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' />
               <label>Email <span className='text-red-600'>*</span></label>
                <input
                    type='email'
                    required
                    placeholder='Email'
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' />
                <label>Password <span className='text-red-600'>*</span></label>
                <input
                    type='password'
                    required
                    placeholder='password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' />
                <div className="flex justify-center items-center gap-4 mt-4">
                    <button 
                    onClick={handleLogin}
                    className="rounded bg-blue-600 text-white text-sm px-4 py-2">
                      {loading ? "Logging in..." : "Submit"}
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