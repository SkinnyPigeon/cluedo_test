var Player = function( name ) {
  this.name = name;
  this.cards = [];
};

Player.prototype = {

  playerName: function() {
    return this.name;
  },

  noOfCards: function() {
    return this.cards.length;
  },

  addCard: function( card ) {
    this.cards.push( card );
  },

  seeSuspect: function() {
    return this.cards[0];
  },

  seeWeapon: function() {
    return this.cards[1];
  },

  seeRoom: function() {
    return this.cards[2];
  },

  guessCharacter: function( character ) {
    return character;
  }
};

module.exports = Player;