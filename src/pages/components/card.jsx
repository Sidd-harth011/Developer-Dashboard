import * as React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbPigMoney } from "react-icons/tb";

function CardInvertedColors() {
    const carddate = [
        {
            sub:"BUDGET",
            Title:'$24k',
            Icon:BsCurrencyDollar,
            Icon2:FaArrowUpLong,
            Des:"12%",
            Des2:"Since last month"
        },
        {
            sub:"TOTAL CUSTOMER",
            Title:'1.6k',
            Icon:IoPeopleOutline,
            Icon2:FaArrowDownLong,
            Des:"16%",
            Des2:"Since last month"
        },
        {
            sub:"TASK PROGRESS",
            Title:'75.5%',
            Icon:TfiMenuAlt,
        },
        {
            sub:"TOTAL PROFIT",
            Title:'75.5%',
            Icon:TbPigMoney,
        }
    ]
  return (
    <>
    <div>
        {carddate.map((x)=>{
            switch(x.sub){
                case 'BUDGET':
                    return (<div>
                        <div className='flex flex-row justify-between gap-6'>
                            <div className='flex flex-col gap-2'>
                                <span style={{fontSize:"14px",color:"#667085",fontWeight:"500"}}>{x.sub}</span>
                                <h4 style={{fontSize:"32px",color:"#212636",fontWeight:"500"}}>{x.Title}</h4>
                            </div>
                            <div>
                                <div className='h-14 w-14 flex items-center justify-between'>
                                    <x.Icon className='text-white' style={{fontSize:"14px",fontWeight:"600"}}/>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        })}
    </div>
    </>
  );
}

export default CardInvertedColors