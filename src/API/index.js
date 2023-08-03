// all players
export const apiFetchAllPlayers = async () => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players"
    );
    const result = await response.json();
    // console.log(result);
    return result.data.players;
  } catch (err) {
    // console.error(err);
    throw new Error(err);
  }
};

// select single player

export const singlePlayerList = async (id) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players/${id}`
    );
    const result = await response.json();
    console.log(result);
    return result.data.player;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

// add a new player

// export const addNewPlayer = async () => {
//   try {
//     const response = await fetch(
//       "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: name }),
//       }
//     );
//     const result = await response.json();
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// };

// Delete Player:

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${playerId}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    console.log(result);
    apiFetchAllPlayers();
    window.location.reload();
  } catch (err) {
    console.log(`Trouble removing ${playerId}`);
  }
};
