/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("FIGHT CLUB"),
            new Phrase("THE MUMMY"),
            new Phrase("THE IRON GIANT"), 
            new Phrase("NOTTING HILL"), 
            new Phrase("VARSITY BLUES"),
            new Phrase("ANY GIVEN SUNDAY"),
            new Phrase("THE GREEN MILE"),
            new Phrase("BIG DADDY"),
            new Phrase("AMERICAN BEAUTY"),
            new Phrase("OCTOBER SKY"),
            new Phrase("AMERICAN PIE"),
            new Phrase("THE SIXTH SENSE"),
            new Phrase("MAN ON THE MOON"),
            new Phrase("WILD WILD WEST"),
            new Phrase("EYES WIDE SHUT"),
            new Phrase("OFFICE SPACE"),
        ];
        this.activePhrase = null;
    }
    

    // hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object
    startGame() {
        overlay.style.display = 'none';
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    }

    // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        let randomPhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
        return randomPhrase;
    }

    
    // Handles onscreen keyboard button clicks
    // @param (HTMLButtonElement) button - The clicked button element
    handleInteraction(button) {
        button.disabled = true;
        if( this.activePhrase.checkLetter(button.textContent) ) {
            button.className += ' chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.className += ' wrong';
            this.removeLife();
            if ( this.missed >= 5 ) {
                this.gameOver(false);
            }
        }
    };

    // this method removes a life from the scoreboard and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    removeLife() {
        this.missed++;
        hearts[this.missed - 1].style.opacity = '0.25';
    }

    // this method checks to see if the player has revealed all of the letters in the active phrase.
    // @return {boolean} True if game has been won, false if game wasn't
    checkForWin() {
        const show = document.querySelectorAll( '.show' );
        const letter = document.querySelectorAll( '.letter' );

        if ( letter.length === show.length ) {
            return true;
        } else {
            return false;
        }
    }

    // this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
    // @param {boolean} gameWon - Whether or not the user won the game
    gameOver(gameWon) {
        if ( gameWon ) {
            setTimeout( () => {
                overlay.className = 'win';
                overlay.style.display = 'flex';
                gameOverMsg.textContent = "We have a winner!";
                scoreboard.style.display = 'none';
                resetBtn.textContent = 'Try Again';
                resetBtn.style.color = 'var(--color-win)';
                this.resetGame();
            }, 500);
        } else {
            setTimeout( () => {
                overlay.className = 'lose';
                overlay.style.display = 'flex';
                gameOverMsg.textContent = 'Sorry, better luck next time!';
                scoreboard.style.display = 'none';
                resetBtn.textContent = 'Try Again';
                resetBtn.style.color = 'var(--color-lose)';
                this.resetGame();
            }, 500);
        }
    }

    resetGame() {
        // resets hearts
        this.missed = 0;
        for ( let i = 0; i < hearts.length; i++ ) {
            hearts[i].style.opacity = '1';
            scoreboard.style.display = 'block';
        }

        // resets keyboard
        const chosen = document.querySelectorAll('.chosen');
        for ( let i = 0; i < chosen.length; i++ ) {
            chosen[i].className = '';
            chosen[i].disabled = false;
        }

        const wrong = document.querySelectorAll('.wrong');
        for ( let i = 0; i < wrong.length; i++ ) {
            wrong[i].className = '';
            wrong[i].disabled = false;
        }

        // resets active phrase
        phraseUl.innerHTML = '';
    }
}