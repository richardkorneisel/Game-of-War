// Game of War - Rich Korneisel
class Card {                                 
    constructor(suit, rank, score) {                // Define card deck class
      this.suit = suit                              // - suit (hearts, spades, clubs, diamonds)
      this.rank = rank                              // - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
      this.score = score                            // - score (1, 2, 3, 4, ... 11, 12, 13)
    }
  }                                                 
  class Deck {                                      //Define Deck class with properties and methods. - length (the number of cards - should start at 52) - cards (an array of cards in the deck) - draw: return a random card from the cards array 
    constructor() {                                 //don't need parameters in constructor unless asking for user input
      const suits = ['spades', 'clubs', 'diamonds', 'hearts'];
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
      var cards = [];                               // creating an array to store cards
        for(let i=0; i<suits.length; i++) {         // nested for loop.  Loop of ranks inside loop of suits. 
          for(let j=0; j<values.length; j++) {
            var newCard = new Card (suits[i], values[j], j)  //create card suit, then value, then rank.
            cards.push(newCard);
          }
        }
      this.length = cards.length                       //referencing the length of the cards array
      this.cards = cards                               //defining the cards property as the array
      }
  // Shuffle Deck
      shuffle(){
        for (let i=this.cards.length - 1; i > 0, i--;) {
        let randomPosition = Math.floor(Math.random() * i);  //Math.random generates floating point random number between 0 and 1, Math.floor returns floating point number back to an integer
        let temp = this.cards[i];                            // Move cards to different positions in arrays.
        this.cards[i] = this.cards[randomPosition];
        this.cards[randomPosition] = temp;  
        }
    }
}
 
class PlayGame {
    constructor(deck){
        let playerOneDeck = [];
        let playerTwoDeck = [];
        for (let i=0; i<deck.length/2; i++) {
            playerOneDeck.push(deck.cards.shift());
            playerTwoDeck.push(deck.cards.shift());
        }
        this.playerOneDeck = playerOneDeck;
        this.playerTwoDeck = playerTwoDeck;
    }
        
    playGame (playerOne, playerTwo) {          // Create playerOne and playerTwo
                       
        let warSpoilsDeck = [];
        let isWar = false;
        
        while (this.playerOneDeck.length !== 0 && this.playerTwoDeck.length !== 0) {
            if (this.playerOneDeck[0].score > this.playerTwoDeck[0].score) {
                console.log (playerOne + " Wins Battle!");
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);
                if(isWar){
                    let temp = warSpoilsDeck.length;
                    for (let i=0; i<temp; i++) {
                    this.playerOneDeck.push(warSpoilsDeck.shift());
                   }      
                }
                this.playerOneDeck.push(this.playerOneDeck.shift());
                this.playerOneDeck.push(this.playerTwoDeck.shift());
                isWar = false;
            } 
            else if (this.playerOneDeck[0].score < this.playerTwoDeck[0].score) { 
                console.log (playerTwo + " Wins Battle!");
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);
                if(isWar){
                    let temp = warSpoilsDeck.length;
                    for (let i=0; i<temp; i++) {
                       this.playerTwoDeck.push(warSpoilsDeck.shift());
                   }

                }
                this.playerTwoDeck.push(this.playerOneDeck.shift());
                this.playerTwoDeck.push(this.playerTwoDeck.shift());
                isWar = false;
                }
            else if (this.playerOneDeck[0].score === this.playerTwoDeck[0].score) {
                console.log ("The Battle is a Tie. /n This means War!!");
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);
                isWar = true; 
                warSpoilsDeck.push(this.playerOneDeck.shift());
                warSpoilsDeck.push(this.playerTwoDeck.shift());
                if (this.playerOneDeck.length < 3) {
                    console.log(playerOne + " does not have enough forces to war.");
                    console.log(playerTwo + " Wins!!");
                    break;
                }
                if (this.playerTwoDeck.length < 3) {
                    console.log(playerTwo + " does not have enough forces to war.");
                    console.log(playerOne + " Wins!!");
                    break;
                }
                warSpoilsDeck.push(this.playerOneDeck.shift());
                warSpoilsDeck.push(this.playerOneDeck.shift());
                warSpoilsDeck.push(this.playerOneDeck.shift());
                warSpoilsDeck.push(this.playerTwoDeck.shift());
                warSpoilsDeck.push(this.playerTwoDeck.shift());
                warSpoilsDeck.push(this.playerTwoDeck.shift());
            }
            if (this.playerOneDeck.length == 0) {      // Check playerOne deck length
                console.log (playerTwo + " Wins Game!!");          // if zero playerTwo wins
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);    
                }
            if (this.playerTwoDeck.length == 0) {      // Check playerTwo deck length   
                console.log (playerOne = " Wins Game!!");          // if zero playerOne wins
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);
                }
        }

            
    }
}

var deck = new Deck();   // constructing new deck of cards from constructor Deck.
  deck.shuffle();           // Call new random array of cards.
  console.log(deck.cards);  // Check for Deck Creation.  Calling cards array in deck.
  console.log(deck.length);  // Check for Deck Creation.  Checking length of array.
var game = new PlayGame(deck);
//enter player 1 name
game.playGame("Eric","Rich");

	
