import React, { Component } from "react";

class Hello extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subheading}</h3>
            <ul>
                {
                    this.state.listItems.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    }
}

export default Hello;