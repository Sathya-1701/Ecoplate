import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='hero container' id='Hero'>
      <div className="hero-text">
        <h1>Eco Plate - Sustainable Living, One Plate at a Time</h1>
        <p>Our eco-friendly plates are made from natural, biodegradable materials. Perfect for conscious consumers.</p>
        <a href="#" > <button className='btn'>Shop Now <FaArrowRight className='FaArrowRight'/></button></a>
      </div>
    </div>
  )
}

export default Hero
