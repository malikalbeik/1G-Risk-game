import React, { PureComponent } from 'react'
import './style.scss';
class Board extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        document.addEventListener("click", (e) => console.log(e.target.id));
    }

    render() {
        return (
            <div className="boardContainer">
                <i className="map" />
                
                 
            </div>
        )
    }
}

export default Board;