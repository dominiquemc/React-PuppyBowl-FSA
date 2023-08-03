import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div id="container">
      <h1>Welcome to Puppy Bowl!</h1>

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
