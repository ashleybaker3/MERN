import React from "react";

const Results = (props) => {


    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confrim Password: {props.confirm}</p>
        </div>
    )
}

export default Results;