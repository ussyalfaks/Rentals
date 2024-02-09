import React from 'react';

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer';


function App() {

  return (
    <>
<Navbar />
    <Hero/>
    <Aboutus/>
    <Services/>
    <Testimonial/>
    <Footer/>

</>

   
  )
}

export default App
