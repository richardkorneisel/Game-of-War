// Game of War - Rich Korneisel
let playerOne;
playerOne = prompt ("You are about to play the card game of WAR.  Please enter the first Knights name.");
playerTwo = prompt ("Welcome, Oh honored Knight " + playerOne + "!  Who will you be battling today?");
alert ("Welcome also, honored Knight " + playerTwo + "!");
alert ("You will both start with 26 Knights at your disposal");
alert ("Shall we begin");
class Card {                                 
    constructor(suit, rank, score) {                // Define card deck class
      this.suit = suit                              // - suit (hearts, spades, clubs, diamonds)
      this.rank = rank                              // - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
      this.score = score                            // - score (1, 2, 3, 4, ... 11, 12, 13)
    }
  }                                                 
  class Deck {                                      //Define Deck class with properties and methods. - length (the number of cards - should start at 52) - cards (an array of cards in the deck) - draw: return a random card from the cards array 
    constructor() {                                 //don't need parameters in constructor unless asking for user input
      const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
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
    constructor(deck){                                // Split random deck between two players
        let playerOneDeck = [];
        let playerTwoDeck = [];
        for (let i=0; i<deck.length/2; i++) {         // Push half of deck to each player
            playerOneDeck.push(deck.cards.shift());
            playerTwoDeck.push(deck.cards.shift());
        }
        this.playerOneDeck = playerOneDeck;            // Define each players deck
        this.playerTwoDeck = playerTwoDeck;
    }
        
    playGame (playerOne, playerTwo) {          // Create playerOne and playerTwo
                       
        let warSpoilsDeck = [];                // Create temp array to store war cards
        let isWar = false;                     // Create condition for while loop
        
        while (this.playerOneDeck.length !== 0 && this.playerTwoDeck.length !== 0) {    // check if either player array is zero.  If so announce winner.
            if (this.playerOneDeck[0].score > this.playerTwoDeck[0].score) {            // is score of playerone's array position [0] card greater than playertwo's
                console.log (playerOne + " Wins Battle!");                              // if true declare playerOne winner of battle
                console.log (playerOne + "'s " + this.playerOneDeck[0].rank + " of " + this.playerOneDeck[0].suit + " beats");
                console.log (playerTwo + "'s " + this.playerTwoDeck[0].rank + " of " + this.playerTwoDeck[0].suit);
                if(isWar){                                                              // if play after war, put cards in warSpoils array into playerOne array
                    let temp = warSpoilsDeck.length;
                    for (let i=0; i<temp; i++) {
                    this.playerOneDeck.push(warSpoilsDeck.shift());
                   }      
                }
                this.playerOneDeck.push(this.playerOneDeck.shift());                    //push compared cards to playerones array
                this.playerOneDeck.push(this.playerTwoDeck.shift());
                console.log (playerOne + " has " + this.playerOneDeck.length + " cards left");
                console.log (playerTwo + " has " + this.playerTwoDeck.length + " cards left");
                console.log ();
                prompt ("Better luck next time Knight " + playerTwo + " Click OK or Enter to commence next battle");
                isWar = false;                                                          //if not war state isWar is false
            } 
            else if (this.playerOneDeck[0].score < this.playerTwoDeck[0].score) {       // is score of playertwo's array position [0] card greater than playerone's
                console.log (playerTwo + " Wins Battle!");                              // if true declare playerTwo winner of battle
                console.log (playerTwo + "'s " + this.playerTwoDeck[0].rank + " of " + this.playerTwoDeck[0].suit + " beats");
                console.log (playerOne + "'s " + this.playerOneDeck[0].rank + " of " + this.playerOneDeck[0].suit);
                if(isWar){                                                              // if play after war, put cards in warSpoils array into playerTwo array
                    let temp = warSpoilsDeck.length;
                    for (let i=0; i<temp; i++) {
                       this.playerTwoDeck.push(warSpoilsDeck.shift());
                   }
                }
                this.playerTwoDeck.push(this.playerOneDeck.shift());                    //push compared cards to playertwos array
                this.playerTwoDeck.push(this.playerTwoDeck.shift());                    //if not war state isWar is false
                console.log (playerOne + " has " + this.playerOneDeck.length + " cards left");
                console.log (playerTwo + " has " + this.playerTwoDeck.length + " cards left");
                console.log ();
                prompt ("Better luck next time Knight " + playerOne + " Click OK or Enter to commence next battle");
                isWar = false;
                }
            else if (this.playerOneDeck[0].score === this.playerTwoDeck[0].score) {     // are score in position [0] equal    
                console.log ("The Battle is a Tie.  This means War!!");                // declare war
                console.log (playerOne + "'s " + this.playerOneDeck[0].rank + " of " + this.playerOneDeck[0].suit + " is equal to");
                console.log (playerTwo + "'s " + this.playerTwoDeck[0].rank + " of " + this.playerTwoDeck[0].suit);
                console.log ("Each player must wager 3 Knights to go to the victor of the next battle");
                console.log ();
                prompt ("Click OK or Enter to commence the WAR!!!");
                isWar = true;                                                           // declare isWar True
                warSpoilsDeck.push(this.playerOneDeck.shift());                         // push equal cards to warSpoilsDeck
                warSpoilsDeck.push(this.playerTwoDeck.shift());
                if (this.playerOneDeck.length < 3) {                                    // see if playerOne has 3 cards.  if either player does not have 3 cards to complete war other player wins
                    console.log(playerOne + " does not have enough forces to war.");
                    console.log(playerTwo + " Wins!!");
                    break;                                                              // end loop and game
                }
                if (this.playerTwoDeck.length < 3) {                                    // see if playerOne has 3 cards.  if either player does not have 3 cards to complete war other player wins
                    console.log(playerTwo + " does not have enough forces to war.");
                    console.log(playerOne + " Wins!!");
                    break;                                                              // end loop and game
                }
                warSpoilsDeck.push(this.playerOneDeck.shift());                         // move 3 cards to warSpoilsDeck from playerOneDeck
                warSpoilsDeck.push(this.playerOneDeck.shift());
                warSpoilsDeck.push(this.playerOneDeck.shift());
                warSpoilsDeck.push(this.playerTwoDeck.shift());                         // move 3 cards to warSpoilsDeck from playerTwoDeck
                warSpoilsDeck.push(this.playerTwoDeck.shift());
                warSpoilsDeck.push(this.playerTwoDeck.shift());
            }
            if (this.playerOneDeck.length == 0) {                                       // Check playerOne deck length
                console.log (playerTwo + " Wins Game!!");                               // if zero playerTwo wins
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);    
                }
            if (this.playerTwoDeck.length == 0) {                                       // Check playerTwo deck length   
                console.log (playerOne = " Wins Game!!");                               // if zero playerOne wins
                console.log (this.playerOneDeck.length);
                console.log (this.playerTwoDeck.length);
                console.log (warSpoilsDeck.length);
                }
        }

            
    }
}

var deck = new Deck();          // constructing new deck of cards from constructor Deck.
  deck.shuffle();               // Call new random array of cards.
//  console.log(deck.cards);      // Check for Deck Creation.  Calling cards array in deck.
//  console.log(deck.length);     // Check for Deck Creation.  Checking length of array.
var game = new PlayGame(deck);  // Call playGame class with random deck
game.playGame(playerOne,playerTwo);   // input players names into playGame
