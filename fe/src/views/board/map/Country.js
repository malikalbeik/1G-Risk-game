import React, { Component } from "react";
import styled from "styled-components";

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfTroops: 0,
        };
    }

    render() {
        const { numberOfTroops } = this.state;
        const Path = styled.path`
            cursor: pointer;

            @keyframes switch {
                50% {
                    opacity: 1;
                }
            }

            @keyframes fillChange {
                50% {
                    fill: #fff;
                }
            }
            animation: ${(props) => {
                if (props.id === this.props.selectedCountryId) {
                    return "fillChange 2s infinite ease both";
                }
            }}}
        `;
        const Text = styled.text`
            pointer-events: none;
        `;
        return (
            <g>
                <Path
                    id={this.props.id}
                    d={this.props.d}
                    stroke="black"
                    strokeMiterlimit="4.32165"
                />
                <Text
                    x={this.props.textCoordinates[0]}
                    y={this.props.textCoordinates[1]}
                    fontFamily="Verdana"
                    fontSize="15"
                    fill="white"
                >
                    {numberOfTroops}
                </Text>
            </g>
        );
    }
}

export default Country;
