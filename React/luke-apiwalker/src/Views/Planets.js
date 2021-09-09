import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import SWForm from "./SWForm";

const Planet = (props) => {
    const { id } = useParams();
    const [world, setWorld] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + `${id}`)
        .then((response) => {
            console.log(response.data);
            setWorld(response.data);
            console.log(world);
        })
        }, [id]);

    if(world===null) {
        return (
            <div className="d-flex align-items-center justify-content-center">
                <img src="https://i.imgur.com/Z72EXbC.gif" alt="loading BB-8" />
            </div>
        )
    }
    
    return (
        <div className="m-4">
            <SWForm />
            <h2>{world.name}</h2>
            <h3>Climate: {world.climate}</h3>
            <h3>Terrain: {world.terrain}</h3>
            <h3>Surface Water: {world.surface_water}</h3>
            <h1>Success!</h1>
        </div>


    )
    
    
}
    

export default Planet;