import React from 'react'
import { FaFacebookSquare ,FaWhatsapp, FaInstagram } from "react-icons/fa";
interface CategoryProps{
    data:any[]
}
function Category(data:CategoryProps) {
  return (
    <div className='flex justify-start bg-[url(public/pexels-rquiros-2330137.jpg)]  items-top  min-h-screen bg-repeat-round'>
      <ul className='flex space-x-6 text-white text-2x p-5'> 
        <li><FaWhatsapp className=' text-5xl'/></li>
        <li><FaFacebookSquare className=' text-5xl'/></li>
        <li><FaInstagram className=' text-5xl'/></li>
      </ul>
      <div className='text-white flex flex-col items-center text-center mt-130'>
        <h3 className='font-serif text-8xl'>Welocome To</h3>
        <h1 className='font-mono text-5xl'>Our world</h1>
        <p>Where moments become masterpieces. Edit your videos, craft your story, and let your style shine.</p>
      </div>
    </div>
  )
}

export default Category