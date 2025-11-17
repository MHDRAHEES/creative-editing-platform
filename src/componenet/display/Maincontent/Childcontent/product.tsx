import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
    const navigate = useNavigate();

      

    const handleProductDetails = () => {
        navigate('/productdetails');
    }


    return (
      
        <div className="flex w-full  min-h-screen bg-slate-900 py-8">
            <div className="flex w-1/3 bg-gray-900 border-2 border-white justify-center items-center flex-col p-4">
                <button onClick={handleProductDetails} type="button" className="  mb-2 self-start ml-[31%] text-white bg-blue-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
                <div className="w-16 h-[2px] bg-orange-500 self-start ml-[31%]"></div>
                <h3 className="text-xl text-white italic font-serif mt-6 self-start ml-[31%] mb-2">Beautiful Bride</h3>
                <p className="text-sm text-zinc-500">The most important moment of thier <br /> lives magically captured</p>
            </div>

            <div className="flex w-1/3 bg-slate-900 border-2 border-white">
            <img src="public/medium-shot-unknown-woman-posing.jpg" alt="content" className="w-full min-h-screen"/>
            </div>
            <div className="flex w-1/3 bg-gray-900 border-2 border-white justify-center items-center flex-col p-4">
                <button onClick={handleProductDetails} type="button" className="  mb-2 self-start ml-[31%] text-white bg-blue-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
                <div className="w-16 h-[2px] bg-orange-500 self-start ml-[31%]"></div>
                <h3 className="text-xl text-white italic font-serif mt-6 self-start ml-[31%] mb-2">Natural Lightness</h3>
                <p className="text-sm text-zinc-500 self-start ml-[31%]">Unique exposure with a  great <br /> sense of depth</p>
            </div>
            
        </div>

    );
}

export default Product;
