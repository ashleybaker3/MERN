import React from "react";
import {useParams} from "react-router-dom";

const HelloBlueRed = (props) => {
    const { blue } = useParams();
    const { red } = useParams();

    return (
        <h1 style={{color: blue , background: red}}>The word is: Hello</h1>
    )
}

export default HelloBlueRed;