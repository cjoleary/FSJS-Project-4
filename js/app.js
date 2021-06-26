/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

/** 
 * Listens for click on `#btn__reset` and calls startGame() on game object
 */
document.getElementById('btn__reset').addEventListener('click', function(){
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

/** 
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(e){
    game.handleInteraction(e);
});