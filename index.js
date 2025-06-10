// Get a random number from 2 to 11
let cards = [];
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackJack = false;
let gameStarted = false;

// Player object
// let player = {
//     name: "Louis",
//     image: "",
//     earnings: 0,
//     accountBalance: 100
// }

let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let displayEl = document.querySelector("#display-el");
// let playerEl = document.querySelector("#player-el");
// let balanceEl = document.querySelector("#balance-el");

// balanceEl.textContent = `Account balance: $${player.accountBalance}`;

function resetGame() {
    if (!isAlive) {
        displayEl.textContent = "Want to start a new game?"
        cardsEl.textContent = "Cards: ";
        sumEl.textContent = "Sum: ";
        message = "";
        // player.earnings = 0;
        // playerEl.textContent = `${player.name}: $${player.earnings}`
        // balanceEl.textContent =
        // `Account balance: $${player.accountBalance}`;

        firstCard = getRandomCard();
        secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        isAlive = true;
        hasBlackJack = false;
        gameStarted = false;

        sumEl = document.querySelector("#sum-el");
        cardsEl = document.querySelector("#cards-el");
        displayEl = document.querySelector("#display-el");
    }
}


function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true

    if (!gameStarted) {
        renderGame();
    }
    // gameStarted = true;
    // if (hasBlackJack) {
    //     player.earnings += 5;
    //     isAlive = false;
    // }
    // display the players earnings
    playerEl.textContent = `${player.name }: $${player.earnings}`
}

// Utility function
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
        // isAlive = false;
    } else if ( sum === 21 ) {
        message = "You've got black jack!"
        hasBlackJack = true;
    } else { 
        message = "You are out of the game!";
        isAlive = false;
    }

    displayEl.textContent = message;
}

// Utility/helper function
function getRandomCard() {
    // In a black jack, A(1) = 11, Q, K, J = 10   
    // Returns a number from 1 - 11
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber;
    }
}

function newCard() {
    if ( isAlive ) {
        let card = getRandomCard();
        cards.push(card)
        sum += card;

        sumEl.textContent = "Sum: " + sum; 
        renderGame() 
    }

    // if (hasBlackJack) {
    //     player.earnings += 5;
       
    //     player.accountBalance += player.earnings;
    //     player.earnings = 0;
    //     balanceEl.textContent =
    //     `Account balance: $${player.accountBalance}`;
    //     playerEl.textContent = `${player.name}: $${player.earnings}`;
        
    //     resetGame();
    // }

    // if (!hasBlackJack && !isAlive) {
    //     player.accountBalance -= 3;
    //     balanceEl.textContent =
    //     `Account balance: $${player.accountBalance}}`;
    // }
}