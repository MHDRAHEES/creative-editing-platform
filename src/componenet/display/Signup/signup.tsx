import React from 'react'

function signup() {
  return (
    <div className='flex w-full justify-center items-center h-screen bg-[url("background_blue.jpg")] bg-repeat-round'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-80'>
            <h3 className='text-2xl font-bold mb-6 text-center text-green-700'>Sign up</h3>
            <input
            type='text'
            required
            placeholder='Name'
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <input
            type='email'
            required
            placeholder='Email'
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <input
            type='password'
            placeholder='Password'
            required
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <input
            type='text'
            placeholder='Phone Number'
            maxLength={10}
            className='w-full mb-4 p-2 border border-gray-300 rounded'/>
            <div className='flex justify-center'>
                <button className='rounded bg-blue-600 p-2 text-white'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default signup