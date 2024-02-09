import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FcHome } from "react-icons/fc";
// import {  Link } from 'react-router-dom';




function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setMenuOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    //   scroll no

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isMenuOpen]);
    
  return (
    
    <div className='flex justify-evenly max-md:justify-around bg-white text-[#465C47] py-5'>
        <div className=''>
            <h1 className='flex text-xl items-center'><span className='font-extrabold'>Rent</span>Home <FcHome className='ml-1'/></h1>
                    </div>
            <nav  className={` ${isMenuOpen ? 'flex  justify-center items-center h-screen' : ''}`}>
            <ul className= {`flex  text-[#465C47] font-semibold ${isMenuOpen ? '  max-md:flex-col' : 'max-md:hidden'}`}>
                            <li className="mx-8 max-md:my-5 hover:underline">Home</li>
                            <li className="mx-8 max-md:my-5 hover:underline">About Us</li>
                            <li className="mx-8 max-md:my-5 hover:underline">Services</li>
                            <li className="mx-8 max-md:my-5 hover:underline">Testimonial</li>
                            <li className="mx-8 max-md:my-5 hover:underline">Contact Us</li>
                        </ul>
            </nav>

    <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-[#465C47]'>
          <FaBars size={24} />
        </button>
      </div>
  </div>
  
  )
}

export default Navbar
