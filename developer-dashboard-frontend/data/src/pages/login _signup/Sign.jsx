import React from 'react'
import { Link } from 'react-router'
const Sign = () => {
  
  return (
    <>
    <div className="w-screen h-screen flex">
            
            <div className="flex flex-col self-center items-center sm:justify-center w-full sm:w-2/6 h-6/6 sm:py-4 gap-4">
              <div className="flex gap-2 justify-center items-center self-end sm:self-center px-2 py-2">
                <span className="text-sm text-gray-500">
                  Have an account ?
                </span>
                <button
                  className="text-xs font-semibold p-1 px-2 rounded"
                  style={{ backgroundColor: "#e5e7eb" }}
                >
                 <Link to="/log-in"> Log In</Link>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-full h-auto gap-4" >
                <div className="flex justify-center flex-col items-center px-4 gap-4">
                  <h1 className="text-2xl font-semibold text-center">
                    Register in to{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Developer Dasboard
                    </span>
                  </h1>
                  <p
                    className="text-sm font-medium text-center"
                    style={{ color: "#9a9a9a" }}
                  >
                    Welcome to D.D, please enter you details for Register
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
                    <input
                      type="number"
                      name="number"
                      placeholder="Number"
                      className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                    />
                    <button className="bg-blue-800 text-sm font-semibold text-white text-center py-1 rounded">
                      Register
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
                    <span className="text-black">Sign Up with google</span>
                  </button>
                </div>
              </div>
            </div>
            {/* */}
            <div className="hidden sm:flex rounded relative h-5/5 w-4/6">
            <video   className="rounded absolute top-0 left-0 w-full h-full object-cover" muted autoPlay loop style={{zIndex:-100}}>
            <source src="https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4" type="video/mp4" className='bg-scroll'/>
            </video> 
            </div>
          </div>
    </>
  )
}

export default Sign