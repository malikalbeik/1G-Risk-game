import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withAlert } from "react-alert";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import fire from "../../firebase";
import Map from "./map/Map";
import { BREAKPOINTS, COUNTRIES } from "../../config/gameConstants";
import Player from "./Player";
import PlayerTurnDecider from "./PlayerTurnDecider";
import TroopsGiver from "./TroopsGiver";
import CardDeck from "./CardDeck";
import CardTrader from "./CardTrader";
import "./index.css";

class Board extends Component {
  timer = undefined;
  delay = 200;
  prevent = false;

  constructor(props) {
    super(props);

    this.state = {
      players: [],
      selectedCountryId: "",
      initialSetupPhase: true,
      turnsPhase: false,
      numOfAttackerTroops: 0,
      numOfDefenderTroops: 0,
      numOfTroopsToMove: 0,
      attackOrSkipTurnPhase: false,
      attackState: false,
      maneuverState: false,
      tradeCardsState: false,
      validity: false,
      countryToAttackOrManeuverTo: "",
      showCards: false,
      clickedCardNumber: undefined,
      currentPlayerSelectedCards: [],
    };
    this.allPlayers = [];
    this.initializePlayers();
    this.map = new Map(this.allPlayers);
    this.countryIds = Object.values(COUNTRIES).map((country) => country.value);
    this.playerTurnDecider = new PlayerTurnDecider(this.allPlayers);
    this.allPlayers[0].setIsPlayerTurn(true);
    this.troopsGiver = new TroopsGiver(
      this.map.getCountries(),
      this.map.getContinents()
    );
    this.cardsDeck = new CardDeck();
    this.cardsTrader = new CardTrader();
    this.getAsJson = this.getAsJson.bind(this);
    this.saveGame = this.saveGame.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.onClickListener);
    document.addEventListener("dblclick", this.onDoubleClickListener);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClickListener);
    document.removeEventListener("dblclick", this.onDoubleClickListener);
  }

  initializePlayers = () => {
    const { players } = this.props.history.location.state;
    for (let i = 0; i < players.length; i++) {
      this.allPlayers.push(
        new Player(
          players[i].name,
          players[i].id,
          players[i].reservePersonel,
          players[i].color,
          false,
          players[i].playerTurnNumber
        )
      );
    }
  };

  getAsJson() {
    var result = {};
    result.players = this.allPlayers;
    result.map = this.map.getAsJson();
    return result;
  }

  async saveGame(gameName) {
    if (!this.props.currentUser) return;
    const userRef = fire.firestore().doc(`users/${this.props.currentUser.uid}`);
    var gameData = {};
    var savedGameName = "game-" + gameName;
    gameData[savedGameName] = JSON.parse(JSON.stringify(this.getAsJson()));
    userRef.set(gameData, { merge: true }).catch((error) => {
      console.error("Error saving game", error);
    });
  }

  async loadGame(gameName) {
    if (!this.props.currentUser) return;
    const userRef = fire.firestore().doc(`users/${this.props.currentUser.uid}`);
    // var data = await userRef.get()
    var savedGameName = "game-" + gameName;
  }

  render() {
    const {
      attackState,
      maneuverState,
      selectedCountryId,
      countryToAttackOrManeuverTo,
      numOfAttackerTroops,
      numOfDefenderTroops,
      initialSetupPhase,
      showCards,
      currentPlayerSelectedCards,
    } = this.state;
    const { alert } = this.props;
    const playerCards =
      this.playerTurnDecider.getCurrentPlayerInfo().getCards() || [];

    return (
      <BoardContainer>
        <SlidingPane
          className="slidingPane"
          isOpen={showCards}
          title={
            this.playerTurnDecider.getCurrentPlayerInfo().getName() + " Cards"
          }
          from="left"
          onRequestClose={() => {
            this.setState({ showCards: false, tradeCard: false });
          }}
          overlayClassName="slidingPaneOverlay"
        >
          {playerCards && playerCards.length > 0 ? (
            <RiskCardsContainer>
              {playerCards.map((card, index) => {
                return (
                  <RiskCard
                    key={index}
                    onClick={() => this.cardClickHandler(card)}
                  >
                    <CardType>{card.cardType}</CardType>
                    <br />
                    <TerritoryName>{card.territoryName}</TerritoryName>
                    <br />
                    <InfantryType>{card.infantaryType}</InfantryType>
                    <br />
                  </RiskCard>
                );
              })}
            </RiskCardsContainer>
          ) : null}
          <TradeButton
            onClick={this.tradeCard}
            disabled={currentPlayerSelectedCards.length !== 3}
          >
            Trade
          </TradeButton>
        </SlidingPane>
        <CardContainer>
          <StyledCardsIcon
            onClick={() => {
              this.setState({ showCards: !showCards, tradeCard: true });
            }}
          />
        </CardContainer>
        <Table>
          <thead>
            <tr>
              <th>Continent</th>
              <th> +Troops</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Africa</td>
              <td>5</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Asia</td>
              <td>7</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Australia</td>
              <td>2</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Europe</td>
              <td>5</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>North America</td>
              <td>5</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>South America</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
        <MapContainer>
          <InnerContainer>
            {this.allPlayers.map((player) => player.getView())}
          </InnerContainer>
          {this.map.getView()}
          {selectedCountryId ? (
            <span>{COUNTRIES[selectedCountryId].name} </span>
          ) : null}
          <AttackerTroopsInput
            value={this.state.numOfAttackerTroops}
            onChange={(e) => this.validateInput(e, "numOfAttackerTroops")}
            style={{ zIndex: attackState ? "1000" : "-1" }}
          />
          <DefenderTroopsInput
            value={this.state.numOfDefenderTroops}
            onChange={(e) => this.validateInput(e, "numOfDefenderTroops")}
            style={{ zIndex: attackState ? "1000" : "-1" }}
          />
          {!initialSetupPhase ? (
            <ActionButton
              onClick={() => {
                const result = this.map.attackTerritory(
                  selectedCountryId,
                  countryToAttackOrManeuverTo,
                  numOfAttackerTroops,
                  numOfDefenderTroops
                );
                if (typeof result === "object") {
                  if (result.won && result.message === "TERRITORY_OCCUPIED") {
                    alert.success(
                      this.playerTurnDecider.getCurrentPlayerInfo().getName() +
                        " won."
                    );
                    const card = this.cardsDeck.getCard();
                    if (card) {
                      const currentPlayerId = this.playerTurnDecider
                        .getCurrentPlayerInfo()
                        .getId();
                      for (let i = 0; i < this.allPlayers.length; i++) {
                        if (this.allPlayers[i].getId() === currentPlayerId) {
                          this.allPlayers[i].addCard(card);
                          break;
                        }
                      }
                      alert.success(
                        this.playerTurnDecider
                          .getCurrentPlayerInfo()
                          .getName() + " received a card."
                      );
                    } else {
                      alert.error("No cards left to give.");
                    }
                  } else {
                    alert.show(
                      this.playerTurnDecider.getCurrentPlayerInfo().getName() +
                        " lost."
                    );
                  }
                }
              }}
            >
              Attack
            </ActionButton>
          ) : null}
          {maneuverState ? (
            <>
              <AttackerTroopsInput
                value={this.state.numOfAttackerTroops}
                onChange={(e) => this.validateInput(e, "numOfAttackerTroops")}
              />
              <ActionButton
                onClick={() => {
                  const outcome = this.map.attackTerritory(
                    selectedCountryId,
                    countryToAttackOrManeuverTo,
                    numOfAttackerTroops,
                    numOfDefenderTroops
                  );
                }}
              >
                {attackState ? "Attack" : "Maneuver"}{" "}
              </ActionButton>
            </>
          ) : null}
          {!initialSetupPhase ? (
            <EndButton onClick={() => this.endTurnForPlayer(true)}>
              End Turn
            </EndButton>
          ) : null}
        </MapContainer>
      </BoardContainer>
    );
  }

  cardClickHandler = (card) => {
    const { currentPlayerSelectedCards } = this.state;
    for (let i = 0; i < currentPlayerSelectedCards.length; i++) {
      if (
        JSON.stringify(currentPlayerSelectedCards[i]) === JSON.stringify(card)
      ) {
        return false;
      }
    }
    currentPlayerSelectedCards.push(card);
    this.setState(
      { currentPlayerSelectedCards: currentPlayerSelectedCards },
      () => this.forceUpdate()
    );
  };

  deployTurnTroops = () => {
    const { selectedCountryId } = this.state;
    if (
      this.map.deployTroop(
        selectedCountryId,
        this.playerTurnDecider.getPlayerWithTurn(),
        1
      )
    ) {
      this.forceUpdate();
    }
    if (
      this.playerTurnDecider.getCurrentPlayerInfo().getRemainingTroops() === 0
    ) {
      // this.map.resetCountryState();
      this.forceUpdate();
      if (this.playerTurnDecider.getCurrentPlayerInfo().getCards().length > 5) {
        this.setState({ showCards: true });
        return;
      }
      this.setState({
        turnsPhase: false,
        attackOrSkipTurnPhase: true,
        countryToAttackOrManeuverTo: "",
      });
    }
  };

  tradeCard = () => {
    const { currentPlayerSelectedCards } = this.state;
    const currentPlayer = this.playerTurnDecider.getCurrentPlayerInfo();
    if (currentPlayer.getNoOfCards() > 3) {
      this.cardsTrader.setNoOfPreviousTrades(
        currentPlayer.getNumOfCardTrades()
      );
      currentPlayer.setNumOfCardTrades(currentPlayer.getNumOfCardTrades() - 1);
      currentPlayer.setRemainingTroops(
        currentPlayer.getRemainingTroops() +
          this.cardsTrader.tradeCards(currentPlayerSelectedCards)
      );
      currentPlayer.removeCards(currentPlayerSelectedCards);
      this.forceUpdate();
    }
    if (currentPlayer.getNoOfCards() < 5) {
      this.setState({ showCards: true });
    }
  };

  deployInitialTroops = () => {
    const { alert } = this.props;
    const { selectedCountryId } = this.state;
    if (
      this.map.deployTroop(
        selectedCountryId,
        this.playerTurnDecider.getPlayerWithTurn(),
        1
      )
    ) {
      this.playerTurnDecider.endTurnForPlayer(false);
      if (!this.map.doPlayersHaveTroops()) {
        const currentPlayer = this.playerTurnDecider.getPlayerWithTurn();
        this.troopsGiver.giveTroopsToPlayer(currentPlayer);
        if (this.cardsDeck.shuffleCards() === "CARDS_SHUFFLED") {
          alert.success("Cards Shuffled!");
        } else {
          alert.error("Card could not be shuffled");
        }
        this.setState({ initialSetupPhase: false, turnsPhase: true });
      }
      this.forceUpdate();
    }
  };

  endTurnForPlayer = (shouldValidatePlayerTroops) => {
    if (this.playerTurnDecider.endTurnForPlayer(shouldValidatePlayerTroops)) {
      this.troopsGiver.giveTroopsToPlayer(
        this.playerTurnDecider.getPlayerWithTurn()
      );
      this.setState({
        attackOrSkipTurnPhase: false,
        turnsPhase: true,
        attackState: false,
        maneuverState: false,
      });
      this.forceUpdate();
    }
  };

  initializePlayers = () => {
    const { players } = this.props.history.location.state;
    for (let i = 0; i < players.length; i++) {
      let player = new Player(
        players[i].name,
        players[i].id,
        players[i].reservePersonel,
        players[i].color,
        false,
        players[i].playerTurnNumber
      );
      player.setDiceRoll(players.length);
      this.allPlayers.push(player);
    }
    this.allPlayers = this.allPlayers.sort(
      (a, b) => b.getDiceRoll() - a.getDiceRoll()
    );
  };

  onClickListener = (e) => {
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        this.doClickAction(e);
      }
      this.prevent = false;
    }, this.delay);
  };

  onDoubleClickListener = (e) => {
    clearTimeout(this.timer);
    this.prevent = true;
    this.doDoubleClickAction(e);
  };

  doClickAction = (e) => {
    const id = e.target.id;
    const isCountryValid = this.countryIds.includes(id);
    if (isCountryValid) {
      this.setState({ selectedCountryId: id });
      this.map.setSelectedCountry(id);
      this.forceUpdate();
    } else {
      this.setState({ selectedCountryId: "" });
      this.map.resetCountryState();
      this.forceUpdate();
    }
  };

  doDoubleClickAction = (e) => {
    const {
      showCards,
      initialSetupPhase,
      turnsPhase,
      attackOrSkipTurnPhase,
    } = this.state;
    const id = e.target.id;
    const isCountryValid = this.countryIds.includes(id);

    // Allow initial deployment with double click
    if (initialSetupPhase && isCountryValid) {
      this.setState({ selectedCountryId: id });
      this.map.setSelectedCountry(id);
      this.deployInitialTroops();
      this.forceUpdate();
      return;
    }

    // Allow turn troops deployment
    if (turnsPhase && isCountryValid && !showCards) {
      this.setState({ selectedCountryId: id }, () => {
        this.map.setSelectedCountry(id);
        this.deployTurnTroops();
      });
      this.forceUpdate();
      return;
    }

    // Allow selecting another country, attacing and manevering
    if (attackOrSkipTurnPhase && isCountryValid) {
      this.setState({ countryToAttackOrManeuverTo: id }, () => {
        const result = this.map.validateInitialMove(
          this.state.selectedCountryId,
          this.state.countryToAttackOrManeuverTo,
          this.playerTurnDecider.getCurrentPlayerInfo()
        );
        this.setState({
          attackState: result === "ATTACK",
          maneuverState: result === "MANEUVER",
          validity: result ? true : false,
        });
      });
      this.forceUpdate();
    }
  };

  validateInput = (e, inputType) => {
    const {
      selectedCountryId,
      countryToAttackOrManeuverTo,
      numOfAttackerTroops,
      numOfDefenderTroops,
    } = this.state;
    const val = e.target.value;
    if (isNaN(val)) {
      console.log("invalid input");
      return;
    }
    this.setState({
      [inputType]: val,
    });
    this.forceUpdate();
  };
}

const RiskCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const RiskCard = styled.div`
  background-color: lightgrey;
  width: fit-content;
  border-radius: 7px;
  padding: 5px;
  text-align: center;
  margin-top: 2px;
  margin-left: -36px;
  min-width: 106px;
  border: 1px solid black;
`;
const CardType = styled.span`
  text-decoration: underline;
`;
const TerritoryName = styled.span`
  font-size: 18px;
`;
const InfantryType = styled.span`
  font-size: 12px;
`;

const CardContainer = styled.div`
  position: absolute;
  display: block;
  left: 0px;
  top: 250px;
  width: fit-content;
  height: fit-content;
`;

const CardsDisplay = styled.div``;

const StyledCardsIcon = styled.i`
  display: block;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ0IDYyaC00MGMtMS4xMDUgMC0yLS44OTUtMi0ydi01NmMwLTEuMTA1Ljg5NS0yIDItMmg0MGMxLjEwNSAwIDIgLjg5NSAyIDJ2NTZjMCAxLjEwNS0uODk1IDItMiAyeiIgZmlsbD0iIzRkNWQ3YSIvPjxwYXRoIGQ9Im00MCA1OGgtMzJjLTEuMTA1IDAtMi0uODk1LTItMnYtNDhjMC0xLjEwNS44OTUtMiAyLTJoMzJjMS4xMDUgMCAyIC44OTUgMiAydjQ4YzAgMS4xMDUtLjg5NSAyLTIgMnoiIGZpbGw9IiNlN2U0ZGQiLz48cGF0aCBkPSJtMTAgMTBoMjh2NDRoLTI4eiIgZmlsbD0iI2M2NmI2MCIvPjxnIGZpbGw9IiNlNDdjNmUiPjxwYXRoIGQ9Im0xMCAxOS41ODN2Mi44M2wxMi40MTMtMTIuNDEzaC0yLjgzeiIvPjxwYXRoIGQ9Im0xMCAzMC40MTMgMTEuNzA3LTExLjcwNi0xLjQxNS0xLjQxNS0xMC4yOTIgMTAuMjkyeiIvPjxwYXRoIGQ9Im0xMCAzNS41ODN2Mi44M2wyOC0yNy45OTl2LS40MTRoLTIuNDE2eiIvPjxwYXRoIGQ9Im0zOCAxNS41ODQtMjIuNzA5IDIyLjcwNyAxLjQxNSAxLjQxNSAyMS4yOTQtMjEuMjkzeiIvPjxwYXRoIGQ9Im0zOCAyMy41ODQtMjggMjcuOTk5djIuNDE3aC40MTNsMjcuNTg3LTI3LjU4NnoiLz48cGF0aCBkPSJtMTguNDEyIDU0IDE5LjU4OC0xOS41ODd2LTIuODI5bC0yMi40MTggMjIuNDE2eiIvPjxwYXRoIGQ9Im0yMy41ODMgNTRoMi44M2w5LjI5My05LjI5NC0xLjQxNS0xLjQxNXoiLz48cGF0aCBkPSJtMjguNTg0IDEwLTUuMjkzIDUuMjkyIDEuNDE1IDEuNDE1IDYuNzA3LTYuNzA3eiIvPjxwYXRoIGQ9Im0xMCA0Ni40MTMgNC43MDYtNC43MDctMS40MTUtMS40MTUtMy4yOTEgMy4yOTJ6Ii8+PC9nPjxwYXRoIGQ9Im00NiA1NGgxNGMxLjEwNSAwIDItLjg5NSAyLTJ2LTQwYzAtMS4xMDUtLjg5NS0yLTItMmgtMTQiIGZpbGw9IiMyNDMyNDIiLz48cGF0aCBkPSJtNDYgNTBoMTBjMS4xMDUgMCAyLS44OTUgMi0ydi0zMmMwLTEuMTA1LS44OTUtMi0yLTJoLTEwIiBmaWxsPSIjZTdlNGRkIi8+PHBhdGggZD0ibTQ2IDQ2aDh2LTI4aC04IiBmaWxsPSIjYzY2YjYwIi8+PHBhdGggZD0ibTQ2IDQ0LjQxMyA4LTh2LTIuODNsLTggOHoiIGZpbGw9IiNlNDdjNmUiLz48cGF0aCBkPSJtNDYgMjguNDE0IDgtOHYtMi40MTRoLS40MTZsLTcuNTg0IDcuNTg0eiIgZmlsbD0iI2U0N2M2ZSIvPjxwYXRoIGQ9Im00NiAzNS40MTMgOC03Ljk5OXYtMi44M2wtOCA3Ljk5OXoiIGZpbGw9IiNlNDdjNmUiLz48L2c+PC9zdmc+);
  width: 30px;
  height: 30px;
  background-size: 30px 30px;
`;

const ActionButton = styled.button`
  position: absolute;
  right: 10px;
  top: 238px;
  background-color: white;
  color: #1d65a8;
  font-size: 90%;
  border: none;
  border-radius: 5px;
  width: 88px;
  height: 35px;
  outline: none;
  :hover {
    background-color: #1d65a8;
    color: white;
  }
  :focus {
    outline: 0;
  }
`;

const EndButton = styled.button`
  position: absolute;
  right: 10px;
  top: 279px;
  background-color: white;
  color: #f44336;
  font-size: 90%;
  border: none;
  border-radius: 5px;
  width: 88px;
  height: 35px;
  outline: none;
  :hover {
    background-color: #f44336;
    color: white;
  }
  :focus {
    outline: 0;
  }
`;

const TradeButton = styled.button`
  margin-left: -27px !important;
  background-color: #4a934a;
  color: white;
  font-size: 90%;
  border: none;
  border-radius: 5px;
  width: 88px;
  height: 35px;
  outline: none;
  :hover {
    background-color: white;
    color: #4a934a;
    border: 3px solid #4a934a;
  }
  :focus {
    outline: 0;
  }
  :disabled {
    background-color: white;
    color: #4a934a;
    border: 3px solid #4a934a;
  }
`;
const AttackerTroopsInput = styled.input`
  position: absolute;
  right: 0px;
  top: 165px;
`;
const DefenderTroopsInput = styled.input`
  position: absolute;
  right: 0px;
  top: 200px;
`;
const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    padding-top: 5px;
    font-size: xxx-large;
  }
`;

const BoardContainer = styled.div`
  padding-top: 125px;
  display: flex;
  flex-direction: row;
  background-color: #88b6da;
  height: 130vh;
`;
// width: 80%;
//     height: 100%;
//     margin-left: 2%;
//     margin-right: 2%;
//     padding: 25px;
//     border-radius: 25px;
//     background-color: white;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     @media (${BREAKPOINTS.sm}) {
//         width: 50%;
//         height: 40%;
//     }
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 18px;
`;

// const StyledButton = styled(Button)`
//     width: 10%;
//     margin: 10% 0 0 0;
//     font-size: 90%;
//     font-weight: bold;
//     background-color: #1d65a8;
//     color: white;

//     :hover {
//         box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.24);
//     }

//     :active {
//         transform: translateY(2px);
//     }

//     @media (${BREAKPOINTS.md}) {
//         width: 80%;
//     }

//     @media (${BREAKPOINTS.sm}) {
//         font-size: 50%;
//         width: 100%;
//     }
// `;

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

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 10%;
  margin-right: 10%;
  margin-left: 10%;
  font-size: 90%;
  td,
  th {
    border: 1px solid #ddd;
    padding: 4px;
    text-align: center;
    font-weight: bold;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #8964fe;
    color: white;
  }

  tr {
    background-color: #efefef;
    :hover {
      background-color: lightpink;
    }
  }
`;

const mapStateToProps = (state) => ({
  currentUser: state.currentUser || {},
});

export default withAlert()(connect(mapStateToProps)(Board));
