function freshDeck() {
	loadHearts();
	loadDiamonds();
	loadClubs();
	loadSpades();
}

function loadHearts() {
	var i = 0;
	for (i; i < 13; i++) {
		dealerDeck[i] = deckValues[i] + " of " + deckSuits[0];
		//console.log('Heart card added');
	}
	//console.log('Hearts complete');
}

function loadDiamonds() {
	var i = 13;
	for (i; i < 26; i++) {
		dealerDeck[i] = deckValues[i-13] + " of " + deckSuits[1];
		//console.log('Diamond card added');
	}
	//console.log('Diamonds complete');
}

function loadClubs() {
	var i = 26;
	for (i; i < 39; i++) {
		dealerDeck[i] = deckValues[i-26] + " of " + deckSuits[2];
		//console.log('Club card added');
	}
	//console.log('Clubs complete');
}

function loadSpades() {
	var i = 39;
	for (i; i < 52; i++) {
		dealerDeck[i] = deckValues[i-39] + " of " + deckSuits[3];
		//console.log('Spade card added');
	}
	//console.log('Spades complete');
}

function dealToDealer() {
	if (dealerDeck.length > 0) {
		dealerHand.unshift(dealerDeck.shift());
		dealerHandX += cardWidth/4;
	}
}

function dealToPlayer() {
	if (dealerDeck.length > 0) {
		playerHand.unshift(dealerDeck.shift());
		playerHandX += cardWidth / 4;
	}
}

function shuffleDeck(deck, thisManyTimes) {
	for(i = 0; i <= thisManyTimes; i++) {
		var pull1 = 0, pull2 = 0, sideBar = null;
		for (pull1 = deck.length - 1; pull1 > 0; pull1 -= 1) {
    	pull2 = Math.floor(Math.random() * (pull1 + 1));
    	sideBar = deck[pull1];
    	deck[pull1] = deck[pull2];
    	deck[pull2] = sideBar;
		//console.log("shuffled");
		}
  	}
}

function determineCardRowToShow(deck, cardIndex) {
	value = deck[cardIndex];
	if (cardsSheetLoaded) {
		switch (value.substring(0,2)) { // Checks the first two letters of the string to determine what the value is.
			case "Ac":
				return ACE_ROW;
				break;
			case "Tw":
				return TWO_ROW;
				break;
			case "Th":
				return THREE_ROW;
				break;
			case "Fo":
				return FOUR_ROW;
				break;
			case "Fi":
				return FIVE_ROW;
				break;
			case "Si":
				return SIX_ROW;
				break;
			case "Se":
				return SEVEN_ROW;
				break;
			case "Ei":
				return EIGHT_ROW;
				break;
			case "Ni":
				return NINE_ROW;
				break;
			case "Te":
				return TEN_ROW;
				break;
			case "Ja":
				return JACK_ROW;
				break;
			case "Qu":
				//console.log("Queen row.")
				return QUEEN_ROW;
				break;
			default:
				//console.log("King row.")
				return KING_ROW;
		}
	}
}

function determineCardColumnToShow(deck, cardIndex) {
		var value = deck[cardIndex];
		switch (value.substring(value.length - 2, value.length)) { // Checks the last two letters of the string to determine what the suit is.
			case "ts":
				//console.log("Hearts column");
				return HEARTS_COLUMN;			
				break;
			case "ds":
				//console.log("Diamonds column");
				return DIAMONDS_COLUMN;			
				break;
			case "bs":
				//console.log("Clubs column");
				return CLUBS_COLUMN;			
				break;
			default:
				//console.log("Spades column");
				//console.log(value.substring(value.length - 2, value.length));
				return SPADES_COLUMN;
		}
}