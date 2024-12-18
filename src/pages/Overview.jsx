import React from 'react'
import CardInvertedColors from './components/card'
import SalaryChart from './components/Chart'
import { MdRefresh } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Overview = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <CardInvertedColors />
      </div>
      <div>
        <div className='border-red-500 border p-3 grid grid-cols-3'>
          <div className='flex flex-col gap-2 rounded-2xl shadow-sm col-span-3 xl:col-span-2' style={{ border: "2px solid #ebebeb" }}>
            <div className='pt-8 px-6 pb-4 flex justify-between'>
              <span style={{ color: "#212636", fontSize: "18px", fontWeight: "500" }}>Sales</span>
              <button className='flex items-center gap-1'>
                <MdRefresh style={{ color: "#212636", fontSize: "18px" }} /><span style={{ color: "#212636", fontSize: "13px" }}>Sync</span>
              </button>
            </div>
            <div>
              <SalaryChart />
            </div>
            <div className='flex w-full p-4 justify-end' style={{ borderTop: "2px solid #ebebeb" }}>
              <button className='flex items-center gap-1 '>
                <span style={{ color: "#212636", fontSize: "15px", fontWeight: "500" }}>Overview</span><FaArrowRightLong style={{ color: "#212636", fontSize: "18px" }} />
              </button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Overview