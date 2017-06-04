function debugLogic() {
	if (holdUp && unHold == false) {
		if (dealerDeck.length > 0) {
			dealToDealer();
		}		
		unHold = true;		
	}
	if (holdDown & unHold == false) {
		if (dealerDeck.length >0) {
			dealToPlayer();
		}		
		unHold = true;		
	}
	if (holdUp == false && holdDown == false) {
		unHold = false;
	}		
}