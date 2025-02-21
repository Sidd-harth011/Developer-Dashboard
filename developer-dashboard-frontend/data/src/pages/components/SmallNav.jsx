import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import pic from "../../assets/pic.webp";
import icon from "../../assets/icon.png";
import { TbChartPie } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { add } from "../redux/UserSlice";
import {useSelector,useDispatch} from 'react-redux'
const SmallNav = () => {
  const [line, SetLine] = useState(true);
  const showMenu = () => {
    return SetLine(!line);
  };

const nav = useNavigate()
const [v, setv] =useState(0)
const [logout, Setlogout] = useState(true)
const va = ()=>{
  setv(1)
}
const out = ()=>{
  Setlogout(!logout)
}

  useEffect(()=>{
    const logout = async()=>{
      console.log('logout')
      const response = await axios.post('http://localhost:5050/logout',{value:v})
      console.log(response.data.message)
      if(response.data.message == "logout"){
        nav('/')
      }
    }
    setTimeout(logout(),3000)
  },[logout])

  const dispatch = useDispatch()
  useEffect(()=>{
    const sendReq = async()=>{
      
      try{
        console.log('running account')
        const response= await axios.get('http://localhost:5050/account');
        const data = response.data.message
        dispatch(add({name:data.Name,city:data.City,email:data.Email,number:data.Number,image:data.Image}))
      }catch(error){
        console.log(error)
      }
    }
    sendReq()
  },[logout])
  const RedU = useSelector((state)=> state.UserSlice.user)
  console.log(RedU)
  return (
    <>
      <div className="flex w-full sticky top-0">
        <nav
          className="flex flex-row py-2 md:py-4 gap-0 px-10 md:px-16 border-b-2 w-full justify-between  items-center"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="flex flex-row gap-5 h-full items-center justify-center">
            <RxHamburgerMenu
              className="text-2xl text-icon hover:text-custompurple hover:duration-300"
              onClick={showMenu}
            />
            <form action="" className="items-center hidden sm:flex">
              <input type="text" placeholder="search" className="outline-none border border-e-0 p-1 rounded w-56"/>
              <button className="bg-black rounded p-1 rounded-s-none " style={{border:"1px solid black"}}>
              <IoSearchOutline className="text-2xl text-icon hover:text-custompurple hover:duration-300" />
                </button>
            </form>
            {/* <IoSearchOutline className="text-2xl text-icon hover:text-custompurple hover:duration-300" /> */}
          </div>
          <div className="flex flex-row gap-5 h-full items-center">
            <IoMdPeople className="text-2xl text-icon hover:text-custompurple hover:duration-300 " />
            <IoIosNotificationsOutline className="text-2xl text-icon hover:text-custompurple hover:duration-300 " />
            <LiaSignOutAltSolid className="text-3xl rounded-full text-white hover:text-red-600 hover:duration-300 bg-red-600 p-1 hover:bg-white hover:border border-red-600" onClick={()=>{
              va()
              out()
            }}/>
            <img src={RedU.image} alt="" className="w-10 h-10 rounded-3xl" />
          </div>
        </nav>
        <div></div>
      </div>
      <div
        className="fixed w-full bg-back h-screen"
        style={line ? { display: "none" } : { display: "block" }}
      >
        <motion.div
          className="bg-navc h-full"
          style={{ width: "320px" }}
          animate={line ? { x: -320, opacity: 1 } : { x: 0, opacity: 1 }}
          initial={line ? { x: -0, opacity: 1 } : { x: -320, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="w-full p-5 flex flex-col gap-2"
            style={{ borderBottom: "1px solid #8d8d8d" }}
          >
            <div className="flex flex-row justify-between">
              <p className="text-white text-lg font-oleo">
                Developer Dashboard
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={showMenu}
                className="border-none"
              >
                <IoClose className="text-2xl text-icon hover:text-custompurple hover:duration-300 " />
              </motion.button>
            </div>
            {/* <div className="flex gap-2 flex-col p-3 border rounded-lg">
              <label htmlFor="drop" className="font-sans text-sm text-drop">
                Choose Your Work-Place
              </label>
              <select
                name="drop"
                id="drop"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  outline: "none",
                }}
                className="text-md"
              >
                <option value="Home" className="text-drop">
                  Home
                </option>
                <option value="Office" className="text-drop">
                  Office
                </option>
                <option value="Freelancing" className="text-drop">
                  Freelancing
                </option>
              </select>
            </div> */}
            <form action="" className="items-center flex sm:hidden">
              <input type="text" placeholder="search" className="outline-none border border-e-0 p-1 rounded w-56"/>
              <button className="bg-black rounded p-1 rounded-s-none " style={{border:"2px solid black"}}>
              <IoSearchOutline className="text-2xl text-white hover:text-custompurple hover:duration-300" />
                </button>
            </form>
          </div>
          <div>
            <ul className="p-4 flex flex-col gap-1">
              <Link to="/overview">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer hover:bg-custompurple hover:text-white duration-500 active:bg-custompurple">
                  <TbChartPie className="text-lg" /> Overview
                </li>
              </Link>
              <Link to="customer">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer hover:bg-custompurple hover:text-white duration-500 active:bg-custompurple">
                  <IoPeopleOutline className="text-lg" /> Customer
                </li>
              </Link>
              <Link to="integration">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer hover:bg-custompurple hover:text-white duration-500 active:bg-custompurple">
                  <AiFillApi className="text-lg" /> Integration
                </li>
              </Link>
              <Link to="setting">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer hover:bg-custompurple hover:text-white duration-500 active:bg-custompurple">
                  <IoSettingsOutline className="text-lg" /> Setting
                </li>
              </Link>
              <Link to="account">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer hover:bg-custompurple hover:text-white duration-500 active:bg-custompurple">
                  <IoPersonOutline className="text-lg" /> Account
                </li>
              </Link>
            </ul>
          </div>
          <div></div>
        </motion.div>
      </div>
    </>
  );
};

export default SmallNav;
