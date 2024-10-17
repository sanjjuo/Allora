import React from 'react'
import TopFooter from './TopFooter'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

const Footer = () => {
    return (
        <>
            <TopFooter />
            <div>
                <div className="container mx-auto pb-14">
                    <div className='flex flex-col justify-center items-center space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-center mt-20'>
                        <ul className='flex items-center gap-7 text-gray-700'>
                            <li>Blog</li>
                            <li>FAQs</li>
                            <li>Contact us</li>
                        </ul>
                        <ul className='flex items-center gap-7 text-gray-700'>
                            <li className='transition duration-500 ease-in-out scale-100 hover:text-primary hover:scale-105 cursor-pointer'>
                                <FaFacebookF /></li>
                            <li className='transition duration-500 ease-in-out scale-100 hover:text-primary hover:scale-105 cursor-pointer'>
                                <IoLogoInstagram /></li>
                            <li className='transition duration-500 ease-in-out scale-100 hover:text-primary hover:scale-105 cursor-pointer'>
                                <FaTwitter /></li>
                            <li className='transition duration-500 ease-in-out scale-100 hover:text-primary hover:scale-105 cursor-pointer'>
                                <FaSkype /></li>
                            <li className='transition duration-500 ease-in-out scale-100 hover:text-primary hover:scale-105 cursor-pointer'>
                                <FaPinterest /></li>
                        </ul>
                    </div>
                    <h1 className='text-sm text-center lg:text-base mt-14 text-gray-700 px-3 lg:px-0'>&copy;{new Date().getFullYear()} All 
                        Rights Reserverd. Made with ❤️ by Colorlib & distributed by ThemeWagon</h1>
                </div>
            </div>
        </>
    )
}

export default Footer
