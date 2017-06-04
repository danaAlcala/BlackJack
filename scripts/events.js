function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
 	evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, false);
}