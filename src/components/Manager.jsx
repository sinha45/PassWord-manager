import React from "react";
import { useRef } from "react";

const Manager = () => {
const ref = useRef()
  const showPassword = () =>{
    alert('show password');
    if(ref.current.src.includes("icons/eyecross.png") ){
    ref.current.src = "icons/eye.png"}
    else{
      ref.current.src = "icons/eyecross.png"
    }
  }

  return (
    <>
     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className=" mycontainer">
        <h1 className="text-4xl font-bold text-center text-white">
          <span > &lt;</span>
          Pass
          <span className="text-green-400">OP/&gt;</span>
        </h1>
        <p className="text-gray-300
        
        
        text-lg text-center">
          Your Own Password Manager
        </p>

        <div className="flex flex-col p-4  gap-5 text-black items-center">
          <input placeholder="Enter website URL"
            className="rounded-full border border-green-400 w-full  p-4 py-1"
            type="text"
          />
          <div className="flex w-full justify-between gap-5">
            <input placeholder="Enter UserName"
              className="rounded-full border border-green-400 w-full text-black p-4 py-1"
              type="text"
            />
            <div className="relative">
            <input placeholder="Enter Password"
              className="rounded-full border border-green-400 w-full text-black p-4 py-1"
              type="text"
            />
            <span className="absolute right-[8px] top-[4px] cursor-pointer" onClick={showPassword}>
              <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
            </span>
            </div>
          </div>
          
          <button className="flex justify-center gap-2 items-center bg-green-600 rounded-full px-9 py-2 w-fit border border-1 border-green-300  hover:bg-green-400"><lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>Add Password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;
