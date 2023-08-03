import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singlePlayerList } from "../API";
import { Link } from "react-router-dom";

export default function SinglePlayer() {
  const [single, setSinglePlayer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function indPlayer() {
      const response = await singlePlayerList(id);
      setSinglePlayer(response);
    }
    indPlayer();
    console.log(single);
  }, []);

  return (
    <>
      <div className="singlePlayer">
        <h1>Meet {single.name}</h1>
        <img src={single.imageUrl} />
        <p>Breed: {single.breed}</p>
        <p>Team: {single.teamId}</p>
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </>
  );
}
