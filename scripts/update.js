function updateDealerHandPosition() {
	if (dealerHand.length > dealerHandCount) {
		dealerHandX -= cardWidth/8;
		dealerHandCount = dealerHand.length;
	}
}

function updatePlayerHandPosition() {
	if (playerHand.length > playerHandCount) {
		playerHandX -= cardWidth/8;
		playerHandCount = playerHand.length;
	}
}

function updateLogic() {
	dealerDeckCount = dealerDeck.length;
	updateDealerHandPosition();
	updatePlayerHandPosition();
	playerHandCount = playerHand.length;
    updateDealerScore();
	console.log(dealerScore);
}

function updateAll() {
	debugLogic();
	//moveEverything();
	updateLogic();
	drawEverything();
}

function updateDealerScore() {
    var deck = dealerDeck;
    for (i = deck.length; i > 0; i-- ) {
        switch(determineCardRowToShow(deck[i])) {
            case ACE_ROW:
                dealerScore++;
                break;
            case TWO_ROW:
                dealerScore += 2;
                break;
            case THREE_ROW:
                dealerScore += 3;
                break;
            case FOUR_ROW:
                dealerScore += 4;
                break;
            case FIVE_ROW:
                dealerScore += 5;
                break;
            case SIX_ROW:
                dealerScore += 6;
                break;
            case SEVEN_ROW:
                dealerScore += 7;
                break;
            case EIGHT_ROW:
                dealerScore += 8;
                break;
            case NINE_ROW:
                dealerScore += 9;
                break;
            default:
                dealerScore += 9;
                return;
        }
    }
}