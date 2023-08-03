import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
      </div>

      <>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/view/:id" element={<SinglePlayer />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
