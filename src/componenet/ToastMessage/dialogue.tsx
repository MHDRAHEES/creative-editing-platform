import React from 'react'

type props={
onConfirm:()=>void;
onCancel:()=>void;

}

export default function ExitDialoge({onConfirm,onCancel}:props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h2 className="text-lg text-black font-semibold text-center mb-4">
          Are you sure you want to Leave?
        </h2>
        
      <div className='flex justify-end gap-4 mt-6'>
        <button
        className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
        onClick={onConfirm}
        >Yes</button>
        <button
        className='bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400' 
        onClick={onCancel}
        >No</button>
      </div>
        </div>
    </div>
  )
}
