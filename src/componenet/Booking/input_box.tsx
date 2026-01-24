import React, { useState,useEffect } from 'react'
import { data, useLocation, useNavigate } from 'react-router-dom'
import BookingButton from '../Modal/booking_button';
import SBToast from '../ToastMessage/toast';
import { ArrowLeft } from 'lucide-react';
interface User {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  isLOgin?: boolean;
}
function InputBox() {
  const location = useLocation();
  const navigate = useNavigate();

  const boxname = location?.state?.selectBox || "";

  const [category, setCategory] = useState(boxname);
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [venue, setVenue] = useState(""); 
  const [venue_type, setVenueType] = useState("");
  const [date,setDate]=useState("");
  const [session_time,setSessionTime]=useState("");
  const [user, setUser] = useState<User | null>(null);

  const token = localStorage.getItem("token");
  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.user);
        setFullName(data.user.fullName);
        setEmail(data.user.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) getUser();
  }, [token]);

  
const handleSubmit = async () => {
  if (!fullName || !email || !category || !phone || !description) {
    SBToast.show("All fields are required", "warning");
    return;
  }

  if (!token) {
    SBToast.show("Login required", "error");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fullName,
        email,
        category,
        phone,
        description,
        session_time,
        venue,
        venue_type,
        date

      }),
    });
    const data = await res.json();
    if (data.success) {
      SBToast.show("Booking successfully", "success");
      setTimeout(() => navigate("/success"), 1200);
    } else {
      SBToast.show(data.message || "Booking failed ", "error");
    }
  } catch (error) {
    console.error(error);
    SBToast.show("Server error ", "error");
  }
};


 return (
  <div className="min-h-screen bg-gray-50 p-6">

    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
     <ArrowLeft className="w-5 h-5" onClick={()=>navigate(-1)} />
      <h1 className="text-xl font-semibold">For Booking</h1>
    </div>

    {/* Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="bg-white p-6 rounded-lg shadow-sm min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Salutation */}
        <div>
          <label className="text-sm text-gray-600">Salutation</label>
          <select className="w-full mt-1 p-2 border rounded-md">
            <option>Select Salutation</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
          </select>
        </div>

        {/* First Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
            <span className='text-red-600'>*</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="First Name"
            defaultValue={user?.fullName || ""}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Last Name */}
       <div>
          <label className="text-sm text-gray-600">Mobile Number</label>
            <span className='text-red-600'>*</span>
          <input
            type="text"
            maxLength={10}
            className="w-full mt-1 p-2 border rounded-md"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="text-sm text-gray-600">Category</label>
            <span className='text-red-600'>*</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Company Name"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />
        </div>

        {/* Primary Email */}
        <div>
          <label className="text-sm text-gray-600"> Email</label>
            <span className='text-red-600'>*</span>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded-md"
            defaultValue={user?.email || email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Secondary Email */}
        <div>
          <label className="text-sm text-gray-600">Place</label>
            <span className='text-red-600'>*</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            onChange={(e)=>setVenue(e.target.value)}
          />
        </div>

         {/* Work Phone */}
         <div>
           <label className="text-sm text-gray-600">
             Session Timing <span className="text-red-600">*</span>
           </label>

           <select className="w-full mt-1 p-2 border rounded-md"
           onChange={(e)=>setSessionTime(e.target.value)}>
             <option value="">Select Session Timing</option>
             <option value="morning">Morning</option>
             <option value="afternoon">Afternoon</option>
             <option value="evening">Evening</option>
             <option value="night">Night</option>
           </select>
         </div>


        {/* Mobile */}
         <div>
          <label className="text-sm text-gray-600">Venue Type</label>
            <span className='text-red-600'>*</span>
          <select className="w-full mt-1 p-2 border rounded-md"
          onChange={(e)=>setVenueType(e.target.value)}>
             <option value="">Select Venue Type</option>
             <option value="house">House</option>
             <option value="auditorium">Auditorium</option>
          </select>
         
          
        </div>

        {/* 📅 Date Picker */}
        <div>
          <label className="text-sm text-gray-600">Booking Date</label>
          <span className='text-red-600'>*</span>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded-md"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Credit Limit */}
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md h-20"
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

      </div>

      {/* Submit */}
      <div className="flex justify-center pb-0">
      <BookingButton/>
      </div>
    </form>
  </div>
);


}

export default InputBox