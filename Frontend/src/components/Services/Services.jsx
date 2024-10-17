import React from 'react';
import { MdDone } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";


const Services = () => {
    return (
        <>
            <div className="container mx-auto py-20 px-3 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                    <div className='flex justify-center items-center gap-1 text-lg capitalize font-normal shadow-sm border cursor-pointer px-4 py-8 group bg-gray-200'>
                        <MdDone size={35} className='text-primary transition-all duration-700 scale-100 ease-in-out
                         group-hover:scale-125' />quality product</div>
                    <div className='flex justify-center items-center gap-1 text-lg capitalize font-normal shadow-sm border cursor-pointer px-4 py-8 group bg-gray-200'>
                        <TbTruckDelivery size={35} className='text-primary transition-all duration-700 scale-100 ease-in-out
                         group-hover:scale-125' />free shipping</div>
                    <div className='flex justify-center items-center gap-1 text-lg capitalize font-normal shadow-sm border cursor-pointer px-4 py-8 group bg-gray-200'>
                        <HiMiniArrowsRightLeft size={35} className='text-primary transition-all duration-700 scale-100 ease-in-out
                         group-hover:scale-125' />14-day return</div>
                    <div className='flex justify-center items-center gap-1 text-lg capitalize font-normal shadow-sm border cursor-pointer px-4 py-8 group bg-gray-200'>
                        <PiPhoneCall size={35} className='text-primary transition-all duration-700 scale-100 ease-in-out
                         group-hover:scale-125' />24/7 support</div>
                </div>
            </div>
        </>
    )
}

export default Services
