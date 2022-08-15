
let sum = 0;
let run = 1;
let cards =[];
let isBlackJack  = false;
let isAlive = true;
let message = "Hello Gaurav !"
let person={
    name1 : "Gaurav",
    points : 0}
let cardEl=document.getElementById("card");
let sumEl=document.getElementById("sum");
let messageEl=document.getElementById("message");
let personEl = document.querySelector(".person-el");

function getrandom(){
    random = Math.floor(Math.random()*13) + 1;
    if (random > 10){
        return 10;
    }
    else if (random === 1){
        return 11;
    }
    else {
        return random;
    }
}

function askName(){
    let nameBato=prompt("What is Your Name : ");
    person.name1 = nameBato;
    
    personEl.textContent = person.name1 + ' : ₹' + person.points;
    
}


function render(){

    if (sum < 21){
        message = "Do You want to draw a new card !"
        
    }
    else if ( sum ===21){
        message = "Booyah ! You got a Black Jack ! "
        isBlackJack = true;
        person.points+=100;
        isAlive = false;

    }
    else {
        message = "You are out of the Game "
        isAlive = false;
    }
    
    messageEl.textContent = message;

    cardEl.textContent = "Cards : "+ cards;
    sumEl.textContent = "Sums : " + sum;

}
function start(){
    if (run<2){
        askName();
        let firstcard = getrandom();
        cards[0] = firstcard;
        sum += cards[0];
        run +=1;
        render();
    }
}

function newcard(){
    if (isAlive==true && isBlackJack==false){
        let nextCard = getrandom();
        cards.push(nextCard)
        sum += nextCard;
        
        render();}
    // start();


}
function reset(){
    document.location.reload(true)
    
}

function help(){
    let ms = "It is a fun game of Playing cards. In this you draw card until you get some to 21 or more. If you got sum 21 you got a Black Jack and you will win the match and if you got greater than you will loose . You can start game again by reset it . "
    alert(ms)
}
