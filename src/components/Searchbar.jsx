export default function Searchbar({ setSearch }) {
  return (
    <>
      <h3>Search for a player</h3>
      <input
        type="search"
        className="searchbar"
        placeholder="Enter exact name"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

// Users can search for a specific player in a search bar and see a new list of players with names matching the text in the search bar.
