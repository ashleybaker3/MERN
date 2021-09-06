import React, { Component } from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0
        };
    }

    birthday = (event) => {
        this.setState({age: this.state.age + 1});
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const yearsOld = this.state.age;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <h3>Age: {yearsOld}</h3>
                <h3>Hair Color : {hairColor}</h3>
                <button onClick={(event) => {this.birthday(event)}}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;