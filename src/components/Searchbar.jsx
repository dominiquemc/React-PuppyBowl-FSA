export default function Searchbar({ setSearch }) {
  return (
    <input
      type="search"
      placeholder="Search here"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

// Users can search for a specific player in a search bar and see a new list of players with names matching the text in the search bar.
