import React from "react";
import pic from "../../assets/log-pic.jpg";
const Login = () => {
  return (
    <>
      <div className="w-screen h-full px-4 flex">
        <img src={pic} alt="" className="h-full w-4/6" />
        <div className="flex flex-col items-center justify-center w-2/6 h-6/6 py-4">
          <div className="flex gap-2 justify-center items-center self-end">
            <span className="text-sm text-gray-500">
              Don't have an account ?
            </span>
            <button
              className="text-xs font-semibold p-1 px-2 rounded"
              style={{ backgroundColor: "#e5e7eb" }}
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full" >
            <div className="flex justify-center flex-col items-center px-4 gap-4">
              <h1 className="text-2xl font-semibold">
                Sign in to{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Developer Dasboard
                </span>
              </h1>
              <p
                className="text-sm font-medium text-center"
                style={{ color: "#9a9a9a" }}
              >
                Welcome to D.D, please enter you login details for using this
                app
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <form action="" className="w-4/5 flex flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                />
                <span className="text-sm text-blue-800 font-semibold text-center">
                  Forgot the password ?
                </span>
                <button className="bg-blue-800 text-sm font-semibold text-white text-center py-1 rounded">
                  Login
                </button>
                <div className="flex justify-center items-center gap-2 px-1">
                  <div
                    style={{ borderTop: "1px solid gray" }}
                    className="w-full"
                  ></div>
                  <span className="text-sm text-gray-600 font-semibold text-center">
                    Or
                  </span>
                  <div
                    style={{ borderTop: "1px solid gray" }}
                    className="w-full"
                  ></div>
                </div>
              </form>

              <button className=" flex justify-center items-center gap-2 w-4/5 border border-gray-300 text-sm font-semibold text-white text-center py-1 rounded">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
                <span className="text-black">Sign in with google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
