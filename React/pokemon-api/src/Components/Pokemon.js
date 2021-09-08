import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState(null);
    
    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((resp) => {
                console.log(resp.data);
                setPokemon(resp.data.results);
            });
        // fetch('https://pokeapi.co/api/v2/pokemon')
        // .then(response => response.json()
        // ).then(response => setPokemon(response.results))
    }, []);

    if(pokemon === null) {
        return (
            <img src="https://i1.wp.com/i.giphy.com/media/p6Z99AYhI5RQs/giphy.gif" alt="Slowpoke Loading"/>
        )
    }

    return (
        <div>
            {pokemon.length > 0 && pokemon.map((monster, i)=>{
                return (<li key={i}>{monster.name}</li>)
            })}
            {console.log(pokemon.length)}
        </div>
    )
}

export default PokemonList;


// useEffect(() => {
//     axios
//       .get("https://api.spacexdata.com/v5/launches")
//       .then((resp) => {
//         console.log(resp.data);
//         setLaunches(resp.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);