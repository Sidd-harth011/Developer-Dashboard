import React from "react";
import CardInvertedColors from "./components/card";
import SalaryChart from "./components/Chart";
import { MdRefresh } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import TrafficPieChart from "./components/PieChart";
import { Products } from "./components/Products";
import Orders from "./components/Orders";
const Overview = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <CardInvertedColors />
      </div>
      <div>
        <div className="p-3 grid grid-cols-4 grid-row-3 xl:grid-rows-1 gap-3">
          <div
            className="flex flex-col gap-2 rounded-2xl shadow-sm col-span-4 xl:col-span-3"
            style={{ border: "2px solid #ebebeb" }}
          >
            <div className="pt-8 px-6 pb-4 flex justify-between">
              <span
                style={{
                  color: "#212636",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Sales
              </span>
              <button className="flex items-center gap-1">
                <MdRefresh style={{ color: "#212636", fontSize: "18px" }} />
                <span style={{ color: "#212636", fontSize: "13px" }}>Sync</span>
              </button>
            </div>
            <div>
              <SalaryChart />
            </div>
            <div
              className="flex w-full p-4 justify-end"
              style={{ borderTop: "2px solid #ebebeb" }}
            >
              <button className="flex items-center gap-1 ">
                <span
                  style={{
                    color: "#212636",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Overview
                </span>
                <FaArrowRightLong
                  style={{ color: "#212636", fontSize: "18px" }}
                />
              </button>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl shadow-sm col-span-4 sm:col-span-2 xl:col-span-1"
            style={{ border: "2px solid #ebebeb" }}
          >
            <div className="pt-8 px-6 pb-4 flex justify-start">
              <span
                style={{
                  color: "#212636",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Traffic Source
              </span>
            </div>
            <div className="p-2 pb-6">
              <TrafficPieChart className="w-full h-full" />
            </div>
          </div>
          <div className="col-span-4 sm:col-span-2 xl:col-span-1">
            <Products />
          </div>
          <div className="flex flex-col rounded-2xl shadow-sm col-span-4 xl:col-span-3"
            style={{ border: "2px solid #ebebeb" }}>
            <div className="pt-8 px-6 pb-4 flex justify-start">
            <span
                style={{
                  color: "#212636",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Latest Orders
              </span>
            </div>
            <Orders/>
            <div
              className="flex w-full p-4 justify-end"
              style={{ borderTop: "2px solid #ebebeb" }}
            >
              <button className="flex items-center gap-1 ">
                <span
                  style={{
                    color: "#212636",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  View All
                </span>
                <FaArrowRightLong
                  style={{ color: "#212636", fontSize: "18px" }}
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
