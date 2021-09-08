import React from "react";
import {useParams} from "react-router-dom";

const Variable = (props) => {
    const { item } = useParams();

    if(isNaN(+item)) {
        return (
            <h1>The word is: {item}</h1>
        )
    }
    else {
        return (
            <h1>The number is: {item}</h1>
        )
    }
}

export default Variable;