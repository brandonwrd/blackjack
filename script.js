// START GAME FUNCTION
function blackjack() {

}


// SCORE OF PLAYERS
// let playerOne =
// let playerTwo =


// DECK OF CARDS
function fullDeck() {
    let cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    let deck = [];

    for (let i = 0; i < cardValues.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.push(cardValues[i] + " of " + suits[j]);
        }
    }
    console.log(deck); // ex: "2 of Diamonds, 6 of Clubs, 9 of Hearts, etc."
}

fullDeck();


// SHUFFLE CARDS FUNCTION
// function shuffle() {
//     for (let i = 0; i < 2; i++) { // should console anything put in the console log said times
//         let randomCards = Math.floor(Math.random() * deck.length)  // should select a random card within deck (52) to supply
//     }
//     console.log(randomCards);
// }

// shuffle();


// PLAYERS RULESETS
// let playerOneHit = true;
// let playerTwoHit = true;
// let playerOneStay = true;
// let playerTwoStay = true;

// BUTTONS (Hit, Stay, and Restart)
function hit() {
    // if score of player one or two is less than 21, but wants to try to get the highest score without going over 21, then give them the option to hit
    

}

function stay() {
    // if score of player one or two is less than 21 and they don't want to go over 21, then give them the option to stay at that number
    
}

function restart() {
    // if player one or player two wins, press restart button to go again
}



// blackjack();