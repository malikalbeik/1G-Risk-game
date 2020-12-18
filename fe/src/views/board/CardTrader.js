import {
  NUMBER_OF_TRADES_SET,
  NUMBER_OF_CARDS_FOR_TRADE,
} from "../../config/gameConstants";

class CardTrader {
  constructor() {
    this.noOfPreviousTrades = 1;
    this.noOfTroopsGivenInPreviousTrade = 0;
  }

  tradeCards(noOfCards) {
    if (noOfCards >= NUMBER_OF_CARDS_FOR_TRADE) {
      if (this.noOfPreviousTrades < NUMBER_OF_TRADES_SET) {
        this.noOfTroopsGivenInPreviousTrade = 2 * this.noOfPreviousTrades + 2;
        this.noOfPreviousTrades++;
        return this.noOfTroopsGivenInPreviousTrade;
      } else {
        this.noOfTroopsGivenInPreviousTrade += 5;
        this.noOfPreviousTrades++;
        return this.noOfTroopsGivenInPreviousTrade;
      }
    }
    return 0;
  }
}

export default CardTrader;
