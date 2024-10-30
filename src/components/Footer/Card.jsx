import React from 'react'
import './Card.css';

const Card = () => {
  return (
    <div className='p-3 w-full md:w-8/12 mx-auto backdrop-blur-2xl border-2 border-slate-100 rounded-lg bg-white bg-opacity-40'>
      <div className='card-body py-32 text-center rounded-lg flex flex-col gap-4 items-center justify-center'>
         <h1 className='text-2xl font-bold'>Subscribe to our Newsletter</h1>
         <p>Get the latest updates and news right in your inbox!</p>
         <div className='flex items-center gap-2 w-full justify-center'>
            <input className='py-2 flex-1 max-w-[350px] rounded-lg px-3 h-full bg-white bg-opacity-80 border border-slate-400' type="email" placeholder='Enter you email' />
            <button className=' bg-gradient-to-r from-orange-300 to bg-red-300 text-black btn outline-none border-none font-bold rounded-tr-md rounded-br-md h-full py-2 px-4 '>Subscribe</button>
         </div>
      </div>
    </div>
  )
}

export default Card
