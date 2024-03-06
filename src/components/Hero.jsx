import React from 'react';
import bg from '../assets/hero-bg.mp4';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className='hero'>
      <video className='hero-video' src={bg} type="video/mp4"  loop muted>
        Your browser does not support the video tag.
      </video>

      <div className='hero-cont'>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: '20px' }}>
          <img className='hero-center-logo' src={logo} alt="Logo" />
          <span className='hero-h'>
            Make Like Omega with your very own straw tooka doll
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
