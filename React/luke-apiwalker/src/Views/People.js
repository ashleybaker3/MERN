import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import SWForm from "./SWForm";

const Person = (props) => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + `${id}`)
        .then((response) => {
            console.log(response.data);
            setCharacter(response.data);
        })
        .catch((err) => {
            console.log(err);
            setError(true);
        });
        }, [id]);

        if(error) {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center container">
                    <h1>These are not the droids you're looking for</h1>
                    <img src="https://www.pngkey.com/png/detail/189-1897285_obi-wan-kenobi-iron-fist-8-bit.png" alt="8-bit Obi Wan Kenobi" />
                    <a href="/">Home</a>
                </div>
            )
        }

        
        if(character===null) {
            return (
                <div className="d-flex align-items-center justify-content-center">
                <img src="https://i.imgur.com/Z72EXbC.gif" alt="loading BB-8" />
            </div>
        )
    }



    return (
        <div className="m-4">
            <SWForm />
            <h2>{character.name}</h2>
            <h2>Height: {character.height}</h2>
            <h2>Mass: {character.mass}</h2>
            <h2>Hair Color: {character.hair_color}</h2>
            <h2>Eye Color: {character.eye_color}</h2>
        </div>


    )
    
    
}

export default Person;