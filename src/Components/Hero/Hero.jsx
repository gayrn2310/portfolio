import React, {useState} from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" width="220" height="220" style={{borderRadius:"50%", objectFit:"cover" }}/>
      <h1>Gayatri Nadar</h1>
      <p>Constantly learning, coding, and creating as a computer engineer.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero
