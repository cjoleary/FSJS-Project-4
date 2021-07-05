/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Movie.js */

 class Movie {
     constructor(movie) {
        this.movie = movie.toLowerCase();
     }

     // adds letter placeholders to the display when the game starts
     addMovieToDisplay() {
        for ( let i = 0; i < this.movie.length; i++ ) {
            const listItem = document.createElement('li');
            listItem.textContent = this.movie[i];
            movieUl.appendChild(listItem);
            // if the list item has text content it is given the class 'letter', if not it is given the class 'space'
            if ( listItem.textContent !== ' ' ) {
                listItem.className = 'letter';
            } else {
                listItem.className = 'space';
            }
        }
     }

     // checks to see if the letter selected by the player matches a letter in the phrase and reveals the matching letter(s) on the
     // @param (string) letter - Letter to check
     checkLetter(letter) {
        return (this.movie.includes(letter));
     }

     // reveals the letter(s) on the board that matches the player's selection
     // @param (string) letter - Letter to display
     showMatchedLetter(letter) {
        const letters = document.querySelectorAll( '.letter' );
        for ( let i = 0; i < letters.length; i++ ) {
            if ( letter === letters[i].textContent.toLowerCase() ) {
                letters[i].className += ' show';
            }
        }
     }
 }