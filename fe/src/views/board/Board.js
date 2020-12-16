import React, { Component } from "react";
import { PLAYERS } from "../../config/gameConstants";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";

import Map from "./map/Map";
import styled from "styled-components";
class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCountryId: "",
        };
    }

    componentDidMount() {
        document.addEventListener("click", this.getClickedMapCountry);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.getClickedMapCountry);
    }

    render() {
        const { selectedCountryId } = this.state;
        return (
            <BoardContainer>
                <PlayersContainer>
                    {PLAYERS.map((player) => {
                        return (
                            <PlayerCard>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {player.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        tag="h6"
                                        className="mb-2 text-muted"
                                    >
                                        Reserve: {player.reserve}
                                    </CardSubtitle>
                                </CardBody>
                            </PlayerCard>
                        );
                    })}
                </PlayersContainer>
                <MapContainer selectedCountryId={selectedCountryId} />
            </BoardContainer>
        );
    }

    getClickedMapCountry = (e) => {
        console.log(e.target.id);
        this.setState({ selectedCountryId: e.target.id });
    };
}
const BoardContainer = styled.div`
    padding-top: 125px;
    display: flex;
    max-height: 320px;
`;
const PlayersContainer = styled.div`
    width: 20%;
    padding: 0px;
    margin: 0px;
`;
const PlayerCard = styled(Card)`
    width: 100%;
`;
const MapContainer = styled(Map)``;
export default Board;
