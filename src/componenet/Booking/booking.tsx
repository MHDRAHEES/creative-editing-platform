import React from 'react'
import { useNavigate } from 'react-router-dom'

const types=['Wedding','Birthday','Vlog','Other']

function booking() {
  const navigate=useNavigate();
  const handleBooking=(type:any)=>{
    navigate('/input_box',{
      state:{selectBox:type}
    })
  }
  return (
    <div className='flex justify-center items-center min-h-screen  bg-[url("background_blue.jpg")] bg-repeat-round'>
      <div className='grid grid-cols-4 gap-4'>
      {types.map((type,index)=>
      <div 
      onClick={(()=>handleBooking(type))}
      key={index}
       className="w-48 h-48  bg-gradient-to-br from-orange-400 via-orange-600 to-orange-900 rounded-lg flex items-center justify-center text-white font-semibold hover:from-orange-400 hover:to-orange-700   shadow-lg   transition-all duration-300">
     {type}
    </div>)}
   
      </div>
    </div>
  )
}

export default booking