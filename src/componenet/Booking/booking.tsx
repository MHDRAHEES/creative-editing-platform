import { ArrowLeft } from 'lucide-react';
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
      <div className='absolute top-30 left-4 cursor-pointer text-white  -translate-y-1/2 bg-orange-600 text-white p-3 rounded-l-lg shadow-md hover:bg-gray-700 transition'>
      <ArrowLeft className="w-5 h-5 " onClick={()=>navigate(-1)} />
      </div>
      
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