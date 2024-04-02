import React from "react";

const Manager = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="bg-slate-200 mycontainer">
        <h1 className="text-4xl font-bold text-center">
       
          <span className="text-green-700"> &lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>
        
          <div className="flex flex-col p-4  gap-5 text-black">
            <input
              className="rounded-full border border-green-400 w-full  p-4 py-1"
              type="text"
            />
            <div className="flex w-full justify-between gap-5">
            <input
              className="rounded-full border border-green-400 w-full text-black p-4 py-1"
              type="text"
            />
            <input
              className="rounded-full border border-green-400 w-full text-black p-4 py-1"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
