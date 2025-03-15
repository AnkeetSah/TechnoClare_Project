import React from "react";
import { Link } from "react-router-dom";
import BackLink from "../components/BackLink";

const Login = () => {
  return (
    <div className="lg:px-6 py-[95px] h-screen ">
       <BackLink/>
      <div className="flex w-full  ">
        <div className="flex  w-full flex-wrap"> 
          {/* Left Side: Image */}
          <div className="lg:w-1/2 w-full xs:hidden lg:block">
            <img
              src="../assets/images/pana.svg"
              alt="Login Illustration"
              className="w-full h-[472px]"
            />
          </div>

          {/* Right Side: Login Form */}
          <div className="lg:w-1/2   lg:p-8 xs:mx-auto lg:mx-0 ">
            
            <h1 className="text-3xl lg:text-4xl text-[#0C6D7C] font-semibold mb-4 flex items-center font-RabsurRegular">
              Login
              <span className="ml-2">
                <img
                  src="../assets/images/Login (1).svg"
                  alt="Login Icon"
                  className="h-10"
                />
              </span>
            </h1>
            <p className="text-sm lg:text-base text-gray-600 mb-8 font-AfacadBold ">
              The world is waiting. Log in to start your journey!
            </p>

            {/* Google Login Button */}
            <button
              className="w-[360px] flex items-center justify-center gap-3 h-14 bg-white border border-gray-300 hover:border-gray-400 rounded-full shadow-sm text-sm font-medium text-gray-600 mb-4"
            >
              <img
                src="../assets/images/google.png"
                alt="Google Icon"
                className="h-6"
              />
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="flex w-[360px] items-center justify-center my-4">
              <div className="border-t w-1/4 border-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">or</span>
              <div className="border-t w-1/4 border-gray-300"></div>
            </div>

            {/* Facebook Login Button */}
            <button
              className="w-[360px] flex items-center justify-center gap-3 h-14 bg-white border border-gray-300 hover:border-gray-400 rounded-full shadow-sm text-sm font-medium text-gray-600"
            >
              <img
                src="../assets/images/Group.png"
                alt="Facebook Icon"
                className="h-6"
              />
              Sign in with Facebook
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
