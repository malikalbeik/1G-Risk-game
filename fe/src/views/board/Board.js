import React, { Component } from "react";

import Map from "./map/Map";
class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.addEventListener('click', this.getClickedMapCountry);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.getClickedMapCountry);
    }

    render() {
        return (
            <Map />
        );
    }

    getClickedMapCountry = e => {
        console.log(e.target.id);
    }
}

export default Board;
