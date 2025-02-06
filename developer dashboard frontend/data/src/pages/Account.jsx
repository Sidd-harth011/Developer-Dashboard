import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
const Account = () => {
  return (
    <div>
      <div className='py-16 px-6 w-full'>
        <div className='flex justify-between gap-6 w-full flex-col'>
          <div className='flex justify-between w-full'>
            <h4 className='text-3xl ' style={{ color: "#212636", fontWeight: "500" }}>
              Account
            </h4>

          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className=' col-span-2 lg:col-span-1'>
            <div style={{ border: "1px solid #ebebeb" }} className='rounded-xl shadow-sm'>
              <div className='p-4' style={{ borderBottom: '1px solid #ebebeb' }}>
                <div className='w-full flex flex-col items-center justify-center gap-3'>
                  <img src="https://material-kit-react.devias.io/assets/avatar.png" alt="" style={{ width: "80px", height: "80px", }} className='rounded-full' />
                  <h5 style={{ fontSize: "24px", color: "#212636" }}>Developer</h5>
                  <p className='text-md' style={{ color: "#667085" }}>Delhi India</p>
                  <p className='text-md' style={{ color: "#667085" }}>GTM - 7 </p>
                </div>
              </div>
              <div className='py-4 px-4'>
                <button className='w-full' style={{ color: "#635bff", fontSize: "14px", fontWeight: "500" }}>Upload Picture</button>
              </div>
            </div>
            </div>
            <div
              className="flex flex-col col-span-2 lg:col-span-1 rounded-xl shadow-sm"
              style={{ border: "1px solid #f0f0f0" }}
            >
              <div
                className="w-full pt-8 pb-4 px-6"
                style={{ borderBottom: "1px solid #e6e8ed" }}
              >
                <h2 className="text-lg font-semibold" style={{ color: "#212636" }}>
                  Profile
                </h2>
                <span
                  className="text-sm"
                  style={{ color: "#667085", fontWeight: "400" }}
                >
                  The information can be edited
                </span>
              </div>
              <div className="w-full flex py-9 px-6">
                <div className="w-full grid grid-cols-4 gap-6">
                  <input type="text" placeholder="First name" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} />
                  <input type="text" placeholder="Last name" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} />
                  <input type="email" placeholder="Email addrress" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} />
                  <input type="number" placeholder="Number" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} />
                  <input type="text" placeholder="City" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} />
                </div>
              </div>
              <div className="flex justify-end p-2 w-full" style={{ borderTop: "1px solid #e6e8ed" }}>
                <button style={{ fontSize: "14px", fontWeight: "400", color: "white" }} className="py-2 px-5 bg-custompurple rounded">Save Details</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Account
