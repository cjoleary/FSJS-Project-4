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
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

// Listen for keyboard presses
// document.addEventListener('keydown', function(e){
//     game.handleInteraction(e.key);
//     console.log(e.key);
// });

keyboardBtns.forEach( key => {
    key.addEventListener( 'click', function(e) {
        game.handleInteraction(e.target);
    })
});