import React, { useState } from "react";

const Login = () => {
  const[IsLogin,setIsLogin] = useState(true)
  
  const LoginSignUpHandler = () =>{
    setIsLogin(!IsLogin)
    
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        {/* logo  */}
        <div>
          <img
            className="ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-t39_XEag9DvX0LaoksfHutS7GHs078AMiA&s"
            width={"500px"}
            alt="twitter-logo"
          />
        </div>
        <div className="my-5 font-semibold">
          <h1 className="text-6xl font-bold">Hapening now</h1>
        

        {/* form */}
        <div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">{!IsLogin? "Sign Up":"Login"}</h1>
          <form className="flex flex-col w-[60%]">
            {!IsLogin && (<>
            <input type="text" placeholder="Name" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"/>
            <input type="text" placeholder="Username" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
            </>)
            }
            
            <input type="text" placeholder="Email" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"/>
            <input type="text" placeholder="Password" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"/>

            <button className="py-2 my-4 bg-[#1D9Bf8] rounded-full text-lg text-white"> {IsLogin ? "Login" : "Sign Up"}</button>
            

            <h1>{ !IsLogin ? "ALready have an account?" : "Do not have an account?"} <span onClick={LoginSignUpHandler} className="cursor-pointer text-[#24628f]">{IsLogin ? "Sign Up" : "Login"}</span> </h1>
          </form>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
