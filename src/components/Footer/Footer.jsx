import React from 'react'
import footerLogo from '../../assets/logo-footer.png';
import Card from "./Card"

const Footer = () => {
   return (
      <div className='pt-52'>
         <footer className='bg-[#06091A] py-10 mt-10 pt-52 relative'>
            <div className='absolute w-full -top-[130px] flex items-center justify-center left-0 p-3'>
               <Card />
            </div>
            <div className='p-3'>
               <div>
                  <img className='mx-auto' src={footerLogo} alt="" />
               </div>
               <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3 text-white max-w-mx mx-auto mt-20'>
                  <div className='text-left space-y-3'>
                     <h className='text-lg'>About Us</h>
                     <p className='max-w-72 text-slate-400'>
                        We are a passionate team dedicated to providing the best services to our customers.
                     </p>
                  </div>
                  <div className='text-left space-y-3'>
                     <h1 className='text-lg'>Quick Links</h1>
                     <ul className='text-slate-400'>
                        <li className='cursor-pointer hover:underline hover:text-white'>Home</li>
                        <li className='cursor-pointer hover:underline hover:text-white'>Services</li>
                        <li className='cursor-pointer hover:underline hover:text-white'>About Us</li>
                        <li className='cursor-pointer hover:underline hover:text-white'>Contact Us</li>
                     </ul>
                  </div>
                  <div className='text-left space-y-3'>
                     <h1 className='text-lg'>Subscribe</h1>
                     <div className='text-slate-400 space-y-3'>
                        <p>Subscribe to our newsletter for the latest update</p>
                        <div className='border border-slate-300 rounded-lg flex w-full bg-white'>
                           <input className='bg-transparent outline-none flex-1 py-2 px-2 bg-white rounded-tl-md rounded-bl-md' type="email" id='email' placeholder='Enter your email' />
                           <button className=' bg-gradient-to-r from-orange-300 to bg-red-300 text-black font-bold rounded-tr-md rounded-br-md h-full py-2 px-4 btn rounded-tl-none rounded-bl-none'>Subscribe</button>
                        </div>

                     </div>
                  </div>
               </div>
               <div className="max-w-mx mx-auto border-b-2 my-8 border-gray-800"></div>
               <div>
                  <p className='text-center text-slate-500'>@2024 All Rights Reserved to Cricket Hub</p>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default Footer
