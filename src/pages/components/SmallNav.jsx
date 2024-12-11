import React from 'react'
import { Outlet } from 'react-router'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import pic from "../../assets/pic.webp"
const SmallNav = () => {
  return (
    <>
        <div className='flex w-full'>
            <nav className='flex flex-row py-2 md:py-4 gap-0 px-10 md:px-16 border-b-2 w-full justify-between fixed'>
                <div className='flex flex-row gap-5 h-full items-center'>
                <RxHamburgerMenu className='text-2xl text-icon hover:text-custompurple hover:duration-300 ' />
                <IoSearchOutline className='text-2xl text-icon hover:text-custompurple hover:duration-300 '/>
                </div>
                <div className='flex flex-row gap-5 h-full items-center'>
                <IoMdPeople className='text-2xl text-icon hover:text-custompurple hover:duration-300 '/>
                <IoIosNotificationsOutline className='text-2xl text-icon hover:text-custompurple hover:duration-300 '/>
                <img src={pic} alt="" className='w-10 h-10 rounded-3xl' /> 
                </div>
                
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
        <div className='fixed w-full bg-back h-screen'>
          <div className='bg-white h-full' style={{width:"320px"}}>
            
          </div>
        </div>
    </>
  )
}

export default SmallNav