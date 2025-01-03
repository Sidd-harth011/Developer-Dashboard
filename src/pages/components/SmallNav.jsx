import React, { useState } from "react";
import { Link, Outlet } from "react-router";
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
const SmallNav = () => {
  const [line, SetLine] = useState(true);
  const showMenu = () => {
    return SetLine(!line);
  };
  return (
    <>
      <div className="flex w-full sticky top-0">
        <nav
          className="flex flex-row py-2 md:py-4 gap-0 px-10 md:px-16 border-b-2 w-full justify-between  items-center"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="flex flex-row gap-5 h-full items-center justify-center">
            <RxHamburgerMenu
              className="text-2xl text-icon hover:text-custompurple hover:duration-300 "
              onClick={showMenu}
            />
            <IoSearchOutline className="text-2xl text-icon hover:text-custompurple hover:duration-300" />
          </div>
          <div className="flex flex-row gap-5 h-full items-center">
            <IoMdPeople className="text-2xl text-icon hover:text-custompurple hover:duration-300 " />
            <IoIosNotificationsOutline className="text-2xl text-icon hover:text-custompurple hover:duration-300 " />
            <img src={pic} alt="" className="w-10 h-10 rounded-3xl" />
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
            <div className="flex gap-2 flex-col p-3 border rounded-lg">
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
            </div>
          </div>
          <div>
            <ul className="p-4 flex flex-col gap-1">
              <Link to="/">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer hover:bg-custompurple hover:text-white duration-500 active:bg-custompurple">
                  <TbChartPie className="text-lg" /> Overview
                </li>
              </Link>
              <Link to="customer">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer">
                  <IoPeopleOutline className="text-lg" /> Customer
                </li>
              </Link>
              <Link to="integration">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer">
                  <AiFillApi className="text-lg" /> Integration
                </li>
              </Link>
              <Link to="setting">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer">
                  <IoSettingsOutline className="text-lg" /> Setting
                </li>
              </Link>
              <Link to="account">
                <li className="flex flex-row gap-2 items-center text-md font-semibold text-drop p-3 rounded-md cursor-pointer">
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
