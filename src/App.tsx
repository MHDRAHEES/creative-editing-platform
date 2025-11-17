import React from 'react'
import Navbar from './componenet/display/Display_web/Navbar'
import Content from './componenet/display/Maincontent/Content'
import Sidebar from './componenet/display/Sidebar/Sidebar'
import Footer from './componenet/display/Display_web/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './componenet/display/Login/login'
import Cart from './componenet/display/Cart/cart'
import Signup from './componenet/display/Signup/signup'
import Leftbar from './componenet/display/Sidebar/Leftbar/leftbar'
import Productdetails from './componenet/display/Maincontent/Childcontent/Productdetails'
function App() {
  const location=useLocation();
  const ishidden=location.pathname ==='/login' || location.pathname ==='/cart'|| location.pathname ==='/signup' || location.pathname==="/productdetails";
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="productdetails" element={<Productdetails/>}/>
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
