import React from 'react'
import Vector1 from '../assets/v1.png'
import Vector2 from '../assets/v2.png'
import Vector3 from '../assets/v3.png'

function Services() {
  return (
    <> 
      <div className="flex items-center justify-center my-20">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-[#465C47] max-md:text-5xl font-Messiri">See Our Services</h1>
        <p className=" mb-8 text-[#465C47] mx-5">We Make Finding Rentals Easy, Effortless Search, Endless Choice.</p>
        <div className="flex justify-center text-white max-md:flex-col mx-10">


            <div className="p-8 mx-4 rounded-xl bg-[#26582A] mb-2 shadow-md">
                 <img src={Vector3} width={120}  className=" text-4xl mb-4 block mx-auto"/>
                <h2 className="text-2xl font-bold mb-2">Responsive</h2>
                <p className=" ">Our commitment to being responsive means that your concerns and efficient.</p>
            </div>

            <div className="p-8 mx-4 rounded-xl bg-[#26582A] mb-2 shadow-md">
                <img src={Vector2} width={120} className=" text-4xl mb-4 block mx-auto"/>
                <h2 className="text-2xl  font-bold mb-2">Green</h2>
                <p className=" ">Experience the convenience of our responsive platform, ensuring swift communication.</p>
            </div>

            <div className="p-8 mx-4 rounded-xl bg-[#26582A] mb-2 shadow-md">
                <img src={Vector1} width={120}  className=" text-4xl mb-4 block mx-auto"/>
                <h2 className="text-2xl  font-bold mb-2">Security</h2>
                <p className="">Ensuring swift communication and quick solutions for all your rental needs.</p>
            </div>

        </div>
    </div>
      </div>
    </>
  )
}

export default Services
