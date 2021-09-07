import React, { useEffect, useState } from "react";

const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json()
        ).then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            {pokemon.length > 0 && pokemon.map((monster, i)=>{
                return (<li key={i}>{monster.name}</li>)
            })}
        </div>
    )
}

export default PokemonList;