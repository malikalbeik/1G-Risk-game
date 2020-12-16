import React, { Component } from "react";
import { PLAYERS } from "../../config/gameConstants";
import { Button } from "reactstrap";

import Map from "./map/Map";
import styled from "styled-components";
import { BREAKPOINTS } from "../../config/gameConstants";

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
        <InnerContainer>
        <Title>Players</Title>
          {PLAYERS.map((player) => {
            return (
              <CardBorder>
                  <Name>{player.name}</Name>
                  <Reserved>
                    Reserve: {player.reserve}
                  </Reserved>
              </CardBorder>
            );
          })}
        </InnerContainer>
        <MapContainer selectedCountryId={selectedCountryId} />
        <InnerContainer>
            <Name>Country Selected: </Name>
            <Name>{selectedCountryId} </Name>
            <StyledButton> Attack </StyledButton>
            <StyledButton> Deploy 1 Troop </StyledButton>
            <StyledButton> Deploy All Troops </StyledButton>
        </InnerContainer>
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
  background-color: #88b6da;
  height: 100vh;
`;

const InnerContainer = styled.div`
  width: 20%;
  height: 70%;
  margin-left: 2%;
  margin-right: 2%;
  padding: 25px;
  border-radius: 25px;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (${BREAKPOINTS.sm}) {
    width: 50%;
    height: 40%;
  }
`;

const CardBorder = styled.div`
  width: 100%;
  height: 30%;
  margin-left: 2%;
  margin-right: 2%;
  
  border-radius: 25px;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (${BREAKPOINTS.sm}) {
    width: 100%;
    height: 30%;
  }
`;

const MapContainer = styled(Map)``;

const StyledButton = styled(Button)`
  width: 90%;
  margin: 10% 0 0 0;
  font-size: large;
  font-weight: bold;
  background-color: #1d65a8;
  color: white;

  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.24)
  }

  :active {
    transform: translateY(2px);
  }

  @media (${BREAKPOINTS.md}) {
    width: 80%;
  }

  @media (${BREAKPOINTS.sm}) {
    font-size: 50%;
    width: 100%;
  }
`;

const Title = styled.h4`
  font-size: 180%;
  text-align: center;
  margin: 0 0 10% 0;
  @media (${BREAKPOINTS.sm}) {
    font-size: 100%;
    margin: 0 0 2px 0;
    text-align: center;
  }
`;

const Name = styled.h5`
  font-size: 140%;
  text-align: center;
  margin: 0 0 10% 0;
  @media (${BREAKPOINTS.sm}) {
    font-size: 100%;
    margin: 0 0 2px 0;
    text-align: center;
  }
`;

const Reserved = styled.h6`
  font-size: 100%;
  text-align: center;
  color: #606060;
  @media (${BREAKPOINTS.sm}) {
    font-size: 80%;
    text-align: center;
  }
`;

export default Board;