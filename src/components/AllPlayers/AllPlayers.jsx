import React from 'react'
import { IoFlag } from 'react-icons/io5';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AllPlayers = (props) => {
   const { players, handleChoosePlayerButtonClick } = props;


   return (
      <div>
         <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {players.map(player => {
               const { playerId, name, country, image, battingType, bowlingType, biddingPrice, role } = player;

               return (
                  <div key={playerId} className=" card-compact bg-base-100 shadow-xl rounded-lg border-2 border-gray-300">
                     <figure>
                        <img
                           className='w-full aspect-[5/3] rounded-tr-lg rounded-tl-lg'
                           src={image}
                           alt={name} />
                     </figure>
                     <div className="p-4 px-2">
                        <div className='flex items-center gap-3'>
                           <img 
                              className='w-8 aspect-square rounded-full'
                              src={image} 
                              alt={name} />
                              <h2 className="card-title">{name}</h2>
                        </div>
                        <div className='flex items-center justify-between my-3 text-slate-500'>
                           <p className=' flex items-center gap-2'><IoFlag className='text-slate-600'/> <span>{country}</span></p>
                           <button className='bg-slate-200 py-1 px-4 rounded-md text-slate-700'>{role}</button>
                        </div>
                        <div className="divider"></div>
                        <div className="">
                           <div className='flex items-center justify-between gap-4 flex-wrap my-4'>
                              <p>Batting : <span className='text-slate-500'>{battingType}</span></p>
                              <p>Bowling : <span className='text-slate-500'>{bowlingType}</span></p>
                              <p className='text-lg font-semibold'>Price : $ {biddingPrice}</p>
                              <button onClick={() => handleChoosePlayerButtonClick(playerId)} className="btn py-2 hover:bg-primary hover:ring-2 focus:ring-2 ring-offset-2 ring-primary ring-offset-whit focus:bg-primary">Choose Player</button>
                              <ToastContainer
                                 position="top-right"
                                 autoClose={5000}
                                 hideProgressBar={false}
                                 newestOnTop={false}
                                 closeOnClick
                                 rtl={false}
                                 pauseOnFocusLoss
                                 draggable
                                 pauseOnHover
                                 theme="light"
                                 containerId={playerId}
                              /> 
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default AllPlayers;
