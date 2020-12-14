import React, { PureComponent } from "react";
// import "./style.scss";

import Map from '../map/Map';
class Board extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
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
