import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../config/gameConstants";

class Card {
    constructor(territoryName, infantaryType){
        this.territoryName = territoryName;
        this.infantaryType = infantaryType;
    }

    getTerritoryName(){
        return this.territoryName;
    }

    getInfantaryType(){
        return this.infantaryType;
    }
}

const CardBorder = styled.div`
    width: 100%;
    height: 12%;
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

const Name = styled.h5`
    font-size: 100%;
    text-align: center;
    margin: 0 0 10% 0;
    @media (${BREAKPOINTS.sm}) {
        font-size: 80%;
        margin: 0 0 2px 0;
        text-align: center;
    }
`;