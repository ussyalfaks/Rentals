import React from 'react'
import { FcHome } from "react-icons/fc";


function Footer() {
  return (
    <>
    <div className='flex justify-evenly mx-10 text-[#465C47]'>
        <div>
        <h1 className='flex text-xl items-center'><span className='font-extrabold'>Rent</span>Home <FcHome className='ml-1'/></h1>
            <p>The best and easy way to rent home</p>
        </div>

        <div className='font-medium text-[#555555] '>
            <p className='font-bold text-[#465C47] mb-5'>UseFull Links</p>
            <p className='my-3'>AboutUs</p>
            <p className='my-3'>Events</p>
            <p className='my-3'>Blogs</p>
            <p className='my-3'>FAQ</p>
        </div>

        <div className='font-medium text-[#555555]'>
            <p className='font-bold text-[#465C47] mb-5'>Main Menu</p>
            <p className='my-3'>Home</p>
            <p className='my-3'>Offers</p>
            <p className='my-3'>Menu</p>
            <p className='my-3'>Reservation</p>
        </div>

        <div className='font-medium text-[#555555]'>
            <p className='font-bold text-[#465C47] mb-5'>Contact Us</p>
            <p className='text-[#555555]'>Example@gmail.com</p>
            <p className='my-3'>+2348166280639</p>
            <p className='my-3'>Social Media</p>
        </div>
    </div>

    <div>
        <p>Copyright 2023 Dscode | All rights reserved</p>
    </div>

    </>
  )
}

export default Footer