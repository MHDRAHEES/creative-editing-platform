import { Check } from "lucide-react";
import BookingButton from "../Modal/booking_button";
import { useNavigate } from "react-router-dom";

export default function SuccessUI() {
  const navigate=useNavigate();
  const handleClose=()=>{
    navigate('/')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 via-indigo-700 to-slate-950 px-4">
      
      {/* Left Text */}
      <div className="hidden md:block text-white mr-16">
        <h1 className="text-6xl font-light leading-tight">
          feel <br />
          <span className="text-2xl tracking-widest">SUCCESSFULL</span> <br />
          with us
        </h1>
      </div>

      {/* Mobile Card */}
      <div className="w-[320px] h-[620px] rounded-[40px] bg-white backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-white relative">
        
        {/* Check Icon */}
        <div className="w-20 h-20 rounded-full bg-green-900 flex items-center justify-center mb-6">
          <Check size={36} className="text-white" />
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold mb-2 text-black">
          Your message has <br /> been sent
        </h2>
        <p className="text-sm text-white/70 text-center mb-10 text-black">
          Thank you for sharing your thoughts
        </p>
        <div className="absolute bottom-10 px-10 py-2"><BookingButton label="Close" onClick={handleClose}/></div>
       
      </div>
    </div>
  );
}
