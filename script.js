/*
BLACKJACK - The Game

(Whoever gets the highest score without going past the score of 21)

How I want the game to be structured: <--- add to this if you more comes to mind

- random 2 cards revealed for my player
- random 2 cards revealed for player 2
- the rest of the deck faced down
- have the deck choose random cards to give players
- ace card = 1 or 11
- a button to "hit" or "stay" when prompted for each player
- a score of some sort next to or around the player's cards
- want the cards and buttons to be centered on the screen
- Announce the winner on the screen
- a restart button to go again with new set of cards

Code to implement:

- a shuffling function (WORK IN PROGRESS)
- a function for the whole deck of cards (DONE)
- players (WORK IN PROGRESS)
- a function for the buttons and actions to match (WORK IN PROGRESS)
- card images in HTML (DONE - in cards folder)
- figure out a way to center everything (DONE/WORK IN PROGRESS)- still trying to figure out how to position where the score is going to be elsewhere)


Source help (while using only concepts learned from class):
https://stackoverflow.com/questions/58473137/how-to-change-add-image-via-js-dom-in-blackjack-game
https://stackoverflow.com/questions/27029157/how-to-center -align-script#:~:text=For%20text%20centering%20use%3A,using%20styles%20applied%20by%20javascript.
https://github.com/ImKennyYip/black-jack/tree/master/cards (for card images)


*/

// PLAYERS RULESETS

// let playerOneHit = true;
// let playerTwoHit = true;
// let playerOneStay = true;
// let playerTwoStay = true;


// SCORE OF PLAYERS
// let playerOne =
// let playerTwo =

// DECK OF CARDS

function fullDeck() {
    let cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    let deck = [];

    for (let i = 0; i < cardValues.length; i++) {
        for (let j = 0; suits.length; j++) {
            deck.push(cardValues[i] + "of" + suits[j]);
        }
    }
    console.log(deck);
}


// SHUFFLE CARDS FUNCTION

function shuffleCards () {
    for (let i = 0; i < 250; i++) { // should console anything put in the console log said times
        let randomCards = Math.floor(Math.random() * deck.length) // should select a random card within deck (52) to supply
        console.log("250 250 times");
    }
}

shuffleCards();

// BUTTONS (Hit, Stay, and Restart)

// function stay() {

// }

// function stay() {

// }

// function restart() {

// }