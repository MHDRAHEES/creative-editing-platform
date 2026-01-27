import  { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SBtoast from '../ToastMessage/toast';
// import SBToast from '../ToastMessage/toast';
// import { useDispatch } from "react-redux";


function login() {
    const navigate=useNavigate();
    // const dispatch = useDispatch();
    // const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const[loading,setLoading]=useState(false)
    // const [isLogin,setLogin]=useState(false)
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
   localStorage.setItem("email",email)
    // const login = !!data.token; 
    // setLogin(true)
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
    <div className='flex w-full  h-screen'>
      <div className='relative text-white w-3/4 h-screen  bg-[url(public/pexels-rquiros-2330137.jpg)] bg-cover bg-center'>
        <div className='text-white flex flex-col items-center text-center mt-130'>
          <h3 className='font-serif text-8xl'>Welcome Back</h3>
          <h1 className='font-mono text-5xl'>Step into your world</h1>
          <p>Access your projects, continue your story, and make every moment count.</p>
        </div>
      </div>
        <div className='flex w-1/4 bg-gradient-to-l from-neutral-600 via-neutral-900 to-neutral-950 h-screen justify-center items-center'> 
            <div className='bg-gradient-to-br from-slate-400 via-slate-800 to-slate-900 rounded-xl shadow-2xl p-8 rounded-lg shadow-lg w-80'>
                <h2 className='text-2xl font-bold mb-6 text-center text-white'>Login</h2>
               {/* <label className='text-white'>Name</label>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e)=>{setName(e.target.value);
                    }}
                    className='w-full mb-4 p-2 border border-gray-300 rounded' /> */}
               <label className='text-white'>Email <span className='text-red-600'>*</span></label>
                <input
                    type='email'
                    required
                    placeholder='Email'
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className='w-full mb-4 p-2 border border-gray-300 rounded placeholder:text-white text-white  ' />
                <label className='text-white'>Password <span className='text-red-600'>*</span></label>
                <input
                    type='password'
                    required
                    placeholder='password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className='w-full mb-4 p-2 border border-gray-300 rounded placeholder:text-white text-white' />
                <div className="flex justify-center items-center gap-4 mt-4">
                    <button 
                    onClick={handleLogin}
                    className="rounded    bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 text-white text-sm px-4 py-2">
                      {loading ? "Logging in..." : "Submit"}
                    </button>
                    <h4 onClick={(()=>navigate("/signup"))}
                    className="text-sm font-semibold text-white cursor-pointer hover:underline">
                        Sign up
                    </h4>
                </div>


            </div>
            </div>
        </div>
    )
}

export default login