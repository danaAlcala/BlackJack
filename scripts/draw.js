function drawCanvas()
{
	// console.log('Called drawCanvas()');  // DEBUG
	canvasContext.fillStyle = canvasBGColor; // "fillStyle Sets or returns the color, gradient, or pattern used to fill the drawing." from w3schools.com
	canvasContext.fillRect(0, 0, canvas.width, canvas.height); // Doesn't fill an existing rectangle, but instead creates a filled rectangle.
	// console.log('drawCanvas() complete');  // DEBUG
}

function drawRect(color, x, y, width, height)
{
    // console.log('Called drawRect()');  // DEBUG
	canvasContext.fillStyle = color;
	canvasContext.fillRect(x, y, width, height);
	// console.log('drawRect() complete');  // DEBUG
}

function drawEverything()
{
	// console.log('Called drawEverything()');  // DEBUG
	drawCanvas();
	setFont(25, 'Arial');
	drawText('white', "Single-Deck Blackjack", canvas.width / 20, DEALER_DECK_Y + cardHeight / 2);
	setFont(20, 'Arial');
	drawText('white', "Dealer Hand:", canvas.width / 20, DEALER_HAND_Y + cardHeight / 2);
	drawDealerDeck();
	drawDealerHand();
	drawPlayerHand();
}

function drawCircle(color, x, y, radius)
{
	// console.log('Called drawCircle()');  // DEBUG
	canvasContext.fillStyle = color;
	canvasContext.beginPath();  // Starts the fill path.
	canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
	canvasContext.fill();
	// console.log('drawCircle() complete');  // DEBUG
}
		
function drawText(color, text, x, y) {
	canvasContext.fillStyle = color;
	canvasContext.fillText(text, x, y);
}

function drawDealerHand() {
	var cardShift = 4;
	var handSize = dealerHand.length;
	if (handSize > 0) {
		for (i = handSize; i > 0; i--) {
			drawCard((dealerHandX - (i * cardWidth/cardShift)), DEALER_HAND_Y, determineCardRowToShow(dealerHand, i - 1), determineCardColumnToShow(dealerHand, i - 1));
		}
	}
}

function drawPlayerHand() {
	var cardShift = 4;
	var handSize = playerHand.length;
	console.log(cardShift);
	if (handSize > 0) {
		for (i = handSize; i > 0; i--) {
			drawCard((playerHandX - (i * cardWidth/cardShift)), PLAYER_HAND_Y, determineCardRowToShow(playerHand, i - 1), determineCardColumnToShow(playerHand, i - 1));
		}
	}
}

function drawDealerDeck() {
	if (showDeck) {
		drawCard(DEALER_DECK_X, DEALER_DECK_Y, determineCardRowToShow(dealerDeck, 0), determineCardColumnToShow(dealerDeck, 0));
	}
	else {
		drawCardBack(DEALER_DECK_X, DEALER_DECK_Y);
	}
}

function drawCard(x, y, sheetX, sheetY) {		
	canvasContext.drawImage(cards, sheetX * CARD_FROM_SHEET_WIDTH, sheetY * CARD_FROM_SHEET_HEIGHT, CARD_FROM_SHEET_WIDTH, CARD_FROM_SHEET_HEIGHT, x, y, cardWidth * cardScaleModifier, cardHeight * cardScaleModifier);
}

function drawCardBack(x, y) {
	canvasContext.drawImage(cardBack, 0, 0, CARD_FROM_SHEET_WIDTH, CARD_FROM_SHEET_HEIGHT, x, y, cardWidth * cardScaleModifier, cardHeight * cardScaleModifier);
}