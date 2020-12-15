import React, { Component } from "react";
import "./style.scss";

import Map from "../map/Map";
class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        document.addEventListener('click', (e) => console.log(e.target.id));
    }

    render() {
        return (
            <div className="boardContainer">
                <Map />
            </div>
        );
    }
}

export default Board;
