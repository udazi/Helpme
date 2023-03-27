let object ={
    name : "Uda",
    chips: 2000
}
let cards =[]
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let black = document.getElementById("black")
console.log (black)
let total = document.getElementById("total")
console.log (total)
let dealer = document.getElementById("dealer")

let player = document.getElementById("player")
player.textContent = object.name + ": $" + object.chips
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){return 10} 
    else if (randomNumber===1){return 11}
    else {return randomNumber}
}
function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame ()}

function renderGame () {
    dealer.textContent = "Cards: " 
for (let i = 0;i < cards.length; i++ ){
    dealer.textContent += cards[i] + " "}
    total.textContent = "Sum: " + sum
    if ( sum <= 20) {message = "Do you want to draw a new card?!"}
else if (sum === 21) {message = "You've got Blackjack!"
hasBlackjack = true}
else  {message = "You're out of the game!"
isAlive = false}
black.textContent = message}

function newCard() {
    if (isAlive == true && hasBlackjack === false) {
   console.log ("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame ()}}
