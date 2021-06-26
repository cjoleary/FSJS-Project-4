/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("A BLESSING IN DISGUISE"),
            new Phrase("A DIME A DOZEN"),
            new Phrase("ONCE IN A BLUE MOON"), 
            new Phrase("EVERY DOG HAS ITS DAY"), 
            new Phrase("IT TAKES TWO TO TANGO"),
            new Phrase("BETTER LATE THAN NEVER"),
            new Phrase("BEAT AROUND THE BUSH"),
            new Phrase("EARLY BIRD GETS THE WORM"),
            new Phrase("WHEN IT RAINS IT POURS")
        ];
        this.activePhrase = null;
    }

    // hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object
    startGame() {
        document.getElementById( 'overlay' ).style.display = 'none';
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    }

    // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        let randomPhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
        return randomPhrase;
    }

    // this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess
    handleInteraction() {

    }

    // this method removes a life from the scoreboard and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    removeLife() {

    }

    // this method checks to see if the player has revealed all of the letters in the active phrase.
    // @return {boolean} True if game has been won, false if game wasn't
    checkForWin() {

    }

    // this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
    // @param {boolean} gameWon - Whether or not the user won the game
    gameOver(gameWon) {

    }
}