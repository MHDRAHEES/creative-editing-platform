import React, { useEffect, useState } from "react";
import Category from "./Childcontent/Category";
import Ads from "./Childcontent/ads";
import Product from "./Childcontent/product";
import Leftbar from "../Sidebar/Leftbar/leftbar";
import RightBar from "../Sidebar/RightBar/RightBar";
import Sidebar from "../Modal/react-side-bar.d";
import Aboutphotography from "./Childcontent/Aboutphotography";

function Content() {
  const [products, setProducts] = useState([]);
  const [showLeftSidebar,setShowLeftSidebar]=useState(false)
  const [showRightSidebar,setshowRightSidebar]=useState(false)
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
const handleLeftShowBar=()=>{
  setShowLeftSidebar(!showLeftSidebar)
}
const handleRightShowbar=()=>{
 setshowRightSidebar(!showRightSidebar)
}

  return (
<div className="relative min-h-screen flex bg-white transition-all duration-300 overflow-hidden">
    <button
    className="fixed top-1/2 left-0 -translate-y-1/2 bg-orange-600 text-white p-3 rounded-r-lg shadow-md hover:bg-gray-700 transition"
    onClick={handleLeftShowBar}
    >
     {showLeftSidebar ? "←" : "→"}
    </button>
    <button
    className="fixed top-1/2 right-0 -translate-y-1/2 bg-orange-600 text-white p-3 rounded-l-lg shadow-md hover:bg-gray-700 transition"
    onClick={handleRightShowbar}>
     {showRightSidebar ? "→": "←"}
    </button>
   <Sidebar isOpen={showLeftSidebar} closeModal={()=>setShowLeftSidebar(false)}position="left">
      <h3 className="text-lg font-semibold"><Leftbar/></h3>
   </Sidebar>
   <Sidebar isOpen={showRightSidebar} closeModal={()=>setshowRightSidebar(false)} position="Right">
            <h3 className="text-lg font-semibold"><RightBar/></h3>
   </Sidebar>
    <div
        className={`flex-1  transition-all duration-300  bg-slate-900  ${
          showLeftSidebar && !showRightSidebar
            ? "ml-[250px]"
            : showRightSidebar && !showLeftSidebar
            ? "mr-[250px]"
            : showLeftSidebar && showRightSidebar
            ? "mx-[250px]"
            : ""
        }`}
    >
      <Category data={products} />
      <Aboutphotography/>
      <Ads data={products} />
      <Product  />
    </div>
 
    </div>
  );
}

export default Content;
