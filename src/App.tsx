import React from 'react'
import Navbar from './componenet/Display_web/Navbar'
import Content from './componenet/Maincontent/Content'
import Sidebar from './componenet/Sidebar/Sidebar'
import Footer from './componenet/Display_web/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './componenet/Login/login'
import Cart from './componenet/Cart/cart'
import Signup from './componenet/Signup/signup'
import Leftbar from './componenet/Sidebar/Leftbar/leftbar'
import Productdetails from './componenet/Maincontent/Childcontent/Productdetails'
import Booking from './componenet/Booking/booking'
import Input_box from './componenet/Booking/input_box'
function App() {
  const location=useLocation();
  const ishidden=location.pathname ==='/login' || location.pathname ==='/cart'|| location.pathname ==='/signup' || location.pathname==="/productdetails"|| location.pathname==='/booking'
  || location.pathname==='/input_box';
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/productdetails" element={<Productdetails/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/input_box' element={<Input_box/>}/>
      </Routes>
      
      {!ishidden &&(
      <>
      <Content/>
      <Sidebar/>
      <Footer/>
      </>
   
      )}
      </div>
  )
}

export default App
