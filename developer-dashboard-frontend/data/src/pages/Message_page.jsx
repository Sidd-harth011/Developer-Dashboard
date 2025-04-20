import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router";

const Message_page = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-between p-3 border-b  w-screen">
        <div className="flex gap-4 items-center ps-4 w-6/12 sm:w-5/12">
          <Link to="/people">
            <IoArrowBack
              style={{ width: "26px", height: "26px" }}
              className="hover:cursor-pointer hover:text-custompurple duration-200"
            />
          </Link>
          <img
            src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg"
            alt=""
            className="w-10 h-10 rounded-3xl border-2  border-purple-700"
          />
          <h1 className="text-lg font-medium">karan</h1>
        </div>
        <div className="flex gap-3 items-center justify-end pe-4 w-5/12">
          <IoIosCall
            style={{ width: "26px", height: "26px" }}
            className="hover:cursor-pointer hover:text-custompurple duration-200"
          />
          <IoIosVideocam
            style={{ width: "26px", height: "26px" }}
            className="hover:cursor-pointer hover:text-custompurple duration-200"
          />
        </div>
      </div>
      <div
        className="border-red-400 p-5 overflow-y-auto h-4/5"
      >
        
      </div>
      <div className="w-full pt-3 flex justify-center items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="border-blue-800 border-2 border-e-0 w-8/12 sm:w-4/12 rounded-e-none rounded-lg p-2 outline-none"
        />
        <button className="bg-blue-800 rounded-s-none rounded p-2 py-2 text-2xl border-2 border-blue-800 hover:bg-blue-950 hover:border-blue-950 duration-300">
          <LuSendHorizontal className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Message_page;
