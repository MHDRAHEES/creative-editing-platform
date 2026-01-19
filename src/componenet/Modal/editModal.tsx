import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    fullName: string;
    email: string;
    phone?: string;
  };
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  if (!isOpen) return null;
  const navigate=useNavigate()
  const [fullName,setFullName]=useState("")
  const [phone,setPhone]=useState("")
 const handleEdit=()=>{
 console.log('edit success');
 navigate('/') 
 }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      {/* Modal Box */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            Edit User
          </h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={user?.fullName}
              onChange={(e)=>setFullName(e?.target?.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="text"
              defaultValue={user?.phone}
              onChange={(e)=>setPhone(e?.target?.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-5 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
          onClick={handleEdit}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
