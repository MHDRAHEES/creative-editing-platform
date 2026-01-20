import { ArrowLeft } from "lucide-react";
import { fetchBookingData } from "../../Redux/bookingSlice";
import type { RootState, AppDispatch } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import SBToast from "../ToastMessage/toast";

interface User {
  _id: string;
  fullName: string;
  email: string;
  role: "admin" | "user";
}

export default function BookingDetails() {
  const navigate=useNavigate();
  const dispatch=useDispatch<AppDispatch>()
  const bookingdata=useSelector((state:RootState)=>state.booking.bookingData)
  const token=localStorage.getItem('token')
  const users=useSelector((state:RootState)=>state.auth.users)as User[]

  useEffect(()=>{
    dispatch(fetchBookingData())
  },[dispatch])

  useEffect(()=>{

  },[bookingdata])

const id=
  useEffect(() => {
    if (token) {
      dispatch(fetchUsers(token));
    }
  }, [token, dispatch]);
  useEffect(() => {
  }, [users]);
const currentUser=localStorage.getItem('email')
const isAdmin = users.some(
  (user: any) => user.email === currentUser && user.role === 'admin'
);

const filteredBooking = isAdmin
  ? bookingdata
  : bookingdata.filter((item: any) => {
      return item.email === currentUser;
    });

const handleDelete = async (id:string) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/booking/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Delete failed");
    }

    SBToast.show("Booking deleted successfully", "success");
  } catch (error: any) {
    console.error(error);
    SBToast.show(error.message || "Something went wrong", "error");
  }
};

  return (
  <div className="min-h-screen bg-gray-100 p-4">
         {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <ArrowLeft className="w-5 h-5" onClick={()=>navigate(-1)} />
          <h1 className="text-lg font-semibold">Booking Details</h1>
        </div>

        {/* Status */}
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
            Completed
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            Upcoming
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700">
            Canceled
          </span>
        </div>
    {filteredBooking.map((data: any, index: number) => (
      <div key={data._id || index} className="mb-6">
        {/* Booking Info */}
        <div className="bg-white rounded-xl p-4 shadow mb-4">
          <h2 className="font-semibold text-base">
            {data?.fullName || "--"}
          </h2>
          <p className="text-sm text-gray-500">
            {data?.email|| "--"}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">{data.date}</p>
            </div>
            <div>
              <p className="text-gray-500">Time</p>
              <p className="font-medium">{data.session_time}</p>
            </div>
            <div>
              <p className="text-gray-500">Venue</p>
              <p className="font-medium">{data.venue}</p>
            </div>
            <div>
              <p className="text-gray-500">Venue Type</p>
              <p className="font-medium">{data.venu_Type}</p>
            </div>
            <div>
              <p className="text-gray-500">Mobile Number</p>
              <p className="font-medium">{data.phone}</p>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-gray-200 rounded-xl p-4 shadow mb-6">
          <h3 className="font-semibold mb-3">Payment</h3>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Amount Paid</span>
            <span className="font-medium">₹{data.amount}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Method</span>
            <span className="font-medium">{data.paymentMethod}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Booking ID</span>
            <span className="font-medium">{data.bookingId}</span>
          </div>
        </div>

        {/* Actions */}
        {!isAdmin && (
          <div className="flex flex-col gap-3">
            <button className="bg-teal-600 text-white py-3 rounded-xl font-medium">
              Book Again
            </button>
            <button onClick={(()=>handleDelete(data._id))} className="border border-teal-600 text-teal-600 py-3 rounded-xl font-medium">
              Cancel Booking
            </button>
          </div>
                 )}
      </div>
    ))}
  </div>
);

}
