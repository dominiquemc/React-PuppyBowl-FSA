import { useState, useEffect } from "react";
import { apiFetchAllPlayers } from "../API";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchAllPlayers() {
      const response = await apiFetchAllPlayers();
      setPlayers(response);
      console.log(response);
    }
    fetchAllPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h3>{player.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
