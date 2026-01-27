// import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const leftbar = () => {
  const navigate=useNavigate();
  const fvt=()=>{
 navigate('/favourite')
  }
    const bookingDetailsButton=()=>{
 navigate('/booking_details')
  }
 return (
    <div>
      {/* Menu */}
      <ul className="px-6 space-y-6 font-semibold tracking-wide mt-15">
        <li className="cursor-pointer" onClick={fvt}>FAVOURITES</li>
        <li className="cursor-pointer" onClick={bookingDetailsButton}>MY BOOKING</li>

        {/* <li className="flex items-center justify-between cursor-pointer">
          CLUBS
          <ChevronDown size={18} />
        </li>

        <li className="cursor-pointer">PLAYERS</li>
        <li className="cursor-pointer">STANDINGS</li>
        <li className="cursor-pointer">STATISTICS</li>
        <li className="cursor-pointer">SPONSORS</li>
        <li className="cursor-pointer">FRANCHISE</li>
        <li className="cursor-pointer">NEWS & EVENTS</li>
        <li className="cursor-pointer">PROJECT GAME CHANGER</li> */}
      </ul>
       <div className="absolute bottom-6 left-6 flex gap-4 text-xl">
        <FaFacebookF className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
      </div>
    </div>
  );
}

export default leftbar

