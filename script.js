// SCORE OF PLAYERS AND RULESETS
playerSco = 0
computerSco = 0

playerAces = 0
computerAces = 0

let playerOneHit = true;
let card;
let dealerDeck;
let deck;

// DECK OF CARDS
function fullDeck() {
        let cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
        deck = [];

        for (let i = 0; i < cardValues.length; i++) {
            for (let x = 0; x < suits.length; x++) {
                deck.push(cardValues[i] + " of " + suits[x]);
            }
        }
        // console.log(deck); // ex: "2 of Diamonds, 6 of Clubs, 9 of Hearts, etc."
}

// GRABBING CARD VALUES
function getValue(dealerDeck) {
    let findCard = dealerDeck.split("of");
    let value = findCard[0];
    
    if (isNaN(value)) {
        if (value === "A") {
            return 11;
        }
        return 10; // if not 11 it is a K,Q,J 
    } 
    return parseInt(value); // if not KQJA it will find a random number within the deck

}
// SHUFFLE CARDS FUNCTION 
function shuffleCards() {
    for (let i = 0; i < deck.length; i++) {
        let randomCards = Math.floor(Math.random() * deck.length) // should select a random card within deck (52) to supply
        deck[i] = deck[randomCards];
        deck[randomCards] = deck[i];
    }
    console.log(deck);
}

// START GAME FUNCTION
function playBlackjack() {
    let cardImages = document.createElement("img");
    dealerDeck = deck.pop();
    computerSco += getValue(card)
    cardImages.src = "./cards" + card + ".png"


}
// console.log();

// BUTTONS (Hit, Stay, and Restart AND WHAT YOU WANT TO APPEAR ON THE SCREEN TO SHOW OUTCOMES)
function hit() {  // if score of player one or two is less than 21, but wants to try to get the highest score without going over 21, then give them the option to hit
    document.getElementById("hit-button").addEventListener("click")
    
}

function stay() { // if score of player one or two is less than 21 and they don't want to go over 21, then give them the option to stay at that number
    
    if (playerSco > 21) {
        console.log("Computer Wins!");
    } 
    else if (dealerSco > 21) {
        console.log("Player 1 Wins!");
    } 
    else if (playerSco === dealerSco) {
        console.log("Tie!");
    } 
    else if (playerSco > dealerSco) {
        console.log("Player 1 Wins");
    } 
    else if (playerSco < dealerSco) {
        console.log("Computer Wins!");
    }
    document.getElementById("stay-button").addEventListener("click")
    
}

function restart() { // if player one or player two wins, press restart button to go again
    document.getElementById("restart-button").addEventListener("click")

}


fullDeck();
shuffleCards();
// // playBlackjack();