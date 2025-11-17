import React from 'react'


interface SidebarProps{
isOpen:boolean;
closeModal:()=>void;
position?:"left"|"Right";
width?:string;
children?:React.ReactNode;
}

const Sidebar:React.FC<SidebarProps> = ({
  isOpen,
  closeModal,
  position="left",
  width="250px",
  children,
}) => {
  return(
    <div
  className={`fixed top-0 min-h-screen bg-white  shadow-lg transition-transform duration-300 ease-in-out z-40
    ${position==="left"? "left-0":"right-0"}
    ${isOpen ? "translate-x-0": position==="left"? "-translate-x-full":"translate-x-full"}`}
    style={{width}}
    >     
    <button 
      className='absolute top-3 right-3 bg-red-500 text-white rounded px-2 py-1'
       onClick={closeModal}>close</button>
       <div className='p-4'>{children}</div>
    </div>

);
};

export default Sidebar;
