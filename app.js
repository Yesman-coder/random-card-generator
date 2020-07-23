 //Get a random number for the card Rank
 
 function randomizeNumber() {   
    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

    for (card of cards) {
      var result = Math.floor(Math.random()*cards.length+1);
        if (result == 11){
          result = "J";
        } else if (result == 12){
          result = "Q";
        } else if (result == 13){
          result = "K";
        } else result;
    }
    return result;
  }

let number = document.querySelector(".rank");
number.innerHTML = randomizeNumber();
// ===============================================================
 //Get a random suit for the card 

let topSuit = document.querySelector(".top-suit");
let bottomSuit = document.querySelector(".bottom-suit");

function randomizeSuit() {
    let suites = [0, 1, 2, 3];
    let finalSuit = Math.floor(Math.random()*suites.length);
    if(finalSuit == 0) {
        return '&spades;'
      } else if (finalSuit == 1) {
        topSuit.style.color = 'red';
        bottomSuit.style.color = 'red';
        number.style.color = 'red';
        return '&hearts;'
      } else if (finalSuit == 2) {
        return'&clubs;'
      } else if (finalSuit == 3) {
        topSuit.style.color = 'red';
        bottomSuit.style.color = 'red';
        number.style.color = 'red';
        return '&diams;'
      } 
}

topSuit.innerHTML = randomizeSuit();
bottomSuit.innerHTML = topSuit.innerHTML;





