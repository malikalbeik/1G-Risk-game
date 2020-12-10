import React, { PureComponent } from "react";
import NormalMap from './normalMap/NormalMap';
import "./style.scss";
class Map extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <NormalMap/> 
            </div>
        );
    }
}

export default Map;
