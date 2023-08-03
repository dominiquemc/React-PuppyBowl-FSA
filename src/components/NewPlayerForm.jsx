import { useState } from "react";

export default function NewPlayer() {
  const [newPlayer, setNewPlayer] = useState("");
  const [newBreed, setNewBreed] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newTeamId, setNewTeamId] = useState("");

  const addNewPlayer = async () => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newPlayer,
            breed: newBreed,
            status: newStatus,
            imageUrl: newImage,
            teamId: newTeamId,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setNewPlayer("");
      setNewBreed("");
      setNewStatus("");
      setNewImage("");
      setNewTeamId("");
    } catch (err) {
      console.error(err);
    }
  };

  // WORKING ON
  return (
    <div className="form">
      <h3>Add New Player</h3>
      <form onSubmit={addNewPlayer}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
          />
        </label>

        <label>
          Breed:
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={newBreed}
            onChange={(e) => setNewBreed(e.target.value)}
          />
        </label>

        <label>
          Status:
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
        </label>

        <label>
          Team ID:
          <input
            type="number"
            name="teamId"
            placeholder="Team ID"
            value={newTeamId}
            onChange={(e) => setNewTeamId(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
