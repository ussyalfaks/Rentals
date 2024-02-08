import React, { useEffect } from 'react';
import House from "../assets/h3.png"

function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div id='Home' className="flex flex-col md:flex-row gap-10 items-center justify-center p-8 md:p-16 bg-white text-[#465C47]">
  <div className=" md:text-left lg:ml-40 ">
    <h1 className="text-6xl md:text-5xl mb-4  font-Messiri">Your <br /> Rental Journey <br /> Begins Here</h1>
    <p className="text-lg mb-8 capitalize">We make finding rentals easy, Effortless search, Endless Choice </p>
    <div className="flex space-x-4">
      <button className=" py-1 px-4 bg-[#465C47] text-white btn-outline font-normal rounded-2xl ">Rent Now</button>
      <button className="btn btn-sm btn-outline text-[#465C47] font-light rounded-2xl ">Rent Your Place</button>
    </div>
  </div>

  <div className="mt-8 md:mt-0 ">
    <img className="w-full max-w-md mx-auto md:max-w-xl" src={House}  alt="Herohouse" />
  </div>
</div>

    </>
  )
}

export default Hero
