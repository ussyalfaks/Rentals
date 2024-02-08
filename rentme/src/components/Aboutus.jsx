import React, { useEffect } from 'react';
import ABTHouse from "../assets/h4.png"

function Aboutus() {
  // my
  return (
    <>
  <div id='Aboutus' className="flex flex-col md:flex-row items-center mb-8 gap-3 justify-center p-6 md:p-16  text-[#465C47]">
  <div className="flex-1 order-1 max-md:order-2">
    <img className="w-full max-w-md mx-auto md:max-w-xl" src={ABTHouse} alt="Herohouse" />
  </div>
  <div className="flex-1 md:text-left lg:ml-20 order-2 max-md:order-1">
    <h1 className="text-5xl md:text-5xl mb-4 font-Messiri">Begin <br /> your awesome  <br /> journey</h1>
    <p className="text-lg mb-8 capitalize">
      Looking for the perfect home to rent? Our user-friendly
      house rental website makes your search a breeze.
      Browse through a diverse range of listings,
      From cozy apartments to spacious family houses.
    </p>
    <p className="text-lg mb-8 capitalize">
      With detailed descriptions, vivid photos, and handy
      filters, finding your ideal rental is just a click away.
    </p>
    <div className="flex space-x-4">
      <button className="py-1 px-4 bg-[#465C47] text-white btn-outline font-normal rounded-2xl">Continue</button>
      {/* <button className="btn btn-sm btn-outline font-bold text-[#141E15] rounded-2xl">Continue</button> */}
    </div>
  </div>
</div>

    </>
  )
}

export default Aboutus
