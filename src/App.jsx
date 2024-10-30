import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Navbar from './components/Navabar/Navbar';
import Hero from './components/Hero/Hero';
import Players from './components/Players/Players';
import Footer from './components/Footer/Footer';

function App() {
  const [players, setPlayers] = useState([])
  const [text, setText] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    fetch("./players.json")
      .then(response => response.json())
      .then(data => setPlayers(data.players));
  }, [])

  function handleCreditButtonClick() {
    setBalance(balance + 1500000);
  }

  function handleChoosePlayerButtonClick(id) {
    if (selectedPlayers.length >= 6) {
      toast.warn("You are not allowed to add more than 6 players", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const player = players.find(player => player.playerId === id);
    const isPlayerExist = selectedPlayers.find(player => player.playerId === id);

    if (isPlayerExist) {
      toast.warn(`${player.name} exist already`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (balance < player.biddingPrice) {
      toast.error("You do not have sufficient balance for this player\nPlease reacharge...!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setBalance(balance - player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player])
    toast.success(`Congratulation..!\nYou have added ${player.name} successfully.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
  }

  function handleSearchAllPlayers(searchText) {
    setText(searchText);
  }

  function handleSearchAddedPlayers(searchText) {

  }

  function handleDeleteButtonClick(id) {
    const newPlayerList = selectedPlayers.filter(player => player.playerId !== id);
    setSelectedPlayers(newPlayerList);

    const player = selectedPlayers.find(player => player.playerId === id);
    setBalance(balance + player.biddingPrice)
  }

  const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(text.toLowerCase()));

  return (
    <div>
      <Navbar balance={balance} />
      <Hero handleCreditButtonClick={handleCreditButtonClick} />
      <Players players={filteredPlayers} selectedPlayers={selectedPlayers} handleChoosePlayerButtonClick={handleChoosePlayerButtonClick} handleSearchAllPlayers={handleSearchAllPlayers} handleDeleteButtonClick={handleDeleteButtonClick} />
      <Footer />
    </div>
  )
}

export default App
