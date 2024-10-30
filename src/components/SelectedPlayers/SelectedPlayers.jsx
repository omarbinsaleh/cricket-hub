import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const SelectedPlayers = (props) => {
   const {selectedPlayers, handleDeleteButtonClick, handleAvailablePlayerButtonClick} = props;

   console.log(selectedPlayers);

  return (
    <div className='text-left space-y-5 p-3'>
      <h1>All Selected Players: {selectedPlayers.length}</h1>
      <div className='space-y-4 min-h-80 max-h-[500px] overflow-auto '>
         {selectedPlayers.length ? (selectedPlayers.map(player => {
            const {playerId, name, image, role} = player;
            return (
               <div key={playerId} className='p-2 flex items-center justify-between border border-slate-400 rounded-lg'>
                  <div className='flex items-center gap-3'>
                     <img className='w-16 aspect-[2/2] rounded-md border-2 border-slate-300' src={image} alt={name} />
                     <div className='text-left'>
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <p>{role}</p>
                     </div>
                  </div>

                  <div>
                     <button onClick={() => handleDeleteButtonClick(playerId)} className='btn hover:bg-red-500 hover:text-white hover:ring-2 focus:ring-2 ring-red-500 ring-offset-2'>
                        <FaTrashAlt className='text-3xl' />
                     </button>
                  </div>
               </div>
            )
         })) : (
            <div className='place-items-center min-h-80 flex items-center justify-center border-2 border-slate-300'>
               No Player is added yet!
            </div>
         )}
      </div>
      <button 
         onClick={handleAvailablePlayerButtonClick}
         className='btn bg-primary hover:bg-primary ring-2 ring-black ring-offset-4 rounded-sm p-2 px-4 font-bold'
      >
      Add More Player
      </button>
    </div>
  )
}

export default SelectedPlayers
