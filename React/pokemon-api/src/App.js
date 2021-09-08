import { useState } from 'react/cjs/react.development';
import './App.css';
import PokemonList from './Components/Pokemon';

function App() {
  const [pushed, setPushed] = useState(false);

  const fetchPokemon = (e) => {
    setPushed(!pushed);
  }

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      { pushed ?
      <PokemonList /> : ""      
    }
    </div>
  );
}

export default App;
