import React from "react";

const ExpireTokenPage = ({ expireTokenMessage,toggle}) => {
  return (
    <div className="w-full h-[92vh] flex items-center justify-center bg-[rgba(225,225,225,0.4)] z-10 absolute left-0 top-0">
      <div className="w-4/5 flex items-center justify-center h-4/5 bg-white rounded-xl relative ">
        <button className="absolute top-12 right-12 font-bold border px-3 py-2 border-green-500 rounded-lg text-green-500 hover:scale-105 transition-all" onClick={()=>{toggle()}}>
          X
        </button>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {expireTokenMessage}
        </h1>
      </div>
    </div>
  );
};

export default ExpireTokenPage;
