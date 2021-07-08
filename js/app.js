/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const gameOverMsg = document.getElementById( 'game-over-message' );
const hearts = document.querySelectorAll('.tries');
const keyboardBtns = document.querySelectorAll( '.key' );
const overlay = document.getElementById( 'overlay' );
const phraseUl = document.getElementById( 'phrase' );
const resetBtn = document.getElementById( 'btn__reset' );
const scoreboard = document.getElementById('scoreboard');

// Listens for click on `#btn__reset` and calls startGame() on game object
document.getElementById('btn__reset').addEventListener('click', function(){
    game.startGame();
});

// Listen for keyboard presses
document.addEventListener('keydown', function(e){
    keyboardBtns.forEach((button) => {
        if (button.textContent === e.key && button.disabled === false) {
            game.handleInteraction(button)
        }
    })
});

keyboardBtns.forEach( key => {
    key.addEventListener( 'click', function(e) {
        game.handleInteraction(e.target);
    })
});