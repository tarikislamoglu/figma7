import React from "react";

const App = () => {
  return (
    <div className="max-h-screen h-screen  w-full bg-[url('/background.png')] bg-cover bg-center flex justify-center items-center">
      <div className="circle hidden md:block border-[#00000040] absolute top-[30px] left-[300px] rounded-full border-[35px] w-[250px] h-[250px]"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="w-2/3 md:w-1/2 lg-2/5 drop-shadow-lg inset-0 bg-white/30 text-[#FFFFFF]   p-12 space-y-5 rounded-2xl ">
        <h3 className="text-center font-bold drop-shadow-lg text-[30px]  ">
          LOGIN
        </h3>
        <input
          placeholder="Username"
          className=" px-2 py-1 bg-[#FFFFFF33] w-full drop-shadow-lg"
        />
        <input
          placeholder="Password"
          className=" px-2 py-1 bg-[#FFFFFF33] w-full drop-shadow-lg"
        />
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-5  lg:space-y-0">
          <button className="bg-[#000000B2] lg:w-1/2 w-full px-2 py-1">
            LOGIN
          </button>
          <div className="flex flex-col lg:items-end  lg:w-1/2 w-full items-center space-y-5  lg:space-y-0">
            <a className="text-center" href="">
              Forgot Password
            </a>
            <a href="">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
