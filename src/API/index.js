export const apiFetchAllPlayers = async () => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players"
    );
    const result = await response.json();
    console.log(result);
    return result.data.players;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
