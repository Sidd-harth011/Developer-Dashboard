import React, { useEffect, useState } from "react";
import pic from "../../assets/log-pic.jpg";
import { Link } from "react-router";
import axios from "axios";
import io from "socket.io-client";
import { Button, notification, Space } from "antd";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { show, hide } from "../redux/MenuSlice";
const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(true);

  const [form, SetForm] = useState({
    email: "",
    password: "",
  });

  const fill = (e) => {
    switch (e.target.name) {
      case "email":
        {
          SetForm({ ...form, email: e.target.value });
        }
        break;
      case "password":
        {
          SetForm({ ...form, password: e.target.value });
        }
        break;
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Account Error",
      description: "There is no account with this email.",
    });
  };

  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "Password Error",
      description: "The Password is incorect.",
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setState(!state);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const dataSend = async () => {
      console.log("run");
      try {
        const f = form;
        const response = await axios.post(`${import.meta.env.VITE_API_URL_FRONT}`, f);
        console.log(response.data);
        switch (response.data.message) {
          case "Incorect password":
            {
              openNotificationWithIcon2("error");
            }
            break;
          case "NO id":
            {
              openNotificationWithIcon("error");
            }
            break;
          case "login": {
            dispatch(show());
            navigate(response.data.redirect);
          }
        }
      } catch (error) {}
    };
    dataSend();
  }, [state]);
  dispatch(hide());
  return (
    <>
      <div className="w-screen sm:pe-4 flex h-screen">
        {contextHolder}
        <div className="hidden sm:flex rounded relative h-5/5 w-4/6">
          <video
            className="rounded absolute top-0 left-0 w-full h-full object-cover"
            muted
            loop
            autoPlay
            style={{ zIndex: -100 }}
          >
            <source
              src="https://videos.pexels.com/video-files/8632591/8632591-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
              className="bg-scroll"
            />
          </video>
        </div>
        <div className="flex flex-col items-center justify-center w-6/6 sm:w-2/6 h-6/6 sm:px-4 py-4 gap-2">
          <div className="flex gap-2 justify-center items-center self-center">
            <span className="text-sm text-gray-500">
              Don't have an account ?
            </span>
            <button
              className="text-xs font-semibold p-1 px-2 rounded"
              style={{ backgroundColor: "#e5e7eb" }}
            >
              <Link to="/sign-up"> Sign Up</Link>
            </button>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-auto gap-4">
            <div className="flex justify-center flex-col items-center px-4 gap-4">
              <h1 className="text-2xl font-semibold text-center">
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
                  onChange={fill}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                  onChange={fill}
                />
                <span className="text-sm text-blue-800 font-semibold text-center">
                  Forgot the password ?
                </span>
                <button
                  className="bg-blue-800 text-sm font-semibold text-white text-center py-1 rounded"
                  onClick={submit}
                >
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
