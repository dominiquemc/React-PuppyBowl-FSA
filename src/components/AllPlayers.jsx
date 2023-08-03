import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetchAllPlayers, deletePlayer } from "../API";
import NewPlayer from "./NewPlayerForm";
import Searchbar from "./Searchbar";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  function navToSinglePlayer(id) {
    navigate(`/view/${id}`);
  }

  useEffect(() => {
    async function fetchAllPlayers() {
      const response = await apiFetchAllPlayers();

      if (search) {
        const filteredPlayers = response.filter((item) => item.name === search);
        setPlayers(filteredPlayers);
      } else {
        setPlayers(response);
      }
      console.log(response);
    }
    fetchAllPlayers();
  }, [search]);

  return (
    <>
      <Searchbar setSearch={setSearch} />
      <NewPlayer />
      <div className="allPlayers">
        {players.map((player) => {
          return (
            <div key={player.id}>
              <h3>{player.name}</h3>
              <img src={player.imageUrl} />
              <button onClick={() => navToSinglePlayer(player.id)}>
                Click to view more
              </button>
              <br />
              <button onClick={() => deletePlayer(player.id)}>
                Delete Player
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
