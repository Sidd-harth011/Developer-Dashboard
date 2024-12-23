import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Customer = () => {
  return (
    <>
    <div className='py-16 px-6 w-full'>
    <div className='flex justify-between gap-6 w-full flex-col'>
      <div className='flex justify-between w-full'>
        <h4 className='text-3xl ' style={{color:"#212636",fontWeight:"500"}}>
          Customers
        </h4>
        <button className='bg-purple-500 rounded  flex py-2 px-5 items-center gap-2' >
          <IoAddOutline style={{color:'white',fontSize:"20px",fontWeight:"bold"}}/>
           <span className='text-white' style={{fontWeight:"500"}}>
            Add
            </span>
        </button>
      </div>
      <div className='p-4 rounded-xl shadow-sm' style={{border:'1px solid #ebebeb'}}>
        <div className='w-full grid grid-cols-5'>
          <div className='border flex items-center py-2 ps-3 gap-2 col-span-4 sm:col-span-2 lg:col-span-2 xl:col-span-3 rounded-lg'>
          <IoIosSearch className='text-black' style={{fontSize:"20px"}}/>
          <input type="text" name='name' placeholder='Search customer' className='w-full outline-none' style={{color:"rgba(33,38,54,1)"}}/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Customer