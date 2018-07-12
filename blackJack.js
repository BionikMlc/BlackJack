////////////// global
var isFirstStart = true;
var indexOfLastUserCard=0;
var indexOfLastDealerCard=0;
var indexOfLastDrawnCard =0;
var bet;
var total = document.getElementsByClassName("Total");
var balance;
var totalUserCards= 0;
var totalDealerCards = 0;
var useCards = document.getElementsByClassName("user");
var dealerCards = document.getElementsByClassName("dealer");
var options = document.getElementsByClassName("options");
var startButton = document.getElementById("START");
var  playingCards = [
        "../BlackJack/ace of spades/1s.jpg","../BlackJack/ace of spades/2s.jpg","../BlackJack/ace of spades/3s.jpg",
        "../BlackJack/ace of spades/4s.jpg","../BlackJack/ace of spades/5s.jpg","../BlackJack/ace of spades/6s.jpg",
        "../BlackJack/ace of spades/7s.jpg","../BlackJack/ace of spades/8s.jpg","../BlackJack/ace of spades/9s.jpg",
        "../BlackJack/ace of spades/10s.jpg","../BlackJack/ace of spades/js.jpg","../BlackJack/ace of spades/qs.jpg",
        "../BlackJack/ace of spades/ks.jpg","../BlackJack/ace of hearts/1h.jpg","../BlackJack/ace of hearts/2h.jpg",
        "../BlackJack/ace of hearts/3h.jpg","../BlackJack/ace of hearts/4h.jpg","../BlackJack/ace of hearts/5h.jpg",
        "../BlackJack/ace of hearts/6h.jpg","../BlackJack/ace of hearts/7h.jpg","../BlackJack/ace of hearts/8h.jpg",
        "../BlackJack/ace of hearts/9h.jpg","../BlackJack/ace of hearts/10h.jpg","../BlackJack/ace of hearts/jh.jpg",
        "../BlackJack/ace of hearts/qh.jpg","../BlackJack/ace of hearts/kh.jpg","../BlackJack/ace of clubs/1c.jpg",
        "../BlackJack/ace of clubs/2c.jpg","../BlackJack/ace of clubs/3c.jpg","../BlackJack/ace of clubs/4c.jpg",
        "../BlackJack/ace of clubs/5c.jpg","../BlackJack/ace of clubs/6c.jpg","../BlackJack/ace of clubs/7c.jpg",
        "../BlackJack/ace of clubs/8c.jpg","../BlackJack/ace of clubs/9c.jpg","../BlackJack/ace of clubs/10c.jpg",
        "../BlackJack/ace of clubs/jc.jpg","../BlackJack/ace of clubs/qc.jpg","../BlackJack/ace of clubs/kc.jpg",
        "../BlackJack/ace of diamonds/1d.jpg","../BlackJack/ace of diamonds/2d.jpg","../BlackJack/ace of diamonds/3d.jpg",
        "../BlackJack/ace of diamonds/4d.jpg","../BlackJack/ace of diamonds/5d.jpg","../BlackJack/ace of diamonds/6d.jpg",
        "../BlackJack/ace of diamonds/7d.jpg","../BlackJack/ace of diamonds/8d.jpg","../BlackJack/ace of diamonds/9d.jpg",
        "../BlackJack/ace of diamonds/10d.jpg","../BlackJack/ace of diamonds/jd.jpg","../BlackJack/ace of diamonds/qd.jpg",
        "../BlackJack/ace of diamonds/kd.jpg"];
///////////// end of Global

///////////// functions

function start(){
    startButton.style.visibility = "hidden";
    startButton.innerHTML = "play again";
    deckShuffle();
    placeBet(); // is nan
    dealerMode(isFirstStart);
    userMode();
    
}
function playAgain(){

}
//options functions
function placeBet(){
    balance = parseInt(prompt("Enter balance","200"));
     bet = parseInt(prompt("Enter your bit plz","100"));
    var enterdBet = document.getElementsByClassName("cash");
    var enterdBalance = document.getElementsByClassName("cash");
    enterdBet[0].innerHTML="Placed bet &dollar; "+bet;
    enterdBalance[1].innerHTML="Balance &dollar; "+(balance - bet);
} // places a bit
function addCard(numOfcardsToAdd,isUser){

   if (isUser){
    for(var i=0; i < numOfcardsToAdd;i++){
        useCards[indexOfLastUserCard].setAttribute("src",playingCards[indexOfLastDrawnCard]);
        totalUserCards += cardValueCheck( useCards[indexOfLastUserCard].src,totalUserCards);
        indexOfLastUserCard++;
        indexOfLastDrawnCard++;}
    }
    else
        for(var i=0; i < numOfcardsToAdd;i++){
            dealerCards[indexOfLastDealerCard].setAttribute("src",playingCards[indexOfLastDrawnCard]);
            totalDealerCards += cardValueCheck( dealerCards[indexOfLastDealerCard].src,totalDealerCards);
            indexOfLastDealerCard++;
            indexOfLastDrawnCard++;
        }
     
    

} 
// double bit and place a card then stand

 // surrender user // half of the bet is lost

function reset(){

} // resets game and other global variables 

function cardValueCheck(card,totalCards){
  switch(card){
      case "../BlackJack/ace%20of%20spades/1s.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "../BlackJack/ace%20of%20spades/2s.jpg":
        return 2;
        
        case "../BlackJack/ace%20of%20spades/3s.jpg":
        return 3;
        
        case "../BlackJack/ace%20of%20spades/4s.jpg":
        return 4;
        
        case "../BlackJack/ace%20of%20spades/5s.jpg":
        return 5;
        
        case "../BlackJack/ace%20of%20spades/6s.jpg":
        return 6;
        
        case "../BlackJack/ace%20of%20spades/7s.jpg":
        return 7;
        
        case "../BlackJack/ace%20of%20spades/8s.jpg":
        return 8;
        
        case "../BlackJack/ace%20of%20spades/9s.jpg":
        return 9;
        
        case "../BlackJack/ace%20of%20spades/10s.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20spades/js.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20spades/qs.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20spades/ks.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20hearts/1h.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "../BlackJack/ace%20of%20hearts/2h.jpg":
        return 2;
        
        case "../BlackJack/ace%20of%20hearts/3h.jpg":
        return 3;
        
        case "../BlackJack/ace%20of%20hearts/4h.jpg":
        return 4;
        
        case "../BlackJack/ace%20of%20hearts/5h.jpg":
        return 5;
        
        case "../BlackJack/ace%20of%20hearts/6h.jpg":
        return 6;
        
        case "../BlackJack/ace%20of%20hearts/7h.jpg":
        return 7;
        
        case "../BlackJack/ace%20of%20hearts/8h.jpg":
        return 8;
        
        case "../BlackJack/ace%20of%20hearts/9h.jpg":
        return 9;
        
        case "../BlackJack/ace%20of%20hearts/10h.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20hearts/jh.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20hearts/qh.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20hearts/kh.jpg":
        return 10;      
        case "../BlackJack/ace%20of%20clubs/1c.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "../BlackJack/ace%20of%20clubs/2c.jpg":
        return 2;
        
        case "../BlackJack/ace%20of%20clubs/3c.jpg":
        return 3;
        
        case "../BlackJack/ace%20of%20clubs/4c.jpg":
        return 4;
        
        case "../BlackJack/ace%20of%20clubs/5c.jpg":
        return 5;
        
        case "../BlackJack/ace%20of%20clubs/6c.jpg":
        return 6;
        
        case "../BlackJack/ace%20of%20clubs/7c.jpg":
        return 7;
        
        case "../BlackJack/ace%20of%20clubs/8c.jpg":
        return 8;
        
        case "../BlackJack/ace%20of%20clubs/9c.jpg":
        return 9;
        
        case "../BlackJack/ace%20of%20clubs/10c.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20clubs/jc.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20clubs/kc.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20clubs/qc.jpg":
        return 10;      
        case "../BlackJack/ace%20of%20diamonds/1d.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "../BlackJack/ace%20of%20diamonds/2d.jpg":
        return 2;
        
        case "../BlackJack/ace%20of%20diamonds/3d.jpg":
        return 3;
        
        case "../BlackJack/ace%20of%20diamonds/4d.jpg":
        return 4;
        
        case "../BlackJack/ace%20of%20diamonds/5d.jpg":
        return 5;
        
        case "../BlackJack/ace%20of%20diamonds/6d.jpg":
        return 6;
        
        case "../BlackJack/ace%20of%20diamonds/7d.jpg":
        return 7;
        
        case "../BlackJack/ace%20of%20diamonds/8d.jpg":
        return 8;
        
        case "../BlackJack/ace%20of%20diamonds/9d.jpg":
        return 9;
        
        case "../BlackJack/ace%20of%20diamonds/10d.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20diamonds/jd.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20diamonds/qd.jpg":
        return 10;
        
        case "../BlackJack/ace%20of%20diamonds/kd.jpg":
        return 10;
        default:
            console.log("no cards match");
  }
    
} 
/////////////////// utility and background functions
function hideButton(){}

// function edit(editedText){}

function deckShuffle(){
    var random;
    var tempContainer = 0;
    for(var i =0;i < playingCards.length;i++){
        random = Math.floor(  Math.random()*(playingCards.length+1));
        tempContainer = playingCards[i];
        playingCards[i] = playingCards[random];
        playingCards[random] = tempContainer;
    }
}

function bust(){}

function push(){} // bet is returend to the user if both the  dealer and user have the same sum 

// function userMode(){
//     decision();

// }

function dealerMode(fStart){
    if(fStart){
        hitUser(fStart);
        hitDealer();
        isFirstStart= false;
         /// display buttons so the user can make a decision f
    }
     else{
         while(totalDealerCards<17)
             hitDealer();
        checkWinner();
     }
     

}

function hitUser(fStart){
    if(fStart){
        addCard(2,true);
        setTotalUser();}
    else{
        addCard(1,true);
        setTotalUser();}
}

function hitDealer(){
    
        addCard(1,false);
        setTotalDealer();
    
}

function userMode(){
    options[0].style.visibility = "visible";
    
}
//////////// options 
function hit(){hitUser(isFirstStart);}

function stand(){dealerMode(isFirstStart);} 

// function doubleDown(){
//     hitUser(isFirstStart);

function setTotalUser(){
        
    total[1].innerHTML="Total: "+totalUserCards;
}  
function setTotalDealer(){
        
    total[0].innerHTML="Total: "+totalDealerCards;
}  
// }

function split(){} // splits same valued cards into two hands

function surrender(){

}
function checkWinner(){if(totalDealerCards>totalUserCards&&totalDealerCards<=21){
    alert("the house wins")
}else if(totalDealerCards==totalUserCards)
    alert("push")
else if(totalDealerCards>21)
    alert("you win!");
else if(totalUserCards > totalDealerCards && totalUserCards<=21)
    alert("u win!")
else if(totalUserCards>21)
    alert("house wins!");}
//one card not working