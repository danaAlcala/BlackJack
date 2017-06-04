function setKeyHoldState(thisKey, setTo) {
    if(thisKey == KEY_LEFT_ARROW) {
      	holdLeft = setTo;
    }
    if(thisKey == KEY_RIGHT_ARROW) {
      	holdRight = setTo;
    }
    if(thisKey == KEY_UP_ARROW) {
      	holdUp = setTo;
    }
	if(thisKey == KEY_DOWN_ARROW) {
		holdDown = setTo;
	}
}