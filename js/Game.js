/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.movies = [
            new Movie("FIGHT CLUB"),
            new Movie("THE MUMMY"),
            new Movie("THE IRON GIANT"), 
            new Movie("NOTTING HILL"), 
            new Movie("VARSITY BLUES"),
            new Movie("ANY GIVEN SUNDAY"),
            new Movie("THE GREEN MILE"),
            new Movie("BIG DADDY"),
            new Movie("AMERICAN BEAUTY"),
            new Movie("OCTOBER SKY"),
            new Movie("AMERICAN PIE"),
            new Movie("THE SIXTH SENSE"),
            new Movie("MAN ON THE MOON"),
            new Movie("WILD WILD WEST"),
            new Movie("EYES WIDE SHUT"),
        ];
        this.activeMovie = null;
    }
    

    // hides the start screen overlay, calls the getRandomMovie() method, and sets the activeMovie property with the chosen movie. It also adds that movie to the board by calling the addMovieToDisplay() method on the active Movie object
    startGame() {
        overlay.style.display = 'none';
        const randomMovie = game.getRandomMovie();
        this.activeMovie = new Movie(randomMovie.movie);
        this.activeMovie.addMovieToDisplay();
    }

    // this method randomly retrieves one of the movies stored in the movies array and returns it.
    getRandomMovie() {
        let randomMovie = this.movies[ Math.floor( Math.random() * this.movies.length ) ];
        return randomMovie;
    }

    
    // Handles onscreen keyboard button clicks
    // @param (HTMLButtonElement) button - The clicked button element
    handleInteraction(button) {
        button.disabled = true;
        if( this.activeMovie.checkLetter(button.textContent) ) {
            button.className += ' chosen';
            this.activeMovie.showMatchedLetter(button.textContent);
            this.checkForWin();
        } else {
            button.className += ' wrong';
            this.removeLife();
        }
    };

    // this method removes a life from the scoreboard and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    removeLife() {
        this.missed++;
        hearts[this.missed - 1].style.opacity = '0.25';

        if ( this.missed >= 5 ) {
            this.gameOver(false);
        }
    }

    // this method checks to see if the player has revealed all of the letters in the active phrase.
    // @return {boolean} True if game has been won, false if game wasn't
    checkForWin() {
        const show = document.querySelectorAll( '.show' );
        const letter = document.querySelectorAll( '.letter' );

        if ( letter.length === show.length ) {
            this.gameOver(true);
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
        movieUl.innerHTML = '';
    }
}