/*
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 */
class Card {                                 
    constructor(suit, rank, score) {
      this.suit = suit
      this.rank = rank
      this.score = score
    }
  }                                                 //Define Deck class with properties and methods. - length (the number of cards - should start at 52) - cards (an array of cards in the deck) - draw: return a random card from the cards array
  class Deck {                                      //Define Deck class with properties and methods.  
    constructor() {                                 //don't need parameters in constructor unless asking for user input
      const suits = ['spades', 'clubs', 'diamonds', 'hearts'];
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
      var cards = [];                               // creating an array to store cards
        for(let i=0; i<suits.length; i++) {         // nested for loop.  Loop of cards inside loops of 
          for(let j=0; j<values.length; j++) {
            var newCard = new Card (suits[i], values[j], j)  //create card suit, then value, then rank.
            cards.push(newCard);
          }
        }
      this.length = cards.length                       //refrencing the length of the cards array
      this.cards = cards                                //defining the cards property as the array
      }
      shuffle(){
        const {shuffledDeck} = cards;       //make shuffleDeck from existing cards array
        let k = deck.length;                //
        let i;
        
        while
      }
  }
  var deck = new Deck();   // constructing new deck of cards from constructor Deck.
  //console.log(deck.cards);  // Check for Deck Creation.  Calling cards array in deck.
  //console.log(deck.length);  // Check for Deck Creation.  Checking length of array.
  
  
  
  
  /*
   
   * When you create an instance of your Deck class (i.e. in your constructor),
   * fill in the cards array with 52 instances of your Card class. You can do
   * this with a nested for loop - first loop through an array of all possible
   * suits, then loop through an array of all possible ranks. Inside your inner
   * loop, create an instance of your Card class and push it into the Deck's cards
   * array.
   *
   * Instantiate an instance of your Deck and start drawing random cards!
   */
