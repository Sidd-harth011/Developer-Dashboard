import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useRef } from "react";
import { Button, notification, Space } from "antd";
const Sign = () => {
  const [form, Setform] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
  });

  const [state, Setstate] = useState(true);
  const dataSubmit = (e) => {
    switch (e.target.name) {
      case "name":
        {
          Setform({ ...form, name: e.target.value });
        }
        break;
      case "email":
        {
          Setform({ ...form, email: e.target.value });
        }
        break;
      case "number":
        {
          Setform({ ...form, number: e.target.value });
        }
        break;
      case "City":
        {
          Setform({ ...form, city: e.target.value });
        }
        break;
      case "password":
        {
          Setform({ ...form, password: e.target.value });
        }
        break;
    }
  };

  console.log(form.name);

  const register = (e) => {
    e.preventDefault();
    Setstate(!state);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Registerd Successfull",
      description: "You have created your account.",
    });
  };

  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "Registerd not Successfull",
      description: "The email is already registerd",
    });
  };

  useEffect(() => {
    const req = async () => {
      console.log("hi ");
      try {
        const f = form;
        const response = await axios.post("http://localhost:5050/sign-up", f);
        console.log(response.data.message);
        if (response.data.message == "User is Registered") {
          openNotificationWithIcon("success");
          Setform({
            name: "",
            email: "",
            number: "",
            city: "",
            password: "",
          });
        } else {
          openNotificationWithIcon2("error");
          Setform({
            name: "",
            email: "",
            number: "",
            city: "",
            password: "",
          });
        }
      } catch (error) {
        console.log("f" + error);
      }
    };
    req();
    return () => {
      console.log("Cleanup function executed");
    };
  }, [state]);

  // useEffect(()=>{
  //   async()=>{
  //     try {
  //       const response = await fetch("http://localhost:5050/sign-up", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(form),
  //       });
  //       const data = await response.json();
  //     console.log(data.message);
  //          } catch (error) {
  //            console.log("f"+error)
  //          }
  //   }
  // },[state])

  return (
    <>
      <div className="w-screen h-screen flex">
        {contextHolder}
        <div className="flex flex-col self-center items-center sm:justify-center w-full sm:w-2/6 h-6/6 sm:py-4 gap-4">
          <div className="flex gap-2 justify-center items-center self-end sm:self-center px-2 py-2">
            <span className="text-sm text-gray-500">Have an account ?</span>
            <button
              className="text-xs font-semibold p-1 px-2 rounded"
              style={{ backgroundColor: "#e5e7eb" }}
            >
              <Link to="/"> Log In</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-auto gap-4">
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
              <form
                action=""
                className="w-4/5 flex flex-col gap-3"
                onSubmit={register}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                  value={form.name}
                  onChange={dataSubmit}
                  autoComplete="username"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                  value={form.email}
                  onChange={dataSubmit}
                  autoComplete="email"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                  value={form.password}
                  onChange={dataSubmit}
                  autoComplete="current-password"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                  value={form.number}
                  onChange={dataSubmit}
                  autoComplete="number"
                />
                <input
                  type="text"
                  name="City"
                  placeholder="City"
                  className="border border-gray-200 text-sm px-2 py-1 w-full font-medium rounded"
                  value={form.city}
                  onChange={dataSubmit}
                  autoComplete="city"
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
          <video
            className="rounded absolute top-0 left-0 w-full h-full object-cover"
            muted
            autoPlay
            loop
            style={{ zIndex: -100 }}
          >
            <source
              src="https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4"
              type="video/mp4"
              className="bg-scroll"
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default Sign;
