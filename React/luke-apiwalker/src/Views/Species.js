import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import SWForm from "./SWForm";

const Species = (props) => {
    const { id } = useParams();
    const [being, setBeing] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get("https://swapi.dev/api/species/" + `${id}`)
        .then((response) => {
            console.log(response.data);
            setBeing(response.data);
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

        
        if(being===null) {
            return (
                <div className="d-flex align-items-center justify-content-center">
                <img src="https://i.imgur.com/Z72EXbC.gif" alt="loading BB-8" />
            </div>
        )
    }


    return (
        <div className="m-4">
            <SWForm />
            <h2>{being.name}</h2>
            <h2>Classification: {being.classification}</h2>
            <h2>Designation: {being.designation}</h2>
            <h2>Average Height: {being.average_height}</h2>
            <h2>Average Lifespan: {being.average_lifespan}</h2>
        </div>


    )
    
    
}

export default Species;