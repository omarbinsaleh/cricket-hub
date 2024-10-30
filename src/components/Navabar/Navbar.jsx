import React from 'react'
import logo from '../../assets/logo.png';
import { BsCoin } from 'react-icons/bs';

const Navbar = (props) => {
   const {balance} = props;

   return (
      <div className='bg-white bg-opacity-[85%] backdrop-blur-[30px] sticky top-0  border mb-4 z-10'>
         <nav className="navbar w-full max-w-mx mx-auto">
            <div className="flex-1">
               <a className="btn btn-ghost text-xl h-auto p-0 hover:bg-transparent"><img className='max-w-16' src={logo} alt="" /></a>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal px-1 items-center">
                  <li className='hidden sm:block'><a>Home</a></li>
                  <li className='hidden sm:block'><a>Fixture</a></li>
                  <li className='hidden sm:block'><a>Teams</a></li>
                  <li className='hidden sm:block'><a>Schedules</a></li>
                  <button className="btn text-xl border border-slate-300 bg-transparent">{balance} <BsCoin className='text-orange-500'/></button>
               </ul>
            </div>
      </nav>
      </div>
   )
}

export default Navbar
