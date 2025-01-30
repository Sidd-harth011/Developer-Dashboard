import * as React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbPigMoney } from "react-icons/tb";
import styled from 'styled-components';

function CardInvertedColors() {

   

    const carddate = [
        {
            sub: "BUDGET",
            Title: '$24k',
            Icon: BsCurrencyDollar,
            Icon2: FaArrowUpLong,
            Des: "12%",
            Des2: "Since last month"
        },
        {
            sub: "TOTAL CUSTOMER",
            Title: '1.6k',
            Icon: IoPeopleOutline,
            Icon2: FaArrowDownLong,
            Des: "16%",
            Des2: "Since last month"
        },
        {
            sub: "TASK PROGRESS",
            Title: '75.5%',
            Icon: TfiMenuAlt,
        },
        {
            sub: "TOTAL PROFIT",
            Title: '15k',
            Icon: TbPigMoney,
        }
    ]
    return (
        <>
            <div className='p-3 flex flex-wrap justify-center sm:justify-between gap-3 self-center w-full'>
                {carddate.map((x) => {
                    switch (x.sub) {
                        case 'BUDGET':
                            return (<div key={x.Title} className='py-8 px-6 flex flex-col gap-4 rounded-lg border shadow-sm w-4/5 sm:w-2/5 lg:w-1/5' >
                                <div className='flex flex-row justify-between gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <span style={{ fontSize: "14px", color: "#667085", fontWeight: "500" }}>{x.sub}</span>
                                        <h4 style={{ fontSize: "32px", color: "#212636", fontWeight: "500" }}>{x.Title}</h4>
                                    </div>
                                    <div>
                                        <div className='h-14 w-14 flex items-center justify-center rounded-full' style={{ backgroundColor: "#625afa", }}>
                                            <x.Icon className='text-white' style={{ fontSize: "24px", fontWeight: "600" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <x.Icon2 className='text-green-500' />
                                        <span className='text-green-500 text-sm'>{x.Des}</span>
                                    </div>
                                    <div>
                                        <span style={{ color: "#667085", fontSize: "12px" }}>{x.Des2}</span>
                                    </div>
                                </div>
                            </div>)
                            break;
                        
                        case "TOTAL CUSTOMER":
                            return (<div key={x.Title} className='py-8 px-6 flex flex-col gap-4 rounded-lg border shadow-sm w-4/5 sm:w-2/5 lg:w-1/5' >
                                <div className='flex flex-row justify-between gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <span style={{ fontSize: "14px", color: "#667085", fontWeight: "500" }}>{x.sub}</span>
                                        <h4 style={{ fontSize: "32px", color: "#212636", fontWeight: "500" }}>{x.Title}</h4>
                                    </div>
                                    <div>
                                        <div className='h-14 w-14 flex items-center justify-center rounded-full' style={{ backgroundColor: "#fa9b0c", }}>
                                            <x.Icon className='text-white' style={{ fontSize: "24px", fontWeight: "600" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <x.Icon2 className='text-red-400' />
                                        <span className='text-red-400 text-sm'>{x.Des}</span>
                                    </div>
                                    <div>
                                        <span style={{ color: "#667085", fontSize: "12px" }}>{x.Des2}</span>
                                    </div>
                                </div>
                            </div>)
                            break;
                        case "TASK PROGRESS":
                            return (<div key={x.Title} className='py-8 px-6 flex flex-col gap-4 rounded-lg border shadow-sm w-4/5 sm:w-2/5 lg:w-1/5' >
                                <div className='flex flex-row justify-between gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <span style={{ fontSize: "14px", color: "#667085", fontWeight: "500" }}>{x.sub}</span>
                                        <h4 style={{ fontSize: "32px", color: "#212636", fontWeight: "500" }}>{x.Title}</h4>
                                    </div>
                                    <div>
                                        <div className='h-14 w-14 flex items-center justify-center rounded-full' style={{ backgroundColor: "#fa9b0c", }}>
                                            <x.Icon className='text-white' style={{ fontSize: "24px", fontWeight: "600" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded' style={{backgroundColor:"#c2bfff",height:"3px"}}>
                                    <div style={{width:"75%",backgroundColor:"#645cff",height:"100%"}}></div>
                                </div>
                            </div>)
                            break;
                            case "TOTAL PROFIT":
                            return (<div key={x.Title} className='py-8 px-6 flex flex-col gap-4 rounded-lg border shadow-sm w-4/5 sm:w-2/5 lg:w-1/5' >
                                <div className='flex flex-row justify-between gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <span style={{ fontSize: "14px", color: "#667085", fontWeight: "500" }}>{x.sub}</span>
                                        <h4 style={{ fontSize: "32px", color: "#212636", fontWeight: "500" }}>{x.Title}</h4>
                                    </div>
                                    <div>
                                        <div className='h-14 w-14 flex items-center justify-center rounded-full' style={{ backgroundColor: "#645cff", }}>
                                            <x.Icon className='text-white' style={{ fontSize: "24px", fontWeight: "600" }} />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>)
                            break;
                    }
                })}
            </div>
        </>
    );
}

export default CardInvertedColors