////////////// global
var isFirstStart = true;
var indexOfLastUserCard=0;
var indexOfLastDealerCard=0;
var indexOfLastDrawnCard =0;
var totalUserCards= 0;
var totalDealerCards = 0;
var bet =0;////////////-
var balance =0;
///// DOM
var total = document.getElementsByClassName("Total");
var useCards = document.getElementsByClassName("user");
var dealerCards = document.getElementsByClassName("dealer");
var options = document.getElementsByClassName("options");
var buttons = document.getElementsByClassName("btn");
var startButton = document.getElementById("START");
var enterdBet = document.getElementsByClassName("cash");
var enterdBalance = document.getElementsByClassName("cash");
var result = document.getElementsByClassName("resultScreen");
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
    startButton.innerHTML = "Play Again";
    startButton.setAttribute("onClick","playAgain()");
    deckShuffle();
    // if(bet==false&&balance==false)
        //  placeBet(); // is nan
    dealerMode(isFirstStart);
    userMode();
}
function playAgain(){
    reset();
    start();
}
//options functions
function placeBet(){

    if(balance==0){//entered bet 
        setBalance();
        }
    setBet();    
} 

function reset(){ // resets everything.
     indexOfLastUserCard=0;
     indexOfLastDealerCard=0;
     indexOfLastDrawnCard =0;
     totalUserCards= 0;
     totalDealerCards = 0;
     isFirstStart = true;
     hideGameResult();
 
     result[0].setAttribute("class","resultScreen");
     result[1].setAttribute("class","resultScreen"); 
     buttons[5].style.visibility="visible";
     enterdBet[0].innerHTML="Placed bet &dollar; 0";
     for(var i=0;i< useCards.length;i++){
        useCards[i].setAttribute("src","../BlackJack/download.jpg");
        dealerCards[i].setAttribute("src","../BlackJack/download.jpg");
        dealerCards[i].style.opacity="0";
        useCards[i].style.opacity ="0";}

    //  setBet();
}

function cardValueCheck(card,totalCards){
    var cardSrc = card.src;
    var indexOfCard = cardSrc.slice(-8)
    indexOfCard = indexOfCard.slice(indexOfCard.indexOf("/"));

  switch(indexOfCard){
      case "/1s.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "/2s.jpg":
        return 2;
        
        case "/3s.jpg":
        return 3;
        
        case "/4s.jpg":
        return 4;
        
        case "/5s.jpg":
        return 5;
        
        case "/6s.jpg":
        return 6;
        
        case "/7s.jpg":
        return 7;
        
        case "/8s.jpg":
        return 8;
        
        case "/9s.jpg":
        return 9;
        
        case "/10s.jpg":
        return 10;
        
        case "/js.jpg":
        return 10;
        
        case "/qs.jpg":
        return 10;
        
        case "/ks.jpg":
        return 10;
        
        case "/1h.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "/2h.jpg":
        return 2;
        
        case "/3h.jpg":
        return 3;
        
        case "/4h.jpg":
        return 4;
        
        case "/5h.jpg":
        return 5;
        
        case "/6h.jpg":
        return 6;
        
        case "/7h.jpg":
        return 7;
        
        case "/8h.jpg":
        return 8;
        
        case "/9h.jpg":
        return 9;
        
        case "/10h.jpg":
        return 10;
        
        case "/jh.jpg":
        return 10;
        
        case "/qh.jpg":
        return 10;
        
        case "/kh.jpg":
        return 10;      
        case "/1c.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "/2c.jpg":
        return 2;
        
        case "/3c.jpg":
        return 3;
        
        case "/4c.jpg":
        return 4;
        
        case "/5c.jpg":
        return 5;
        
        case "/6c.jpg":
        return 6;
        
        case "/7c.jpg":
        return 7;
        
        case "/8c.jpg":
        return 8;
        
        case "/9c.jpg":
        return 9;
        
        case "/10c.jpg":
        return 10;
        
        case "/jc.jpg":
        return 10;
        
        case "/kc.jpg":
        return 10;
        
        case "/qc.jpg":
        return 10;      
        case "/1d.jpg":
        if(totalCards+11>21)
            return 1;
        return 11;
        
        case "/2d.jpg":
        return 2;
        
        case "/3d.jpg":
        return 3;
        
        case "/4d.jpg":
        return 4;
        
        case "/5d.jpg":
        return 5;
        
        case "/6d.jpg":
        return 6;
        
        case "/7d.jpg":
        return 7;
        
        case "/8d.jpg":
        return 8;
        
        case "/9d.jpg":
        return 9;
        
        case "/10d.jpg":
        return 10;
        
        case "/jd.jpg":
        return 10;
        
        case "/qd.jpg":
        return 10;
        
        case "/kd.jpg":
        return 10;
        default:
            console.log("no cards match");
  }
    
} 
/////////////////// utility and background functions
function hideButtons(){options[0].style.visibility="hidden";startButton.style.visibility="visible";hideSurrender();}
function hideSurrender(){
    if(isFirstStart==false)
        buttons[5].style.visibility="hidden"
        
}
function addCard(numOfcardsToAdd,isUser){
    placeSnd = new Audio("../BlackJack - Copy/media/cardPlace.wav");
    if (isUser){
     for(var i=0; i < numOfcardsToAdd;i++){
         useCards[indexOfLastUserCard].setAttribute("src",playingCards[indexOfLastDrawnCard]);
         useCards[indexOfLastUserCard].style.opacity ="1";
         totalUserCards += cardValueCheck( useCards[indexOfLastUserCard],totalUserCards);
         placeSnd.play();
         indexOfLastUserCard++;
         indexOfLastDrawnCard++;}
     }
     else
         for(var i=0; i < numOfcardsToAdd;i++){
             dealerCards[indexOfLastDealerCard].setAttribute("src",playingCards[indexOfLastDrawnCard]);
             dealerCards[indexOfLastDealerCard].style.opacity="1";
             totalDealerCards += cardValueCheck( dealerCards[indexOfLastDealerCard],totalDealerCards);
             placeSnd.play();
             indexOfLastDealerCard++;
             indexOfLastDrawnCard++;
         }
      
     
 
 } 
function deckShuffle(){
    var sound = new Audio("../BlackJack - Copy/media/cardFan.wav");
    sound.play();
    var random;
    var tempContainer = 0;
    for(var i =0;i < playingCards.length;i++){
        random = Math.floor(  Math.random()*(playingCards.length));
        tempContainer = playingCards[i];
        playingCards[i] = playingCards[random];
        playingCards[random] = tempContainer;
    }
}
function setTotalUser(){
        
    total[1].innerHTML="Total: "+totalUserCards;
}  
function setTotalDealer(){
        
    total[0].innerHTML="Total: "+totalDealerCards;
    
}  

function dealerMode(fStart){
    if(fStart){
        hitUser(fStart);
        hitDealer();
        isFirstStart= false;
        return;
    }
     else{
         while(totalDealerCards<17)
             hitDealer();
        

     }checkWinner();
     hideButtons();
}
function userMode(){
    options[0].style.visibility = "visible";
}
function hitUser(fStart){
    if(fStart){
        addCard(2,true);
        setTotalUser();}
    else{
        addCard(1,true);
        setTotalUser();
        bustCheck(totalUserCards);
        hideSurrender();
        
        // checkWinner();
    }
}
function hitDealer(){
    
        addCard(1,false);
        setTotalDealer();
    
}
//////////// options 
function hit(){hitUser(isFirstStart);}
function stand(){dealerMode(isFirstStart);}
 function doubleDown(){
      hitUser(isFirstStart);
      stand();
 }
function split(){}
function surrender(){
    balance-= bet*.5;
    options[0].style.visibility = "hidden";
    hideSurrender();
    enterdBalance[1].innerHTML="Balance &dollar; "+balance;
    enterdBet[0].innerHTML="Placed bet &dollar; "+0;
    startButton.style.visibility = "visible";
}

// WINING CONDITIONS AND MONEY MANAGMENT

function setBalance(){
    balance = parseInt(prompt("Enter Balance","200"));
    enterdBalance[1].innerHTML="Balance &dollar; "+balance;
}

function setBet(){
    bet = parseInt(prompt("Enter your bets please","100"));
    if(bet <= balance){
        balance-=bet;
        enterdBalance[1].innerHTML="Balance &dollar; "+balance;
        enterdBet[0].innerHTML="Placed bet &dollar; "+bet;}
//     else
//     alert("Not enough funds");
}

function checkWinner(){if(totalDealerCards>totalUserCards&&totalDealerCards<=21){
    GameResult(1);
}else if(totalDealerCards==totalUserCards)
    push();
else if(totalDealerCards>21)
    GameResult(0);
else if(totalUserCards > totalDealerCards && totalUserCards<=21)
    GameResult(0);
else if(totalUserCards>21){
    GameResult(1);
    hideButtons();
    }
}// devide into two functions inside one function 

function bustCheck(totalsum){
    if(totalsum>21){
        GameResult(1);
        hideButtons();
        
    }
}

function push(){
    
    // enterdBalance[1].innerHTML="Balance &dollar; "+balance;
    // enterdBet[0].innerHTML="Placed bet &dollar; "+0;
    result[0].style.display ="inline-block";
    result[1].style.display ="inline-block";
    result[0].innerHTML = "push";
    result[1].innerHTML = "push";
    result[0].setAttribute("class","resultScreen push");
    result[1].setAttribute("class","resultScreen push");   
}  
function GameResult(winner){
        result[0].style.display ="inline-block";
        result[1].style.display ="inline-block";
        if(winner){
            
            result[0].innerHTML = "Win";
            result[0].setAttribute("class","resultScreen win");
            result[1].innerHTML = "lose";
        } else{
            result[1].innerHTML = "Win";
            result[1].setAttribute("class","resultScreen win");
            result[0].innerHTML = "lose";
        }


}



function hideGameResult(){
    result[0].style.display ="none";
    result[1].style.display ="none";
}

function addCardSlot(){
    var slots = getElementsByClassName("slots");
    
}


//////task List////////////////////////////////////////////////////////////
////
//split button                                                          //
//style improvment                                                      //
///black jack                                                           //
//sounds                                                               //
//refactor hard                                                       //
// cancel                                                             //
//when the button is pressed and stay pressed if the user have no funds //  
//need  to fix the balance and bets                                     //
// push needs adjustment (money managment)                              //
//double needs adjustment(money managment)                              //
//////////////////////////////////////////////////////////////////////////





//code chunks scrap

// function checkWinner(){
//     push();
//     if(totalDealerCards>totalUserCards&&totalDealerCards<=21){
//     alert("the house wins")
//     loseBet();
// }
// else if(totalDealerCards>21){
//     alert("you win!");
//     winBet();}
// else if(totalUserCards > totalDealerCards && totalUserCards<=21){
//     alert("u win!")
//     winBet();}
// else if(totalUserCards>21)
//     alert("house wins!");
//     loseBet();
//     }

// function loseBet(){enterdBalance[1].innerHTML="Balance &dollar; "+(balance-bet);enterdBet[0].innerHTML="Placed bet &dollar; "+0;}


// function winBet(){
//     balance+=bet*2;    
//     enterdBalance[1].innerHTML="Balance &dollar; "+balance;
//     enterdBet[0].innerHTML="Placed bet &dollar; "+0;}

    // function pushBet(){
//     balance+=bet;
//     enterdBalance[1].innerHTML="Balance &dollar;"+balance;
//     enterdBet[0].innerHTML="Placed bet &dollar; "+0;
// }