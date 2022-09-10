// SCORE OF PLAYERS AND RULESETS
playerSco = 0
dealerSco = 0

playerAces = 0
dealerAces = 0

let playerCanHit = true;
let dealerDeck;
let deck;

// DECK OF CARDS (DONE)
function fullDeck() {
        let cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suits = ["S", "H", "C", "D"];
        deck = [];

        for (let i = 0; i < cardValues.length; i++) {
            for (let x = 0; x < suits.length; x++) {
                deck.push(cardValues[i] + "-" + suits[x]);
            }
        }
        // console.log(deck); // ex: "2 of Diamonds, 6 of Clubs, 9 of Hearts, etc."
}

// GRABBING CARD VALUES
function getValue(dealerDeck) {
    let findCard = dealerDeck.split("-"); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    let value = findCard[0];
    
    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10; // if not 11 it is a K,Q,J 
    } 
    return parseInt(value); // if not KQJA it will find a random number within the deck

}
// FUNCTION TO CHECK ACES
function checkForAces(dealerDeck) {
    if(dealerDeck[0] == "A") {
        return 1;
    }
    return 0;
}

// FUNCTION TO KEEP TRACK OF ACES
function reduceAce(playerSco, playerAces) {
    while (playerSco > 21 && playerAces > 0) {
        playerSco -= 10; 
        playerAces -= 1;
    }
    return playerSco;
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
    dealerDeck = deck.pop();
    dealerSco += getValue(dealerDeck);
    dealerAces += checkForAces(dealerDeck);
    // console.log(dealerDeck); // this finds the whole card
    // console.log(dealerSco); // this separates the point value from suit
    while (dealerSco < 17) {
        let cardImages = document.createElement("img");
        let card = deck.pop();
        cardImages.src = "./cards/" + card + ".png"
        dealerSco += getValue(card); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
        dealerAces += checkForAces(card);
        document.getElementById("dealerCards").append(cardImages);
    }
    console.log(dealerSco);

    for (let i = 0; i < 2; i++) {
        let cardImages = document.createElement("img");
        let card = deck.pop();
        cardImages.src = "./cards/" + card + ".png";
        playerSco += getValue(card);
        playerAces += checkForAces(card);
        document.getElementById("playerCards").append(cardImages);
    }
    console.log(playerSco);
    document.getElementById("hit-button").addEventListener("click", hit);
    document.getElementById("stay-button").addEventListener("click", stay);
    document.getElementById("restart-button").addEventListener("click", function(){ // https://teamtreehouse.com/community/any-one-know-how-to-make-a-restart-button 
        window.location.reload();
        return false;
      }); // this refreshes the page


}

// BUTTONS (HIT, STAY, and RESTART AND WHAT YOU WANT TO APPEAR ON THE SCREEN TO SHOW OUTCOMES)
function hit() {  // if score of player one or two is less than 21, but wants to try to get the highest score without going over 21, then give them the option to hit
    if(!playerCanHit) {
        return;
    }
    let cardImages = document.createElement("img");
        let card = deck.pop();
        cardImages.src = "./cards/" + card + ".png"
        playerSco += getValue(card);
        playerAces += checkForAces(card);
        document.getElementById("playerCards").append(cardImages);

    if(reduceAce(playerSco, playerAces) > 21) {
        playerCanHit = false
    }
    
}

function stay() { // if score of player one or two is less than 21 and they don't want to go over 21, then give them the option to stay at that number
    dealerSco = reduceAce(dealerSco, dealerAces);
    playerSco = reduceAce(playerSco, playerAces);

    playerCanHit = false
    document.getElementById("hiddenCards").src = "./cards/" + dealerDeck + ".png"

    let outcome = ""
    if (playerSco > 21) {
        outcome = "You Lose!";
    } 
    else if (dealerSco > 21) {
        outcome = "You Win!";
    } 
    else if (playerSco === dealerSco) {
        outcome = "It's a Tie!";
    } 
    else if (playerSco > dealerSco) {
        outcome = "You Win!";
    } 
    else if (playerSco < dealerSco) {
        outcome = "You Lose!";
    }

    document.getElementById("dealerScore").innerHTML = dealerSco;
    document.getElementById("playerScore").innerHTML = playerSco;
    document.getElementById("finalOutcome").innerHTML = outcome;
    
    
}

function restart() { // if player one or player two wins, press restart button to go again
    window.onload();
}


fullDeck();
shuffleCards();
playBlackjack();