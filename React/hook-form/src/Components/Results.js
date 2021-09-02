import React from "react";

const Results = (props) => {
    const { firstName, lastName, email, password, confirm } = props.data;

    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confrim Password: {confirm}</p>
        </div>
    )
}

export default Results;