import Navbar from './componenet/Display_web/Navbar'
import Content from './componenet/Maincontent/Content'
import Sidebar from './componenet/Sidebar/Sidebar'
import Footer from './componenet/Display_web/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './componenet/Login/login'
import Favourite from './componenet/Favourite/favourite'
import Signup from './componenet/Signup/signup'
// import Leftbar from './componenet/Sidebar/Leftbar/leftbar'
import Image from './componenet/Maincontent/Childcontent/MediaDetails/iamge'
import Video from './componenet/Maincontent/Childcontent/MediaDetails/video'
import Booking from './componenet/Booking/booking'
import Input_box from './componenet/Booking/input_box'
import Users from './componenet/Users/users'
import Final from './componenet/Booking/final'
import BookingDetails from './componenet/Booking/bookingDetails'
function App() {
  const location=useLocation();
  const ishidden=location.pathname ==='/login' || location.pathname ==='/favourite'|| location.pathname ==='/signup' || location.pathname==="/image"|| location.pathname==="/video"|| location.pathname==='/booking'
  || location.pathname==='/input_box' || location.pathname==='/users' || location.pathname==='/success' || location.pathname==='/booking_details' ;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourite />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/image" element={<Image/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/input_box' element={<Input_box/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/success' element={<Final/>}/>
        <Route path='/booking_details' element={<BookingDetails/>}/>
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
