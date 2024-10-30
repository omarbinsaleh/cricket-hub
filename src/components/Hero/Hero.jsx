import React from 'react';
import bannerImg from '../../assets/banner-main.png';
import './Hero.css';

const Hero = (props) => {
   const {handleCreditButtonClick} = props;

  return (
    <div className='hero-container text-center p-5 md:p-20 py-20 rounded-2xl space-y-4 max-w-mx mx-3 xl:mx-auto'>
      <img className='w-3/12 mx-auto' src={bannerImg} alt="" />
      <h1 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <h3 className=' text-white text-xl'>Beyond Boundaries Beyond Limits</h3>
      <button onClick={handleCreditButtonClick} className='btn bg-primary ring-1 ring-primary ring-offset-black ring-offset-2 text-black text-xl hover:bg-[#a2ad3a] font-bold border-none'>Claim Free Credit</button>
    </div>
  )
}

export default Hero
