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
        <div className='flex flex-row'>
            <nav className='flex px-16'>
                <div>
                <RxHamburgerMenu />
                <IoSearchOutline/>
                </div>
                <div>
                <IoMdPeople />
                <IoIosNotificationsOutline />
                <img src={pic} alt="" />
                </div>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default SmallNav