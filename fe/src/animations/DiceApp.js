import React, { Children, Component } from "react";
import { Row, Button } from 'reactstrap';
import RollDice from './RollDice'
import styled from 'styled-components'

class DiceApp extends Component {
  static defaultProps = {
    noOfDice: 1,
    rollAllButton: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      rolling: false,

    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    const { noOfDice } = this.props
    for (let i = 0; i < noOfDice; i++) {
      this[`child${i}`].roll()
    }
    this.setState({
      rolling: true,
    })

    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)

  }

  render() {
    const { noOfDice } = this.props
    var Dice = []
    const { rollAllButton } = this.props
    let button

    if (rollAllButton) {
      button = <StyledButton disabled={this.state.rolling}  onClick={this.roll}>{this.state.rolling ? 'Rolling' : 'Roll All Dice!'}</StyledButton>
    }
    else {

    }

    for (let i = 0; i < noOfDice; i++) {
      Dice.push(<RollDice key={i} onRef={ref => (this[`child${i}`] = ref)} />);
    }

    return (
      <div>
        <StyledRow>
          {Dice}
        </StyledRow>
        {button}
      </div>
    );
  }
}

const StyledRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  padding: 10px 50px;
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
`;

export default DiceApp; 