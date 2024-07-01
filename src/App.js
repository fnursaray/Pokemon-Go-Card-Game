import Pokegame from "./Pokegame";
import "./Pokecard.css";
import "./App.css";
import RefreshButton from "./RefreshButton";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Go Card Game</h1>
      <RefreshButton />
      <Pokegame />
    </div>
  );
}

export default App;
