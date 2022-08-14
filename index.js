let firstcard = 10;
let secondcard = 4;
let cards = [firstcard,secondcard]
let sum = cards[0] + cards[1];
let message = "Hello Gaurav !"
let cardEl=document.getElementById("card");
let sumEl=document.getElementById("sum");
let messageEl=document.getElementById("message");
function start(){

    cardEl.textContent = "Cards : "+ cards
    sumEl.textContent = "Sums : " + sum;

    if (sum < 21){
        message = "Do You want to draw a new card !"
    }
    else if ( sum ===21){
        message = "Booyah ! You got a Black Jack ! "
    }
    else {
        message = "You are out of the Game "
    }
    
    messageEl.textContent = message;

}

function newcard(){
    let nextCard = 6;
    cards.push(nextCard)
    sum += nextCard;
    start();


}

