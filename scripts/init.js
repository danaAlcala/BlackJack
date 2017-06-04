// Original card size: 561 x 781; Sprite Sheet Columns: 13 Rows: 4
var cardsSheetLoaded = false;
var cardBackLoaded = false;
// Canvas Variables
var canvas;
var canvasContext;
var canvasBGColor;
// FPS
var framesPerSecond;		
// Value/Suit arrays
var deckValues = [
	"Ace", // 0
	"Two", // 1
	"Three", // 2
	"Four", // 3
	"Five", // 4
	"Six", // 5
	"Seven", // 6
	"Eight", // 7
	"Nine", // 8
	"Ten", // 9
	"Jack", // 10
	"Queen", // 11
	"King" // 12
];
var deckSuits = [
	"Hearts", // 0
	"Diamonds", // 1
	"Clubs", // 2
	"Spades", // 3
];		
// Images
var cards = document.createElement("img");
var cardBack = document.createElement("img");		
// Shuffler
var shuffleQuantity;
// Decks/Hands
var dealerDeck = [];
var dealerHand = [];
var playerHand = [];
var dealerDeckCount;
var dealerHandCount;
var playerHandCount;
var dealerHandX;
var playerHandX;				
// Card variables
var cardValue;
var cardSuit;
var cardWidth;
var cardHeight;
var cardScaleModifier;
// Debug
var debugCard;
var showDeck = true;
// Score
var dealerScore;
var playerScore;
// Value-specific variables
var aceValue;
var twoValue;
var threeValue;
var fourValue;
var fiveValue;
var sixValue;
var sevenValue
var eightValue;
var nineValue;
var tenValue;
var jackValue;
var queenValue;
var kingValue;
// Keyboard Handling
var holdLeft = false;
var holdRight = false;
var holdUp = false;
var holdDown = false;
var unHold = false;
// After player chooses to STAND
var showDealer = false;		
// Constants, and variables used in a similar fashion to constants.
// Keyboard constants
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_SPACE = 32;
// Deck and Hand placement
var DEALER_DECK_X; // These would have been constants if they didn't rely on the canvas being initialized first.
var DEALER_DECK_Y; // They are still basically used as constants.
var DEALER_HAND_Y; // ''
var PLAYER_HAND_Y; // ''
// Size of actual card in original png
const CARD_FROM_SHEET_WIDTH = 560;
const CARD_FROM_SHEET_HEIGHT = 780;
// Sprite Sheet Locations
const ACE_ROW = 0;
const TWO_ROW = 1
const THREE_ROW = 2;
const FOUR_ROW = 3;
const FIVE_ROW = 4;
const SIX_ROW = 5;
const SEVEN_ROW = 6;
const EIGHT_ROW = 7;
const NINE_ROW = 8;
const TEN_ROW = 9;
const JACK_ROW = 10;
const QUEEN_ROW = 11;
const KING_ROW = 12;
const HEARTS_COLUMN = 2;
const DIAMONDS_COLUMN = 1;
const CLUBS_COLUMN = 0;
const SPADES_COLUMN = 3;

/* 
Functions to be used directly:
initializeEverything();
randomNumber(start, end);
setFont(size, font);
*/

function setFont(size, font) {
	canvasContext.font = size + "px " + font;
}

function randomNumber(start, end) {
	return Math.floor((Math.random() * end) + start);
}

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased)			
}

function initializeDealerHand() {
	dealerHandX = DEALER_DECK_X;
	DEALER_HAND_Y = DEALER_DECK_Y + cardHeight + DEALER_DECK_Y;
	dealerHandCount = 0;
}

function initializePlayerHand() {
	playerHandX = DEALER_DECK_X;
	PLAYER_HAND_Y = DEALER_HAND_Y + cardHeight + DEALER_DECK_Y;
	playerHandCount = 0;
}

function initializeLabels() {

}
function initializeShuffler() {
	shuffleQuantity = 10;
}

function initializeCanvas()
{
	// console.log('Called initializeCanvas()');  // DEBUG
	canvas = document.getElementById('gameCanvas'); // This grabs the canvas from the HTML for use in the script.
	canvasContext = canvas.getContext('2d'); // "The getContext() method returns an object that provides methods and properties for drawing on the canvas." from w3schools.com
	canvasBGColor = 'black';
	// console.log('initializeCanvas() complete');  // DEBUG
}

function initializeFPS()
{
    // console.log('Called initializeFPS()');  // DEBUG			
	framesPerSecond = 30;
	// console.log('initializeFPS() complete');  // DEBUG
}

function initializeCardImages() {
	cards.src = "./cards/cardsheet.png";
	cardBack.src = "./cards/back.png";
	cardWidth = canvas.width * 0.10;
	cardHeight = canvas.height * 0.186666666666;
	cardScaleModifier = 1;
}

function initializeDealerDeck() {
	DEALER_DECK_X = canvas.width / 2 - cardWidth / 2;
	DEALER_DECK_Y = canvas.height / 20;
}

function initializeEverything()
{
	// console.log('Called initializeEverything()');  // DEBUG
	//debugCard = 0;	
	initializeCanvas();		
	initializeFPS();
	initializeShuffler();
	initInput();
	initializeCardImages();
	initializeDealerDeck();
	initializeDealerHand();
	initializePlayerHand();
    initializeScore();
    initializeCardValues();		
	// console.log('initializeEverything() completed');  // DEBUG
}

function initializeScore() {
    dealerScore = 0;
    playerScore = 0;
}

function initializeCardValues() {
    aceValue = 1;
    twoValue = 2;
    threeValue = 3;
    fourValue = 4;
    fiveValue = 5;
    sixValue = 6;
    sevenValue = 7;
    eightValue = 8;
    nineValue = 9;
    tenValue = 10;
    jackValue = 10;
    queenValue = 10;
    kingValue = 10;
}