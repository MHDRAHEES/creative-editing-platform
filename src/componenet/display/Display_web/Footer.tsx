import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <footer className="bg-gray-950 text-gray-300 py-10 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
<div>
  <h3 className='text-sm font-semibold text-white mb-3'>
    About Us
  </h3>
  <p> Kavanur Town,  
Kavanur, Malappuram,  
Kerala 673639, India</p>
</div>
<div>
  <h3 className='text-sm font-semibold text-white mb-3'> Help</h3> 
  <ul>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/"}>Careers</Link></li>
    <li><Link to={"/"}>About Us</Link></li>
    <li><Link to={"/"}>Contact Us</Link></li>
  </ul>
</div>
<div>
  <h3 className='text-sm font-semibold text-white mb-3'> Locate Us</h3> 
  <a
  href="https://www.google.com/maps/place/Kavanur,+Kerala+673639/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 underline hover:text-orange-500"
>
  View on Google Maps
</a>
</div>
<div>
  <h3 className='text-sm font-semibold text-white mb-3'> Social Media</h3> 
  <ul>
    <li><Link to={"/"}></Link>WhatsApp</li>
    <li><Link to={"/"}></Link>FaceBook</li>
    <li><Link to={"/"}></Link>Instagram</li>
  </ul>
</div>
    </div>
  </footer>
  )
}

export default Footer