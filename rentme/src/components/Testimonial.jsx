import React, { useEffect } from 'react';
import Person1 from '../assets/p1.png'
import Person2 from '../assets/p2.png'
import Person3 from '../assets/p3.png'



function Testimonial() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <> 
    <div id='Testimonial' className="flex items-center justify-center my-28">
    <div className="text-center">
      <h1 className="text-6xl mb-4 text-[#465C47] max-md:text-5xl font-Messiri">What Customers Say <br /> About Our Services</h1>
      <p className=" mb-8 text-[#465C47] mx-5">We Make Finding Rentals Easy, Effortless Search, Endless Choice.</p>
      <div className="flex justify-center text-[#465C47] max-md:flex-col mx-10">


          <div className="p-8 mx-4 rounded-tr-[25%] rounded-bl-[25%] rounded-br-2xl rounded-tl-2xl  border-4 border-[#465C47]  mb-4 shadow-md">
               <img src={Person1} width={120}  className=" text-4xl mb-4 block mx-auto"/>
              <h2 className="text-2xl font-bold mb-2">David Anderson</h2>
              <p className=" ">“I loved the experience, renting a home was an pleasure. From the communication was seamless and professional”.</p>
          </div>

          <div className="p-8 mx-4 rounded-tr-[25%] rounded-bl-[25%] rounded-br-2xl rounded-tl-2xl  border-4 border-[#465C47]  mb-4 shadow-md">
              <img src={Person2} width={120} className=" text-4xl mb-4 block mx-auto"/>
              <h2 className="text-2xl  font-bold mb-2">Alex Mitchell</h2>
              <p className=" ">“It was an Amazing Experience, the attention to detail, personalized approach made the entire process stress-free”.</p>
          </div>

          <div className="p-8 mx-4 rounded-tr-[25%] rounded-bl-[25%] rounded-br-2xl rounded-tl-2xl  border-4 border-[#465C47]  mb-4 shadow-md">
              <img src={Person3} width={120}  className=" text-4xl mb-4 block mx-auto"/>
              <h2 className="text-2xl  font-bold mb-2">Ryan Bennett</h2>
              <p className="">“Our experience was so good with renting services exceeded all expectations. Demonstrated a deep understanding”.</p>
          </div>

      </div>
  </div>
    </div>
  </>
  )
}

export default Testimonial
