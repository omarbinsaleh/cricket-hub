import React, { useState } from 'react'
import AllPlayers from '../AllPlayers/AllPlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import Search from '../Search/Search';

const Players = (props) => {
   const { players, selectedPlayers, handleChoosePlayerButtonClick, handleSearchAllPlayers, handleSearchAddedPlayers, handleDeleteButtonClick } = props;
   console.log(players);

   const [title, setTitle] = useState("Available Players");
   const [buttons, setButtons] = useState({
      availablePlayerBtn: {
         isActive: true,
         title: "Available Players",
      },
      selectedPlayerBtn: {
         isActive: false,
         title: "Selected Players",
      }
   });

   function handleAvailablePlayerButtonClick() {
      setTitle(buttons.availablePlayerBtn.title);
      const newButtons = { ...buttons }
      newButtons.availablePlayerBtn.isActive = true;
      newButtons.selectedPlayerBtn.isActive = false;
      setButtons(newButtons);
   }

   function hanldeSelectedPlayerButtonClick() {
      setTitle(buttons.selectedPlayerBtn.title);
      const newButtons = { ...buttons };
      newButtons.availablePlayerBtn.isActive = false;
      newButtons.selectedPlayerBtn.isActive = true;
      setButtons(newButtons);
   };

   return (
      <main className='max-w-mx mx-auto px-3 my-3 max-h-mx overflow-auto'>
         <header className='flex my-5 mt-10 items-center justify-between flex-wrap gap-4 sticky top-0 bg-white py-4 border-b-2 border-slate-400'>
            <h1 className='text-xl font-bold text-center md:text-left'>{title} {buttons.selectedPlayerBtn.isActive && `(${selectedPlayers.length} / 6)`}</h1>

            {buttons.availablePlayerBtn.isActive && <Search handleSearch={handleSearchAllPlayers}/>}

            {buttons.selectedPlayerBtn.isActive && <Search handleSearch={handleSearchAddedPlayers}/>}

            <div className='rounded-md border-2 border-primary'>
               <button onClick={handleAvailablePlayerButtonClick} className={`${buttons.availablePlayerBtn.isActive ? 'bg-primary' : 'bg-white'} p-2 btn rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none border-none font-bold hover:bg-primary`}>Available</button>
               <button onClick={hanldeSelectedPlayerButtonClick} className={`${buttons.selectedPlayerBtn.isActive ? 'bg-primary' : 'bg-white'} p-2 btn rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md font-bold hover:bg-primary`}>Selected {`(${selectedPlayers.length})`}</button>
            </div>
         </header>

         {/* <div className="divider"></div> */}

         <div>
            {buttons.availablePlayerBtn.isActive && <AllPlayers players={players} handleChoosePlayerButtonClick={handleChoosePlayerButtonClick} />}
            {buttons.selectedPlayerBtn.isActive && <SelectedPlayers selectedPlayers={selectedPlayers} handleDeleteButtonClick={handleDeleteButtonClick} handleAvailablePlayerButtonClick={handleAvailablePlayerButtonClick}/>}
         </div>

      </main>
   )
}

export default Players;
